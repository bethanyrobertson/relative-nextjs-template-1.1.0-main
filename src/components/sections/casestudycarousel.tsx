"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import PixelateSvgFilter from "../fancy/filter/pixelate-svg-filter";

// Simple hook to detect mobile devices
const useIsMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const images = [
  {
    id: 2,
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/acb0fd73-ae88-4c5b-cb79-6327ff22d600/public",
    title: "DIRECT EXPRESS",
    code: "0-1 Product & Design System",
    route: "/casestudydirectexpress"
  },
  {
    id: 3,
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/d7a8d30f-01ab-436b-1201-01e74c97da00/public",
    title: "COINBASE CLOUD",
    code: "Brand & Design System",
    route: "/casestudycloud"
  },
  {
    id: 6,
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random8.jpeg",
    title: "VECTOR API",
    code: "Code & Design",
    route: "/casestudydesignsystem"
  },
  {
    id: 6,
    src: "https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6ac65426-ca69-4c04-da99-48079b309800/public",
    title: "AI PORTFOLIO NAVIGATOR",
    code: "Code & Design",
    route: "/casestudychatbot"
  },
];

const CaseStudyCarousel= () => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <section className="bg-[#D7E0E1] dark:bg-[#164E63] py-32" style={{ backgroundColor: 'var(--carousel-bg, #D7E0E1)' }}>
      <div className="relative container overflow-x-clip">
        <div className="flex flex-col items-center gap-10 justify-center">
          <h1 className="max-w-xl text-center font-mono text-5xl md:text-6xl">
            More Case Studies
          </h1>
          <div className="flex w-full items-center justify-center gap-1">
            {images
              .slice(0, useIsMobile() ? 4 : images.length)
              .map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative cursor-pointer overflow-hidden rounded-3xl border"
                  initial={{ width: "2.5rem", height: "20rem" }}
                  animate={{
                    width: activeImage === index ? "24rem" : "5rem",
                    height: activeImage === index ? "24rem" : "24rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => setActiveImage(index)}
                  onHoverStart={() => setActiveImage(index)}
                >
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute h-full w-full"
                      />
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activeImage === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-10"
                      >
                        <p className="text-left text-xs text-white/50">
                          {image.code}
                        </p>
                        <Link href={image.route}>
                          <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#dac4e1] px-4 py-2 text-xs whitespace-nowrap">
                           {image.title} <ArrowRight size={14} />
                          </button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img
                    src={image.src}
                    className="size-full object-cover"
                    alt={image.title}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CaseStudyCarousel };