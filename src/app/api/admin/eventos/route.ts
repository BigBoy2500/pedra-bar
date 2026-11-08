import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { canWrite, setEventos } from '@/lib/store'
import { sanitizeEventos } from '@/lib/validate'

export async function PUT(req: Request) {
  if (!canWrite()) {
    return NextResponse.json({ error: 'Armazenamento não configurado na Vercel (Upstash Redis).' }, { status: 503 })
  }
  try {
    const eventos = sanitizeEventos(await req.json())
    await setEventos(eventos)
    revalidatePath('/eventos')
    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erro ao guardar.'
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}
