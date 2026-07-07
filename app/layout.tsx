import type { Metadata } from 'next';
import { Inter, Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import Providers from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'EstatePro | Premium Real Estate SaaS Platform',
  description: 'Search premium properties, connect with trusted agents, save favourite homes and explore modern real estate listings with EstatePro.',
  keywords: ['real estate platform','property listing website','homes for sale','apartments for rent','real estate SaaS','property search platform','agent dashboard UI','premium property website']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jakarta.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
