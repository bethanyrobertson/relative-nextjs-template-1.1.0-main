import React from 'react';

import Image from 'next/image';

const DATA = [
  {
    title: 'Table-Based Interface',
    description:
      'Optimized for scanning large datasets with sortable columns and quick identification through badges',
    icon: 'CircleHelp',
    image: '/images/casestudies/designsystem/ds-json.png',
  },
  {
    title: 'Category-Based Organization',
    description:
      'Tokens are organized by type (Color, Typography, Spacing) to match designer mental models.',
    icon: 'Volume2',
    image: '/images/casestudies/designsystem/ds-json.png',
  },
  {
    title: 'Real-Time Search',
    description:
      'Immediate feedback reduces cognitive load and improves workflow efficiency.',
    icon: 'Lightbulb',
    image: '/images/casestudies/designsystem/ds-json.png',
  },
];
const UIListDesignSystem = () => {
  return (
    <div className="items-center">
      <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
        {DATA.map((item, index) => (
          <div
            key={index}
            className={`relative isolate pt-5 text-start lg:pt-20`}
          >
            <span className="px-1 tracking-[-0.32px] lg:px-8">
            </span>
            <h3 className={`mt-2 px-1 text-lg tracking-[-0.36px] lg:px-8`}>
              {item.title}
            </h3>
            <p className="text-muted-foreground px-1 py-4 tracking-[-0.32px] lg:px-8">
              {item.description}
            </p>
            <div className="py-4 lg:px-2">
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

export default UIListDesignSystem;