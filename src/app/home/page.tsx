"use client"

import { useEffect, useRef } from "react"

// Import your actual components
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import ChatInterface from "@/components/chat/ChatInterface"

const exampleImages = [
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/471dcbd7-1a63-4161-7063-ba20c78e3800/public",
    title: "0Coinbase Cloud",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/01e63899-bc9e-455b-7b28-86fe975c7400/public",
    title: "1 flowers",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e29bf028-3301-4718-9462-e8b498306300/public",
    title: "2 tldr",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/50ab6078-21c0-4f2d-de2e-f3f5a92cf800/public",
    title: "3 Petra",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/d438f8c7-b5d1-4a74-593f-83defca60900/public",
    title: "4results about you",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4dbc8fc4-91aa-49e8-4fed-e9db268e4500/public",
    title: "5 Direct Express",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/1d02a5b2-ff77-4520-f2d1-cb6b45714900/public",
    title: "6 transactions",

  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/a5e46eff-b464-466e-d776-890b1d92f900/public",
    title: "7 cloud code",
  },
]

const Preview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('hide-footer');
    
    // Simple fade-in animation using CSS
    const images = containerRef.current?.querySelectorAll('img');
    if (images) {
      images.forEach((img, index) => {
        setTimeout(() => {
          img.style.opacity = '1';
        }, index * 150);
      });
    }
  }, [])

  return (
    <div
      className="flex w-full h-screen justify-center items-center overflow-hidden relative pt-20 bg-gradient-to-br from-[#E4F7F5] via-[#FFF0E3] to-[#F0F6FF] dark:from-[#dac4e1] dark:via-[#4a6a6a] dark:to-[#000000]"
      ref={containerRef}
    >
      {/* CSS for animations and texture */}
      <style jsx>{`
        .float-image {
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .float-image:hover {
          transform: scale(1.1);
          opacity: 0.8 !important;
        }
        
        .float-image-desktop:hover {
          transform: scale(1.25);
        }
        
        @media (max-width: 768px) {
          .float-image:hover {
            transform: scale(1.1);
            opacity: 0.7 !important;
          }
        }
        

      `}</style>

      {/* Floating Images Background */}
      <Floating 
        sensitivity={-1} 
        className="absolute inset-0 pointer-events-none z-0"
        easingFactor={0.03}
      >
        {/* Mobile Layout - Circle around chat interface */}
        <div className="block md:hidden">
          {/* Top center */}
          <FloatingElement depth={1} className="top-[10%] left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img
                src={exampleImages[0].url}
                alt={exampleImages[0].title}
                className="float-image w-16 h-16 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>
          
          {/* Top right */}
          <FloatingElement depth={2} className="top-[15%] right-[10%]">
            <div className="relative">
              <img
                src={exampleImages[1].url}
                alt={exampleImages[1].title}
                className="float-image w-14 h-14 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>

          {/* Right center */}
          <FloatingElement depth={1} className="top-1/2 right-[5%] transform -translate-y-1/2">
            <div className="relative">
              <img
                src={exampleImages[2].url}
                alt={exampleImages[2].title}
                className="float-image w-20 h-24 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>
          
          {/* Bottom right */}
          <FloatingElement depth={2} className="bottom-[8%] right-[10%]">
            <div className="relative">
              <img
                src={exampleImages[3].url}
                alt={exampleImages[3].title}
                className="float-image w-12 h-12 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>

          {/* Bottom center */}
          <FloatingElement depth={1} className="bottom-[5%] left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img
                src={exampleImages[4].url}
                alt={exampleImages[4].title}
                className="float-image w-16 h-16 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>
          
          {/* Bottom left */}
          <FloatingElement depth={2} className="bottom-[8%] left-[10%]">
            <div className="relative">
              <img
                src={exampleImages[7].url}
                alt={exampleImages[7].title}
                className="float-image w-14 h-14 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>

          {/* Left center */}
          <FloatingElement depth={1} className="top-1/2 left-[5%] transform -translate-y-1/2">
            <div className="relative">
              <img
                src={exampleImages[5].url}
                alt={exampleImages[5].title}
                className="float-image w-20 h-24 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>
          
          {/* Top left */}
          <FloatingElement depth={1} className="top-[15%] left-[10%]">
            <div className="relative">
              <img
                src={exampleImages[6].url}
                alt={exampleImages[6].title}
                className="float-image w-12 h-12 object-cover rounded-sm shadow-md"
                style={{ opacity: 0.35 }}
              />
            </div>
          </FloatingElement>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <FloatingElement depth={0.5} className="top-[8%] left-[5%]">
            <div className="relative">
              <img
                src={exampleImages[0].url}
                alt={exampleImages[0].title}
                className="float-image float-image-desktop w-200 h-200 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4, width: '200px', height: '200px', maxWidth: '200px', maxHeight: '200px' }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                0
              </div> */}
            </div>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[40%] left-[20%]">
            <div className="relative">
              <img
                src={exampleImages[1].url}
                alt={exampleImages[1].title}
                className="float-image float-image-desktop w-50 h-28 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                1
              </div> */}
            </div>
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[30%] left-[76%]">
            <div className="relative">
              <img
                src={exampleImages[2].url}
                alt={exampleImages[2].title}
                className="float-image float-image-desktop w-40 h-48 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                2
              </div> */}
            </div>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[3%] left-[89%]">
            <div className="relative">
                            <img
                src={exampleImages[3].url}
                alt={exampleImages[3].title}
                className="float-image float-image-desktop w-30 h-30 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                3
              </div> */}
            </div>
          </FloatingElement>
  
          <FloatingElement depth={1} className="top-[50%] left-[3%]">
            <div className="relative">
              <img
                src={exampleImages[4].url}
                alt={exampleImages[4].title}
                className="float-image float-image-desktop w-32 h-40 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                4
              </div> */}
            </div>
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[55%] left-[88%]">
            <div className="relative">
              <img
                src={exampleImages[7].url}
                alt={exampleImages[7].title}
                className="float-image float-image-desktop w-36 h-36 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                7
              </div> */}
            </div>
          </FloatingElement>

          <FloatingElement depth={4} className="top-[80%] left-[25%]">
            <div className="relative">
              <img
                src={exampleImages[5].url}
                alt={exampleImages[5].title}
                className="float-image float-image-desktop w-36 h-44 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                5
              </div> */}
            </div>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[78%] left-[82%]">
            <div className="relative">
              <img
                src={exampleImages[6].url}
                alt={exampleImages[6].title}
                className="float-image float-image-desktop w-26 h-26 object-cover rounded-lg shadow-lg"
                style={{ opacity: 0.4 }}
              />
              {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                6
              </div> */}
            </div>
          </FloatingElement>
        </div>
      </Floating>
      
      {/* Chat Widget - Centered and responsive */}
      <div className="fixed top-20 left-0 right-0 bottom-0 flex items-center justify-center z-40 pointer-events-none">
        <div className="w-full max-w-2xl mx-4 md:mx-8 pointer-events-auto">
          <ChatInterface />
        </div>
      </div>
    </div>
  )
}

export default Preview