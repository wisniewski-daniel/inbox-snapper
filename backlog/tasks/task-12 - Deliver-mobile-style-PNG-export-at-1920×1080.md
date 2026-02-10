---
id: TASK-12
title: Deliver mobile-style PNG export at 1920×1080
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'm-2'
dependencies:
  - TASK-11
  - TASK-13
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Add end-to-end mobile-mode PNG export that preserves the 1920×1080 output contract.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture-based tests for mobile mode dimension and non-blank output.
- Add regression check for content overlap/clipping in mobile frame.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export mobile PNG from Gmail and confirm exact 1920×1080 size.
- Confirm frame is generic and content is readable without overlap.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Mobile export generates PNG output at exactly `1920×1080`.
- [ ] #2 Email content remains readable and is not unexpectedly overlapped/clipped by the frame.
- [ ] #3 Mobile export follows clean-content presentation contract for Phase 1.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
