---
id: TASK-9
title: >-
  Scaffold MV3 extension baseline (manifest, service worker, action, content
  script)
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:22'
labels: []
milestone: 'M1: v0.1 Vertical Slice — Gmail → Desktop PNG export end-to-end'
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
- [ ] #1 Minimal MV3 scaffold exists (manifest, service worker/background, action UI entrypoint, content script entrypoint).
- [ ] #2 Extension loads successfully as an unpacked Chrome extension with no startup errors.
- [ ] #3 Content script targeting is Gmail-only for Phase 1.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
