'use client';

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
    Star,
    Filter,
    Code,
    BookOpen,
    Settings
  } from 'lucide-react';

const initialNodes = [
    // User Goal - Blue (far left)
    {
      id: 'user-goal',
      data: { 
        label: <div className="text-center"><Target className="w-4 h-4 mx-auto mb-1" />User Goal:<br/>Find relevant components<br/>Discover patterns<br/>Understand system</div> 
      },
      position: { x: 80, y: 50 },
      style: { background: '#dbeafe', border: '2px solid #3b82f6', color: 'black', borderRadius: '6px', fontSize: '10px', width: 180, padding: '8px' }
    },
    
    // Open Search Interface
    {
      id: 'search-interface',
      data: { 
        label: <div className="flex items-center justify-center"><Search className="w-4 h-4 mr-2" />Open Search Interface</div> 
      },
      position: { x: 320, y: 50 },
      style: { background: '#ffffff', border: '2px solid #e5e7eb', color: 'black', borderRadius: '6px', fontSize: '10px', width: 200, padding: '8px' }
    },
    
    // Decision Diamond - Search or Browse (center)
    {
      id: 'search-browse-decision',
      data: { 
        label: <div className="text-center">Search or Browse?</div> 
      },
      position: { x: 590, y: 50 },
      style: { 
        background: '#fef3c7', 
        border: '2px solid #f59e0b', 
        color: 'black', 
        borderRadius: '6px', 
        fontSize: '10px', 
        width: 100, 
        height: 60,
        padding: '8px',
        transform: 'rotate(45deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    
    // Filter Options Container (center-right)
    {
      id: 'filter-options',
      data: { 
        label: <div className="text-center"><Filter className="w-4 h-4 mx-auto mb-1" />Filter Options</div> 
      },
      position: { x: 750, y: 50 },
      style: { background: '#f0fdf4', border: '2px solid #22c55e', color: 'black', borderRadius: '6px', fontSize: '10px', width: 140, padding: '8px' }
    },
    
    // Text Search
    {
      id: 'text-search',
      data: { label: 'Text Search' },
      position: { x: 730, y: 150 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 100, padding: '6px' }
    },
    
    // Enter Keywords
    {
      id: 'enter-keywords',
      data: { label: 'Enter Keywords\n(name, description, tags)' },
      position: { x: 880, y: 150 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 140, padding: '6px' }
    },
    
    // Visual Search
    {
      id: 'visual-search',
      data: { label: 'Visual Search' },
      position: { x: 730, y: 210 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 100, padding: '6px' }
    },
    
    // Browse by Appearance
    {
      id: 'browse-appearance',
      data: { label: 'Browse by Appearance' },
      position: { x: 880, y: 210 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 140, padding: '6px' }
    },
    
    // Filter by Category
    {
      id: 'filter-category',
      data: { label: 'Filter by Category' },
      position: { x: 730, y: 270 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 120, padding: '6px' }
    },
    
    // Select Type or Token Category
    {
      id: 'select-type',
      data: { label: 'Select Type or Token Category' },
      position: { x: 880, y: 270 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 160, padding: '6px' }
    },
    
    // Filter by Status
    {
      id: 'filter-status',
      data: { label: 'Filter by Status' },
      position: { x: 730, y: 330 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 120, padding: '6px' }
    },
    
    // Active, draft, deprecated
    {
      id: 'status-options',
      data: { label: 'Active, draft, deprecated' },
      position: { x: 880, y: 330 },
      style: { background: '#f0fdf4', border: '1px solid #22c55e', color: 'black', borderRadius: '4px', fontSize: '10px', width: 160, padding: '6px' }
    },
    
    // Search Results (below the decision)
    {
      id: 'search-results',
      data: { 
        label: <div className="text-center"><Search className="w-4 h-4 mx-auto mb-1" />Search Results</div> 
      },
      position: { x: 570, y: 200 },
      style: { background: '#faf5ff', border: '2px solid #a855f7', color: 'black', borderRadius: '6px', fontSize: '10px', width: 140, padding: '8px' }
    },
    
    // Primary Info (to the left of Search Results)
    {
      id: 'primary-info',
      data: { label: 'Primary Info:\nName, type, status' },
      position: { x: 320, y: 150 },
      style: { background: '#faf5ff', border: '1px solid #a855f7', color: 'black', borderRadius: '4px', fontSize: '10px', width: 120, padding: '6px' }
    },
    
    // Preview (visual)
    {
      id: 'preview',
      data: { label: 'Preview (visual)' },
      position: { x: 320, y: 210 },
      style: { background: '#faf5ff', border: '1px solid #a855f7', color: 'black', borderRadius: '4px', fontSize: '10px', width: 120, padding: '6px' }
    },
    
    // Quick Actions
    {
      id: 'quick-actions',
      data: { label: 'Quick Actions:\nView, copy, implement' },
      position: { x: 320, y: 270 },
      style: { background: '#faf5ff', border: '1px solid #a855f7', color: 'black', borderRadius: '4px', fontSize: '10px', width: 140, padding: '6px' }
    },
    
    // Metadata
    {
      id: 'metadata',
      data: { label: 'Metadata:\nTags, last updated, usage' },
      position: { x: 320, y: 330 },
      style: { background: '#faf5ff', border: '1px solid #a855f7', color: 'black', borderRadius: '4px', fontSize: '10px', width: 150, padding: '6px' }
    },
    
    // Choose View Decision (to the right of Search Results)
    {
      id: 'choose-view',
      data: { 
        label: <div className="text-center">Choose View</div> 
      },
      position: { x: 570, y: 350 },
      style: { 
        background: '#fef3c7', 
        border: '2px solid #f59e0b', 
        color: 'black', 
        borderRadius: '6px', 
        fontSize: '10px', 
        width: 80, 
        height: 50,
        padding: '8px',
        transform: 'rotate(45deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    
    // Summary View (to the right of Choose View)
    {
      id: 'summary-view',
      data: { label: 'Summary View' },
      position: { x: 750, y: 400 },
      style: { background: '#fffbeb', border: '1px solid #f59e0b', color: 'black', borderRadius: '4px', fontSize: '10px', width: 100, padding: '6px' }
    },
    
    // Detail View
    {
      id: 'detail-view',
      data: { label: 'Detail View' },
      position: { x: 750, y: 460 },
      style: { background: '#fffbeb', border: '1px solid #f59e0b', color: 'black', borderRadius: '4px', fontSize: '10px', width: 100, padding: '6px' }
    },
    
    // Implementation View
    {
      id: 'implementation-view',
      data: { label: 'Implementation View' },
      position: { x: 750, y: 520 },
      style: { background: '#fffbeb', border: '1px solid #f59e0b', color: 'black', borderRadius: '4px', fontSize: '10px', width: 120, padding: '6px' }
    },
    
    // Key info at a glance (far right)
    {
      id: 'key-info',
      data: { label: 'Key info at a glance' },
      position: { x: 920, y: 400 },
      style: { background: '#fefce8', border: '1px solid #eab308', color: 'black', borderRadius: '4px', fontSize: '10px', width: 130, padding: '6px' }
    },
    
    // Full documentation
    {
      id: 'full-documentation',
      data: { label: 'Full documentation' },
      position: { x: 920, y: 460 },
      style: { background: '#fefce8', border: '1px solid #eab308', color: 'black', borderRadius: '4px', fontSize: '10px', width: 130, padding: '6px' }
    },
    
    // Code & Integration
    {
      id: 'code-integration',
      data: { label: 'Code & Integration' },
      position: { x: 920, y: 520 },
      style: { background: '#fefce8', border: '1px solid #eab308', color: 'black', borderRadius: '4px', fontSize: '10px', width: 130, padding: '6px' }
    }
];
  
const initialEdges = [
    // Main flow
    { id: 'e1', source: 'user-goal', target: 'search-interface', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e2', source: 'search-interface', target: 'search-browse-decision', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // From decision to filter options
    { id: 'e3', source: 'search-browse-decision', target: 'filter-options', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // Filter option branches
    { id: 'e4', source: 'text-search', target: 'enter-keywords', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    { id: 'e5', source: 'visual-search', target: 'browse-appearance', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    { id: 'e6', source: 'filter-category', target: 'select-type', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    { id: 'e7', source: 'filter-status', target: 'status-options', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    
    // From filter options to individual filters
    { id: 'e8', source: 'filter-options', target: 'text-search', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    { id: 'e9', source: 'filter-options', target: 'visual-search', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    { id: 'e10', source: 'filter-options', target: 'filter-category', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    { id: 'e11', source: 'filter-options', target: 'filter-status', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#22c55e' } },
    
    // To search results
    { id: 'e12', source: 'enter-keywords', target: 'search-results', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e13', source: 'browse-appearance', target: 'search-results', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e14', source: 'select-type', target: 'search-results', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    { id: 'e15', source: 'status-options', target: 'search-results', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // From search results to result components
    { id: 'e16', source: 'search-results', target: 'primary-info', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#a855f7' } },
    { id: 'e17', source: 'search-results', target: 'preview', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#a855f7' } },
    { id: 'e18', source: 'search-results', target: 'quick-actions', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#a855f7' } },
    { id: 'e19', source: 'search-results', target: 'metadata', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#a855f7' } },
    
    // To choose view
    { id: 'e20', source: 'search-results', target: 'choose-view', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#6b7280' } },
    
    // From choose view to view options
    { id: 'e21', source: 'choose-view', target: 'summary-view', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#f59e0b' } },
    { id: 'e22', source: 'choose-view', target: 'detail-view', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#f59e0b' } },
    { id: 'e23', source: 'choose-view', target: 'implementation-view', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#f59e0b' } },
    
    // From view options to final outcomes
    { id: 'e24', source: 'summary-view', target: 'key-info', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#eab308' } },
    { id: 'e25', source: 'detail-view', target: 'full-documentation', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#eab308' } },
    { id: 'e26', source: 'implementation-view', target: 'code-integration', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5', stroke: '#eab308' } }
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

const DesignSystemFlow = () => {
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
                x: -300,
                y: 0,
                zoom: 0.3
              });
            } else if (isTablet) {
              // Tablet: slightly less zoomed out
              reactFlowInstance.setViewport({
                x: -200,
                y: 0,
                zoom: 0.5
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
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
            <Blocks className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">PROCESS</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Design System Component Discovery Flow
        </h2>
        <p className="text-gray-600">
          How users navigate and discover components within the design system, from initial search to implementation.
        </p>
      </div>
      
      <div 
        className="flowmap-rounded-wrapper rounded-xl" 
        style={{ 
          width: '100%', 
          height: '700px', 
          position: 'relative', 
          background: '#f8fafc',
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
            minWidth: isMobileOrTablet ? '1300px' : '100%',
            minHeight: isMobileOrTablet ? '600px' : '100%',
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

export default DesignSystemFlow;