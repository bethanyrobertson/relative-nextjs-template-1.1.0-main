'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronRight } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import ChatModal from '@/components/chat/ChatModal';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu2';
// Ensure that '@/components/ui/navigation-menu2.tsx' exists and exports:
// NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger.
// If you encounter "Module not found" or similar errors, create or update '@/components/ui/navigation-menu2.tsx' to export these components.
import { cn } from '@/lib/utils';

const ITEMS = [
  {
    label: 'Case Studies',
    dropdownItems: [
      {
        title: 'elevenist',
        href: '/casestudyelevenist',
        description:
          'Mainline is built on the habits that make the best product teams successful',
      },
      {
        title: 'Direct Express',
        href: '/casestudydirectexpress',
        description: 'Mainline your resource allocation and execution',
      },
      {
        title: 'Design System API',
        href: '/casestudydesignsystem',
        description: 'Mainline your resource allocation and execution',
      },
      {
        title: 'Cloud',
        href: '/casestudycloud',
        description: 'Mainline your resource allocation and execution',
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Home', href: '/home' },
  { label: 'Contact', href: '/contact' },
  // To link to a static HTML file in the public folder, use the path relative to /public, e.g. "/index.html"
  { label: 'Work', href: '/index.html' },
];

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChatModalOpen(true);
  };

  return (
    <>
      <header className="bg-white fixed top-5 left-1/2 z-[60] w-[min(90%,700px)] -translate-x-1/2 rounded-full border backdrop-blur-md lg:top-12">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/broberlogo.png"
              alt="logo"
              width={94}
              height={18}
              className="dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList>
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label} className="">
                    <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-1.5">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] space-y-2 p-4">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                              >
                                <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                  <div className="text-sm leading-none font-medium">
                                    {item.title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label} className="">
                    <Link
                      href={link.href}
                      className={cn(
                        'relative bg-transparent px-1.5 text-sm font-medium',
                        pathname === link.href && 'text-muted-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Button 
              variant="default" 
              onClick={handleContactClick}
              className="max-lg:hidden rounded-full"
            >
              <span className="relative z-10">Contact</span>
            </Button>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="text-muted-foreground relative flex size-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/*  Mobile Menu Navigation */}
        <div
          className={cn(
            'bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden',
            isMenuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-4 opacity-0',
          )}
        >
          <nav className="divide-border flex flex-1 flex-col divide-y">
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label,
                      )
                    }
                    className="text-primary flex w-full items-center justify-between text-base font-medium rounded-lg hover:bg-accent/50 px-3 py-2 transition-colors"
                  >
                    {link.label}
                    <ChevronRight
                      className={cn(
                        'size-4 transition-transform duration-200',
                        openDropdown === link.label ? 'rotate-90' : '',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openDropdown === link.label
                        ? 'mt-4 max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group hover:bg-accent block rounded-md p-2 transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <div className="transition-transform duration-200 group-hover:translate-x-1">
                            <div className="text-primary font-medium">
                              {item.title}
                            </div>

                            <p className="text-muted-foreground mt-1 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.label === 'Contact' ? (
                <button
                  key={link.label}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsChatModalOpen(true);
                  }}
                  className="text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0 w-full text-left rounded-lg hover:bg-accent/50 px-3 py-2 transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0 rounded-lg hover:bg-accent/50 px-3 py-2 transition-colors',
                    pathname === link.href && 'text-muted-foreground',
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </header>

      {/* Chat Modal */}
      <ChatModal 
        isOpen={isChatModalOpen} 
        onClose={() => setIsChatModalOpen(false)} 
      />
    </>
  );
};

export default Navbar2;