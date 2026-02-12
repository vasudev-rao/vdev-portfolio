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
      className="w-full py-20 md:py-24 relative overflow-hidden"
    >
      {/* Ambient glow (UNCHANGED) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-blue-300/15 blur-[120px] rounded-full mt-32" />
      </div>

      <LayoutContainer>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
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
            text-center
            relative
            z-10
          "
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0A1A3E] mb-6">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="
                  rounded-2xl
                  p-5
                  border border-blue-200/40
                  bg-blue-100/40
                  backdrop-blur-xl
                  shadow-[0_10px_26px_rgba(1,31,75,0.10)]
                "
              >
                <h3 className="text-sm font-semibold text-[#0A1A3E] mb-3">
                  {skillGroup.category}
                </h3>

                <ul className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="
                        text-[11px] font-medium
                        px-2.5 py-1
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