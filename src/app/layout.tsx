import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

import Footer from '@/modules/Footer';
import Header from '@/modules/Header';
import { AuthProvider } from '@/shared/config/AuthProvider';
import { ModalsProvider } from '@/shared/config/ModalProvider';
import Providers from '@/shared/config/Providers';
import { cn } from '@/shared/lib/utils';
import './globals.css';

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
            <AuthProvider>
              <ModalsProvider>
                <Header />
                <main>{children}</main>
                <Footer />
              </ModalsProvider>
            </AuthProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
