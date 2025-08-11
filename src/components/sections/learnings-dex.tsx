import Image from 'next/image';

import { Card, CardContent, CardHeader } from '../ui/card';

import { cn } from '@/lib/utils';
import SectionHeader from '../section-header';
import {
  Receipt,
  MessagesSquare,
  Map,
  Bell,
  Smartphone,
  ArrowRightLeft,
  LayoutList,
  Blocks,
} from "lucide-react";


type ItemType = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    className: string;
  };
};

const ITEMS: ItemType[] = [
  {
    title: 'High Satisfaction Can Hide Critical Usability Issues',
    description:
      'User interviews revealing "Cash App envy" directly informed our bill pay strategy, while quantitative data on customer service calls shaped our notification system.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/e1082de5-90d8-4a80-fab2-0ee1d7bb8100/public',
      alt: 'High Satisfaction Can Hide Critical Usability Issues',
      className: 'object-cover object-center h-100',
    },
  },

  {
    title: 'Complexity vs. Simplicity: Supporting Edge Cases Without Compromising Core Experience',
    description:
      'Supporting multiple user types and card scenarios while maintaining simplicity required careful information architecture and progressive disclosure.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/7595892e-acab-497c-cf5f-83d72a23e500/public',
      alt: 'Complexity vs. Simplicity: Supporting Edge Cases Without Compromising Core Experience',
      className: 'object-center object-cover h-100',
    },
  },  
  {
    title: 'Unbanked Users Need Different Mental Models Than Traditional Fintech',
    description: 'Designing for 70% unbanked users required rethinking traditional fintech patterns, focusing on immediate utility over advanced financial features.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/55c6fb38-37b1-4784-78ed-aefd881f1e00/public',
      alt: 'Unbanked Users Need Different Mental Models Than Traditional Fintech',
      className: 'object-center object-cover',
    },
  },
  {
    title: 'Trust Is Earned Through Transparency, Not Hidden Behind Good Intentions',
    description:
      'For users managing limited financial resources, transparency in fees and clear communication became critical design requirements, not just nice-to-haves.',
    image: {
      src: 'https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6ba3e53f-1050-42e6-7f7b-6db07c262700/public',
      alt: 'Trust Is Earned Through Transparency, Not Hidden Behind Good Intentions',
      className: 'object-cover object-center',
    },
  },
  {
    title: 'Cycle analysis.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
    image: {
      src: 'https://www.dropbox.com/scl/fi/njrf3z2dn0atarasuiy9j/SiteMap-SVG.png?rlkey=avlkx51hjj3wk7pp0fz3rbei1&st=lkar300f&raw=1',
      alt: 'Cycle analysis showing backlog priorities and statistics',
      className: 'object-center object-cover',
    },
  },
];

export const LearningsDex = () => {
  return (
    <section id="learnings" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <SectionHeader
            category="INSIGHTS"
            title="Designing Financial Inclusion for the Unbanked"
            icon={Blocks}
            description="This application demonstrates how thorough user research can transform seemingly high satisfaction scores into actionable insights, revealing hidden friction and informing a comprehensive digital transformation that truly serves user needs."
            className="border-none"
        />

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-6">
          {ITEMS.map((item, i) => {
            const gridClasses = {
              0: 'md:col-span-3 md:row-span-3',
              1: 'md:col-span-3 md:row-span-3 md:col-start-4',
              2: 'md:col-span-2 md:row-span-2 md:row-start-4',
              3: 'md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4',
              4: 'md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4',
            }[i];
            return <Item key={i} {...item} className={gridClasses} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Item = ({
  title,
  description,
  image,
  className,
}: ItemType & { className?: string }) => {
  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden border bg-muted shadow-none max-md:min-h-[400px]',
        className,
      )}
    >
      <CardHeader className="mb-2">
        <h3 className="font-bold font-mono text-sm text-foreground">
          {title}{' '}
        </h3>
        <p className="text-muted-foreground text-sm font-sans">
          {description}
        </p>
      </CardHeader>

      <CardContent className="relative min-h-60 flex-1 overflow-hidden p-0 lg:min-h-48">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={cn('object-cover', image.className)}
        />
      </CardContent>
    </Card>
  );
};
