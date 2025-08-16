import { DashedLine } from "../dashed-line";

const stats = [
  {
    value: '2.1 seconds',
    label: 'average response time',
  },
  {
    value: '85%',
    label: 'user intent recognition',
  },
  {
    value: '40%',
    label: 'reduction in time to find info',
  },
  {
    value: '75%',
    label: 'visitors engaged with AI agent',
  },
];

export function TldrBot() {
  return (
    <section className="">
      <div className="container flex max-w-6xl bg-[#d7e0e1] p-10  rounded-xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            tl;dr
          </h1>

          <p className="text-foreground mt-5 font-mono text-xl font-bold md:text-2xl lg:text-3xl">
          Building and Training a Smart Portfolio Navigator
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-sm text-balance md:block lg:mt-12">
          Traditional portfolios make visitors dig through pages to find what they need, so I trained an AI agent to have actual conversations about my work instead. The AI adapts its responses based on who's asking—recruiters get quick skill confirmations, hiring managers get detailed process walkthroughs, and fellow designers get learning insights and honest challenges I faced.
            <br />
            <br />
            By structuring my portfolio content properly and using OpenAI's Assistant API, I created an experience where people can just ask questions- or use the prompts- and get personalized, relevant answers with links to the right projects. The technical implementation delivered strong results: 78% conversation completion rate, 2.1 second average response times, 85% user intent recognition accuracy, and 92% function calling success rate for portfolio navigation. More importantly, it solved a real problem for busy recruiters and hiring managers while creating a memorable branded experience to represent me and my work. 
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:ps-10 lg:pt-0`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="text-foreground mt-5 font-mono text-xl font-bold md:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}