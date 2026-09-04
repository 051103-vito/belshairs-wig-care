import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Sparkles, ArrowRight } from 'lucide-react'
import heroImg from '../assets/images/hero.jpg'

export default function Hero() {
  const badgeAnim = useScrollAnimation({ speed: 0.2, zoomIntensity: 0.05, moveDistance: 20 })
  const titleAnim = useScrollAnimation({ speed: 0.35, zoomIntensity: 0.08, moveDistance: 35 })
  const subAnim = useScrollAnimation({ speed: 0.45, zoomIntensity: 0.06, moveDistance: 45 })
  const ctaAnim = useScrollAnimation({ speed: 0.55, zoomIntensity: 0.08, moveDistance: 50 })
  const statsAnim = useScrollAnimation({ speed: 0.65, zoomIntensity: 0.05, moveDistance: 55 })
  const imgAnim = useScrollAnimation({ speed: 0.3, zoomIntensity: 0.04, moveDistance: 25 })

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-cream via-sand/60 to-cream">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brown-100/35 via-tan/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-orb" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-gradient-to-tl from-beige/45 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-breath" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left: Text */}
        <div className="flex flex-col items-start text-left">
          <div ref={badgeAnim.ref} style={badgeAnim.style} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/85 border border-brown-200/50 shadow-soft mb-8 transition-all duration-300 hover:border-brown-300 hover:scale-105">
            <Sparkles className="w-3.5 h-3.5 text-brown-400 animate-float" />
            <span className="type-label text-brown-700">Handcrafted Luxury & Wig Care</span>
          </div>

          <h1 ref={titleAnim.ref} style={titleAnim.style} className="type-hero text-brown-900 mb-6">
            BELSHAIRS<br />
            <span className="bg-gradient-to-r from-brown-600 via-brown-400 to-brown-300 bg-clip-text text-transparent font-extrabold italic animate-glow">
              Wig Care Guide
            </span>
          </h1>

          <p ref={subAnim.ref} style={subAnim.style} className="type-subheading text-brown-600/90 max-w-xl mb-10">
            Everything you need to keep your BELSHAIRS unit beautiful, soft and long-lasting. Find your exact texture and get a personalised care guide.
          </p>

          <div ref={ctaAnim.ref} style={ctaAnim.style} className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <a href="#care-guides" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full type-btn text-white bg-gradient-to-r from-brown-600 via-brown-500 to-brown-400 shadow-soft-lg hover:shadow-soft-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
              <span>Find Your Care Guide</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#catalog" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full type-btn text-brown-800 bg-white/80 border border-sand hover:bg-white hover:border-brown-200 shadow-soft hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div ref={statsAnim.ref} style={statsAnim.style} className="grid grid-cols-3 gap-8 pt-10 border-t border-sand/80 w-full max-w-lg">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brown-800" style={{ letterSpacing: '-0.02em' }}>100%</span>
              <span className="type-label text-brown-500 mt-1">Virgin Human Hair</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brown-800" style={{ letterSpacing: '-0.02em' }}>500+</span>
              <span className="type-label text-brown-500 mt-1">Satisfied Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brown-800" style={{ letterSpacing: '-0.02em' }}>5.0 ★</span>
              <span className="type-label text-brown-500 mt-1">Top-Rated Care</span>
            </div>
          </div>
        </div>

        {/* Right: Hero image */}
        <div ref={imgAnim.ref} style={imgAnim.style} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-brown-200/40 to-tan/30 rounded-3xl blur-2xl scale-105 animate-pulse-orb" />
            <img
              src={heroImg}
              alt="BELSHAIRS premium wig"
              className="relative rounded-3xl shadow-soft-xl object-cover w-full h-[520px]"
              style={{ objectPosition: 'center top' }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-soft-lg border border-sand animate-float">
              <p className="type-label text-brown-500">Confidence in every strand</p>
              <p className="type-card-title text-brown-900 mt-0.5">BELSHAIRS ✦</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
