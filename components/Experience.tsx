"use client";

import { motion } from "framer-motion";
import LayoutContainer from "@/components/LayoutContainer";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[700px] h-[260px] bg-blue-300/20 blur-[120px] rounded-full mt-40" />
      </div>

      {/* ✅ SAME CONTAINER AS NAVBAR / HERO / ABOUT / CONTACT */}
      <LayoutContainer>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-120px" }}
          className="
            section-card
            w-full
            rounded-3xl
            px-10 md:px-16
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
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1A3E] mb-8">
            Experience
          </h2>

          <div className="space-y-6 text-left">
            {/* EXPERIENCE 1 */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                p-6 md:p-8
                border border-blue-200/40
                bg-blue-100/40
                backdrop-blur-xl
                shadow-[0_12px_32px_rgba(1,31,75,0.12)]
              "
            >
              <h3 className="text-2xl font-bold text-[#0A1A3E]">
                Senior Data Engineer
              </h3>
              <p className="text-gray-600 text-lg mt-1">
                2020 – Present
              </p>

              <ul className="mt-5 space-y-3 text-gray-700 text-lg list-disc list-inside">
                <li>
                  Designed and operated large-scale batch and streaming pipelines
                  processing{" "}
                  <span className="font-semibold text-[#0A1A3E]">1B+</span>{" "}
                  records using PySpark, Databricks, and Delta Lake.
                </li>
                <li>
                  Built real-time streaming systems using{" "}
                  <span className="font-semibold text-[#0A1A3E]">
                    Kafka and Spark Structured Streaming
                  </span>.
                </li>
                <li>
                  Reduced cloud cost by{" "}
                  <span className="font-semibold text-[#0A1A3E]">40%</span>{" "}
                  via lakehouse migration.
                </li>
                <li>
                  Implemented CI/CD with Docker, GitHub Actions, and Terraform.
                </li>
                <li>
                  Modernized data warehouses on Snowflake and BigQuery.
                </li>
              </ul>
            </motion.div>

            {/* EXPERIENCE 2 */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                p-6 md:p-8
                border border-blue-200/40
                bg-blue-100/40
                backdrop-blur-xl
                shadow-[0_12px_32px_rgba(1,31,75,0.12)]
              "
            >
              <h3 className="text-2xl font-bold text-[#0A1A3E]">
                Data Engineer
              </h3>
              <p className="text-gray-600 text-lg mt-1">
                2018 – 2020
              </p>

              <ul className="mt-5 space-y-3 text-gray-700 text-lg list-disc list-inside">
                <li>
                  Built ETL workflows using{" "}
                  <span className="font-semibold text-[#0A1A3E]">
                    Airflow, Python, and SQL
                  </span>.
                </li>
                <li>
                  Optimized BigQuery with partitioning and clustering
                  (60% faster queries).
                </li>
                <li>
                  Developed cloud-native ingestion pipelines.
                </li>
                <li>
                  Collaborated on data modeling and warehouse design.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </LayoutContainer>
    </section>
  );
}
