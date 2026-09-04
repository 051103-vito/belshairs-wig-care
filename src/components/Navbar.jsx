import { useState, useEffect } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md shadow-soft border-b border-sand/70 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo - Montserrat Bold */}
        <a
          href="#"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brown-500 via-brown-400 to-tan text-white text-sm shadow-sm transition-transform duration-500 group-hover:rotate-12">
            <Sparkles className="w-4 h-4 text-amber-100" />
          </span>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-brown-900 via-brown-700 to-brown-500 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
            BELSHAIRS
          </span>
        </a>

        {/* Desktop Nav Links - Montserrat Medium */}
        <div className="hidden md:flex items-center gap-9">
          <a
            href="#home"
            className="type-label text-brown-700 hover:text-brown-900 transition-colors duration-200 relative group py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a
            href="#catalog"
            className="type-label text-brown-700 hover:text-brown-900 transition-colors duration-200 relative group py-1"
          >
            Collection
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a
            href="#care-guides"
            className="type-label text-brown-700 hover:text-brown-900 transition-colors duration-200 relative group py-1"
          >
            Care Guides
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
          <a
            href="#about"
            className="type-label text-brown-700 hover:text-brown-900 transition-colors duration-200 relative group py-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
        </div>

        {/* CTA Button - Montserrat SemiBold */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-2.5 type-btn text-white transition-all duration-300 bg-gradient-to-r from-brown-600 via-brown-500 to-brown-400 rounded-full shadow-soft hover:shadow-md hover:scale-[1.03] active:scale-[0.98] border border-brown-300/30"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 rounded-xl text-brown-800 hover:bg-sand/60 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-cream/98 backdrop-blur-xl border-b border-sand shadow-soft-lg px-6 py-8 flex flex-col gap-6">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2"
          >
            Home
          </a>
          <a
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2"
          >
            Collection
          </a>
          <a
            href="#care-guides"
            onClick={() => setMobileMenuOpen(false)}
            className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2"
          >
            Care Guides
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center w-full py-3.5 type-btn text-white bg-gradient-to-r from-brown-600 to-brown-400 rounded-xl shadow-soft"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  )
}
