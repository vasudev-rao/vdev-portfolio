'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 flex justify-center relative overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-blue-300/15 blur-[120px] rounded-full mt-40" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-120px' }}
          className="
            section-card
            rounded-3xl
            px-10 md:px-16
            py-12 md:py-16
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
          "
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1A3E]">
            About Me
          </h2>

          <p className="mt-4 text-lg md:text-xl font-medium text-[#0A1A3E]/80">
            I design, build, and operate production-grade data platforms that teams trust.
          </p>

          <div className="mt-8 space-y-5 text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I am a{' '}
              <span className="font-semibold text-[#0A1A3E]">
                Senior Data Engineer
              </span>{' '}
              with 6+ years of experience designing, building, and optimizing
              large-scale data platforms across{' '}
              <span className="font-semibold text-[#0A1A3E]">
                AWS, GCP, Databricks, and modern lakehouse architectures
              </span>.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I specialize in building real-time and batch data systems using{' '}
              <span className="font-semibold text-[#0A1A3E]">
                PySpark, Delta Lake, Snowflake, BigQuery, Airflow, Kafka
              </span>.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I&apos;m passionate about{' '}
              <span className="font-semibold text-[#0A1A3E]">
                data architecture, fintech systems, streaming pipelines, and MLOps
              </span>.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: 'What I Do',
                items: [
                  'Build large-scale data platforms',
                  'Develop real-time pipelines (Kafka + Spark)',
                  'Design lakehouse architectures',
                  'Modernize data warehouses',
                  'Implement CI/CD for data systems',
                ],
              },
              {
                title: 'What I&apos;m Focusing On',
                items: [
                  'Fintech AI + credit risk pipelines',
                  'LLM & vector DB engineering',
                  'MLOps architecture',
                  'Cloud cost optimization',
                  'Data → AI engineering transition',
                ],
              },
            ].map((box) => (
              <div
                key={box.title}
                className="
                  rounded-2xl
                  p-6
                  border border-blue-200/40
                  bg-blue-100/40
                  backdrop-blur-xl
                  shadow-[0_12px_32px_rgba(1,31,75,0.12)]
                "
              >
                <h3 className="text-xl font-bold text-[#0A1A3E] mb-2">
                  {box.title}
                </h3>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  {box.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
