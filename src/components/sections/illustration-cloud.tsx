import React from 'react';
import { FileCode, GitCommit, MonitorSpeaker, Zap, Pencil } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '../section-header';

import { cn } from '@/lib/utils';

const features = [
  {
    description: 'Security and encryption concepts',
    subDescription:
      "Illustrations blend universally recognized security symbols (locks, keys, shields) with subtle technical details to convey both trustworthiness and sophisticated cryptographic processes.",
    className: '',
    images: [
      {
        src: '/images/casestudies/cloud/pictograms-cloud-2.png',
        alt: 'GitHub Integration',
        width: 700,
        height: 320,
        className: '',
      },
    ],
  },
  {
    description: 'Developer tools and APIs',
    subDescription:
      "Technical workflow illustrations use familiar development metaphors enhanced with blockchain-specific visual cues to bridge the gap between traditional programming concepts and Web3 development paradigms.",
    className: '',
    images: [
      {
        src: '/images/casestudies/cloud/cloud-illo-1.png',
        alt: 'Developer tools and APIs',
        width: 700,
        height: 320,
        className: '',
      },
    ],
  },
  {
    description: 'Smart contracts and transactions',
    subDescription:
      'Visual metaphors combine familiar document and process symbols with blockchain-specific elements to make invisible computational workflows tangible.',
    images: [
      {
        src: '/images/casestudies/cloud/pictograms-cloud.png',
        alt: 'Smart contracts and transactions',
        width: 700,
        height: 320,
        className: '',
      },
    ],
  },
  {
    description: 'Nodes and network topology',
    subDescription:
      'Illustrations use connected geometric forms with dynamic visual indicators to represent abstract distributed systems as intuitive network maps.',
    images: [
      {
        src: '/images/casestudies/cloud/cloud-shape-language.png',
        alt: 'Nodes and network topology',
        width: 700,
        height: 320,
        className: '',
      },
    ],
  },
];

export function CloudIllustration() {
  return (
    <>
      <section className="container py-32">
        <SectionHeader
          category="Illustration"
          title="Depicting Complex Concepts in Web3"
          icon={Pencil}
          description=" Icons and Illusatrations needed to work at multiple scales—from dashboard overview to detailed network monitoring. Used consistent geometric principles (circles for nodes, lines for connections) to create intuitive mental models for developers managing distributed infrastructure."
        />

        {/* The following div is likely causing the misalignment */}
        <div className="border-none py-10" />
        <div className="grid grid-cols-1 gap-18 rounded-lg md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'div-padding space-y-8',
                feature.className,
              )}
            >

              {feature.images && (
                <div
                  className={cn(
                    'relative flex flex-col gap-4',
                    index == 2 && 'mask-b-from-30% mask-b-to-95%',
                  )}
                >
                  {feature.images.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      style={{ objectFit: 'contain' }}
                      className={cn(image.className, 'rounded-2xl')}
                    />
                  ))}
                </div>
              )}

              <div className="space-y-2 md:space-y-6">
                <div className="space-y-1">
                  <h3 className="text-foreground font-semibold font-mono md:text-xl">
                    {feature.description}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {feature.subDescription}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
