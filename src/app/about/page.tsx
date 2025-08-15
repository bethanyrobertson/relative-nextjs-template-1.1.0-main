import React from 'react';

import HeroAbout from '@/components/sections/about-header';
import MyValues from '@/components/sections/my-values';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Education from '@/components/sections/education';
import DownloadResume from '@/components/sections/download-resume';

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">

      <DownloadResume 
        heading="Download My Resume"
        description="Get my latest resume in PDF format"
      />
      <MyValues />
      
      <Skills />

     <Education />

      <Experience />
    </div>
  );
};

export default page;
