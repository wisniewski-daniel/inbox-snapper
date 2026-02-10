---
id: TASK-25
title: Add paginated PDF regression tests for gaps and duplicates
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'm-3'
dependencies:
  - TASK-24
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Prevent pagination quality regressions by asserting no missing sections or confusing duplicate slices.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add long-fixture pagination tests that detect large content gaps and duplicate slice patterns.
- Ensure failures produce actionable debug context.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Manually inspect long-email PDF export and confirm no obvious missing sections or duplicated page content.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Automated tests detect and fail on pagination gaps/missing sections for long content.
- [ ] #2 Automated tests detect and fail on duplicated/overlapping slices that harm readability.
- [ ] #3 Regression checks are integrated into standard test workflow.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
