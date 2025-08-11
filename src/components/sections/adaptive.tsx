import React from 'react';

import { Shapes } from 'lucide-react';

import AdaptiveListMucinex from '../adaptive-list-mucinex';
import SectionHeader from '../section-header';

const Adaptive = () => {
  return (
    <section id="adaptive-workflows" className="">
      <div className="border-none">
        <SectionHeader
          category="Adaptive"
          title="Usability Audit"
          icon={Shapes}
          description={
            'Mucinex.com is the US homepage of Mucinex OTC cold & flu medication.  In 2023, the brand sought to update their blog due to two findings:<br> • Mucinex blog pages were amongst the highest Google-indexed pages on the site.<br> • Users who entered the site through blog articles spent more time on the site and were more likely to navigate to product pages and click on the "Find a Retailer" CTA.'
          }
        />
      </div>

      <div className="container lg:!px-0">
        <AdaptiveListMucinex />
      </div>

      <div className="h-8 w-full md:h-12 lg:h-[112px]">
        <div className="container h-full w-full"></div>
      </div>
    </section>
  );
};

export default Adaptive;
