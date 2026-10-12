import { profile, contact } from '../data/portfolioData'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name.value || 'visitor'}`
    )
    const body = encodeURIComponent(
      `${form.message.value}\n\n— ${form.name.value || 'Visitor'}\n${form.email.value || ''}`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <h2>{contact.heading}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
          <span className="section-line" />
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Location</h4>
                <span>{contact.location}</span>
              </div>
            </div>
            <div className="contact-social">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Let's build something awesome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message ✉
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}