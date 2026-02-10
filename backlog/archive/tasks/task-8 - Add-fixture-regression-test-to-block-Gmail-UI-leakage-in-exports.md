---
id: TASK-8
title: Add fixture regression test to block Gmail UI leakage in exports
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
dependencies: []
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Add an automated guard that fails when Gmail chrome/UI accidentally appears in exported output.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture or mock-Gmail wrapper test that distinguishes email content from Gmail shell.
- Confirm regression test fails if capture boundary includes UI shell markers.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export from Gmail and inspect output to confirm no left navigation/top toolbar/thread shell appears.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Automated test suite detects and blocks Gmail UI inclusion in exported output.
- [ ] #2 Test coverage includes at least one realistic Gmail-like wrapper case.
- [ ] #3 Resulting guard runs in standard CI/local test workflow.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
