import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="logo footer-logo">
          &lt;Pawan /&gt;
        </a>
        <div className="footer-socials">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
        <p>
          © {year} {profile.name}. Built with React &amp; Vite. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}