import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2>{projects.heading}</h2>
          <p className="section-subtitle">{projects.subtitle}</p>
          <span className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.list.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-thumb" aria-hidden="true">
                <span>🖥️</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-small btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-small btn-outline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}