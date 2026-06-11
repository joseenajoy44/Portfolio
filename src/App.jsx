import "./App.css";

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Django",
  "Flutter",
  "UI/UX",
];

const projects = [
  {
    title: "Helpdesk Ticket System",
    description:
      "A support ticket system built with React and Django, designed for intuitive issue tracking and quick team responses.",
    tags: ["React", "Django", "REST"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website that highlights my projects, skills, and contact details with modern styling.",
    tags: ["React", "CSS", "Responsive"],
    link: "#",
  },
  
    
];

function App() {
  return (
    <div className="app-wrapper">
      <header className="topbar">
        <div className="brand">Joseena</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="hero-label"> student|developer</span>
          <h1>
            I build modern apps that look beautiful and
            <span> perform even better.</span>
          </h1>
          <p>
            I design intuitive user experiences using React, Python,
            and modern frontend tools. I love building responsive products
            that feel polished and professional.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-panel glass-panel">
          <div className="profile-block">
            <div className="profile-photo" />
            <div>
              <h2>Joseena Joy</h2>
              <p>React developer & data science student</p>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <strong>2+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Technologies</span>
            </div>
            
          </div>
        </div>
      </section>

      <section id="about" className="section about-section glass-panel">
        <div className="section-head">
          <span>About</span>
          <h2>Creative builds backed by clean logic.</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I specialize in building responsive web applications with
              thoughtful interfaces and strong performance.
               I focus on clarity, polish, and real-world use.
            </p>
            <div className="skill-pill-row">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </div>
        </section>

      <section id="projects" className="section projects-section">
        <div className="section-head">
          <span>Work</span>
          <h2>Selected projects I�m proud of</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card glass-panel">
              <div className="project-meta">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View details
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section glass-panel">
        <div className="section-head">
          <span>Contact</span>
          <h2>Let�s bring your next idea to life.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:joseenajoy44@gmail.com">joseenajoy44@gmail.com</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/joseena-joy-290b72372" target="_blank" rel="noreferrer">
                linkedin.com/in/joseena-joy
              </a>
            </p>
          </div>
          <div className="contact-card">
            <h3>GitHub</h3>
            <p>
              <a href="https://github.com/joseenajoy44" target="_blank" rel="noreferrer">
                github.com/joseenajoy44
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>� 2026 Joseena Joy. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
