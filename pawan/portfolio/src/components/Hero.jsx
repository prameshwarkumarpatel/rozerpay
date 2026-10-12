import { profile } from '../data/portfolioData'

export default function Hero() {
  const initials = profile.name.slice(0, 1).toUpperCase()

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner container">
        <div className="hero-content">
          <span className="availability-badge">
            <span className="pulse-dot" />
            {profile.availability}
          </span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="hero-intro">{profile.shortIntro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Let's Work Together
            </a>
            <a className="btn btn-outline" href={profile.resumeUrl}>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="avatar">
            <span>{initials}</span>
          </div>
          <div className="code-card">
            <pre>
              {`const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  loves: ["code", "coffee", "web"],
  openToWork: true
};`}
            </pre>
          </div>
          <div className="floating-chip chip-1">⚛ React</div>
          <div className="floating-chip chip-2">⚛ Node</div>
          <div className="floating-chip chip-3">⚛️</div>
        </div>
      </div>
    </section>
  )
}