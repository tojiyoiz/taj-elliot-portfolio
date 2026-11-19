"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal, { type Project } from "../components/ProjectModal";

const projects: Project[] = [
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
                title: "Coffee Shop Sales Dashboard",
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
            ];
const skills = [
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
              
            ];
const certificates = [
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
            ];
const contacts = [
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
              ];

const arcadeGames = [
  { name: "FORECAST FACTORY", number: "01", color: "cyan", genre: "PREDICTIVE ANALYTICS", tagline: "Predict the next wave of demand." },
  { name: "STREAMING INSIGHTS", number: "02", color: "purple", genre: "BUSINESS INTELLIGENCE", tagline: "Decode the streaming universe." },
  { name: "COFFEE COUNTER", number: "03", color: "gold", genre: "BUSINESS ANALYTICS", tagline: "Find the story behind every sale." },
] as const;

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const navigation = [
    { name: "Profile", href: "#about" },
    { name: "Inventory", href: "#skills" },
    { name: "Games", href: "#projects" },
    { name: "Achievements", href: "#certifications" },
    { name: "Connect", href: "#contact" },
  ];
  return (
    <main className="arcade-background min-h-screen text-[#F8FAFC]">
      <header className="sticky top-0 z-50 border-b border-[#334155]/70 bg-[#0B1020]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:px-8">
          <a href="#home" className="arcade-logo flex items-center gap-3 text-lg font-black tracking-wider" aria-label="TEG Arcade home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/60 bg-cyan-400/10 text-xl text-cyan-300">T.</span>
            <span>TEG<span className="text-cyan-300">/</span>ARCADE</span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {navigation.map((item) => <a key={item.name} href={item.href} className="text-xs font-bold uppercase tracking-[.14em] text-slate-300 transition hover:text-cyan-300">{item.name}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="arcade-button-outline hidden px-4 py-2 text-xs sm:inline-flex">RESUME ↗</a>
            <button type="button" className="arcade-button-outline px-3 py-2 text-xs" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle arcade navigation panel" aria-controls="arcade-navigation-panel" aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? "CLOSE ✕" : "MENU ☰"}</button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div id="arcade-navigation-panel" className="absolute left-0 right-0 top-full z-50 border-b border-cyan-400/30 bg-[#0B1020]/98 px-5 py-6 shadow-[0_24px_65px_rgba(0,0,0,.65)] backdrop-blur-xl md:px-8">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#131D35] p-5 shadow-[0_0_40px_rgba(34,211,238,.08)] sm:p-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[.3em] text-cyan-300">SYSTEM // NAVIGATION</p>
                  <h2 className="mt-2 text-xl font-black uppercase tracking-wider text-white">SELECT YOUR DESTINATION</h2>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold tracking-widest text-emerald-300">● SYSTEM ONLINE</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "PLAYER PROFILE", detail: "About me & education", icon: "◉", href: "#about", color: "cyan" },
                  { name: "SKILL INVENTORY", detail: "Tools & capabilities", icon: "⌘", href: "#skills", color: "purple" },
                  { name: "GAME SELECTION", detail: "Explore featured projects", icon: "▶", href: "#projects", color: "gold" },
                  { name: "ACHIEVEMENTS", detail: "Certifications unlocked", icon: "✦", href: "#certifications", color: "purple" },
                  { name: "CONNECT", detail: "Get in touch", icon: "↗", href: "#contact", color: "cyan" },
                ].map((item, index) => (
                  <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#18243D] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-[#20324F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
                    <span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-xl font-bold ${item.color === "gold" ? "border-amber-400/30 bg-amber-400/10 text-amber-300" : item.color === "purple" ? "border-violet-400/30 bg-violet-400/10 text-violet-300" : "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"}`}>{item.icon}</span>
                    <span className="min-w-0 flex-1"><span className="block text-[10px] font-bold tracking-widest text-slate-400">LEVEL {String(index + 1).padStart(2, "0")}</span><span className="mt-1 block text-xs font-black tracking-wide text-white group-hover:text-cyan-200">{item.name}</span><span className="mt-1 block text-xs text-slate-400">{item.detail}</span></span>
                    <span aria-hidden="true" className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300">→</span>
                  </a>
                ))}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 transition hover:border-amber-300/70 hover:bg-amber-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
                  <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/30 text-xl text-amber-300">▤</span>
                  <span className="flex-1"><span className="block text-[10px] font-bold tracking-widest text-amber-300">BONUS FILE</span><span className="mt-1 block text-xs font-black tracking-wide text-white">PLAYER RESUME</span><span className="mt-1 block text-xs text-slate-300">Open my latest resume</span></span><span aria-hidden="true" className="text-amber-300">↗</span>
                </a>
              </div>
              <p className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-slate-500">Choose a destination to continue exploring</p>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 lg:min-h-[780px] lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-[.2em] text-cyan-300"><span className="status-pulse h-2 w-2 rounded-full bg-emerald-400"/> SYSTEM ONLINE · PLAYER 01</div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-violet-300">WELCOME TO THE ANALYTICS ARCADE</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">DATA IS MY <span className="arcade-gradient-text">PLAYGROUND.</span></h1>
          <p className="mt-7 max-w-xl text-lg font-semibold text-white">Hey, I’m <span className="text-cyan-300">Taj Elliot Gomez.</span></p>
          <p className="mt-3 max-w-xl text-base leading-8 text-slate-300">IT & Data Analytics student turning complex data into meaningful insights, interactive dashboards, and practical solutions. Pick a mission and explore my work.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="arcade-button-primary">▶ START EXPLORING</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="arcade-button-outline">↗ VIEW RESUME</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-400"><span>◈ 03 MISSIONS</span><span>✦ 05 ACHIEVEMENTS</span><span>⌘ DATA + TECH</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-cyan-400/10 blur-3xl"/>
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/35 bg-[#15243B] p-3 shadow-[0_0_65px_rgba(34,211,238,.12)]">
            <div className="mb-3 flex items-center justify-between px-2 text-[10px] font-bold tracking-[.2em] text-cyan-300"><span>PLAYER PROFILE // 001</span><span className="text-emerald-300">● ACTIVE</span></div>
            <div className="relative aspect-[4/4.1] overflow-hidden rounded-2xl bg-[#243550]"><Image src="/profile.jpg" alt="Professional portrait of Taj Elliot Gomez" fill priority sizes="(max-width: 1024px) 100vw, 430px" className="object-cover"/><div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1020]/90 to-transparent"/></div>
            <div className="flex items-center justify-between gap-3 px-2 pt-4"><div><p className="text-lg font-black">TAJ ELLIOT GOMEZ</p><p className="text-xs text-slate-400">DATA ANALYTICS · IT</p></div><span className="rounded-lg border border-violet-400/40 bg-violet-400/10 px-3 py-2 text-xs font-bold text-violet-200">P01</span></div>
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-xl border border-amber-300/50 bg-[#18243D] px-4 py-3 text-xs font-black text-amber-300 shadow-xl">★ READY TO EXPLORE</div>
        </div>
      </section>

      <div className="arcade-marquee border-y border-cyan-400/15 bg-[#101A30] py-3"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-2 px-6 text-[10px] font-bold tracking-[.22em] text-slate-400"><span>◆ EXPLORE THE DATA</span><span>◆ UNLOCK THE INSIGHTS</span><span>◆ COMPLETE THE MISSION</span><span>◆ BUILD WHAT MATTERS</span></div></div>

      <section id="about" className="arcade-section scroll-mt-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="01 / CHARACTER SELECT" title="PLAYER PROFILE" description="The person behind the dashboards, models, and missions."/><div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><div className="arcade-panel p-7 md:p-9"><p className="mb-5 text-xs font-bold tracking-[.22em] text-cyan-300">// ABOUT THE PLAYER</p><h3 className="mb-5 text-2xl font-bold">Bridging data, technology, and insights.</h3><div className="space-y-4 leading-8 text-slate-300"><p>I am a fourth-year Bachelor of Science in Information Technology student specializing in Data and Business Analytics at Bulacan State University.</p><p>My academic and project experiences have equipped me with practical skills in data preprocessing, exploratory data analysis, dashboard development, predictive modeling, and business intelligence using tools such as Python, Power BI, and Excel.</p><p>I am passionate about transforming complex datasets into meaningful insights that support informed decision-making. I continuously seek opportunities to strengthen my analytical and technical skills through hands-on projects and real-world applications.</p></div></div><div className="grid gap-4">{[{label:"HOME BASE",title:"Bulacan State University",desc:"BS Information Technology · Data and Business Analytics · Expected Graduation: 2027",symbol:"⌂"},{label:"SPECIAL ABILITY",title:"Data Analytics & BI",desc:"Data preprocessing, statistical analysis, interactive dashboards, predictive modeling, and decision support.",symbol:"◈"},{label:"SECONDARY SKILLS",title:"Programming & Databases",desc:"Python, Java, JavaScript, SQL, relational databases, and web development fundamentals.",symbol:"⌘"}].map((item)=><div key={item.label} className="arcade-panel flex gap-4 p-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-2xl text-violet-300">{item.symbol}</div><div><p className="mb-2 text-[10px] font-bold tracking-[.2em] text-violet-300">{item.label}</p><h3 className="font-bold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{item.desc}</p></div></div>)}</div></div></div></section>

      <section id="skills" className="arcade-section scroll-mt-24 bg-[#0D1528]/70"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="02 / EQUIPMENT LOADOUT" title="SKILL INVENTORY" description="Select a category to inspect the tools and techniques in my analytics toolkit."/><div className="mt-10 grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><div className="grid gap-3">{skills.map((category,index)=><button key={category.title} type="button" onClick={()=>setActiveSkill(index)} aria-pressed={activeSkill===index} className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition ${activeSkill===index ? "border-cyan-400/60 bg-cyan-400/10 text-white shadow-[0_0_24px_rgba(34,211,238,.08)]" : "border-slate-700/80 bg-[#131D35] text-slate-300 hover:border-slate-500"}`}><span className="flex items-center gap-4"><span className="font-mono text-xs text-cyan-300">0{index+1}</span><span className="font-bold">{category.title}</span></span><span className="text-cyan-300">{activeSkill===index ? "◆" : "→"}</span></button>)}</div><div className="arcade-panel min-h-[350px] p-7 md:p-9"><p className="mb-3 text-xs font-bold tracking-[.2em] text-cyan-300">INVENTORY SLOT 0{activeSkill+1}</p><h3 className="text-2xl font-black">{skills[activeSkill].title}</h3><p className="mt-2 text-sm text-slate-400">Tools and techniques gained through coursework and hands-on projects.</p><div className="mt-8 flex flex-wrap gap-3">{skills[activeSkill].skills.map(skill=><span key={skill} className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-slate-200">✧ {skill}</span>)}</div><p className="mt-10 border-t border-slate-700 pt-5 font-mono text-xs text-slate-500">STATUS: EQUIPPED · READY FOR MISSIONS</p></div></div></div></section>

      <section id="projects" className="arcade-section scroll-mt-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="03 / CHOOSE YOUR MISSION" title="GAME SELECTION" description="Three real-world analytics projects. Choose a station to inspect the mission briefing, screenshots, methods, and outcomes."/><div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{projects.map((project,index)=>{const game=arcadeGames[index];return <article key={project.title} className={`arcade-game-card arcade-${game.color} group flex flex-col overflow-hidden rounded-2xl border bg-[#131D35]`}><div className="flex items-center justify-between border-b border-slate-700/70 px-5 py-4"><span className="font-mono text-xs font-bold tracking-[.18em] text-slate-300">GAME {game.number}</span><span className="text-[10px] font-bold tracking-widest text-slate-400">● MISSION AVAILABLE</span></div><div className="relative aspect-video overflow-hidden bg-[#E8EEF5]"><Image src={project.images[0]} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-contain p-3 transition duration-500 group-hover:scale-[1.04]"/></div><div className="flex flex-1 flex-col p-6"><p className="mb-2 text-[10px] font-bold tracking-[.22em] text-slate-400">{game.genre}</p><h3 className="text-2xl font-black tracking-tight text-white">{game.name}</h3><p className="mt-1 text-sm font-medium text-slate-300">{project.title}</p><p className="mt-4 text-sm font-medium text-slate-400">{game.tagline}</p><p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(t=><span key={t} className="rounded-md border border-slate-700 bg-[#1C2B45] px-2.5 py-1.5 text-[11px] text-slate-300">{t}</span>)}</div><button type="button" onClick={()=>setSelectedProject(project)} className="arcade-mission-button mt-7 w-full rounded-lg px-4 py-3 text-sm font-black tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label={`Enter mission: ${project.title}`}>▶ ENTER MISSION</button></div></article>})}</div></div></section>

      <section id="certifications" className="arcade-section scroll-mt-24 bg-[#0D1528]/70"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="04 / TROPHY ROOM" title="UNLOCKED ACHIEVEMENTS" description="Certifications and training earned along the journey — real credentials, no grinding required."/><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{certificates.map((certificate,index)=><article key={certificate.title} className="arcade-panel group flex flex-col p-6 transition hover:-translate-y-1 hover:border-amber-300/50"><div className="mb-6 flex items-center justify-between"><span className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10 text-3xl text-amber-300">★</span><span className="rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-[10px] font-bold tracking-widest text-emerald-300">UNLOCKED</span></div><p className="mb-3 text-[10px] font-bold tracking-[.2em] text-amber-300">ACHIEVEMENT 0{index+1} · {certificate.category}</p><h3 className="text-lg font-bold leading-7">{certificate.title}</h3><p className="mt-3 text-sm text-slate-400">{certificate.issuer}</p><div className="mt-auto border-t border-slate-700/70 pt-5 text-xs text-slate-400" style={{marginTop:"2rem"}}>EARNED: {certificate.date}</div></article>)}</div></div></section>

      <section id="contact" className="arcade-section scroll-mt-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="05 / COMMUNICATION TERMINAL" title="CONNECT WITH PLAYER" description="Have a project, internship opportunity, or idea? Open a communication channel."/><div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]"><div className="arcade-panel p-7 md:p-9"><p className="mb-4 font-mono text-xs tracking-widest text-emerald-300">● CHANNEL OPEN</p><h3 className="text-2xl font-black">LET’S BUILD SOMETHING MEANINGFUL.</h3><p className="mt-5 leading-8 text-slate-300">I’m always interested in opportunities to learn, collaborate, and contribute to projects involving data analytics, business intelligence, and information technology.</p><p className="mt-4 leading-8 text-slate-300">Whether you have a project in mind, an internship opportunity, or simply want to connect professionally, feel free to reach out.</p><a href="mailto:tajelliotgomez@gmail.com" className="arcade-button-primary mt-8">✉ SEND MESSAGE</a></div><div className="grid gap-3">{contacts.map((contact,index)=><a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className="arcade-panel group flex items-center gap-4 p-5 transition hover:border-cyan-400/50"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 font-mono text-sm text-cyan-300">0{index+1}</span><span className="min-w-0 flex-1"><span className="block text-[10px] font-bold tracking-[.2em] text-cyan-300">{contact.label.toUpperCase()}</span><span className="mt-1 block break-all text-sm text-slate-200">{contact.value}</span></span><span className="text-cyan-300 transition group-hover:translate-x-1">↗</span></a>)}</div></div></div></section>

      <footer className="border-t border-slate-700/70 bg-[#080D19] px-6 py-8"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs text-slate-400"><span className="font-bold tracking-widest text-cyan-300">TEG / ANALYTICS ARCADE</span><p>© 2026 Taj Elliot Gomez. All rights reserved.</p><a href="#home" className="hover:text-cyan-300">BACK TO TOP ↑</a></div></footer>
      <ProjectModal project={selectedProject} onClose={()=>setSelectedProject(null)}/>
    </main>
  );
}

function SectionHeading({eyebrow,title,description}:{eyebrow:string;title:string;description:string}){
  return <div><p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-cyan-300">{eyebrow}</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">{title}<span className="text-cyan-300">.</span></h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{description}</p></div>;
}
