import React from 'react';

import Image from 'next/image';

import {
  LayoutDashboard,
  Route,
  Code,
  Pencil,
  Users,
  Rocket,
  LucideIcon,
} from 'lucide-react';

import SectionHeader from '../section-header';

const TIMELINE_ITEMS = [
  {
    title: 'Brand Strategy & Identity Development',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Brand audit and competitive analysis</li>
        <li>Define new brand positioning, values, and messaging</li>
        <li>Create visual identity system (logo, colors, typography, iconography)</li>
        <li>Brand guidelines and style standards</li>
      </ul>
    ),
    icon: Pencil,
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b43ba72c-a1b6-4de3-51f7-6e829aa78500/public',
      alt: 'Brand Strategy & Identity Development',
    },
  },
  {
    title: 'User Research & App Strategy',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>User research and persona development</li>
        <li>Define app objectives, core features, and user journeys</li>
        <li>Information architecture and feature prioritization</li>
        <li>Develop technical requirements and platform strategy (iOS/Android/Web)</li>
        <li>Align app functionality with rebrand goals and user needs</li>
      </ul>
    ),
    icon: Route,
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/ffff751d-08f5-4f22-a03b-78cc1d147200/public',
      alt: 'User Research & App Strategy',
    },
    reverse: true,
  },
  {
    title: 'Design & Prototyping',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Apply new brand identity to app design system</li>
        <li>Low and high fidelity wireframes</li>
        <li>Build interactive prototypes for user testing</li>
        <li>Conduct usability testing and iterate designs</li>
        <li>Finalize UI/UX specifications and design handoff documentation</li>
      </ul>
    ),
    icon: LayoutDashboard,
    image: {
      src: 'https://www.dropbox.com/scl/fi/6tcnfw2laanqj3yiawsw0/Screenshot-2025-08-04-at-6.47.15-PM.png?rlkey=gspg3qmwub09g0kg253mexf7i&st=rpvpx7ao&raw=1',
      alt: 'Design & Prototyping',
    },
  },
  {
    title: 'Development & Iteration',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Conduct quality assurance testing and bug fixes</li>
        <li>Documented design system</li>
        <li>Created detailed specification documents, interaction flows, and edge case scenarios</li>
        <li>Iterated on designs based on technical limitations discovered during development</li>
      </ul>
    ),
    icon: Code,
    image: {
      src: 'https://www.dropbox.com/scl/fi/mc40gpei1p4rwgnz5lqr6/Screenshot-2025-08-04-at-7.29.19-PM.png?rlkey=81z5uvyt3vvepgczniskm3rjk&st=ji68u9x5&raw=1',
      alt: 'Development & Iteration',
    },
    reverse: true,
  },
];

const AccelerateDirectExpress = () => {
  return (
    <section id="process" className="">
      <div className="border-none">
        <SectionHeader
          category="PROCESS"
          title="Embedded Design-Development Partnership"
          icon={Rocket}
          description={
            'The project progressed from brand strategy through user research and prototyping, ultimately reaching the development implementation phase. The experience highlighted the critical importance of designer-developer partnerships, particularly during the implementation phase where daily standups, shared component libraries, and real-time problem-solving enabled seamless translation of design concepts into functional code.'
          }
        />
      </div>

      <div className="container pb-40 lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:!pt-20">
        {TIMELINE_ITEMS.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            reverse={item.reverse}
          />
        ))}
      </div>

      <div className="h-8 w-full md:h-12 lg:h-[112px]">
        <div className="container h-full w-full"></div>
      </div>
    </section>
  );
};

export default AccelerateDirectExpress;

interface TimelineItemProps {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
  index: number;
}

const TimelineItem = ({
  title,
  description,
  icon: Icon,
  image,
  reverse,
  index,
}: TimelineItemProps) => (
  <div className={`relative flex`}>
    <div
      className={`flex w-full justify-center px-1 py-10 md:gap-6 lg:gap-10 ${reverse ? 'lg:flex-row-reverse' : ''} `}
    >
      <div className="flex-1 max-lg:hidden">
         <div className={`pl-5 ${reverse ? '' : 'ml-auto max-w-[300px]'}`}>
        <h3 className="font-mono font-bold text-left">{title}</h3>
        <p
          className={`text-muted-foreground mt-2.5 max-w-[300px] text-balance text-left ${reverse ? '' : 'ml-auto'}`}
        >
          {description}
        </p>
       </div>
      </div>
      <div
        className={`bg-background z-[-1] size-fit -translate-y-5 p-4 max-lg:-translate-x-4`}
      >
        <div className="bg-foreground rounded-[10px] p-[5px] shadow-md">
          <div className="size-fit rounded-md p-1">
            <Icon className="size-4 text-background shrink-0" />
          </div>
        </div>
      </div>
      <div className="flex-1 max-lg:-translate-x-4">
        <div className={`text-start lg:pointer-events-none lg:hidden`}>
          <h3 className="font-mono font-bold">{title}</h3>
          <p className="text-muted-foreground mt-2.5 mb-10 max-w-[300px] text-balance">
            {description}
          </p>
        </div>
        <div className="flex items-start justify-start">
          <div className={` ${reverse ? 'lg:ml-auto' : ''}`}>
            <div className="px-6 lg:px-10">
            </div>
            <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
              <Image
                src={image.src}
                width={400}
                height={500}
                alt={image.alt}
                className="m-2 rounded-md object-contain lg:rounded-l"
              />
            </div>
            <div className="px-6 lg:px-10">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 ${index === TIMELINE_ITEMS.length - 1 ? 'from-foreground/10 via-foreground/10 bg-gradient-to-b to-transparent' : 'bg-foreground/10'}`}
    >
      {index == 0 && (
        <div
          className={`to-foreground/10 h-4 w-[3px] -translate-y-full bg-gradient-to-b from-transparent`}
        ></div>
      )}
    </div>
  </div>
);
