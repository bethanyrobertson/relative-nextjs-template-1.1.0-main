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
      <div className="absolute inset-0 bg-teal-900/30 backdrop-blur-lg" />
      
      {/* Close Button - Positioned above the chat interface but outside overflow-hidden */}
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-[2001] p-3 rounded-full bg-[#dac4e1] dark:bg-black border-2 border-[#cdcbff] dark:border-[#dac4e1] hover:bg-[#b8b6ff] dark:hover:bg-gray-800 transition-all duration-200 group shadow-lg"
          aria-label="Close chat"
        >
          <X 
            size={24} 
            className="text-[#012b31] dark:text-[#dac4e1] group-hover:text-[#012b31] dark:group-hover:text-gray-300 transition-colors duration-200" 
          />
        </button>
        
        {/* Modal Content */}
        <div 
          className="relative w-full h-[600px] sm:h-[600px] rounded-2xl overflow-hidden chat-modal-content no-white-box"
          onClick={(e) => e.stopPropagation()}
          style={{ 
            background: 'transparent',
            border: 'none',
            outline: 'none'
          }}
        >
          {/* Chat Interface */}
          <div className="h-full flex items-center justify-center">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal; 