export default function MarqueeTicker() {
  const items = [
    '100% VIRGIN HUMAN HAIR',
    'EXPERT WIG RESTORATION',
    'HANDCRAFTED LUXURY',
    'CUSTOM FITTING & STYLING',
    'WORLDWIDE DELIVERY',
    'EDITORIAL BEAUTY STANDARDS',
    'ARTISANAL MAINTENANCE'
  ]

  return (
    <div className="relative w-full overflow-hidden py-5 bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900 text-brown-100 border-y border-brown-700/60 select-none shadow-soft">
      {/* Subtle edge fade overlays */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-brown-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-brown-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* Repeating groups to create an infinite, seamless loop */}
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-8 shrink-0 pr-8">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="type-label tracking-[0.2em] text-xs font-semibold text-sand/90 hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <span className="text-amber-300/80 text-sm animate-spin-slow">❊</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
