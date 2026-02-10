"use client";

import { motion } from "framer-motion";
import LayoutContainer from "@/components/LayoutContainer";

export default function Footer() {
  return (
    <section className="w-full pt-36 pb-32 relative overflow-hidden">
      {/* Hero-scale glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-blue-300/15 blur-[140px] rounded-full mt-40" />
      </div>

      {/* ✅ SAME CONTAINER AS ALL OTHER SECTIONS */}
      <LayoutContainer>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            section-card
            w-full
            rounded-3xl
            px-10 md:px-16
            py-14 md:py-20
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
            text-center
            relative
            z-10
          "
        >
          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                About Me
              </h3>
              <p className="mt-3 text-sm text-[#0A1A3F]/70 leading-relaxed">
                Senior Data Engineer with 6+ years of experience building scalable
                data platforms, real-time pipelines, cloud systems, and AI-ready
                architectures.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#0A1A3F]/70">
                <li><a href="#projects" className="hover:text-[#011F4B]">Projects</a></li>
                <li><a href="#skills" className="hover:text-[#011F4B]">Skills</a></li>
                <li><a href="#blog" className="hover:text-[#011F4B]">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#011F4B]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                Data Engineering
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#0A1A3F]/70">
                <li>Databricks / PySpark</li>
                <li>Airflow / Kafka / Delta Lake</li>
                <li>Snowflake / BigQuery / PostgreSQL</li>
                <li>AWS & GCP Data Platforms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                Connect
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#0A1A3F]/70">
                <li>Email: vasudev@example.com</li>
                <li>
                  <a href="https://github.com/yourgithub" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 h-px bg-blue-200/40" />

          <p className="mt-6 text-sm text-[#0A1A3F]/60">
            © {new Date().getFullYear()} Vasudev Rao — All Rights Reserved.
          </p>
        </motion.div>
      </LayoutContainer>
    </section>
  );
}
