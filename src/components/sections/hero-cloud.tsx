import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Brush,
  UsersRound,
  CircleDot,
  Calendar
} from 'lucide-react';

const features = [
  {
    title: 'EMPLOYER',
    description: 'Coinbase',
    icon: CircleDot,
  },
  {
    title: 'SCOPE',
    description: '0-1 Brand Identity & Product Experience',
    icon: UsersRound,
  },
  {
    title: 'ROLE & CONTRIBUTIONS',
    description: 'Design System and Brand',
    icon: Brush,
  },
  {
    title: 'TIMELINE',
    description: 'June 2021 - January 2022',
    icon: Calendar,
  },
];

export default function HeroCloud() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl md:whitespace-nowrap lg:text-7xl">
           Coinbase Cloud
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-l md:text-xl lg:text-2xl">
           Transitioning Bison Trails to Coinbase Cloud: A Brand and Design System Priotizing Developer Needs
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
                  <h2 className="font-mono font-semibold">{feature.title}</h2>
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
            src='/images/casestudies/cloud/cloud-marketingsite.png'
            alt="hero"
            fill
            className="rounded-3xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
}
