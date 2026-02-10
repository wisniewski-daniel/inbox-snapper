---
id: TASK-3
title: Define Gmail email-content extraction boundary (exclude Gmail UI)
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
dependencies:
  - TASK-1
  - TASK-23
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Ensure captured content contains only the opened email body and excludes Gmail chrome/UI elements.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture tests that include Gmail-like chrome wrappers and assert only email content is extracted.
- Add negative-path test for missing/unsupported message structure.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export from a real Gmail message and visually confirm left nav, top bar, and thread list are not present.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Extraction boundary includes only rendered email content for opened Gmail messages.
- [ ] #2 Gmail UI chrome (navigation/sidebar/header/thread shell) is excluded from capture.
- [ ] #3 Missing/unsupported DOM states fail gracefully without broken export behavior.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
