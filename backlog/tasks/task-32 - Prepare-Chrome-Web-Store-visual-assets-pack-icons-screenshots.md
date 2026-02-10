---
id: TASK-32
title: Prepare Chrome Web Store visual assets pack (icons + screenshots)
status: To Do
assignee: []
created_date: '2026-02-10 01:05'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'M3: v0.3 Quality + Launch — PDF quality + privacy checks + legal + CWS assets'
dependencies:
  - TASK-12
  - TASK-19
documentation:
  - backlog/docs/RELEASE.md
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Prepare the CWS visual asset pack (icons and screenshots) aligned with implemented Phase 1 behavior.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Run fixture-based tests and standard gates to confirm no regressions while preparing capture assets.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Verify asset inventory includes required icons and screenshots for desktop PNG, mobile PNG, and PDF export outcomes.
- Confirm screenshots reflect real behavior (Gmail-only scope, clean content outputs).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 CWS-required icon set is prepared and organized.
- [ ] #2 Screenshot set includes desktop mockup, mobile mockup, and PDF example aligned with actual product behavior.
- [ ] #3 Asset checklist maps directly to canonical release requirements.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
