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
import { RoleBasedAccess } from '@/components/sections/rolebasedaccess-designsystem';
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import { ComparisonDesignSystem } from '@/components/sections/comparison-designsystem';
import DesignSystemFlow from '@/components/sections/searchdiscovery-designsystem';
import FloatNavDesignSystem from '@/components/floatnav-designsystem';
import { TldrDesignSystem } from '@/components/sections/tldr-designsystem';





export default function HomeDesignSystem() {
  return (
      <div>
          <FloatNavDesignSystem /> 

          <div className="container">    
            <HeroDesignSystem />

            <section id="tldr" className="min-h-screen">
              <TldrDesignSystem />
            </section>


          <div className="container">
              <section id="outcome" className="min-h-screen">

              <OutcomesDesignSystem />
              <CtaDesignSystem />
              </section>



              <section id="opportunity" className="min-h-screen">
              <PersonasDesignSystem />
              <RequirementsDesignSystem />
              </section>
              
              <section id="process" className="min-h-screen">
              <AccelerateDesignSystem />
              </section>
              
              <section id="solution" className="min-h-screen">
              <TechnicalFeaturesDesignSystem />
              <DesignSystemFlow />
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
              <RoleBasedAccess />
              </section>
              
              <section id="learnings" className="min-h-screen">
              <ReflectionDesignSystem />
              </section>
              
              <section id="nextsteps" className="min-h-screen">
              <NextStepsDesignSystem />
              </section>
          </div>
          </div>
          <CaseStudyCarousel />
      </div>
  );
}