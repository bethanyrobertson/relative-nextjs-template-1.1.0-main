// Temporarily disabled due to TypeScript errors
// This file contains complex OpenAI API integration that has type compatibility issues
// It will be re-enabled once the API types are properly configured

/*
import { useState, useEffect, useRef, useCallback } from 'react';
import OpenAI from 'openai';
import { PORTFOLIO_KNOWLEDGE, ASSISTANT_INSTRUCTIONS } from '../data/portfolio-knowledge';
import { AssistantState } from '../components/types/chat';

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
        ]
      });

      console.log(`✅ Created assistant: ${assistant.id}`);

      // Create thread
      const thread = await openaiRef.current.beta.threads.create();
      console.log(`✅ Created thread: ${thread.id}`);

      setState(prev => ({
        ...prev,
        isInitialized: true,
        isInitializing: false,
        assistantId: assistant.id,
        threadId: thread.id
      }));

      console.log('🎉 OpenAI Assistant initialized successfully!');
    } catch (error) {
      console.error('❌ Failed to initialize OpenAI Assistant:', error);
      setState(prev => ({
        ...prev,
        isInitializing: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }));
    }
  }, [state.isInitializing, state.isInitialized]);

  const sendMessage = useCallback(async (message: string) => {
    if (!openaiRef.current || !state.assistantId || !state.threadId) {
      throw new Error('Assistant not initialized');
    }

    try {
      // Add message to thread
      await openaiRef.current.beta.threads.messages.create(state.threadId, {
        role: 'user',
        content: message
      });

      // Create run
      const run = await openaiRef.current.beta.threads.runs.create(state.threadId, {
        assistant_id: state.assistantId
      });

      // Wait for run to complete
      let runStatus = await openaiRef.current.beta.threads.runs.retrieve(state.threadId, run.id);
      
      while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await openaiRef.current.beta.threads.runs.retrieve(state.threadId, run.id);
      }

      if (runStatus.status === 'completed') {
        // Get messages
        const messages = await openaiRef.current.beta.threads.messages.list(state.threadId);
        const lastMessage = messages.data[0];
        
        if (lastMessage && lastMessage.content[0] && 'text' in lastMessage.content[0]) {
          return lastMessage.content[0].text.value;
        }
      } else if (runStatus.status === 'failed') {
        throw new Error('Run failed');
      }

      return 'Sorry, I encountered an error processing your message.';
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }, [state.assistantId, state.threadId]);

  const handleToolCalls = useCallback(async (runId: string, toolCalls: any[]) => {
    if (!openaiRef.current || !state.threadId) return;

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
          output: 'Resume download initiated'
        });
      }
    }

    if (toolOutputs.length > 0) {
      await openaiRef.current.beta.threads.runs.submitToolOutputs(state.threadId, runId, {
        tool_outputs: toolOutputs
      });
    }
  }, [state.threadId]);

  return {
    state,
    initializeAssistant,
    sendMessage,
    handleToolCalls
  };
};
*/