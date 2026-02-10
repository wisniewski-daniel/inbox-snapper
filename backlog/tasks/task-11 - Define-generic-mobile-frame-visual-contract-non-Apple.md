---
id: TASK-11
title: Define generic mobile frame visual contract (non-Apple)
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'm-2'
dependencies:
  - TASK-6
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Establish a mobile-style frame contract that is clearly generic and avoids Apple/iPhone visual identity.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/update visual assertions or snapshot checks for frame geometry and safe content viewport.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export mobile PNG from Gmail and verify the frame reads as generic (not Apple/iPhone).
- Confirm email content is not clipped by frame chrome.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Mobile frame visual style is generic and avoids Apple/iPhone-specific cues.
- [ ] #2 Frame defines a stable content viewport with safe area for email rendering.
- [ ] #3 Mobile visual contract is documented for consistent future exports.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
