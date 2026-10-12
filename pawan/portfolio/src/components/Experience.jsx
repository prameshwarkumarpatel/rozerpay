import { experience, education } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Experience & Education</h2>
          <span className="section-line" />
        </div>

        <div className="experience-grid">
          <div className="timeline-block">
            <h3>
              <span aria-hidden="true">💼</span> {experience.heading}
            </h3>
            <div className="timeline">
              {experience.list.map((item) => (
                <div key={item.role} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-period">{item.period}</span>
                    <h4>{item.role}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <ul>
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-block">
            <h3>
              <span aria-hidden="true">🎓</span> {education.heading}
            </h3>
            <div className="timeline">
              {education.list.map((item) => (
                <div key={item.degree} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-period">{item.period}</span>
                    <h4>{item.degree}</h4>
                    <p className="timeline-company">{item.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}