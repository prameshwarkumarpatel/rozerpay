import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>{skills.heading}</h2>
          <p className="section-subtitle">{skills.subtitle}</p>
          <span className="section-line" />
        </div>

        <div className="skills-grid">
          {skills.groups.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="skill-card-head">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}