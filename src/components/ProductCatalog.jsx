import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import boneImg from '../assets/images/bone-straight.jpeg'
import bodyImg from '../assets/images/body-wave.jpeg'
import curlyImg from '../assets/images/curly.jpeg'
import pixieImg from '../assets/images/pixie-cut.jpeg'
import bouncyHumanImg from '../assets/images/bouncy-wavy-human.jpeg'
import straightBlendImg from '../assets/images/straight-blend.jpeg'
import premiumWavyImg from '../assets/images/premium-wavy-blend.jpeg'

const products = [
  { id: 1, name: 'Bone Straight', description: 'Mirror-smooth, glass-like finish. Sleek and elegant for any occasion.', category: 'human', badge: 'Bestseller', img: boneImg, slug: 'bone-straight-human' },
  { id: 2, name: 'Body Wave', description: 'Effortless S-waves with natural movement and beautiful volume.', category: 'human', badge: 'Popular', img: bodyImg, slug: 'body-wave-human' },
  { id: 3, name: 'Curly', description: 'Springy, defined coils that celebrate natural texture beautifully.', category: 'human', badge: null, img: curlyImg, slug: 'curly-human' },
  { id: 4, name: 'Pixie Cut', description: 'Short, sculpted and effortlessly chic. Low maintenance, high impact.', category: 'human', badge: null, img: pixieImg, slug: 'pixie-human' },
  { id: 5, name: 'Bouncy / Wavy Human', description: 'Voluminous layered waves with a natural, full-bodied bounce.', category: 'human', badge: 'New', img: bouncyHumanImg, slug: 'bouncy-wavy-human' },
  { id: 6, name: 'Straight Blend', description: 'Smooth straight blend — sleek and easy with minimal heat needed.', category: 'blend', badge: null, img: straightBlendImg, slug: 'straight-blend' },
  { id: 7, name: 'Premium Wavy Blend', description: 'Voluminous wavy blend with movement and natural bounce.', category: 'blend', badge: 'Premium', img: premiumWavyImg, slug: 'bouncy-blend' },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Human Hair', value: 'human' },
  { label: 'Blend Hair', value: 'blend' },
]

function ProductCard({ product }) {
  const cardAnim = useScrollAnimation({ speed: 0.5, zoomIntensity: 0.06, moveDistance: 40 })

  return (
    <Link
      to={`/care/${product.slug}`}
      ref={cardAnim.ref}
      style={cardAnim.style}
      className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer border border-transparent hover:border-brown-200/40"
    >
      <div className="relative h-56 overflow-hidden">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full type-label text-white bg-brown-900/90 backdrop-blur-sm animate-float shadow-sm">
            {product.badge}
          </div>
        )}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="type-card-title text-brown-900 mb-2 group-hover:text-brown-600 transition-colors">{product.name}</h3>
        <p className="type-body text-brown-600/85 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full type-label text-brown-700 bg-sand/60">
            {product.category === 'human' ? 'Human Hair' : 'Blend Hair'}
          </span>
          <span className="flex items-center gap-1 type-label text-brown-400 group-hover:text-brown-600 transition-colors">
            Care Guide <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState('all')
  const headerAnim = useScrollAnimation({ speed: 0.4, zoomIntensity: 0.06, moveDistance: 30 })
  const filtersAnim = useScrollAnimation({ speed: 0.5, zoomIntensity: 0.05, moveDistance: 35 })

  const filtered = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter)

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-gradient-to-b from-cream to-sand/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div ref={headerAnim.ref} style={headerAnim.style} className="text-center mb-12">
          <p className="type-label text-brown-400 mb-3">Our Collection</p>
          <h2 className="type-section-heading text-brown-900 mb-4">
            Which Belshairs Unit Did You Purchase?
          </h2>
          <p className="type-body text-brown-600/80 max-w-2xl mx-auto">
            Tap your exact unit below to go straight to its personalised care guide.
          </p>
        </div>

        <div ref={filtersAnim.ref} style={filtersAnim.style} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full type-label transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-gradient-to-r from-brown-600 to-brown-400 text-white shadow-md scale-105'
                  : 'bg-white/70 text-brown-600 border border-sand hover:border-brown-300 hover:bg-white hover:scale-105'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
