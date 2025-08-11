import React from 'react';

import { UserCog, Search, SquareChevronRight, Code } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Direct beneficiaries',
    description:
      'single/multiple benefits',
    icon: UserCog,
  },
  {
    title: 'Representative Payees',
    description:
      'Managing others\' funds',
    icon: Code,
  },
  {
    title: 'Multiple card scenarios',
    description:
      'Complex benefit structures.',
    icon: SquareChevronRight,
  },
];

const PersonasDex = () => {
  return (
    <section className="container py-20">
      <SectionHeader
        category="RESEARCH & DISCOVERY"
        title="Complex User Ecosystem Requiring Flexible Solutions"
        icon={Search}
        description="Our research revealed distinct user types that needed accommodation"
        className="border-none"
      />

      <div className="container mt-20 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="!leading-none font-mono font-bold">
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

export default PersonasDex;