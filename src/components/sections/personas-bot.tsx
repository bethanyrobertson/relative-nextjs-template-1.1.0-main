import React from 'react';

import { Heart, Landmark, Sparkles, Globe, Search } from 'lucide-react';

import SectionHeader from '../section-header';

type ValueType = {
  title: string;
  description: string | React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
};

const values: ValueType[] = [
  {
    title: 'Recruiters:',
    description: (
      <>
        <p>Need to translate visual work into role requirements.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Spending 5-7 minutes per portfolio</li>
          <li>Need for quick skill verification and experience level confirmation</li>
          <li>Pressure to create defensible shortlists for hiring teams</li>
        </ul>
      </>
    ),
    icon: Globe,
  },
  {
    title: 'Hiring Design Managers',
    description: (
      <>
        <p>Need to balance portfolio review with other management responsibilities.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Wanting to understand design process and decision-making rationale</li>
          <li>Assessing team fit and collaboration style from static work samples</li>
          <li>Needing to evaluate both craft skills and strategic thinking</li>
        </ul>
      </>
    ),
    icon: Sparkles,
  },
  {
    title: 'Other Designers',
    description: (
      <>
        <p>Need to see how others approach design problems.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Wanting to learn new methods and approaches from peers</li>
          <li>Seeking authentic connection and potential collaboration opportunities</li>
          <li>Limited insight into career progression and growth paths</li>
        </ul>
      </>
    ),
    icon: Landmark,
  },
];

const PersonasBot = () => {
  return (
    <section className="container py-32">
      <SectionHeader
        category="RESEARCH & DISCOVERY"
        title="Different users want to see different things - fast"
        icon={Search}
        description= ""
        className="border-none"
      />

      <div className="container grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="text-lg !leading-none font-bold font-mono">
                  {value.title}
                </h3>
                <div className="text-muted-foreground mt-1.5 text-sm">
                  {value.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PersonasBot;