"use client";

import React from "react";
import LayoutContainer from "@/components/LayoutContainer";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-24">
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
            text-center
          "
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#011F4B] leading-tight">
            Senior Data Engineer building
            <span className="block mt-2">
              reliable batch & streaming data platforms
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-[900px] mx-auto">
            I build large-scale data platforms, real-time streaming systems, and
            AI-ready pipelines using Databricks, PySpark, Snowflake, BigQuery,
            Delta Lake, AWS, GCP, Airflow, and Kafka.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-[1050px] mx-auto">
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
                  px-3.5 py-1.5
                  text-sm font-medium
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

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/Vasudev-Rao-Resume.pdf"
              download
              className="
                px-7 py-3.5 rounded-xl text-base font-semibold
                bg-gradient-to-r from-[#011F4B] to-blue-700
                text-white
                shadow-lg shadow-blue-900/30
                hover:scale-105
                transition-all duration-300
              "
            >
              Download CV (PDF)
            </a>

            <a
              href="#projects"
              className="
                px-6 py-3
                rounded-xl
                font-medium
                text-[#011F4B]
                bg-blue-100/70
                border border-blue-200
                hover:bg-blue-200/70
                transition-all
              "
            >
              See My Work
            </a>
          </div>

          <div className="mt-8 text-sm md:text-base text-slate-700 font-medium space-y-1">
            <p>⚡ Designed data platforms processing 1B+ records</p>
            <p>⚡ Reduced ETL cost by 40% with optimized Delta pipelines</p>
            <p>⚡ Built real-time streaming pipelines with Kafka & Spark</p>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
