---
id: TASK-15
title: Tune auto-fit defaults for typical email exports
status: To Do
assignee: []
created_date: '2026-02-10 01:03'
updated_date: '2026-02-10 01:23'
labels: []
milestone: 'M2: v0.2 Exports + UX — Mobile PNG + PDF auto + settings + crop MVP'
dependencies:
  - TASK-4
  - TASK-23
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Make the default (no manual crop) export look good for typical short, long, and image-heavy emails.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add fixture assertions for default-fit safe margins across short, long, and image-heavy samples.
- Add regression checks for obvious cut-off cases.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Export without touching crop controls on short, long, and image-heavy Gmail emails.
- Confirm result is presentation-ready and not accidentally clipped.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Auto-fit default yields acceptable output for typical fixture classes (short, long, image-heavy).
- [ ] #2 Default-fit behavior maintains intentional margins/padding and readability.
- [ ] #3 Users can export without manual adjustment in common cases.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
