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
    title: 'Conversational Design Framework',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Intent recognition system</li>
        <li>Response architecture</li>
        <li>Personality & tone definition</li>
      </ul>
    ),
    icon: Pencil,
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/be016dd3-6afb-44b9-6fb5-54ac432f7900/public',
      alt: 'Conversational Design Framework',
    },
  },
  {
    title: 'Technical Implementation',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Frontend architecture</li>
        <li>OpenAI integration and API key management</li>
        <li>Smart routing implementation</li>
        <li>Real-time content integration</li>
      </ul>
    ),
    icon: Route,
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/39945d8e-3ab0-4c25-1dd8-2ad02df1ae00/public',
      alt: 'Technical Implementation',
    },
    reverse: true,
  },
  {
    title: 'Testing',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>A/B testing with real portfolio visitors</li>
        <li>Technical performance validation</li>
        <li>Edge case exploration</li>
        <li>Analytics setup</li>
      </ul>
    ),
    icon: LayoutDashboard,
    image: {
      src: 'https://www.dropbox.com/scl/fi/6tcnfw2laanqj3yiawsw0/Screenshot-2025-08-04-at-6.47.15-PM.png?rlkey=gspg3qmwub09g0kg253mexf7i&st=rpvpx7ao&raw=1',
      alt: 'Prototyping & Testing',
    },
  },
  {
    title: 'Iteration',
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Conduct quality assurance testing and bug fixes</li>
        <li>Mobile-first redesign</li>
        <li>Quick-answer buttons based on common query patterns in logs</li>
      </ul>
    ),
    icon: Code,
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/3803099e-860b-49a4-5341-16b063785d00/public',
      alt: 'Development & Iteration',
    },
    reverse: true,
  },
];

const ProcessBot = () => {
  return (
    <section id="process" className="">
      <div className="border-none">
        <SectionHeader
          category="PROCESS"
          title=" From Conversation Architecture to Technical Implementation"
          icon={Rocket}
          description={
            'The design process combined conversational UX principles with progressive AI training, moving from intent recognition frameworks and personality definition through three phases of machine learning enhancement to full technical integration. This systematic approach ensured the AI agent could intelligently adapt its responses to different user types while maintaining seamless handoffs between conversational and visual portfolio exploration.'
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

export default ProcessBot;

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
