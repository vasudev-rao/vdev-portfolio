"use client";

import { motion } from "framer-motion";

interface GridBannerProps {
  title: string;
  subtitle?: string;
}

export default function GridBanner({ title, subtitle }: GridBannerProps) {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,26,62,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,26,62,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Fade top & bottom */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3E]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-gray-600">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
