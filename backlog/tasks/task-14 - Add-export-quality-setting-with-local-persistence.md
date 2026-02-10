---
id: TASK-14
title: Add export quality setting with local persistence
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
dependencies:
  - TASK-13
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Support a basic local quality preference and ensure it consistently affects export output settings.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add tests for quality setting persistence and parameter propagation into export pipeline.
- Confirm default value behavior and stored value restore behavior.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Change quality setting, restart browser, and verify setting persists.
- Run export after setting change and confirm output reflects selected quality behavior.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Quality setting exists (if present in UI) and persists locally across sessions.
- [ ] #2 Export flow consistently uses stored quality value.
- [ ] #3 Default and changed quality states behave predictably.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
