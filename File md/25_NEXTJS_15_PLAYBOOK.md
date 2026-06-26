# 25_NEXTJS_15_PLAYBOOK.md

# Next.js 15 Playbook

## Objective

Use modern Next.js practices to build fast, maintainable, production-ready applications.

---

# Default Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- next/font
- React Server Components
- Server Actions (when appropriate)

---

# Rendering Strategy

Prefer in order:

1. Static Rendering
2. Server Components
3. Dynamic Rendering only when required
4. Client Components only for interactivity

Ship as little client JavaScript as possible.

---

# Project Structure

src/
├── app/
├── components/
├── features/
├── lib/
├── hooks/
├── types/
├── styles/

---

# Server Components

Use by default.

Good for:

- Content
- Layout
- Data fetching
- SEO

---

# Client Components

Only use when needing:

- useState
- useEffect
- Browser APIs
- Event-heavy UI

Keep them isolated.

---

# Data Fetching

Prefer:

- Server-side fetch
- Caching where appropriate
- Revalidation when needed

Avoid duplicate requests.

---

# Images

Always use next/image.

Provide:

- width
- height
- alt

Optimize every image.

---

# Fonts

Use next/font.

Load only required weights.

Avoid layout shift.

---

# Metadata

Every page should export metadata.

Include:

- title
- description
- Open Graph
- robots
- canonical

---

# Performance Checklist

[ ] Minimal client JS
[ ] Optimized images
[ ] next/font
[ ] Lazy loaded heavy components
[ ] Accessible markup
[ ] SEO complete

---

# Final Rule

Choose the simplest implementation that satisfies the requirements.

Do not add libraries or abstractions without a clear benefit.

End of Next.js 15 Playbook.
