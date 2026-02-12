---
id: TASK-22
title: Build fixture harness foundation (short/long/images)
status: Done
assignee:
  - '@Worker A'
created_date: '2026-02-10 01:04'
updated_date: '2026-02-12 14:16'
labels: []
milestone: m-1
dependencies:
  - TASK-10
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Introduce a deterministic fixture harness before broad export test work to reduce rework and make automation agent-friendly.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/confirm fixture loader utilities that run without Gmail credentials.
- Confirm harness supports short, long, and image-heavy fixture categories.
- Run at least one PNG fixture test and one PDF fixture test through the harness.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Compare one fixture-driven expectation with one manual Gmail export to confirm fixture realism.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Fixture harness executes deterministically without requiring Gmail login.
- [x] #2 Harness supports canonical fixture categories: short, long, and image-heavy.
- [x] #3 Harness is reusable by both PNG and PDF test suites.
- [x] #4 No automated Gmail login flow is introduced.
- [x] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1) Add deterministic fixture harness utilities under tests support code: fixture catalog, category mapping (short/long/image-heavy), normalized fixture loading, and reusable PNG/PDF scenario builders.
2) Reuse the harness from fixture tests by updating fixture-gates checks to consume harness metadata instead of ad-hoc file reads.
3) Add one PNG-focused fixture test and one PDF-focused fixture test that both execute through the shared harness and assert deterministic outputs.
4) Run required gates (npm test, npm run lint, npm run build) and capture results.
5) Update TASK-22 notes with implementation summary and gate outcomes; check acceptance criteria that are satisfied.
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Assignment
- Assigned to: Worker A
- Branch/worktree: main (/Users/danielwisniewski/code/personal/inbox-snapper)

Implemented deterministic fixture harness at tests/fixtures/fixture-harness.mjs with canonical fixture catalog (short, long, image-heavy), normalized fixture loader, deterministic hashing, and reusable PNG/PDF scenario builders.

Updated tests/fixtures/fixture-gates.test.js to consume harness metadata instead of ad-hoc file reads, and added canonical category assertion to guarantee short/long/image-heavy coverage.

Added harness-driven suite tests: tests/fixtures/png-harness.test.mjs and tests/fixtures/pdf-harness.test.mjs.

Gate results: npm test PASS (9/9 tests), npm run lint PASS, npm run build PASS.

No Gmail login automation was added; harness runs only against local fixtures.
<!-- SECTION:NOTES:END -->
