import AdminDashboard from './AdminDashboard'
import { canWrite, getEventos, getMenu } from '@/lib/store'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const [menu, eventos] = await Promise.all([getMenu(), getEventos()])
  return <AdminDashboard initialMenu={menu} initialEventos={eventos} canWrite={canWrite()} />
}
