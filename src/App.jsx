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
        <div className="brand"> Hi ,I'm Joseena Joy</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
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
          <h2>Selected projects I'm proud of</h2>
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

      <section id="certificates" className="section certificates-section glass-panel">
        <div className="section-head">
          <span>Certificates</span>
          <h2> certifications</h2>
        </div>
        <div className="cert-grid">
          <article className="cert-card">
            <h3>Website UI/UX Designing using ChatGPT</h3>
            <p className="cert-meta">Simplilearn • 2025</p>
            <p>Designed modern, user-friendly website interfaces using ChatGPT-assisted workflows, focusing on responsive layouts and intuitive UX.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_completed-a-uiux-designing-using-chatgpt-ugcPost-7457021715445981184-_-WS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

          <article className="cert-card">
            <h3>Data Analysis with Python</h3>
            <p className="cert-meta">IBM • 2025</p>
            <p>Comprehensive course covering data analysis techniques and tools using Python.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_completed-ibm-data-analysis-with-python-ugcPost-7455856194503761920-3b0P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

          <article className="cert-card">
            <h3>Introduction to Prompt Engineering </h3>
            <p className="cert-meta">Simplilearn• 2025</p>
            <p>Completed a foundational course in Prompt Engineering, learning how to
design effective prompts for AI models and optimize AI-generated outputs
for real-world applications.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_completed-introduction-to-prompt-engineering-ugcPost-7455856194503761920-3b0P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

          <article className="cert-card">
            <h3>Data Privacy Fundamentals</h3>
            <p className="cert-meta">IBM • 2025</p>
            <p>Completed a course covering data privacy principles, secure data handling,
privacy regulations, and best practices for protecting sensitive information.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_ive-just-completed-the-data-privacy-fundamentals-ugcPost-7398711079062663169-2kWt/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>
        
        <article className="cert-card">
            <h3>Data Science Methodology</h3>
            <p className="cert-meta">IBM • 2025</p>
            <p>Completed a course on the data science lifecycle, covering problem
identification, data analysis, model building, evaluation, and
data-driven decision-making.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_completed-ibm-data-science-methodology-ugcPost-7455856194503761920-3b0P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

          <article className="cert-card">
            <h3> Data Science Tools</h3>
            <p className="cert-meta">IBM • 2025</p>
            <p>Completed a course covering essential data science tools, including
programming environments, data analysis platforms, visualization tools,
and version control systems used in real-world projects.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_proud-to-earn-ibm-data-science-tools-certification-ugcPost-7398708967201402881-WCtq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

          <article className="cert-card">
            <h3>Data Science 101</h3>
            <p className="cert-meta">IBM • 2025</p>
            <p>Built a foundational understanding of data science concepts, including data analysis, visualization, machine learning basics, and data-driven decision-making.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_completed-ibm-data-science-101-ugcPost-7455856194503761920-3b0P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

          <article className="cert-card">
            <h3>Introduction to Open Source</h3>
            <p className="cert-meta">IBM • 2025</p>
            <p>Completed a course introducing the concepts and practices of open source software development.</p>
            <a href="https://www.linkedin.com/posts/joseena-joy-290b72372_completed-ibm-introduction-to-open-source-ugcPost-7455856194503761920-3b0P/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxdagwBqqFQGli3mZUtc-URjlBXRJujD2k" target="_blank" rel="noreferrer" className="project-link">View Certificate</a>
          </article>

        </div>
      </section>

      <section id="contact" className="section contact-section glass-panel">
        <div className="section-head">
          <span>Contact</span>
          <h2>Let bring your next idea to life.</h2>
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
        <p>2026 Joseena Joy. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
