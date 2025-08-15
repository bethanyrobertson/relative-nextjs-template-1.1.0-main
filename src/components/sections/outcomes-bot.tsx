import SectionHeader from "../section-header";

 import {
  Blocks
} from 'lucide-react';

const OutcomesBot = () => {
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
              src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/fbfc2dc1-a914-40ae-cf78-d8227ddde700/public"
              alt="feature"
              className="aspect-video max-h-96 w-full rounded-lg object-cover"
            />
            <p className="mt-8 mb-2 text-sm font-mono font-bold">Enhanced professional brand differentiation</p>
            <p className="mb-4 text-sm text-muted-foreground">
             Chat interface uses same visual language as portfolio projects
            </p>
          </div>
          <div>
            <img
              src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/c7e595f7-35fe-422b-f054-b39668029000/public"
              alt="feature"
              className="aspect-video max-h-96 w-full rounded-lg object-cover"
            />
            <p className="mt-8 mb-2 text-sm font-mono font-bold">Successful Interactions</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Single source of truth eliminates token drift between design and code.
            </p>
          </div>
          <div>
            <img
              src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/96236678-a817-4af3-3b3e-0c13c045d100/public"
              alt="feature"
              className="aspect-video max-h-96 w-full rounded-lg object-cover"
            />
            <p className="mt-8 mb-2 font-mono text-sm font-bold">Enhanced Collaboration</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Increased inbound opportunities by 150%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OutcomesBot };