---
id: TASK-2
title: Document minimal extension permissions decision
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'm-1'
dependencies:
  - TASK-1
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/RELEASE.md
  - backlog/docs/DECISION_RULES.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Lock in a minimal-permissions baseline for Phase 1 and document justification if Gmail host permissions are needed.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/update manifest checks validating expected permission set.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Inspect extension permissions in Chrome and confirm they match documented policy.
- If host permissions are present, verify a matching decision entry exists with rationale.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Manifest permissions remain minimal by default (target: `activeTab` + `storage`).
- [ ] #2 If Gmail host permissions are required, a decision entry is added with Context, Decision, and Consequences.
- [ ] #3 Permission rationale is aligned with canonical docs and release checklist.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
