import SectionHeader from "../section-header";

import {
  Loader,
} from 'lucide-react';

const FeaturesDeliveredDesignSystem = () => {
  return (
    <section className="py-32">
      <div className="container">
        <SectionHeader
          category="FEATURES"
          title="Features Delivered"
          icon={Loader}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-foreground font-mono text-sm font-bold">
                Comprehensive Token Operations
              </p>
              <ul className="text-muted-foreground text-sm font-sans space-y-2 list-disc list-outside ml-5">
                <li>Complete lifecycle management with robust validation preventing data corruption</li>
                <li>Intelligent bulk operations supporting large-scale token migrations</li>
                <li>Flexible export capabilities maintaining consistency across different workflow requirements</li>
              </ul>
           </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-3">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-foreground text-sm font-mono font-bold">
                Developer-Friendly Integration
              </p>
              <ul className="text-muted-foreground text-sm font-sans space-y-2 list-disc list-outside ml-5">
                <li>REST API designed specifically for build pipeline integration and automation</li>
                <li>Structured data formats compatible with existing design token toolchains</li>
                <li>Comprehensive error handling that supports debugging and reliable automated processes</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-3">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-foreground font-mono text-sm font-bold">
                Scalable Information Architecture
              </p>
                <ul className="text-muted-foreground text-sm font-sans space-y-2 list-disc list-outside ml-5">
                <li>Multi-field text search across token names, categories, and descriptions</li>
                <li>Dynamic category filters and text search work together in real-time for precise results</li>
                <li>Scalable search performance with MongoDB indexing maintains speed as token libraries scale</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-accent md:col-span-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="aspect-video h-full max-h-72 w-full"
            />
            <div className="p-6">
              <p className="mb-3 text-foreground font-mono text-sm font-bold">
                Advanced Query and Sorting
              </p>
              <ul className="text-muted-foreground text-sm font-sans space-y-2 list-disc list-outside ml-5">
                <li>Search functionality that performs well with large token libraries</li>
                <li>Category-based organization supporting intuitive token discovery</li>
                <li>Visual preview system enabling quick validation of design decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesDeliveredDesignSystem };
