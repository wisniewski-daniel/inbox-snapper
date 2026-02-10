---
id: TASK-26
title: Align paginated PDF layout with PNG visual contract
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'm-3'
dependencies:
  - TASK-24
  - TASK-4
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Ensure paginated PDF pages keep the same layout/padding quality expectations as PNG exports.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add layout consistency assertions comparing PDF page framing rules to PNG contract expectations.
- Add checks ensuring no Gmail UI artifacts appear in paginated pages.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Compare one long-email PNG export and paginated PDF output for padding/readability consistency.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Paginated PDF output follows the same clean-content visual contract as PNG exports.
- [ ] #2 Padding/margins are consistent and intentional across paginated pages.
- [ ] #3 No Gmail UI elements are present on paginated pages.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
