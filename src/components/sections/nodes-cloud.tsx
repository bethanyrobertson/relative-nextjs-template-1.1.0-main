"use client";
import React from 'react';

import SectionHeader from '../section-header';

import { Heart } from 'lucide-react';

const itemsData = [
  {
    id: 1,
    title: "Individual Nodes",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Circular forms with subtle inner details suggesting computational activity",
  },
  {
    id: 2,
    title: "Network Connections",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Real-time performance analytics and insights",
  },
  {
    id: 3,
    title: "Node States",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Color coding for active, inactive, syncing, and error states",
  },
  {
    id: 4,
    title: "Network Health",
    imageSrc: "/images/casestudies/cloud/cb-ui-4.png",
    description:
      "Visual hierarchy showing primary/secondary nodes and connection strength",
  },
];

const NodesCloud = () => {
  return (
    <section className="py-32">
      <SectionHeader
        category="PROCESS"
        title="Nodes and Network Topology"
        icon={Heart}
        description="Representing complex distributed systems in simple, recognizable forms"
        className="border-none"
      />

      <div className="container">
        <div className="mx-auto mt-16 flex flex-col gap-6 md:flex-row">
          {itemsData.map((item) => (
            <a className="block" href="#" key={item.id}>
              <img
                src={item.imageSrc}
                alt="placeholder"
                className="mb-6 h-full max-h-72 w-full rounded-2xl object-cover lg:max-h-96"
              />
              <h6 className="mb-3 text-lg font-mono font-semibold">{item.title}</h6>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NodesCloud };
