'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Database,
  Cloud,
  Zap,
  Brain,
  DollarSign,
  LineChart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import LayoutContainer from '@/components/LayoutContainer'

const projects = [
  /* 🔒 DATA UNCHANGED */
  {
    title: 'Real-time Streaming Pipeline',
    description:
      'End-to-end real-time data pipeline processing millions of events per second with Kafka, Spark Structured Streaming, and Delta Lake for real-time analytics and ML feature engineering.',
    icon: Zap,
    techStack: ['Apache Kafka', 'Spark Streaming', 'Delta Lake', 'AWS S3', 'Python', 'Docker'],
    highlights: [
      'Processes 10M+ events/second with sub-second latency',
      'Automated schema evolution and data quality checks',
      'Cost-optimized architecture with auto-scaling',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Enterprise Lakehouse on Databricks',
    description:
      'Modern data lakehouse architecture built on Databricks with Delta Lake, enabling ACID transactions, time travel, and unified batch/streaming workloads for enterprise analytics.',
    icon: Database,
    techStack: ['Databricks', 'Delta Lake', 'PySpark', 'Unity Catalog', 'AWS', 'Terraform'],
    highlights: [
      'Unified 50+ data sources into single lakehouse',
      'Reduced data pipeline runtime by 60%',
      'Implemented data governance with Unity Catalog',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Snowflake / BigQuery Warehouse Modernization',
    description:
      'Migrated legacy data warehouse to modern cloud data warehouse using Snowflake and BigQuery, with optimized data models and automated ELT pipelines.',
    icon: Cloud,
    techStack: ['Snowflake', 'BigQuery', 'DBT', 'Airflow', 'Python', 'GitHub Actions'],
    highlights: [
      'Migrated 100+ TB of historical data',
      'Improved query performance by 70%',
      'Automated data transformation with DBT',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'MLOps-Ready Feature Store Architecture',
    description:
      'Production-grade feature store for ML models with real-time and batch feature computation, versioning, and serving capabilities using Databricks Feature Store.',
    icon: Brain,
    techStack: ['Databricks Feature Store', 'MLflow', 'PySpark', 'Delta Lake', 'FastAPI'],
    highlights: [
      'Serving 1000+ features with ms latency',
      'Automated feature engineering pipelines',
      'Full feature lineage and versioning',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Fintech Credit Risk Scoring Pipeline',
    description:
      'Real-time credit risk scoring system processing loan applications with ML models, feature engineering, and automated decisioning workflows.',
    icon: DollarSign,
    techStack: ['PySpark', 'Kafka', 'PostgreSQL', 'FastAPI', 'AWS Lambda', 'Docker'],
    highlights: [
      'Reduced loan approval time from days to minutes',
      'Processed 100K+ applications daily',
      'Achieved 95%+ model accuracy',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Cloud Cost Optimization Framework',
    description:
      'Automated cost optimization framework for cloud data platforms with usage monitoring, anomaly detection, and automated resource scaling.',
    icon: LineChart,
    techStack: ['Python', 'AWS Cost Explorer', 'Terraform', 'Lambda', 'CloudWatch'],
    highlights: [
      'Reduced cloud costs by 40%',
      'Automated resource rightsizing',
      'Real-time cost anomaly detection',
    ],
    github: 'https://github.com',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[360px] bg-blue-300/15 blur-[120px] rounded-full mt-32" />
      </div>

      {/* ✅ SAME CONTAINER AS ALL OTHER SECTIONS */}
      <LayoutContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1A3E] mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Production-grade data engineering projects showcasing end-to-end expertise
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="
                    rounded-2xl
                    p-6
                    border border-blue-200/40
                    bg-blue-100/40
                    backdrop-blur-xl
                    shadow-[0_12px_32px_rgba(1,31,75,0.12)]
                    text-left
                  "
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#0A1A3E] to-blue-700 rounded-xl">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1A3E] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 mb-5 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-[#0A1A3E] mb-2">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-blue-600">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1.5
                          text-xs font-medium
                          rounded-full
                          bg-white/60
                          text-[#0A1A3E]
                          border border-blue-200
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </LayoutContainer>
    </section>
  )
}
