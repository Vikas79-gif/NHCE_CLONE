# Project Configuration for NHCE Website

## Project Overview
This is a comprehensive website for New Horizon College of Engineering (NHCE), designed to showcase academic programs, campus facilities, placements, and admission process. The project uses modern web technologies including Next.js, TypeScript, and Tailwind CSS.

## Technology Stack

### Framework
- **Next.js 16.x** - React-based web framework for server-side rendering
- **TypeScript** - Type-safe JavaScript with comprehensive typing
- **Tailwind CSS** - Modern CSS framework with utility classes

### Components & Libraries
- **lucide-react** - Icon library with 2000+ icons
- **framer-motion** - Animation library for smooth transitions
- **clsx** - Class name utilities for conditional styling
- **tailwind-merge** - Utility for managing conflicting Tailwind classes

### Development & Build Tools
- **Turbopack** - Fast Next.js bundler
- **Vercel** - Recommended deployment platform
- **ESLint + Prettier** - Code quality and formatting

## Project Structure

### Main Directories
```
src/
├── app/                          # Next.js application routes
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About NHCE information
│   ├── academics/page.tsx     # Academic programs
│   ├── admissions/page.tsx    # Admission process
│   ├── placements/page.tsx    # Career opportunities
│   ├── gallery/page.tsx       # Campus images
│   └── contact/page.tsx        # Contact form and information
├── components/                  # Reusable UI components
│   ├── Navbar.tsx              # Responsive navigation
│   ├── Footer.tsx              QL Footer
│   ├── Hero.tsx               # Hero section with animations
│   ├── Programs.tsx           # Program listings
│   ├── Stats.tsx              # Animated statistics
│   ├── Campus.tsx             # Facility showcase
│   ├── Placements.tsx         # Placement information
│   ├── Testimonials.tsx       # Student reviews
│   └── CTA.tsx                # Call-to-action components
├── globals.css                  # Global styles and animations
└── layout.tsx                   # Root layout
```

### Static & Public Assets
- `public/` - Static images, logos, and public assets
- `package.json` - Project dependencies
- `next.config.ts` - Next.js configuration
- `tsconfig.json`、どちら TypeScript設定

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Tailwind CSS responsive utilities
- Smooth animations and transitions
- Cross-browser compatibility

### 2. Performance Optimization
- Server-side rendering (SSR)
- Static site generation (SSG)
- Image optimization
- Code splitting

### 3. Accessibility
- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

### 4. SEO Optimization
- Meta tags and OpenGraph
- XML sitemaps
- Robots.txt
- Structured data

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Access at http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Type checking
npm run lint

# Format code
npm run format

# Run tests (if any)
npm test
```

## Deployment

### Vercel Deployment
The project is optimized for Vercel deployment:

```bash
# Deploy from GitHub
gh pr create

# Deploy to Vercel
vercel deploy

# Production deployment
vercel --prod
```

### Environment Variables
```bash
# Add to Vercel dashboard or .env.local
NEXT_PUBLIC_APP_URL=https://your-domain.com
VERCEL_ENV=production
```

## Design System

### Color Scheme
```css
:root {
  --nhce-primary: #0a2463;      /* Main NHCE blue */
  --nhce-secondary: #1e3a8a;   /* Slate blue */
  --nhce-accent: #f59e0b;      /* Golden amber */
  --nhce-light: #f8fafc;       /* Light background */
  --nhce-dark: #0f172a;        /* Dark text */
  --nhce-slate: #334155;       /* Secondary text */
}
```

### Typography
- **Font Family:** Inter, system-ui, sans-serif
- **Heading:** Bold weight, tracking-tight
- **Body:** Regular weight, leading-relaxed

### Spacing System
Based on Tailwind's default spacing scale (4px increments)

## Animation System

### Custom CSS Animations
```css
/* Gradient shifts */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Float effect */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Fade in up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Component Architecture

### Reusable Components
Each component follows these principles:
- **Single responsibility** - One component per feature
- **TypeScript** - Full type safety
- **Accessibility** - WCAG 2.1 AA compliance
- **Responsive** - Works on all devices
- **Testable** - Built for easy testing

### Component Examples
```tsx
// Hero.tsx - Example of component structure
export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Animated background */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Main content with animations */}
      </div>
    </section>
  );
}
```

## Security Best Practices

### Client-Side Security
- Input validation and sanitization
- Rate limiting on contact forms
- CSRF protection

### Server-Side Security
- Headers configuration
- Content Security Policy (CSP)
- Secure cookie settings

## Internationalization (i18n)

### Current Setup
- English only (primary language)
- Plans for multi-language support
- SEO localization ready

## Performance Monitoring

### Metrics to Track
- **Lighthouse** - Performance audit
- **Web Vitals** - Core Web Vitals
- **Google PageSpeed** - Speed insights
- **Accessibility** - Screen reader tests

### Optimization Targets
- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 2.5s
- **Largest Contentful Paint:** < 4.0s
- **Cumulative Layout Shift:** < 0.1

## Future Enhancements

### Planned Features
1. **Student Portal** - Integrated student management system
2. **Virtual Tours** - 360° campus tours
3. **AI Chatbot** - Automated admission guidance
4. **Online Applications** - Digital admission forms
5. **News & Events** - College news and activities

### Technical Upgrades
1. **Micro frontends** - Modular architecture
2. **GraphQL API** - Efficient data fetching
3. **Edge Functions** - Serverless computing
4. **Database Integration** - Dynamic content management

## Testing Strategy

### Unit Tests
- React components testing
- TypeScript type checking
- Utility functions testing

### Integration Tests
- API endpoints
- Form submissions
- Navigation flows

### E2E Tests
- User journey testing
- Cross-browser compatibility
- Mobile responsiveness

## Documentation

### Generated Documentation
- `ABOUT.md` - Technical project details
- `README.md` - Usage and setup
- `CLAUDE.md` - Configuration and standards

### API References
- Next.js Documentation
- Tailwind CSS Documentation
- Vercel Deployment Guide

## Monitoring & Maintenance

### Health Checks
```bash
# Check application status
curl http://localhost:3000

# Monitor performance
npm run lint
npm run build
```

### Regular Maintenance
- Weekly dependency updates
- Monthly performance audits
- Quarterly security reviews
- Annual design refreshes

## Credits

### Built With
- **Claude Code** - AI-assisted development
- **Next.js** - Web framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### Attribution
- **Lead Developer:** VIKAS
- **AI Assistant:** Claude Code
- **Icons:** Lucide React
- **Animations:** Framer Motion

---

*Document generated by Claude Code*
*Co-authored-by: Claude Code <noreply@anthropic.com>*
*🤖 Generated with [Claude Code](https://claude.com/claude-code)*