"use client";

import React from "react";
import LayoutContainer from "@/components/LayoutContainer";

export default function About() {
  return (
    <section id="about" className="w-full py-24">
      <LayoutContainer>
        <div
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
          "
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#011F4B] text-center mb-4">
            About Me
          </h2>

          <p className="text-lg text-slate-700 text-center max-w-[900px] mx-auto mb-10">
            I design, build, and operate production-grade data platforms that teams trust.
          </p>

          {/* Main Content */}
          <div className="max-w-[1050px] mx-auto space-y-6 text-slate-700 text-base leading-relaxed">
            <p>
              I’m a <strong>Senior Data Engineer</strong> with 6+ years of experience designing,
              building, and optimizing large-scale data platforms across{" "}
              <strong>AWS, GCP, Databricks</strong>, and modern lakehouse architectures.
            </p>

            <p>
              I specialize in building reliable batch and real-time systems using{" "}
              <strong>
                PySpark, Delta Lake, Snowflake, BigQuery, Airflow, and Kafka
              </strong>.
            </p>

            <p>
              I’m passionate about <strong>data architecture</strong>, fintech systems,
              streaming pipelines, and <strong>MLOps</strong>.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1050px] mx-auto">
            <div className="rounded-2xl p-6 bg-blue-100/50 border border-blue-200">
              <h3 className="text-lg font-bold text-[#011F4B] mb-3">
                What I Do
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Build large-scale data platforms</li>
                <li>• Develop real-time pipelines (Kafka + Spark)</li>
                <li>• Design lakehouse architectures</li>
              </ul>
            </div>

            <div className="rounded-2xl p-6 bg-blue-100/50 border border-blue-200">
              <h3 className="text-lg font-bold text-[#011F4B] mb-3">
                What I’m Focusing On
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Fintech AI & credit risk pipelines</li>
                <li>• LLM & vector database engineering</li>
                <li>• MLOps architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
