import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import ProductCatalog from './components/ProductCatalog'
import CareGuides from './components/CareGuides'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CareGuide from './pages/CareGuide.jsx'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-brown-900">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <ProductCatalog />
      <CareGuides />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

function CareGuidePage() {
  return (
    <div className="min-h-screen bg-cream text-brown-900">
      <Navbar />
      <CareGuide />
      <Footer />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/care/:slug" element={<CareGuidePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
