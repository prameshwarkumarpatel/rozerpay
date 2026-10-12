# My Portfolio — React + Vite

A modern, responsive single-page portfolio built with **React** and **Vite**.

## ✨ Sections

- **Home / Hero** — intro, availability badge, social links, animated visual
- **About** — bio paragraphs + highlight cards
- **Skills** — categorized skill chips (Frontend / Backend / Tools)
- **Projects** — project cards with tech tags and links
- **Experience & Education** — timeline layout
- **Contact** — info cards + working contact form (opens your email app)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (default `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## ✏️ Customizing your content

> **Tip:** All your personal data lives in one file — `src/data/portfolioData.js`.
> Open it and edit the name, email, socials, projects, skills, experience,
> education and contact info. The site updates instantly. No component edits needed.

### To customize the look

- Main colors & fonts: `src/styles/index.css` (CSS variables at the top)
- Site title & favicon: `index.html` + `public/favicon.svg`
- Add a real profile photo: replace the gradient avatar in `src/components/Hero.jsx`

## 📁 Project Structure

```
portfolio/
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data/
│   │   └── portfolioData.js   ← edit your content here
│   ├── styles/
│   │   └── index.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── package.json
```