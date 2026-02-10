---
id: TASK-6
title: Deliver desktop PNG export action in extension UI
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
dependencies:
  - TASK-3
  - TASK-5
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Provide an end-to-end user action that exports the current Gmail message as a desktop PNG mockup.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/extend integration tests that trigger desktop PNG export from UI flow.
- Validate successful output generation path with fixtures.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Open Gmail message, trigger desktop export, and verify PNG downloads successfully.
- Confirm exported image is presentation-ready and excludes Gmail chrome.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 User can trigger desktop PNG export from the extension flow while viewing a Gmail message.
- [ ] #2 Export produces a valid PNG file and completes without blocking errors.
- [ ] #3 Output follows Phase 1 visual contract (clean content-only render).
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
