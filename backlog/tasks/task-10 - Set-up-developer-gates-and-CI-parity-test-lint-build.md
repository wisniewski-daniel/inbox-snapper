---
id: TASK-10
title: Set up developer gates and CI parity (test/lint/build)
status: Done
assignee:
  - Worker B
created_date: '2026-02-10 01:02'
updated_date: '2026-02-12 13:48'
labels: []
milestone: m-1
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
- [x] #1 A documented local workflow exists to run `npm test`, `npm run lint`, and `npm run build` in sequence.
- [x] #2 CI executes the same three required gates.
- [x] #3 Fixture-based tests are included in the automated test workflow.
- [x] #4 If any one gate fails, the overall gate workflow fails.
- [x] #5 No automated Gmail login flow is introduced.
- [x] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1) Audit current package scripts, npm test path, and CI workflow definitions for gate coverage/order.
2) Implement a single fail-fast gate workflow command for local use that runs: npm test -> npm run lint -> npm run build.
3) Align CI to call the same gate workflow command to guarantee parity and fail-fast behavior.
4) Verify fixture-based tests are executed through npm test path by tracing test script wiring and fixture test files.
5) Run required gates locally (npm test, npm run lint, npm run build), capture outcomes, and document evidence in task notes.
6) Update acceptance checklist and finalize task metadata once all criteria are satisfied.
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Assignment
- Assigned to: Worker B
- Branch/worktree: main (/Users/danielwisniewski/code/personal/inbox-snapper)

Assignment Update
- Assigned to: Worker B
- Branch/worktree: codex/task-10-worker-b (.worktrees/worker-b)

Discovered dependency gap: current branch/worktree contains backlog docs only (no package.json/CI/runtime scaffold from TASK-9). Proceeding with TASK-10-scoped gating infrastructure (scripts + CI + fixture test wiring) in a way that stays independent from runtime scaffold details.

Implemented gate parity scaffolding: added package scripts (`test`, `lint`, `build`, `gates`) and a shared fail-fast gate runner (`scripts/run-gates.mjs`) that executes `npm test` -> `npm run lint` -> `npm run build`.

Aligned CI with local gates: added `.github/workflows/ci.yml` to run `npm ci` then `npm run gates`, ensuring CI and local execution paths are identical.

Confirmed fixture tests are part of `npm test`: added sanitized fixtures (`fixtures/short.html`, `fixtures/long.html`, `fixtures/images.html`) and fixture suite `tests/fixtures/fixture-gates.test.js`, executed by `node --test` via `npm test`.

Validation evidence (pass): `npm test && npm run lint && npm run build` passed; `npm run gates` also passed end-to-end.

Fail-fast evidence: with `fixtures/short.html` temporarily removed, `npm run gates` failed immediately at `npm test` and did not proceed to lint/build; fixture was restored and gates re-run successfully.

Committed changes on `codex/task-10-worker-b`: `e523722` (TASK-10: add fail-fast local and CI quality gates).
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Implemented TASK-10 by establishing a single shared gate workflow for local and CI execution with fail-fast behavior. Added npm scripts (`test`, `lint`, `build`, `gates`) and a deterministic gate runner (`scripts/run-gates.mjs`) that executes `npm test` -> `npm run lint` -> `npm run build` in order and exits on first failure. Added CI workflow `.github/workflows/ci.yml` to run `npm ci` then `npm run gates`, ensuring parity with local developer workflow. Confirmed fixture coverage under the `npm test` path by adding sanitized fixture files (`fixtures/short.html`, `fixtures/long.html`, `fixtures/images.html`) and fixture tests (`tests/fixtures/fixture-gates.test.js`). Updated testing documentation to document `npm run gates` as the parity/fail-fast path and to reference fixture test wiring. Verification run: `npm test`, `npm run lint`, and `npm run build` all pass; `npm run gates` passes; forced failure scenario (missing fixture) fails at test gate before lint/build, confirming fail-fast behavior.
<!-- SECTION:FINAL_SUMMARY:END -->
