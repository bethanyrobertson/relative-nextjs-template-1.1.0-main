"use client";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import React from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function HeroAbout()  {
  const images = [
    {
      src: "https://www.dropbox.com/scl/fi/86xua1h7v77ynaudgxrnh/Screen-Shot-2022-11-15-at-7.47.06-PM.png?rlkey=n40bmtqk49f60vhx4oopkbm33&st=h4jl8x28&raw=1",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://www.dropbox.com/scl/fi/q914haxv61bmgttcjs500/Screenshot-2023-10-29-at-5.44.32-PM.png?rlkey=7ezzaiylj7tcs0rsgxdqg49z0&st=mmtauog5&raw=1",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
    },
    {
      src: "https://www.dropbox.com/scl/fi/86xua1h7v77ynaudgxrnh/Screen-Shot-2022-11-15-at-7.47.06-PM.png?rlkey=n40bmtqk49f60vhx4oopkbm33&st=hkse4lkj&raw=1",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },

    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4">
          <p className="z-10 px-10 text-center tracking-tight text-muted-foreground/40 lg:text-lg">
            Hello! I am Bethany. 
          </p>
          <h1 className="text-center font-playfair text-5xl tracking-tighter italic lg:text-6xl">
            Designer and Developer
          </h1>
        </div>

        <div className="relative mt-16 flex h-full flex-col items-center justify-center">
          <div className="pointer-events-none relative z-20 mx-auto flex h-112 w-80 justify-center overflow-hidden rounded-3xl">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                className="h-full w-full object-cover"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 1, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(4px)" }}
                transition={{ duration: 1.5 }}
              />
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute z-10 h-192 w-52 rotate-65 rounded-[100%] bg-pink-500 blur-2xl"
          />
          <div className="relative z-10 mx-auto mt-10 mb-12 flex w-fit justify-center">

            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="absolute top-3 -right-30 h-1"
            >
            </motion.div>
          </div>
          <div
            className="absolute right-0 bottom-0 left-0 h-125"
            style={{ clipPath: "inset(0 0 -100% 0)" }}
          >
            <div className="absolute top-0 z-2 h-36 w-full bg-gradient-to-t from-transparent to-background to-70% dark:to-background" />

            <div className="absolute bottom-0 z-2 h-36 w-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row ![animation-duration:10s]": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function Card() {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-17 overflow-hidden rounded-3xl border border-muted p-4",
        "bg-gradient-to-b from-muted/50 to-background",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    ></motion.div>
  );
}

export function SkiperUiMarquee() {
  return (
    <div className="mx-auto rotate-90 px-4 py-12 md:px-8">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center justify-center"
            >
              <Marquee reverse pauseOnHover repeat={4}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Card key={idx} />
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
