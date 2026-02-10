---
id: TASK-4
title: Apply presentation-safe default layout for desktop mockups
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
dependencies:
  - TASK-3
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Establish predictable margins/padding and readability defaults so desktop exports are slide-ready without cleanup.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture assertions for consistent export padding/safe-area behavior.
- Add at least one readability-focused snapshot/assertion to catch regressions.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export a short and image-heavy Gmail email to PNG and verify margins/padding look intentional.
- Insert exported PNG into PowerPoint and confirm readability at 100% scale.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Desktop render defaults apply intentional, consistent padding and safe margins.
- [ ] #2 Typical short and image-heavy emails export without accidental edge cut-offs.
- [ ] #3 Output remains presentation-ready at normal viewing scale.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
