import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SelectiviCat - La web de la Selectividad en Cataluña',
  description: 'Prepárate para la Selectividad en Cataluña. Encuentra notas de corte, exámenes resueltos y practica con tests personalizados.',
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
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/images/logo/icon.png" />
        <link rel="apple-touch-icon" href="/images/logo/icon.png" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 