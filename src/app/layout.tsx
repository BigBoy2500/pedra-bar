import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { UnifrakturCook } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CanonicalTag from '../components/CanonicalTag'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const unifraktur = UnifrakturCook({ subsets: ['latin'], weight: '700', variable: '--font-unifraktur' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pedrabar.pt'),
  title: 'Pedra Bar - Café & Bar',
  description: 'Um espaço acolhedor para desfrutar de ótimos cafés e refeições em Forjães.',
  keywords: [
    'café', 'restaurante', 'pedra bar', 'forjães', 'barcelos',
    'petiscos', 'bebidas', 'refeições', 'esplanada', 'comida caseira'
  ],
  authors: [{ name: 'Pedra Bar' }],
  robots: 'index, follow',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ]
  },
  openGraph: {
    type: 'website',
    url: 'https://www.pedrabar.pt',
    title: 'Pedra Bar - Café & Bar',
    description: 'Café e gastronomia em Forjães com ambiente rústico e acolhedor.',
    siteName: 'Pedra Bar',
    locale: 'pt_PT',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fachada do Pedra Bar',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedra Bar - Café & Bar',
    description: 'Café e gastronomia em Forjães com ambiente rústico e acolhedor.',
    images: ['/og-image.png'],
  },
  applicationName: 'Pedra Bar',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pedra Bar',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1a3321',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <CanonicalTag />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Pedra Bar",
            "image": "https://www.pedrabar.pt/og-image.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Marcelino Queiroz 708",
              "addressLocality": "Forjães",
              "postalCode": "4740-444",
              "addressCountry": "PT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.615905121026,
              "longitude": -8.749220455260089
            },
            "telephone": "+351933834749",
            "url": "https://www.pedrabar.pt",
            "servesCuisine": ["Portuguese", "Café", "Bar"],
            "priceRange": "€",
            "openingHours": [
              "Mo-Sa 10:30-02:00",
              "Su 10:30-02:00"
            ],
            "sameAs": [
                "https://www.instagram.com/pedrabar_"
              ]
          })
        }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${unifraktur.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 