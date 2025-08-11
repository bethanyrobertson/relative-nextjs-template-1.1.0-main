"use client";
import React from 'react';

import { Separator } from "@/components/ui/separator";
import SectionHeader from "../section-header";
import { Heart } from 'lucide-react';


const DirectexpressPillars = () => {
  return (
    <section className="py-32">
      <div className="container">
        <SectionHeader
            category="BACKGROUND"
            title="Three-Pillar Strategy: Autonomy, Transparency, and Accessibility"
            icon={Heart}
            description="Based on research findings, we developed a targeted approach to transform user behavior."
            className="border-none"
        />

        <div className="mt-8">
          <Separator />
          <div className="py-8">
            <div className="flex gap-4 md:items-center">
              <span className="mt-0.5 font-mono text-muted-foreground md:mt-0">
                01
              </span>
              <div className="grid items-center gap-3 md:grid-cols-2 md:gap-8">
                <h3 className="font-mono text-xl font-semibold">Eliminate 40% of Customer Service Calls Through Self-Service</h3>
                <p className="text-muted-foreground">
                  Problem: 54% call just to check balance
                  <br />
                  Solution: Enhanced mobile app with real-time notifications and spending tracking
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="py-8">
            <div className="flex gap-4 md:items-center">
              <span className="mt-0.5 font-mono text-muted-foreground md:mt-0">
                02
              </span>
              <div className="grid items-center gap-3 md:grid-cols-2 md:gap-8">
                <h3 className="text-xl font-mono font-semibold">Transform Fee Anxiety Into Fee Confidence</h3>
                <p className="text-muted-foreground">
                  Problem: 57% withdraw all funds immediately due to fee anxiety
                  <br />
                  Solution: Improved ATM locator with fee transparency + Bill Pay functionality
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="py-8">
            <div className="flex gap-4 md:items-center">
              <span className="mt-0.5 font-mono text-muted-foreground md:mt-0">
                03
              </span>
              <div className="grid items-center gap-3 md:grid-cols-2 md:gap-8">
                <h3 className="text-xl font-mono font-semibold">Turn Feature Blindness Into Feature Discovery</h3>
                <p className="text-muted-foreground">
                  Problem: 48% unaware of free ATM network
                  <br />
                  Solution: Better onboarding and in-app education
                </p>
              </div>
            </div>
          </div>
          <Separator />
        </div>
      </div>
    </section>
  );
};

export { DirectexpressPillars };
