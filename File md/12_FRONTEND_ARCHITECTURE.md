# 12_FRONTEND_ARCHITECTURE.md

# Frontend Architecture Guide

## Philosophy

Build software that is easy to maintain, extend, and understand.

Code should optimize for readability before cleverness.

---

# Preferred Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Server Components by default
- Client Components only when required
- Zod
- React Hook Form
- TanStack Query (when server state is needed)

---

# Folder Structure

src/
├── app/
├── components/
│   ├── ui/
│   ├── shared/
│   └── feature/
├── features/
├── hooks/
├── lib/
├── services/
├── types/
├── utils/
├── styles/

Group code by feature, not by file type, once the project grows.

---

# Component Rules

- Prefer Server Components.
- Use Client Components only for interactivity.
- Keep components small.
- One responsibility per component.
- Avoid deeply nested props.

---

# Naming

Components:
PascalCase

Hooks:
useSomething

Utilities:
camelCase

Constants:
UPPER_SNAKE_CASE when global.

Files should clearly describe their purpose.

---

# State Management

Prefer:

1. URL state
2. Server state
3. Local component state

Avoid unnecessary global state.

---

# API Layer

Never call fetch directly inside UI when it can be abstracted.

Use:

services/
repositories/
or lib/api/

Keep networking separate from presentation.

---

# Forms

Always include:

- Validation
- Loading state
- Error state
- Success feedback
- Accessible labels

---

# Error Handling

Every page should gracefully handle:

- Loading
- Empty
- Error
- Success

Never leave users without feedback.

---

# Performance

- Lazy load heavy components.
- Optimize images.
- Split large bundles.
- Minimize client JavaScript.
- Cache when appropriate.

---

# Code Quality Checklist

Before merging:

[ ] Strict TypeScript
[ ] No duplicated logic
[ ] Reusable components
[ ] Clean folder structure
[ ] Error handling
[ ] Accessible markup
[ ] Responsive UI
[ ] Production ready

End of Frontend Architecture Guide.
