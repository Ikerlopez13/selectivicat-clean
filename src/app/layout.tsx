import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PopupCR7 from '@/components/PopupCR7'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SelectiviCat - La millor manera de preparar la Selectivitat',
  description: 'Prepara\'t per la Selectivitat amb els millors recursos. Examens resolts, notes de tall, calculadora de notes i molt més.',
  icons: {
    icon: '/images/logo/icon.png',
    shortcut: '/images/logo/icon.png',
    apple: '/images/logo/icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <head>
        <link rel="icon" type="image/png" href="/images/logo/icon.png" />
        <link rel="apple-touch-icon" href="/images/logo/icon.png" />
      </head>
      <body className={inter.className}>
        <PopupCR7 />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 