import { Wifi, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero115Props {
  icon?: React.ReactNode;
  heading: string;
  description: string;
  button: {
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HeroBlock3 = ({
  heading = "Case study title",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder",
}: Hero115Props) => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl">
              {heading}
            </h2>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBlock3;