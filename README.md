# Pedra Bar - Website

Website moderno para o café/restaurante Pedra Bar, construído com Next.js e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Requisitos

- Node.js 18.17 ou superior
- npm 9.0 ou superior

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/pedra-bar.git
cd pedra-bar
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
pedra-bar/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Página inicial
│   │   ├── menu/
│   │   │   └── page.tsx    # Página do menu
│   │   └── layout.tsx      # Layout principal
│   └── components/
│       ├── Header.tsx      # Componente do cabeçalho
│       ├── Footer.tsx      # Componente do rodapé
│       └── MenuCard.tsx    # Componente de card do menu
├── public/
│   └── images/            # Imagens do site
└── package.json
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Licença

MIT 