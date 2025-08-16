import { DashedLine } from "../dashed-line";

const stats = [
  {
    value: '>200 ms',
    label: 'response time',
  },
  {
    value: '100%',
    label: 'data retention',
  },
  {
    value: '98%',
    label: 'uptime',
  },
];

export function TldrDesignSystem() {
  return (
    <section className="">
      <div className="container flex max-w-6xl bg-[#d7e0e1] p-10  rounded-xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="font-mono text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            tl;dr
          </h1>

          <p className="text-foreground mt-5 font-mono text-xl font-bold md:text-2xl lg:text-3xl">
          Design Token API: Bridging Design and Development
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-sm text-balance md:block lg:mt-12">
          Design teams were losing hours manually synchronizing design tokens between design tools and code, leading to visual inconsistencies and frustrated developers. I built an API-first design token manager that serves as a single source of truth, enabling teams to sync tokens in minutes instead of hours while maintaining proper governance through role-based access control.
            <br />
            <br />
            The system eliminates the copy-paste workflows that cause design drift by providing both a user-friendly web interface and programmatic API access. Admins can manage tokens at scale, developers can integrate directly into build pipelines, and contributors can safely browse and reference tokens without breaking production systems. The result: faster workflows, fewer inconsistencies, and design systems that actually scale with organizational growth.
            <br />
            <br />
            Key Impact: Transformed design token management from manual documentation maintenance into automated infrastructure that bridges design decisions and development implementation.
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