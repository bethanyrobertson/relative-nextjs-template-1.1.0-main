import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Brush,
  UsersRound,
  CircleDot,
  Calendar
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Client',
    description: 'Mucinex/Reckitt & Inside Ideas',
    icon: CircleDot,
  },
  {
    title: 'Team',
    description: 'Collaborate across teams and departments.',
    icon: UsersRound,
  },
  {
    title: 'Role & Contributions',
    description: 'UX/UI Design, Design System, and Brand',
    icon: Brush,
  },
  {
    title: 'Timeline',
    description: 'Oct 2020 - Oct 2021',
    icon: Calendar,
  },
];

export default function HeroElevenist() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl md:whitespace-nowrap lg:text-7xl">
           Elevenist
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
           Transforming a Social RSS Aggregator from Confusing Tool to Intuitive News Discovery Platform
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-inter font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src='/images/casestudies/Mucinex/mucinex-cover.gif'
            alt="hero"
            fill
            className="rounded-3xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
}
