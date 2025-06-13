import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        100: '28rem',
      },
      colors: {
        primary: '#2C3A2F',
        secondary: '#E67E22',
        accent: '#27AE60',
        logo: '#2C3A2F', // cor do logo (pode alterar aqui)
        headerText: '#2C3A2F',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}
export default config 