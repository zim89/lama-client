import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import React from 'react'
import Footer from '@/modules/Footer'
import Header from '@/modules/Header'
import { SITE_NAME } from '@/shared/constants/seo.constants'
import { ModalsProvider } from '@/shared/config/ModalProvider'
import { cn } from '@/shared/lib/utils'
import './globals.css'
import Providers from './providers'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Amazing online store for kids'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('h-full font-sans antialiased', montserrat.className)}
      >
        <Providers>
          <div className='grid min-h-screen grid-rows-[_auto_1fr_auto]'>
            <ModalsProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </ModalsProvider>
          </div>
        </Providers>
      </body>
    </html>
  )
}
