# Adhish Kacker Portfolio — PRD

## Original Problem
Build a premium personal portfolio website for Adhish Kacker (Senior Product Marketing & GTM Leader specializing in SaaS, AI, AdTech). Premium B2B SaaS aesthetic, Apple-level whitespace, brand gradient #5B0FFF→#FF6B35, dark/light mode, Framer-quality animations.

## Stack
- React 19 (CRA + craco), Tailwind, framer-motion, lucide-react, shadcn/ui, sonner
- FastAPI + MongoDB
- Light mode default, dark mode toggle via `ak-theme` localStorage key

## User Personas
- Recruiters / Hiring Managers (resume + portfolio scan)
- SaaS / AI Founders (engagement / consulting)
- Agency & Enterprise Partners (lead generation)

## Implemented (Dec 2025)
- Sticky glassmorphism navigation with smooth scroll + mobile menu
- Hero with animated gradient mesh, floating expertise cards, stats
- About section with vertical timeline (Hybrid.ai, Mitgo, Marriott, IHG, ABFRL)
- Expertise bento grid (6 cards) with hover glow border
- Work showcase: 6 campaign cards + seasonal banner (Valentine's, IPL 2025, Festive)
- Case Studies: 5 expandable accordions (Challenge/Strategy/Execution/Results + Download PDF placeholder)
- Articles: 13 external article cards opening in new tab, gradient thumbnails
- Animated metric counters
- Testimonials carousel (4 entries) with dots + arrows
- Resume CTA section (View / Download — PDF placeholder toast)
- Contact form POST /api/contact → MongoDB; LinkedIn + email links
- Footer with internal scroll + external links

## Backend Endpoints
- GET /api/ — health
- POST /api/contact — save submission
- GET /api/contact — list submissions
- GET/POST /api/status — boilerplate kept

## Backlog
- P1: Real resume PDF upload + serve `/resume.pdf`
- P1: Replace placeholder Download PDF on case studies with real attachments
- P1: Hook contact form to email delivery (Resend/SendGrid) to adhishkacker@yahoo.com
- P2: Add /admin to view submissions
- P2: SEO — generate sitemap.xml, robots.txt, JSON-LD Person schema
- P2: Replace placeholder testimonials with real attributed quotes + photos
- P2: Add blog/articles CMS so new media mentions can be added without code

## Next Tasks
1. Provide actual resume PDF + put it in /app/frontend/public/resume.pdf and wire buttons
2. Decide on email integration (Resend recommended) for contact form
3. Capture real testimonials and add headshots
