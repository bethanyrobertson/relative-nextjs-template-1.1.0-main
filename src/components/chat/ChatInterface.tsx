import React, { useState, useRef, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { ASSISTANT_INSTRUCTIONS } from '@/data/assistant-config';
import { MotionGridDemo } from '@/components/sections/motion-grid-demo';
import { useQuickActions } from '@/hooks/useChat';

interface Button {
  id: string;
  text: string;
  icon: string;
  action: string;
  variant: 'primary' | 'secondary' | 'outline';
  linkType: 'internal' | 'external';
  url?: string;
  context?: any;
}

interface MessageContent {
  message: string;
  buttons?: Button[];
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

const ChatInterface = () => {
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
        message: "Hi! I'm Bethany. How can I help you today?",
        buttons: [
          {
            id: "btn_portfolio",
            text: "My Work",
            icon: "palette",
            action: "VIEW_PORTFOLIO",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "btn_experience", 
            text: "Experience",
            icon: "briefcase",
            action: "VIEW_EXPERIENCE",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "btn_skills",
            text: "Skills",
            icon: "zap",
            action: "VIEW_SKILLS",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "btn_about",
            text: "About Me",
            icon: "user",
            action: "LEARN_ABOUT",
            variant: "outline",
            linkType: "internal"
          },
          {
            id: "btn_contact",
            text: "Contact Me",
            icon: "mail",
            action: "CONTACT_ME",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "btn_resume",
            text: "Resume",
            icon: "download",
            action: "DOWNLOAD_RESUME",
            variant: "secondary",
            linkType: "internal"
          }
        ],
        metadata: {
          level: 1,
          section: "triage"
        }
      }
    };
    setMessages([initialMessage]);
    
    // Ensure initial message is visible
    setTimeout(scrollToShowLatestMessage, 100);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enhanced auto-scroll to ensure recent messages are always visible
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [messages]);

  // Force scroll to bottom when new message arrives
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  // Scroll to show the start of the latest message
  const scrollToShowLatestMessage = () => {
    const chatMessages = document.querySelector('.chat-messages');
    if (chatMessages && messages.length > 0) {
      const lastMessage = chatMessages.lastElementChild;
      if (lastMessage) {
        lastMessage.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        // Add some padding by scrolling up a bit
        chatMessages.scrollTop -= 20;
      }
    }
  };

  // Copy email to clipboard function
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('bethany@bethanyrobertson.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Open LinkedIn in new tab
  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/bethany-robertson', '_blank');
  };

  // Download resume function
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Bethany_Resume.pdf';
    link.download = 'Bethany_Robertson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Send message to OpenAI
  const sendToOpenAI = async (userMessage: string, context: any = {}): Promise<MessageContent> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          context: context,
          systemPrompt: ASSISTANT_INSTRUCTIONS
        }),
      });

      const data = await response.json();
      
      // The API now returns the parsed JSON object directly
      let assistantResponse: MessageContent;
      if (typeof data.message === 'object' && data.message !== null) {
        // API returned parsed JSON object
        assistantResponse = data.message;
      } else {
        // Fallback if response isn't in expected format
        assistantResponse = {
          message: typeof data.message === 'string' ? data.message : 'Sorry, I encountered an error.',
          buttons: [],
          metadata: {
            level: 1,
            section: "general"
          }
        };
      }

      return assistantResponse;

    } catch (error) {
      console.error('Error:', error);
      // Return error message
      return {
        message: "Sorry, I'm having trouble connecting right now. Please try again.",
        buttons: [{
          id: "retry",
          text: "Try Again",
          icon: "refresh-cw",
          action: "START_OVER",
          variant: "primary",
          linkType: "internal"
        }]
      };
    }
  };

  // Handle button clicks
  const handleButtonClick = (button: Button) => {
    console.log('Button clicked:', button);
    
    if (button.linkType === 'external') {
      // Handle external links
      if (button.url?.startsWith('mailto:')) {
        window.location.href = button.url;
      } else if (button.url?.startsWith('http')) {
        window.open(button.url, '_blank');
      } else if (button.url) {
        // Internal route navigation
        window.location.href = button.url;
      }
    } else {
      // Handle internal chat actions
      if (button.action === 'MAIN_MENU') {
        // Show main menu with ONLY the original 5 buttons - no additional text or buttons
        const mainMenuMessage: Message = {
          type: 'assistant',
          content: {
            message: "", // No message text - just buttons
            buttons: [
              {
                id: "btn_portfolio",
                text: "My Work",
                icon: "palette",
                action: "VIEW_PORTFOLIO",
                variant: "primary",
                linkType: "internal"
              },
              {
                id: "btn_experience", 
                text: "Experience",
                icon: "briefcase",
                action: "VIEW_EXPERIENCE",
                variant: "secondary",
                linkType: "internal"
              },
              {
                id: "btn_skills",
                text: "Skills",
                icon: "zap",
                action: "VIEW_SKILLS",
                variant: "secondary",
                linkType: "internal"
              },
              {
                id: "btn_about",
                text: "About Me",
                icon: "user",
                action: "LEARN_ABOUT",
                variant: "outline",
                linkType: "internal"
              },
              {
                id: "btn_contact",
                text: "Contact Me",
                icon: "mail",
                action: "CONTACT_ME",
                variant: "primary",
                linkType: "internal"
              },
              {
                id: "btn_resume",
                text: "Resume",
                icon: "download",
                action: "DOWNLOAD_RESUME",
                variant: "secondary",
                linkType: "internal"
              }
            ],
            metadata: {
              level: 1,
              section: "main_menu"
            }
          }
        };
        
        setMessages(prev => [...prev, mainMenuMessage]);
        setTimeout(scrollToShowLatestMessage, 100);
        return;
      }
      
      if (button.action === 'DOWNLOAD_RESUME') {
        downloadResume();
        return;
      }
      
      const userMessage = `[BUTTON_ACTION: ${button.action}]`;
      
      // Add user action to messages (optional, for tracking)
      setMessages(prev => [...prev, {
        type: 'user',
        content: button.text,
        isButtonAction: true
      }]);

      // Set loading state
      setIsLoading(true);

      // Ensure scroll to show the start of the new message
      setTimeout(scrollToShowLatestMessage, 100);

      // Send to OpenAI and handle response
      sendToOpenAI(userMessage, {
        action: button.action,
        buttonId: button.id,
        context: button.context
      }).then(response => {
        // Add assistant response to messages
        const newAssistantMessage: Message = {
          type: 'assistant',
          content: response
        };
        
        setMessages(prev => [...prev, newAssistantMessage]);
        
        // Scroll to show the latest message
        setTimeout(() => {
          scrollToShowLatestMessage();
        }, 100);
        
      }).catch(error => {
        console.error('Error handling button action:', error);
        // Add error message
        const errorMessage: Message = {
          type: 'assistant',
          content: {
            message: "I'm sorry, I encountered an error. Please try again.",
            buttons: []
          }
        };
        setMessages(prev => [...prev, errorMessage]);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  };

  // Handle user input submission
  const handleUserInputSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted, userInput:', userInput, 'isLoading:', isLoading);
    
    if (!userInput.trim() || isLoading) {
      console.log('Form submission blocked - empty input or loading');
      return;
    }

    const userMessage = userInput.trim();
    console.log('Processing user message:', userMessage);
    setUserInput('');
    
    // Add user message to chat
    const newUserMessage: Message = {
      type: 'user',
      content: userMessage
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    console.log('Set loading to true, calling sendToOpenAI');

    try {
      // Send to OpenAI
      const response = await sendToOpenAI(userMessage);
      console.log('Received response from OpenAI:', response);
      
      // Add assistant response
      const newAssistantMessage: Message = {
        type: 'assistant',
        content: response
      };
      
      setMessages(prev => [...prev, newAssistantMessage]);
      console.log('Added assistant message to chat');
      
      // Scroll to show the latest message
      setTimeout(() => {
        scrollToShowLatestMessage();
      }, 100);
      
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      const errorMessage: Message = {
        type: 'assistant',
        content: {
          message: "I'm sorry, I encountered an error. Please try again.",
          buttons: []
        }
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      console.log('Set loading to false');
    }
  };

  // Render Lucide icon
  const renderIcon = (iconName: string) => {
    if (!iconName) return null;
    
    const iconComponentName = iconName
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    const IconComponent = (LucideIcons as any)[iconComponentName];
    return IconComponent ? <IconComponent size={18} /> : null;
  };

  // Contact information component
  const ContactInfo = () => (
    <div className="contact-info">
      <div className="contact-header">
        <h4>Contact Information</h4>
      </div>
      
      <div className="contact-actions">
        {/* Email with copy button */}
        <div className="contact-item">
          <div className="contact-label">
            <LucideIcons.Mail size={16} />
            <span>bethany@bethanyrobertson.com</span>
          </div>
          <button
            onClick={copyEmailToClipboard}
            className="btn btn-secondary contact-action-btn"
            style={{ fontFamily: 'var(--font-mono), "GeistMonoVF", "SF Mono", monospace' }}
          >
            <LucideIcons.Copy size={14} />
            <span>{emailCopied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        
        {/* LinkedIn link */}
        <div className="contact-item">
          <div className="contact-label">
            <LucideIcons.Linkedin size={16} />
            <span>LinkedIn: linkedin.com/in/bethany-robertson</span>
          </div>
          <button
            onClick={openLinkedIn}
            className="btn btn-primary contact-action-btn"
            style={{ fontFamily: 'var(--font-mono), "GeistMonoVF", "SF Mono", monospace' }}
          >
            <LucideIcons.ExternalLink size={14} />
            <span>Open</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Thinking animation component using MotionGridDemo
  const ThinkingAnimation = () => {
    return (
      <div className="thinking-animation relative w-full p-4 text-[#DAC4E1]">
        <MotionGridDemo />
      </div>
    );
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="avatar-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 135 139" fill="none">
            <circle cx="67.5" cy="71.5" r="67.5" fill="#CECDF7"/>
            <path d="M121.398 112.139C109.077 128.454 89.5208 139 67.5 139C50.5755 139 35.1063 132.771 23.2588 122.48L47.5908 85.2979H101.817L121.398 112.139Z" fill="#0052FF"/>
            <path d="M9.2168 71.0659C17.299 70.9463 23.75 64.2985 23.6304 56.2163C23.75 64.2985 30.3978 70.7525 38.48 70.6329C30.3978 70.7525 23.9439 77.4003 24.0634 85.4796C23.9439 77.4003 17.299 70.9463 9.2168 71.0659Z" fill="#FFFDFD"/>
            <path d="M125.565 65.4432C121.572 65.3842 118.385 62.0998 118.444 58.1067C118.385 62.0998 115.1 65.2884 111.107 65.2293C115.1 65.2884 118.289 68.5728 118.23 72.5644C118.289 68.5728 121.572 65.3842 125.565 65.4432Z" fill="#FFFDFD"/>
            <path d="M104.541 52.2033C104.541 68.686 91.4364 82.0478 75.2708 82.0478C59.1051 82.0478 46.0002 68.686 46.0002 52.2033C46.0002 35.7207 59.1051 22.3589 75.2708 22.3589C91.4364 22.3589 104.541 35.7207 104.541 52.2033Z" fill="#FFFDFD"/>
            <path d="M91.342 68.6025C91.342 71.2063 89.2312 73.317 86.6275 73.317C84.0238 73.317 81.9131 71.2063 81.9131 68.6025H91.342Z" fill="#FC1F22"/>
            <path d="M79.6143 0C87.6858 0 94.2295 6.54373 94.2295 14.6152C94.2294 18.8533 92.424 22.6685 89.542 25.3379C98.0122 30.5495 104.002 39.5281 105.275 49.999H96V49.5938C93.1889 51.1249 89.9494 51.999 86.5 51.999C84.8534 51.999 83.2549 51.7992 81.7275 51.4248L81.7217 51.4619L70 49.4834V51H66.8213C66.3844 52.7631 65.8038 54.4511 65.0967 56.0449C63.9819 53.978 61.7972 52.5733 59.2842 52.5732C55.639 52.5732 52.6836 55.5286 52.6836 59.1738C52.6838 62.3787 54.9688 65.048 57.998 65.6465C55.9986 67.3178 53.7665 68.6112 51.3711 69.4385C47.9884 64.5706 46 58.624 46 52.2041C46.0001 40.4443 52.6714 30.2734 62.3652 25.4102C62.375 25.4239 62.3838 25.4383 62.3936 25.4521C64.1396 24.5766 65.9837 23.8722 67.9053 23.3623C66.0805 20.9235 65.0001 17.8955 65 14.6152C65 6.54388 71.543 0.000255649 79.6143 0Z" fill="#282625"/>
            <path d="M89.2149 64.8287C89.2149 63.5106 88.1463 62.4419 86.8282 62.4419C85.5104 62.4422 84.4425 63.5108 84.4425 64.8287H83.5577C83.5577 63.0224 85.022 61.5584 86.8282 61.5582C88.6346 61.5582 90.0997 63.0223 90.0997 64.8287H89.2149Z" fill="#282625"/>
            <path d="M78.1111 57.8629C78.0142 57.2765 77.5752 56.7548 76.849 56.4126C76.1249 56.0713 75.1548 55.9324 74.1156 56.1041C73.0764 56.2758 72.2018 56.7195 71.6259 57.2757C71.0484 57.8333 70.8005 58.4685 70.8974 59.0549L70.0245 59.1992C69.8667 58.2443 70.2931 57.3339 71.012 56.6397C71.7326 55.9439 72.7778 55.4294 73.9715 55.2321C75.1651 55.035 76.3197 55.1861 77.2256 55.6129C78.1297 56.039 78.8263 56.7638 78.984 57.7187L78.1111 57.8629Z" fill="#282625"/>
            <path d="M101.111 57.8629C101.014 57.2765 100.575 56.7548 99.849 56.4126C99.1249 56.0713 98.1548 55.9324 97.1156 56.1041C96.0764 56.2758 95.2018 56.7195 94.6259 57.2757C94.0484 57.8333 93.8005 58.4685 93.8974 59.0549L93.0245 59.1992C92.8667 58.2443 93.2931 57.3339 94.012 56.6397C94.7326 55.9439 95.7778 55.4294 96.9715 55.2321C98.1651 55.035 99.3197 55.1861 100.226 55.6129C101.13 56.039 101.826 56.7638 101.984 57.7187L101.111 57.8629Z" fill="#282625"/>
            <path d="M77.7568 60.3596C77.7568 61.788 76.5989 62.9459 75.1706 62.9459C73.7422 62.9459 72.5843 61.788 72.5843 60.3596C72.5843 58.9313 73.7422 57.7734 75.1706 57.7734C76.5989 57.7734 77.7568 58.9313 77.7568 60.3596Z" fill="#282625"/>
            <path d="M100.758 60.2532C100.758 61.6815 99.6006 62.8394 98.1723 62.8394C96.7439 62.8394 95.5861 61.6815 95.5861 60.2532C95.5861 58.8249 96.7439 57.667 98.1723 57.667C99.6006 57.667 100.758 58.8249 100.758 60.2532Z" fill="#282625"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M98.996 48C104.878 48.0001 109.646 52.7684 109.646 58.6504C109.646 64.5323 104.878 69.3007 98.996 69.3008C93.114 69.3008 88.3456 64.5323 88.3456 58.6504C88.3456 52.7684 93.114 48 98.996 48ZM98.9979 50.1299C94.2924 50.13 90.4784 53.9449 90.4784 58.6504C90.4786 63.3557 94.2926 67.1698 98.9979 67.1699C103.703 67.1699 107.518 63.3558 107.518 58.6504C107.518 53.9448 103.704 50.1299 98.9979 50.1299Z" fill="#C19907"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M73.6483 69.2742C79.5303 69.2742 84.2986 64.5059 84.2986 58.6239C84.2986 52.7419 79.5303 47.9736 73.6483 47.9736C67.7663 47.9736 62.998 52.7419 62.998 58.6239C62.998 64.5059 67.7663 69.2742 73.6483 69.2742ZM73.649 67.1439C78.3546 67.1439 82.1692 63.3292 82.1692 58.6236C82.1692 53.9181 78.3546 50.1034 73.649 50.1034C68.9434 50.1034 65.1288 53.9181 65.1288 58.6236C65.1288 63.3292 68.9434 67.1439 73.649 67.1439Z" fill="#C19907"/>
            <path d="M82.9998 55H88.9998V58H82.9998V55Z" fill="#C19907"/>
          </svg>
        </div>
        <div className="chat-title">
          <h3 className="font-mono text-lg font-bold">Bethany</h3>
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.type === 'assistant' ? (
              <div className="assistant-message">
                <div className="message-content font-mono">
                  {typeof message.content === 'string' 
                    ? formatMessage(message.content) 
                    : formatMessage(message.content.message)}
                </div>
                
                {/* Show contact info for contact-related messages and button actions */}
                {typeof message.content !== 'string' && 
                 index > 0 && // Don't show on initial greeting
                 message.content.metadata?.section !== 'main_menu' && // Don't show on main menu
                 message.content.metadata?.section !== 'about' && // Don't show on about me
                 ((message.content.message && 
                   (message.content.message.toLowerCase().includes('contact') || 
                    message.content.message.toLowerCase().includes('email') ||
                    message.content.message.toLowerCase().includes('reach out') ||
                    message.content.message.toLowerCase().includes('get in touch') ||
                    message.content.message.toLowerCase().includes('connect'))) ||
                 (message.content.buttons && 
                  message.content.buttons.some(btn => 
                    btn.action === 'CONTACT_ME' || 
                    (btn.text && btn.text.toLowerCase().includes('contact'))
                  ))) && (
                  <ContactInfo />
                )}
                

                
                {typeof message.content !== 'string' && message.content.buttons && message.content.buttons.length > 0 && (
                  <div className="button-grid">
                    {message.content.buttons.map((button) => (
                      <button
                        key={button.id}
                        className={`btn btn-${button.variant} ${button.linkType === 'external' ? 'btn-external' : ''}`}
                        onClick={() => handleButtonClick(button)}
                        style={{ fontFamily: 'var(--font-mono), "GeistMonoVF", "SF Mono", monospace' }}
                      >
                        {renderIcon(button.icon)}
                        <span className="button-text">{button.text}</span>
                        {button.linkType === 'external' && (
                          <LucideIcons.ExternalLink size={14} className="external-icon" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="user-message">
                {typeof message.content === 'string' ? message.content : message.content.message}
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="message assistant">
            <div className="loading-indicator">
              <ThinkingAnimation />
            </div>
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
        ] as Button[]).map((button) => (
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

export default ChatInterface; 