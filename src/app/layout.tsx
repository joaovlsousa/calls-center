import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ToasterContext } from '@/contexts/ToasterContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calls Center',
  description: 'Sistema para gerenciamento de chamados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterContext />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
