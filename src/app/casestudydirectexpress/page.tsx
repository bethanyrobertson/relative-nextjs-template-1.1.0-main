import HeroDirectExpress from "@/components/sections/hero-directexpress";
import AccelerateDirectExpress from "@/components/sections/accelerate-directexpress";
import NextStepsDirectExpress from "@/components/sections/nextsteps-directexpress";
import { TechnicalFeaturesDirectExpress } from "@/components/sections/technicalfeatures-directexpress";
import { PillarsDex } from "@/components/sections/pillars-dex";
import { MobileFlowsDex } from "@/components/sections/mobileflows-dex";
import { BillPayDex } from "@/components/sections/billpay-dex";
import { AtmDex } from "@/components/sections/atm-dex";
import { LearningsDex } from "@/components/sections/learnings-dex";
import TrustDex from "@/components/sections/trust-dex";
import PersonasDex from "@/components/sections/personas-dex";
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import { AccessibleComponents } from "@/components/sections/accessiblecomponents";
import { TldrDex } from "@/components/sections/tldr-dex";
import FloatNavDex from "@/components/floatnav-dex";



export default function CaseStudyDirectExpress() {
  return (
      <div>
          <FloatNavDex />
          
          <div className="container">
               <HeroDirectExpress />
              <section id="outcome" className="min-h-screen">

              </section> 


              <section id="tldr" className="min-h-screen">
              <TldrDex />

              </section>



              <section id="opportunity" className="min-h-screen">
              <PersonasDex />
              <PillarsDex />
              <TrustDex />
              </section>
              
              <section id="process" className="min-h-screen">
              <AccelerateDirectExpress />
              </section>
              
              <section id="solution" className="min-h-screen">
              <TechnicalFeaturesDirectExpress />
              <MobileFlowsDex />
              <BillPayDex />
              <AtmDex />
              <AccessibleComponents />
              </section>
              
              <section id="learnings" className="min-h-screen">
              <LearningsDex />
              </section>
              
              <section id="nextsteps" className="min-h-screen">
              <NextStepsDirectExpress />
              </section>
          </div>
          
          <CaseStudyCarousel />
      </div>
  );
}