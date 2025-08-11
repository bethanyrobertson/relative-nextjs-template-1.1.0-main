import HeroCloud from "@/components/sections/hero-cloud";
import ProcessCloud from "@/components/sections/process-cloud";
import { CloudIllustration } from "@/components/sections/illustration-cloud";
import NextStepsCloud from "@/components/sections/nextsteps-cloud";
import TechnicalFeaturesCloud from "@/components/technicalfeatures-cloud";
import { DevsCloud } from "@/components/sections/devs-cloud";
import { NodesCloud } from "@/components/sections/nodes-cloud";
import PersonasCloud from "@/components/sections/personas-cloud";
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import { SubNav } from "@/components/ui/subnav";

export default function Cloud() {
  return (
    <div className="bg-[#fafafa] min-h-screen dark:bg-slate-900">
      <SubNav />
      <HeroCloud />
      <PersonasCloud />
      <ProcessCloud />
      <CloudIllustration />
      <NextStepsCloud />
      <TechnicalFeaturesCloud />
      <DevsCloud />
      <NodesCloud />
      <CaseStudyCarousel />
    </div>
  );
}

