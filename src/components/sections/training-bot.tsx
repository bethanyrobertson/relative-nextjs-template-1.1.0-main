import { ChevronRight, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import SectionHeader from "../section-header";

const TrainingBot = () => {
  return (
    <section className="py-32 relative">
       <div className="absolute inset-0 bg-[#EFF3F2] w-screen left-1/2 -translate-x-1/2 -z-10"></div>
        <SectionHeader
          category="PROCESS"
          title="Progressive AI Training: From Content Knowledge to Intelligent Navigation"
          icon={Heart}
            description="The AI training followed a three-phase approach that progressively built intelligence from basic portfolio content knowledge to sophisticated navigation capabilities. Starting with foundational Q&A training, the system evolved to make contextual connections between projects and skills, ultimately achieving smart routing that seamlessly guides users from conversation to relevant portfolio sections based on their specific interests and intent."
            className="border-none"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-3 xl:gap-20">
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://www.dropbox.com/scl/fi/0a3nvtg9jb8s31osmqrm4/fees.png?rlkey=fug3st8srbdi6js91ml737sxx&st=8e30nr7n&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex items-center font-mono gap-2 font-bold">
              Phase 1: Foundation Training
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  <li>Fed comprehensive portfolio content into knowledge base</li>
                  <br />
                  <li>Created extensive Q&A pairs covering common recruiter questions</li>
                  <br />
                  <li>Developed response templates maintaining consistency</li>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://www.dropbox.com/scl/fi/vhdp2pc470cno1zoa2gjf/Donut-Chart_-3-Parts-remix.gif?rlkey=vezap2gdd5f5n2jge3sdd9i5f&st=bnvnh8dp&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex items-center font-mono gap-2 font-bold">
              Phase 2: Contextual Enhancement
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  <li>Trained agent to reference specific projects when discussing skills</li>
                  <br />
                  <li>Implemented cross-referencing between experience and portfolio examples</li>
                  <br />
                  <li>Added capability to suggest relevant case studies based on user interests</li>
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6b993d08-fe12-48be-345b-d4c554b48800/public"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex font-mono items-center gap-2 font-bold">
              Phase 3: Navigation Intelligence
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  <li>Integrated deep-linking to specific portfolio sections</li>
                  <br />
                  <li>Developed smart routing based on user intent</li>
                  <br />
                  <li>Created seamless handoffs between conversation and visual exploration</li>
              </p>
            </div>
          </div>
        </div>

    </section>
  );
};

export { TrainingBot };