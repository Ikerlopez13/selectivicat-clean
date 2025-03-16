import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SelectiviCAT - Exàmens de Selectivitat de Catalunya',
  description: 'Repositori d\'exàmens de selectivitat de Catalunya amb solucions i recursos per a estudiants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" data-theme="light">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 