import { Check, Heart } from "lucide-react";
import SectionHeader from "../section-header";

import { Badge } from "@/components/ui/badge";

const PillarsDesignSystem = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <SectionHeader
          category="SOLUTION"
          title="Infrastructure Choices"
          icon={Heart}
          description="These infrastructure decisions prioritize rapid iteration, organizational scalability, and reduced operational complexity—enabling focus on user experience and design system adoption rather than technical maintenance."
          className="border-none"
        />
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3">
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-mono text-foreground font-bold"> Railway Deployment</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-sm">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Selected for seamless GitHub integration and automatic deployments, reducing operational overhead
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Design System Iteration Speed: Automatic deployments enable rapid prototyping and testing of design system changes during critical early adoption phases
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Version Control Integration: Direct GitHub connection ensures design system changes are tracked and documented for governance processes
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-mono text-foreground font-bold">MongoDB Atlas</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-sm">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Evolutionary Schema Design: Document storage accommodates token structure evolution without database migrations that disrupt production usage
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Design System Discovery: Native text search enables intuitive token discovery workflows that determine tool adoption success
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Organizational Scaling: Managed performance optimization supports growth from team usage to enterprise adoption without infrastructure redesign
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="font-mono font-bold">JWT Authentication</h3>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground text-sm">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  API-First Security: Stateless tokens enable secure programmatic access essential for build pipeline integration and developer adoption
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Microservices Architecture: Stateless authentication enables future expansion into specialized services without complex session management
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Team Collaboration Security: JWT enables role-based access control essential for design system governance, ensuring safe collaboration between designers and developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsDesignSystem;

