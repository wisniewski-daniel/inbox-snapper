---
id: TASK-30
title: Add in-extension Privacy Policy and Terms links
status: To Do
assignee: []
created_date: '2026-02-10 01:05'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'M3: v0.3 Quality + Launch — PDF quality + privacy checks + legal + CWS assets'
dependencies:
  - TASK-6
documentation:
  - backlog/docs/RELEASE.md
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Surface required legal links directly in the extension UI for release compliance.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Add UI tests checking Privacy Policy and Terms links are rendered and point to configured URLs.
- Add checks for safe external-link attributes when applicable.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Open extension UI in Gmail and click both links.
- Confirm links open correctly and safely without hijacking current extension flow.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Extension UI includes visible links for Privacy Policy and Terms of Service.
- [ ] #2 External-link handling follows safe behavior expectations (`noopener noreferrer` where applicable).
- [ ] #3 Link targets are configurable and aligned with release/legal checklist.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
