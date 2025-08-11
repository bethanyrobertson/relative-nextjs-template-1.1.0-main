import { Cpu, Search, Pencil, Rocket, Code } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const DATA = [
  {
    title: "Audit",
    description:
      "Examining the current state of the blog and painpoints for users",
    icon: Search,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      alt: "Audit",
    },
  },
  {
    title: "Discovery",
    description:
      "Competitor analysis, user research, and market insights to inform your strategy.",
    icon: Rocket,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      alt: "Discovery",
    },
    reverse: true,
  },
  {
    title: "Design",
    description:
      "Design system, wireframing, and prototyping",
    icon: Pencil,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      alt: "Design",
    },
  },
  {
    title: "Build",
    description:
      "Handoff to engineering and collection of data",
    icon: Code,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      alt: "Build",
    },
    reverse: true,
  },
];

const Casestudy3accelerate = () => {
  return (
    <section className="py-0">
      <div className="container overflow-hidden prose dark:prose-invert p-8 rounded-lg mb-8 lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:pt-20!">
        {DATA.map((item, index) => (
          <div key={index} className="relative flex">
            <div
              className={`flex w-full justify-center px-1 py-4 text-end md:gap-6 lg:gap-10 ${item?.reverse ? "lg:flex-row-reverse lg:text-start" : ""} `}
            >
              <div className="flex-1 max-lg:hidden">
                <p className="font-semibold tracking-[-0.96px]">{item.title}</p>
                <p
                  className={`mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground ${item?.reverse ? "" : "ml-auto"}`}
                >
                  {item.description}
                </p>
              </div>
              <div className="z-[-1] size-fit -translate-y-5 bg-background p-4 max-lg:-translate-x-4">
                <div className="rounded-[10px] bg-card p-[5px] shadow-md">
                  <div className="size-fit rounded-md bg-muted p-1">
                    <item.icon className="size-4 shrink-0" />
                  </div>
                </div>
              </div>
              <div className="flex-1 max-lg:-translate-x-4">
                <div className="text-start lg:pointer-events-none lg:hidden">
                  <p className="tracking-[-0.96px]">{item.title}</p>
                  <p className="mt-2.5 mb-10 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-start justify-start">
                  <div className={` ${item?.reverse ? "lg:ml-auto" : ""}`}>
                    <div className="px-6 lg:px-10">
                    </div>
                    <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">

                      <img
                        src={item.image.src}
                        width={400}
                        height={500}
                        alt={item.image.alt}
                        className="object-contain rounded-lg dark:invert"
                      />
                    </div>
                    <div className="px-6 lg:px-10">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${index === DATA.length - 1 ? "bg-linear-to-b from-foreground/10 via-foreground/10 to-transparent" : "bg-foreground/10"}`}
            >
              {index == 0 && (
                <div className="h-4 w-[3px] -translate-y-full bg-linear-to-b from-transparent to-foreground/10"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Casestudy3accelerate };
