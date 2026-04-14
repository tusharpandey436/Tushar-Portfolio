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
  FiChevronLeft,
  FiChevronRight,
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
import aiDataFetcherImage from "./Assets/Projects/ai_data_fetcher.png";

import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import GitHubCalendar from "react-github-calendar";
import Particles from "react-tsparticles";

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


const timeline = [
  {
    label: "Q1 2025 Roadmap",
    heading: "Hybrid RAG & Evaluation Integration",
    body:
      "Successfully built and deployed production RAG pipelines utilizing Gemini 1.5 Pro, Supabase pgvector, and RAGAS metrics.",
  },
  {
    label: "Q2 2025 Roadmap",
    heading: "Agentic AI & Modular Open-Source Frameworks",
    body:
      "Currently extending Tool-use planning architectures and abstracting robust multi-modal RAG systems into a modular OSS framework.",
  },
  {
    label: "Execution Philosophy",
    heading: "If it's not scalable, it's not finished.",
    body:
      "Real engineers don't just build features; they build systems that survive production. A pipeline is only as good as its worst retrieval node.",
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
    image: aiDataFetcherImage,
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeFilter]);

  const handleNextProject = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevProject = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    if (isHovered || filteredProjects.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isHovered, filteredProjects.length]);

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

  // Theme and Scroll
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
      <div className="aurora-bg" aria-hidden="true" />
      <Particles
        id="tsparticles"
        className="particles-overlay"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.6 } },
            },
          },
          particles: {
            color: { value: "#8b5cf6" },
            links: {
              color: "#8b5cf6",
              distance: 140,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.2, direction: "none", random: false, straight: false, outModes: "out" },
            number: { density: { enable: true, area: 1000 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

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
                Tushar Portfolio.
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

            <Tilt className="role-strip glass-panel" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <span>Current focus</span>
              <strong>
                <Typewriter
                  options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    delay: 60,
                  }}
                />
              </strong>
            </Tilt>

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
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="tilt-hero-panel">
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
                    <strong>Opportunities and Collaborations</strong>
                  </div>
                </div>
              </Tilt>

              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05} className="hero-panel mini-panel accent-panel">
                <span>Focus</span>
                <strong>Frontend motion + AI-flavored product thinking</strong>
              </Tilt>

              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.05} className="hero-panel mini-panel quote-panel">
                <span>Approach </span>
                <strong>Build something that actually feels different.</strong>
              </Tilt>

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
              <h2>More than features. Scalable systems.</h2>
              <p>
                Real engineers do not just build isolated features—they construct comprehensive 
                systems that survive production environments. From the initial architecture document 
                to final deployment and monitoring, my focus remains strictly on robustness.
              </p>
              <p>
                My expertise spans advanced LangChain orchestration, robust vector search optimization 
                with pgvector, and high-performance backend routing via FastAPI and Node.js. 
                I write code designed to scale securely and efficiently.
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

          <div 
            className="carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="carousel-viewport">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
              >
                {filteredProjects.map((project, i) => (
                  <Tilt 
                    key={project.title} 
                    className="carousel-slide parallax-wrapper"
                    tiltMaxAngleX={6} 
                    tiltMaxAngleY={6} 
                    scale={1.01} 
                    transitionSpeed={2000}
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    glareColor="#ffffff"
                    glarePosition="all"
                  >
                    <article className="bento-card glass-panel">
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
                  </Tilt>
                ))}
              </div>
              
              {filteredProjects.length > 1 && (
                <>
                  <button className="carousel-hover-btn prev-btn" onClick={handlePrevProject} aria-label="Previous project">
                    <FiChevronLeft />
                  </button>
                  <button className="carousel-hover-btn next-btn" onClick={handleNextProject} aria-label="Next project">
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>
            
            {filteredProjects.length > 1 && (
              <div className="carousel-indicators">
                {filteredProjects.map((_, index) => (
                  <button 
                    key={index} 
                    className={`indicator-dot ${index === currentSlideIndex ? 'active' : ''}`}
                    onClick={() => setCurrentSlideIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="systems reveal section-shell" id="systems" data-section>
          <div className="systems-grid">
            <article className="systems-left">
              <span className="section-tag">Systems & Architecture</span>
              <h2>Tools, technologies, and the way I think through products.</h2>
              <div className="skill-band-list">
                {skillBands.map((band) => (
                  <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} key={band.title}>
                    <div className="skill-band glass-panel">
                      <strong>{band.title}</strong>
                      <span>{band.text}</span>
                    </div>
                  </Tilt>
                ))}
              </div>
            </article>

            <div className="timeline-stack">
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01}>
                <article className="github-card glass-panel">
                  <span className="section-tag">Open Source Graph</span>
                  <h3>Continuous Delivery</h3>
                  <div className="calendar-wrapper">
                    <GitHubCalendar 
                      username="tusharpandey436" 
                      colorScheme={theme === "obsidian" ? "dark" : "light"}
                      blockSize={12}
                    />
                  </div>
                </article>
              </Tilt>
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
