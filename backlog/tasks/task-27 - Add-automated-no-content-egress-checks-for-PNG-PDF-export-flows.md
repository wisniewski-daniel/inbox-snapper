---
id: TASK-27
title: Add automated no-content-egress checks for PNG/PDF export flows
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
dependencies:
  - TASK-6
  - TASK-19
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
  - backlog/docs/RELEASE.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Add repeatable checks proving email content does not leave the browser in PNG/PDF export flows.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add tests enforcing analytics/event payload schemas exclude email body, subject, sender/recipient, DOM text, HTML, and image payload fields.
- Ensure checks run across fixture-based PNG and PDF export paths.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Use DevTools Network tab during one PNG export and one PDF export in Gmail.
- Confirm no request contains email content/HTML/screenshot payloads.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Automated checks cover both PNG and PDF export flows for no-content-egress behavior.
- [ ] #2 Disallowed email/DOM content fields are excluded from analytics/network payloads.
- [ ] #3 Manual DevTools Network verification steps are documented and executed as part of smoke testing.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
