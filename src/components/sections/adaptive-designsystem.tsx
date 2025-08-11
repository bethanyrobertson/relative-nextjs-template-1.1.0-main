import React from 'react';

import { Shapes } from 'lucide-react';

import AdaptiveListDesignSystem from '../adaptive-list-designsystem';
import SectionHeader from '../section-header';

const AdaptiveDesignSystem = () => {
  return (
    <section id="adaptive-workflows" className="">
      <div className="border-none">
        <SectionHeader
          category="Adaptive"
          title="Features"
          icon={Shapes}
          description={
            'The Design Token Manager is a full-stack web application that serves as a centralized hub for managing design tokens across design and development teams. Built with a focus on scalability and developer experience, this tool addresses the critical gap between design systems and their technical implementation.'
          }
        />
      </div>

      <div className="container lg:!px-0">
        <AdaptiveListDesignSystem />
      </div>

      <div className="h-8 w-full md:h-12 lg:h-[112px]">
        <div className="container h-full w-full"></div>
      </div>
    </section>
  );
};

export default AdaptiveDesignSystem;