import SectionHeader from "../section-header";

 import {
  Blocks
} from 'lucide-react';

const OutcomesDesignSystem = () => {
  return (
    <section id="outcomes" className="py-32">
      <div className="container">
        <SectionHeader
            category="OUTCOMES"
            title="From Component Chaos to Design System Infrastructure"
            icon={Blocks}
            description="The design system API transformed how the team maintains design consistency, reducing synchronization overhead while enabling cross-functional collaboration."
            className="border-none"
        />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="feature"
              className="aspect-video max-h-96 w-full rounded-lg object-cover"
            />
            <p className="mt-8 mb-2 text-sm font-mono font-bold">Streamlined Workflow</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Teams can now synchronize design tokens in minutes rather than hours
            </p>
          </div>
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="feature"
              className="aspect-video max-h-96 w-full rounded-lg object-cover"
            />
            <p className="mt-8 mb-2 text-sm font-mono font-bold">Reduced Inconsistencies</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Single source of truth eliminates token drift between design and code.
            </p>
          </div>
          <div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="feature"
              className="aspect-video max-h-96 w-full rounded-lg object-cover"
            />
            <p className="mt-8 mb-2 font-mono text-sm font-bold">Enhanced Collaboration</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Role-based access enables safe contribution from all team members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OutcomesDesignSystem };
