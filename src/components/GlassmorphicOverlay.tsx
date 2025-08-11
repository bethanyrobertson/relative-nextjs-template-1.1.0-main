'use client';

import React from 'react';
import ReactDOM from 'react-dom';

interface GlassmorphicOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
}

const GlassmorphicOverlay: React.FC<GlassmorphicOverlayProps> = ({ 
  children, 
  isOpen, 
  onClose, 
  zIndex = 1000 
}) => {
  if (!isOpen) return null;

  // Try to find overlay-root, create it if it doesn't exist
  let overlayRoot = document.getElementById('overlay-root');
  if (!overlayRoot) {
    overlayRoot = document.createElement('div');
    overlayRoot.id = 'overlay-root';
    document.body.appendChild(overlayRoot);
  }

  return ReactDOM.createPortal(
    <div 
      className="glassmorphic-overlay" 
      onClick={onClose}
      style={{ zIndex }}
    >
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}> 
        {children}
      </div>
    </div>,
    overlayRoot 
  );
};

export default GlassmorphicOverlay; 