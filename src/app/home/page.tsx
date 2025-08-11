"use client"

import { useEffect, useRef } from "react"

// Import your actual components
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import ChatInterface from "@/components/chat/ChatInterface"

const exampleImages = [
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/471dcbd7-1a63-4161-7063-ba20c78e3800/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/471dcbd7-1a63-4161-7063-ba20c78e3800/public",
    title: "Coinbase Cloud",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4dbc8fc4-91aa-49e8-4fed-e9db268e4500/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4dbc8fc4-91aa-49e8-4fed-e9db268e4500/public",
    title: "Direct Express",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e29bf028-3301-4718-9462-e8b498306300/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e29bf028-3301-4718-9462-e8b498306300/public",
    title: "tldr",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e29bf028-3301-4718-9462-e8b498306300/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e29bf028-3301-4718-9462-e8b498306300/public",
    title: "Petra",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b97a450c-6937-46d0-d83e-9164d38a8200/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b97a450c-6937-46d0-d83e-9164d38a8200/public",
    title: "Elevenist",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4dbc8fc4-91aa-49e8-4fed-e9db268e4500/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/4dbc8fc4-91aa-49e8-4fed-e9db268e4500/public",
    title: "Direct Express",
  },
  {
    url: "https://www.dropbox.com/scl/fi/09fs749v22xarlmy4lljx/Group-1319.png?rlkey=w7tqbewjdge2pw250ksk6z0b9&st=9tdoj3xp&raw=1",
    title: "A blurry photo of white flowers in a field",
    link: "https://www.dropbox.com/scl/fi/09fs749v22xarlmy4lljx/Group-1319.png?rlkey=w7tqbewjdge2pw250ksk6z0b9&st=9tdoj3xp&raw=1",
  },
  {
    url: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/471dcbd7-1a63-4161-7063-ba20c78e3800/public",
    link: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/471dcbd7-1a63-4161-7063-ba20c78e3800/public",
    title: "clouds",
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
      className="flex w-full h-screen justify-center items-center bg-[radial-gradient(ellipse_150%_80%_at_50%_100%,rgba(190,150,210,1)_5%,rgba(200,160,220,1)_15%,rgba(210,170,230,1)_25%,rgba(200,180,220,1)_35%,rgba(185,170,210,1)_50%,rgba(175,185,220,1)_70%,rgba(180,200,235,1)_100%)] overflow-hidden relative pt-20"
      ref={containerRef}
    >
      {/* CSS for animations */}
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
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <FloatingElement depth={0.5} className="top-[5%] left-[2%]">
            <a
              href={exampleImages[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[0].url}
                alt={exampleImages[0].title}
                className="float-image w-10 h-10 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[8%] left-[20%]">
            <a
              href={exampleImages[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[1].url}
                alt={exampleImages[1].title}
                className="float-image w-30 h-15 object-fill rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>

          <FloatingElement depth={2} className="top-[3%] left-[75%]">
            <a
              href={exampleImages[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[2].url}
                alt={exampleImages[2].title}
                className="float-image w-11 h-14 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[6%] left-[90%]">
            <a
              href={exampleImages[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[3].url}
                alt={exampleImages[3].title}
                className="float-image w-9 h-9 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>

          <FloatingElement depth={1} className="top-[35%] left-[1%]">
            <a
              href={exampleImages[4].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[4].url}
                alt={exampleImages[4].title}
                className="float-image w-14 h-14 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[40%] left-[88%]">
            <a
              href={exampleImages[7].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[7].url}
                alt={exampleImages[7].title}
                className="float-image w-12 h-16 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>

          <FloatingElement depth={4} className="top-[85%] left-[5%]">
            <a
              href={exampleImages[5].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[5].url}
                alt={exampleImages[5].title}
                className="float-image w-16 h-18 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[88%] left-[78%]">
            <a
              href={exampleImages[6].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[6].url}
                alt={exampleImages[6].title}
                className="float-image w-12 h-12 object-cover rounded-sm cursor-pointer shadow-md hover:shadow-lg"
                style={{ opacity: 0.35 }}
              />
            </a>
          </FloatingElement>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <FloatingElement depth={0.5} className="top-[8%] left-[5%]">
            <a
              href={exampleImages[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[0].url}
                alt={exampleImages[0].title}
                className="float-image float-image-desktop w-24 h-24 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[12%] left-[28%]">
            <a
              href={exampleImages[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[1].url}
                alt={exampleImages[1].title}
                className="float-image float-image-desktop w-28 h-28 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[5%] left-[75%]">
            <a
              href={exampleImages[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[2].url}
                alt={exampleImages[2].title}
                className="float-image float-image-desktop w-32 h-40 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[3%] left-[85%]">
            <a
              href={exampleImages[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[3].url}
                alt={exampleImages[3].title}
                className="float-image float-image-desktop w-24 h-24 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>

          <FloatingElement depth={1} className="top-[40%] left-[3%]">
            <a
              href={exampleImages[4].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[4].url}
                alt={exampleImages[4].title}
                className="float-image float-image-desktop w-32 h-32 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={2} className="top-[55%] left-[88%]">
            <a
              href={exampleImages[7].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[7].url}
                alt={exampleImages[7].title}
                className="float-image float-image-desktop w-28 h-36 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>

          <FloatingElement depth={4} className="top-[75%] left-[10%]">
            <a
              href={exampleImages[5].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[5].url}
                alt={exampleImages[5].title}
                className="float-image float-image-desktop w-36 h-44 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>
          
          <FloatingElement depth={1} className="top-[78%] left-[78%]">
            <a
              href={exampleImages[6].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block pointer-events-auto"
            >
              <img
                src={exampleImages[6].url}
                alt={exampleImages[6].title}
                className="float-image float-image-desktop w-26 h-26 object-cover rounded-sm cursor-pointer shadow-lg hover:shadow-xl"
                style={{ opacity: 0.4 }}
              />
            </a>
          </FloatingElement>
        </div>
      </Floating>
      
      {/* Chat Widget - Centered and responsive */}
      <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
        <div className="w-full max-w-2xl mx-4 md:mx-8 pointer-events-auto">
          <ChatInterface />
        </div>
      </div>
    </div>
  )
}

export default Preview