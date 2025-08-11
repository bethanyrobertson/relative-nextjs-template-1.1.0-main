import Accelerate from '@/components/sections/accelerate-mucinex';
import Adaptive from '@/components/sections/adaptive';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero-mucinex';
import Optimize from '@/components/sections/optimize-mucinex';
import NextStepsMucinex from '@/components/sections/nextsteps-mucinex';
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";

export default function HomeMucinex() {
  return (
    <div className="bg-[#F5F8FF] min-h-screen dark:bg-indigo-900">
        <Hero />
        <Features />
        <Adaptive />
        <Optimize />
        <Accelerate />
        <NextStepsMucinex />
        <CaseStudyCarousel />
    </div>
  );
}

