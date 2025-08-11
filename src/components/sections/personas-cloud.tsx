import React from 'react';

import { Heart, Landmark, Sparkles, Globe, Search } from 'lucide-react';

import SectionHeader from '../section-header';

type ValueType = {
  title: string;
  description: string | React.ReactNode;
  icon: React.ElementType;
};

const values: ValueType[] = [
  {
    title: 'Enterprise Blockchain Developers:',
    description: (
      <>
        <p>Need reliable, scalable infrastructure.</p>
        <br />
        <br />
        What Influences Their Trust:
        <ul className="list-disc ml-6 mt-2">
          <li>Enterprise customer references: Other Fortune 500 companies using the platform successfully</li>
          <li>Compliance certifications: SOC 2 Type II, ISO 27001, PCI-DSS documentation</li>
          <li>SLA guarantees: Specific uptime, performance, and support commitments</li>
          <li>Security transparency: Detailed architecture reviews, penetration testing results</li>
          <li>Integration support: Professional services and dedicated technical account management.</li>
        </ul>
      </>
    ),
    icon: Globe,
  },
  {
    title: 'Web3 Startup Teams',
    description: (
      <>
        <p>Require quick deployment and robust APIs.</p>
        <br />
        <br />
        What Influences Their Trust:
        <ul className="list-disc ml-6 mt-2">
          <li>Developer community adoption: High GitHub stars, active Discord/Telegram communities</li>
          <li>Comprehensive documentation: Extensive code examples, tutorials, and guides</li>
          <li>Transparent pricing: Clear, predictable costs without hidden fees</li>
          <li>Fast support response: Community forums or direct support for quick problem resolution</li>
          <li>API reliability: Consistent uptime and performance for user-facing applications.</li>
        </ul>
      </>
    ),
    icon: Sparkles,
  },
  {
    title: 'Financial Services Engineers',
    description: (
      <>
        <p>Demand institutional-grade security and compliance</p>
        <br />
        <br />
        What Influences Their Trust:
        <ul className="list-disc ml-6 mt-2">
          <li>Regulatory expertise: Vendor understanding of financial services compliance requirements</li>
          <li>Institutional customers: Other banks and financial institutions as references</li>
          <li>Compliance certifications: Specific financial services certifications (PCI-DSS Level 1, etc.)</li>
          <li>Professional services: Access to compliance consulting and implementation support</li>
          <li>Operational resilience: Disaster recovery, business continuity, and incident response capabilities</li>
        </ul>
      </>
    ),
    icon: Landmark,
  },
];

const PersonasCloud = () => {
  return (
    <section className="container py-32">
      <SectionHeader
        category="RESEARCH & DISCOVERY"
        title="Primary Users"
        icon={Search}
        description="Through developer interviews and market analysis, we identified key user personas."
        className="border-none"
      />

      <div className="container mt-40 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div className="flex gap-2.5" key={index}>
              <Icon className="mt-0.5 size-[18px] shrink-0" />
              <div>
                <h3 className="text-lg !leading-none font-mono lg:text-xl">
                  {value.title}
                </h3>
                <div className="text-muted-foreground mt-2.5 text-sm">
                  {value.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PersonasCloud;