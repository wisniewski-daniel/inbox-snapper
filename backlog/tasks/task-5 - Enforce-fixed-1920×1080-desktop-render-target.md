---
id: TASK-5
title: Enforce fixed 1920×1080 desktop render target
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
dependencies:
  - TASK-4
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Guarantee every desktop PNG export matches the Phase 1 required resolution of 1920×1080.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add tests for export dimension enforcement and aspect-safe scaling behavior.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export desktop PNG from Gmail and inspect image properties to confirm exact 1920×1080 dimensions.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Desktop PNG export dimensions are always exactly `1920×1080`.
- [ ] #2 Dimension enforcement does not include Gmail UI content.
- [ ] #3 Scaling behavior keeps email content readable within intended safe area.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
