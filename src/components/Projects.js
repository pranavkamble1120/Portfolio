
import projects from "../data/projects";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>
          Projects I've <span>Built</span>
        </h2>

        <p className="section-description">
          A selection of websites and applications demonstrating
          my development skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {/* Show Live Demo only when a URL exists */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo ↗
                  </a>
                )}

                {/* Always show Source Code */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary-link"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
