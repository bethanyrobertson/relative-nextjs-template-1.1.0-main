import localFont from 'next/font/local';
import type { Metadata } from 'next';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import LayoutWrapper from '@/components/layout-wrapper';

// Geist Variable Font for sans-serif
const geistSans = localFont({
  src: './fonts/Geist[wght].woff2', // Note: capital G
  variable: '--font-sans',
  weight: '100 900',
  display: 'swap',
});

// Geist Mono for code/monospace  
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  weight: '100 900',
  display: 'swap',
});

// ITC Garamond for serif
const itcGaramond = localFont({
  src: './fonts/ITCGaramondStd-BkCond.woff',
  variable: '--font-serif',
  weight: '400',
  display: 'swap',
});

const GeistMonoVF = localFont({
  src: './fonts/geist[wght].woff2',
  variable: '--font-sans',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bethany Robertson- Designer & Developer',
    template: '%s | Relative',
  },
  description:
    'Portfolio of Bethany Robertson, a designer and developer specializing in creating modern, user-friendly web applications using Next.js, React, and TailwindCSS.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Template',
    'Shadcn/UI',
    'Web Development',
  ],
  authors: [{ name: 'Bethany Robertson' }],
  creator: 'Bethany Robertson',
  publisher: 'Bethany Robertson',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Bethany Robertson- Designer & Developer',
    description:
      'Portfolio of Bethany Robertson, a designer and developer specializing in creating modern, user-friendly web applications using Next.js, React, and TailwindCSS.',
    siteName: 'Bethany Robertson',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bethany Robertson- Designer & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bethany Robertson- Designer & Developer',
    description:
      'Portfolio of Bethany Robertson, a designer and developer specializing in creating modern, user-friendly web applications using Next.js, React, and TailwindCSS.',
    images: ['/og-image.jpg'],
    creator: '@BethanyRobertson',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${itcGaramond.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}