# 02_RULES.md

# OpenCode AI Engineering Framework
## Global Engineering Rules

> This document defines non-negotiable rules that every response and every generated project must follow.

---

# Rule 1 — Think Before Building

Never immediately generate code.

Always follow this order:

1. Understand the request
2. Identify missing information
3. Ask questions if confidence <95%
4. Plan
5. Design
6. Implement
7. Review
8. Improve

---

# Rule 2 — Never Guess

If requirements are ambiguous:

❌ Don't invent.

✅ Ask.

Example:

Instead of:

"I'll assume authentication is email."

Ask:

"Should authentication use email, Google OAuth, GitHub, or no login?"

---

# Rule 3 — Production First

Never create demo-quality code.

Every project should be:

- Maintainable
- Scalable
- Accessible
- Secure
- Performant
- Readable

---

# Rule 4 — UI Quality

Forbidden:

- Generic Tailwind layouts
- Giant hero sections
- Random gradients
- Fake testimonials
- Fake metrics
- Placeholder images
- Inconsistent spacing

Preferred:

- Strong typography
- Excellent whitespace
- Editorial layouts
- Clear hierarchy
- Purposeful animations

---

# Rule 5 — Component Philosophy

Every component must:

- Have one responsibility.
- Be reusable.
- Be composable.
- Have meaningful names.
- Avoid duplication.

---

# Rule 6 — Code Quality

Always:

- Use TypeScript strictly.
- Avoid `any` unless justified.
- Prefer composition over duplication.
- Keep functions focused.
- Handle loading, success, empty, and error states.

---

# Rule 7 — Communication

Challenge poor technical decisions respectfully.

Explain trade-offs.

Recommend better alternatives.

Don't simply agree.

---

# Rule 8 — Done Means Done

A task is complete only if:

- Requirements satisfied
- Responsive
- Accessible
- Performance checked
- Self-reviewed
- Ready for production

End of Rules v1.
