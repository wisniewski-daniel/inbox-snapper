---
id: TASK-29
title: Lock MV3/CSP baseline and add compliance checks
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
dependencies:
  - TASK-9
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/RELEASE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Lock MV3/CSP compliance early so later feature tasks do not require security/compliance rework.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/extend checks validating MV3 manifest requirements and CSP restrictions.
- Confirm fixture-based export tests still run under the configured CSP.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Inspect loaded extension configuration in Chrome and verify MV3 + CSP posture aligns with canonical security constraints.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Manifest configuration remains MV3-compliant.
- [ ] #2 CSP baseline enforces canonical security posture (no unsafe execution patterns).
- [ ] #3 Compliance checks run within the standard automated workflow.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
