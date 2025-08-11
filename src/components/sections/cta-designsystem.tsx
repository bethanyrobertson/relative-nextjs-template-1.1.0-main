import { ArrowRight, Book, ChevronRight, File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CtaDesignSystem = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 flex-col gap-10 bg-muted rounded-xl border p-6 shadow-none lg:grid-cols-2 lg:px-20 lg:py-16">
          <div>
            <h2 className="mb-2 text-5xl font-mono tracking-tighter text-foreground lg:text-5xl">
              See it in action
            </h2>
            <p className="text-muted-foreground">
              Email:
              Password:
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
                <Button asChild className="w-full sm:w-auto">
                    <a href="https://github.com/bethanyrobertson/design-system-manager.git">
                        Demo
                        <ArrowRight className="ml-2 size-4" />
                    </a>
                </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <File className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-bold font-mono text-foreground">
                      Documentation
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
            <a href="#">
              <Card className="flex flex-row items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-accent">
                <div className="flex items-start gap-2">
                  <Book className="size-4" />
                  <div>
                    <h5 className="mb-2 leading-4 font-mono text-foreground font-bold">
                      Github Repository
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor, sit amet consectetur.
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-6" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CtaDesignSystem };