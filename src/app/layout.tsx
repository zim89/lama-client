import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import Header from '@/modules/Header';
import Footer from '@/modules/Footer';
import Providers from '@/shared/config/Providers';
import { cn } from '@/shared/lib/utils';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lama - Kids shop',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('h-full font-sans antialiased', montserrat.className)}>
        <Providers>
          <div className='grid min-h-screen grid-rows-[_auto_1fr_auto]'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
