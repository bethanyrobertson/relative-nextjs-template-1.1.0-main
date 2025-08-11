import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    heading: "548+",
    subheading: "Screens Designed",
    text: "Across mobile application",
  },
  {
    heading: "665",
    subheading: "Unique Components",
    text: "Across the Direct Express Design System",
  },
  {
    heading: "66 Pages",
    subheading: "Brand Guidelines",
    text: "Documentation for brand and product",
  },
];

const MetricsDex = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="pt-10 pb-10">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {statsData.map(
              ({ heading, subheading, text }, i) => (
                <a href="#" key={`link${i}`} className="block w-full">
                  <Card className="rounded-3xl border-none bg-[#ddeceb] dark:bg-card shadow-none p-10">
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

export default MetricsDex;