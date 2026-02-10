---
id: TASK-18
title: Implement PDF Fit renderer (single-page for short emails)
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
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
Goal: Implement the Fit PDF renderer for short/medium emails and make it usable by automatic PDF selection logic.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture tests asserting short/medium fixtures produce a single-page PDF.
- Add fixture checks confirming Fit output is readable and non-blank.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export a short Gmail email to PDF and confirm the result is one page, readable, and excludes Gmail UI.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Fit renderer produces single-page PDF output for short/medium fixture cases.
- [ ] #2 Fit output preserves Phase 1 visual contract (clean content only, intentional layout/padding).
- [ ] #3 Fit renderer is callable by automatic PDF selection logic.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
