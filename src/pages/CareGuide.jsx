import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Lightbulb } from 'lucide-react'
import boneImg from '../assets/images/bone-straight.jpeg'
import bodyImg from '../assets/images/body-wave.jpeg'
import curlyImg from '../assets/images/curly.jpeg'
import pixieImg from '../assets/images/pixie-cut.jpeg'
import bouncyHumanImg from '../assets/images/bouncy-wavy-human.jpeg'
import straightBlendImg from '../assets/images/straight-blend.jpeg'
import premiumWavyImg from '../assets/images/premium-wavy-blend.jpeg'

const GUIDES = {
  'bone-straight-human': {
    badge: 'Human Hair · Sleek & Straight', title: 'Bone Straight Human Hair',
    sub: 'A poker-straight, mirror-smooth unit that lives and dies by hydration and gentle handling.',
    img: boneImg,
    overview: 'Bone straight human hair is prized for its glassy, ultra-flat finish. The goal is simple: keep the cuticle smooth, sealed and lightly moisturised so the hair stays sleek and reflective.',
    dailyCare: ['Run a wide-tooth comb or soft paddle brush from ends up to roots.', 'Smooth a pea-sized amount of light oil or serum over the lengths and ends only.', 'Lay flat or hang straight on a stand so the weight keeps it sleek.', 'Wrap in a silk or satin scarf overnight to prevent friction and kinks.', 'Keep away from humidity, which lifts the cuticle and dulls the shine.'],
    washing: ['Detangle fully from ends to roots before any water touches the hair.', 'Rinse with lukewarm water, letting it flow straight down the lengths.', 'Massage a sulfate-free shampoo through the hair, never scrubbing the cap.', 'Rinse, then smooth a hydrating conditioner from mid-length to ends.', 'Leave for 2–3 minutes, then rinse with cool water to seal the cuticle.', 'Blot — never wring — with a microfibre towel and air dry straight on a stand.'],
    styling: ['Air dry whenever possible — the straight pattern needs little encouragement.', 'For a flat-iron touch-up, stay at 150–180°C and always use heat protectant.', 'Work in thin sections with one slow pass to avoid scorching the ends.', 'Finish with a single drop of serum on the ends for a glass-like shine.'],
    storage: ['Hang straight on a stand or lay flat in the original box.', 'Keep fully detangled before storing so it sets smooth.', 'Use a silk bag for long-term storage to lock out dust and frizz.', 'Store away from direct sun, radiators and damp.'],
    mistakes: ['Brushing from the roots down — drags tangles into the ends.', 'Over-oiling the roots, leaving the hair flat and greasy.', 'Flat-ironing on high heat daily until the ends turn dry and wiry.', 'Sleeping on cotton, which roughs up the cuticle overnight.'],
    routine: ['Daily: comb gently, seal ends with a drop of oil, wrap at night.', 'Weekly: cleanse with sulfate-free shampoo and a smoothing conditioner.', 'Fortnightly: apply a hydrating mask from mid-length to ends.', 'Monthly: trim any split ends and refresh shine with a light serum.'],
  },
  'body-wave-human': {
    badge: 'Human Hair · Waves', title: 'Body Wave Human Hair',
    sub: 'Effortless, flowing S-waves with natural movement. Never brush dry.',
    img: bodyImg,
    overview: 'Body wave human hair has a loose, flowing S-pattern. The wave is easily disturbed by brushing when dry, over-washing or heat.',
    dailyCare: ['Finger-comb or use a wide-tooth comb only.', 'Mist with a water and leave-in conditioner mix to refresh the wave.', 'Scrunch gently upward to encourage the S-pattern.', 'Wrap loosely in a silk scarf at night.'],
    washing: ['Detangle gently before washing.', 'Rinse with cool to lukewarm water from root to tip.', 'Apply a moisturising sulfate-free shampoo and squeeze through — never scrub.', 'Follow with a deep conditioner from mid-length to ends for 5 minutes.', 'Rinse with cool water and blot with a microfibre towel.', 'Air dry on a stand.'],
    styling: ['Let it air dry for the best natural wave pattern.', 'If blow-drying, use a diffuser on low heat.', 'Avoid flat-ironing — it permanently removes the wave pattern.', 'Finish with a curl-enhancing cream or light mousse scrunched in.'],
    storage: ['Hang on a wig stand or store loosely in a silk bag.', 'Never store compressed — it flattens the wave.', 'Keep away from direct sunlight and heat.'],
    mistakes: ['Brushing when dry — destroys the wave permanently.', 'Washing too frequently, stripping natural moisture.', 'Sleeping on cotton without a scarf.'],
    routine: ['Daily: mist, scrunch and reshape with fingers.', 'Weekly: gentle wash and deep condition.', 'Monthly: hydrating hair mask for 15 minutes before washing.'],
  },
  'curly-human': {
    badge: 'Human Hair · Curls', title: 'Curly Human Hair',
    sub: 'Springy, defined curls that thrive on water and leave-in. No brushing — ever.',
    img: curlyImg,
    overview: 'Curly human hair is the thirstiest texture in the range. The coil pattern makes it harder for natural oils to travel down the strand, so moisture has to come from products.',
    dailyCare: ['Spritz with water or a curl refresher spray to reactivate the curl.', 'Apply a small amount of curl cream or leave-in conditioner.', 'Scrunch from ends upward — never brush.', 'Sleep with a satin bonnet or on a satin pillowcase.'],
    washing: ['Detangle wet with a wide-tooth comb and conditioner in the hair.', 'Wash with a moisturising sulfate-free shampoo.', 'Deep condition every wash — 10–15 minutes minimum.', 'Rinse with cool water.', 'Diffuse on low or air dry completely before styling.'],
    styling: ['Never brush — use fingers only.', 'Apply leave-in conditioner and curl-defining cream while wet.', 'Diffuse on low if needed — avoid direct high heat.', 'Do not touch until fully dry to prevent frizz.'],
    storage: ['Store in a satin bag or pineapple the curls on top of the head when on a stand.', 'Keep the curl pattern intact by storing loosely.'],
    mistakes: ['Brushing when dry — destroys curl pattern permanently.', 'Skipping conditioner at any stage.', 'Drying with a regular cotton towel (causes frizz).'],
    routine: ['Daily: refresh with water and curl cream, scrunch.', 'Weekly: co-wash or shampoo and deep condition.', 'Monthly: protein treatment to maintain curl elasticity.'],
  },
  'pixie-human': {
    badge: 'Human Hair · Short Cut', title: 'Pixie Human Hair',
    sub: 'A short, sculpted cut that\'s all about shape. Light product keeps it crisp.',
    img: pixieImg,
    overview: 'A pixie human hair unit is low-maintenance in length but high-reward in shape. Over-styling with heavy products or heat will make it look flat fast.',
    dailyCare: ['Finger-style or use a soft-bristle brush to shape.', 'Apply a light styling cream or edge control sparingly.', 'Keep the neckline and edges clean.'],
    washing: ['Wash every 1–2 weeks or when product build-up occurs.', 'Use a gentle moisturising shampoo.', 'Apply conditioner focusing on the ends.', 'Rinse thoroughly — product residue flattens short hair quickly.', 'Pat dry gently with a towel.'],
    styling: ['Use minimal product — a light cream or pomade is enough.', 'Style while damp for the most hold.', 'Use a blow-dryer on low to shape if needed.'],
    storage: ['Store on a small wig head or in a box to maintain the shape.', 'A silk bag works for short-term storage.'],
    mistakes: ['Over-applying heavy products which weigh down short hair.', 'Not washing frequently enough, leading to product build-up.'],
    routine: ['Daily: light shape with fingers, minimal product.', 'Weekly to fortnightly: wash, condition and reshape.'],
  },
  'bouncy-wavy-human': {
    badge: 'Human Hair · Volume & Waves', title: 'Bouncy / Wavy Human Hair',
    sub: 'Voluminous, layered waves with lots of movement. Keep the bounce alive.',
    img: bouncyHumanImg,
    overview: 'Bouncy and wavy human hair units are built on volume and movement. Heat and brushing when dry are the main enemies.',
    dailyCare: ['Shake gently at the roots to lift volume.', 'Finger-comb through the mid-lengths only.', 'Mist lightly with water or a volumising spray if needed.', 'Sleep with hair loosely piled on top in a silk scarf.'],
    washing: ['Detangle before washing.', 'Use a volumising sulfate-free shampoo.', 'Apply conditioner from mid-length to ends only.', 'Rinse well and air dry for maximum volume.'],
    styling: ['Avoid flat-ironing — it kills the wave permanently.', 'Diffuse on low to enhance volume.', 'Scrunch with a light mousse for extra definition.'],
    storage: ['Hang on a stand to preserve the bounce.', 'Store loosely — never compressed.'],
    mistakes: ['Applying conditioner to the roots (flattens volume).', 'Over-brushing which separates and frizzes the wave.'],
    routine: ['Daily: shake, finger-comb, mist if needed.', 'Weekly: gentle wash and condition.', 'Fortnightly: deep condition from mid-length to ends.'],
  },
  'straight-blend': {
    badge: 'Blend Hair · Straight', title: 'Straight Blend Hair',
    sub: 'A smooth straight blend that looks sleek with almost no heat. No hot tools ever.',
    img: straightBlendImg,
    overview: 'Straight blend hair holds its straight pattern without heat. Unlike human hair, it cannot be heat-styled above low temperatures without melting.',
    dailyCare: ['Detangle gently from ends to roots with a wide-tooth comb.', 'Keep away from cooking steam, oven heat and direct sun.', 'Smooth a small amount of anti-frizz serum over the lengths.'],
    washing: ['Use cool or lukewarm water only.', 'Use a wig-specific or mild shampoo diluted in water.', 'Soak and gently squeeze — never scrub or wring.', 'Rinse thoroughly until water runs clear.', 'Pat with a towel and air dry on a stand.'],
    styling: ['No flat-ironing or blow-drying on heat above cool setting.', 'Style with fingers or a wide-tooth comb only.', 'Use lightweight anti-frizz or shine spray.'],
    storage: ['Store on a wig stand or in a box.', 'Keep in a cool, dry place away from direct sunlight.'],
    mistakes: ['Applying heat — melts and damages synthetic fibres permanently.', 'Washing in hot water — causes frizz and tangling.', 'Using heavy human-hair oils which leave residue.'],
    routine: ['Every few wears: detangle and smooth with serum.', 'Every 8–10 wears: wash gently in cool water.'],
  },
  'bouncy-blend': {
    badge: 'Blend Hair · Wavy & Bouncy', title: 'Bouncy / Wavy Blend Hair',
    sub: 'Voluminous waves with movement. The pattern bounces back after every cool-water wash.',
    img: premiumWavyImg,
    overview: 'The wave pattern is locked into the synthetic fibre — it bounces back after washing — but heat will permanently damage it.',
    dailyCare: ['Shake at the roots to lift volume.', 'Use fingers only to separate the waves.', 'Mist with cool water to refresh the wave pattern.', 'Sleep with hair loosely wrapped in a satin scarf.'],
    washing: ['Detangle gently before washing.', 'Use cool water and a mild or wig shampoo.', 'Squeeze product through — never scrub.', 'Rinse and squeeze out excess water.', 'Air dry on a stand — the wave pattern returns as it dries.'],
    styling: ['No heat — it will destroy the wave permanently.', 'Scrunch with a little mousse after washing for definition.', 'Shake gently to separate waves once dry.'],
    storage: ['Hang on a stand to keep the wave intact.', 'Never store compressed or folded.'],
    mistakes: ['Using any heat tool — destroys the wave permanently.', 'Brushing when dry — causes frizz and disrupts the pattern.'],
    routine: ['After each wear: shake out and finger-detangle.', 'Every 6–10 wears: cool-water wash and air dry.'],
  },
}

const FALLBACK = {
  badge: 'BELSHAIRS Care Guide', title: 'Care Guide',
  sub: 'Personalised care for your BELSHAIRS unit.', img: null,
  overview: 'Please select your specific wig type from the homepage for a tailored care guide.',
  dailyCare: [], washing: [], styling: [], storage: [], mistakes: [], routine: [],
}

function Section({ title, items, numbered }) {
  if (!items || items.length === 0) return null
  const Tag = numbered ? 'ol' : 'ul'
  return (
    <div className="mb-10">
      <h2 className="type-card-title text-brown-900 mb-4 pb-3 border-b border-sand">{title}</h2>
      <Tag className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 type-body text-brown-700/90">
            {numbered
              ? <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brown-500 to-brown-300 text-white text-xs font-bold mt-0.5">{i + 1}</span>
              : <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brown-400 mt-2.5" />
            }
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    </div>
  )
}

export default function CareGuide() {
  const { slug } = useParams()
  const guide = GUIDES[slug] || FALLBACK

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-b from-cream via-sand/40 to-cream pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Link to="/#care-guides" className="inline-flex items-center gap-2 type-label text-brown-500 hover:text-brown-800 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Care Guides
          </Link>
          <span className="inline-block px-4 py-1.5 rounded-full bg-sand border border-brown-200/50 type-label text-brown-600 mb-4">{guide.badge}</span>
          <h1 className="type-section-heading text-brown-900 mb-4">{guide.title}</h1>
          <p className="type-subheading text-brown-600/80 max-w-2xl">{guide.sub}</p>
          {guide.img && (
            <img src={guide.img} alt={guide.title} className="mt-10 w-full max-h-[420px] object-cover rounded-3xl shadow-soft-xl" />
          )}
        </div>
      </div>

      {/* Body */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {guide.overview && (
            <div className="mb-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50/50 border-l-4 border-brown-400 rounded-2xl">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-brown-600 flex-shrink-0 mt-0.5" />
                <p className="type-body text-brown-800">{guide.overview}</p>
              </div>
            </div>
          )}
          <Section title="Daily Care" items={guide.dailyCare} numbered={false} />
          <Section title="Washing Instructions" items={guide.washing} numbered={true} />
          <Section title="Styling Tips" items={guide.styling} numbered={false} />
          <Section title="Storage Guide" items={guide.storage} numbered={false} />
          <Section title="Common Mistakes to Avoid" items={guide.mistakes} numbered={false} />
          <Section title="Recommended BELSHAIRS Care Routine" items={guide.routine} numbered={true} />

          {/* Support CTA */}
          <div className="mt-16 p-8 bg-brown-900 rounded-3xl text-center">
            <p className="type-label text-amber-300 mb-2">Need Extra Help?</p>
            <h3 className="type-card-title text-white mb-4">Chat with BELSHAIRS</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/message/XSBZYHAHZ5F2H1" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full type-btn text-white bg-gradient-to-r from-brown-600 to-brown-400 hover:scale-105 transition-transform">WhatsApp Support</a>
              <a href="https://www.instagram.com/belshairs.ng_" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full type-btn text-brown-900 bg-white hover:scale-105 transition-transform">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
