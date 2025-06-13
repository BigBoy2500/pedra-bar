import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - Pedra Bar',
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