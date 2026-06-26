# 14_FOLDER_STRUCTURE.md

# Folder Structure Guide

## Goal

Choose the folder structure based on project complexity.

Never create folders that are not needed.

---

# Portfolio

src/
├── app/
├── components/
│   ├── ui/
│   └── sections/
├── content/
├── lib/
├── styles/
├── types/
└── public/

---

# Dashboard

src/
├── app/
├── features/
├── components/
├── hooks/
├── services/
├── lib/
├── types/
├── utils/
└── styles/

Group code by feature.

---

# SaaS

apps/
packages/
shared/

Separate reusable packages.

---

# Naming

Components:
PascalCase

Hooks:
useSomething

Utilities:
camelCase

Folders:
kebab-case

---

# Import Rules

Prefer absolute imports.

Avoid deep relative imports.

Good:
@/components/ui/button

Avoid:
../../../../button

---

# Component Organization

ui/
Shared primitives

sections/
Page sections

feature/
Business-specific components

---

# Assets

public/
images/
icons/
fonts/

Keep assets organized.

---

# Rules

- Keep folders shallow.
- Remove unused files.
- One responsibility per module.
- Feature-first organization for large apps.

---

# Definition of Good Structure

- Easy to navigate
- Predictable
- Scalable
- Minimal
- Consistent

End of Folder Structure Guide.
