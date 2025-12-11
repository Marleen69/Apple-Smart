'use client'

import { useState, useEffect } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Mac', href: '/macbook' },
    { name: 'iPad', href: '/ipad' },
    { name: 'iPhone', href: '/iphone' },
    { name: 'Watch', href: '/watch' },
    { name: 'AirPods', href: '/airpods' },
    { name: 'Аксессуары', href: '#accessories' },
    { name: 'Поддержка', href: '#support' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 shadow-sm'
          : 'backdrop-blur-sm bg-white/50'
      }`}
    >
      <nav className="max-w-[980px] mx-auto px-4 h-[44px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            className="w-[18px] h-[44px] fill-[#1d1d1f]"
            viewBox="0 0 18 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.977 9.76c-.01 2.88-.99 5.15-2.94 6.8-1.97 1.67-4.6 2.51-7.9 2.51-.01 0-.02 0-.03.01v8.93h-3.61V9.78c0-1.8.5-3.2 1.5-4.2 1-1 2.36-1.5 4.08-1.5 1.72 0 3.08.5 4.08 1.5 1 1 1.5 2.4 1.5 4.2v.01zm-6.84-2.23c-.85 0-1.53.28-2.04.84-.51.56-.77 1.32-.77 2.28v1.24c1.48-.01 2.8-.2 3.96-.57 1.16-.37 2.08-.93 2.76-1.68.68-.75 1.02-1.68 1.02-2.79 0-.96-.26-1.72-.77-2.28-.51-.56-1.19-.84-2.04-.84h-.12z" />
          </svg>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] text-[#1d1d1f] hover:text-[#1d1d1f]/80 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <button
            aria-label="Поиск"
            className="text-[#1d1d1f] hover:opacity-70 transition-opacity duration-200"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Корзина"
            className="text-[#1d1d1f] hover:opacity-70 transition-opacity duration-200"
          >
            <ShoppingBag size={18} />
          </button>
          <button
            aria-label="Меню"
            className="md:hidden text-[#1d1d1f] hover:opacity-70 transition-opacity duration-200"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#e5e7eb] shadow-sm">
          <div className="max-w-[980px] mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-[15px] text-[#1d1d1f] border-b border-[#f1f1f3] last:border-none hover:text-[#0071e3] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 flex items-center gap-3 text-sm text-[#4b5563]">
              <div className="w-8 h-8 rounded-full bg-[#0071e3] text-white flex items-center justify-center text-xs font-semibold">
                24/7
              </div>
              Поддержка и доставка по всей России
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}

