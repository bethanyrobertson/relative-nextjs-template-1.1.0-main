'use client';

import React from 'react';
import { X } from 'lucide-react';
import ChatInterface from './ChatInterface';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 chat-modal-overlay"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      {/* Close Button - Positioned above the chat interface but outside overflow-hidden */}
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-[2001] p-3 rounded-full bg-[#cdcbff] dark:bg-black border-2 border-[#cdcbff] dark:border-white hover:bg-[#b8b6ff] dark:hover:bg-gray-800 transition-all duration-200 group shadow-lg"
          aria-label="Close chat"
        >
          <X 
            size={24} 
            className="text-[#012b31] dark:text-white group-hover:text-[#012b31] dark:group-hover:text-gray-300 transition-colors duration-200" 
          />
        </button>
        
        {/* Modal Content */}
        <div 
          className="relative w-full h-[calc(100vh-2rem)] sm:h-[80vh] rounded-2xl overflow-hidden chat-modal-content no-white-box"
          onClick={(e) => e.stopPropagation()}
          style={{ 
            background: 'transparent',
            border: 'none',
            outline: 'none'
          }}
        >
          {/* Chat Interface */}
          <div className="h-full">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal; 