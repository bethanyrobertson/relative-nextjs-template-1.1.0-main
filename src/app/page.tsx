import Accelerate from '@/components/sections/accelerate-mucinex';
import Adaptive from '@/components/sections/adaptive';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero-mucinex';
import Optimize from '@/components/sections/optimize-mucinex';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Adaptive />
      <Optimize />
      <Accelerate />
    </>
  );
}
