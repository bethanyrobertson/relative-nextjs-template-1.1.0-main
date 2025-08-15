import React from 'react';

import { UserCog, Search, SquareChevronRight, Code } from 'lucide-react';

import SectionHeader from '../section-header';

const values = [
  {
    title: 'Design System Managers',
    description:
      'Need centralized control over token definitions and the ability to collaborate with development teams.',
    icon: UserCog,
  },
  {
    title: 'Frontend Developers',
    description:
      'Require programmatic access to design tokens and automated synchronization with their build processes.',
    icon: Code,
  },
  {
    title: 'Design Contributors',
    description:
      'Need view-only access to understand current token specifications and their usage contexts.',
    icon: SquareChevronRight,
  },
];

const PersonasDesignSystem = () => {
  return (
    <section className="container py-20">
      <SectionHeader
        category="RESEARCH & DISCOVERY"
        title="Eliminating the communication gaps between design and development teams "
        icon={Search}
        description="The Design Token Manager provides a single source of truth that automates token synchronization and creates a shared language for design decisions. This unified approach transforms fragmented workflows into seamless collaboration, ensuring design system consistency across all team members and their tools."
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

export default PersonasDesignSystem;