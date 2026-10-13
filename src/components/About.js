function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-avatar">PK</div>
          <h3>Pranav Kamble</h3>
          <p>Web Developer & Java Developer</p>
          <div className="availability">
            <span className="status-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div className="about-copy">
          <h3>Turning ideas into websites that work.</h3>

          <p>
            I develop websites that combine attractive design,
            useful functionality, and responsive layouts.
            My goal is to help individuals and businesses
            establish a strong online presence.
          </p>

          <p>
            My technical interests include Java, Spring Boot,
            REST APIs, React, JavaScript, and MySQL. I enjoy
            learning new technologies and building projects
            that solve real-world problems.
          </p>

          <div className="about-highlights">
            <div>
              <strong>Frontend</strong>
              <span>Responsive interfaces</span>
            </div>
            <div>
              <strong>Backend</strong>
              <span>APIs and business logic</span>
            </div>
            <div>
              <strong>Database</strong>
              <span>Data-driven applications</span>
            </div>
          </div>

          <a href="#contact" className="text-link">
            Discuss your project ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;