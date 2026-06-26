# 11_COMPONENTS.md

# Component System

## Philosophy

Components are building blocks.

Every component must solve one problem well and be reusable.

---

# General Rules

- Single responsibility
- Reusable
- Composable
- Accessible
- Responsive
- Predictable API
- Minimal props

---

# Required States

Every interactive component should support:

- Default
- Hover
- Active
- Focus
- Disabled
- Loading
- Error
- Success (when applicable)

---

# Button

Rules

- One primary action per screen
- Secondary actions should not compete visually
- Loading state replaces icon/text with spinner
- Never disable without explanation

Variants

- Primary
- Secondary
- Outline
- Ghost
- Destructive
- Link

---

# Input

Support:

- Label
- Placeholder
- Description
- Validation
- Error message
- Success state
- Disabled
- Required indicator

Always associate labels correctly.

---

# Card

Cards are containers, not decoration.

Should contain:

- Clear hierarchy
- Consistent padding
- Optional actions
- Optional footer

Avoid card-in-card layouts.

---

# Modal

Use only when necessary.

Must support:

- Escape key
- Outside click (optional)
- Focus trap
- Scroll lock
- Accessible title

---

# Navigation

Navbar:

- Predictable
- Minimal
- Sticky only when useful

Sidebar:

- Group navigation logically
- Show active location
- Collapse gracefully

---

# Table

Include:

- Sorting
- Empty state
- Loading state
- Pagination when required
- Responsive behavior

---

# Empty State

Never leave blank screens.

Include:

- Explanation
- Suggested action
- Helpful illustration (optional)

---

# Error State

Always explain:

- What happened
- Why (if known)
- How to recover

Avoid generic "Something went wrong."

---

# Loading

Prefer:

- Skeletons
- Progressive rendering
- Optimistic updates

Avoid endless spinners.

---

# Icons

Use consistently.

Never mix icon styles.

Icons should support—not replace—labels.

---

# Accessibility

All components must support:

- Keyboard navigation
- Visible focus
- Screen readers
- Proper semantics

---

# Component Checklist

Before shipping:

[ ] Reusable
[ ] Accessible
[ ] Responsive
[ ] Loading handled
[ ] Error handled
[ ] Empty state handled
[ ] Consistent spacing
[ ] Clear naming

End of Component Guide.
