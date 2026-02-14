"use client";

import React from "react";
import LayoutContainer from "@/components/LayoutContainer";

export default function Hero() {
  return (
    <section className="w-full pt-24 pb-20 md:pb-24">
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
            shadow-[0_18px_50px_rgba(1,31,75,0.16)]
            text-center
          "
        >
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-[#011F4B] leading-[1.05] tracking-tight">
            Senior Data Engineer building
            <span className="block mt-2">
              reliable batch & streaming data platforms
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-6 max-w-xl mx-auto">
            I build large-scale data platforms, real-time streaming systems, and
            AI-ready pipelines using Databricks, PySpark, Snowflake, BigQuery,
            Delta Lake, AWS, GCP, Airflow, and Kafka.
          </p>

          {/* SKILL BADGES */}
          <div className="mt-6 flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto">
            {[
              "Databricks",
              "PySpark",
              "Snowflake",
              "BigQuery",
              "AWS",
              "GCP",
              "Delta Lake",
              "Airflow",
              "Kafka",
              "Python",
              "SQL",
              "Docker",
              "Kubernetes",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-2.5 py-1
                  text-xs font-medium
                  rounded-full
                  bg-blue-100/70
                  text-[#011F4B]
                  border border-blue-200
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-7 flex justify-center items-center gap-2.5 flex-wrap">
            <a
              href="/Vasudev-Rao-Resume.pdf"
              download
              className="
                inline-flex items-center justify-center
                h-10 px-4 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-[#011F4B] to-blue-700
                text-white
                shadow-md shadow-blue-900/20
                transition-transform duration-200
                hover:scale-[1.02]
                whitespace-nowrap
              "
            >
              Download CV (PDF)
            </a>

            <a
              href="#projects"
              className="
                inline-flex items-center justify-center
                h-10 px-4
                rounded-xl
                text-sm font-medium
                text-[#011F4B]
                bg-blue-100/70
                border border-blue-200
                hover:bg-blue-200/70
                transition-colors duration-200
                whitespace-nowrap
              "
            >
              See My Work
            </a>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mt-6 text-xs text-slate-600 space-y-1">
            <p>⚡ Designed data platforms processing 1B+ records</p>
            <p>⚡ Reduced ETL cost by 40% with optimized Delta pipelines</p>
            <p>⚡ Built real-time streaming pipelines with Kafka & Spark</p>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}