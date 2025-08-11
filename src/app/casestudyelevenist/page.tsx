import Accelerate from '@/components/sections/accelerate-mucinex';
import Adaptive from '@/components/sections/adaptive';
import Features from '@/components/sections/features';
import HeroElevenist from '@/components/sections/hero-elevenist';
import Optimize from '@/components/sections/optimize-mucinex';
import { TechnicalFeaturesElevenist } from '@/components/technicalfeatures-elevenist';
import NextStepsElevenist from '@/components/sections/nextsteps-elevenist';
import ProcessElevenist from '@/components/sections/process-elevenist';
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";

export default function Home() {
  return (
    <>
      <HeroElevenist />
      <Features />
      <Adaptive />
      <Optimize />
      <TechnicalFeaturesElevenist />
      <NextStepsElevenist />
      <ProcessElevenist />
      <CaseStudyCarousel />
    </>
  );
}
