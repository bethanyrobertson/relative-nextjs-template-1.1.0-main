import HeroDirectExpress from "@/components/sections/hero-directexpress";
import AccelerateDirectExpress from "@/components/sections/accelerate-directexpress";
import NextStepsDirectExpress from "@/components/sections/nextsteps-directexpress";
import { TechnicalFeaturesDirectExpress } from "@/components/sections/technicalfeatures-directexpress";
import { DirectexpressPillars } from "@/components/sections/directexpress-pillars";
import { PillarsDex } from "@/components/sections/pillars-dex";
import { MobileFlowsDex } from "@/components/sections/mobileflows-dex";
import { BillPayDex } from "@/components/sections/billpay-dex";
import { AtmDex } from "@/components/sections/atm-dex";
import { LearningsDex } from "@/components/sections/learnings-dex";
import TrustDex from "@/components/sections/trust-dex";
import MetricsDex from "@/components/sections/metrics-dex";
import PersonasDex from "@/components/sections/personas-dex";
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import { AccessibleComponents } from "@/components/sections/accessiblecomponents";

export default function CaseStudyDirectExpress() {
  return (
    <div>
      <div className="container">
        <HeroDirectExpress />
        <MetricsDex />
        <PersonasDex />
        <DirectexpressPillars />
        <PillarsDex />
        <TrustDex />
        <TechnicalFeaturesDirectExpress />
        <MobileFlowsDex />
        <BillPayDex />
        <AtmDex />
        <AccessibleComponents />
        <AccelerateDirectExpress />
        <LearningsDex />
        <NextStepsDirectExpress />
      </div>
      <CaseStudyCarousel />
    </div>
  );
}