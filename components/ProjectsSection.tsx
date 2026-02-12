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

// ⭐ NEW: Added iconGradient field (ONLY CHANGE)
const projects = [
  {
    title: 'Real-time Streaming Pipeline',
    description:
      'End-to-end real-time data pipeline processing millions of events per second with Kafka, Spark Structured Streaming, and Delta Lake for real-time analytics and ML feature engineering.',
    icon: Zap,
    iconGradient: 'from-[#011F4B] to-blue-600',
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
      'Modern data lakehouse architecture built on Databricks with Delta Lake, enabling ACID transactions, time travel, and unified batch/streaming workloads.',
    icon: Database,
    iconGradient: 'from-[#011F4B] to-blue-700',
    techStack: ['Databricks', 'Delta Lake', 'PySpark', 'Unity Catalog', 'AWS', 'Terraform'],
    highlights: [
      'Unified 50+ data sources into a single lakehouse',
      'Reduced pipeline runtime by 60%',
      'Implemented governance with Unity Catalog',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Snowflake / BigQuery Modernization',
    description:
      'Migrated legacy warehouse workloads to Snowflake and BigQuery with optimized data models and automated ELT pipelines.',
    icon: Cloud,
    iconGradient: 'from-blue-600 to-[#011F4B]',
    techStack: ['Snowflake', 'BigQuery', 'DBT', 'Airflow', 'Python', 'GitHub Actions'],
    highlights: [
      'Migrated 100+ TB of historical data',
      'Improved query performance by 70%',
      'Automated transformations with DBT',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'MLOps Feature Store Architecture',
    description:
      'Production-grade feature store supporting real-time and batch feature computation, lineage, and versioning.',
    icon: Brain,
    iconGradient: 'from-blue-700 to-[#011F4B]',
    techStack: ['Databricks Feature Store', 'MLflow', 'PySpark', 'Delta Lake', 'FastAPI'],
    highlights: [
      'Served 1000+ features with ms latency',
      'Automated feature pipelines',
      'Full feature lineage and versioning',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Fintech Credit Risk Pipeline',
    description:
      'Real-time credit risk scoring system with ML-driven decisioning and streaming feature engineering.',
    icon: DollarSign,
    iconGradient: 'from-[#011F4B] to-blue-800',
    techStack: ['PySpark', 'Kafka', 'PostgreSQL', 'FastAPI', 'AWS Lambda', 'Docker'],
    highlights: [
      'Reduced approval time from days to minutes',
      'Processed 100K+ applications daily',
      'Achieved 95%+ model accuracy',
    ],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Cloud Cost Optimization Framework',
    description:
      'Automated framework for monitoring, anomaly detection, and dynamic resource scaling.',
    icon: LineChart,
    iconGradient: 'from-blue-800 to-[#011F4B]',
    techStack: ['Python', 'AWS Cost Explorer', 'Terraform', 'Lambda', 'CloudWatch'],
    highlights: [
      'Reduced cloud costs by 40%',
      'Automated rightsizing',
      'Real-time anomaly detection',
    ],
    github: 'https://github.com',
    demo: '#',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[360px] bg-blue-300/15 blur-[120px] rounded-full mt-32" />
      </div>

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
            text-center
            relative
            z-10
          "
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0A1A3E] mb-2">
            Featured Projects
          </h2>

          <p className="text-sm text-slate-600 mb-6">
            Production-grade data engineering projects showcasing end-to-end expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    p-5
                    border border-blue-200/40
                    bg-blue-100/40
                    backdrop-blur-xl
                    shadow-[0_10px_26px_rgba(1,31,75,0.10)]
                    text-left
                  "
                >
                  {/* ICON + LINKS */}
                  <div className="flex items-start justify-between mb-2.5">
                    {/* ⭐ Gradient Icon Box (ONLY CHANGE) */}
                    <div
                      className={`
                        p-2 rounded-lg
                        bg-gradient-to-br ${project.iconGradient}
                        text-white
                      `}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>

                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demo} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold text-[#0A1A3E] mb-1.5">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-slate-700 leading-6 mb-3">
                    {project.description}
                  </p>

                  {/* HIGHLIGHTS */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-[#0A1A3E] mb-1">
                      Key Highlights
                    </h4>

                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-600 flex gap-1.5 leading-5"
                        >
                          <span className="text-blue-600">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="
                          px-2.5 py-1
                          text-[11px] font-medium
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
                </div>
              )
            })}
          </div>
        </div>
      </LayoutContainer>
    </section>
  )
}