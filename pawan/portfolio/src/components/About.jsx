import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <h2>{about.heading}</h2>
          <span className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="about-highlights">
            {about.highlights.map((h, i) => (
              <li key={i}>
                <span className="check-icon">✓</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}