import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Award, Heart, Handshake } from 'lucide-react'

export default function About() {
  const visualAnim = useScrollAnimation({ speed: 0.4, zoomIntensity: 0.07, moveDistance: 35 })
  const contentAnim = useScrollAnimation({ speed: 0.5, zoomIntensity: 0.06, moveDistance: 40 })
  const value1Anim = useScrollAnimation({ speed: 0.55, zoomIntensity: 0.05, moveDistance: 45 })
  const value2Anim = useScrollAnimation({ speed: 0.6, zoomIntensity: 0.05, moveDistance: 48 })
  const value3Anim = useScrollAnimation({ speed: 0.65, zoomIntensity: 0.05, moveDistance: 50 })

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-brown-800 to-brown-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brown-600/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse-orb" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brown-500/15 to-transparent rounded-full blur-3xl -z-10 animate-breath" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div ref={visualAnim.ref} style={visualAnim.style} className="relative h-80 lg:h-96 flex items-center justify-center">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 animate-float">
              {/* Morphing Blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-brown-400 via-tan to-brown-300 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-2xl animate-breath" />

              {/* Decorative sparkles */}
              <span className="absolute top-8 -left-6 text-3xl text-amber-200 animate-float" style={{ animationDelay: '0s' }}>✦</span>
              <span className="absolute bottom-16 -right-4 text-2xl text-amber-100 animate-float" style={{ animationDelay: '1.5s' }}>✦</span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white/80 animate-glow" style={{ animationDelay: '2.5s' }}>✦</span>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div ref={contentAnim.ref} style={contentAnim.style}>
              <p className="type-label text-amber-300 mb-3">
                Our Story
              </p>
              <h2 className="type-section-heading mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent animate-glow">
                  BELSHAIRS
                </span>
              </h2>

              <div className="space-y-4 type-body text-brown-100/90 mb-10">
                <p>
                  BELSHAIRS was born from a passion for self-expression and beauty. We believe
                  that everyone deserves to feel confident, bold, and beautiful — and the right
                  wig can make all the difference.
                </p>
                <p>
                  Our curated collection features premium wigs crafted from the finest materials,
                  designed for comfort, durability, and stunning looks. Whether you're rocking a
                  sleek bob or flowing curls, we're here to help you find your perfect match.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-5">
              <div ref={value1Anim.ref} style={value1Anim.style} className="flex items-start gap-4 group cursor-pointer p-2 rounded-2xl transition-all duration-300 hover:bg-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-100 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="w-6 h-6 text-brown-800" />
                </div>
                <div>
                  <h4 className="type-card-title text-white mb-1 group-hover:text-amber-200 transition-colors">Quality First</h4>
                  <p className="type-body text-brown-200/80">
                    Only premium-grade fibers and 100% virgin human hair.
                  </p>
                </div>
              </div>

              <div ref={value2Anim.ref} style={value2Anim.style} className="flex items-start gap-4 group cursor-pointer p-2 rounded-2xl transition-all duration-300 hover:bg-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-300 to-rose-200 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="w-6 h-6 text-brown-800" />
                </div>
                <div>
                  <h4 className="type-card-title text-white mb-1 group-hover:text-pink-200 transition-colors">For Everyone</h4>
                  <p className="type-body text-brown-200/80">
                    Inclusive styles for every face shape, skin tone, and vibe.
                  </p>
                </div>
              </div>

              <div ref={value3Anim.ref} style={value3Anim.style} className="flex items-start gap-4 group cursor-pointer p-2 rounded-2xl transition-all duration-300 hover:bg-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-200 to-cyan-100 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Handshake className="w-6 h-6 text-brown-800" />
                </div>
                <div>
                  <h4 className="type-card-title text-white mb-1 group-hover:text-cyan-200 transition-colors">Expert Support</h4>
                  <p className="type-body text-brown-200/80">
                    Personalized advice to help you choose, style, and care for your wig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
