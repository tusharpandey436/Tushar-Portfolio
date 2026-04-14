import React, { useEffect, useMemo, useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
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
import photographyImage from "./Assets/Projects/photography.png";
import financeImage from "./Assets/Projects/finance.png";
import editorImage from "./Assets/Projects/codeEditor.png";
import carpoolImage from "./Assets/Projects/car.png";
import musicImage from "./Assets/Projects/music.png";
import attendanceImage from "./Assets/Projects/attendence.png";
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
    href: "https://github.com/Tusharpandey716",
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
  "Full-stack builder",
  "Frontend experience crafter",
  "AI-curious product engineer",
  "Developer tool maker",
];

const spotlightItems = [
  "React interfaces with intent",
  "Node.js and backend logic",
  "LLM-powered product concepts",
  "Visual storytelling on the web",
  "Rapid prototyping and iteration",
  "Clean developer experience",
];

const skillBands = [
  {
    title: "Build",
    text: "React, JavaScript, Node.js, MongoDB, PostgreSQL, Firebase",
  },
  {
    title: "Think",
    text: "Product strategy, storytelling, interaction design, user flow",
  },
  {
    title: "Explore",
    text: "AI experiences, computer vision, developer tools, automation ideas",
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
    heading: "Final-year B.Tech student at Alliance University, Bangalore",
    body:
      "Building stronger frontend instincts while continuing to ship practical software projects across web and AI-adjacent domains.",
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
    title: "Photography Website",
    category: "Visual storytelling",
    year: "2024",
    image: photographyImage,
    blurb:
      "A portfolio-led photography experience focused on presentation, gallery rhythm, and visual atmosphere.",
    deepDive:
      "Built to spotlight imagery with clean composition, responsive behavior, and a more editorial approach to browsing work.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tusharpandey716/photography_website-",
    live: "https://ornate-kangaroo-4dddee.netlify.app/",
  },
  {
    title: "Finance Tracker",
    category: "Full-stack product",
    year: "2024",
    image: financeImage,
    blurb:
      "A MERN personal finance app for tracking expenses, budgets, and visibility into spending patterns.",
    deepDive:
      "The core value is clarity: fast transaction management, useful dashboard behavior, and a practical workflow around money tracking.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Tusharpandey716/Finance-Tracker",
  },
  {
    title: "Editor.io",
    category: "Developer tooling",
    year: "2024",
    image: editorImage,
    blurb:
      "An online code and markdown editor with instant preview and local persistence for makers.",
    deepDive:
      "This project leans into workflow utility, fast feedback, and an interface that supports experimentation without friction.",
    tech: ["React", "Markdown", "Local Storage"],
    github: "https://github.com/Tusharpandey716/Editor-io",
  },
  {
    title: "CarPooling",
    category: "System design",
    year: "2023",
    image: carpoolImage,
    blurb:
      "A Java-based ride-sharing concept centered on route matching and practical user coordination.",
    deepDive:
      "It brings together logic, planning, and usability to turn a system problem into a cleaner end-user workflow.",
    tech: ["Java", "Algorithms", "User Flow"],
    github: "https://github.com/Tusharpandey716/Carpooling",
  },
  {
    title: "Music Player",
    category: "Media experience",
    year: "2023",
    image: musicImage,
    blurb:
      "A Django-driven music player with playlist flow, browsing, and playback controls.",
    deepDive:
      "Designed around smooth organization and listening rather than just basic file handling or playback toggles.",
    tech: ["Django", "Python", "Interface Design"],
    github: "https://github.com/Tusharpandey716/Music_Player",
  },
  {
    title: "Smart Attendance System",
    category: "AI / computer vision",
    year: "2023",
    image: attendanceImage,
    blurb:
      "An OpenCV-based attendance workflow that uses face recognition to reduce manual work.",
    deepDive:
      "Focused on accuracy, efficiency, and translating a technical vision concept into a practical operational system.",
    tech: ["Python", "OpenCV", "Recognition"],
    github: "https://github.com/Tusharpandey716/Smart_Attendance_System",
  },
];

function App() {
  const [theme, setTheme] = useState("obsidian");
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [featuredProject, setFeaturedProject] = useState(0);
  const [timeLabel, setTimeLabel] = useState("");
  const [pointer, setPointer] = useState({ x: 50, y: 20 });

  const featured = projects[featuredProject];
  const projectPreview = useMemo(
    () => projects.filter((_, index) => index !== featuredProject).slice(0, 3),
    [featuredProject]
  );

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
        threshold: 0.35,
        rootMargin: "0px 0px -12% 0px",
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
            <small>Creative full-stack developer</small>
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
                Portfolio reimagined with stronger motion and identity
              </span>
              <h1>
                Digital experiences
                <span> with edge, elegance, and energy.</span>
              </h1>
              <p className="hero-copy-text">
                I&apos;m Tushar Pandey from Uttarakhand, currently in my final
                year at Alliance University, Bangalore. I build web products,
                explore AI-driven ideas, and care about making interfaces feel
                unforgettable rather than merely usable.
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
                <span>Final-year B.Tech</span>
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
            <h2>Selected work, presented like it matters.</h2>
            <p>
              I turned this section into a spotlight instead of a wall of equal
              cards so the portfolio has hierarchy, rhythm, and more presence.
            </p>
          </div>

          <div className="showcase-grid">
            <article className="featured-project glass-panel">
              <div className="featured-image">
                <img src={featured.image} alt={featured.title} />
                <div className="featured-badge">
                  <span>{featured.category}</span>
                  <strong>{featured.year}</strong>
                </div>
              </div>

              <div className="featured-body">
                <div className="featured-header">
                  <div>
                    <span className="micro-label">Featured build</span>
                    <h3>{featured.title}</h3>
                  </div>
                  <button
                    className="cycle-button"
                    type="button"
                    onClick={() =>
                      setFeaturedProject((current) => (current + 1) % projects.length)
                    }
                  >
                    Next project
                    <AiOutlineArrowRight />
                  </button>
                </div>

                <p className="featured-lead">{featured.blurb}</p>
                <p>{featured.deepDive}</p>

                <div className="chip-row">
                  {featured.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={featured.github} target="_blank" rel="noreferrer">
                    Source
                    <FiExternalLink />
                  </a>
                  {featured.live ? (
                    <a href={featured.live} target="_blank" rel="noreferrer">
                      Live demo
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="muted-link">Concept / repository showcase</span>
                  )}
                </div>
              </div>
            </article>

            <aside className="project-rail">
              {projectPreview.map((project) => {
                const projectIndex = projects.findIndex(
                  (item) => item.title === project.title
                );

                return (
                  <button
                    key={project.title}
                    className="rail-card glass-panel"
                    type="button"
                    onClick={() => setFeaturedProject(projectIndex)}
                  >
                    <img src={project.image} alt={project.title} />
                    <div>
                      <span>{project.category}</span>
                      <strong>{project.title}</strong>
                    </div>
                  </button>
                );
              })}
            </aside>
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
