"use client";

import { AlignLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import React from "react";

import { cn } from "@/lib/utils";
import { Casestudy3accelerate } from "@/components/sections/casestudy3accelerate";
import { DesignSystem3 } from "@/components/sections/designsystem3";
import ImageCarousel3 from "@/components/sections/imagecarousel-casestudy3";
import HeroBlock3 from "@/components/sections/heroblock3";

export default function Casestudy3() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <div className="container">
      <div>
        <HeroBlock3
          heading="Your Heading Here"
          description="Your description here."
          button={{ text: "Learn More", url: "#" }}
        />
      </div>
      <div className="relative mt-16 flex flex-col gap-x-6 gap-y-32 lg:flex-row">
        <div className="mx-auto h-fit max-w-prose lg:sticky lg:top-10 lg:mx-0 lg:w-64 lg:max-w-none">
          <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-1">
            <div className="col-span-2 lg:col-span-1">
              <h2 className="font-semibold">Contributions</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                A modern platform designed to simplify workflows, automate
                processes, and drive innovation at scale. It is the central
                foundation for product and customer data, on top of which high
                impact workflows are built.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Sector</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Technology; Automation
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Team</h2>
              <p className="text-muted-foreground mt-1 text-sm">10-100</p>
            </div>
            <div>
              <h2 className="font-semibold">Location</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                San Francisco, California
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Year</h2>
              <p className="text-muted-foreground mt-1 text-sm">2020</p>
            </div>
            <div>
              <h2 className="font-semibold">Funding</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                $25m (Series A)
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mx-auto max-w-prose lg:max-w-4xl lg:px-20">
            <div className="mt-4">
              <section
                id="section1"
                ref={(ref) => addSectionRef("section1", ref)}
                className="prose dark:prose-invert border bg-card p-8 rounded-xl mb-16"
              >
                <h2>Outcome</h2>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  <div className="flex flex-col gap-0 pb-2">
                    <p className="text-4xl font-medium md:text-5xl">21M</p>
                    <p className="text-muted-foreground">
                      Global Reach of Users
                    </p>
                  </div>
                  <div className="flex flex-col gap-0 pb-2">
                    <p className="text-4xl font-medium md:text-5xl">12+</p>
                    <p className="text-muted-foreground">
                      Years of Expertise
                    </p>
                  </div>
                  <div className="flex flex-col gap-0 pb-2">
                    <p className="text-4xl font-medium md:text-5xl">654</p>
                    <p className="text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </section>
              <section
                id="section2"
                ref={(ref) => addSectionRef("section2", ref)}
                className="prose dark:prose-invert border bg-card p-8 rounded-xl mb-8"
              >
                <h2>Background</h2>
                <p>
                  The king&apos;s subjects were not amused. They grumbled and
                  complained, but the king was firm:
                </p>
                <ul>
                  <li>1st level of puns: 5 gold coins</li>
                  <li>2nd level of jokes: 10 gold coins</li>
                  <li>3rd level of one-liners : 20 gold coins</li>
                </ul>
                <p>
                  As a result, people stopped telling jokes, and the kingdom
                  fell into a gloom. But there was one person who refused to
                  let the king&apos;s foolishness get him down: a court jester
                  named Jokester.
                </p>
              </section>
              <section
                id="section3"
                ref={(ref) => addSectionRef("section3", ref)}
                className="mb-8"
              >
                <ImageCarousel3 />
              </section>
              <section
                id="section4"
                ref={(ref) => addSectionRef("section4", ref)}
                className="prose dark:prose-invert border bg-card p-8 rounded-xl mb-8"
              >
                <h2>Process</h2>
                <p>
                  Jokester began sneaking into the castle in the middle of the
                  night and leaving jokes all over the place: under the king's
                  pillow, in his soup, even in the royal toilet. The king was
                  furious, but he couldn't seem to stop Jokester.
                </p>
                <Casestudy3accelerate />
              </section>
              <section className="mb-8">
                <DesignSystem3 />
              </section>
              <section
                id="section5"
                ref={(ref) => addSectionRef("section5", ref)}
                className="prose dark:prose-invert bg-card border rounded-xl p-8 mb-8"
              >
                <h2>Next Steps</h2>
                <p>
                  The people of the kingdom, feeling uplifted by the laughter,
                  started to tell jokes and puns again, and soon the entire
                  kingdom was in on the joke.
                </p>
                <p>
                  The king, seeing how much happier his subjects were,
                  realized the error of his ways and repealed the joke tax.
                  Jokester was declared a hero, and the kingdom lived happily
                  ever after.
                </p>
              </section>
            </div>
          </div>
          <div className="snap-item top-8 hidden h-fit bg-card rounded-xl border p-5 shrink-0 lg:block">
            <span className="flex snap-item items-center gap-2 text-sm">
              <AlignLeft className="h-4 w-4" />
              Contents
            </span>
            <nav className="mt-2 text-sm">
              <ul>
                <li>
                  <a
                    href="#section1"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section1"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    Outcome
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section2"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    Background
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section3"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#section4"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section4"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    Design System
                  </a>
                </li>
                <li>
                  <a
                    href="#section5"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section5"
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    Next Steps
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
