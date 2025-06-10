import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { UnifrakturCook } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const unifraktur = UnifrakturCook({ subsets: ['latin'], weight: '700', variable: '--font-unifraktur' })

export const metadata: Metadata = {
  title: 'Pedra Bar - Café & Restaurante',
  description: 'Um espaço acolhedor para desfrutar de ótimos cafés e refeições em Forjães.',
  keywords: [
    'café', 'restaurante', 'pedra bar', 'forjães', 'barcelos',
    'petiscos', 'bebidas', 'refeições', 'esplanada', 'comida caseira'
  ],
  authors: [{ name: 'Pedra Bar' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', url: '/favicon-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
    ]
  },
  openGraph: {
    type: 'website',
    url: 'https://www.pedrabar.pt',
    title: 'Pedra Bar - Café & Restaurante',
    description: 'Café e gastronomia em Forjães com ambiente rústico e acolhedor.',
    siteName: 'Pedra Bar',
    locale: 'pt_PT',
    images: [
      {
        url: '/og-image.png', // coloca esta imagem em /public
        width: 1200,
        height: 630,
        alt: 'Fachada do Pedra Bar',
      }
    ]
  },
  themeColor: '#1a3321',
  applicationName: 'Pedra Bar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${playfair.variable} ${unifraktur.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 