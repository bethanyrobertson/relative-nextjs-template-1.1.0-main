"use client";
import SectionHeader from "../section-header";
import { Rocket } from 'lucide-react';

const itemsData = [
  {
    id: 1,
    title: "Enterprise Reliability",
    imageSrc: "/images/casestudies/cloud/cb-dev-2.png",
    description:
      "Institutional-grade infrastructure and securit",
  },
  {
    id: 2,
    title: "Simplified Complexity",
    imageSrc: "/images/casestudies/cloud/cb-dev-3.png",
    description:
      "Making blockchain development accessible",
  },
  {
    id: 3,
    title: "Trusted Foundation",
    imageSrc: "/images/casestudies/cloud/cb-dev-4.png",
    description:
      "Leveraging Coinbase's regulatory compliance and security reputation",
  },
];

const DevsCloud = () => {
  return (
    <section className="py-32">
      <SectionHeader
        category="BACKGROUND"
        title="Core Principles"
        icon={Rocket}
        description={
          'Built for developers, by developers" - positioning Coinbase Cloud as the technical foundation that powers the future of finance.'
        }
      />
      <div className="container">

        <div className="mx-auto mt-16 flex flex-col gap-6 md:flex-row">
          {itemsData.map((item) => (
            <a className="block" href="#" key={item.id}>
              <img
                src={item.imageSrc}
                alt="placeholder"
                className="mb-6 h-full max-h-72 w-full rounded-2xl object-cover lg:max-h-96"
              />
              <h6 className="mb-3 text-lg font-mono font-semibold">{item.title}</h6>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { DevsCloud };
