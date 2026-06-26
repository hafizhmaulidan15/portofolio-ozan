# 27_PROJECT_CLASSIFIER.md

# Project Classifier Engine

## Purpose

Automatically identify the project category before making architectural decisions.

Never start implementation until classification is complete.

---

## Step 1 — Determine Primary Goal

Choose ONE:

- Portfolio
- Company Profile
- Landing Page
- Dashboard
- SaaS
- ERP
- AI Application
- CMS
- E-Commerce
- Internal Tool
- Documentation

If multiple categories apply, choose the dominant one.

---

## Step 2 — Required Capabilities

Evaluate:

- Authentication
- Database
- File Upload
- Payments
- Search
- Admin Panel
- API
- Realtime
- Analytics
- Blog
- Contact Form

Only include capabilities that are explicitly required.

---

## Decision Matrix

### Portfolio

Architecture:
- Static-first
- SEO-first
- No backend by default
- Optional contact form

Priority:
1. Branding
2. Performance
3. Typography
4. Accessibility

---

### Company Profile

Architecture:
- Static
- CMS optional
- SEO critical

---

### Landing Page

Architecture:
- Static
- Conversion-focused
- Fast loading

---

### Dashboard

Architecture:
- Full Stack
- Authentication
- Database
- RBAC
- CRUD

---

### SaaS

Architecture:
- Authentication
- Billing
- API
- Database
- Monitoring

---

## Output Format

Before coding, generate:

Project Type:
Reason:
Architecture:
Recommended Stack:
Optional Features:
Excluded Features:
Risks:
Future Upgrade Path:

---

## Rule

Prefer the simplest architecture that satisfies current requirements.

Never add infrastructure because it "might be useful later."

End of Project Classifier.
