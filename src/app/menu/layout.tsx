import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - Pedra Bar',
  description: 'Veja o menu completo do Pedra Bar: cafés, petiscos, pratos tradicionais e bebidas em Forjães.'
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 