'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import LayoutContainer from '@/components/LayoutContainer'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 3000)
  }

  return (
    <section id="contact" className="w-full py-20 md:py-24 relative overflow-hidden">

      {/* Background Glow (UNCHANGED) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-blue-400/20 blur-[140px] rounded-full mt-40" />
      </div>

      <LayoutContainer>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="
            section-card
            glass-shadow
            w-full
            rounded-3xl
            px-8 md:px-16
            py-14 md:py-18
            border border-blue-900/10
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            text-center
            relative z-10
          "
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#011F4B]">
            Get In Touch
          </h2>

          <p className="mt-3 text-sm text-slate-600 leading-6 max-w-xl mx-auto">
            Let's talk about data engineering, cloud platforms, real-time systems,
            and AI-ready architectures.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-2.5">

            <a
              href="mailto:vasudevrao@email.com"
              className="
                h-10 px-4 rounded-xl text-sm font-semibold
                inline-flex items-center justify-center
                bg-gradient-to-r from-[#011F4B] to-blue-700
                text-white
                shadow-lg shadow-blue-900/30
                transition-transform duration-200
                hover:scale-[1.03]
                whitespace-nowrap
              "
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="
                h-10 px-4 rounded-xl text-sm font-semibold
                inline-flex items-center justify-center
                border border-[#011F4B]/40
                bg-white/60 backdrop-blur-xl
                text-[#011F4B]
                transition-colors duration-200
                hover:bg-white/70
                whitespace-nowrap
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                h-10 px-4 rounded-xl text-sm font-semibold
                inline-flex items-center justify-center
                border border-[#011F4B]/40
                bg-white/60 backdrop-blur-xl
                text-[#011F4B]
                transition-colors duration-200
                hover:bg-white/70
                whitespace-nowrap
              "
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 max-w-sm mx-auto">
            <form onSubmit={handleSubscribe} className="flex gap-2">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="
                  flex-1 h-10 px-3 rounded-xl text-sm
                  border border-blue-400
                  bg-white/70 backdrop-blur-xl
                  focus:outline-none focus:ring-2 focus:ring-blue-500/40
                "
              />

              <Button
                type="submit"
                className="
                  h-10 px-3 rounded-xl
                  bg-gradient-to-r from-[#011F4B] to-blue-700
                  shadow-lg shadow-blue-900/30
                  transition-transform duration-200
                  hover:scale-[1.03]
                "
              >
                <Send className="h-3.5 w-3.5 text-white" />
              </Button>

            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-xs mt-2"
              >
                ✓ Successfully subscribed!
              </motion.p>
            )}
          </div>
        </motion.div>
      </LayoutContainer>
    </section>
  )
}