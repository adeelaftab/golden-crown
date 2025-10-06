import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';

// Load fonts and expose as CSS variables
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL('https://goldencrowndb.netlify.app/'),
  title: 'Golden Crown Design and Build',
  description: '',
  openGraph: {
    title: 'Golden Crown Design and Build',
    description: '',
    url: 'https://goldencrowndb.netlify.app/',
    siteName: 'Golden Crown Design and Build',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golden Crown Design and Build',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Crown Design and Build',
    description: '',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
