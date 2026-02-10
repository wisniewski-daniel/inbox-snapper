---
id: TASK-28
title: Add static security guards for forbidden execution/injection patterns
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'm-3'
dependencies:
  - TASK-10
  - TASK-29
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/RELEASE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Enforce canonical security constraints with static checks that block unsafe execution/injection patterns.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add static/lint checks that fail on `eval`, `new Function`, dynamic script injection, and unsafe HTML injection patterns.
- Confirm checks run within normal workflow including fixture-based test runs.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Run a manual Gmail export flow and confirm security checks do not break expected extension behavior.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Automated checks fail on forbidden execution/injection patterns from canonical specs.
- [ ] #2 Security guards are integrated into standard project gate workflow.
- [ ] #3 Manual Gmail smoke confirms expected behavior remains intact.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
