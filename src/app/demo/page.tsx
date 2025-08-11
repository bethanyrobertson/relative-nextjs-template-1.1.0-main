'use client';

import React, { useState } from 'react';
import GlassmorphicOverlay from '@/components/GlassmorphicOverlay';
import ChatModal from '@/components/chat/ChatModal';
import { Button } from '@/components/ui/button';

const DemoPage = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Glassmorphic Overlay Demo
        </h1>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Z-Index Layering
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This demo shows the proper z-index layering:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
              <li><strong>Navbar:</strong> z-index: 60</li>
              <li><strong>Glassmorphic Overlay:</strong> z-index: 1000</li>
              <li><strong>Chat Modal:</strong> z-index: 2000</li>
            </ul>
            
            <div className="flex gap-4">
              <Button 
                onClick={() => setIsOverlayOpen(true)}
                variant="default"
              >
                Open Glassmorphic Overlay
              </Button>
              
              <Button 
                onClick={() => setIsChatModalOpen(true)}
                variant="outline"
              >
                Open Chat Modal (Above Everything)
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The chat modal will appear above the glassmorphic overlay because it has a higher z-index (2000 vs 1000).
              This ensures that when you click the Contact button in the navbar, the chat modal appears in front of any
              glassmorphic overlays that might be active.
            </p>
          </div>
        </div>
      </div>

      {/* Glassmorphic Overlay */}
      <GlassmorphicOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Glassmorphic Overlay Active
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This overlay has a z-index of 1000. The chat modal will appear above it.
          </p>
          <Button 
            onClick={() => setIsChatModalOpen(true)}
            variant="default"
          >
            Open Chat Modal Above This Overlay
          </Button>
        </div>
      </GlassmorphicOverlay>

      {/* Chat Modal */}
      <ChatModal 
        isOpen={isChatModalOpen} 
        onClose={() => setIsChatModalOpen(false)} 
      />
    </div>
  );
};

export default DemoPage; 