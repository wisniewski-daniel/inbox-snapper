---
id: TASK-34
title: Draft Chrome Web Store listing metadata and privacy-aligned copy
status: To Do
assignee: []
created_date: '2026-02-10 01:23'
updated_date: '2026-02-10 01:24'
labels: []
milestone: 'M3: v0.3 Quality + Launch — PDF quality + privacy checks + legal + CWS assets'
dependencies:
  - TASK-31
  - TASK-32
documentation:
  - backlog/docs/RELEASE.md
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Draft CWS listing copy that is accurate to implemented Phase 1 behavior and privacy posture.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Run fixture-based tests and standard gates to ensure release-copy updates do not accompany regressions.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Review listing draft against `RELEASE.md` requirements.
- Confirm copy accurately states Gmail-only scope, PNG 1920×1080 export, and automatic PDF behavior (Fit short, Paginated long) without overstating features.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Listing metadata includes accurate Gmail-only scope and truthful Phase 1 value proposition.
- [ ] #2 Listing copy accurately reflects export contract: PNG 1920×1080 and PDF automatic Fit/Paginated behavior.
- [ ] #3 Privacy statements in listing copy match canonical client-side/no-content-upload requirements.
- [ ] #4 Keywords/claims are accurate and non-misleading.
- [ ] #5 No automated Gmail login flow is introduced.
- [ ] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
