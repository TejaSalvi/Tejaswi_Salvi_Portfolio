"use client";

import { ArrowUpRight, Check, Code2, Download, Github, Linkedin, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const skills = [
  "React", "TypeScript", "Next.js", "NX Monorepo", "Redux Toolkit", "GraphQL", "Node.js", "Java",
  "Tailwind CSS", "Material UI", "Playwright", "Jest", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "PostgreSQL"
];

const experience = [
   {
    period: "2021 — 2026",
    company: "BNP Paribas Bank",
    role: "Senior Developer",
    bullets: ["Designed enterprise-scale React applications using TypeScript, React Hooks and Redux Toolkit.", "Built reusable UI component libraries with Tailwind CSS and Material UI.", "Migrated legacy applications toward modern React architecture, improving maintainability by 40%.", "Integrated GraphQL and REST APIs with Java Spring Boot teams."]
  },
  {
    period: "2020 — 2021",
    company: "Belgium Rail (SNCB/NMBS)",
    role: "Senior Developer",
    bullets: ["Led a team of four frontend developers.", "Designed enterprise Single Page Applications using AngularJS.", "Established coding standards and best practices.", "Improved application performance through optimization.", "Worked closely with UX designers and product owners."]
  },
  {
    period: "2017 — 2020",
    company: "HDFC Bank",
    role: "Developer Team Lead",
    bullets: ["Led frontend delivery and reusable UI component development.", "Improved application performance through focused optimization.", "Partnered with product and UX stakeholders on enterprise applications."]
  },

  {
    period: "2016 — 2017",
    company: "IDFC Bank",
    role: "IMPS Application Production Support",
    bullets: ["Troubleshot frontend performance issues and optimized existing web applications.", "Monitored application logs, identified errors and deployed necessary patches.", "Worked on SQL databases and performed root cause analysis of application failures."]
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  console.log('AI review test 2');
  return (
    <main>
      <nav className="nav shell">
        <a href="#top" className="brand">Tejaswi Salvi<span>.</span></a>
        <div className={`navlinks ${open ? "show" : ""}`}>
          {[["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <a className="navCta" href="mailto:tejusalvi592@gmail.com">Let&apos;s talk <ArrowUpRight size={15}/></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow"><span className="dot"/> Senior React & Full Stack Developer</div>
        <h1>Building software<br/><span>that scales.</span></h1>
        <p className="lede">10+ years delivering enterprise-grade web applications for banking and financial services — from frontend architecture to cloud-native delivery.</p>
        <div className="heroActions">
          <a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
          <a className="button ghost" href="/Tejaswi_Salvi_Resume.pdf" download><Download size={16}/> Resume</a>
        </div>
        <div className="heroMeta"><span><MapPin size={14}/> France | EU (Remote)</span><span>React · TypeScript · Next.js · JAVA</span></div>
      </section>

      <section className="marquee" aria-label="Technology stack"><div className="marqueeInner">{skills.slice(0,12).map((s) => <span key={s}>{s}</span>)}</div></section>

      <section id="work" className="section shell">
        <div className="sectionHead"><div><p className="kicker">01 / Featured work</p><h2>Enterprise, but<br/>human.</h2></div><p className="sectionIntro">Secure, high-performance applications built for teams where reliability, maintainability and thoughtful UX matter.</p></div>
        <article className="projectCard">
          <div className="projectVisual"><div className="gridGlow"/><div className="window"><div className="windowBar"><i/><i/><i/><b>employee-portal</b></div><div className="dashboard"><aside><div className="miniLogo">EB</div><span/><span/><span/><span/></aside><div className="dashMain"><div className="dashTop"><div><small>GOOD MORNING</small><strong>Easy Banking</strong></div><div className="avatar">TS</div></div><div className="stats"><div><small>ACTIVE ACCOUNTS</small><strong>12,480</strong></div><div><small>OPERATIONS</small><strong>8,942</strong></div><div><small>UPTIME</small><strong>99.99%</strong></div></div><div className="chart"><span style={{height:"34%"}}/><span style={{height:"48%"}}/><span style={{height:"40%"}}/><span style={{height:"68%"}}/><span style={{height:"57%"}}/><span style={{height:"82%"}}/><span style={{height:"72%"}}/><span style={{height:"94%"}}/></div></div></div></div></div>
          <div className="projectInfo"><div className="projectTop"><span className="pill">BNP Paribas</span><span>2021 — Present</span></div><h3>Easy Banking Employee Portal</h3><p>Secure internal banking platform used by employees for digital banking services, account management and financial operations.</p><div className="impact"><div><strong>40%</strong><span>better maintainability</span></div><div><strong>∞</strong><span>scalable architecture</span></div></div><div className="chips">{["React", "Next.js", "TypeScript", "NX", "GraphQL", "AWS", "Kubernetes"].map(x => <span key={x}>{x}</span>)}</div></div>
        </article>
      </section>

      <section id="experience" className="section shell alt"><div className="sectionHead"><div><p className="kicker">02 / Experience</p><h2>A decade of<br/>shipping.</h2></div><p className="sectionIntro">Technical leadership across banking, rail and enterprise platforms, with a focus on scalable frontend architecture.</p></div><div className="timeline">{experience.map((item) => <div className="timelineItem" key={item.company}><div className="time">{item.period}</div><div className="line"><span/></div><div className="job"><div className="jobTitle"><div><h3>{item.role}</h3><p>{item.company}</p></div><ArrowUpRight size={18}/></div><ul>{item.bullets.map(b => <li key={b}><Check size={14}/>{b}</li>)}</ul></div></div>)}</div></section>

      <section id="skills" className="section shell"><div className="sectionHead"><div><p className="kicker">03 / Toolkit</p><h2>Built for the<br/>modern stack.</h2></div><p className="sectionIntro">Frontend architecture, testing, DevOps and cloud infrastructure — with enough Java backend knowledge to collaborate effectively across the stack.</p></div><div className="skillGrid">{skills.map((skill, i) => <div className="skill" key={skill}><span>{String(i+1).padStart(2,"0")}</span><strong>{skill}</strong></div>)}</div></section>

      <section id="contact" className="contact shell"><div className="contactBox"><div><p className="kicker">04 / Contact</p><h2>Have a complex<br/><span>problem to solve?</span></h2><p>Let&apos;s build something reliable, elegant and scalable.</p></div><a className="contactButton" href="mailto:tejusalvi592@gmail.com"><Mail size={18}/> tejusalvi592@gmail.com <ArrowUpRight size={18}/></a></div></section>

      <footer className="footer shell"><div className="brand">TS<span>.</span></div><div>© 2026 Tejaswi Salvi</div><div className="social"><a href="mailto:tejusalvi592@gmail.com" aria-label="Email"><Mail size={17}/></a><a href="https://www.linkedin.com/in/tejaswi-salvi-aa1b48b0/" aria-label="LinkedIn"><span className="socialPlaceholder" title="Add your LinkedIn URL from your resume">in</span></a><a href="https://github.com/TejaSalvi" aria-label="GitHub"><span className="socialPlaceholder" title="Add your GitHub URL from your resume"><Github size={17}/></span></a></div></footer>
    </main>
  );
}
