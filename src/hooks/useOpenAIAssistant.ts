import { useState, useEffect, useRef, useCallback } from 'react';
import OpenAI from 'openai';
import { PORTFOLIO_KNOWLEDGE, ASSISTANT_INSTRUCTIONS } from '../data/portfolio-knowledge';
import { AssistantState } from '../types/chat';

export const useOpenAIAssistant = () => {
  const [state, setState] = useState<AssistantState>({
    isInitialized: false,
    isInitializing: false,
    error: null,
    assistantId: null,
    threadId: null
  });

  const openaiRef = useRef<OpenAI | null>(null);

  // Initialize OpenAI client
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      setState(prev => ({ 
        ...prev, 
        error: 'OpenAI API key not found. Please add NEXT_PUBLIC_OPENAI_API_KEY to your .env.local file.' 
      }));
      return;
    }

    openaiRef.current = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true // Note: Only for demo purposes
    });
  }, []);

  const uploadKnowledgeFiles = useCallback(async (openai: OpenAI) => {
    const fileIds: string[] = [];
    
    for (const [filename, content] of Object.entries(PORTFOLIO_KNOWLEDGE)) {
      try {
        const blob = new Blob([content], { type: 'text/markdown' });
        const file = new File([blob], filename, { type: 'text/markdown' });

        const uploadedFile = await openai.files.create({
          file: file,
          purpose: 'assistants'
        });

        fileIds.push(uploadedFile.id);
        console.log(`✅ Uploaded ${filename}`);
      } catch (error) {
        console.error(`❌ Failed to upload ${filename}:`, error);
      }
    }

    return fileIds;
  }, []);

  const createVectorStore = useCallback(async (openai: OpenAI, fileIds: string[]) => {
    try {
      const vectorStore = await openai.beta.vectorStores.create({
        name: "Bethany's Portfolio Knowledge Base",
        file_ids: fileIds
      });
      
      console.log(`✅ Created vector store: ${vectorStore.id}`);
      return vectorStore.id;
    } catch (error) {
      console.error('❌ Failed to create vector store:', error);
      throw error;
    }
  }, []);

  const initializeAssistant = useCallback(async () => {
    if (!openaiRef.current || state.isInitializing || state.isInitialized) return;

    setState(prev => ({ ...prev, isInitializing: true, error: null }));

    try {
      console.log('🚀 Initializing OpenAI Assistant...');

      // Upload knowledge base files
      const fileIds = await uploadKnowledgeFiles(openaiRef.current);

      // Create assistant
      const assistant = await openaiRef.current.beta.assistants.create({
        name: process.env.NEXT_PUBLIC_ASSISTANT_NAME || "Bethany's Portfolio Assistant",
        instructions: ASSISTANT_INSTRUCTIONS,
        model: "gpt-4o",
        tools: [
          { type: "file_search" },
          {
            type: "function",
            function: {
              name: "download_resume",
              description: "Trigger download of Bethany's resume",
              parameters: {
                type: "object",
                properties: {
                  format: {
                    type: "string",
                    enum: ["pdf"],
                    description: "Resume format"
                  }
                },
                required: ["format"]
              }
            }
          }
        ],
        tool_resources: {
          file_search: {
            vector_store_ids: fileIds.length > 0 ? [await createVectorStore(openaiRef.current, fileIds)] : []
          }
        }
      });

      // Create thread
      const thread = await openaiRef.current.beta.threads.create();

      setState(prev => ({
        ...prev,
        isInitialized: true,
        isInitializing: false,
        assistantId: assistant.id,
        threadId: thread.id
      }));

      console.log('✅ Assistant initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize assistant:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unknown error',
        isInitializing: false
      }));
    }
  }, [uploadKnowledgeFiles, createVectorStore, state.isInitializing, state.isInitialized]);

  // Auto-initialize when component mounts
  useEffect(() => {
    if (openaiRef.current && !state.isInitialized && !state.isInitializing) {
      initializeAssistant();
    }
  }, [initializeAssistant, state.isInitialized, state.isInitializing]);

  const sendMessage = useCallback(async (content: string, mode: string = 'default') => {
    if (!state.assistantId || !state.threadId || !openaiRef.current) {
      throw new Error('Assistant not initialized');
    }

    // Add mode context to message
    let enhancedContent = content;
    if (mode === 'casestudies') {
      enhancedContent = `[CASE STUDIES MODE] ${content}`;
    } else if (mode === 'resume') {
      enhancedContent = `[RESUME MODE] ${content}`;
    } else if (mode === 'about') {
      enhancedContent = `[ABOUT MODE] ${content}`;
    }

    // Add message to thread
    await openaiRef.current.beta.threads.messages.create(state.threadId, {
      role: 'user',
      content: enhancedContent
    });

    // Create run
    const run = await openaiRef.current.beta.threads.runs.create(state.threadId, {
      assistant_id: state.assistantId
    });

    return { runId: run.id, threadId: state.threadId };
  }, [state.assistantId, state.threadId]);

  const pollRunStatus = useCallback(async (
    runId: string, 
    threadId: string, 
    onUpdate: (update: { type: 'completed' | 'error'; content: string }) => void
  ) => {
    if (!openaiRef.current) return;

    const pollInterval = setInterval(async () => {
      try {
        const run = await openaiRef.current!.beta.threads.runs.retrieve(threadId, runId);

        if (run.status === 'completed') {
          clearInterval(pollInterval);
          
          // Get the latest message
          const messages = await openaiRef.current!.beta.threads.messages.list(threadId);
          const latestMessage = messages.data[0];
          
          if (latestMessage.role === 'assistant') {
            const content = latestMessage.content[0]?.text?.value || 'No response';
            onUpdate({ type: 'completed', content });
          }
        } else if (run.status === 'requires_action') {
          // Handle function calls
          const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls || [];
          const toolOutputs = [];

          for (const toolCall of toolCalls) {
            if (toolCall.function.name === 'download_resume') {
              // Trigger resume download
              const link = document.createElement('a');
              link.href = '/assets/Bethany_Resume.pdf';
              link.download = 'Bethany_Designer_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

              toolOutputs.push({
                tool_call_id: toolCall.id,
                output: 'Resume download started successfully!'
              });
            }
          }

          // Submit tool outputs
          if (toolOutputs.length > 0) {
            await openaiRef.current!.beta.threads.runs.submitToolOutputs(threadId, runId, {
              tool_outputs: toolOutputs
            });
          }
        } else if (run.status === 'failed') {
          clearInterval(pollInterval);
          onUpdate({ type: 'error', content: 'Assistant failed to respond' });
        }
      } catch (error) {
        clearInterval(pollInterval);
        onUpdate({ 
          type: 'error', 
          content: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }, 1000);

    // Cleanup after 30 seconds
    setTimeout(() => {
      clearInterval(pollInterval);
      onUpdate({ type: 'error', content: 'Response timeout' });
    }, 30000);
  }, []);

  return {
    ...state,
    sendMessage,
    pollRunStatus,
    retry: initializeAssistant
  };
};