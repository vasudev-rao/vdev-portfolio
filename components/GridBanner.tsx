"use client";

import { motion } from "framer-motion";
import LayoutContainer from "@/components/LayoutContainer";

interface GridBannerProps {
  title: string;
  subtitle?: string;
}

export default function GridBanner({ title, subtitle }: GridBannerProps) {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Grid background (UNCHANGED) */}
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

      {/* Fade top & bottom (UNCHANGED) */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <LayoutContainer>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0A1A3E]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-6">
              {subtitle}
            </p>
          )}
        </motion.div>
      </LayoutContainer>
    </section>
  );
}
