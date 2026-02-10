---
id: TASK-24
title: Implement PDF Paginated renderer (multi-page for long emails)
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'm-2'
dependencies:
  - TASK-22
  - TASK-23
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Implement Paginated PDF rendering for long emails so long content exports as ordered multi-page output.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture tests asserting long fixtures produce more than one PDF page.
- Add fixture checks for stable page order and readable continuation.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export a long Gmail newsletter-style email to PDF and confirm multi-page output in correct reading order.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Paginated renderer produces multi-page output for long-email fixtures.
- [ ] #2 Paginated output keeps correct page order and readable continuity.
- [ ] #3 Paginated output preserves Phase 1 visual contract (clean content, padding, no Gmail UI).
- [ ] #4 Paginated renderer is callable by automatic PDF selection logic.
- [ ] #5 No automated Gmail login flow is introduced.
- [ ] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
