---
id: TASK-33
title: Run final Phase 1 release gate (checklist + evidence)
status: To Do
assignee: []
created_date: '2026-02-10 01:05'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'M3: v0.3 Quality + Launch — PDF quality + privacy checks + legal + CWS assets'
dependencies:
  - TASK-25
  - TASK-26
  - TASK-28
  - TASK-30
  - TASK-34
documentation:
  - backlog/docs/RELEASE.md
  - backlog/docs/TESTING.md
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Execute final Phase 1 readiness checks and collect evidence for release submission.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Run required gates and capture outcomes: `npm test`, `npm run lint`, and `npm run build`.
- Confirm fixture-based test coverage remains green in final sign-off run.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Run the canonical Gmail smoke checks from `TESTING.md` (desktop/mobile PNG, crop MVP, automatic PDF behavior, privacy network checks).
- Record evidence against `RELEASE.md` checklist items.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Canonical release checklist is completed with evidence for each required section.
- [ ] #2 Manual Gmail smoke tests are executed in a logged-in browser session without automated login behavior.
- [ ] #3 Automated gates (`npm test`, `npm run lint`, `npm run build`) are green at sign-off.
- [ ] #4 Fixture-based automated tests are included in final sign-off evidence.
- [ ] #5 No automated Gmail login flow is introduced.
<!-- AC:END -->
