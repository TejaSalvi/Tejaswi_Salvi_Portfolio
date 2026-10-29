"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const experience = [
  {
    period: "Oct 2021 — Jun 2026",
    company: "BNP Paribas Bank",
    role: "Senior Software Developer",
    bullets: [
      "Developed enterprise React and TypeScript applications supporting more than 5,000 internal users.",
      "Integrated REST APIs for secure banking workflows and government ID verification.",
      "Improved application performance by 40% through optimisation and code quality improvements.",
      "Contributed to CI/CD delivery using Jenkins, Git, SonarQube and NexusIQ.",
    ],
  },
  {
    period: "May 2020 — Sep 2021",
    company: "Belgium Rail (SNCB/NMBS)",
    role: "Senior Software Developer",
    bullets: [
      "Built and maintained jobs.belgiantrain.be, the public Belgian Rail recruitment site.",
      "Developed scalable interfaces and reusable components aligned with the NMBS design system.",
      "Improved accessibility, responsiveness and rendering performance.",
    ],
  },
  {
    period: "May 2017 — Apr 2020",
    company: "HDFC Bank",
    role: "Senior Software Engineer / Team Lead",
    bullets: [
      "Led frontend development across multiple banking products, including NetBanking.",
      "Built more than 40 reusable UI components, improving development velocity by 30%.",
      "Established coding standards and mentored engineers through code reviews.",
    ],
  },
  {
    period: "May 2016 — Mar 2017",
    company: "IDFC Bank",
    role: "Developer / Production Support",
    bullets: [
      "Provided production support for the IMPS application and monitored application logs.",
      "Troubleshot performance issues, implemented patches and performed root-cause analysis.",
      "Worked with SQL databases to investigate application failures.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend engineering",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Redux Toolkit", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Architecture & performance",
    skills: ["SSR", "SSG", "Code splitting", "Core Web Vitals", "Accessibility", "Distributed systems", "Event-driven architecture"],
  },
  {
    title: "Testing & delivery",
    skills: ["Jest", "React Testing Library", "Playwright", "Cypress", "Jenkins", "Git", "SonarQube"],
  },
  {
    title: "Backend & AI",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "GraphQL", "PostgreSQL", "OpenAI APIs", "Claude Code", "GitHub Copilot"],
  },
];

const personalProjects = [
  {
    title: "Personal Portfolio & Technical Blog",
    description:
      "A responsive, high-performance portfolio and blog built with modern React and Next.js architecture, with a focus on SEO and accessibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI-Powered Developer Productivity Tools",
    description:
      "Experiments with AI agents, prompt engineering and automation workflows to accelerate code generation, documentation and development.",
    technologies: ["OpenAI", "Node.js", "TypeScript"],
  },
];

const certifications = [
  "Claude Code AI Agent Certification (2026)",
  "GitHub Copilot Professional Certification (2026)",
];

const navigation = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Expertise", "#expertise"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="siteHeader">
        <nav className="nav shell" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Tejaswi Salvi, home">
            TS<span>.</span>
          </a>
          <div id="mobile-navigation" className={`navLinks${menuOpen ? " isOpen" : ""}`}>
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <a className="navCta" href="#contact">
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            className="menuButton"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow"><span className="statusDot" /> Senior Frontend Engineer</p>
          <h1>
            Thoughtful frontend.
            <br />
            <span>Built to scale.</span>
          </h1>
          <p className="heroLead">
            I build reliable, accessible web applications with React and TypeScript.
            Over 10 years of experience delivering enterprise software across
            financial services and transport.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#work">
              View selected work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="button buttonSecondary" href="/Tejaswi_Salvi_Resume.pdf" download>
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
          <div className="location">
            <MapPin size={16} aria-hidden="true" />
            <span>France <span className="locationDivider">/</span> Europe</span>
          </div>
        </div>
        <aside className="heroAside" aria-label="Professional summary">
          <p className="asideLabel">PROFILE</p>
          <p className="asideTitle">Senior frontend development for complex products.</p>
          <div className="asideRule" />
          <div className="asideStat">
            <strong>10+</strong>
            <span>years in software development</span>
          </div>
          <div className="asideStat">
            <strong>4</strong>
            <span>enterprise teams and organisations</span>
          </div>
          <div className="asideStat">
            <strong>EU</strong>
            <span>based in France</span>
          </div>
        </aside>
      </section>

      <section id="work" className="section shell">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow sectionEyebrow">01 / Selected work</p>
            <h2>Making complex<br />work feel simple.</h2>
          </div>
          <p className="sectionIntro">
            Enterprise software should be dependable for the people who use it
            and maintainable for the teams who build it.
          </p>
        </div>

        <article className="caseStudy">
          <div className="caseVisual">
            <div className="caseVisualHeader">
              <span className="caseMark">BP</span>
              <span>Digital banking · Secure workflows</span>
            </div>
            <div className="caseMockup">
              <div className="mockupTop"><span /><span /><span /><i>banking application</i></div>
              <div className="mockupBody">
                <div className="mockupNav"><b>BP</b><span /><span /><span /><span /></div>
                <div className="mockupContent">
                  <small>DIGITAL BANKING</small>
                  <strong>Secure workflows</strong>
                  <div className="mockupCards"><span /><span /><span /></div>
                  <div className="mockupChart"><i /><i /><i /><i /><i /><i /><i /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="caseDetails">
            <div className="caseMeta">
              <span className="caseTag">BNP Paribas</span>
              <span>Oct 2021 — Jun 2026</span>
            </div>
            <h3>Enterprise Banking Applications</h3>
            <p>
              Enterprise banking applications supporting more than 5,000 internal
              users, with secure workflows and government ID verification.
            </p>
            <div className="contribution">
              <p className="eyebrow sectionEyebrow">Contribution</p>
              <ul>
                <li><Check size={15} aria-hidden="true" /> React and TypeScript applications used by 5,000+ colleagues</li>
                <li><Check size={15} aria-hidden="true" /> REST integrations for secure banking and ID verification workflows</li>
                <li><Check size={15} aria-hidden="true" /> CI/CD delivery with Jenkins and quality gates</li>
              </ul>
            </div>
            <div className="caseOutcome">
              <strong>40%</strong>
              <span>performance improvement</span>
            </div>
            <div className="tagList" aria-label="Technologies used">
              {["React", "TypeScript", "Redux Toolkit", "REST APIs", "Jenkins", "SonarQube"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </article>
        <p className="caseNote">
          Project details are kept high-level to respect enterprise confidentiality.
        </p>
      </section>

      <section id="experience" className="section sectionTint">
        <div className="shell">
          <div className="sectionHeading">
            <div>
              <p className="eyebrow sectionEyebrow">02 / Experience</p>
              <h2>Experience across<br />high-stakes teams.</h2>
            </div>
            <p className="sectionIntro">
              A career spanning banking and public transport, combining hands-on
              frontend engineering with technical leadership and production support.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timelineItem" key={item.company}>
                <p className="timelinePeriod">{item.period}</p>
                <div className="timelineMarker" aria-hidden="true"><span /></div>
                <div className="timelineContent">
                  <div className="jobHeading">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}><Check size={14} aria-hidden="true" />{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section shell">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow sectionEyebrow">03 / Expertise</p>
            <h2>Strong foundations.<br />Practical breadth.</h2>
          </div>
          <p className="sectionIntro">
            Deep frontend experience, paired with performance, testing, backend
            and AI-assisted development skills.
          </p>
        </div>
        <div className="expertiseGrid">
          {skillGroups.map((group, index) => (
            <article className="expertiseCard" key={group.title}>
              <span className="expertiseIndex">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="tagList">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section sectionTint">
        <div className="shell">
          <div className="sectionHeading">
            <div>
              <p className="eyebrow sectionEyebrow">04 / Personal projects</p>
              <h2>Building beyond<br />the day job.</h2>
            </div>
            <p className="sectionIntro">
              Personal work exploring modern web experiences and practical AI-assisted
              developer workflows.
            </p>
          </div>
          <div className="projectsGrid">
            {personalProjects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <span className="expertiseIndex">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tagList" aria-label="Technologies used">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section shell">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow sectionEyebrow">05 / Certifications</p>
            <h2>Learning in motion.</h2>
          </div>
          <p className="sectionIntro">
            Recent certifications in AI-assisted development and developer productivity.
          </p>
        </div>
        <div className="certificationGrid">
          {certifications.map((certification) => (
            <article className="certificationCard" key={certification}>
              <span className="certificationMark" aria-hidden="true"><Check size={17} /></span>
              <h3>{certification}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contactSection">
        <div className="shell contactInner">
          <div>
            <p className="eyebrow sectionEyebrow">06 / Contact</p>
            <h2>Let&apos;s build something<br /><span>that lasts.</span></h2>
            <p className="contactCopy">Open to a conversation about senior frontend engineering opportunities.</p>
          </div>
          <a className="contactButton" href="mailto:tejusalvi592@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>tejusalvi592@gmail.com</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <a href="#top" className="brand" aria-label="Back to top">TS<span>.</span></a>
        <p>© 2026 Tejaswi Salvi</p>
        <div className="socialLinks">
          <a href="mailto:tejusalvi592@gmail.com" aria-label="Email Tejaswi"><Mail size={17} /></a>
          <a href="https://www.linkedin.com/in/tejaswi-salvi-aa1b48b0/" aria-label="LinkedIn profile" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="https://github.com/TejaSalvi" aria-label="GitHub profile" target="_blank" rel="noreferrer"><Github size={17} /></a>
        </div>
      </footer>
    </main>
  );
}
