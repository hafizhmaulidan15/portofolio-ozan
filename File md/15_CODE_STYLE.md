# 15_CODE_STYLE.md

# Code Style Guide

## Philosophy

Readable code beats clever code.

Optimize for the next developer.

---

# General Rules

- Prefer clarity over brevity.
- Keep functions focused.
- Avoid duplicated logic.
- Favor composition over inheritance.

---

# Naming

Components:
PascalCase

Hooks:
useSomething

Variables:
camelCase

Constants:
UPPER_SNAKE_CASE

Files:
kebab-case

---

# Functions

- One responsibility.
- Maximum reasonable complexity.
- Return early when possible.
- Avoid deeply nested conditions.

---

# Components

- Small and reusable.
- Receive minimal props.
- Separate UI from business logic.

---

# Comments

Write comments only when intent is not obvious.

Avoid commenting obvious code.

---

# Imports

- Group external imports first.
- Then internal imports.
- Remove unused imports.

---

# Error Handling

Always handle:

- Loading
- Empty
- Error
- Success

Never fail silently.

---

# TypeScript

- Prefer strict typing.
- Avoid any.
- Define reusable types.
- Validate external data.

---

# Styling

- Use design tokens.
- Keep spacing consistent.
- Avoid inline styles unless necessary.

---

# Quality Checklist

Before completion:

[ ] No duplicated logic
[ ] Meaningful names
[ ] Strict typing
[ ] Reusable components
[ ] Consistent formatting
[ ] Error handling
[ ] Easy to read

End of Code Style Guide.
