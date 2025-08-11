import React from 'react';

import Image from 'next/image';

const DATA = [
  {
    subTitle: 'Navigation',
    title: 'Difficulty finding blog from main ecommerce site',
    description:
      '• The tag system implemented was inconsistent in both informational and visual hierarchy. Some tags would link you to a totally different blog on click. • Article listings were difficult to differentiate and impossible to sort.',
    icon: 'CircleHelp',
    image: '/images/casestudies/Mucinex/nav-audit.png',
  },
  {
    subTitle: 'Information Hierarchy',
    title: 'Need more flexibility in filtering based around symptoms',
    description: `• Existing blog had little-to-no information hierarchy. 
   • Blog homepage just consisted of links to four different blogs, each with a different set of articles.`,
    icon: 'Volume2',
    image: '/images/casestudies/Mucinex/tags-audit.png',
  },
  {
    subTitle: 'Layout & CTA Optimization',
    title: 'Effortless Tool Integrations',
    description: `• Articles were difficult to read and not optimized for any visual media.
    • No opportunities for product links or CTAs, leaving valuable conversions on the table.
    • No opportunities for article sharing, especially to social media.`,
    icon: 'Lightbulb',
    image: '/images/casestudies/Mucinex/article-audit.png',
  },
];
const AdaptiveListMucinex = () => {
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

export default AdaptiveListMucinex;
