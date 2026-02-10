---
id: TASK-23
title: 'Create and sanitize canonical fixture set (short, long, images)'
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'm-1'
dependencies:
  - TASK-22
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Create and maintain the canonical sanitized fixture set used by export tests.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Ensure canonical fixtures exist for short, long, and image-heavy cases.
- Add/extend sanity checks that fail on obvious PII/tracking-token patterns.
- Confirm fixture-based tests use this canonical set.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Spot-check each canonical fixture to confirm content is sanitized and still realistic for render/export behavior.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Canonical fixtures exist for short, long, and image-heavy email cases.
- [ ] #2 Fixture corpus is sanitized (no real PII, no live tracking artifacts).
- [ ] #3 Automated sanity checks detect obvious fixture privacy regressions.
- [ ] #4 Fixture authoring/sanitization guidance is documented for future additions.
- [ ] #5 No automated Gmail login flow is introduced.
- [ ] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
