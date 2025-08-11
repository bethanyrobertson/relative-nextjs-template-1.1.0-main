import React from 'react';

import { Eye } from 'lucide-react';

import OptimizeList from '../optimize-list-mucinex';
import SectionHeader from '../section-header';

const Optimize = () => {
  return (
    <section id="optimized-scheduling" className="">
      <div className="border-none">
        <SectionHeader
          iconTitle="Optimize"
          title="A Design System That Scales"
          icon={Eye}
          description={
            'Achieve seamless productivity with intelligent scheduling, insightful analytics, and effortless integrations.'
          }
        />
      </div>

      <div className="container lg:!px-0">
        <OptimizeList />
      </div>

      <div className="h-8 w-full md:h-12 lg:h-[112px]">
        <div className="container h-full w-full"></div>
      </div>
    </section>
  );
};

export default Optimize;
