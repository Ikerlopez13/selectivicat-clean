import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavbarMain from '@/components/NavbarMain'
import Providers from '@/components/Providers'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import LaunchDiscountBanner from '@/components/LaunchDiscountBanner'
import PremiumPopup from '@/components/PremiumPopup'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SelectiviCat - La teva plataforma per a la selectivitat',
  description: 'SelectiviCat és la teva plataforma per a la selectivitat. Aquí trobaràs tot el que necessites per a la selectivitat.',
  icons: {
    icon: '/images/logo/icon.png',
    shortcut: '/images/logo/icon.png',
    apple: '/images/logo/icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="ca">
      <head>
        <meta httpEquiv="Content-Language" content="ca" />
        <meta name="google" content="notranslate" />
        {!isHomePage && (
          <>
            <meta name="google-adsense-account" content="ca-pub-4829722017444918"/>
            <Script
              id="adsbygoogle-init"
              strategy="afterInteractive"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4829722017444918"
              crossOrigin="anonymous"
            />
          </>
        )}
        <link rel="icon" type="image/png" href="/images/logo/icon.png" />
        <link rel="apple-touch-icon" href="/images/logo/icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <NavbarMain />
          <LaunchDiscountBanner />
          <PremiumPopup />
          <main className="min-h-screen">
            {children}
          </main>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
} 