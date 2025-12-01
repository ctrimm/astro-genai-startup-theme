# 🚀 GenAI Startup Astro Theme

A modern, beautiful, and **completely free** Astro theme template designed specifically for GenAI and AI-focused startups. Features a stunning dark/light mode toggle, 30+ production-ready components, interactive demos, and everything you need to launch your AI product.

![GenAI Theme](https://img.shields.io/badge/Astro-4.16-blueviolet) ![License](https://img.shields.io/badge/license-MIT-green) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue) ![Components](https://img.shields.io/badge/Components-30+-orange)

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean UI with gradient accents and smooth animations
- 🌓 **Dark/Light Mode** - Fully functional theme toggle with localStorage persistence
- ⚡ **Lightning Fast** - Built with Astro for optimal performance
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎭 **Framer Motion** - Smooth scroll animations and transitions
- 🎯 **TypeScript** - Full type safety throughout
- 🎨 **Tailwind CSS v3** - Utility-first CSS framework
- 🧱 **shadcn/ui** - Beautiful, accessible component primitives
- 🚀 **GitHub Pages Ready** - Deploy with one click
- ♿ **Accessible** - WCAG compliant components
- ⌨️ **Command Palette** - Modern Cmd+K navigation (like Linear, Vercel)
- 🍪 **GDPR Compliant** - Cookie consent with granular preferences

## 🎯 Perfect For

- AI/GenAI Startups
- SaaS Landing Pages
- API Documentation Sites
- Developer Tools
- Tech Product Launches
- LLM/ML Product Showcases

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/ctrimm/astro-genai-startup-theme.git
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

### 🎨 Basic UI Components (11)

- **Badge** - Status indicators and labels
- **Alert** - Notification boxes with variants
- **Card** - Content containers with shadows
- **Button** - Interactive buttons with variants
- **Spinner** - Loading indicators
- **Progress** - Progress bars
- **Tabs** - Tabbed navigation
- **Avatar** - User profile images
- **Input** - Form input fields
- **StatCard** - Metric cards with icons
- **Timeline** - Event timeline display
- **CodeBlock** - Syntax-highlighted code with copy button

### 🚀 Advanced Components (12)

1. **Command Palette** - Cmd+K quick navigation menu
   - Keyboard shortcuts
   - Searchable commands
   - Categorized actions
   - Always available globally

2. **Chat Interface** - AI chatbot component
   - Message history
   - Typing indicators
   - User/Assistant styling
   - Auto-scrolling

3. **Toast Notifications** - Beautiful notifications
   - 4 variants (success, error, warning, info)
   - Auto-dismiss
   - Stacked display
   - Custom icons

4. **Pricing Calculator** - Interactive pricing
   - Volume-based tiers
   - Monthly/Annual toggle
   - Real-time calculations
   - Visual slider

5. **Social Proof Widgets** - Trust builders
   - Live user count with animation
   - Stats ticker with countup
   - Trust badges (SOC 2, GDPR, etc.)
   - Recent activity feed

6. **Cookie Consent** - GDPR compliance
   - Granular preferences
   - Necessary/Analytics/Marketing cookies
   - Custom toggle switches
   - LocalStorage persistence

7. **File Upload** - Drag-and-drop uploader
   - Multiple file support
   - Progress bars
   - File size display
   - Success/Error states

8. **Metrics Dashboard** - Analytics display
   - Metric cards with trends
   - Activity charts
   - Regional stats
   - Recent activity table

9. **BentoGrid** - Modern grid layout
10. **MarqueeLogos** - Infinite scrolling carousel
11. **AnimatedCounter** - Number counting animations
12. **GradientText** - Animated gradient text
13. **GlassCard** - Glassmorphism effects
14. **ShimmerButton** - Shimmer effect buttons
15. **EmptyState** - Empty state UI
16. **PricingToggle** - Monthly/Annual switcher
17. **FeatureComparison** - Feature comparison table
18. **MagicCard** - 3D interactive card with spotlight effect

### 📄 Pages (13)

1. **/** - Homepage
   - Hero with animated gradients
   - Features showcase
   - Pricing cards
   - Testimonials
   - FAQ accordion
   - Newsletter signup

2. **/about** - About page
   - Company mission
   - Team values
   - Vision statement

3. **/blog** - Blog listing
   - Post grid
   - Categories
   - Read time

4. **/blog/getting-started-with-ai** - Sample blog post
   - Full article layout
   - Related posts
   - Social sharing

5. **/contact** - Contact page
   - Contact form
   - Office location
   - Support hours

6. **/components** - Component library
   - Basic components showcase
   - Advanced components showcase
   - Live demos
   - Code examples

7. **/advanced-components** - Advanced showcase
   - Command Palette demo
   - Chat Interface demo
   - Toast notifications demo
   - Pricing Calculator demo
   - Social Proof widgets demo
   - File Upload demo
   - All with code snippets

8. **/dashboard** - Dashboard demo
   - Metrics overview
   - API usage tracking
   - Quick actions
   - AI chat assistant
   - API keys management
   - Analytics charts

9. **/changelog** - Product changelog
   - Version timeline
   - Feature announcements
   - Bug fixes log
   - Update subscription

10. **/privacy** - Privacy policy
11. **/terms** - Terms of service
12. **/404** - Custom 404 page

### 🎨 Layouts

- **main.astro** - Main layout with header, footer, command palette, and cookie consent

### 🛠️ Utilities

- **withBase()** - Base path helper for GitHub Pages routing
- **cn()** - Tailwind class merging utility

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to customize your brand colors. The theme uses CSS variables for easy customization:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... more variables */
  }
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

### Command Palette

Customize commands in `src/components/CommandPalette.tsx`:

```tsx
const commands: CommandItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Go to homepage",
    icon: Home,
    action: () => window.location.href = withBase("/"),
    category: "Navigation",
  },
  // Add your own commands...
];
```

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
│       └── deploy.yml              # GitHub Pages deployment
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/                     # shadcn/ui primitives
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── tooltip.tsx
│   │   ├── AdvancedShowcase.tsx    # Advanced components demo
│   │   ├── AnimatedCounter.tsx     # Number animations
│   │   ├── BentoGrid.tsx          # Grid layout
│   │   ├── ChatInterface.tsx      # AI chat component
│   │   ├── CodeBlock.tsx          # Code display
│   │   ├── CommandPalette.tsx     # Cmd+K navigation
│   │   ├── ComponentShowcase.tsx  # Basic components demo
│   │   ├── ComponentTabs.tsx      # Component page tabs
│   │   ├── CookieConsent.tsx      # GDPR cookie banner
│   │   ├── EmptyState.tsx         # Empty states
│   │   ├── FAQ.tsx                # FAQ accordion
│   │   ├── Features.tsx           # Features section
│   │   ├── FeatureComparison.tsx  # Feature table
│   │   ├── FileUpload.tsx         # File uploader
│   │   ├── Footer.tsx             # Site footer
│   │   ├── GlassCard.tsx          # Glassmorphism
│   │   ├── GradientText.tsx       # Animated gradients
│   │   ├── Header.tsx             # Site header
│   │   ├── Hero.tsx               # Hero section
│   │   ├── MagicCard.tsx          # 3D interactive card
│   │   ├── MarqueeLogos.tsx       # Logo carousel
│   │   ├── MetricsDashboard.tsx   # Analytics dashboard
│   │   ├── Pricing.tsx            # Pricing cards
│   │   ├── PricingCalculator.tsx  # Interactive pricing
│   │   ├── PricingToggle.tsx      # Billing toggle
│   │   ├── ShimmerButton.tsx      # Shimmer effects
│   │   ├── SocialProof.tsx        # Trust widgets
│   │   ├── StatCard.tsx           # Metric cards
│   │   ├── Testimonials.tsx       # Customer reviews
│   │   ├── ThemeToggle.tsx        # Dark/light toggle
│   │   ├── Timeline.tsx           # Timeline display
│   │   └── ToastDemo.tsx          # Notification demo
│   ├── layouts/
│   │   └── main.astro             # Main layout
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro        # Blog listing
│   │   │   └── getting-started-with-ai.astro
│   │   ├── 404.astro              # Not found page
│   │   ├── about.astro            # About page
│   │   ├── advanced-components.astro # Advanced demos
│   │   ├── changelog.astro        # Version history
│   │   ├── components.astro       # Component library
│   │   ├── contact.astro          # Contact page
│   │   ├── dashboard.astro        # Dashboard demo
│   │   ├── index.astro            # Homepage
│   │   ├── privacy.astro          # Privacy policy
│   │   └── terms.astro            # Terms of service
│   └── styles/
│       └── global.css             # Global styles
├── astro.config.js                # Astro configuration
├── components.json                # shadcn/ui config
├── package.json
├── tailwind.config.mjs            # Tailwind config
└── tsconfig.json                  # TypeScript config
```

## 🛠️ Tech Stack

- **[Astro 4.16](https://astro.build/)** - Static site generator
- **[React 18](https://react.dev/)** - UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Framer Motion 11](https://www.framer.com/motion/)** - Animations
- **[Lucide Icons](https://lucide.dev/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## ⌨️ Keyboard Shortcuts

- **Cmd/Ctrl + K** - Open command palette
- **Escape** - Close command palette/modals
- **Arrow Keys** - Navigate command palette
- **Enter** - Execute selected command

## 🎨 Design Philosophy

This template follows modern SaaS design principles:

- **Minimalism** - Clean, uncluttered interface
- **Consistency** - Unified design language
- **Hierarchy** - Clear visual structure
- **Accessibility** - WCAG 2.1 compliant
- **Performance** - Optimized for speed
- **Responsiveness** - Mobile-first approach

## 🌟 Unique Features

What makes this template stand out:

1. **Command Palette** - Modern navigation pattern used by Linear, Vercel, GitHub
2. **Complete Dashboard** - Not just a landing page, includes a full dashboard demo
3. **AI-Ready Components** - Chat interface, metrics dashboard perfect for AI products
4. **Advanced Interactions** - Drag-drop, real-time calculations, animated counters
5. **Production Ready** - All components handle edge cases and are fully functional
6. **No Setup Required** - Works out of the box with zero configuration

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ctrimm/astro-genai-startup-theme/issues).

## 📄 License

MIT License - feel free to use this template for your own projects!

Copyright (c) 2025

## 🙏 Credits

- Inspired by modern SaaS landing pages (Linear, Vercel, Stripe)
- Components inspired by [reactbits.dev](https://reactbits.dev)
- Built with love for the GenAI community

## 💖 Support

If you find this template useful, please consider:
- ⭐ Starring the repository
- 🐦 Sharing on social media
- 📝 Writing a blog post about it
- 🤝 Contributing improvements

## 📸 Screenshots

Visit the [live demo](https://ctrimm.github.io/astro-genai-startup-theme/) to see all components in action!

---

**Built with ❤️ for the GenAI community**

*Want to build something amazing? This template has everything you need to launch your AI product today.*
