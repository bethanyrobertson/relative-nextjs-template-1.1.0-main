'use client';
import React from 'react';

import Image from 'next/image';

import { CircleHelp, Volume2, Lightbulb } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const OPTIMIZE_DATA = [
  {
    title: 'Unified Scheduling',
    description:
      'Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.',
    icon: CircleHelp,
    image: '/images/casestudies/Mucinex/DS-Mucinex.png',
  },
  {
    title: 'Insightful Performance',
    description:
      'Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.',
    icon: Volume2,
    image: '/images/casestudies/Mucinex/DS-Mucinex.png',
  },
  {
    title: 'Effortless Tool Integrations',
    description:
      'Link your favorite apps and services to streamline work without switching between platforms.',
    icon: Lightbulb,
    image: '/images/homepage/optimize-3.png',
  },
];

const OptimizeListDesignSystem = () => {
  return (
    <Tabs defaultValue={OPTIMIZE_DATA[0].title} className="">

      {OPTIMIZE_DATA.map((item) => (
        <TabsContent key={item.title} value={item.title} className="mt-0">
          <div className="flex flex-1 flex-col px-2 py-4 max-lg:border-x">
            <Image
              src={item.image}
              alt={item.title}
              width={1312}
              height={743.926}
              className="my-2 rounded-md object-contain shadow-md lg:rounded-xl lg:shadow-lg"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default OptimizeListDesignSystem;

const Accessory = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(`size-2 rounded-[1px] bg-red-400`, className)}
      style={{
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.04%, rgba(0, 0, 0, 0.06) 100%), hsl(var(--background))',
        boxShadow:
          '0px 0px 0px 0.1px rgba(0, 0, 0, 0.05), 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)',
      }}
    ></div>
  );
};
