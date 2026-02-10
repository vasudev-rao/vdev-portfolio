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
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    setViewportHeight(height)

    const generated = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 20,
    }))

    setParticles(generated)
  }, [])

  // ⛔ Prevent render until client values exist
  if (!viewportHeight) return null

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
            y: [-40, viewportHeight + 40],
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
