import { DashedLine } from "../dashed-line";

const stats = [
  {
    value: '548+',
    label: 'screens designed',
  },
  {
    value: '665',
    label: 'unique components',
  },
  {
    value: '66 pages',
    label: 'product and brand guidelines',
  },
];

export function TldrDex() {
  return (
    <section className="">
      <div className="container flex max-w-6xl bg-[#d7e0e1] p-10  rounded-xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            tl;dr
          </h1>

          <p className="text-foreground mt-5 font-mono text-xl font-bold md:text-2xl lg:text-3xl">
          Direct Express® Digital Transformation
          </p>

          <div className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-sm text-balance md:block lg:mt-12">
          <h2><strong>The Problem:</strong></h2>
            <ul>
                <li>Despite 92% user satisfaction, Direct Express® cardholders (70% unbanked federal benefit recipients) were calling customer service 61% of the time monthly for basic tasks</li>
                <li>Users immediately withdrawing 57% of their funds due to digital experience gaps</li>
            </ul>

            <h2><strong>The Research:</strong></h2>
            <ul>
                <li>Survey of 1,202 users + in-depth interviews revealed the satisfaction paradox: users had low expectations, not good experiences</li>
                <li>Key insight: only 31% used the mobile app despite 87% app satisfaction</li>
                <li>Users desperately wanted "Cash App-like" functionality</li>
            </ul>

            <h2><strong>The Solution:</strong></h2>
            <ul>
                <li>Designed comprehensive mobile app/website with bill pay (20,000+ billers)</li>
                <li>Enhanced ATM locator (119K+ fee-free ATMs)</li>
                <li>Multi-user support (Rep Payees managing others' funds)</li>
                <li>Transform customer service dependency into digital self-sufficiency</li>
            </ul>
        </div>
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