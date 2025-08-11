import React from 'react';

import { ArrowBigRight, Book, Sparkle, UserRound } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Personalization',
    description:
      'Customizable interfaces based on individual accessibility needs',
    icon: UserRound,
  },
  {
    title: 'Financial Wellness',
    description:
      'Educational content integration for financial literacy',
    icon: Book,
  },
  {
    title: 'Predictive Features',
    description:
      'Proactive notifications for benefit deposit patterns',
    icon: Sparkle,
  },
];

const NextStepsDirectExpress = () => {
  return (
    <section id="nextsteps" className="py-32">
      <SectionHeader
        category="NEXT STEPS"
        title="Future Opportunities"
        icon={ArrowBigRight}
        description="Fast follows after MVP: Implement the MVP mobile app and bill pay features, then measure success against our research-backed goals of reducing customer service calls by 40% and increasing digital engagement from 31% to 50%."
        className="border-none"
      />

      <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="!leading-none font-mono font-bold">
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

export default NextStepsDirectExpress;