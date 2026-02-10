"use client";

import React from "react";
import { motion } from "framer-motion";
import LayoutContainer from "@/components/LayoutContainer";

const skills = [
  {
    category: "Data Engineering",
    items: [
      "Python",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Apache Spark (PySpark)",
      "Apache Kafka",
      "Apache Airflow",
      "Hadoop",
      "HDFS",
      "Hive",
      "ETL / ELT",
      "Data Warehousing",
      "Data Modeling",
      "Data Pipelines",
      "Batch & Streaming Pipelines",
      "Delta Lake",
      "Databricks",
      "Snowflake",
      "dbt",
      "Distributed Systems",
    ],
  },
  {
    category: "AWS Cloud",
    items: [
      "AWS S3",
      "AWS EC2",
      "AWS Lambda",
      "AWS Glue",
      "AWS Redshift",
      "AWS EMR",
      "AWS IAM",
      "AWS VPC",
      "AWS CloudWatch",
      "AWS SNS / SQS",
      "AWS RDS",
    ],
  },
  {
    category: "Google Cloud (GCP)",
    items: [
      "GCP BigQuery",
      "GCP Dataproc",
      "GCP Dataflow",
      "GCP Cloud Storage",
      "GCP Pub/Sub",
      "GCP Composer (Managed Airflow)",
      "GCP IAM",
      "GCP VPC Networking",
      "GCP Monitoring",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-blue-300/15 blur-[120px] rounded-full mt-32" />
      </div>

      {/* ✅ SAME CONTAINER AS NAVBAR / HERO */}
      <LayoutContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
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
            Skills & Technologies
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="
                  rounded-2xl
                  p-6
                  border border-blue-200/40
                  bg-blue-100/40
                  backdrop-blur-xl
                  shadow-[0_12px_32px_rgba(1,31,75,0.12)]
                "
              >
                <h3 className="text-xl font-bold text-[#0A1A3E] mb-4">
                  {skillGroup.category}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="
                        text-sm font-medium
                        px-3 py-1.5
                        rounded-full
                        bg-white/60
                        text-[#0A1A3E]
                        border border-blue-200
                      "
                    >
                        {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </LayoutContainer>
    </section>
  );
}
