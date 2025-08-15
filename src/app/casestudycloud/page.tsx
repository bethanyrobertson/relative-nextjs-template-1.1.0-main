import HeroCloud from "@/components/sections/hero-cloud";
import ProcessCloud from "@/components/sections/process-cloud";
import { CloudIllustration } from "@/components/sections/illustration-cloud";
import NextStepsCloud from "@/components/sections/nextsteps-cloud";
import TechnicalFeaturesCloud from "@/components/technicalfeatures-cloud";
import { DevsCloud } from "@/components/sections/devs-cloud";
import { NodesCloud } from "@/components/sections/nodes-cloud";
import PersonasCloud from "@/components/sections/personas-cloud";
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import FloatingNavCloud from "@/components/floatingnav-cloud";


export default function Cloud() {
  return (
      <div>
          <FloatingNavCloud />
          
          <div className="container">
              <section id="outcome" className="min-h-screen">
                <HeroCloud />
              </section>
              
              <section id="background" className="min-h-screen">
              <PersonasCloud />
              </section>
              
              <section id="process" className="min-h-screen">
               <ProcessCloud />
              </section>
              
              <section id="solution" className="min-h-screen">
                <CloudIllustration />
                <TechnicalFeaturesCloud />
                <DevsCloud />
                <NodesCloud />
              </section>
              
              <section id="nextsteps" className="min-h-screen">
               <NextStepsCloud />
              </section>
          </div>
          
          <CaseStudyCarousel />
      </div>
  );
}
