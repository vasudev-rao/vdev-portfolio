'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Particle = {
  x: number
  y: number
  size: number
  duration: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 20,
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-blue-300/30"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
          animate={{
            y: [-40, window.innerHeight + 40],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
