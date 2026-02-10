---
id: TASK-19
title: 'Implement automatic PDF selection (Fit for short, Paginated for long)'
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'm-2'
dependencies:
  - TASK-18
  - TASK-24
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Replace manual PDF mode UX with automatic selection based on email length/content characteristics per Phase 1 expectations.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add policy tests for deterministic renderer selection using fixture inputs.
- Add integration tests showing short/medium fixtures route to Fit and long fixtures route to Paginated.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export one short Gmail email and one long Gmail email to PDF.
- Confirm short output is single-page and long output is multi-page without requiring a Fit/Paginated toggle.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 PDF export automatically selects Fit for short/medium emails and Paginated for long emails.
- [ ] #2 Phase 1 PDF flow does not require introducing a Fit/Paginated mode toggle UI.
- [ ] #3 Selection policy is deterministic and covered by automated tests.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
