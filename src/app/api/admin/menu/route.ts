import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { canWrite, setMenu } from '@/lib/store'
import { sanitizeMenu } from '@/lib/validate'

export async function PUT(req: Request) {
  if (!canWrite()) {
    return NextResponse.json({ error: 'Armazenamento não configurado na Vercel (Upstash Redis).' }, { status: 503 })
  }
  try {
    const menu = sanitizeMenu(await req.json())
    await setMenu(menu)
    revalidatePath('/menu')
    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erro ao guardar.'
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}
