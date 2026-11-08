export interface MenuItem {
  name: string
  description?: string
  price: number
  addedDate?: string // YYYY-MM-DD; mostra "NOVIDADE" durante 14 dias
}

export interface Subcategory {
  key: string
  label: string
  items: MenuItem[]
}

export interface MenuCategory {
  key: string
  label: string
  type: 'items' | 'subcategories'
  items?: MenuItem[]
  subcategories?: Subcategory[]
}

export interface Evento {
  id: string
  title: string
  date: string // YYYY-MM-DD
  time: string
  description: string
  image: string | null
}

export const isItemNew = (addedDate?: string): boolean => {
  if (!addedDate) return false
  const added = new Date(addedDate)
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  return added > twoWeeksAgo
}
