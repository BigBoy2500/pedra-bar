'use client';

import Link from 'next/link'
import { useState } from 'react'
import SocialIcons from './SocialIcons'
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm shadow-sm z-50">
      <div className="container py-0">
        <nav className="flex items-center justify-between h-24">
          <Link href="/" className="text-3xl md:text-5xl logo-font text-logo leading-none text-center block p-0 m-0">
            Pedra<br />Bar
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-4 md:gap-8">
            <Link
              href="/"
              className={`relative text-headerText hover:text-primary transition-colors font-medium px-1 py-0.5 no-underline after:content-[''] after:block after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 ${
                pathname === '/' ? 'text-primary after:w-full' : ''
              }`}
            >
              Início
            </Link>
            <Link
              href="/menu"
              className={`relative text-headerText hover:text-primary transition-colors font-medium px-1 py-0.5 no-underline after:content-[''] after:block after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 ${
                pathname === '/menu' ? 'text-primary after:w-full' : ''
              }`}
            >
              Menu
            </Link>
            <div className="flex items-center space-x-4">
              <SocialIcons className="text-headerText" />
            </div>
          </div>

          {/* Botão menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-headerText hover:text-primary transition-colors relative w-10 h-10 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Menu mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
} 