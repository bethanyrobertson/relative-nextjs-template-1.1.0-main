import Image from 'next/image';

import { Lightbulb, SlidersHorizontal, SearchCheck, ReceiptText, ArrowRightLeft } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import SectionHeader from '../section-header';

const FEATURES = [
{
    title: 'Streamlined Bill Management',
    description: 'View all billers in one place with access to manage each one',
    content: {
      title: 'Streamlined Bill Management',
      description:
        'View all billers in one place',
      image: 'https://www.dropbox.com/scl/fi/e6plytutukgqyew9iw11s/billpay-management.png?rlkey=ni1ymuhodl1owjwhpeqfxiu94&st=282ab77y&raw=1',
    },
    icon: ArrowRightLeft,
  },
  {
    title: 'Payee Search & Add',
    description: 'Access to over 20,000 payees',
    content: {
      title: 'Search',
      description: `20,000+ payee database with search functionality`,
      image: 'https://www.dropbox.com/scl/fi/qmfvr3odfjagnfa4gwats/billpay-search.png?rlkey=6formeyteyvzxtr58m5qnfb5g&st=ditiwnbu&raw=1',
    },
    icon: SearchCheck,
  },
  {
    title: 'Payment Management',
    description: 'Payment tracking and cancellation capabilities',
    content: {
      title: 'Cancel a Payment',
      description:
        'Payment tracking and cancellation capabilities',
      image: 'https://www.dropbox.com/scl/fi/53gsqo54pnhnki3qeuh9p/billpay-cancel.png?rlkey=1nvugw75yju4bdm3jo9aljblm&st=rh5ks8oi&raw=1',
    },
    icon: ReceiptText,
  },
  {
    title: 'Filtering',
    description: 'Integrated payment history with filtering and sorting options',
    content: {
      title: 'Filtering',
      description:
        'Integrated payment history with filtering and sorting options',
      image: 'https://www.dropbox.com/scl/fi/3tz9exh4tjipht22ii2va/billpay-filter.png?rlkey=fydkpkwg5dn10w4i3a8n1h3aq&st=rxyk4wss&raw=1',
    },
    icon: SlidersHorizontal,
  },
];

export const BillPayDex = () => {
  return (
    <section id="billpay" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="SOLUTION"
            title="Bill Pay Solution with Flexible Payment Processing Across 20,000+ Payees"
            icon={Lightbulb}
            description="DEX cardholders can pay bills using their Direct Express card through the mobile app or website"
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
                className="bg-background m-0 flex-1 rounded-xl overflow-hidden"
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
