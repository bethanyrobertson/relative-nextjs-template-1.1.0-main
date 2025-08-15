'use client';
import React, { useState } from 'react';
import { ListFilter, Map, MapPin, CircleDollarSign, Lightbulb } from 'lucide-react';
import { ToggleSwitch } from '../ui/toggle';
import SectionHeader from '../section-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Simple placeholder component - replace with your own interactive components
type InteractiveSlotProps = {
  featureTitle: string;
};

const InteractiveSlot = ({ featureTitle }: InteractiveSlotProps) => (
  <div className="h-full flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
    <div className="text-center p-4 sm:p-6 md:p-8">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
        <span className="text-lg sm:text-xl md:text-2xl">🚀</span>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Interactive Component Slot</h3>
      <p className="text-gray-500 text-xs sm:text-sm">Replace this with your {featureTitle} component</p>
    </div>
  </div>
);





const FEATURES = [
  {
    title: 'Toggle',
    description: 'Dual-mode ATM discovery with searchable map pins and structured list format, supporting location-based auto-detection',
    content: {
      title: 'Toggle',
      description: 'Dual-mode ATM discovery with searchable map pins and structured list format, supporting location-based auto-detection',
      // Replace this component with your own
      component: () => <ToggleSwitch />,
    },
    icon: Map,
  },
  {
    title: 'Filtering',
    description: 'Filter ATMs by surcharge-free status, accessibility features, network type',
    content: {
      title: 'Filters:',
      description: 'surcharge-free status, accessibility features, network type',
      // Replace this component with your own
      component: () => <InteractiveSlot featureTitle="Filtering" />,
    },
    icon: ListFilter,
  },
  {
    title: 'Details & Navigation',
    description: 'Direct deep-linking to Google Maps and Apple Maps for turn-by-turn directions to selected ATM locations',
    content: {
      title: 'Details & Navigation',
      description: 'Direct deep-linking to Google Maps and Apple Maps for turn-by-turn directions to selected ATM locations',
      // Replace this component with your own
      component: () => <InteractiveSlot featureTitle="Details & Navigation" />,
    },
    icon: MapPin,
  },
  {
    title: 'Fee Transparency',
    description: 'Transparent disclosure of domestic fees, international fees, and clear indication of in-network ATMs',
    content: {
      title: 'Fee Transparency',
      description: 'Transparent disclosure of domestic fees, international fees, and clear indication of in-network ATMs',
      // Replace this component with your own
      component: () => <InteractiveSlot featureTitle="Fee Transparency" />,
    },
    icon: CircleDollarSign,
  },
];

export const AccessibleComponents = () => {
  return (
    <section id="atm" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="SOLUTION"
          title="Designing Accessible Components"
          icon={Lightbulb}
          description="This feature transforms the current disjointed ATM search experience into a comprehensive, mobile-friendly solution that helps cardholders efficiently find in-network, surcharge-free ATMs using Mastercard Services data with enhanced UX/UI and integrated navigation support."
          className="border-none"
        />
                <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 flex gap-4 max-lg:flex-col-reverse border rounded-xl p-4 md:mt-8 md:p-6 lg:mt-10 lg:p-8"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl p-1.5 lg:basis-1/4 lg:flex-col tabs-list-override" style={{ 
            backgroundColor: 'rgb(234 242 241)'
          }}>
            {FEATURES.map((feature) => (
                <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal transition-colors duration-300 
                    data-[state=active]:bg-white data-[state=active]:shadow-md
                    lg:px-6 lg:py-4"
                    style={{
                      color: 'slate-400', // Blue for inactive
                      '--tw-text-opacity': '1'
                    } as React.CSSProperties}
                    data-inactive-color="rgb(59 130 246)"
                    data-active-color="rgb(0 0 0)"
                >
                    <div>
                        <feature.icon className="size-7 md:size-8 lg:size-9 text-inherit" />
                        <h3 className="mt-3 font-mono font-bold text-inherit">{feature.title}</h3>
                        <p className="mt-1 text-sm font-sans text-inherit opacity-80">
                        {feature.description}
                        </p>
                    </div>
                </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => {
            const ComponentToRender = feature.content.component;
            return (
              <TabsContent
                className="bg-background m-0 flex-1 rounded-xl overflow-hidden"
                key={feature.title}
                value={feature.title}
              >
                <div className="h-[300px] sm:h-[360px] md:h-[420px] lg:h-[500px] relative border rounded-xl overflow-hidden flex items-center justify-center">
                  <ComponentToRender />
                </div>
                <div className="p-3 sm:p-4 md:p-5 lg:p-7 text-balance">
                  <h4 className="inline font-mono font-bold">
                    {feature.content.title}{' '}
                  </h4>
                  <span className="text-gray-600 mt-2 text-pretty">
                    {feature.content.description}
                  </span>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};