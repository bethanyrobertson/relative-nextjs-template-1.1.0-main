import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionHeader from "../section-header";

import {
  Blocks
} from 'lucide-react';

type ItemType = {
  title: string;
  description: string;
  image: { src: string; alt: string; className: string };
  containerClassName?: string;
};

const ITEMS: ItemType[] = [
  {
    title: "Infrastructure Over Documentation",
    description:
      "By focusing on programmatic access and automation, the system becomes self-sustaining rather than dependent on continuous curation efforts.",
    containerClassName: "flex-1",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Infrastructure Over Documentation",
      className:
        "lg:translate-x-20 translate-x-6 md:translate-x-10 rounded-b-none",
    },
  },
  {
    title: "Strategic Constraint Application",
    description: "Design system tools succeed through predictable behavior rather than extensive feature sets—teams adopt tools they can depend on, not necessarily the most capable ones.",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      alt: "Strategic Constraint Application",
      className: "lg:translate-x-20 translate-x-6 md:translate-x-10",
    },
  },
  {
    title: "Cross-Disciplinary Design Thinking",
    description:
      "Implementing both the user interface and API architecture deepened my appreciation for how design decisions impact technical implementation.",
    containerClassName: "mb-10 translate-x-6 md:translate-x-10",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      alt: "Cross-Disciplinary Design Thinking",
      className: "",
    },
  },
  {
    title: "Systematic Problem Solving",
    description:
      "Success is measured by how well the system reduces friction across different team roles and technical contexts.",
    containerClassName: "mx-10 my-6 aspect-280/83 ",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      alt: "Systematic Problem Solving",
      className: "",
    },
  },
  {
    title: "Anticipatory Design Strategy",
    description:
      "Building extensible foundations that evolve with design system maturity is more valuable than solving every immediate problem perfectly.",
    containerClassName: "mb-10 mx-10 lg:mx-20 aspect-230/124",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      alt: "Anticipatory Design Strategy",
      className: "",
    },
  },
];

const ReflectionDesignSystem = () => {
  return (
    <section className="bg-muted py-32">
      <div className="container">
        <SectionHeader
            category="INSIGHTS"
            title="Sustainable design systems must solve operational problems, not just aesthetic ones."
            icon={Blocks}
            description="My understanding of design systems transformed from curated asset libraries into foundational infrastructure that requires the same strategic thinking as any platform or service offering."
            className="border-none"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:max-h-[800px] md:grid-cols-6 md:grid-rows-5 lg:mt-20">
          {ITEMS.map((item, i) => {
            const gridClasses = {
              0: "md:col-span-3 md:row-span-3",
              1: "md:col-span-3 md:row-span-3 md:col-start-4",
              2: "md:col-span-2 md:row-span-2 md:row-start-4",
              3: "md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4",
              4: "md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4",
            }[i];
            return <Item key={i} {...item} className={gridClasses} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Item = ({
  title,
  description,
  image,
  className,
  containerClassName,
}: ItemType & { className?: string }) => {
  return (
    <Card
      className={cn(
        "relative flex max-h-[400px] flex-col overflow-hidden border px-0 shadow-none md:max-h-none",
        className,
      )}
    >
      <CardHeader className="mb-2">
        <p className="inline font-mono font-bold text-sm text-foreground">
          {title}{" "}
        </p>
        <p className="text-muted-foreground text-sm font-sans">
            {description}
        </p>
      </CardHeader>

      <CardContent
        className={cn("relative flex overflow-hidden p-0", containerClassName)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={cn(
            "flex-1 rounded-xl object-cover",
            image.className,
          )}
        />
      </CardContent>
    </Card>
  );
};

export { ReflectionDesignSystem };
