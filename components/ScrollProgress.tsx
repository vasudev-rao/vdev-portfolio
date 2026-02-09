'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
        fixed top-0 left-0 right-0
        h-[3px]
        origin-left
        bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700
        backdrop-blur-md
        z-[100]
      "
    />
  )
}
