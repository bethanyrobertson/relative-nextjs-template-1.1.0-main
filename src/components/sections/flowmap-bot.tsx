'use client';

import SectionHeader from '../section-header';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Lock, Unlock, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

import {
    Blocks,
    Home,
    MessageSquare,
    Search,
    FolderOpen,
    Briefcase,
    Wrench,
    Mail,
    User,
    FileText,
    Calendar,
    Zap,
    Bot,
    Lightbulb,
    Link,
    Eye,
    PenTool,
    Target,
    Phone,
    Clock,
    Star
  } from 'lucide-react';

const initialNodes = [
    // Start
    {
      id: 'start',
      type: 'input',
      data: { label: <div className="flex items-center"><Home className="w-4 h-4 mr-2 flex-shrink-0" />User Lands on Home</div> },
      position: { x: 400, y: 30 },
      style: { background: '#ffffff', border: '2px solid #e5e7eb', color: 'black', borderRadius: '8px', fontSize: '10px', width: 220, padding: '8px' }
    },
    
    // Welcome and Choice Combined
    {
      id: 'welcome-choice',
      data: { 
        label: <div className="flex items-start"><Star className="w-4 h-4 mr-2 flex-shrink-0" />Welcome message</div> 
      },
      position: { x: 400, y: 100 },
      style: { background: '#ffffff', border: '2px solid #e5e7eb', color: 'black', borderRadius: '8px', fontSize: '10px', width: 220, padding: '8px' }
    },
    
    // Main Paths - Three Columns
    {
      id: 'quick',
      data: { label: <div className="flex items-center"><Zap className="w-4 h-4 mr-2 flex-shrink-0" />Quick Action Buttons</div> },
      position: { x: 200, y: 200 },
      style: { background: '#ffffff', border: '2px solid #e5e7eb', color: 'black', borderRadius: '8px', fontSize: '10px',width: 200, padding: '8px' }
    },
    {
      id: 'type',
      data: { label: <div className="flex items-center"><MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />Free-form Chat</div> },
      position: { x: 610, y: 200 },
      style: { background: '#ffffff', border: '2px solid #e5e7eb', color: 'black', borderRadius: '8px', fontSize: '10px',width: 180, padding: '8px' }
    },
    {
      id: 'explore',
      data: { label: <div className="flex items-center"><Search className="w-4 h-4 mr-2 flex-shrink-0" />Explore Suggestions</div> },
      position: { x: 820, y: 200 },
      style: { background: '#ffffff', border: '2px solid #e5e7eb', color: 'black', borderRadius: '8px', fontSize: '10px', width: 200, padding: '8px' }
    },
    
    // Quick Actions - Left Column
    {
      id: 'q1',
      data: { label: 'View Projects' },
      position: { x: 60, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 120, padding: '6px' }
    },
    {
      id: 'q2',
      data: { label: 'Work Experience' },
      position: { x: 200, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 130, padding: '6px' }
    },
    {
      id: 'q3',
      data: { label: 'Skills' },
      position: { x: 350, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 120, padding: '6px' }
    },
    {
      id: 'q4',
      data: { label: 'Contact Me' },
      position: { x: 490, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 100, padding: '6px' }
    },
    
    // Chat Flow - Center Column
    {
      id: 'natural',
      data: { label: 'Natural Language Query' },
      position: { x: 620, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 160, padding: '6px' }
    },
    {
      id: 'ai',
      data: { label: 'AI Understands Intent' },
      position: { x: 620, y: 340 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 160, padding: '6px' }
    },
    {
      id: 'response',
      data: { label: 'Personalized Response' },
      position: { x: 620, y: 400 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 160, padding: '6px' }
    },
    
    // Explore Options - Right Column
    {
      id: 'e2',
      data: { label: 'About Me' },
      position: { x: 800, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 90, padding: '6px' }
    },
    {
      id: 'e3',
      data: { label: 'Download Resume' },
      position: { x: 925, y: 280 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 130, padding: '6px' }
    },
    
    // Detailed Views - Left Column (Lower)
    {
      id: 'projectlist',
      data: { 
        label: <div className="text-center">Project Summaries</div>
      },
      position: { x: 50, y: 360 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 140, padding: '6px' }
    },
    {
      id: 'timeline',
      data: { 
        label: <div className="text-center">Career Overview</div>
      },
      position: { x: 200, y: 360 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 130, padding: '6px' }
    },
    {
      id: 'skillmatrix',
      data: { 
        label: <div className="text-center">Skill Categories</div>
      },
      position: { x: 350, y: 360 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 120, padding: '6px' }
    },
    {
      id: 'contactform',
      data: { 
        label: <div className="text-center">Contact Options<br />Email/LinkedIn</div>
      },
      position: { x: 490, y: 360 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 100, padding: '6px' }
    },
    
    // Deep Dive Options - Lower Level
    {
      id: 'deep1',
      data: { label: 'Link to Case Study' },
      position: { x: 50, y: 440 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 140, padding: '6px' }
    },
    {
      id: 'deep2',
      data: { label: 'Specific Role Details' },
      position: { x: 195, y: 440 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 140, padding: '6px' }
    },
    {
      id: 'deep3',
      data: { label: 'Skill Examples' },
      position: { x: 350, y: 440 },
      style: { background: '#ffffff', border: '1px solid #e2e8f0', color: 'black', borderRadius: '6px', fontSize: '10px', width: 120, padding: '6px' }
    }
];
  
const initialEdges = [
    // Main Flow
    { id: 'e1', source: 'start', target: 'welcome-choice', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // Choice Branches
    { 
      id: 'e3', 
      source: 'welcome-choice', 
      target: 'quick', 
      type: 'smoothstep', 
      animated: true,
      style: { strokeDasharray: '5,5', stroke: '#6b7280' }
    },
    { 
      id: 'e4', 
      source: 'welcome-choice', 
      target: 'type', 
      type: 'smoothstep', 
      animated: true,
      style: { strokeDasharray: '5,5', stroke: '#6b7280' }
    },
    { 
      id: 'e5', 
      source: 'welcome-choice', 
      target: 'explore', 
      type: 'smoothstep', 
      animated: true,
      style: { strokeDasharray: '5,5', stroke: '#6b7280' }
    },
    
    // Quick Actions
    { id: 'e6', source: 'quick', target: 'q1', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e7', source: 'quick', target: 'q2', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e8', source: 'quick', target: 'q3', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e9', source: 'quick', target: 'q4', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // Chat Flow
    { id: 'e10', source: 'type', target: 'natural', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e11', source: 'natural', target: 'ai', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e19', source: 'ai', target: 'response', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // Explore Options
    { id: 'e13', source: 'explore', target: 'e2', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e14', source: 'explore', target: 'e3', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // To Detailed Views
    { id: 'e15', source: 'q1', target: 'projectlist', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e16', source: 'q2', target: 'timeline', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e17', source: 'q3', target: 'skillmatrix', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e18', source: 'q4', target: 'contactform', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // To Deep Dives
    { id: 'e21', source: 'projectlist', target: 'deep1', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e22', source: 'timeline', target: 'deep2', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e23', source: 'skillmatrix', target: 'deep3', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } }
];

// Custom Controls component that only shows lock/unlock in development
const CustomControls = ({ 
  position = 'bottom-right', 
  isLocked, 
  setIsLocked,
  onZoomIn,
  onZoomOut,
  onFitView
}: { 
  position?: string;
  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitView: () => void;
}) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className={`absolute ${position} flex flex-col gap-2 p-2`}>
      <button
        onClick={onZoomIn}
        className="p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
        title="Zoom in"
      >
        <ZoomIn className="w-4 h-4" />
      </button>
      
      <button
        onClick={onZoomOut}
        className="p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
        title="Zoom out"
      >
        <ZoomOut className="w-4 h-4" />
      </button>
      
      <button
        onClick={onFitView}
        className="p-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
        title="Fit view"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
      
      {/* Only show lock/unlock button in development */}
      {isDevelopment && (
        <button
          onClick={() => {
            console.log('Lock state changing from:', isLocked, 'to:', !isLocked);
            setIsLocked(!isLocked);
          }}
          className={`p-2 border rounded-md shadow-sm transition-colors ${
            isLocked 
              ? 'bg-white border-gray-200 hover:bg-gray-50' 
              : 'bg-blue-50 border-blue-300 hover:bg-blue-100'
          }`}
          title={isLocked ? "Unlock nodes" : "Lock nodes"}
        >
          {isLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
};

// Hook to detect touch devices and screen size
const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isTouchDevice: false
  });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isTouchDevice
      });
    };

    // Initial check
    checkDevice();

    // Listen for resize events
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceInfo;
};

const FlowmapBot = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isLocked, setIsLocked] = useState(true);
  const reactFlowRef = React.useRef<any>(null);
  const { isMobile, isTablet, isTouchDevice } = useDeviceDetection();
  
  // Determine if we should use mobile/tablet optimizations
  const isMobileOrTablet = isMobile || isTablet;
  
  // Force refresh when component mounts
  useEffect(() => {
    setNodes(initialNodes);
  }, [setNodes]);
  
  // Center view on mobile/tablet and enable mobile scrolling
  useEffect(() => {
    const handleInitialView = () => {
      if (reactFlowRef.current && isMobileOrTablet) {
        setTimeout(() => {
          const reactFlowInstance = reactFlowRef.current;
          if (reactFlowInstance) {
            if (isMobile) {
              // Mobile: more zoomed out, centered
              reactFlowInstance.setViewport({
                x: -100,
                y: 0,
                zoom: 0.6
              });
            } else if (isTablet) {
              // Tablet: slightly less zoomed out
              reactFlowInstance.setViewport({
                x: 50,
                y: 0,
                zoom: 0.8
              });
            }
          }
        }, 100);
      }
    };
    
    handleInitialView();
  }, [isMobile, isTablet, isMobileOrTablet]);
  
  // Update nodes when lock state changes
  useEffect(() => {
    setNodes(prevNodes => 
      prevNodes.map(node => ({
        ...node,
        draggable: !isLocked
      }))
    );
  }, [isLocked, setNodes]);
  
  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [setEdges],
  );

  // Zoom functions
  const handleZoomIn = () => {
    if (reactFlowRef.current) {
      reactFlowRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (reactFlowRef.current) {
      reactFlowRef.current.zoomOut();
    }
  };

  const handleFitView = () => {
    if (reactFlowRef.current) {
      reactFlowRef.current.fitView();
    }
  };

  return (
    <div className="container">
        <SectionHeader
            category="PROCESS"
            title="From Component Chaos to Design System Infrastructure"
            icon={Blocks}
            description="The design system API transformed how the team maintains design consistency, reducing synchronization overhead while enabling cross-functional collaboration."
            className="border-none"
        />
      
      <div 
        className="flowmap-rounded-wrapper rounded-xl" 
        style={{ 
          width: '100%', 
          height: '600px', 
          position: 'relative', 
          background: 'linear-gradient(rgb(228,247,245) 0%, rgb(255,240,227) 43.03%, rgb(240,246,255) 100%)',
          // Enhanced scrolling for mobile/tablet
          overflow: isMobileOrTablet ? 'auto' : 'hidden',
          WebkitOverflowScrolling: 'touch',
          // Hide scrollbars but keep functionality
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Add CSS to hide scrollbars while keeping scroll functionality */}
        <style jsx>{`
          .flowmap-rounded-wrapper::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <ReactFlow
          ref={reactFlowRef}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView={!isMobileOrTablet}
          fitViewOptions={{ 
            padding: 0.1, 
            includeHiddenNodes: false,
            minZoom: 0.3,
            maxZoom: 1.5
          }}
          minZoom={0.2}
          maxZoom={2}
          attributionPosition="bottom-left"
          nodesDraggable={!isLocked}
          nodesConnectable={false}
          elementsSelectable={false}
          // Enhanced mobile/tablet interactions
          panOnDrag={isTouchDevice ? [1, 2] : true} // Allow both mouse and touch panning
          zoomOnScroll={true}
          zoomOnPinch={isTouchDevice}
          zoomOnDoubleClick={false}
          preventScrolling={false} // Allow container scrolling on touch devices
          // Set minimum width to enable horizontal scrolling
          style={{ 
            background: 'transparent', 
            position: 'relative', 
            zIndex: 1, 
            minWidth: isMobileOrTablet ? '1200px' : '100%',
            minHeight: isMobileOrTablet ? '500px' : '100%',
            touchAction: isTouchDevice ? 'auto' : 'none'
          }}
        >
          {/* Only show custom controls on desktop or in development */}
          {(!isMobileOrTablet || process.env.NODE_ENV === 'development') && (
            <CustomControls
              isLocked={isLocked}
              setIsLocked={setIsLocked}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onFitView={handleFitView}
            />
          )}
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowmapBot;
