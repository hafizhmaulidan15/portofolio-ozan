# 17_ACCESSIBILITY.md

# Accessibility Guide

## Philosophy

Accessibility is a core quality requirement.

Build products usable by everyone.

---

# Semantic HTML

Always prefer semantic elements:

- header
- nav
- main
- section
- article
- aside
- footer
- button
- form
- label

Avoid replacing semantic elements with generic divs.

---

# Keyboard Support

Every interactive element must be reachable with:

- Tab
- Shift + Tab
- Enter
- Space
- Escape (dialogs)

Visible focus is mandatory.

---

# Forms

Every input must have:

- Label
- Description (when needed)
- Error message
- Required indicator

Never rely only on placeholder text.

---

# Images

Decorative images:
- Empty alt

Informative images:
- Meaningful alt text

Never omit alt text.

---

# Color & Contrast

- Maintain readable contrast.
- Never communicate meaning by color alone.
- Pair colors with icons or text.

---

# Motion

Respect prefers-reduced-motion.

Animations must not block interaction.

---

# Screen Readers

Use:

- aria-label
- aria-describedby
- aria-expanded
- aria-live

Only when semantic HTML is insufficient.

---

# Tables

Include:

- Caption
- Header cells
- Proper scope

---

# Modals

Must support:

- Focus trap
- Escape key
- Return focus on close

---

# Accessibility Checklist

Before shipping:

[ ] Keyboard accessible
[ ] Semantic HTML
[ ] Alt text
[ ] Visible focus
[ ] Accessible forms
[ ] Sufficient contrast
[ ] Screen reader friendly
[ ] Reduced motion support

End of Accessibility Guide.
