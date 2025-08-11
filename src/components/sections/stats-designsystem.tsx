const StatsDesignSystem = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="text-center text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
          Outcomes
        </h1>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">

            <p className="text-2xl leading-tight tracking-tight md:text-3xl lg:text-5xl"> {'>'} 200ms</p>
            <p className="text-2xl leading-tight tracking-tight md:text-3xl lg:text-5xl">
              Response Times
            </p>
            <p className="text-medium">
              Optimized MongoDB queries and  <br />efficient caching
            </p>
          </div>
          <div className="text-center">

            <p className="text-2xl leading-tight tracking-tight md:text-3xl lg:text-5xl">100%</p>
            <p className="text-2xl leading-tight tracking-tight md:text-3xl lg:text-5xl">
              Data Retention
            </p>
            <p className="text-medium">
              Robust validation and error <br /> handling protect token integrity
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl leading-tight tracking-tight md:text-3xl lg:text-5xl">98%</p>
            <p className="text-2xl leading-tight tracking-tight md:text-3xl lg:text-5xl">
              Uptime
            </p>
            <p className="text-medium">
              Reliable Railway deployment with <br /> automatic health monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StatsDesignSystem };
