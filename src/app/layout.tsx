import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import './globals.css';
import theme from '@/shared/config/theme';
import Header from '@/modules/Header';
import Footer from '@/modules/Footer';

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${montserrat.variable}`}>
        <MantineProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
