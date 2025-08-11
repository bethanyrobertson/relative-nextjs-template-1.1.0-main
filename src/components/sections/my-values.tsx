import React from 'react';

import { Box, Shield, Leaf } from 'lucide-react';

import SectionHeader from '../section-header';
import { Card, CardHeader, CardContent } from '../ui/card';

const values = [
  {
    icon: <Box className="size-6" />,
    value: 'User-Centered Design',
    description:
      'I prioritize the user experience, ensuring every feature adds real value and is intuitive to use.',
  },
  {
    icon: <Shield className="size-6" />,
    value: 'Continuous Learning',
    description:
      'I am committed to pushing boundaries, and evolving to learn new technologies and ways of working.',
  },
  {
    icon: <Leaf className="size-6" />,
    value: 'Integrity and Transparency',
    description: "I build with honesty and clarity, fostering trust with our users and partners.",
  },
];

export default function MyValues() {
  return (
    <section className="section-padding container space-y-10.5">
      <SectionHeader
        icon={Box}
        category="My Values"
        title="What I Value"
        description="I believe in principles that guide my growth and inspire my community."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {values.map((value, index) => (
          <Card key={index} className="gap-20 bg-[#fafafa] dark:bg-gray-950 border-none p-8 shadow-none">
            <CardHeader className="p-0">
              <div className="border-input text-muted-foreground flex size-12 items-center justify-center rounded-full border">
                {value.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <h3 className="text-2xl font-semibold">{value.value}</h3>
              <p className="text-lg leading-8">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
