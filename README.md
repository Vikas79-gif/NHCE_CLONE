# New Horizon College of Engineering Website

## Quick Start Guide

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Overview

This is a modern, responsive website for New Horizon College of Engineering (NHCE) designed to showcase their academic programs, campus facilities, and admission process. Built with Next.js, TypeScript, and Tailwind CSS.

## Key Features

### 🎓 **Academic Programs**
- Comprehensive listing of B.Tech, M.Tech, MBA, MCA, and Ph.D. programs
- Detailed program information and specializations
- Department overview and curriculum highlights

### 🏠 **Campus Showcase**
- Virtual gallery of campus infrastructure
- Facility highlights (library, labs, sports, etc.)
- Student life and campus events documentation

### 📊 **Placement Cell**
- Real-time placement statistics and achievements
- Top recruiting companies and partnerships
- Career guidance and placement process

### 📞 **Contact & Admissions**
- Multi-channel contact options (form, phone, email)
- Complete admission process guidance
- Scholarship and financial aid information

### ✨ **Design Highlights**
- Modern responsive design with animations
- Gradient effects and micro-interactions
- Mobile-first approach for all devices
- Performance optimized with SSR/SSG

## Technology Stack

### Frontend
- **Next.js 16.x** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **lucide-react** - Icon library
- **framer-motion** - Animation library

### Development Tools
- **Vercel Platform** - Deployment & hosting
- **Turbopack** - Fast bundler
- **ESLint/Prettier** - Code quality

## Project Structure

```
nhce-website/
├── src/
│   ├── app/                          # Next.js app routes
│   │   ├── page.tsx                # Home
│   │   ├── about/page.tsx          # About NHCE
│   │   ├── academics/page.tsx     # Programs
│   │   ├── admissions/page.tsx    # Admissions
│   │   ├── placements/page.tsx    # Career Opportunities
│   │   ├── gallery/page.tsx       # Campus Photos
│   │   └── contact/page.tsx        # Get in Touch
│   ├── components/                  # UI components
│   │   ├── Navbar.tsx              # Navigation
│   │   ├── Footer.tsx              QL# Footer
│   │   ├── Hero.tsx               # Hero Section
│   │   ├── Programs.tsx           # Academic Programs
│   │   ├── Stats.tsx              # Statistics
│   │   ├── Campus.tsx             # Facilities
│   │   ├── Placements.tsx         # Careers
│   │   ├── Testimonials.tsx       # Student Reviews
│   │   └── CTA.tsx                # Call-to-Action
│   ├── globals.css                  # Global styles
│   └── layout.tsx                   # Root layout
├── public/                          # Static assets
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Design Elements

### Color Palette
- **NHCE Blue:** #0a2463 (primary)
- **Slate Blue:** #1e3a8a (secondary)
- **Golden Amber:** #f59e0b (accent)

### Animations
- Gradient background shifts
- Floating effects for cards
- Pulse effects on CTAs
- Smooth scroll behavior
- Staggered content animations

## Build & Deployment

### Prerequisites
- Node.js 20+
- npm or yarn

### Local Development
```bash
# Install all dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Production Optimization
- Automatic code splitting
- Image optimization
- CSS tree shaking
- Static site generation for pages

## Accessibility & SEO

### On-Page Optimization
- Semantic HTML structure
- Proper meta tags and OpenGraph
- ALT text for all images
- ARIA labels and roles

### Performance Features
- Fast loading with caching
- Responsive design for all devices
- SEO-friendly routing
- Accessibility compliance

## Hosting & Deployment

### Vercel Deployment
The project is optimized for Vercel deployment:

```bash
# Deploy from GitHub
vercel deploy

# Production deployment
vercel --prod
```

### Environment Variables
```bash
# Add to vercel.json or .env.local
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### GitHub Pages Deployment
For static hosting via GitHub Pages (requires static export):

1. **Enable Static Export** in `next.config.ts`:
   ```typescript
   // next.config.ts
   const nextConfig = {
     output: 'export',        // Enable static export
     images: {
       unoptimized: true,     // Required for static export
     },
   };
   ```

2. **Build and Export**:
   ```bash
   npm run build
   # Output will be in ./out directory
   ```

3. **Deploy to GitHub Pages**:
   - Go to **GitHub → Repository Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** (or `gh-pages` branch)
   - Folder: **/out** (or `/docs` if using docs folder)
   - Save

4. **Your site will be live at**:
   ```
   https://Vikas79-gif.github.io/NHCE_CLONE/
   ```

> **Note**: GitHub Pages only supports static sites. Features requiring server-side rendering (SSR), API routes, or dynamic content will not work. For full Next.js features, use **Vercel** (recommended).

## Contribution Guidelines

### Local Setup
```bash
# Clone the repository
git clone <repository-url>
cd nhce-website

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Code Standards
- TypeScript with strict mode
- ESLint for linting
- Prettier for formatting
- Conventional commits for version control

## Support & Maintenance

### Documentation
- README.md - Project overview
- ABOUT.md - Technical details
- Next.js documentation for framework

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## Contact & Support

### Technical Support
- GitHub Issues for bug reports
- Email: vikas@example.com
- Project documentation in repository

### College Contact
- Phone: +91-80-2663 2000
- Email: admissions@nhce.ac.in
- Website: https://www.newhorizonindia.edu/

---

*Built with ❤️ by VIKAS using Claude Code*
*Generated with Claude Code*
*Co-authored-by: Claude Code <noreply@anthropic.com>*