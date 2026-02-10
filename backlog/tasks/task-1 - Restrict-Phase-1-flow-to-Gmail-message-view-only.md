---
id: TASK-1
title: Restrict Phase 1 flow to Gmail message view only
status: To Do
assignee: []
created_date: '2026-02-10 01:02'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'm-1'
dependencies:
  - TASK-9
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Ensure Phase 1 functionality is strictly Gmail-only and only active when a user is viewing an opened message.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add tests for URL/domain and message-view gating behavior.
- Confirm non-Gmail and non-message Gmail states are blocked.
- Run `npm test`, `npm run lint`, and `npm run build` (all must pass).

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Open a non-Gmail tab and confirm export is unavailable.
- Open Gmail inbox list (no message opened) and confirm export is blocked with clear guidance.
- Open a Gmail message and confirm export controls become available.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Extension behavior is available only on `mail.google.com` when a Gmail message is opened.
- [ ] #2 Gmail pages without an opened message do not run export and show clear guidance.
- [ ] #3 Non-Gmail pages do not expose export behavior.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
