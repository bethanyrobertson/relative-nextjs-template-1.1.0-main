import React from 'react';

import Image from 'next/image';

import {
  LayoutList,
  LocateFixed,
  Loader,
  Cpu,
  Rocket,
  LucideIcon,
} from 'lucide-react';

import SectionHeader from '../section-header';

const TIMELINE_ITEMS = [

  {
    title: 'API Development',
    description: (
      <>
        <b>MongoDB Schema Design</b>
        <br />
        The database structure was designed in MongoDB to store design tokens and users.
        <br /><br />
        <b>RESTful API Implementation</b>
        <br />
        A comprehensive REST API was built to serve design tokens in multiple formats.
        <br /><br />
        <b>Version Management System</b>
        <br />
        API versioning was implemented to manage design system updates.
        <br /><br />
        <b>Asset Management</b>
        <br />
        Endpoints were created to serve design assets including icons, illustrations, and fonts.  
      </>
    ),
    icon: LocateFixed,
    image: {
      src: '/images/casestudies/designsystem/mongodb.png',
      alt: 'API Development',
    },
    reverse: true,
  },
  {
    title: 'Deployment & Distribution',
    description: (
      <>
        <b>Railway Infrastructure Setup</b>
        <br />
        The application was successfully deployed on Railway with the deployment automatically triggering when changes are pushed to the main repository branch.
        <br /><br />
        <b>MongoDB Atlas Integration</b>
        <br />
        MongoDB Atlas was connected to the Railway deployment for reliable, scalable data storage. 
        <br /><br />
        <b>Package Distribution</b>
        <br />
        The design system was published as npm packages with automated publishing triggered by version releases in the repository.
        <br /><br />
        <b>Documentation Site</b>
        <br />
        The documentation website was deployed alongside the API on Railway.
        <br /><br />
        <b>Production Rollout</b>
        <br />
        The complete system is now live on Railway with MongoDB handling all data.
      </>
    ),
    icon: Cpu,
    image: {
      src: '/images/casestudies/designsystem/railwaydeployment.png',
      alt: 'Deployment & Distribution',
    },
    reverse: false,
  },
  {
    title: 'Design System Creation',
    description: (
      <ul className="list-none space-y-4">
        <li className="flex">
          <span className="mr-2">•</span>
          <div>
            <b>Research & Planning:</b> Audit of existing UI components across all products, 
            identifying inconsistencies and establishing core design principles.
          </div>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <div>
            <b>Foundation Establishment:</b> Tokens and components were created and documented 
            for colors, typography, spacing, shadows, and other visual properties.
          </div>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <div>
            <b>Component Library Development:</b> Component library was built starting with 
            tokens, progressing to molecular components.
          </div>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <div>
            <b>Documentation & Guidelines:</b> Detailed documentation was created showing 
            proper usage for each component.
          </div>
        </li>
      </ul>
      ),
    icon: LayoutList,
    image: {
      src: '/images/homepage/accelerate-1.png',
      alt: 'Design System Creation',
    },
    reverse: true,
  },
];

const AccelerateDesignSystem = () => {
  return (
    <section id="process" className="">

      <div className="border-none">
        <SectionHeader
          category="PROCESS"
          title="Ideation to Handoff"
          icon={Loader}
          description={
            'Take control of your workflow step-by-step with smart tools, actionable insights, and seamless collaboration'
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

export default AccelerateDesignSystem;

import type { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  description: string | ReactNode;
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
         <h3 className="font-mono font-bold text-foreground text-left">{title}</h3>
         <p
           className={`text-muted-foreground text-sm mt-2.5 max-w-[300px] text-balance text-left ${reverse ? '' : 'ml-auto'}`}
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
                 className="m-2 rounded-md object-contain shadow-md lg:rounded-xl lg:shadow-lg"
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
 