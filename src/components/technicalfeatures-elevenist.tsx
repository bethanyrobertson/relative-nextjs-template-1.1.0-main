"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

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
    title: "Filtering",
    description: (
      <p>
        Enhanced filtering by emoji categories and real-time updates
      </p>
    ),
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "feature-2",
    title: "Favorites",
    description: (
      <p>
        Personal emoji favorites for quick access
      </p>
    ),
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "feature-3",
    title: "Community Driven",
    description: (
      <p>
        Created semantic meaning through community usage patterns
      </p>
    ),
    href: "#",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
];

const TechnicalFeaturesElevenist = () => {
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
          <div className="aspect-5/6 overflow-clip rounded-full bg-accent">
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
            <h2 className="mb-6 text-3xl font-serif md:text-4xl lg:text-6xl">
              Turning Emoji Chaos into Meaningful Content Organization
            </h2>
            <p className="mb-16 text-muted-foreground lg:text-xl">
             Instead of thumbnails or predefined categories, users must select an emoji when sharing any article. This emoji becomes the article's permanent category tag, chosen by the first person to share it.
             How It Works in Practice:

             • User shares article → Must choose emoji → Emoji becomes article's category
             • Community adoption → Emoji meanings emerge organically → Semantic patterns develop
             • Personal curation → Users save favorite emojis → Quick filtering by topics they care about
            </p>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li
                  key={feature.id}
                  className="group relative w-full cursor-pointer px-6 py-3 transition data-open:bg-accent"
                  data-open={selection === i ? "true" : undefined}
                  onClick={() => setSelection(i)}
                >
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-sm font-semibold text-accent-foreground">
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

export { TechnicalFeaturesElevenist };