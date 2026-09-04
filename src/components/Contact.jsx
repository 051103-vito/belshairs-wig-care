import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const headerAnim = useScrollAnimation({ speed: 0.4, zoomIntensity: 0.06, moveDistance: 30 })
  const formCardAnim = useScrollAnimation({ speed: 0.5, zoomIntensity: 0.05, moveDistance: 40 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-cream via-sand/50 to-cream">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div ref={headerAnim.ref} style={headerAnim.style} className="text-center mb-12">
          <p className="type-label text-brown-400 mb-3">
            Let's Connect
          </p>
          <h2 className="type-section-heading text-brown-900 mb-4">
            Ready to Find Your{' '}
            <span className="bg-gradient-to-r from-brown-600 to-brown-400 bg-clip-text text-transparent animate-glow">
              Look
            </span>
            ?
          </h2>
          <p className="type-body text-brown-600/80">
            Have questions about a wig, need styling advice, or want a custom order?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form Card */}
        <div
          ref={formCardAnim.ref}
          style={formCardAnim.style}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-soft-lg border border-sand/80 transition-all duration-500 hover:shadow-soft-xl"
        >
          {formSubmitted ? (
            <div className="text-center py-10 animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h3 className="type-card-title text-2xl text-brown-900 mb-2">Message Sent!</h3>
              <p className="type-body text-brown-600">
                Thank you for reaching out! We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block type-label text-brown-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Johnson"
                    className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream/30 text-brown-900 placeholder:text-brown-400/60 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:bg-white transition-all duration-300 text-sm focus:scale-[1.01]"
                  />
                </div>

                <div>
                  <label className="block type-label text-brown-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream/30 text-brown-900 placeholder:text-brown-400/60 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:bg-white transition-all duration-300 text-sm focus:scale-[1.01]"
                  />
                </div>
              </div>

              <div>
                <label className="block type-label text-brown-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're looking for or how we can help..."
                  className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream/30 text-brown-900 placeholder:text-brown-400/60 focus:outline-none focus:ring-2 focus:ring-brown-300 focus:bg-white transition-all duration-300 text-sm resize-y focus:scale-[1.01]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-white type-btn bg-gradient-to-r from-brown-600 via-brown-500 to-brown-400 shadow-soft hover:shadow-soft-lg hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 animate-breath"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
