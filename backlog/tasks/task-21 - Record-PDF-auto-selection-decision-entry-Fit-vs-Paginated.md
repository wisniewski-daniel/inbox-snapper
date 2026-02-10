---
id: TASK-21
title: Record PDF auto-selection decision entry (Fit vs Paginated)
status: To Do
assignee: []
created_date: '2026-02-10 01:04'
updated_date: '2026-02-10 01:25'
labels: []
milestone: 'm-2'
dependencies:
  - TASK-19
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/ACCEPTANCE.md
  - backlog/docs/TESTING.md
  - backlog/docs/DECISION_RULES.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Capture the Phase 1 PDF behavior decision as automatic Fit/Paginated selection in a formal decision entry.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Review fixture-based PDF test results showing short/medium cases route to Fit and long cases route to Paginated.
- Ensure docs/build references remain valid and project gates pass.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Cross-check the decision entry against implemented PDF behavior using one short and one long manual Gmail export.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Decision entry is added/updated per `DECISION_RULES.md` with Context, Decision, and Consequences.
- [ ] #2 Decision explicitly documents automatic Fit/Paginated selection and why no manual toggle is required for Phase 1.
- [ ] #3 Decision aligns with canonical acceptance/testing/release documents.
- [ ] #4 No automated Gmail login flow is introduced.
- [ ] #5 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->
