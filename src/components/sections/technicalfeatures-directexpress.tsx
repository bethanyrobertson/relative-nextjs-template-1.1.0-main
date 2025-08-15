"use client";

import { Sparkles, ChevronDown, Puzzle } from "lucide-react";
import { useEffect, useState } from "react";
import CategoryBadge from "../category-badge";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    id: "feature-1",
    title: "Accessible",
    description:
      "High contrast ratios and scalable design elements, Noto Sans type for multi -language support",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "feature-2",
    title: "Reassuring",
    description:
      "Warm color palette to reduce anxiety around financial management",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "feature-3",
    title: "Simple",
    description:
      "Clean, uncluttered layouts that reduce cognitive load, components specifically designed for accessibility",
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
];

const TechnicalFeaturesDirectExpress = () => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.scrollTo(selection);
  }, [carouselApi, selection]);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="aspect-5/6 overflow-clip rounded-3xl bg-white">
            <Carousel
              setApi={setCarouselApi}
              className="h-full w-full [&>div]:h-full"
            >
              <CarouselContent className="mx-0 h-full w-full">
                {features.map((feature) => (
                  <CarouselItem key={feature.id} className="px-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex shrink-0 flex-col gap-6 md:w-1/2 md:pr-8 lg:pr-24 lg:text-left 2xl:pr-32">
            <div className="w-fit">
              <CategoryBadge
                label="DESIGN SYSTEM"
                icon={Puzzle}
              />
            </div>
            <h2 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Focusing on Accessibility and Usability Through Visual Identity Principles
            </h2>
            <p className="mb-16 text-muted-foreground">
              Created a trustworthy, accessible identity that balanced government authority with human warmth. The visual system needed to work across digital platforms, printed materials, and physical card design.
            </p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className={`group relative w-full cursor-pointer px-6 py-3 transition-all duration-200 ${
                    selection === i ? 'bg-accent rounded-xl' : ''
                  }`}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="font-bold font-mono text-foreground">
                      {feature.title}
                    </div>
                    <div className={`flex size-8 items-center justify-center rounded-full transition-all duration-200 ${
                      selection === i 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${
                        selection === i ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </div>
                  <div className={`text-sm transition-all duration-200 ${
                    selection === i ? 'block opacity-100 max-h-32' : 'hidden opacity-0 max-h-0'
                  }`}>
                    <p className="my-4 text-muted-foreground lg:my-6">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TechnicalFeaturesDirectExpress };