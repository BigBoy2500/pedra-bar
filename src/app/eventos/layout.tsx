import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos - Pedra Bar',
  description: 'Descubra os eventos especiais, festas e celebrações no Pedra Bar. Um espaço único para momentos inesquecíveis em Forjães.',
}

export default function EventosLayout({
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