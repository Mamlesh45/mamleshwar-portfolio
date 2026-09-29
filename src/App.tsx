import { useEffect, useState, type CSSProperties } from "react";
import "./App.css";

const skills = [
  { name: "Java", level: 92, icon: "☕" },
  { name: "Spring Boot", level: 88, icon: "⚡" },
  { name: "React", level: 82, icon: "⚛" },
  { name: "Python", level: 78, icon: "🐍" },
  { name: "SQL / MySQL", level: 86, icon: "◈" },
  { name: "REST APIs", level: 90, icon: "↗" },
];

const techStack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "JWT",
  "React",
  "Python",
  "FastAPI",
  "MySQL",
  "REST APIs",
  "Git",
  "GitHub",
  "Maven",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      {/* Background effects */}
      <div className="background-grid" />
      <div className="background-noise" />

      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          MY<span>.</span>
        </a>

        <div className="nav-links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeSection === item ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
        >
          Resume ↗
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-dot" />
              <span>Available for opportunities</span>
            </div>

            <p className="hero-eyebrow">
              SOFTWARE DEVELOPER <span>·</span> SDE-1
            </p>

            <h1>
              I build
              <span className="gradient-text"> software </span>
              that feels engineered.
            </h1>

            <p className="hero-description">
              I'm <strong>Mamleshwar Yerge</strong>, a Computer Engineering
              graduate focused on building scalable backend and full-stack
              applications with Java, Spring Boot, React and Python.
            </p>

            <div className="hero-stack">
              {techStack.slice(0, 8).map((tech, index) => (
                <span key={tech} style={{ animationDelay: `${index * 80}ms` }}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#projects" className="magnetic-button primary-button">
                <span>Explore my work</span>
                <span className="button-arrow">↗</span>
              </a>

              <a
                href="https://github.com/Mamlesh45"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-button secondary-button"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mamleshwar-yerge-7785bb2b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-button secondary-button"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span>01</span>
                <p>Backend focused</p>
              </div>

              <div>
                <span>02</span>
                <p>Full-stack capable</p>
              </div>

              <div>
                <span>03</span>
                <p>Problem solver</p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />

            <div className="floating-code code-one">
              <span>class</span> Developer {"{"}
            </div>

            <div className="floating-code code-two">
              SpringBoot<span>.run();</span>
            </div>

            <div className="floating-tech tech-java">JAVA</div>
            <div className="floating-tech tech-react">REACT</div>
            <div className="floating-tech tech-spring">SPRING</div>

            <div className="profile-card">
              <div className="profile-card-glow" />

              <img
                src="/profile.jpg"
                alt="Mamleshwar Yerge"
                className="profile-image"
              />

              <div className="profile-overlay">
                <div>
                  <span>BUILDING</span>
                  <strong>THE FUTURE</strong>
                </div>

                <div className="profile-status">
                  <span />
                  ONLINE
                </div>
              </div>
            </div>

            <div className="orbit-dot dot-one" />
            <div className="orbit-dot dot-two" />
            <div className="orbit-dot dot-three" />
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <span key={`${tech}-${index}`}>
                {tech}
                <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-number">01 / ABOUT</span>
              <h2>
                More than just
                <span> code.</span>
              </h2>
            </div>

            <div className="about-layout">
              <div className="about-copy">
                <p className="large-copy">
                  I like turning complex problems into{" "}
                  <span>simple, reliable software.</span>
                </p>

                <p>
                  I'm a 2026 Computer Engineering graduate focused on Software
                  Development. My strongest area is Java backend development,
                  while I also work across React, Python, databases and REST
                  APIs.
                </p>

                <p>
                  I enjoy building real-world applications where architecture,
                  security, clean APIs and user experience all have to work
                  together.
                </p>

                <a href="#contact" className="text-link">
                  Let's build something <span>→</span>
                </a>
              </div>

              <div className="about-cards">
                <div className="info-card">
                  <span>EDUCATION</span>
                  <strong>B.Tech</strong>
                  <p>Computer Engineering · 2026</p>
                </div>

                <div className="info-card">
                  <span>FOCUS</span>
                  <strong>Software Development</strong>
                  <p>Java · Spring Boot · React</p>
                </div>

                <div className="info-card">
                  <span>BASED IN</span>
                  <strong>Pune, India</strong>
                  <p>Open to Software Developer roles</p>
                </div>

                <div className="info-card accent-card">
                  <span>CURRENTLY</span>
                  <strong>Building.</strong>
                  <p>Learning · Creating · Improving</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-number">02 / SKILLS</span>
              <h2>
                My technical
                <span> playground.</span>
              </h2>
            </div>

            <div className="skills-layout">
              <div className="skills-intro">
                <p>
                  The tools I use to turn ideas into working software.
                </p>

                <div className="terminal">
                  <div className="terminal-top">
                    <span />
                    <span />
                    <span />
                    <label>developer@mamleshwar ~</label>
                  </div>

                  <div className="terminal-body">
                    <p>
                      <span className="terminal-green">$</span> whoami
                    </p>
                    <p className="terminal-output">
                      software_developer
                    </p>

                    <p>
                      <span className="terminal-green">$</span> stack
                    </p>
                    <p className="terminal-output">
                      java · spring · react · python
                    </p>

                    <p>
                      <span className="terminal-green">$</span> status
                    </p>
                    <p className="terminal-output">
                      building...
                      <span className="blink">_</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div
                    className="skill-row"
                    key={skill.name}
                    style={{ "--delay": `${index * 100}ms` } as CSSProperties}
                  >
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <strong>{skill.name}</strong>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ "--level": `${skill.level}%` } as CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-cloud">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-container">
            <div className="section-heading project-heading">
              <span className="section-number">03 / PROJECTS</span>
              <h2>
                Things I've
                <span> engineered.</span>
              </h2>

              <p>
                Real applications, real architecture, real problems.
              </p>
            </div>

            {/* INVENTORYX */}
            <article className="project-showcase inventory-project">
              <div className="project-top">
                <div>
                  <span className="project-index">01</span>
                  <span className="project-category">
                    ENTERPRISE SOFTWARE
                  </span>
                </div>

                <span className="project-status">
                  <i /> FEATURED PROJECT
                </span>
              </div>

              <div className="project-main">
                <div className="project-info">
                  <h3>InventoryX</h3>

                  <h4>Enterprise Inventory Management System</h4>

                  <p>
                    A full-stack inventory platform designed to manage
                    products, warehouses, stock, suppliers, orders and users
                    through secure REST APIs.
                  </p>

                  <div className="project-features">
                    <span>JWT Authentication</span>
                    <span>Role-Based Access</span>
                    <span>Warehouse Management</span>
                    <span>Stock Management</span>
                    <span>Order Management</span>
                    <span>REST Architecture</span>
                  </div>

                  <div className="project-tech-large">
                    <span>JAVA</span>
                    <span>SPRING BOOT</span>
                    <span>SPRING SECURITY</span>
                    <span>JPA / HIBERNATE</span>
                    <span>REACT</span>
                    <span>MYSQL</span>
                  </div>

                  <a
                    href="https://github.com/Mamlesh45/InventoryX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View source code <span>↗</span>
                  </a>
                </div>

                <div className="project-visual inventory-visual">
                  <div className="dashboard-window">
                    <div className="dashboard-header">
                      <div className="dashboard-logo">IX</div>
                      <span>InventoryX</span>
                      <div className="dashboard-user" />
                    </div>

                    <div className="dashboard-content">
                      <div className="dashboard-sidebar">
                        <span className="active" />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="dashboard-main">
                        <div className="dashboard-title">
                          <span>Dashboard</span>
                          <small>Overview</small>
                        </div>

                        <div className="dashboard-stats">
                          <div>
                            <small>PRODUCTS</small>
                            <strong>••••</strong>
                          </div>

                          <div>
                            <small>ORDERS</small>
                            <strong>•••</strong>
                          </div>

                          <div>
                            <small>STOCK</small>
                            <strong>••••</strong>
                          </div>
                        </div>

                        <div className="dashboard-chart">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* AI TUTOR */}
            <article className="project-showcase ai-project">
              <div className="project-top">
                <div>
                  <span className="project-index">02</span>
                  <span className="project-category">
                    AI APPLICATION
                  </span>
                </div>

                <span className="project-status">
                  <i /> PYTHON + AI
                </span>
              </div>

              <div className="project-main reverse">
                <div className="project-info">
                  <h3>AI Tutor</h3>

                  <h4>AI-Powered Learning Assistant</h4>

                  <p>
                    An AI-powered chatbot application built with Python and
                    FastAPI for interactive learning conversations and
                    intelligent AI-generated responses.
                  </p>

                  <div className="project-features">
                    <span>AI Chat</span>
                    <span>FastAPI</span>
                    <span>Groq API</span>
                    <span>Session History</span>
                    <span>REST API</span>
                  </div>

                  <div className="project-tech-large">
                    <span>PYTHON</span>
                    <span>FASTAPI</span>
                    <span>GROQ API</span>
                    <span>SQLITE</span>
                    <span>JAVASCRIPT</span>
                  </div>

                  <a
                    href="https://github.com/Mamlesh45/mamlesh-ai-tutor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View source code <span>↗</span>
                  </a>
                </div>

                <div className="project-visual ai-visual">
                  <div className="ai-orbit">
                    <div className="ai-core">
                      <span>AI</span>
                    </div>

                    <div className="ai-node node-a">?</div>
                    <div className="ai-node node-b">✦</div>
                    <div className="ai-node node-c">↗</div>
                  </div>

                  <div className="ai-message message-one">
                    Explain recursion simply.
                  </div>

                  <div className="ai-message message-two">
                    Sure — let's break it down...
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-glow contact-glow-one"></div>
          <div className="contact-glow contact-glow-two"></div>

          <div className="contact-container">
            <div className="contact-heading">
              <p className="section-label">HAVE A PROJECT OR OPPORTUNITY?</p>

              <h2>
                Let's build <span>something.</span>
              </h2>

              <p className="contact-description">
                I’m currently open to Software Developer, Java Developer,
                Backend Developer and Full Stack opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mamleshwaryerge2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-card-main"
              >
                <div className="contact-card-icon">✉</div>

                <div className="contact-card-content">
                  <span>EMAIL</span>
                  <strong>Let's talk</strong>
                  <small>Send me a message</small>
                </div>

                <div className="contact-arrow">↗</div>
              </a>

              <a
                href="https://www.linkedin.com/in/mamleshwar-yerge-7785bb2b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">in</div>

                <div className="contact-card-content">
                  <span>LINKEDIN</span>
                  <strong>Connect with me</strong>
                  <small>Let's grow together</small>
                </div>

                <div className="contact-arrow">↗</div>
              </a>

              <a
                href="https://github.com/Mamlesh45"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">⌘</div>

                <div className="contact-card-content">
                  <span>GITHUB</span>
                  <strong>View my work</strong>
                  <small>Explore my projects</small>
                </div>

                <div className="contact-arrow">↗</div>
              </a>

              <a href="tel:+918080742413" className="contact-card">
                <div className="contact-card-icon">☎</div>

                <div className="contact-card-content">
                  <span>PHONE</span>
                  <strong>+91 80807 42413</strong>
                  <small>Available for opportunities</small>
                </div>

                <div className="contact-arrow">↗</div>
              </a>
            </div>

            <div className="contact-bottom">
              <div className="contact-location">
                <span className="location-dot"></span>
                <span>Pune, India</span>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-resume"
              >
                VIEW RESUME <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        </main>

      <footer className="footer">
        <div>
          <strong>Mamleshwar Yerge</strong>
          <span>Software Developer · SDE-1</span>
        </div>

        <p>© 2026 · Built with React & TypeScript</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;