---
id: doc-5
title: DECISION_RULES
type: other
created_date: '2026-02-10 00:00'
updated_date: '2026-02-10 00:00'
---

# Decision Rules (When to write a decision entry)

Create a decision entry in `backlog/decisions/` when any of the following happens:

1) Adding or expanding permissions (e.g., Gmail host permissions)
2) Introducing a major dependency or changing the stack direction
3) Changing output contract (resolution, padding rules, export formats)
4) Changing scope boundaries (adding Outlook, adding auth/payments)
5) Changing privacy posture (analytics rules, any network behavior)
6) Changing PDF behavior (Fit vs Paginated logic, page sizing)

Decision entries should be short:
- Context
- Decision
- Consequences
- Alternatives considered (optional)