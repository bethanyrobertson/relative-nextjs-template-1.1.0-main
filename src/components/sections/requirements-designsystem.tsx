import { Cpu, Database, Globe, ShieldCheck, Blocks } from "lucide-react";
import SectionHeader from "../section-header";

const features = [
  {
    title: "Administrative Control",
    description:
      "System managers need full CRUD capabilities and governance oversight.",
    icon: Globe,
  },
  {
    title: "Developer Integration",
    description:
      "API-first approach for seamless integration into existing build processes. Teams needed programmatic access that could plug directly into their deployment pipelines.",
    icon: Cpu,
  },
  {
    title: "Team Collaboration",
    description:
      "Role-based permissions supporting different contribution levels without compromising system integrity. The solution needed to support browsing and reference use cases without enabling destructive actions.",
    icon: Database,
  },
  {
    title: "Data Portability",
    description:
      "Import/export functionality that respects existing team workflows and tool investments. Any new system needed to integrate with these existing assets rather than requiring complete workflow replacement.",
    icon: ShieldCheck,
  },
];

const RequirementsDesignSystem = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="relative container">
        <div className="absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border" />
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt="placeholder"
          className="relative left-1/2 aspect-video max-h-[680px] w-screen max-w-none -translate-x-1/2 rounded-b-xl border-b border-border object-cover lg:static lg:max-w-full lg:translate-x-0 lg:border-x"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-10">
          <div className="mb-8 lg:col-span-4">
            <SectionHeader
              category="BACKGROUND"
              title="Requirements"
              icon={Blocks}
              description="Through extensive stakeholder interviews across design and development teams, plus competitive analysis of existing design system tools, I identified the critical gaps between how teams want to work and what current solutions actually support:"
              className="border-none"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
            {features.map((feature, idx) => (
              <div key={idx}>
                <feature.icon className="size-6" />
                <h3 className="mt-4 font-mono text-foreground font-bold">{feature.title}</h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { RequirementsDesignSystem };
