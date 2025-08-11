import React from 'react';

import { PocketKnife } from 'lucide-react';

import FeaturesList from '../features-list';
import SectionHeader from '../section-header';

const FeaturesDesignSystem = () => {
  return (
    <section id="smart-productivity" className="pt-12 lg:pt-20">
      <div className="border-none">
        <SectionHeader
          category="Features"
          title="Smart productivity with AI"
          icon={PocketKnife}
          description={
            'Unlock smarter productivity with features that help you manage tasks, time, and focus—seamlessly.'
          }
        />
      </div>

      <div className="container lg:!px-0">
        <FeaturesList />
      </div>

      <div className="h-8 w-full md:h-12 lg:h-[112px]">
        <div className="container h-full w-full"></div>
      </div>
    </section>
  );
};

export default FeaturesDesignSystem;