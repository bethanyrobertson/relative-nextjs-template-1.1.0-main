import { ChevronRight, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import SectionHeader from "../section-header";

const PillarsDex = () => {
  return (
    <section className="py-32 relative">
       <div className="absolute inset-0 bg-[#EFF3F2] w-screen left-1/2 -translate-x-1/2 -z-10"></div>
        <SectionHeader
          category="BACKGROUND"
          title="Three-Pillar Strategy: Autonomy, Transparency, and Accessibility"
          icon={Heart}
            description="Based on research findings, we developed a targeted approach to transform user behavior."
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
               Transform Fee Anxiety Into Fee Confidence
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Problem:
                  <br />
                  57% withdraw all funds immediately due to fee anxiety
                  <br />
                  <br />
                  Solution: 
                  <br />
                  Improved ATM locator with fee transparency + Bill Pay functionality
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
               Eliminate 40% of Customer Service Calls Through Self-Service
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Problem:
                  <br />
                  54% call just to check balance
                  <br />
                  <br />
                  Solution: 
                  <br />
                  Enhanced mobile app with real-time notifications and spending tracking
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
               Turn Feature Blindness Into Feature Discovery
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Problem: 
                  <br />
                  48% unaware of free ATM network
                  <br />
                  <br />
                  Solution:
                  <br />
                  Better onboarding and in-app education
              </p>
            </div>
          </div>
        </div>

    </section>
  );
};

export { PillarsDex };
