import React from 'react';

import { Heart, Component, RotateCwSquare, ChartNoAxesColumn } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Enhanced UI Consistency',
    description:
      'Align interface elements with established design system principles',
    icon: Component,
  },
  {
    title: 'Component Library Integration',
    description:
      'Expand beyond tokens to include component definitions',
    icon: RotateCwSquare,
  },
  {
    title: 'Advanced Analytics',
    description:
      'Usage tracking and adoption metrics across projects',
    icon: ChartNoAxesColumn,
  },
];

const NextStepsDesignSystem = () => {
  return (
    <section className="container py-32">
      <SectionHeader
        category="Next Steps"
        title="Future Improvements"
        icon={Heart}
        description="This project reinforced the critical importance of designing for both human users and system integrations. The success of design systems depends not just on the tokens themselves, but on the tools that make them accessible, maintainable, and actionable across teams."
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

export default NextStepsDesignSystem;