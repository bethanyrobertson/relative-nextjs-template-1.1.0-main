import React from 'react';

import { ArrowBigRight, AudioLines, Image, Mail } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Voice',
    description:
      'Implement voice interface for accessibility',
    icon: AudioLines,
  },
  {
    title: 'Thumbnail Images',
    description:
      'Thumbnails for case study links',
    icon: Image,
  },
  {
    title: 'Direct Contact',
    description:
      'Allow users to contact me directly through the chat',
    icon: Mail,
  },
];

const NextStepsBot = () => {
  return (
    <section className="container py-32">
      <SectionHeader
        category="Next Steps"
        title="Immediate Enhancements"
        icon={ArrowBigRight}
        description="This approach could revolutionize how creative professionals present their work, moving beyond static portfolios to intelligent, adaptive presentations that meet each visitor's specific needs."
        className="border-none"
      />

      <div className="container mt-40 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="!leading-none font-bold font-mono">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NextStepsBot;