import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Play } from 'lucide-react'

const VIDEOS = [
  {
    id: '7418886370497711365',
    title: 'How to Straighten a Blend Wig',
    desc: 'Step-by-step guide to getting a sleek, smooth finish on your blend wig safely.',
    category: 'Styling',
  },
  {
    id: '7670612971923442964',
    title: 'How to Curl Your Wig',
    desc: 'Create beautiful defined curls on your human hair unit without damage.',
    category: 'Styling',
  },
  {
    id: '7666941370984140053',
    title: 'The Heatless Method',
    desc: 'Achieve gorgeous waves and curls without any heat — perfect for blend wigs.',
    category: 'No-Heat',
  },
  {
    id: '7615348741523950866',
    title: 'How to Style a Pixie Cut (Part 1)',
    desc: 'Shape and define your pixie cut unit for a polished, effortless look.',
    category: 'Pixie',
  },
  {
    id: '7603280492124720391',
    title: 'How to Style a Pixie Cut (Part 2)',
    desc: 'More pixie styling techniques — edges, volume and finishing touches.',
    category: 'Pixie',
  },
]

const CATEGORY_COLORS = {
  'Styling': 'bg-purple-100 text-purple-800',
  'No-Heat': 'bg-green-100 text-green-800',
  'Pixie': 'bg-amber-100 text-amber-800',
}

function VideoCard({ video, index }) {
  const anim = useScrollAnimation({ speed: 0.5, zoomIntensity: 0.06, moveDistance: 40 })

  return (
    <div
      ref={anim.ref}
      style={anim.style}
      className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-brown-200/40"
    >
      {/* TikTok embed */}
      <div className="relative w-full bg-black" style={{ paddingBottom: '177.77%' }}>
        <iframe
          src={`https://www.tiktok.com/embed/v2/${video.id}`}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="encrypted-media"
          title={video.title}
          style={{ border: 'none' }}
        />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-700 type-label ${CATEGORY_COLORS[video.category]}`}>
            {video.category}
          </span>
          <span className="flex items-center gap-1 type-label text-brown-400">
            <Play className="w-3 h-3" /> TikTok
          </span>
        </div>
        <h3 className="type-card-title text-brown-900 mb-2">{video.title}</h3>
        <p className="type-body text-brown-600/80 text-sm">{video.desc}</p>
      </div>
    </div>
  )
}

export default function VideoTutorials() {
  const headerAnim = useScrollAnimation({ speed: 0.4, zoomIntensity: 0.06, moveDistance: 30 })

  return (
    <section id="tutorials" className="py-20 lg:py-28 bg-gradient-to-b from-cream to-sand/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div ref={headerAnim.ref} style={headerAnim.style} className="text-center mb-14">
          <p className="type-label text-brown-400 mb-3">Watch & Learn</p>
          <h2 className="type-section-heading text-brown-900 mb-4">
            Video{' '}
            <span className="bg-gradient-to-r from-brown-600 to-brown-400 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h2>
          <p className="type-body text-brown-600/80 max-w-2xl mx-auto">
            Watch how to style, curl, straighten and care for your BELSHAIRS unit — step by step.
          </p>
        </div>

        {/* Video grid — 3 col on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="type-body text-brown-600/80 mb-4">Want more tips? Follow BELSHAIRS on TikTok and Instagram.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/belshairs.ng_"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full type-btn text-white bg-gradient-to-r from-brown-600 to-brown-400 hover:scale-105 transition-transform shadow-soft"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/message/XSBZYHAHZ5F2H1"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full type-btn text-brown-800 bg-white border border-sand hover:border-brown-300 hover:scale-105 transition-transform shadow-soft"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
