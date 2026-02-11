"use client";

import LayoutContainer from "@/components/LayoutContainer";

export default function Footer() {
  return (
    <section className="w-full pt-28 pb-24 relative overflow-hidden">
      
      {/* Subtle glow — toned down */}
      <div className="hidden md:flex absolute inset-0 justify-center pointer-events-none">
        <div className="w-[600px] h-[220px] bg-blue-300/15 blur-[90px] rounded-full mt-32" />
      </div>

      <LayoutContainer>
        <div
          className="
            section-card
            w-full
            rounded-3xl
            px-8 md:px-16
            py-12 md:py-16
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
            text-center
            relative
            z-10
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
            
            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                About
              </h3>
              <p className="mt-3 text-sm text-[#0A1A3F]/70 leading-relaxed">
                Senior Data Engineer specializing in scalable batch & streaming
                platforms, cloud-native data systems, and AI-ready architectures.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#0A1A3F]/70">
                <li><a href="#projects" className="hover:text-[#011F4B]">Projects</a></li>
                <li><a href="#skills" className="hover:text-[#011F4B]">Skills</a></li>
                <li><a href="/blog" className="hover:text-[#011F4B]">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#011F4B]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#011F4B]">
                Expertise
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#0A1A3F]/70">
                <li>Databricks / PySpark</li>
                <li>Kafka / Airflow / Delta Lake</li>
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

          <div className="mt-10 h-px bg-blue-200/40" />

          <p className="mt-5 text-sm text-[#0A1A3F]/60">
            © {new Date().getFullYear()} Vasudev Rao · Designed & Engineered for Performance
          </p>
        </div>
      </LayoutContainer>
    </section>
  );
}
