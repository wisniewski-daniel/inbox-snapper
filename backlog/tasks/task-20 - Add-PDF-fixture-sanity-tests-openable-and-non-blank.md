---
id: TASK-20
title: Add PDF fixture sanity tests (openable and non-blank)
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'm-2'
dependencies:
  - TASK-18
  - TASK-24
  - TASK-23
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Add baseline PDF quality guards that catch empty/corrupt outputs early in fixture tests.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture tests that assert PDF output is openable and non-blank.
- Ensure sanity tests run for at least one Fit and one long-email candidate fixture.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export at least one PDF from Gmail and confirm it opens and contains readable content.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Fixture tests validate PDF outputs are openable and contain non-empty rendered content.
- [ ] #2 Sanity checks are integrated into normal test workflow to prevent silent regressions.
- [ ] #3 Test output clearly identifies corrupt/blank PDF failures.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
