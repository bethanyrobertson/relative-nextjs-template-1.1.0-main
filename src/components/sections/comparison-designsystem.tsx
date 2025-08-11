
import Image from 'next/image';

import { ListFilter, Map, MapPin, CircleDollarSign, Lightbulb } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/image-comparison';
import { cn } from '@/lib/utils';
import SectionHeader from '../section-header';

const FEATURES = [
  {
    title: 'Interactive Map & List View ',
    description: 'Dual-mode ATM discovery with searchable map pins and structured list format, supporting location-based auto-detection',
    content: {
      title: 'Map & List View ',
      description: `Dual-mode ATM discovery with searchable map pins and structured list format, supporting location-based auto-detection`,
      beforeImage: 'https://www.dropbox.com/scl/fi/zkim8s34x8rqf98jtiglo/atmmaplist.png?rlkey=izt0plc5v2ynoh0tjb88ju1i5&st=nq3rinbt&raw=1',
      afterImage: 'https://www.dropbox.com/scl/fi/lomfvav12sjx0a609f9tt/atmfilter.png?rlkey=sbeb4i70p7e9as18y0ay5uqir&st=g8b2c7wg&raw=1', // Replace with actual after image
      beforeAlt: 'ATM Map View',
      afterAlt: 'ATM List View',
    },
    icon: Map,
  },
  {
    title: 'Filtering',
    description: 'Filter ATMs by surcharge-free status, accessibility features, network type',
    content: {
      title: 'Filters:',
      description: 'surcharge-free status, accessibility features, network type',
      beforeImage: 'https://www.dropbox.com/scl/fi/lomfvav12sjx0a609f9tt/atmfilter.png?rlkey=sbeb4i70p7e9as18y0ay5uqir&st=g8b2c7wg&raw=1',
      afterImage: 'https://www.dropbox.com/scl/fi/lomfvav12sjx0a609f9tt/atmfilter.png?rlkey=sbeb4i70p7e9as18y0ay5uqir&st=g8b2c7wg&raw=1', // Replace with actual after image
      beforeAlt: 'ATM Filter - Before',
      afterAlt: 'ATM Filter - After',
    },
    icon: ListFilter,
  },
  {
    title: 'Details & Navigation',
    description: 'Direct deep-linking to Google Maps and Apple Maps for turn-by-turn directions to selected ATM locations',
    content: {
      title: 'Details & Navigation',
      description: 'Direct deep-linking to Google Maps and Apple Maps for turn-by-turn directions to selected ATM locations',
      beforeImage: 'https://www.dropbox.com/scl/fi/lgdzd6svx1m7u8m5nyw1s/atmdirections.png?rlkey=2n52crtj2uj4nkn2jt716m365&st=ovtjgqm9&raw=1',
      afterImage: 'https://www.dropbox.com/scl/fi/lgdzd6svx1m7u8m5nyw1s/atmdirections.png?rlkey=2n52crtj2uj4nkn2jt716m365&st=ovtjgqm9&raw=1', // Replace with actual after image
      beforeAlt: 'ATM Navigation - Before',
      afterAlt: 'ATM Navigation - After',
    },
    icon: MapPin,
  },
  {
    title: 'Fee Transparency',
    description: 'Transparent disclosure of domestic fees, international fees, and clear indication of in-network ATMs',
    content: {
      title: 'Fee Transparency',
      description: 'Transparent disclosure of domestic fees, international fees, and clear indication of in-network ATMs',
      beforeImage: 'https://www.dropbox.com/scl/fi/qjemnnn6oho0tabg9cn1v/atmfees.png?rlkey=vs2ipgt4bl5hlyyl3dggzuqjm&st=zepj4e2v&raw=1',
      afterImage: 'https://www.dropbox.com/scl/fi/qjemnnn6oho0tabg9cn1v/atmfees.png?rlkey=vs2ipgt4bl5hlyyl3dggzuqjm&st=zepj4e2v&raw=1', // Replace with actual after image
      beforeAlt: 'ATM Fees - Before',
      afterAlt: 'ATM Fees - After',
    },
    icon: CircleDollarSign,
  },
];

export const ComparisonDesignSystem = () => {
  return (
    <section id="atm" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="BACKEND INFRASTRUCTURE"
            title="RESTful API Design"
            icon={Lightbulb}
            description="A RESTful API for managing design tokens should include endpoints for CRUD operations, as well as user authentication and role-based access control."
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
                'bg-background m-0 flex-1 rounded-xl overflow-hidden'
                )}
                key={feature.title}
                value={feature.title}
            >
                <div className="h-[420px] lg:h-[500px] relative">
                  <ImageComparison
                    className="w-full h-full rounded-xl border border-zinc-200 dark:border-zinc-800"
                    enableHover
                  >
                    <ImageComparisonImage
                      src={feature.content.beforeImage}
                      alt={feature.content.beforeAlt}
                      position="left"
                    />
                    <ImageComparisonImage
                      src={feature.content.afterImage}
                      alt={feature.content.afterAlt}
                      position="right"
                    />
                    <ImageComparisonSlider className="bg-white" />
                  </ImageComparison>
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