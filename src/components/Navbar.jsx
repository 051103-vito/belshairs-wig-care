import { useState, useEffect } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigate to home page then scroll to section
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      // Go to home first, then scroll after page loads
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    setMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinkClass = "type-label text-brown-700 hover:text-brown-900 transition-colors duration-200 relative group py-1 cursor-pointer"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream/85 backdrop-blur-md shadow-soft border-b border-sand/70 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={handleLogoClick} className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]">
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brown-500 via-brown-400 to-tan text-white text-sm shadow-sm transition-transform duration-500 group-hover:rotate-12">
            <Sparkles className="w-4 h-4 text-amber-100" />
          </span>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-brown-900 via-brown-700 to-brown-500 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
            BELSHAIRS
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          <button onClick={() => handleNavClick('home')} className={navLinkClass}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
          <button onClick={() => handleNavClick('catalog')} className={navLinkClass}>
            Collection
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
          <button onClick={() => handleNavClick('care-guides')} className={navLinkClass}>
            Care Guides
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
          <button onClick={() => handleNavClick('about')} className={navLinkClass}>
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brown-400 to-brown-200 transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="relative inline-flex items-center justify-center px-6 py-2.5 type-btn text-white transition-all duration-300 bg-gradient-to-r from-brown-600 via-brown-500 to-brown-400 rounded-full shadow-soft hover:shadow-md hover:scale-[1.03] active:scale-[0.98] border border-brown-300/30"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile toggle */}
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
          <button onClick={() => handleNavClick('home')} className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2 text-left">Home</button>
          <button onClick={() => handleNavClick('catalog')} className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2 text-left">Collection</button>
          <button onClick={() => handleNavClick('care-guides')} className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2 text-left">Care Guides</button>
          <button onClick={() => handleNavClick('about')} className="type-label text-brown-800 hover:text-brown-500 transition-colors py-2 text-left">About</button>
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center justify-center w-full py-3.5 type-btn text-white bg-gradient-to-r from-brown-600 to-brown-400 rounded-xl shadow-soft"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  )
}
