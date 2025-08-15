import Image from 'next/image';

import { ListFilter, Map, MapPin, CircleDollarSign, Lightbulb } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import SectionHeader from '../section-header';

const FEATURES = [
  {
    title: 'Interactive Map & List View ',
    description: 'Dual-mode ATM discovery with searchable map pins and structured list format, supporting location-based auto-detection',
    content: {
      title: 'Map & List View ',
      description: `Dual-mode ATM discovery with searchable map pins and structured list format, supporting location-based auto-detection`,
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/24f1dc70-3940-40e3-1eb5-1f1034400b00/public',
    },
    icon: Map,
  },
  {
    title: 'Filtering',
    description: 'Filter ATMs by surcharge-free status, accessibility features, network type',
    content: {
      title: 'Filters:',
      description:
        'surcharge-free status, accessibility features, network type',
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/841b085b-0dd9-4d58-fbce-e2f396201100/public',
    },
    icon: ListFilter,
  },
  {
    title: 'Details & Navigation',
    description: 'Direct deep-linking to Google Maps and Apple Maps for turn-by-turn directions to selected ATM locations',
    content: {
      title: 'Details & Navigation',
      description:
        'Direct deep-linking to Google Maps and Apple Maps for turn-by-turn directions to selected ATM locations',
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e82510db-4414-42ad-fdd4-9673f50d5900/public',
    },
    icon: MapPin,
  },
  {
    title: 'Fee Transparency',
    description: 'Transparent disclosure of domestic fees, international fees, and clear indication of in-network ATMs',
    content: {
      title: 'Fee Transparency',
      description:
        'Transparent disclosure of domestic fees, international fees, and clear indication of in-network ATMs',
      image: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/b4fd05d7-c720-44ae-02e0-a928ee2cbf00/public',
    },
    icon: CircleDollarSign,
  },
];

export const AtmDex = () => {
  return (
    <section id="atm" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="SOLUTION"
            title="ATM Locator Cardholders with Interactive Maps and Smart Filtering"
            icon={Lightbulb}
            description="This feature transforms the current disjointed ATM search experience into a comprehensive, mobile-friendly solution that helps cardholders efficiently find in-network, surcharge-free ATMs using Mastercard Services data with enhanced UX/UI and integrated navigation support."
            className="border-none"
        />
                <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 flex gap-4 max-lg:flex-col-reverse border rounded-xl p-4 md:mt-8 md:p-6 lg:mt-10 lg:p-8"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl p-1.5 lg:basis-1/4 lg:flex-col tabs-list-override" style={{ 
            backgroundColor: 'rgb(234 242 241)'
          }}>
            {FEATURES.map((feature) => (
                <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal transition-colors duration-300 
                    data-[state=active]:bg-white data-[state=active]:shadow-md
                    lg:px-6 lg:py-4"
                    style={{
                      color: 'slate-400', // Blue for inactive
                      '--tw-text-opacity': '1'
                    } as React.CSSProperties}
                    data-inactive-color="rgb(59 130 246)"
                    data-active-color="rgb(0 0 0)"
                >
                    <div>
                        <feature.icon className="size-7 md:size-8 lg:size-9 text-inherit" />
                        <h3 className="mt-3 font-mono font-bold text-inherit">{feature.title}</h3>
                        <p className="mt-1 text-sm font-sans text-inherit opacity-80">
                        {feature.description}
                        </p>
                    </div>
                </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent
                className={cn(
                'bg-background m-0 flex-1 rounded-xl overflow-hidden'
                )}
                key={feature.title}
                value={feature.title}
            >
                <div className="h-[420px] lg:h-[500px] relative border rounded-xl overflow-hidden">
                <Image
                    src={feature.content.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                />
                </div>              
                <div className="p-5 text-balance lg:p-7">
                <h4 className="inline font-mono font-bold">
                    {feature.content.title}{' '}
                </h4>
                <span className="text-muted-foreground mt-2 text-pretty">
                    {feature.content.description}
                </span>
                </div>
            </TabsContent>
            ))}
        </Tabs>
      </div>
    </section>
  );
};
