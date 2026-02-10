---
id: TASK-22
title: Build fixture harness foundation (short/long/images)
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'm-1'
dependencies:
  - TASK-10
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Introduce a deterministic fixture harness before broad export test work to reduce rework and make automation agent-friendly.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/confirm fixture loader utilities that run without Gmail credentials.
- Confirm harness supports short, long, and image-heavy fixture categories.
- Run at least one PNG fixture test and one PDF fixture test through the harness.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Compare one fixture-driven expectation with one manual Gmail export to confirm fixture realism.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Fixture harness executes deterministically without requiring Gmail login.
- [ ] #2 Harness supports canonical fixture categories: short, long, and image-heavy.
- [ ] #3 Harness is reusable by both PNG and PDF test suites.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
