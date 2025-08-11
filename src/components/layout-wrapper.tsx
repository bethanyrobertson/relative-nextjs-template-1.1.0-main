"use client"

import { usePathname } from 'next/navigation';
import Navbar2 from '@/components/navbar2';
import Footer from '@/components/sections/footer';
import { ScrollProgressBar } from './sections/scroll-progress';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide footer on home page
  const hideFooter = pathname === '/home' || pathname.includes('./home');

  return (
    <>
      <Navbar2 />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}