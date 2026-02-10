---
id: TASK-10
title: Set up developer gates and CI parity (test/lint/build)
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'm-1'
dependencies:
  - TASK-9
documentation:
  - backlog/docs/TESTING.md
  - backlog/docs/PROJECT.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Standardize required quality gates locally and in CI so every task is evaluated with the same done criteria.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/update a documented command/workflow that runs `npm test`, `npm run lint`, and `npm run build` in CI-compatible order.
- Confirm fixture-based tests are part of the `npm test` path.
- Verify any single gate failure fails the combined workflow.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Review a CI run and confirm the same three gates execute.
- Run the local gate workflow and verify pass/fail behavior matches CI expectations.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 A documented local workflow exists to run `npm test`, `npm run lint`, and `npm run build` in sequence.
- [ ] #2 CI executes the same three required gates.
- [ ] #3 Fixture-based tests are included in the automated test workflow.
- [ ] #4 If any one gate fails, the overall gate workflow fails.
- [ ] #5 No automated Gmail login flow is introduced.
- [ ] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
