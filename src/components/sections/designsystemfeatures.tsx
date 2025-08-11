import Image from 'next/image';

import { ListFilter, Map, MapPin, CircleDollarSign, Lightbulb } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import SectionHeader from '../section-header';

const FEATURES = [
  {
    title: 'Token Visualization ',
    description: 'Color swatches provide immediate visual context',
    content: {
      title: 'Token Visualization ',
      description: `Color swatches and visual previews enable immediate recognition and validation, reducing the cognitive load of working with large token libraries while preventing selection errors`,
      image: 'https://www.dropbox.com/scl/fi/zkim8s34x8rqf98jtiglo/atmmaplist.png?rlkey=izt0plc5v2ynoh0tjb88ju1i5&st=nq3rinbt&raw=1',
    },
    icon: Map,
  },
  {
    title: 'Smart Filtering',
    description: 'Category buttons and search work in tandem',
    content: {
      title: 'Smart Filtering',
      description:
        'Category buttons and real-time search work together to support both browsing discovery and targeted lookup, accommodating different user mental models for finding design tokens',
      image: 'https://www.dropbox.com/scl/fi/lomfvav12sjx0a609f9tt/atmfilter.png?rlkey=sbeb4i70p7e9as18y0ay5uqir&st=g8b2c7wg&raw=1',
    },
    icon: ListFilter,
  },
  {
    title: 'Bulk Operations',
    description: 'Upload and export functions support large-scale operations',
    content: {
      title: 'Bulk Operations',
      description:
        'Upload and export functions support large-scale operations',
      image: 'https://www.dropbox.com/scl/fi/lgdzd6svx1m7u8m5nyw1s/atmdirections.png?rlkey=2n52crtj2uj4nkn2jt716m365&st=ovtjgqm9&raw=1',
    },
    icon: MapPin,
  },
  {
    title: 'Administrative Workflow Optimization',
    description: 'Role-based access',
    content: {
      title: 'Administrative Workflow Optimization',
      description:
        'Role-based interface elements surface relevant controls for each user type, ensuring design system managers can maintain governance without overwhelming contributors with unnecessary complexity',
      image: 'https://www.dropbox.com/scl/fi/qjemnnn6oho0tabg9cn1v/atmfees.png?rlkey=vs2ipgt4bl5hlyyl3dggzuqjm&st=zepj4e2v&raw=1',
    },
    icon: CircleDollarSign,
  },
];

export const DesignSystemFeatures = () => {
  return (
    <section id="atm" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="SOLUTION"
            title="Frontend Experience"
            icon={Lightbulb}
            description="The interface balances information density with usability, prioritizing the workflows that determine design system adoption success"
            className="border-none"
        />

        <Tabs
          defaultValue={FEATURES[0].title}
          orientation="vertical"
          className="mt-8 flex gap-4 max-lg:flex-col-reverse border rounded-xl p-4 md:mt-8 md:p-6 lg:mt-10 lg:p-8"
        >
          <TabsList className="flex h-auto justify-start overflow-x-auto rounded-xl bg-[#f5f5f5] dark:bg-[#002226] p-1.5 lg:basis-1/4 lg:flex-col">
            {FEATURES.map((feature) => (
                <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-muted-foreground transition-colors duration-300 
                    data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md
                    lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:bg-[#EFF3F2] dark:data-[state=active]:text-[#001D21]"
                >
                    <div>
                        <feature.icon className="size-7 md:size-8 lg:size-9 text-inherit" />
                        <h3 className="mt-3 font-mono font-bold text-inherit">{feature.title}</h3>
                        <p className="mt-1 text-sm text-inherit opacity-80">
                        {feature.description}
                        </p>
                    </div>
                </TabsTrigger>
            ))}
          </TabsList>

          {FEATURES.map((feature) => (
            <TabsContent
                className={cn(
                'bg-background m-0 flex-1 rounded-xl overflow-hidden',
                feature.content.className,
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
