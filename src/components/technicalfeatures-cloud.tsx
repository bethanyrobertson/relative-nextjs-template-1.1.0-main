"use client";

import React from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import CategoryBadge from "./category-badge";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Feature = {
  id: string;
  title: string;
  description: React.ReactNode;
  href: string;
  image: string;
};

const features: Feature[] = [
  {
    id: "feature-1",
    title: "Color System",
    description:
        <div>
          <strong>Primary Palette:</strong>
          <br />
          <span>
            <strong>Cloud Blue (#0052FF):</strong> Trust, reliability, technical precision
          </span>
          <br />
          <span>
            <strong>Teal (#00D2FF):</strong> Innovation, growth, accessibility
          </span>
          <br />
          <span>
            <strong>Supporting Colors:</strong> Grays for enterprise professionalism
          </span>
          <br />
          <br />
          <span>
            The color system was designed to convey both technical sophistication and approachability, differentiating from Coinbase's consumer brand while maintaining family resemblance.
          </span>
        </div>,
    href: "#",
    image: "/images/casestudies/cloud/cloud-color.png",
  },
  {
    id: "feature-2",
    title: "Typography",
    description:
      <div>
        Making blockchain development accessible
      </div>,
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "feature-3",
    title: "Trusted Foundation",
    description:
      <p>
      Leveraging Coinbase's regulatory compliance and security reputation
      </p>,
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
];

const TechnicalFeaturesCloud = () => {
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
                label= "DESIGN SYSTEM"
                icon={Check}
              />
            </div>
            <h2 className="mt-6 mb-6 text-3xl font-serif md:text-4xl lg:text-6xl">
              Foundations
            </h2>
            <p className="mb-16 text-muted-foreground">
              "Built for developers, by developers" - positioning Coinbase Cloud as the technical foundation that powers the future of finance.
            </p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition rounded-lg data-open:bg-white"
                  data-open={selection === i ? "true" : undefined as string | undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm font-mono font-bold text-foreground">
                      {typeof feature.title === "string" ? feature.title : "Untitled"}
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground group-data-open:bg-primary group-data-open:text-primary-foreground">
                      <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[open=true]:rotate-180" />
                    </div>
                  </div>
                  <div className="hidden text-sm font-medium group-data-[open=true]:block">
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

export default TechnicalFeaturesCloud;