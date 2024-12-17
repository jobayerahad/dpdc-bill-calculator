import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { Work_Sans, Lora } from 'next/font/google'

import '@mantine/core/styles.css'
import './globals.css'

import { theme } from '@config/theme'
import Structure from './structure'

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bill-calc.jobayerahad.com'),
  title: 'Electric Bill Calculator',
  description: 'A user-friendly application to calculate your electricity bills',
  openGraph: {
    title: 'Electric Bill Calculator',
    description: 'A user-friendly application to calculate your electricity bills'
  }
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={`${work_sans.variable} ${lora.variable}`}>
    <head>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>

    <body suppressHydrationWarning>
      <MantineProvider theme={theme} defaultColorScheme="auto" classNamesPrefix="sq">


        <Structure>{children}</Structure>
      </MantineProvider>
    </body>
  </html>
)

export default RootLayout
