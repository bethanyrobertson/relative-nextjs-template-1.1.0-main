"use client";

import { Sparkles, Check, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import CategoryBadge from "./category-badge";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features: {
  id: string;
  title: string;
  description: React.ReactNode;
  href: string;
  image: string;
}[] = [
  {
    id: "feature-1",
    title: "Token Management",
    description: (
      <ul>
        <li>• Full CRUD operations with validation</li>
        <li>• Bulk upload with error handling and duplicate detection</li>
        <li>• Export functionality maintaining data integrity</li>
      </ul>
    ),
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "feature-2",
    title: "User Experience",
    description: (
      <ul>
        <li>• Real-time filtering without page refreshes</li>
        <li>• Intuitive category-based navigation</li>
        <li>• Visual token previews for immediate recognition</li>
      </ul>
    ),
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "feature-3",
    title: "Developer Integration",
    description: (
      <ul>
        <li>• RESTful API for programmatic access</li>
        <li>• JSON format compatibility with popular build tools</li>
        <li>• Comprehensive error handling and validation</li>
      </ul>
    ),
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
];

const TechnicalFeaturesDesignSystem = () => {
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
          <div className="aspect-5/6 overflow-clip rounded-3xl bg-accent">
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
          <div className="flex shrink-0 flex-col md:w-1/2 md:pr-8 lg:pr-24 lg:text-left 2xl:pr-32">
            <div className="w-fit">
              <CategoryBadge
                label= "RESULTS"
                icon={Sparkles}
              />
            </div>
            <h2 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Technical Implementation
            </h2>
            <p className="mb-16 text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition data-open:bg-white"
                  data-open={selection === i ? "true" : undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm font-bold font-mono text-accent-foreground">
                      {feature.title}
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-open:bg-primary group-data-open:text-primary-foreground">
                      <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-open:rotate-180" />
                    </div>
                  </div>
                  <div className="hidden text-sm font-medium group-data-open:block">
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

export { TechnicalFeaturesDesignSystem };