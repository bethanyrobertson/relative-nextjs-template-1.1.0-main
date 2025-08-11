import React from 'react';

import Image from 'next/image';

const DATA = [
  {
    subTitle: 'Token Management',
    title: 'JSON Import/Export',
    description:
      'For seamless collaboration, easily import and export design tokens in JSON format. This feature ensures that your design system remains consistent across different platforms and teams.',
    icon: 'CircleHelp',
    image: '/images/casestudies/designsystem/ds-json.png',
  },
  {
    subTitle: 'Foundational Components',
    title: 'Search and Filtering Capabilities',
    description:
      'Buttons, lists, and other UI components can be easily searched and filtered to find the right element quickly.',
    icon: 'Volume2',
    image: '/images/casestudies/designsystem/ds-json.png',
  },
  {
    subTitle: 'Collaboration',
    title: 'Role-Based Access Control',
    description:
      'Ensure that team members have the appropriate access to design resources and tools, fostering a collaborative environment.',
    icon: 'Lightbulb',
    image: '/images/casestudies/designsystem/ds-json.png',
  },
];
const AdaptiveListDesignSystem = () => {
  return (
    <div className="items-center">
      <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
        {DATA.map((item, index) => (
          <div
            key={index}
            className={`relative isolate pt-5 text-start lg:pt-20`}
          >
            <span className="px-1 tracking-[-0.32px] lg:px-8">
              {item.subTitle}
            </span>
            <h3 className={`mt-2 px-1 text-lg tracking-[-0.36px] lg:px-8`}>
              {item.title}
            </h3>
            <p className="text-muted-foreground px-1 py-4 tracking-[-0.32px] lg:px-8">
              {item.description}
            </p>
            <div className="border-t py-4 lg:px-2">
              <Image
                src={item.image}
                alt={item.title}
                width={416}
                height={233}
                className="rounded-md shadow-md lg:rounded-xl lg:shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptiveListDesignSystem;