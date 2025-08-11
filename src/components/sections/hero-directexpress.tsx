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
    title: 'Client',
    description: 'U.S. Treasury & BNY & MoCaFi',
    icon: CircleDot,
  },
  {
    title: 'Scope',
    description: "Complete rebrand and 0-1 digital experience design for the U.S. Treasury's Direct Express program",
    icon: UsersRound,
  },
  {
    title: 'Role & Contributions',
    description: 'Brand, UX Design, and Design System',
    icon: Brush,
  },
  {
    title: 'Timeline',
    description: 'Oct 2024 - August 2025',
    icon: Calendar,
  },
];

export default function HeroDirectExpress() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Transforming Federal Benefits Access for America's Most Vulnerable Citizens
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-l md:text-xl lg:text-xl">
            Redesign of the Direct Express application, creating an improved experience for millions receiving federal benefits
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
                  <h2 className="font-mono font-bold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fixed image section */}
      <div className="container mt-12 md:mt-20 lg:mt-24">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <Image
            src='https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/89d3d237-8218-4805-4c63-9e3a7cac0200/public'
            alt="hero"
            fill={true}
            className="rounded-3xl object-cover object-left-top shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}