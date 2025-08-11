import Image from 'next/image';
import Link from 'next/link';

import { Linkedin, Github } from 'lucide-react';

const sections = [
  {
    title: 'Work',
    links: [
      { name: 'Case Studies', href: '#' },
      { name: 'Index', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'Contact', href: '/contact' },
      { name: 'About', href: '#' },
      { name: 'Resume', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-0 py-20">
      <div className="container flex justify-between gap-8 py-4 max-md:flex-col lg:py-8">
        <div className="mb-8 flex-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/brober-32.png"
              alt="logo"
              width={32}
              height={32}
              className="invert"
            />
            <span className="text-2xl text-purple-100 leading-0 font-serif font-semibold">Bethany Robertson</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-between gap-8 max-sm:flex-col">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-purple-100 font-mono text-sm tracking-[-0.28px]">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-6 text-purple-100 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:text-primary">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-purple-100 text-sm tracking-[-0.28px]">
              Contact
            </h3>

            <div className="text-purple-100 mt-6 flex gap-3 lg:mt-8">
              <Link href="https://github.com/bethanyrobertson" aria-label="Github">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/bethany-robertson/" aria-label="Linkedin">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
