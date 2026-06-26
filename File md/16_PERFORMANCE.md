# 16_PERFORMANCE.md

# Performance Guide

## Philosophy

Fast software feels better than feature-heavy software.

Performance is a feature.

---

# Core Goals

- Fast initial load
- Low bundle size
- Smooth interactions
- Efficient rendering
- Stable experience

---

# Rendering Strategy

Prefer:

- Server Components
- Static Rendering
- Incremental rendering when appropriate

Use Client Components only when interaction requires them.

---

# Images

Always:

- Optimize
- Compress
- Lazy load
- Use modern formats
- Provide dimensions

Avoid oversized assets.

---

# Fonts

- Load only required weights
- Prefer next/font
- Minimize font families
- Avoid layout shift

---

# JavaScript

- Ship less JavaScript.
- Split large modules.
- Lazy load heavy features.
- Remove unused dependencies.

---

# Components

Keep components:

- Small
- Focused
- Reusable

Avoid unnecessary re-renders.

---

# Network

Reduce:

- API requests
- Duplicate requests
- Waterfall loading

Cache where appropriate.

---

# Animations

Animations must remain smooth.

Avoid expensive layout recalculations.

Prefer transform and opacity.

---

# Metrics

Target:

- Lighthouse 90+
- CLS low
- LCP fast
- INP responsive

---

# Checklist

Before shipping:

[ ] Images optimized
[ ] Fonts optimized
[ ] Lazy loading applied
[ ] Minimal client JS
[ ] No unnecessary packages
[ ] Smooth scrolling
[ ] Stable layout

End of Performance Guide.
