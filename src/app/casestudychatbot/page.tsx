import { OpenAIBot } from "@/components/sections/openai";
import ProcessBot from "@/components/sections/process-bot";
import { OutcomesBot } from "@/components/sections/outcomes-bot";
import NextStepsBot from "@/components/sections/nextsteps-bot";
import PersonasBot from "@/components/sections/personas-bot";
import HeroBot from "@/components/sections/hero-bot";
import { CaseStudyCarousel } from "@/components/sections/casestudycarousel";
import { TrainingBot } from "@/components/sections/training-bot";
import FlowmapBot from "@/components/sections/flowmap-bot";
import FloatingNav from "@/components/floatingnav-bot";
import { TldrBot } from "@/components/sections/tldr-bot";

export default function CaseStudyBot() {
    return (
        <div>
            <FloatingNav />
            
            <div className="container">
                <section id="outcome" className="min-h-screen">
                    <HeroBot />
                </section>

                <section id="tldr" className="min-h-screen">
                    <TldrBot />
                </section>

                <section id="opportunity" className="min-h-screen">
                    <OutcomesBot />
                </section>
                
                <section id="process" className="min-h-screen">
                    <PersonasBot />                    
                    <ProcessBot />
                </section>
                
                <section id="solution" className="min-h-screen">
                    <FlowmapBot />
                </section>
                
                <section id="integration" className="min-h-screen">
                    <OpenAIBot />
                    <TrainingBot />
                </section>
                
                <section id="nextsteps" className="min-h-screen">
                    <NextStepsBot />
                </section>
            </div>
            
            <CaseStudyCarousel />
        </div>
    );
}