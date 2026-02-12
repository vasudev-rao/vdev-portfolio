"use client";

import React from "react";
import LayoutContainer from "@/components/LayoutContainer";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-24">
      <LayoutContainer>
        <div
          className="
            section-card
            w-full
            rounded-3xl
            px-8 md:px-16
            py-14 md:py-18
            border border-blue-200/50
            bg-[rgba(219,234,254,0.45)]
            backdrop-blur-[28px]
            shadow-[0_20px_60px_rgba(1,31,75,0.18)]
          "
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#011F4B] mb-4 text-center">
            About Me
          </h2>

          <p className="text-sm md:text-base text-slate-700 leading-6 max-w-xl mx-auto text-center mb-8">
            I design, build, and operate production-grade data platforms that teams trust.
          </p>

          <div className="max-w-2xl mx-auto space-y-4 text-sm text-slate-700 leading-6">
            <p>
              I am a <strong>Senior Data Engineer</strong> with 6+ years of experience
              designing, building, and optimizing large-scale data platforms across
              <strong> AWS, GCP, Databricks</strong>, and modern lakehouse architectures.
            </p>

            <p>
              I specialize in building real-time and batch data systems using
              <strong> PySpark, Delta Lake, Snowflake, BigQuery, Airflow</strong>, and Kafka.
            </p>

            <p>
              I am passionate about <strong>data architecture</strong>, fintech systems,
              streaming pipelines, and MLOps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-blue-100/60 border border-blue-200 p-5">
              <h3 className="text-sm font-semibold text-[#011F4B] mb-2">
                What I Do
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 leading-6">
                <li>Build large-scale data platforms</li>
                <li>Develop real-time pipelines (Kafka + Spark)</li>
                <li>Design lakehouse architectures</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-blue-100/60 border border-blue-200 p-5">
              <h3 className="text-sm font-semibold text-[#011F4B] mb-2">
                What I Am Focusing On
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 leading-6">
                <li>Fintech AI and credit risk pipelines</li>
                <li>LLM and vector database engineering</li>
                <li>MLOps architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}