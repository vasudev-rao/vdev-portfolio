'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

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
    <section className="w-full pt-36 pb-32 flex justify-center relative overflow-hidden">

      {/* Soft background glow (same scale as hero) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-blue-300/20 blur-[140px] rounded-full mt-40" />
      </div>

      {/* SAME CONTAINER AS HERO */}
      <div className="container-wide text-center relative z-10">

        {/* SAME GLASS CARD AS HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            section-card
            rounded-3xl
            px-10 md:px-16
            py-14 md:py-20
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
          "
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#011F4B] leading-tight">
            Get In Touch
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-slate-700 px-4 md:px-24">
            Let’s talk about data engineering, cloud platforms, real-time systems,
            and AI-ready architectures.
          </p>

          {/* Social Actions (Hero-style buttons) */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:vasudevrao@email.com"
              className="
                px-7 py-3.5 rounded-xl text-lg font-semibold
                bg-gradient-to-r from-[#011F4B] to-blue-700
                text-white
                shadow-lg shadow-blue-900/30
                hover:scale-105 hover:shadow-blue-800/40
                transition-all duration-300
              "
            >
              Email Me
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="
                px-7 py-3.5 rounded-xl text-lg font-semibold
                border border-[#011F4B]/30
                bg-white/60 backdrop-blur-xl
                text-[#011F4B]
                hover:bg-white/80 hover:scale-105
                transition-all duration-300
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                px-7 py-3.5 rounded-xl text-lg font-semibold
                border border-[#011F4B]/30
                bg-white/60 backdrop-blur-xl
                text-[#011F4B]
                hover:bg-white/80 hover:scale-105
                transition-all duration-300
              "
            >
              LinkedIn
            </a>
          </div>

          {/* Newsletter (still hero-sized, not tall) */}
          <div className="mt-12 max-w-xl mx-auto">
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="
                  flex-1 px-4 py-3 rounded-xl
                  border border-blue-300
                  bg-white/70 backdrop-blur-xl
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                "
              />
              <Button
                type="submit"
                size="lg"
                className="
                  px-6 rounded-xl
                  bg-gradient-to-r from-[#011F4B] to-blue-700
                  shadow-lg shadow-blue-900/30
                "
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-4 font-medium"
              >
                ✓ Successfully subscribed!
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
