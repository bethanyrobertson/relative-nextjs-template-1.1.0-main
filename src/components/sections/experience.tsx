import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Heart } from 'lucide-react';

import SectionHeader from '../section-header';

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
   {
    date: "2024 - Present",
    title: "Senior UI/UX Designer, Mocafi ",
    content:
      "• Leading rebrand, design system development, and 0-1 mobile application design for Direct Express, a federal benefits program serving millions of Social Security, Disability, and Veterans benefit recipients</br > • Collaborating with cross-functional teams to ensure accessibility compliance and government design standards</br > • Establishing design systems foundation to support scalable product growth across federal programs</br > •Created design system documentation and developer handoff specifications, improving design-engineering collaboration and reducing implementation inconsistencies",
  },
    {
    date: "2022-2024",
    title: "Senior Product Designer, Freelance",
    content:
      "Clients include: </br > • Google x Instrument: Results About You - Design System and Product Illustration(2024): Led product design for privacy-focused search experience, conducting user research and iterating on data visualization components</br > • Google, Waze : Design Lead (2023 - 2024):Provided temporary design leadership during team transition, maintaining design system consistency across navigation product features",
  },
  {
    date: "2023",
    title: "Product Designer, Aptos Labs",
    content:
      "Aptos Labs is a blockchain technology company focused on developing scalable, secure, and user-friendly decentralized applications and infrastructure."
  },
   {
    date: "2021 - 2022",
    title: "Design Systems, Visual Designer I-II, Coinbase ",
    content:
      "Coinbase is a leading fintech cryptocurrency exchange platform that allows users to buy, sell, and store various digital currencies securely.</br > • Developed the visual identity for Coinbase Assistant, a native chat support in the retail app, which increased the number of customer tickets resolved electronically to 64%, with 96% of chats attended to within 1 minute. </br > • Strategized internal processes for the design team through the implementation of a Figma file structure and shared workspace, resulting in better collaboration and transparency across the organization. Initiated and managed cross-departmental collaborations that enhanced project efficiency, while creating style guides and design standards to be used across the company.</br > • Created an innovative series of interactive infographics and data visualizations explaining blockchain protocol mechanics, simplifying complex concepts.",
  },
  {
    date: "2014 - 2021",
    title: "Independent Practice",
    content:
      "The early years saw significant optimism with programs like ELIZA (the first chatbot) and SHRDLU (a natural language understanding system). However, by the early 1970s, funding dried up as researchers faced the limitations of early computing power and the complexity of human intelligence.",
  },
   {
    date: "2017 - 2020",
    title: "Instructor, 92Y ",
    content:
      "• Developed and taught design fundamentals curriculum for students of all ages</br >• Created hands-on learning experiences connecting design theory to practical application",
  },
  {
    date: "2011 - 2013",
    title: "Instructor, Rutgers University",
    content:
      "• Developed the Screen Print 101 undergraduate course and instructed 20 students each semester</br > • Evaluated and graded student work and provided guidance on projects.",
  },
];

const Experience = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <SectionHeader
          category="We live by"
          title="Experience"
          icon={Heart}
          description="I believe in principles that guide my growth and inspire my community."
          className="border-none"
        />
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="foreground-muted absolute left-2 top-4"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
              <h4 className="rounded-xl py-2 text-xl font-semibold tracking-tight xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-5 border-none shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <div
                    className="prose dark:prose-invert text-foreground"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
