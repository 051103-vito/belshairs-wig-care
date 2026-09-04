import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Droplets, Wand2, Package, Clock, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import boneImg from '../assets/images/bone-straight.jpeg'
import bodyImg from '../assets/images/body-wave.jpeg'
import curlyImg from '../assets/images/curly.jpeg'
import pixieImg from '../assets/images/pixie-cut.jpeg'
import bouncyHumanImg from '../assets/images/bouncy-wavy-human.jpeg'
import straightBlendImg from '../assets/images/straight-blend.jpeg'
import premiumWavyImg from '../assets/images/premium-wavy-blend.jpeg'

const guides = [
  { id: 1, icon: Droplets, title: 'Washing Your Wig', iconBg: 'from-blue-100 to-cyan-50',
    steps: ['Detangle gently with a wide-tooth comb before washing.', 'Use cool water for blend wigs, lukewarm for human hair.', 'Apply a sulfate-free shampoo and squeeze gently — never scrub.', 'Rinse until water runs clear.', 'Apply conditioner from mid-length to tips, then rinse again.', 'Pat dry with a microfibre towel and air dry on a wig stand.'],
    tip: 'Human hair wigs: wash every 7–10 wears. Blend wigs every 10–15 wears.' },
  { id: 2, icon: Wand2, title: 'Styling Tips', iconBg: 'from-purple-100 to-pink-50',
    steps: ['Always use heat protectant on human hair before styling.', 'Keep flat-irons at 150–180°C for human hair.', 'Never use heat on blend wigs — it melts the fibres permanently.', 'Use a wide-tooth comb or fingers for curly and wavy units.', 'Style on a wig head or stand for best results.', 'Finish with a light serum or shine spray for glass-like finish.'],
    tip: 'Never brush curly or wavy wigs when dry — always detangle wet with conditioner.' },
  { id: 3, icon: Package, title: 'Storage & Maintenance', iconBg: 'from-amber-100 to-orange-50',
    steps: ['Store on a wig stand or mannequin to maintain shape.', 'Keep in a cool, dry place away from direct sunlight.', 'Use a silk or satin bag for travel or long-term storage.', 'Wrap in a silk scarf overnight to prevent friction and frizz.', 'Detangle after every wear before storing.', 'Refresh with a light mist or wig spray between washes.'],
    tip: 'Flip the wig inside out before placing in a storage bag to protect the outer fibres.' },
  { id: 4, icon: Clock, title: 'Making It Last', iconBg: 'from-green-100 to-emerald-50',
    steps: ['Avoid sleeping in your wig — friction causes tangling and shedding.', 'Deep condition human hair units every 2 weeks.', 'Trim split ends every few months to keep it looking fresh.', 'Use a leave-in conditioner spray for daily softness.', 'Handle the lace front delicately — never pull or tug.', 'Keep blend wigs away from steam, oven heat and direct sunlight.'],
    tip: 'A well-maintained human hair wig lasts 1–3 years. Blend wigs typically last 6–12 months.' },
]

const TEXTURES = [
  { label: 'Bone Straight', slug: 'bone-straight-human', img: boneImg },
  { label: 'Body Wave', slug: 'body-wave-human', img: bodyImg },
  { label: 'Curly', slug: 'curly-human', img: curlyImg },
  { label: 'Pixie Cut', slug: 'pixie-human', img: pixieImg },
  { label: 'Bouncy / Wavy', slug: 'bouncy-wavy-human', img: bouncyHumanImg },
  { label: 'Straight Blend', slug: 'straight-blend', img: straightBlendImg },
  { label: 'Premium Wavy Blend', slug: 'bouncy-blend', img: premiumWavyImg },
]

function GuideCard({ guide }) {
  const cardAnim = useScrollAnimation({ speed: 0.5, zoomIntensity: 0.06, moveDistance: 40 })
  const IconComponent = guide.icon
  return (
    <div ref={cardAnim.ref} style={cardAnim.style} className="group bg-white/80 backdrop-blur-sm border border-sand/80 rounded-3xl p-8 hover:border-brown-300 hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${guide.iconBg} mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float`}>
        <IconComponent className="w-7 h-7 text-brown-700" />
      </div>
      <h3 className="type-card-title text-brown-900 mb-6 group-hover:text-brown-600 transition-colors">{guide.title}</h3>
      <ol className="space-y-3.5 mb-6">
        {guide.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3 type-body text-brown-700/90">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brown-500 to-brown-300 text-white text-xs font-bold mt-0.5">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="bg-gradient-to-r from-amber-50 via-yellow-50/70 to-orange-50/50 border-l-4 border-brown-400 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-brown-600 flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="text-xs text-brown-800 leading-relaxed">
            <strong className="font-semibold">Pro Tip:</strong> {guide.tip}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareGuides() {
  const headerAnim = useScrollAnimation({ speed: 0.4, zoomIntensity: 0.06, moveDistance: 30 })
  const textureHeaderAnim = useScrollAnimation({ speed: 0.4, zoomIntensity: 0.06, moveDistance: 30 })

  return (
    <section id="care-guides" className="py-20 lg:py-28 bg-gradient-to-b from-sand/40 to-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Texture finder */}
        <div ref={textureHeaderAnim.ref} style={textureHeaderAnim.style} className="text-center mb-12">
          <p className="type-label text-brown-400 mb-3">Find Your Type</p>
          <h2 className="type-section-heading text-brown-900 mb-4">
            Which BELSHAIRS unit{' '}
            <span className="bg-gradient-to-r from-brown-600 to-brown-400 bg-clip-text text-transparent">did you purchase?</span>
          </h2>
          <p className="type-body text-brown-600/80 max-w-2xl mx-auto">Tap your exact texture for a personalised care guide.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-20">
          {TEXTURES.map(t => (
            <Link key={t.slug} to={`/care/${t.slug}`} className="group flex flex-col items-center gap-2 text-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-brown-300 transition-all duration-300 shadow-soft group-hover:shadow-soft-lg group-hover:-translate-y-1">
                <img src={t.img} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="type-caption text-brown-700 group-hover:text-brown-900 transition-colors font-semibold">{t.label}</span>
            </Link>
          ))}
        </div>

        {/* Care guides */}
        <div ref={headerAnim.ref} style={headerAnim.style} className="text-center mb-16">
          <p className="type-label text-brown-400 mb-3">Expert Tips</p>
          <h2 className="type-section-heading text-brown-900 mb-4">
            Wig Care{' '}
            <span className="bg-gradient-to-r from-brown-600 to-brown-400 bg-clip-text text-transparent">Guides</span>
          </h2>
          <p className="type-body text-brown-600/80 max-w-2xl mx-auto">Keep your wigs looking fresh, fabulous, and long-lasting with our expert care tips.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map(g => <GuideCard key={g.id} guide={g} />)}
        </div>
      </div>
    </section>
  )
}
