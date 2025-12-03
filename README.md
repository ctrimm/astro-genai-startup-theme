# 🚀 GenAI Startup Astro Theme

A modern, beautiful, and **completely free** Astro theme template designed specifically for GenAI and AI-focused startups. Features a stunning dark/light mode toggle, smooth animations, and ready-to-deploy components.

![GenAI Theme](https://img.shields.io/badge/Astro-5.16-blueviolet) ![License](https://img.shields.io/badge/license-MIT-green) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

<img width="3809" height="2327" alt="Screenshot of GenAI Startup Homepage" src="https://github.com/user-attachments/assets/b086ecf1-1f3a-495c-927e-f940b88fc757" />

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean UI with gradient accents and smooth animations
- 🌓 **Dark/Light Mode** - Fully functional theme toggle with localStorage persistence
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎭 **Framer Motion** - Smooth scroll animations and transitions
- 🧩 **Pre-built Sections**:
  - Hero with animated gradients
  - Features showcase
  - Pricing cards
  - Testimonials
  - FAQ with accordion
  - Newsletter signup
  - Social links
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Latest utility-first CSS framework
- 🧱 **shadcn/ui** - Beautiful, accessible components
- 🚀 **GitHub Pages Ready** - Deploy with one click
- ♿ **Accessible** - WCAG compliant components

## 🎯 Perfect For

- AI/GenAI Startups
- SaaS Landing Pages
- API Documentation Sites
- Developer Tools
- Tech Product Launches

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/astro-genai-startup-theme.git
cd astro-genai-startup-theme
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

### 4. Build for production

```bash
npm run build
```

## 📦 What's Included

### Components

- **Header** - Responsive navigation with theme toggle
- **Hero** - Eye-catching hero section with animated gradients and stats
- **Features** - Grid of feature cards with icons and hover effects
- **Pricing** - Comparison pricing cards with highlighted popular plan
- **Testimonials** - Customer testimonials with ratings
- **FAQ** - Accordion-style frequently asked questions
- **Footer** - Complete footer with links and newsletter signup
- **ThemeToggle** - Dark/light mode switcher

### Pages

- `index.astro` - Main landing page with all sections
- `markdown-page.md` - Example markdown page

### Layouts

- `main.astro` - Main layout with header and footer

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to customize your brand colors. The theme uses CSS variables for easy customization:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  /* ... more variables */
}
```

### Content

Update the content in the component files:
- `src/components/Hero.tsx` - Hero section text and stats
- `src/components/Features.tsx` - Feature list
- `src/components/Pricing.tsx` - Pricing tiers
- `src/components/Testimonials.tsx` - Customer reviews
- `src/components/FAQ.tsx` - Questions and answers

### Branding

Replace the logo and brand name in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/layouts/main.astro` (page title)

## 🚀 Deploy to GitHub Pages

### Automatic Deployment

This theme includes a GitHub Actions workflow for automatic deployment:

1. Update `astro.config.js` with your repository details:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  // ...
});
```

2. Push to your repository:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

4. Your site will be automatically deployed on every push!

### Manual Deployment

```bash
npm run build
# Upload the contents of the dist/ folder to your hosting provider
```

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   └── button.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── ThemeToggle.tsx
│   ├── layouts/
│   │   └── main.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.js
├── components.json
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── TODO.md                     # Development progress tracker
```

## 🛠️ Tech Stack

- **[Astro 5.16](https://astro.build/)** - Static site generator
- **[React 19](https://react.dev/)** - UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[Lucide Icons](https://lucide.dev/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/astro-genai-startup-theme/issues).

## 📄 License

MIT License - feel free to use this template for your own projects!

Copyright (c) 2025

## 🙏 Credits

- Inspired by modern SaaS landing pages
- Components inspired by [reactbits.dev](https://reactbits.dev)
- Built with love for the GenAI community

## 💖 Support

If you find this template useful, please consider:
- ⭐ Starring the repository
- 🐦 Sharing on Twitter
- 📝 Writing a blog post about it

---

**Built with ❤️ for the GenAI community**
