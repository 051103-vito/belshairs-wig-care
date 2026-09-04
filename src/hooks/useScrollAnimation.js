import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options = {}) {
  const {
    speed = 0.5,
    threshold = 0.1,
    zoomIntensity = 0.08,
    moveDistance = 40
  } = options

  const ref = useRef(null)
  const [style, setStyle] = useState({
    opacity: 0,
    transform: `translateY(${moveDistance}px) scale(${1 - zoomIntensity})`
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = (elementCenter - viewportCenter) / (windowHeight / 2)

      // Only animate if the element is near the viewport
      if (rect.top < windowHeight * 1.2 && rect.bottom > -windowHeight * 0.2) {
        // Calculate progress (0 when at bottom of screen, 1 at center, 0 at top)
        const progress = Math.max(0, Math.min(1, 1 - Math.abs(distanceFromCenter) * 0.6))

        // Calculate dynamic zoom and translation
        const scale = (1 - zoomIntensity) + (progress * zoomIntensity * 1.5)
        const translateY = distanceFromCenter * moveDistance * speed
        const opacity = Math.max(0.2, Math.min(1, progress * 1.4))

        setStyle({
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, threshold, zoomIntensity, moveDistance])

  return { ref, style }
}
