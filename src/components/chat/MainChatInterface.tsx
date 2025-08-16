import React, { useState, useRef, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { ASSISTANT_INSTRUCTIONS } from '@/data/assistant-config';
import { MotionGridDemo } from '@/components/sections/motion-grid-demo';
import { useQuickActions } from '@/hooks/useChat';

interface ChatButton {
  id: string;
  text: string;
  icon?: string;
  action: string;
  variant: 'primary' | 'secondary' | 'outline';
  linkType: 'internal' | 'external';
  url?: string;
  context?: any;
}

interface MessageContent {
  message: string;
  buttons?: ChatButton[];
  metadata?: {
    level: number;
    section: string;
  };
}

interface Message {
  type: 'assistant' | 'user';
  content: MessageContent | string;
  isButtonAction?: boolean;
}

// Message formatting utility
const formatMessage = (message: string): string => {
  if (!message) return '';
  
  // Clean up markdown symbols and formatting
  const cleanedMessage = message
    // Remove markdown headers (###, ##, #)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers (**text**, *text*)
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    // Remove code blocks (```text```)
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code (`text`)
    .replace(/`([^`]+)`/g, '$1')
    // Remove links [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove horizontal rules (---, ***)
    .replace(/^[-*_]{3,}$/gm, '')
    // Remove blockquotes (> text)
    .replace(/^>\s*/gm, '')
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
  
  // Split by double newlines to preserve paragraph breaks
  const paragraphs = cleanedMessage.split('\n\n');
  
  return paragraphs.map(paragraph => {
    // Check if paragraph starts with bullet points or numbered lists
    if (paragraph.trim().match(/^[\-\*•]\s/)) {
      // Handle bullet points
      const lines = paragraph.split('\n');
      return lines.map(line => {
        if (line.trim().match(/^[\-\*•]\s/)) {
          return `• ${line.trim().replace(/^[\-\*•]\s/, '')}`;
        }
        return line;
      }).join('\n');
    } else if (paragraph.trim().match(/^\d+\.\s/)) {
      // Handle numbered lists
      const lines = paragraph.split('\n');
      let counter = 1;
      return lines.map(line => {
        if (line.trim().match(/^\d+\.\s/)) {
          return `${counter++}. ${line.trim().replace(/^\d+\.\s/, '')}`;
        }
        return line;
      }).join('\n');
    }
    
    return paragraph;
  }).join('\n\n');
};

const MainChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { quickActions } = useQuickActions();

  // Initialize with greeting message
  useEffect(() => {
    const initialMessage: Message = {
      type: 'assistant',
      content: {
        message: "Hi! I'm Bethany, a product designer and developer. I'd love to help you learn more about my work and experience. What would you like to know?",
        buttons: [
          {
            id: "btn_portfolio",
            text: "My Work",
            action: "VIEW_PORTFOLIO",
            variant: "primary" as const,
            linkType: "internal" as const
          },
          {
            id: "btn_experience", 
            text: "Experience",
            action: "VIEW_EXPERIENCE",
            variant: "secondary" as const,
            linkType: "internal" as const
          },
          {
            id: "btn_skills",
            text: "Skills",
            action: "VIEW_SKILLS",
            variant: "secondary" as const,
            linkType: "internal" as const
          },
          {
            id: "btn_about",
            text: "About Me",
            action: "LEARN_ABOUT",
            variant: "outline" as const,
            linkType: "internal" as const
          },
          {
            id: "btn_contact",
            text: "Contact Me",
            action: "CONTACT_ME",
            variant: "primary" as const,
            linkType: "internal" as const
          },
          {
            id: "btn_resume",
            text: "Resume",
            action: "DOWNLOAD_RESUME",
            variant: "secondary" as const,
            linkType: "internal" as const
          }
        ]
      }
    };
    setMessages([initialMessage]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserInputSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: Message = {
      type: 'user',
      content: userInput.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput.trim(),
          messages: [...messages, userMessage],
          instructions: ASSISTANT_INSTRUCTIONS
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      if (data.message) {
        const assistantMessage: Message = {
          type: 'assistant',
          content: data.message
        };
        setMessages(prev => [...prev, assistantMessage]);
        
        // Handle resume download if present
        if (data.message.downloadUrl && data.message.downloadUrl.includes('Bethany_Resume.pdf')) {
          const link = document.createElement('a');
          link.href = data.message.downloadUrl;
          link.download = 'Bethany_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        type: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = async (button: ChatButton) => {
    if (isLoading) return;

    const buttonMessage: Message = {
      type: 'user',
      content: button.text,
      isButtonAction: true
    };

    setMessages(prev => [...prev, buttonMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `[BUTTON_ACTION: ${button.action}]`,
          instructions: ASSISTANT_INSTRUCTIONS,
          buttonAction: button.action
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      if (data.message) {
        const assistantMessage: Message = {
          type: 'assistant',
          content: data.message
        };
        setMessages(prev => [...prev, assistantMessage]);
        
        // Handle resume download if present
        if (data.message.downloadUrl && data.message.downloadUrl.includes('Bethany_Resume.pdf')) {
          const link = document.createElement('a');
          link.href = data.message.downloadUrl;
          link.download = 'Bethany_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        type: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<any>;
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  const renderMessage = (message: Message, index: number) => {
    if (typeof message.content === 'string') {
      return (
        <div key={index} className={`message ${message.type}-message`}>
          <div className="message-content">
            {formatMessage(message.content)}
          </div>
        </div>
      );
    }

    const content = message.content as MessageContent;
    return (
      <div key={index} className={`message ${message.type}-message`}>
        <div className="message-content">
          {formatMessage(content.message)}
        </div>
        {content.buttons && content.buttons.length > 0 && (
          <div className="message-buttons">
            {content.buttons
              .filter(button => button.text && button.text.trim() !== '')
              .map((button) => (
                <button
                  key={button.id}
                  className={`btn btn-${button.variant}`}
                  onClick={() => handleButtonClick(button)}
                  disabled={isLoading}
                  style={{ fontFamily: 'var(--font-mono), "GeistMonoVF", "SF Mono", monospace' }}
                >
                  {button.text}
                </button>
              ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="chat-interface">
      {/* Messages */}
      <div className="chat-messages">
        {messages.map((message, index) => renderMessage(message, index))}
        
        {/* Loading Animation */}
        {isLoading && (
          <div className="thinking-animation">
            <MotionGridDemo />
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Combined Input and Buttons Container */}
      <div className="chat-input-and-buttons-container">
        {/* User Input Form */}
        <div className="chat-input-container">
          <form onSubmit={handleUserInputSubmit} className="chat-input-form">
            <div className="input-wrapper">
              <input
                type="text"
                value={userInput}
                onChange={(e) => {
                  console.log('Input changed:', e.target.value);
                  setUserInput(e.target.value);
                }}
                placeholder="Type your question here..."
                className="chat-input"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="send-button"
                disabled={!userInput.trim() || isLoading}
                onClick={() => {
                  console.log('Send button clicked, userInput:', userInput);
                  if (userInput.trim() && !isLoading) {
                    handleUserInputSubmit(new Event('submit') as any);
                  }
                }}
              >
                <LucideIcons.Send size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Main Menu Buttons - Permanently positioned below input */}
        <div className="button-grid main-menu-buttons">
          {([
            {
              id: "btn_portfolio",
              text: "My Work",
              action: "VIEW_PORTFOLIO",
              variant: "primary" as const,
              linkType: "internal" as const
            },
            {
              id: "btn_experience", 
              text: "Experience",
              action: "VIEW_EXPERIENCE",
              variant: "secondary" as const,
              linkType: "internal" as const
            },
            {
              id: "btn_skills",
              text: "Skills",
              action: "VIEW_SKILLS",
              variant: "secondary" as const,
              linkType: "internal" as const
            },
            {
              id: "btn_about",
              text: "About Me",
              action: "LEARN_ABOUT",
              variant: "outline" as const,
              linkType: "internal" as const
            },
            {
              id: "btn_contact",
              text: "Contact Me",
              action: "CONTACT_ME",
              variant: "primary" as const,
              linkType: "internal" as const
            },
            {
              id: "btn_resume",
              text: "Resume",
              action: "DOWNLOAD_RESUME",
              variant: "secondary" as const,
              linkType: "internal" as const
            }
          ] as ChatButton[]).map((button) => (
            <button
              key={button.id}
              className={`btn btn-${button.variant}`}
              onClick={() => handleButtonClick(button)}
              disabled={isLoading}
              style={{ fontFamily: 'var(--font-mono), "GeistMonoVF", "SF Mono", monospace' }}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainChatInterface; 