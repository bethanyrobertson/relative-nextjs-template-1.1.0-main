import AccelerateDesignSystem from '@/components/sections/accelerate-designsystem';
import AdaptiveDesignSystem from '@/components/sections/adaptive-designsystem';
import HeroDesignSystem from '@/components/sections/hero-designsystem';
import OptimizeDesignSystem from '@/components/sections/optimize-designsystem';
import NextStepsDesignSystem from '@/components/sections/nextsteps-designsystem';
import { TechnicalFeaturesDesignSystem } from '@/components/technicalfeatures-designsystem';
import { CodeBlock1 } from '@/components/sections/codeblock1';
import PersonasDesignSystem from '@/components/sections/personas-designsystem';
import { CodeBlock2 } from '@/components/sections/codeblock2';
import UIDesignSystem from '@/components/sections/ui-designsystem';
import { CtaDesignSystem } from '@/components/sections/cta-designsystem';
import PillarsDesignSystem from '@/components/sections/pillars-designsystem';
import { FlowsDesignSystem } from '@/components/sections/flows-designsystem';
import { DesignSystemFeatures } from '@/components/sections/designsystemfeatures';
import { ReflectionDesignSystem } from '@/components/sections/reflection-designsystem';
import { OutcomesDesignSystem } from '@/components/sections/outcomes-designsystem';
import { RequirementsDesignSystem } from '@/components/sections/requirements-designsystem';
import { FeaturesDeliveredDesignSystem } from '@/components/sections/featuresdelivered-designsystem';
import MetricsDesignSystem from '@/components/sections/metrics-designsystem';
import { RoleBasedAccess } from '@/components/sections/rolebasedaccess-designsystem';
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import { ComparisonDesignSystem } from '@/components/sections/comparison-designsystem';


export default function HomeDesignSystem() {
  return (
    <div className="bg-background">
      <HeroDesignSystem />
      <MetricsDesignSystem />
      <OutcomesDesignSystem />
      <CtaDesignSystem />
      <PersonasDesignSystem />
      <RequirementsDesignSystem />
      <TechnicalFeaturesDesignSystem />
      <PillarsDesignSystem />
      <FlowsDesignSystem />
      <DesignSystemFeatures />
      <CodeBlock2 />
      <CodeBlock1 />
      <UIDesignSystem />
      <FeaturesDeliveredDesignSystem />
      <ComparisonDesignSystem />
      <AdaptiveDesignSystem />
      <OptimizeDesignSystem />
      <AccelerateDesignSystem />
      <ReflectionDesignSystem />
      <RoleBasedAccess />
      <NextStepsDesignSystem />
      <CaseStudyCarousel />
    </div>
  );
}

