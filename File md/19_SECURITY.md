# 19_SECURITY.md

# Security Guide

## Philosophy

Security is a default requirement, not an optional feature.

Build secure systems from the beginning.

---

# Security Mindset

Always assume:

- Input is untrusted
- Users make mistakes
- Attackers look for weak points

Validate everything.

---

# Input Validation

Always validate:

- Forms
- URL parameters
- Query strings
- Uploaded files
- API responses

Never trust client-side validation alone.

---

# Secrets

Never expose:

- API Keys
- Tokens
- Private credentials
- Environment variables

Use environment variables for sensitive data.

---

# Authentication

If authentication is required:

- Use trusted providers
- Store tokens securely
- Expire sessions appropriately

Never build custom authentication unless necessary.

---

# Authorization

Authentication identifies users.

Authorization controls what they can do.

Always verify permissions on protected actions.

---

# Dependencies

- Keep packages updated.
- Remove unused dependencies.
- Avoid abandoned libraries.

Review dependencies regularly.

---

# File Uploads

Validate:

- File type
- File size
- File name

Reject unexpected formats.

---

# Error Messages

Do not expose:

- Stack traces
- SQL errors
- Internal paths
- Secrets

Provide user-friendly messages instead.

---

# HTTP Security

Enable where applicable:

- HTTPS
- Secure headers
- CSP
- HSTS

---

# Portfolio Projects

For static portfolio websites:

- No exposed secrets
- Contact forms via trusted service
- Sanitize user input
- Protect analytics keys

Avoid unnecessary backend infrastructure.

---

# Security Checklist

Before deployment:

[ ] Secrets protected
[ ] Inputs validated
[ ] Dependencies updated
[ ] Sensitive errors hidden
[ ] HTTPS enabled
[ ] Permissions verified
[ ] Secure configuration reviewed

End of Security Guide.
