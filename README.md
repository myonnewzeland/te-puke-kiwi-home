# Te Puke Kiwi Home

Website for **Te Puke Holiday Park** — accommodation for seasonal kiwifruit workers, backpackers, and RSE employers in Te Puke, New Zealand.

> Live site: [tepukeholidaypark.co.nz](https://www.tepukeholidaypark.co.nz)
> Repository: [myonnewzeland/te-puke-kiwi-home](https://github.com/myonnewzeland/te-puke-kiwi-home)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build tool | Vite 5 (React SWC plugin) |
| Styles | Tailwind CSS 3 + CSS variables |
| UI components | shadcn/ui (Radix UI primitives) |
| Routing | React Router DOM v6 |
| SEO | react-helmet-async |
| Fonts | Playfair Display (headings) + DM Sans (body) |
| Analytics | Microsoft Clarity |
| Live chat | Tawk.to |
| Unit tests | Vitest + Testing Library |
| E2E tests | Playwright |

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section with three quick-access cards |
| `/accommodation` | Accommodation | Pods, caravans, cabins and on-site facilities |
| `/seasonal-work` | Seasonal Work | Kiwifruit harvest/pruning seasons, visa info, external links |
| `/rse-accommodation` | RSE Accommodation | Information for RSE scheme employers |
| `/contact` | Contact | Contact form, phone, address, Google Maps embed, WhatsApp |

---

## Development

**Requirements:** Node.js 18+ or Bun

```sh
# Clone
git clone https://github.com/myonnewzeland/te-puke-kiwi-home.git
cd te-puke-kiwi-home

# Install dependencies
npm install
# or
bun install

# Start dev server (http://localhost:8080)
npm run dev
```

### Available scripts

```sh
npm run dev        # Development server on port 8080
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run test       # Run unit tests once
npm run test:watch # Unit tests in watch mode
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (Radix UI based)
│   ├── Layout.tsx   # Navbar + main + Footer wrapper
│   ├── Navbar.tsx   # Fixed header with desktop/mobile nav
│   ├── Footer.tsx   # Footer with contact details
│   └── NavLink.tsx  # React Router NavLink wrapper
├── hooks/
│   ├── use-mobile.tsx        # Detects viewport < 768px
│   └── use-scroll-reveal.ts  # IntersectionObserver scroll animations
├── lib/
│   └── utils.ts     # cn() = clsx + tailwind-merge
├── pages/           # One file per route
└── assets/          # Images (hero, accommodation photos, logo)
```

---

## Notes

- No backend — the contact form currently does not submit data anywhere.
- No environment variables are required. All configuration (phone, address, analytics IDs) is hardcoded.
- `lovable-tagger` dev plugin is included from the original Lovable.dev scaffolding; it is only active in development mode and can be safely removed.
- `next-themes`, `recharts`, `embla-carousel`, and many shadcn/ui components are installed but not actively used in the current pages.
