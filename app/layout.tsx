import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Keros M. | Robotics & Embedded Systems Engineer',
  description:
    'Engineering portfolio showcasing robotics, embedded systems, automation, industrial training, research publication, and engineering projects.',
  keywords: [
    'Keros M',
    'Robotics Engineer',
    'Embedded Systems',
    'ESP32',
    'PLC',
    'Automation',
    'Water Strider Robot',
    'Maze Solver Robot',
    'Engineering Portfolio',
  ],
  authors: [{ name: 'Keros M.' }],
  creator: 'Keros M.',
  metadataBase: new URL('https://keros-portfolio.netlify.app'),
  openGraph: {
    title: 'Keros M. | Engineering Portfolio',
    description:
      'Robotics, automation, embedded systems, research publication, and engineering projects.',
    url: 'https://keros-portfolio.netlify.app',
    siteName: 'Keros M. Portfolio',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0F1115] text-[#F5F3EE] antialiased`}>
        <Navbar />

        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}