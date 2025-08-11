import React from 'react';

import { Heart, Component, RotateCwSquare, ChartNoAxesColumn } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Social Features Expansion',
    description:
      'Comment threading system that maintains "group text" feel without becoming Twitter <br />\
        • Private bump sharing for sensitive content within trusted circles<br />\
        • Cross-platform sharing tools for bringing external content into Elevenist<br />\
        • User-generated RSS collections for curated topic feeds',
    icon: Component,
  },
  {
    title: 'Platform Intelligence',
    description:
      'Emoji semantic analysis to understand how meanings evolve over time<br />\
        • Community health metrics to prevent echo chambers and encourage diverse perspectives<br />\
        • Content quality scoring based on engagement patterns and community feedback<br />\
        • Moderation tools that leverage community standards rather than top-down rules',
    icon: RotateCwSquare,
  },
  {
    title: 'Badge System Implementation',
    description:
      'Design reputation mechanics based on bump quality, comments, and community engagement<br />\
       • Create visual badge hierarchy that encourages positive behavior<br />\
       • Test gamification balance to avoid over-optimization while encouraging participation<br />\
       • Implement peer recognition features for valuable community contributors',
    icon: ChartNoAxesColumn,
  },
];

const NextStepsElevenist = () => {
  return (
    <section className="container py-32">
      <SectionHeader
        category="Next Steps"
        title="Future Improvements"
        icon={Heart}
        description="null"
        className="border-none"
      />

      <div className="container mt-40 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="text-lg !leading-none tracking-[-0.96px] lg:text-2xl">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm tracking-[-0.36px]">
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

export default NextStepsElevenist;