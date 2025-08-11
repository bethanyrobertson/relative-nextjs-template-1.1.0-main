"use client";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Lock,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface feature {
  title: string;
  label: string;
  icon: LucideIcon;
  description: string;
  background: string;
}

const FEATURES: Array<feature> = [
  {
    title: "AI-Driven Analysis of Natural Patterns",
    label: "Patterns Identified",
    icon: Workflow,
    description:
      "Utilize AI to seamlessly identify and analyze natural patterns",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  },
  {
    title: "AI-Powered Security in Natural Environments",
    label: "Security Enhanced",
    icon: Lock,
    description:
      "AI technology ensures the protection of",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  },
  {
    title: "Enterprise-Grade AI Safeguards for Ecology",
    label: "Safeguards Activated",
    icon: ShieldCheck,
    description:
      "Advanced AI safeguards ensure the accuracy",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg",
  },
  {
    title: "AI Interpretation of Natural Communication",
    label: "Structure Analyzed",
    icon: SlidersHorizontal,
    description:
      "AI systems adapt to various natural",
    background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
  },
  {
    title: "Multilingual AI for Global Ecology Studies",
    label: "Languages Supported",
    icon: Globe,
    description:
      "AI facilitates global ecological studies",
    background:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/vasilis-karkalas-LadCWrSL7X8-unsplash.jpg",
  },
];

const ImageCarousel3 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="p-8 bg-card border prose dark:prose-invert rounded-xl">
      <div>
        <h2>Accessibility</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-0 pt-2">
            {FEATURES.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-0 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="flex flex-col p-4">
                      <div
                        style={{ backgroundImage: `url("${card.background}")` }}
                        className="relative flex aspect-[0.935802469] w-full flex-col justify-between overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-4"
                      >
                      </div>
                      <div className="flex w-full flex-col gap-4 pt-0">
                        <p className="text-sm">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-0 justify-center hidden gap-8 md:flex">
            <CarouselPrevious className="static size-12 translate-y-0" />
            <CarouselNext className="static size-12 translate-y-0" />
          </div>
          <div className="mt-6 flex w-full items-center gap-2 md:hidden">
            {Array.from({ length: FEATURES.length }).map((_, i) => (
              <button
                onClick={() => goToSlide(i % FEATURES.length)}
                key={`carousel-btn-${i}`}
                className="h-4 w-full"
              >
                <div
                  className={` ${current == i + 1 ? "bg-primary" : "bg-muted-2"} my-auto h-1 w-full rounded-full`}
                ></div>
              </button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel3;
