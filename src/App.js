import React, { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowDown,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import heroArtwork from "./Assets/home-main.svg";
import aboutArtwork from "./Assets/about.png";
import resumePdf from "./Assets/Tushar Resume2.pdf";
import intelligentDataImage from "./Assets/Projects/intelligent_data_ui_1776153574776.png";
import spreadoImage from "./Assets/Projects/spreado_app_1776153602124.png";
import phishingImage from "./Assets/Projects/phishing_app_1776153618218.png";
import sceneForgeImage from "./Assets/Projects/scene_forge_1776153718458.png";
import agenticRagImage from "./Assets/Projects/agentic_rag_1776153682313.png";
import lifeAdminImage from "./Assets/Projects/life_admin_1776153732557.png";

import "./App.css";

const navigation = [
  { id: "home", label: "Home" },
  { id: "identity", label: "Identity" },
  { id: "showcase", label: "Showcase" },
  { id: "systems", label: "Systems" },
  { id: "connect", label: "Connect" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tusharpandey436",
    icon: <AiFillGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar-pandey-93aa7728a/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "X",
    href: "https://x.com/TusharPandey739?t=SjB7W5UB5eg1p3yoDwyPcg&s=09",
    icon: <AiOutlineTwitter />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tusharpandey716",
    icon: <AiFillInstagram />,
  },
];

const roles = [
  "AI Engineer & Backend Architect",
  "RAG Systems Builder",
  "LLM Orchestrator",
  "Production AI Specialist",
];

const spotlightItems = [
  "Scalable RAG Pipelines",
  "LLM Orchestration & Hybrid Retrieval",
  "FastAPI & Backend Architecture",
  "Vector Search & Agentic AI",
  "Production AI Systems",
  "Systems Design & API Engineering",
];

const skillBands = [
  {
    title: "AI & Data",
    text: "LangChain, Gemini, OpenAI, HuggingFace, Supabase, pgvector, FAISS",
  },
  {
    title: "Backend & Infra",
    text: "FastAPI, Python, Node.js, Docker, Nginx, Redis, PostgreSQL",
  },
  {
    title: "Architecture",
    text: "RAG Systems, Vector Search, LLM Orchestration, System Design",
  },
];

const principles = [
  {
    title: "Bold surfaces",
    description:
      "I prefer interfaces with a visual opinion, not flat stacks of identical cards.",
  },
  {
    title: "Useful motion",
    description:
      "Transitions should guide attention and support the story, not exist as decoration alone.",
  },
  {
    title: "Real product thinking",
    description:
      "I care about the flow between idea, implementation, usability, and what a person actually feels on the page.",
  },
];

const timeline = [
  {
    label: "Where I am now",
    heading: "B.Tech Graduate from Alliance University, Bangalore",
    body:
      "Architecting scalable RAG systems and production AI pipelines, pushing beyond proof-of-concepts into robust engineering.",
  },
  {
    label: "How I work",
    heading: "Curious, iterative, and always pushing past the first version",
    body:
      "I enjoy refining things until they feel more distinct, more intentional, and more alive than the default answer.",
  },
  {
    label: "Beyond code",
    heading: "Games, football, cricket, travelling, and energy from new ideas",
    body:
      "That mix of curiosity and movement shapes how I approach products too: expressive, fast, and never static.",
  },
];

const projects = [
  {
    title: "Agentic_RAG",
    category: "AI & Graph Models",
    year: "2024",
    image: agenticRagImage,
    isFlagship: true,
    blurb:
      "Visual orchestration of cognitive agent networks using Retrieval-Augmented Generation.",
    deepDive:
      "Orchestrating interconnected nodes of LLMs. Focuses on modular reasoning pipelines rather than simple chat loops.",
    tech: ["Python", "AI", "RAG"],
    github: "https://github.com/tusharpandey436/Agentic_RAG",
  },
  {
    title: "intelligent-data-ui",
    category: "Data Visualization",
    year: "2024",
    image: intelligentDataImage,
    blurb:
      "A dashboard interface displaying intelligent analytics data and components using a clean tech aesthetic.",
    deepDive:
      "Built with TypeScript. Aimed at making complex data accessible and beautifully presented through polished components and charts.",
    tech: ["TypeScript", "UI/UX", "Data"],
    github: "https://github.com/tusharpandey436/intelligent-data-ui",
  },
  {
    title: "Spreado_App",
    category: "Productivity",
    year: "2024",
    image: spreadoImage,
    blurb:
      "A beautiful and minimal productivity application interface modeled after dynamic spreadsheets.",
    deepDive:
      "Features a clean UI and streamlined workflow. It's meant to reduce cognitive load while managing data heavy tasks smoothly.",
    tech: ["TypeScript", "Frontend"],
    github: "https://github.com/tusharpandey436/Spreado_App",
  },
  {
    title: "PhishingApp2",
    category: "Cybersecurity",
    year: "2024",
    image: phishingImage,
    blurb:
      "A threat detection dashboard focusing on identifying and mitigating phishing attacks.",
    deepDive:
      "Built with a strong operational aesthetic. Leverages TypeScript to visualize digital security health with zero friction.",
    tech: ["TypeScript", "Security"],
    github: "https://github.com/tusharpandey436/PhishingApp2",
  },
  {
    title: "SceneForge",
    category: "3D Rendering Tooling",
    year: "2024",
    image: sceneForgeImage,
    blurb:
      "A sophisticated 3D scene generation interface and workspace for rendered graphical elements.",
    deepDive:
      "A split-pane editor concept to seamlessly build out and interact with synthetic scene environments natively on the web.",
    tech: ["Python", "3D Tooling"],
    github: "https://github.com/tusharpandey436/SceneForge",
  },
  {
    title: "life-admin-agent",
    category: "Personal Automation",
    year: "2024",
    image: lifeAdminImage,
    blurb:
      "An automated life administration tracker for schedules, events, and essential habits.",
    deepDive:
      "A Python-based architecture meant to gracefully organize personal scheduling elements, balancing aesthetic lightness with robust code.",
    tech: ["Python", "Automation"],
    github: "https://github.com/tusharpandey436/life-admin-agent",
  },
  {
    title: "Ai_Data_Fetcher",
    category: "AI Data Pipeline",
    year: "2024",
    image: null,
    gradient: "linear-gradient(135deg, #0d1f3c 0%, #00f7ff44 100%)",
    blurb:
      "Automated AI data fetching and aggregation platform pulling live data through intelligent pipelines.",
    deepDive:
      "TypeScript-powered. Features a fully modular fetcher design with clean async pipelines and real-time aggregation.",
    tech: ["TypeScript", "AI", "Automation"],
    github: "https://github.com/tusharpandey436/Ai_Data_Fetcher",
    live: "https://ai-data-fetcher.vercel.app",
  },
  {
    title: "Animated_video_maker",
    category: "Creative Tools",
    year: "2024",
    image: null,
    gradient: "linear-gradient(135deg, #1a0030 0%, #8b5cf660 100%)",
    blurb:
      "Automated animated video creation pipeline. Turns scripts and data into cinematic scenes via Python.",
    deepDive:
      "Driven by LLM-generated scene descriptions and a multi-stage rendering engine. Production-ready pipeline for non-linear video generation.",
    tech: ["Python", "LLM", "Video"],
    github: "https://github.com/tusharpandey436/Animated_video_maker",
  },
];

function App() {
  const [theme, setTheme] = useState("obsidian");
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [timeLabel, setTimeLabel] = useState("");
  const [pointer, setPointer] = useState({ x: 50, y: 20 });

  const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

    const updateClock = () => setTimeLabel(formatter.format(new Date()));
    updateClock();

    const intervalId = window.setInterval(updateClock, 60000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const sectionElements = document.querySelectorAll("[data-section]");

    if (typeof window.IntersectionObserver === "undefined") {
      sectionElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event) => {
    const { innerWidth, innerHeight } = window;
    setPointer({
      x: (event.clientX / innerWidth) * 100,
      y: (event.clientY / innerHeight) * 100,
    });
  };

  return (
    <div
      className="app-shell"
      onMouseMove={handlePointerMove}
      style={{
        "--pointer-x": `${pointer.x}%`,
        "--pointer-y": `${pointer.y}%`,
      }}
    >
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="page-glow" aria-hidden="true" />
      <div className="mesh-overlay" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">TP</span>
          <span className="brand-copy">
            <strong>Tushar Pandey</strong>
            <small>AI Engineer & Backend Architect</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() =>
            setTheme((current) =>
              current === "obsidian" ? "emberlight" : "obsidian"
            )
          }
        >
          {theme === "obsidian" ? <FiSun /> : <FiMoon />}
          <span>{theme === "obsidian" ? "Switch warm" : "Switch dark"}</span>
        </button>
      </header>

      <main>
        <section className="hero reveal is-visible" id="home" data-section>
          <div className="hero-left">
            <div className="hero-intro">
              <span className="eyebrow">
                <HiSparkles />
                Architecting Production AI — not just demos, real systems.
              </span>
              <h1>
                Intelligent systems
                <span> with edge, elegance, and energy.</span>
              </h1>
              <p className="hero-copy-text">
                I&apos;m Tushar Pandey from Uttarakhand, a recent B.Tech graduate from
                Alliance University, Bangalore. I am an AI Engineer & Backend Architect
                focused on building scalable RAG systems and production AI pipelines.
              </p>
            </div>

            <div className="role-strip glass-panel">
              <span>Current mode</span>
              <strong>{roles[roleIndex]}</strong>
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#showcase">
                See featured work
                <FiArrowUpRight />
              </a>
              <a
                className="secondary-button"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                Download resume
                <FiDownload />
              </a>
            </div>

            <div className="ticker-wrap">
              <div className="ticker">
                {[...spotlightItems, ...spotlightItems].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stage">
              <div className="hero-panel large-panel glass-panel">
                <div className="metric-line">
                  <span>Based in</span>
                  <strong>India</strong>
                </div>
                <div className="metric-line">
                  <span>Local time</span>
                  <strong>{timeLabel || "Loading..."}</strong>
                </div>
                <div className="metric-line">
                  <span>Open to</span>
                  <strong>Internships and collaborations</strong>
                </div>
              </div>

              <div className="hero-panel mini-panel accent-panel">
                <span>Focus</span>
                <strong>Frontend motion + AI-flavored product thinking</strong>
              </div>

              <div className="hero-panel mini-panel quote-panel">
                <span>Approach</span>
                <strong>Build something that actually feels different.</strong>
              </div>

              <div className="hero-figure">
                <div className="figure-ring figure-ring-one" />
                <div className="figure-ring figure-ring-two" />
                <img src={heroArtwork} alt="Developer illustration" />
              </div>
            </div>
          </div>

          <a className="scroll-marker" href="#identity">
            Scroll for the full story
            <AiOutlineArrowDown />
          </a>
        </section>

        <section className="identity reveal section-shell" id="identity" data-section>
          <div className="identity-grid">
            <article className="identity-copy panel-rich">
              <span className="section-tag">Identity</span>
              <h2>More than projects. A style of building.</h2>
              <p>
                I like digital work that has a point of view. Not generic blocks
                and default gradients, but interfaces with stronger composition,
                better pacing, and enough personality to be remembered.
              </p>
              <p>
                My interests sit at the intersection of full-stack engineering,
                frontend craft, LLM-powered experiences, and product thinking
                that respects both utility and aesthetics.
              </p>
              <div className="signature-line">
                <span>From Uttarakhand</span>
                <span>B.Tech Graduate</span>
                <span>Alliance University</span>
              </div>
            </article>

            <article className="identity-visual glass-panel">
              <img src={aboutArtwork} alt="About illustration" />
              <div className="floating-note">
                <span>Outside code</span>
                <strong>Games, football, cricket, travelling</strong>
              </div>
            </article>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card glass-panel" key={principle.title}>
                <span className="card-index">0{principles.indexOf(principle) + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase reveal section-shell" id="showcase" data-section>
          <div className="section-heading">
            <span className="section-tag">Showcase</span>
            <h2>Every build, every idea — all of them.</h2>
            <p>
              A complete look at the systems, tools, and AI-powered products I've shipped.
            </p>
          </div>

          <div className="filter-bar">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn${activeFilter === cat ? " filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bento-grid">
            {filteredProjects.map((project, i) => (
              <article
                key={project.title}
                className={`bento-card glass-panel${i === 0 && activeFilter === "All" ? " bento-card--wide" : ""}`}
              >
                <div
                  className="bento-thumb"
                  style={{
                    background: project.image
                      ? undefined
                      : project.gradient,
                  }}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="bento-no-image">
                      <span className="bento-initial">{project.title.charAt(0)}</span>
                      <span className="bento-category-label">{project.category}</span>
                    </div>
                  )}
                  <div className="bento-overlay">
                    <div className="bento-links">
                      <a href={project.github} target="_blank" rel="noreferrer" className="bento-link-btn">
                        <AiFillGithub /> Source
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="bento-link-btn bento-link-btn--accent">
                          <FiExternalLink /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bento-body">
                  <div className="bento-meta">
                    {project.isFlagship ? (
                      <span className="bento-flagship-badge">Flagship Project</span>
                    ) : (
                      <span className="bento-cat">{project.category}</span>
                    )}
                    <span className="bento-year">{project.year}</span>
                  </div>
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-blurb">{project.blurb}</p>
                  <div className="chip-row">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="systems reveal section-shell" id="systems" data-section>
          <div className="systems-grid">
            <article className="systems-left">
              <span className="section-tag">Systems</span>
              <h2>Tools, technologies, and the way I think through products.</h2>
              <div className="skill-band-list">
                {skillBands.map((band) => (
                  <div className="skill-band glass-panel" key={band.title}>
                    <strong>{band.title}</strong>
                    <span>{band.text}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="timeline-stack">
              {timeline.map((item) => (
                <article className="timeline-card glass-panel" key={item.heading}>
                  <span>{item.label}</span>
                  <h3>{item.heading}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="connect reveal section-shell" id="connect" data-section>
          <div className="connect-panel glass-panel">
            <div className="connect-copy">
              <span className="section-tag">Connect</span>
              <h2>Let&apos;s make the next version sharper, bolder, and better.</h2>
              <p>
                If you&apos;re building something on the web and want stronger
                design energy with real engineering behind it, I&apos;m ready to
                collaborate.
              </p>
            </div>

            <div className="connect-side">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Resume
                <FiDownload />
              </a>

              <div className="social-row">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
