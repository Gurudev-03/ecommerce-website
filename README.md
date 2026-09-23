# SuperCommerce

A premium full-stack ecommerce website built with Next.js 16, Prisma, PostgreSQL, and Tailwind CSS v4.

## Features

- 🛍️ Full product catalogue with categories, flash deals, and featured products
- 🔒 Enterprise-grade security — CSP headers, HSTS, XSS protection, SSL
- 📱 Fully responsive dark UI with glassmorphism design
- ⚡ Server components with DB fallback for instant load
- 🗄️ PostgreSQL database with Prisma ORM
- 🎨 Animated marquee, product cards, category grid, trust section

## Pages

- `/` — Homepage (Hero, Categories, Flash Sale, Featured Products)
- `/products` — All products
- `/deals` — Flash deals
- `/category/[slug]` — Category pages
- `/product/[slug]` — Product detail
- `/cart`, `/wishlist`, `/login`, `/register`
- `/about`, `/blog`, `/careers`, `/contact`, `/help`, `/returns`, `/track`
- `/privacy`, `/terms`, `/cookies`, `/press`

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** PostgreSQL + Prisma 7
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Netlify

## Getting Started

```bash
npm install
# Add DATABASE_URL to .env
npm run dev
```

## Deployment

Deployed on Netlify. Add `DATABASE_URL` as an environment variable in the Netlify dashboard.

## Author

**Gurudev** — first full-stack project 🚀
