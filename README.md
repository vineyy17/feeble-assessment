# Feeble Frontend Engineer Assessment

A pixel-perfect implementation of the hero section design for Feeble's frontend developer assessment. This project demonstrates attention to detail, animation handling, and code quality through a responsive, interactive hero section.

## 🚀 Live Demo

**Deployed Website:** [https://feeble-assessment-divine.vercel.app/](https://feeble-assessment-divine.vercel.app/)

**Design Reference:** [Figma Prototype](https://www.figma.com/design/2TLLR4TOFL4W5YFRz9cHIt/Frontend-Developer-Assignment?node-id=1-39&t=255CxtYEP1lA3Z77-0)

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.9 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS with CSS Modules
- **Animations:** GSAP (GreenSock Animation Platform) with ScrollTrigger
- **Smooth Scrolling:** Lenis
- **Text Animations:** Splitting.js
- **Deployment:** Vercel

## ✨ Features Implemented

### UI Components
- **Navigation Menu:** Responsive navigation with collapsible mobile menu
- **Badge:** "#1 iMessage Automation Tool" badge with icon
- **CTA Section:** Main heading with highlighted "iMessage" text, subtext, and two action buttons
- **Scroll Indicator:** Animated "Scroll to learn more" with bouncing arrow

### Animations
- **Bird Animations:** Multiple bird elements with scroll-triggered animations
  - Cloud birds: Animate in from bottom on scroll (desktop) or immediately (mobile/tablet)
  - Upper birds: Staggered fade-in animations with duplicate elements for layered effects
  - Flying birds: Horizontal flight animations across the viewport
- **Cloud Animation:** Soft fade-in animation for the cloud background
- **Text Animations:** Blur-in effect for main CTA text using splitting.js
- **Mobile Menu:** Smooth slide-down animation with hamburger-to-X icon transition

### Responsive Design
- Fully responsive across desktop, tablet, and mobile breakpoints
- Mobile-optimized navigation with collapsible menu
- Adaptive bird sizes and positions for different screen sizes
- Responsive typography and spacing adjustments

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and global styles
│   └── page.tsx            # Home page
├── src/
│   ├── components/
│   │   ├── Hero.tsx        # Main hero section component
│   │   ├── HeroBirds.tsx   # Bird elements and animations
│   │   ├── NavMenu.tsx     # Navigation menu component
│   │   ├── Badge.tsx       # Badge component
│   │   └── CTA.tsx         # Call-to-action section
│   ├── styles/
│   │   ├── components/     # Component-specific SCSS modules
│   │   ├── abstracts/      # Variables, mixins, breakpoints
│   │   └── base/           # Normalize and generic styles
│   ├── assets/             # Images and icons
│   ├── animations/         # Animation utilities (scroll, text)
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Library configurations (GSAP)
└── public/                 # Static assets (favicon)
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20.9 or higher
- npm, yarn, or pnpm

### Installation

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

The application will be available at `http://localhost:3000`

## 📝 Implementation Notes

### Design Fidelity
- All spacing, typography, and colors match the Figma design specifications
- Pixel-perfect implementation using rem units with a custom `toRem()` SCSS function
- Responsive breakpoints: `tablet` (≤865px) and `phone-tab` (≤500px)

### Animation Approach
- GSAP ScrollTrigger used for scroll-based animations on desktop
- Immediate animations on mobile/tablet for better UX
- Smooth easing functions (`power2.out`, `power1.in`) for natural motion
- Visibility control for flying birds to prevent layout shifts

### Code Organization
- Component-based architecture with clear separation of concerns
- SCSS modules for scoped styling
- Custom hooks (`useIsomorphicLayoutEffect`) for client-side only code
- Reusable utility functions and mixins

### Assumptions & Decisions
- Mobile menu collapses on screens ≤500px (phone-tab breakpoint)
- Cloud birds animate immediately on mobile/tablet without scroll trigger
- All animations respect reduced motion preferences through GSAP's built-in handling
- Assets consolidated into single `src/assets` folder for better organization

## 🎯 Evaluation Criteria Coverage

### Pixel-Perfect Accuracy ✅
- Precise spacing, alignment, typography, and colors
- Visual parity with Figma design across all breakpoints

### Animation & Interaction Fidelity ✅
- All transitions and animations implemented as specified
- Smooth timing and easing aligned with design intent
- Interactive states (hover, active) for buttons and links

### Code Structure & Quality ✅
- Clean, readable, and well-organized codebase
- Logical component structure with separation of concerns
- Maintainable and reusable code patterns
- TypeScript for type safety

## 📄 License

This project was created as part of a technical assessment for Feeble.
