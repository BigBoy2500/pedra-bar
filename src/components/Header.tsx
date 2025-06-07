import Link from 'next/link'
import SocialIcons from './SocialIcons'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container py-0">
        <nav className="flex items-center justify-between min-h-0">
          <Link href="/" className="text-2xl md:text-4xl logo-font text-logo leading-none text-center block p-0 m-0">
            Pedra<br />Bar
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <Link
              href="/"
              className="relative text-headerText hover:text-primary transition-colors font-medium px-1 py-0.5 no-underline after:content-[''] after:block after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0"
            >
              Início
            </Link>
            <Link
              href="/menu"
              className="relative text-headerText hover:text-primary transition-colors font-medium px-1 py-0.5 no-underline after:content-[''] after:block after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0"
            >
              Menu
            </Link>
            <div className="flex items-center space-x-4">
              <SocialIcons iconColor="text-headerText" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
} 