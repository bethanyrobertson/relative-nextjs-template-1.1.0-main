import { Button } from "@/components/ui/button";

interface Cta12Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const DownloadResume = ({
  heading = "Resume",
  description = "Simple 2-pager",
  buttons = {
    primary: {
      text: "Download Resume",
      url: "/assets/Bethany_Resume.pdf",
    },
  },
}: Cta12Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-muted rounded-lg p-8 md:rounded-xl lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {heading}
            </h3>
            <p className="text-muted-foreground mb-8">
              {description}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              {buttons.primary && (
                <Button size="lg" className="w-full rounded-full font-mono sm:w-auto" asChild>
                  <a href={buttons.primary.url} download="Bethany_Resume.pdf">{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadResume;
