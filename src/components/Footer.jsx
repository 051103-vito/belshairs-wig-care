import { Sparkles } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brown-900 text-brown-300 py-16 border-t border-brown-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 text-2xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-brown-500 to-tan text-white text-xs">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span>BELSHAIRS</span>
            </button>
            <p className="type-body text-brown-400">Confidence in every strand. Premium wigs and expert care guides for every texture.</p>
          </div>

          <div>
            <h4 className="type-label text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 type-body text-brown-400">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-amber-200 transition-colors text-left">Home</button></li>
              <li><button onClick={() => handleNavClick('catalog')} className="hover:text-amber-200 transition-colors text-left">Collection</button></li>
              <li><button onClick={() => handleNavClick('care-guides')} className="hover:text-amber-200 transition-colors text-left">Care Guides</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-amber-200 transition-colors text-left">About Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="type-label text-white mb-4">Care Topics</h4>
            <ul className="space-y-2.5 type-body text-brown-400">
              <li><button onClick={() => handleNavClick('care-guides')} className="hover:text-amber-200 transition-colors text-left">Washing Techniques</button></li>
              <li><button onClick={() => handleNavClick('care-guides')} className="hover:text-amber-200 transition-colors text-left">Styling Guidelines</button></li>
              <li><button onClick={() => handleNavClick('care-guides')} className="hover:text-amber-200 transition-colors text-left">Storage Solutions</button></li>
              <li><button onClick={() => handleNavClick('care-guides')} className="hover:text-amber-200 transition-colors text-left">Longevity Secrets</button></li>
            </ul>
          </div>

          <div>
            <h4 className="type-label text-white mb-4">Follow BELSHAIRS</h4>
            <p className="type-body text-brown-400 mb-4">Join our community for weekly wig tips & new arrivals.</p>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/belshairs.ng_" target="_blank" rel="noreferrer" className="type-label text-brown-400 hover:text-amber-200 transition-colors">Instagram @belshairs.ng_</a>
              <a href="https://wa.me/message/XSBZYHAHZ5F2H1" target="_blank" rel="noreferrer" className="type-label text-brown-400 hover:text-amber-200 transition-colors">WhatsApp Support</a>
              <a href="https://www.snapchat.com/add/belshairs" target="_blank" rel="noreferrer" className="type-label text-brown-400 hover:text-amber-200 transition-colors">Snapchat @belshairs</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brown-800/80 text-center type-caption text-brown-500">
          &copy; {new Date().getFullYear()} BELSHAIRS. All rights reserved. Confidence in every strand.
        </div>
      </div>
    </footer>
  )
}
