"use client";

import { motion } from "framer-motion";

import type { IconType } from "react-icons";

import Image from "next/image";

import { FiArrowUpRight } from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaGitAlt,
  FaAws,
  FaChartBar,
  FaMicrosoft,
  FaCode,
  FaBrain,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiR,
  SiGmail,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiSnowflake,
  SiAlteryx,
  SiSap,
  SiJira,
} from "react-icons/si";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { TbSql } from "react-icons/tb";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

type SkillCategory = {
  title: string;
  skills: [IconType, string][];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages, Analytics & Machine Learning",
    skills: [
      [TbSql, "SQL"],
      [FaPython, "Python"],
      [SiR, "R"],
      [SiPandas, "Pandas"],
      [SiNumpy, "NumPy"],
      [SiTensorflow, "TensorFlow"],
      [FaChartBar, "Regression"],
      [FaBrain, "Classification"],
      [FaBrain, "Clustering"],
      [FaChartBar, "A/B Testing"],
    ],
  },
  {
    title: "BI & Power Platform",
    skills: [
      [FaChartBar, "Power BI"],
      [FaMicrosoft, "Power Apps"],
      [FaMicrosoft, "Power Automate"],
      [PiMicrosoftExcelLogoFill, "Excel"],
      [PiMicrosoftExcelLogoFill, "Pivot Tables"],
      [PiMicrosoftExcelLogoFill, "VLOOKUP"],
      [FaChartBar, "Dashboard Development"],
      [FaChartBar, "KPI Reporting"],
    ],
  },
  {
    title: "Data Platforms & Engineering",
    skills: [
      [SiPostgresql, "PostgreSQL"],
      [SiSnowflake, "Snowflake"],
      [SiAlteryx, "Alteryx"],
      [FaGitAlt, "Git"],
      [FaCode, "VS Code"],
      [FaCode, "PyCharm"],
      [FaChartBar, "Jupyter Notebooks"],
      [TbSql, "ETL"],
      [TbSql, "Data Modeling"],
    ],
  },
  {
    title: "Enterprise, Cloud & Business Systems",
    skills: [
      [SiSap, "SAP"],
      [FaAws, "AWS"],
      [FaMicrosoft, "Azure"],
      [SiJira, "Jira"],
      [SiJira, "Agile/Scrum"],
      [FaChartBar, "Financial Analysis"],
      [FaChartBar, "Forecasting"],
      [FaMicrosoft, "Workflow Automation"],
    ],
  },
];

export default function Home() {
  return (
  <main className="min-h-screen bg-white text-black overflow-hidden">
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
    <div className="flex gap-6 text-gray-700 font-medium">
      <a href="#about" className="transition hover:underline hover:decoration-2 hover:underline-offset-2">About</a>
      <a href="#experience" className="transition hover:underline hover:decoration-2 hover:underline-offset-2">Experience</a>
      <a href="#skills" className="transition hover:underline hover:decoration-2 hover:underline-offset-2">Skills</a>
      <a href="#projects" className="transition hover:underline hover:decoration-2 hover:underline-offset-2">Projects</a>
    </div>

    <div className="flex gap-5">
      <a href="https://github.com/asharma8924"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
      <FaGithub className="text-3xl text-black" />
      <span className="text-sm mt-1 text-gray-700">GitHub</span>
    </a>

      <a href="https://www.linkedin.com/in/angad-sharma-0818a0193/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
      <FaLinkedin className="text-3xl text-[#0077B5]" />
      <span className="text-sm mt-1 text-gray-700">LinkedIn</span>
    </a>
      <a href="mailto:angads2005@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <SiGmail className="text-3xl" />
        <span className="text-sm mt-1 text-gray-700">Email</span>
      </a>
    </div>
  </div>
</nav>
    {/* Hero */}
      <section id="about" className="max-w-7xl mx-auto px-8 pt-24 pb-16">
      <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
    {/* Left side */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="space-y-4 text-[17px] text-gray-800 leading-7 max-w-5xl"
    >
      <h1 className="text-3xl md:text-3xl font-black text-black leading-tight max-w-4xl">
        Hey! I am Angad Sharma, a Data Analytics and Business Intelligence professional.
      </h1>

      <p>
        I am a recent graduate from the University of Maryland, College Park
        (December 2025) with a B.S. in Information Science (Data Science Track)
        and a minor in Statistics.
      </p>

      <p>
        I have always been passionate about technology and business, especially the way
        data connects the two. I am fascinated by how organizations use data to understand
        performance, uncover inefficiencies, and guide strategic decisions.
      </p>

      <p>
        Throughout my academic journey, I have built projects and gained valuable
        professional experience while developing a strong interest in analytics,
        data modeling, and process optimization.
      </p>

      <p>
        I enjoy working with datasets, designing structured queries, and building dashboards
        that transform raw information into clear, meaningful insights. For me, technology
        is most impactful when it enables smarter business decisions and measurable improvements.
      </p>

      <p>
        Outside of work, I lead a very active lifestyle and regularly engage in strength
        training, running, and soccer. Fitness plays an important role in helping me stay
        disciplined, focused, and energized.
      </p>
    </motion.div>

    {/* Right side */}
    <Image
      src="/Graduation Pic.jpg"
      alt="Angad Sharma"
      width={350}
      height={350}
      className="rounded-3xl shadow-xl"
/>
  </div>
</section>
{/* Experience */}
<motion.section
  id="experience"
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="max-w-7xl mx-auto px-8 py-8"
>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-10 text-black">
      Experience
    </h2>
  </div>

  <div className="space-y-8">
    {[
      {
        date: "APR 2026 – PRESENT",
        role: "Business & Financial Analyst",
        company: "Leidos | Reston, Virginia",
        url: "https://www.leidos.com",
        bullets: [
          "Developed and maintained financial reports, dashboards, and key performance metrics using Excel, Power BI, and data analysis techniques, enabling stakeholders to monitor project performance, budgets, and strategic objectives.",
          "Analyzed operational and financial data to identify trends, support forecasting efforts, and provide data-driven recommendations that improved decision-making across cross-functional teams.",
          "Consolidated and validated data from multiple sources to ensure reporting accuracy, consistency, and timely delivery of business insights to leadership and project stakeholders.",
          "Partnered with cross-functional teams to track portfolio performance, monitor key initiatives, and support strategic planning through quantitative analysis and performance reporting.",
          "Leveraged analytical tools and visualization techniques to communicate complex information effectively, enhancing visibility into operational metrics and supporting continuous process improvements."
        ],
      },
      {
        date: "SEP 2025 – APR 2026",
        role: "Product Analyst",
        company: "AstraZeneca | Frederick, MD",
        url: "https://www.astrazeneca.com",
        bullets: [
          "Analyzed and validated production and quality data using SQL, Excel, and Power BI, ensuring data accuracy and delivering actionable insights to support operational decision-making.",
          "Developed and monitored performance metrics across 3+ production lines, leveraging trend analysis and anomaly detection to support monthly KPIs and maintain 98%+ line uptime.",
          "Collaborated with cross-functional teams to investigate process inefficiencies, resolve data discrepancies, and improve reporting visibility across manufacturing operations.",
          "Created and maintained dashboards and recurring reports that enhanced stakeholder visibility into operational performance, enabling data-driven decisions and continuous process improvements."
        ],
      },
      {
        date: "JUN 2025 – AUG 2025",
        role: "Data Analyst Intern",
        company: "AstraZeneca | Frederick, MD",
        url: "https://www.astrazeneca.com",
        bullets: [
          "Led a data-driven tool replacement initiative by auditing 200+ handheld tools, structuring and analyzing data using SQL, and centralizing datasets through SharePoint to improve accessibility and reporting consistency.",
          "Designed and developed interactive Power BI dashboards to track replacement status and key metrics, increasing tracking efficiency by 40% and enhancing visibility for stakeholders.",
          "Collaborated with cross-functional teams and external vendors to evaluate replacement options, leveraging data insights to support decision-making and achieve $11K+ in cost savings while maintaining operational requirements.",
          "Performed data cleaning, validation, and quality checks to ensure accurate reporting and establish a reliable foundation for analytics and process improvement initiatives.",
          "Streamlined reporting workflows by consolidating information from multiple sources into a centralized system, improving data transparency and supporting more efficient asset management."
        ],
      },
    ].map((job) => (
      <motion.div
        key={job.role}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-gray-200 bg-white shadow-lg p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <p className="text-sm mb-2">{job.date}</p>

        <h3 className="text-2xl font-semibold text-black">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            {job.role}
            <FiArrowUpRight className="text-base -translate-y-1" />
          </a>
        </h3>

        <p className="text-gray-600 mb-4">
          {job.company}
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</motion.section>
{/* Skills */}
      <motion.section
        id="skills"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative py-20 overflow-hidden bg-black text-white"
      >
        <img
          src="/AI-Technology-Creation-Concept.gif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <motion.div
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_35%)]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-3 text-white">Skills</h2>
            <p className="text-gray-300 text-lg">
              What I have learned over the years.
            </p>
          </div>

          <div className="space-y-14">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-3xl font-bold mb-8 text-white">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
                  {category.skills.map(([Icon, skill]) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.12, y: -8 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <div className="h-20 w-20 rounded-2xl bg-black/60 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 backdrop-blur">
                        <Icon className="text-5xl text-cyan-300" />
                      </div>

                      <p className="mt-3 text-gray-100 font-medium">{skill}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
{/* Projects */}
<motion.section
  id="projects"
  variants={sectionReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="max-w-7xl mx-auto px-8 py-12"
>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-10 text-black">
      Projects
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        title: "Revenue Optimization Data Warehouse & BI Dashboard",
        tools: "PostgreSQL • Power BI • ETL • Data Analytics",
        description:
          "Designed an end-to-end PostgreSQL data warehouse to clean and analyze 20K+ e-commerce records. Used CTEs, window functions, and Power BI dashboards to surface revenue, customer, and product insights.",
        github:
          "https://github.com/asharma8924/Revenue-Optimization-Analystics-Pipeline",
      },
      {
        title: "Flikshop Business Intelligence Transformation",
        tools: "SQL • Data Modeling • BI Architecture • Business Analysis",
        description:
          "Translated business and Figma requirements into a normalized 3NF SQL schema spanning 30+ tables and created documentation for scalable analytics and backend development.",
        github:
          "https://github.com/asharma8924/Flikshop-iConsultancy",
      },
    ].map((project) => (
      <motion.div
        key={project.title}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-gray-200 bg-white shadow-lg p-8
                   hover:-translate-y-2
                   hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                   transition duration-300"
      >
        <div className="h-2 w-20 rounded-full bg-black mb-6" />

        <h3 className="text-2xl font-semibold mb-3 text-black">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            {project.title}
            <FiArrowUpRight className="text-base -translate-y-[1px]" />
          </a>
        </h3>

        <p className="text-gray-500 mb-4">
          {project.tools}
        </p>

        <p className="text-gray-700 leading-7 mb-6">
          {project.description}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-black hover:underline"
        >
          <FaGithub className="text-xl" />
          View on GitHub
          <FiArrowUpRight className="text-sm -translate-y-[1px]" />
        </a>
      </motion.div>
    ))}
  </div>
</motion.section>
{/* Contact */}
      <motion.section
        id="contact"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-8 py-14"
      >
        <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-10 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">Let&apos;s Connect</h2>
          <p className="text-gray-700 mb-6">
            Open to data, business analytics, BI, finance, and AI/ML opportunities.
          </p>

          <a
            href="mailto:angads2005@gmail.com"
            className="inline-block rounded-xl bg-black text-white px-6 py-3 font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>
        </div>
      </motion.section>

      <footer className="max-w-7xl mx-auto px-8 py-10 text-gray-500">
        © 2026 Angad Sharma
      </footer>
    </main>
  );
}