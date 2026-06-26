# 13_ARCHITECTURE_DECISION_ENGINE.md

# Architecture Decision Engine

## Purpose

Choose the simplest architecture that satisfies the requirements.

Never over-engineer.

---

# Step 1 — Classify Project

Choose ONE:

- Portfolio
- Company Profile
- Landing Page
- Dashboard
- SaaS
- ERP
- CMS
- AI App
- Internal Tool
- E-Commerce

---

# Step 2 — Decision Tree

## Login Required?

YES
→ Continue

NO
→ Prefer Static Architecture

---

## Database Required?

YES
→ Full Stack

NO
→ Continue

---

## Dynamic User Data?

YES
→ Backend Required

NO
→ Static Architecture

---

## CMS Needed?

YES
→ Headless CMS or MDX

NO
→ Static Content

---

## CRUD Required?

YES
→ Backend + Database

NO
→ Static

---

# Architecture Profiles

## Portfolio

Stack

- Next.js
- TypeScript
- Tailwind
- Motion
- Static Export (optional)

No:

- Database
- Auth
- ORM
- Redis
- Queue
- Cron

Optional:

- Contact Form
- Analytics
- Blog (MDX)

---

## Company Profile

- Static
- SEO First
- CMS Optional

---

## Dashboard

- Auth
- Database
- API
- RBAC
- File Upload
- Analytics

---

## SaaS

- Auth
- Billing
- Database
- API
- Background Jobs
- Monitoring

---

## ERP

- Modular Features
- Permissions
- Audit Log
- Transactions
- Reporting

---

# Final Rule

Always justify the chosen architecture.

Explain:

- Why this architecture?
- Why not something more complex?
- Future upgrade path.

End of Architecture Decision Engine.
