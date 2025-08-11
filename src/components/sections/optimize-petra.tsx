import React from 'react';

import { Eye } from 'lucide-react';

import OptimizeListPetra from '../optimize-list-petra';
import SectionHeader from '../section-header';

const OptimizePetra = () => {
  return (
    <section id="optimized-scheduling" className="">
      <div className="border-none">
        <SectionHeader
          category="RESEARCH & DISCOVERY"
          title="A Design System That Scales"
          icon={Eye}
          description={
            'Achieve seamless productivity with intelligent scheduling, insightful analytics, and effortless integrations.'
          }
        />
      </div>

      <div className="container lg:!px-0">
        <OptimizeListPetra />
      </div>

      <div className="h-8 w-full md:h-12 lg:h-[112px]">
        <div className="container h-full w-full"></div>
      </div>
    </section>
  );
};

export default OptimizePetra;