import { profile } from '../data/portfolioData'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ menuOpen, setMenuOpen, onClose }) {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#home" className="logo" onClick={onClose}>
          &lt;Pawan /&gt;
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary nav-cta"
            onClick={onClose}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}