"use client";

import { useState } from "react";
import ProjectModal, { type Project } from "../components/ProjectModal";
import Image from "next/image";
export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#F8FAFC]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Personal Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-[#0F172A]"
          >
            TEG<span className="text-[#2563EB]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-[#475569] md:flex">
            <a href="#about" className="transition hover:text-[#1D4ED8]">
              About
            </a>
            <a href="#skills" className="transition hover:text-[#1D4ED8]">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-[#1D4ED8]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[#1D4ED8]">
              Contact
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-500/50 px-4 py-2 text-sm font-medium text-[#2563EB] transition hover:bg-blue-700/10"
          >
            View Resume
          </a>
        </nav>
      </header>


      
      {/* Hero */}
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        {/* Left: Introduction */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#2563EB]">
            Hello, welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            I'm <span className="text-[#2563EB]">Taj Elliot Gomez.</span>
          </h1>

          <h2 className="mt-5 text-xl font-medium text-[#334155] md:text-2xl">
            IT & Data Analytics Student
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B]">
            Passionate about transforming data into meaningful insights,
            developing analytical solutions, and exploring technologies
            that solve real-world problems. My interests span data
            analytics, business intelligence, predictive modeling,
            and information technology.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#2563EB] px-7 py-3 font-semibold text-[#0F172A] transition hover:bg-blue-700"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-7 py-3 font-semibold transition hover:border-blue-500 hover:text-[#1D4ED8]"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-10 text-sm text-[#64748B]">
            Data Analytics • Business Intelligence • IT Solutions
          </p>
        </div>

        
        {/* Right: Professional Profile Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-[#E8EEF5] shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Professional portrait of Taj Elliot Gomez"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F172A]/35 to-transparent" />
          </div>
        </div>

      </section>


      {/* Temporary section placeholders */}
      
      {/* About Me Section */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-slate-200/60 bg-[#F1F5F9] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#2563EB]">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            About <span className="text-[#2563EB]">Me.</span>
          </h2>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
            {/* Professional Background */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold">
                Bridging Data, Technology, and Insights
              </h3>

              <p className="mb-5 leading-8 text-[#64748B]">
                I am a fourth-year Bachelor of Science in Information
                Technology student specializing in Data and Business
                Analytics at Bulacan State University.
              </p>

              <p className="mb-5 leading-8 text-[#64748B]">
                My academic and project experiences have equipped me
                with practical skills in data preprocessing,
                exploratory data analysis, dashboard development,
                predictive modeling, and business intelligence
                using tools such as Python, Power BI, and Excel.
              </p>

              <p className="leading-8 text-[#64748B]">
                I am passionate about transforming complex datasets
                into meaningful insights that support informed
                decision-making. I continuously seek opportunities
                to strengthen my analytical and technical skills
                through hands-on projects and real-world applications.
              </p>
            </div>

            {/* Information Cards */}
            <div className="grid gap-5">
              {/* Education */}
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 transition hover:border-blue-500/40">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#2563EB]">
                  Education
                </p>
                <h4 className="text-lg font-semibold">
                  Bulacan State University
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Bachelor of Science in Information Technology
                  <br />
                  Specialization: Data and Business Analytics
                  <br />
                  Expected Graduation: 2027
                </p>
              </div>

              {/* Analytics Focus */}
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 transition hover:border-blue-500/40">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#2563EB]">
                  Primary Focus
                </p>
                <h4 className="text-lg font-semibold">
                  Data Analytics & Business Intelligence
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Data preprocessing, statistical analysis,
                  interactive dashboards, predictive modeling,
                  and data-driven decision support.
                </p>
              </div>

              {/* Technical Experience */}
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 transition hover:border-blue-500/40">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#2563EB]">
                  Technical Background
                </p>
                <h4 className="text-lg font-semibold">
                  Programming & Database Fundamentals
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Python, Java, JavaScript, SQL, relational
                  databases, and foundational web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      {/* Technical Skills Section */}
      <section
        id="skills"
        className="scroll-mt-24 border-t border-slate-200/60 bg-[#F8FAFC] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#2563EB]">
            What I work with
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Technical <span className="text-[#2563EB]">Skills.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#64748B]">
            A collection of analytical, programming, and technical
            skills developed through academic coursework,
            hands-on projects, and continuous learning.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Data Analytics",
                skills: [
                  "Data Cleaning",
                  "Data Transformation",
                  "Exploratory Data Analysis",
                  "Trend Analysis",
                  "Predictive Modeling",
                  "Time-Series Forecasting",
                  "Data Visualization",
                ],
              },
              {
                title: "Business Intelligence",
                skills: [
                  "Dashboard Development",
                  "KPI Monitoring",
                  "Business Performance Analysis",
                ],
              },
              {
                title: "Programming & Web Development",
                skills: [
                  "Python",
                  "Java",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Object-Oriented Programming",
                  "Web Development Fundamentals",
                ],
              },
              {
                title: "Database Management",
                skills: [
                  "SQL Querying",
                  "Data Retrieval",
                  "Data Manipulation",
                  "Relational Database Fundamentals",
                  "Microsoft SQL Server",
                  "MySQL",
                ],
              },
              {
                title: "Analytics & Productivity Tools",
                skills: [
                  "Power BI",
                  "Microsoft Excel",
                  "Tableau",
                  "SPSS",
                  "Weka",
                  "OpenRefine",
                  "Mircosoft Office",
                  "Google Workspace",
                  "Visual Studio Code",
                ],
              },
              
            ].map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200/60 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <h3 className="mb-6 text-lg font-semibold text-[#0F172A]">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-200 bg-[#E8EEF5] px-3 py-2 text-xs font-medium text-[#475569] transition hover:border-blue-500/50 hover:text-[#1D4ED8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
      {/* Featured Projects Section */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-slate-200/60 bg-[#F1F5F9] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#2563EB]">
            Selected work
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Featured <span className="text-[#2563EB]">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#64748B]">
            A selection of academic and hands-on projects
            demonstrating my experience in data analytics,
            predictive modeling, business intelligence,
            and dashboard development.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Medicine Demand Forecasting",
                images: [
                  "/projects/medicine-forecasting/screenshot-1.png",
                  "/projects/medicine-forecasting/screenshot-2.png",
                  "/projects/medicine-forecasting/screenshot-3.png",
                  "/projects/medicine-forecasting/screenshot-4.png",
                ], // Add paths here when your screenshots are ready
                subtitle: "BulSU Clinic Inventory Planning",
                category: "Predictive Analytics",
                description:
                  "Developed a medicine demand forecasting system to analyze historical dispensing records, identify demand patterns, and generate forecasts and actionable insights for inventory planning.",
                technologies: [
                  "Python",
                  "Excel",
                  "OpenRefine",
                  "Time-Series Forecasting",
                ],

                objectives: [
                  "Analyze historical medicine dispensing records to identify consumption patterns and demand characteristics.",
                  "Develop time-series forecasting models to estimate future medicine demand.",
                  "Create an interactive analytics dashboard to support medicine inventory planning and procurement decisions.",
                ],

                methodology: [
                  "Preprocessed and aggregated historical medicine dispensing records into monthly demand data.",
                  "Applied ABC analysis to identify high-priority medicine categories for forecasting.",
                  "Examined demand characteristics, temporal patterns, and seasonality to guide model development.",
                  "Developed and evaluated forecasting models using SARIMA, ARIMA, and Holt-Winters methods.",
                  "Integrated forecasting results and historical demand insights into a decision-support dashboard.",
                ],

                contributions: [
                  "Participated in data preparation, exploratory analysis, and forecasting model development.",
                  "Contributed to interpreting demand patterns and evaluating forecasting performance.",
                  "Supported the development and documentation of the medicine demand forecasting system.",
                ],

                outcomes: [
                  "Identified five Class A medicine categories accounting for approximately 74% of overall medicine demand.",
                  "Developed category-specific forecasting models for Anti-Colds, Analgesic, Antibiotic, Anti-Pyretic, and Mucolytic.",
                  "Produced an interactive dashboard presenting medicine consumption trends, forecasting results, and inventory planning insights.",
                ],

              },
              {
                title: "Netflix Content Analytics",
                images: [
                  "/projects/netflix-analytics/screenshot-1.png",
                  "/projects/netflix-analytics/screenshot-2.png",
                ], // Add paths here when your screenshots are ready
                subtitle: "Interactive Power BI Dashboard",
                category: "Business Intelligence",
                description:
                  "Developed a relational data model supporting interactive Power BI reports analyzing Netflix content trends, including genres, ratings, runtime, and movie versus TV show composition.",
                technologies: [
                  "Power BI",
                  "DAX",
                  "Star Schema",
                  "Data Modeling",
                ],

                objectives: [
                  "Analyze Netflix content data to identify patterns in content distribution, genres, ratings, and runtime.",
                  "Develop an interactive Power BI dashboard to present meaningful insights into the Netflix content catalog.",
                  "Apply data modeling and visualization techniques to support exploratory analysis and reporting.",
                ],

                methodology: [
                  "Prepared and organized the Netflix dataset for analysis and reporting.",
                  "Developed a relational data model using a star schema to structure the dataset.",
                  "Created DAX measures to calculate relevant content metrics and support dashboard visualizations.",
                  "Designed interactive Power BI reports to explore content trends, genre distribution, ratings, and movie versus TV show composition.",
                  "Organized visualizations and interactive filters to make the dashboard easier to navigate and interpret.",
                ],

                contributions: [
                  "Contributed to data preparation and relational data modeling.",
                  "Developed Power BI visualizations and analytical measures for content exploration.",
                  "Participated in dashboard design and the interpretation of content-related insights.",
                ],

                outcomes: [
                  "Produced an interactive Power BI dashboard presenting Netflix content trends and distribution.",
                  "Implemented a structured data model supporting analytical measures and visualizations.",
                  "Presented insights into content composition, genre patterns, ratings, and runtime characteristics.",
                ],

              },
              {
                title: "Coffee Motto Sales Dashboard",
                images: [
                  "/projects/coffee-motto/screenshot-1.png",
                ], // Add paths here when your screenshots are ready
                subtitle: "Sales Performance Analytics",
                category: "Business Analytics",
                description:
                  "Led the development of an Excel dashboard analyzing sales performance, revenue trends, customer purchasing patterns, and top-performing products to identify business opportunities.",
                technologies: [
                  "Microsoft Excel",
                  "Pivot Tables",
                  "Pivot Charts",
                  "Sales Analytics",
                ],

                objectives: [
                  "Analyze coffee shop sales data to identify revenue trends, customer purchasing patterns, and product performance.",
                  "Develop an interactive Excel dashboard to monitor key sales metrics and business performance.",
                  "Transform raw sales records into meaningful visualizations that support data-driven business decisions.",
                ],

                methodology: [
                  "Prepared and organized historical sales records for analysis using Microsoft Excel.",
                  "Analyzed revenue, transaction patterns, and product-level sales performance.",
                  "Used Pivot Tables to summarize sales data and calculate relevant business metrics.",
                  "Created Pivot Charts to visualize sales trends, product performance, and purchasing patterns.",
                  "Designed an interactive dashboard to consolidate key sales indicators and analytical findings.",
                ],

                contributions: [
                  "Led the development of the Excel-based sales analytics dashboard.",
                  "Contributed to data preparation, analysis, and the organization of sales performance metrics.",
                  "Designed dashboard visualizations to communicate business insights clearly and effectively.",
                ],

                outcomes: [
                  "Developed an interactive Excel dashboard consolidating sales performance indicators.",
                  "Presented visualizations highlighting revenue trends, customer purchasing behavior, and top-performing products.",
                  "Produced analytical insights to help identify sales patterns and potential business opportunities.",
                ],

              },
            ].map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
               
                {/* Project Preview Image */}
                <div className="relative aspect-video overflow-hidden border-b border-slate-200/60 bg-[#E8EEF5]">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Information */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#2563EB]">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-semibold text-[#0F172A]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#64748B]">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 flex-1 text-sm leading-7 text-[#64748B]">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-200 bg-[#E8EEF5] px-3 py-1.5 text-xs text-[#475569]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Open Project Details */}
                  <div className="mt-7 border-t border-slate-200/60 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="rounded-md text-sm font-medium text-[#2563EB] transition hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    >
                      View Project Details →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section
        id="certifications"
        className="scroll-mt-24 border-t border-slate-200/60 bg-[#F8FAFC] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#2563EB]">
            Continuous learning
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Certifications <span className="text-[#2563EB]">& Training.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#64748B]">
            Professional certifications and training programs
            that reflect my continuous development in data analytics,
            artificial intelligence, and information technology.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IT Specialist — Artificial Intelligence",
                issuer: "Pearson VUE",
                date: "October 2026",
                category: "Artificial Intelligence",
              },
              {
                title: "Data Analytics Essentials",
                issuer: "Cisco Networking Academy",
                date: "October 2026",
                category: "Data Analytics",
              },
              {
                title: "Industrial Networking Essentials",
                issuer: "Cisco Networking Academy",
                date: "August 2026",
                category: "Networking",
              },
              {
                title: "Salesforce Virtual Internship Program 2025",
                issuer: "SmartBridge",
                date: "April 2026",
                category: "Virtual Internship",
              },
              {
                title: "Network Addressing and Basic Troubleshooting",
                issuer: "Cisco Networking Academy",
                date: "March 2025",
                category: "Networking",
              },
            ].map((certificate) => (
              <article
                key={certificate.title}
                className="flex flex-col rounded-2xl border border-slate-200/60 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                {/* Certificate Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-[#2563EB]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2563EB]"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" />
                  </svg>
                </div>

                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#2563EB]">
                  {certificate.category}
                </p>

                <h3 className="text-lg font-semibold leading-7 text-[#0F172A]">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-sm text-[#64748B]">
                  {certificate.issuer}
                </p>

                <div className="mt-auto pt-8">
                  <div className="border-t border-slate-200/60 pt-4">
                    <p className="text-xs text-[#64748B]">
                      Issued: {certificate.date}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      
      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-200/60 bg-[#F1F5F9] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#2563EB]">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Let's <span className="text-[#2563EB]">Connect.</span>
          </h2>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
            {/* Left: Introduction */}
            <div>
              <h3 className="mb-5 text-2xl font-semibold">
                Let's turn ideas into meaningful solutions.
              </h3>

              <p className="max-w-lg leading-8 text-[#64748B]">
                I'm always interested in opportunities to learn,
                collaborate, and contribute to projects involving
                data analytics, business intelligence, and
                information technology.
              </p>

              <p className="mt-5 max-w-lg leading-8 text-[#64748B]">
                Whether you have a project in mind, an internship
                opportunity, or simply want to connect professionally,
                feel free to reach out through any of the platforms
                listed here.
              </p>

              <a
                href="mailto:tajelliotgomez@gmail.com"
                className="mt-8 inline-flex rounded-lg bg-[#2563EB] px-7 py-3 font-semibold text-[#0F172A] transition hover:bg-blue-700"
              >
                Send Me an Email
              </a>
            </div>

            {/* Right: Contact Cards */}
            <div className="grid gap-4">
              {[
                {
                  label: "Email",
                  value: "tajelliotgomez@gmail.com",
                  href: "mailto:tajelliotgomez@gmail.com",
                },
                {
                  label: "LinkedIn",
                  value: "Taj Elliot Gomez",
                  href: "https://www.linkedin.com/in/taj-elliot-gomez-b4268a36a",
                },
                {
                  label: "GitHub",
                  value: "Taj Elliot Gomez",
                  href: "https://github.com/tojiyoiz",
                },
                {
                  label: "Facebook",
                  value: "Taj Elliot Gomez",
                  href: "https://www.facebook.com/tajelliot.gomez",
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-xl border border-slate-200/60 bg-white p-5 transition hover:border-blue-500/40"
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#2563EB]">
                    {contact.label}
                  </p>

                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="break-words text-sm font-medium text-[#334155] transition hover:text-[#1D4ED8]"
                    >
                      {contact.value} ↗
                    </a>
                  ) : (
                    <p className="text-sm text-[#64748B]">
                      {contact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
    <ProjectModal
      project={selectedProject}
      onClose={() => setSelectedProject(null)}
    />
    </>
  );
}
