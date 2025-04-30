import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SelectiviCAT Premium | Recursos Avançats per la Selectivitat 2024',
  description: '✓ Accedeix a recursos premium per la Selectivitat: tests il·limitats, exàmens resolts exclusius, correccions personalitzades i més. Millora la teva preparació per les PAU amb contingut d\'alta qualitat.',
  openGraph: {
    title: 'SelectiviCAT Premium | Recursos Avançats per la Selectivitat',
    description: 'Accedeix a recursos premium per la Selectivitat: tests il·limitats, exàmens resolts exclusius i més.',
    url: 'https://selectivicat.cat/premium',
    siteName: 'SelectiviCAT',
    images: [
      {
        url: 'https://selectivicat.cat/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SelectiviCAT Premium - Recursos Avançats per la Selectivitat'
      }
    ],
    locale: 'ca',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SelectiviCAT Premium | Recursos Avançats per la Selectivitat',
    description: 'Accedeix a recursos premium per la Selectivitat: tests il·limitats, exàmens resolts exclusius i més.',
    images: ['https://selectivicat.cat/twitter-image.jpg']
  },
  keywords: [
    'selectivitat premium',
    'pau recursos avançats',
    'tests selectivitat',
    'examens resolts selectivitat',
    'correccions personalitzades',
    'preparacio selectivitat',
    'recursos premium pau',
    'selectivitat catalunya',
    'proves acces universitat',
    'recursos estudi selectivitat'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
} 