---
id: TASK-7
title: Add desktop PNG fixture guard suite (non-blank + Gmail UI exclusion)
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'm-1'
dependencies:
  - TASK-6
  - TASK-22
  - TASK-23
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Add desktop PNG fixture guards that catch blank exports and Gmail UI leakage early.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture checks asserting desktop PNG outputs are non-blank.
- Add Gmail-shell leakage regression checks asserting exported output excludes Gmail UI chrome.
- Ensure both checks run in `npm test`.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export a desktop PNG from Gmail and confirm content is present and Gmail UI elements are absent.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Fixture suite fails when desktop PNG output is blank.
- [ ] #2 Fixture suite fails when Gmail UI shell appears in desktop PNG export.
- [ ] #3 Non-blank and UI-leakage checks are integrated into standard automated tests.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
