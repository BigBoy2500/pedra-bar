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
  description: 'Um espaço acolhedor para desfrutar de ótimos cafés e refeições.',
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
    <html lang="pt">
      <body className={`${inter.variable} ${playfair.variable} ${unifraktur.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 