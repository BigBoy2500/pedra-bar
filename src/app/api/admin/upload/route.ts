import { NextResponse } from 'next/server'
import { saveImage } from '@/lib/store'

const MAX_BYTES = 4 * 1024 * 1024 // limite de body das funções Vercel é ~4.5MB
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp']

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const file = form.get('file')
    if (!(file instanceof File)) return NextResponse.json({ error: 'Nenhum ficheiro.' }, { status: 400 })
    if (!ALLOWED.includes(file.type)) {
      return NextResponse.json({ error: 'Só são aceites imagens JPG, PNG ou WEBP.' }, { status: 400 })
    }
    if (file.size > MAX_BYTES) return NextResponse.json({ error: 'Imagem demasiado grande (máx. 4MB).' }, { status: 400 })
    const url = await saveImage(file)
    return NextResponse.json({ url })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erro no upload.'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
