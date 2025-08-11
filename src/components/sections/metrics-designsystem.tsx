import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    heading: "> 200ms",
    subheading: "Response Time",
    text: "Optimized MongoDB queries and efficient caching",
  },
  {
    heading: "100%",
    subheading: "Data Retention",
    text: "Robust validation and error handling protect token integrity",
  },
  {
    heading: "98%",
    subheading: "Uptime",
    text: "Reliable Railway deployment with automatic health monitoring",
  },
];

const MetricsDesignSystem = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="pt-10 pb-10">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {statsData.map(
              ({ heading, subheading, text }, i) => (
                <a href="#" key={`link${i}`} className="block w-full">
                  <Card className="rounded-3xl bg-muted border shadow-none p-10">
                    <CardContent className="block p-0">
                      <div className="flex items-center">
                      <div >
                      <div className="mt-6 text-5xl text-foreground font-mono ">
                        {heading}
                      </div>
                      <div className="mb-4 text-3xl font-bold text-foreground font-mono ">
                        {subheading}
                      </div>
                      <p className="mb-4 text-md font-sans text-muted-foreground">
                        {text}
                      </p>
                      </div>
                       </div>
                    </CardContent>
                  </Card>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsDesignSystem;
