import React from 'react';

import HeroAbout from '@/components/sections/about-header';
import MyValues from '@/components/sections/my-values';
import Experience from '@/components/sections/experience';

const page = () => {
  return (
    <div>
      <HeroAbout />

      <MyValues />

      <Experience />
      
    </div>
  );
};

export default page;
