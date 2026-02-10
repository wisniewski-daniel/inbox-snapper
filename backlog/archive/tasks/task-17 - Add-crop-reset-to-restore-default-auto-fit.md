---
id: TASK-17
title: Add crop reset to restore default auto-fit
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:20'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
dependencies: []
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Let users quickly revert crop adjustments back to default auto-fit behavior.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add tests for reset behavior from adjusted states.
- Confirm post-reset exports match default auto-fit output expectations.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Adjust crop, export once, then reset crop and export again.
- Confirm second export returns to default framing behavior.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Reset control restores crop state to default auto-fit baseline.
- [ ] #2 After reset, next export uses default framing instead of prior manual crop.
- [ ] #3 Reset behavior is clear and reliable in UI.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
