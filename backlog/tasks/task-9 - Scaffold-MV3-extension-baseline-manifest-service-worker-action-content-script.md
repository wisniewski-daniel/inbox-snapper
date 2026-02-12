---
id: TASK-9
title: >-
  Scaffold MV3 extension baseline (manifest, service worker, action, content
  script)
status: Done
assignee:
  - Worker A
created_date: '2026-02-10 01:02'
updated_date: '2026-02-12 13:44'
labels: []
milestone: m-1
dependencies: []
documentation:
  - backlog/docs/TESTING.md
  - backlog/docs/RELEASE.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Scaffold a minimal Manifest V3 extension baseline for Gmail-only Phase 1 so later export tasks build on a stable foundation.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add/maintain manifest/module smoke checks confirming service worker, action UI entrypoint, and content script entry all load.
- Confirm existing fixture-based tests (if present) still run without Gmail login.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Load the unpacked extension in Chrome.
- Open a non-Gmail tab and confirm export behavior is not active.
- Open `mail.google.com` with an opened message and confirm baseline extension entrypoints initialize without attempting automated login.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Minimal MV3 scaffold exists (manifest, service worker/background, action UI entrypoint, content script entrypoint).
- [x] #2 Extension loads successfully as an unpacked Chrome extension with no startup errors.
- [x] #3 Content script targeting is Gmail-only for Phase 1.
- [x] #4 No automated Gmail login flow is introduced.
- [x] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Scaffold MV3 extension baseline in `src/extension` with a manifest, service worker, action popup entrypoint, and Gmail-only content script.
2. Add lightweight project scripts in `package.json` to support required gates (`npm test`, `npm run lint`, `npm run build`) without external service dependencies.
3. Add automated smoke tests that validate manifest wiring, Gmail-only targeting, JS entrypoint parseability, and absence of login automation patterns.
4. Build the extension into `dist/extension` and verify all required gates pass.
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Assignment
- Assigned to: Worker A
- Branch/worktree: main (/Users/danielwisniewski/code/personal/inbox-snapper)

Assignment Update
- Assigned to: Worker A
- Branch/worktree: codex/task-9-worker-a (.worktrees/worker-a)

Implemented baseline extension scaffold files: `src/extension/manifest.json`, `src/extension/background/service-worker.js`, `src/extension/action/popup.html`, `src/extension/action/popup.js`, and `src/extension/content/content-script.js`.

Configured required local gates via `package.json` scripts and helper scripts: `scripts/lint.mjs` and `scripts/build.mjs`. Build now emits an unpacked-loadable bundle structure at `dist/extension`.

Added `tests/mv3-scaffold.test.mjs` to validate MV3 entrypoints, Gmail-only content script targeting (`https://mail.google.com/*`), script startup parse checks, and absence of automated Gmail login logic terms.

Gate evidence (2026-02-12): `npm test` PASS (4/4), `npm run lint` PASS, `npm run build` PASS.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Scaffolded a minimal Manifest V3 Chrome extension baseline for Inbox Snapper Phase 1 with Gmail-only targeting. Added a new extension source tree under `src/extension` including a MV3 manifest, background service worker module, action popup HTML/JS entrypoint, and a content script constrained to `mail.google.com`.

To support required verification in this initial repo state, added lightweight local gate scripts in `package.json` and implemented `scripts/lint.mjs` + `scripts/build.mjs`. The build script validates manifest/version and required entrypoints, then copies the extension payload into `dist/extension` for unpacked loading.

Added smoke tests in `tests/mv3-scaffold.test.mjs` to enforce acceptance criteria: baseline wiring exists, Gmail-only match patterns remain locked, entrypoint scripts parse cleanly, and no automated Gmail login logic was introduced.

Validation run:
- `npm test` (pass)
- `npm run lint` (pass)
- `npm run build` (pass)
<!-- SECTION:FINAL_SUMMARY:END -->
