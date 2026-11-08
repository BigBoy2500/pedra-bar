import MenuClient from './MenuClient'
import { getMenu } from '@/lib/store'

export const revalidate = 60

export default async function MenuPage() {
  const categories = await getMenu()
  return <MenuClient categories={categories} />
}
