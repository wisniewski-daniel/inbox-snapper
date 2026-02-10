---
id: TASK-13
title: Add Desktop/Mobile mode toggle with local persistence
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
dependencies:
  - TASK-6
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Let users choose desktop or mobile export mode and persist the last used mode locally.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add tests for mode toggle behavior and storage persistence across sessions.
- Validate exported mode selection drives correct render path.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Switch modes in UI, restart browser, and verify last mode is restored.
- Export one PNG in each mode and confirm selected mode is honored.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 User can switch between desktop and mobile export modes in extension UI.
- [ ] #2 Last selected mode persists locally across browser restarts.
- [ ] #3 Selected mode reliably controls export output behavior.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
