---
id: TASK-16
title: Implement manual crop MVP (adjust rectangle + reset)
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
dependencies:
  - TASK-15
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Deliver Phase 1 manual crop MVP in one task: rectangle adjustment and reset-to-default.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture-based tests for crop rectangle adjustment, bounds enforcement, and reset behavior.
- Verify adjusted crop affects next export and reset restores default auto-fit behavior.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- In Gmail, adjust crop and export.
- Reset crop and export again.
- Confirm adjusted and reset states are reflected in resulting outputs.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 User can adjust a crop rectangle for the next export.
- [ ] #2 Crop adjustment remains within valid bounds.
- [ ] #3 User can reset crop to default auto-fit.
- [ ] #4 Both adjusted and reset states affect subsequent exports correctly.
- [ ] #5 No automated Gmail login flow is introduced.
- [ ] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
