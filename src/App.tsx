import "./App.css";

function App() {
  return (
    <div className="portfolio">
      
      <nav className="navbar">
<title>Mamleshwar Yerge | Java Full Stack Developer</title>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>

            <h1>Mamleshwar Yerge</h1>

            <h2>Java Full Stack Developer</h2>

            <p className="hero-description">
              I build reliable backend and full-stack applications using Java,
              Spring Boot, React and MySQL.
            </p>

            <div className="hero-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>MySQL</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>

              <a
                href="https://github.com/Mamlesh45"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Resume
              </a>
            </div>

            <p className="availability">
              Open to Software Developer opportunities
            </p>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-glow"></div>

            <img
              src="/profile.jpg"
              alt="Mamleshwar Yerge"
              className="hero-image"
            />
          </div>
        </section>

        <section id="about" className="about section">
          <div className="section-container">
            <p className="section-label">ABOUT ME</p>

            <h2>Building software with purpose.</h2>

            <p className="about-text">
              I'm a Computer engineering student focused on Java backend and
              full-stack development. I enjoy building real-world applications,
              designing REST APIs, working with databases, and solving problems
              through code.
            </p>

            <p className="about-text">
              My primary focus is Java, Spring Boot, React and MySQL. I've built
              InventoryX, an enterprise inventory management system, and an
              AI-powered chatbot using Python and FastAPI.
            </p>

            <div className="about-details">
              <div>
                <span>Education</span>
                <strong>B.Tech — Computer Engineeering</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Java Full Stack Development</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Pune, India</strong>
              </div>

              <div>
                <span>Graduation</span>
                <strong>2026</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="section-container">
            <p className="section-label">SKILLS</p>

            <h2>Technologies I work with.</h2>

            <div className="skills-grid">
              <div className="skill-group">
                <h3>Languages</h3>
                <p>Java · JavaScript · SQL</p>
              </div>

              <div className="skill-group">
                <h3>Backend</h3>
                <p>
                  Spring Boot · Spring Security · Hibernate / JPA · REST APIs
                </p>
              </div>

              <div className="skill-group">
                <h3>Frontend</h3>
                <p>React · HTML · CSS</p>
              </div>

              <div className="skill-group">
                <h3>Database</h3>
                <p>MySQL · PostgreSQL</p>
              </div>

              <div className="skill-group">
                <h3>Tools & Technologies</h3>
                <p>Git · GitHub · Maven · Postman · IntelliJ IDEA</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="section-container">
            <p className="section-label">PROJECTS</p>

            <h2>Things I've built.</h2>

            <div className="projects-list">
              <article className="project-card featured-project">
                <div className="project-content">
                  <p className="project-number">01</p>

                  <h3>InventoryX</h3>

                  <p className="project-type">
                    Enterprise Inventory Management System
                  </p>

                  <p className="project-description">
                    A full-stack inventory management system for managing
                    products, warehouses, stock, orders and users through secure
                    REST APIs. The system includes authentication, role-based
                    access and warehouse and stock management workflows.
                  </p>

                  <div className="project-tech">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Spring Security</span>
                    <span>JWT</span>
                    <span>React</span>
                    <span>MySQL</span>
                    <span>REST API</span>
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/Mamlesh45/InventoryX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-content">
                  <p className="project-number">02</p>

                  <h3>AI Tutor / AI Chatbot</h3>

                  <p className="project-type">AI-Powered Application</p>

                  <p className="project-description">
                    An AI-powered chatbot application built with Python and
                    FastAPI for interacting with users through intelligent
                    AI-generated responses.
                  </p>

                  <div className="project-tech">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>AI API</span>
                    <span>REST API</span>
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/Mamlesh45/mamlesh-ai-tutor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-container">
            <p className="section-label">CONTACT</p>

            <h2>Let's connect.</h2>

            <p className="contact-text">
              I'm currently looking for Software Developer and Java Full Stack
              opportunities. If you'd like to discuss an opportunity or my
              projects, feel free to reach out.
            </p>

            <p className="contact-note">
              Interested in Software Developer, Java Developer and Java Full
              Stack opportunities.
            </p>

            <div className="contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mamleshwaryerge2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Me
              </a>

              <a href="tel:+918080742413">+91 80807 42413</a>

              <a
                href="https://www.linkedin.com/in/mamleshwar-yerge-7785bb2b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Mamlesh45"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Mamleshwar Yerge.</p>
      </footer>
    </div>
  );
}

export default App;
