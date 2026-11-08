import { menuData } from '@/data/menuData'
import type { Evento, MenuCategory } from './types'

// Converte o menuData.ts original (dados iniciais / fallback) para o formato do painel.
export const defaultMenu: MenuCategory[] = Object.entries(menuData).map(([key, cat]) => {
  if (cat.subcategories) {
    return {
      key,
      label: cat.label,
      type: 'subcategories' as const,
      subcategories: Object.entries(cat.subcategories).map(([subKey, sub]) => ({
        key: subKey,
        label: sub.label,
        items: sub.items.map((i) => ({ name: i.name, price: i.price, ...(i.addedDate ? { addedDate: i.addedDate } : {}) })),
      })),
    }
  }
  return {
    key,
    label: cat.label,
    type: 'items' as const,
    items: (cat.items ?? []).map((i) => ({
      name: i.name,
      ...(i.description ? { description: i.description } : {}),
      price: i.price,
      ...(i.addedDate ? { addedDate: i.addedDate } : {}),
    })),
  }
})

export const defaultEventos: Evento[] = [
  {
    id: 'paulo-alves-2025-08-15',
    title: 'Paulo Alves ao vivo no Pedra Bar',
    image: '/images/concerto-paulo-alves.jpg',
    date: '2025-08-15',
    time: 'A partir das 21:00',
    description:
      'Sexta-feira é noite de música ao vivo no Pedra Bar! Vem sentir a energia e o talento de Paulo Alves, num concerto especial em Forjães – Esposende.',
  },
  {
    id: 'the-project-2025-08-02',
    title: 'The Project no Pedra Bar',
    image: '/images/concerto-the-project.jpeg',
    date: '2025-08-02',
    time: 'A partir das 21:00',
    description:
      'Uma noite especial com música ao vivo e ambiente único. Venha desfrutar de um concerto memorável no Pedra Bar.',
  },
  {
    id: 'abertura-2025-06-06',
    title: 'Abertura Pedra Bar',
    image: '/images/abertura-pedra-bar.jpg',
    date: '2025-06-06',
    time: 'A partir das 18:00',
    description:
      'Em Forjães, entre pedra e tradição, nasce um novo espaço para petiscar, brindar e conviver. O sabor da pedra está à tua espera. Vem fazer parte desta casa.',
  },
]
