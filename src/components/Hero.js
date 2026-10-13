function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot"></span>
          AVAILABLE FOR FREELANCE PROJECTS
        </p>

        <h1>
          Hi, I'm <span>Pranav Kamble.</span>
          <br />
          I Build Digital Experiences.
        </h1>

        <p className="hero-description">
          I'm a web developer building modern, responsive,
          and user-friendly websites for businesses and clients.
          I work with React, Java, Spring Boot, and MySQL to
          turn ideas into functional digital solutions.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore My Work ↗
          </a>

          <a href="#contact" className="btn btn-outline">
            Let's Talk
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/pranavkamble1120"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-kamble-2429b2281/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>

        <div className="code-card">
          <div className="code-header">
            <div className="window-dots">
              <span></span><span></span><span></span>
            </div>
            <span>developer.js</span>
          </div>

          <div className="code-body">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="code-indent">
              name: <span className="code-green">"Pranav"</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-green">"Web Developer"</span>,
            </p>
            <p className="code-indent">
              frontend: <span className="code-yellow">"React"</span>,
            </p>
            <p className="code-indent">
              backend: <span className="code-yellow">"Java"</span>,
            </p>
            <p className="code-indent">
              database: <span className="code-yellow">"MySQL"</span>,
            </p>
            <p className="code-indent">
              passion: <span className="code-green">"Building"</span>
            </p>
            <p>{"}"}</p>
            <p className="code-comment">
              // Let's build something great!
            </p>
          </div>
        </div>

        <div className="floating-badge badge-top">
          <span>✦</span> Creative Developer
        </div>

        <div className="floating-badge badge-bottom">
          <span>✓</span> Responsive Websites
        </div>
      </div>
    </section>
  );
}

export default Hero;