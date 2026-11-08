# Pedra Bar

Website do Pedra Bar (café/bar em Forjães). Domínio: www.pedrabar.pt. Deploy na Vercel (plano free).

## Stack

- Next.js 14.1.0 (App Router), React 18, TypeScript, Tailwind CSS 3, framer-motion
- Node 18.17+; Windows + PowerShell/Git Bash no desenvolvimento
- Idioma do site e do admin: português europeu (pt-PT)

## Comandos

```bash
npm run dev     # servidor local (porta 3000, ou 3001 se ocupada)
npm run build   # build de produção
npm run lint
```

## Estrutura

- `src/app/` — páginas (`page.tsx` home, `menu`, `eventos`, `contacto`, `admin`) e `api/`
- `src/components/` — Header, Footer, MobileMenu, etc.
- `src/data/menuData.ts` — menu original; agora só serve de **dados iniciais/fallback**
- `src/lib/` — auth, storage (Redis/ficheiro local), tipos
- `src/middleware.ts` — protege `/admin` e `/api/admin`

## Conteúdo dinâmico (painel /admin)

Os donos editam menu e eventos em `/admin` (login com password simples). Não há CMS externo.

- Páginas públicas `/menu` e `/eventos` são Server Components que leem do storage e passam os dados a `MenuClient` / `EventosClient` (`'use client'`).
- Storage: Upstash Redis (chaves `menu` e `eventos`). Imagens de eventos: Vercel Blob (a store tem de ser **pública**).
- Sem Redis configurado: em dev as imagens vão sempre para `public/uploads/` (nunca para o Blob) e os dados para `.data/*.json`; em produção cai no fallback (`menuData.ts` + eventos por defeito), só leitura.
- Depois de cada escrita, as rotas `/api/admin/*` chamam `revalidatePath` para `/menu` e `/eventos`.

### Variáveis de ambiente

| Variável | Para quê |
| --- | --- |
| `ADMIN_PASSWORD` | password do painel |
| `SESSION_SECRET` | segredo para assinar o cookie de sessão (string longa aleatória) |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` (ou `UPSTASH_REDIS_REST_*`) | Upstash Redis (a Vercel preenche ao ligar a integração) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob (idem; só usado em produção) |

Em local: `vercel env pull .env.local`, ou criar `.env.local` à mão (está no `.gitignore`). Nunca commitar segredos nem colá-los em chats.

## Convenções

- Visual do menu: estilo vintage (papel, moldura tracejada, fonte "Pirata One", verde `#1f3228`, bege `#f4e6c5`). Manter ao mexer em `MenuClient`.
- Cores do site em `tailwind.config.ts` (`primary`, `secondary`).
- Componentes interativos têm de ter `'use client'`; páginas que fazem fetch ficam Server Components com `export const revalidate = 60`.
- `www.pedrabar.pt` é o domínio canónico (redirects em `next.config.js`).
- Commits: mensagens curtas em inglês ou português, sem segredos.

## Notas técnicas

- `next.config.js` externaliza `@vercel/blob`/`undici` (`serverComponentsExternalPackages`) porque o webpack do Next 14.1 não empacota a sintaxe do undici.
- Instalar pacotes com `--legacy-peer-deps` se houver conflitos de peer deps.
