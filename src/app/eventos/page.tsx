import EventosClient from './EventosClient'
import { getEventos } from '@/lib/store'

export const revalidate = 60

export default async function EventosPage() {
  const events = await getEventos()
  return <EventosClient events={events} />
}
