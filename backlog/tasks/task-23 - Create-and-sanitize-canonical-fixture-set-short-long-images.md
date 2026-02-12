---
id: TASK-23
title: 'Create and sanitize canonical fixture set (short, long, images)'
status: Done
assignee:
  - Worker A
created_date: '2026-02-10 01:04'
updated_date: '2026-02-12 14:26'
labels: []
milestone: m-1
dependencies:
  - TASK-22
documentation:
  - backlog/docs/PROJECT.md
  - backlog/docs/TESTING.md
  - fixtures/README.md
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Goal: Create and maintain the canonical sanitized fixture set used by export tests.
Estimated size: 1-3 hours.

How to verify:
Automated:
- Ensure canonical fixtures exist for short, long, and image-heavy cases.
- Add/extend sanity checks that fail on obvious PII/tracking-token patterns.
- Confirm fixture-based tests use this canonical set.
- Run `npm test`, `npm run lint`, and `npm run build`.

Manual smoke (logged-in Gmail session; no automated Gmail login):
- Spot-check each canonical fixture to confirm content is sanitized and still realistic for render/export behavior.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Canonical fixtures exist for short, long, and image-heavy email cases.
- [x] #2 Fixture corpus is sanitized (no real PII, no live tracking artifacts).
- [x] #3 Automated sanity checks detect obvious fixture privacy regressions.
- [x] #4 Fixture authoring/sanitization guidance is documented for future additions.
- [x] #5 No automated Gmail login flow is introduced.
- [x] #6 `npm test`, `npm run lint`, and `npm run build` all pass before marking Done.
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. Refresh canonical fixture corpus under fixtures/ (short, long, images) with realistic but synthetic sanitized content.
2. Add automated fixture privacy/tracking sanity checks in tests/fixtures/fixture-gates.test.js for obvious PII and tracking-token patterns.
3. Document fixture authoring + sanitization rules in a dedicated fixtures guide and reference it from testing docs.
4. Run required gates (npm test, npm run lint, npm run build) and capture pass/fail evidence.
5. Update TASK-23 notes/acceptance checklist with implementation summary and evidence.
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Assignment
- Assigned to: Worker A
- Branch/worktree: main (/Users/danielwisniewski/code/personal/inbox-snapper)

Updated canonical fixture corpus with richer synthetic HTML content for short/long/image-heavy cases: fixtures/short.html, fixtures/long.html, fixtures/images.html.

Added fixture privacy guardrails in tests/fixtures/fixture-gates.test.js: blocked patterns for obvious PII formats, tracking params/tokens, and 1x1 tracker markup; plus hostname restriction to *.example.invalid.

Added canonical content-profile assertions in tests/fixtures/fixture-gates.test.js so short/long/image-heavy fixtures maintain intended complexity (text density and image counts).

Added fixture authoring/sanitization guidance at fixtures/README.md and linked it from backlog/docs/TESTING.md.

Gate evidence: npm test PASS (11/11), npm run lint PASS, npm run build PASS.

No automated Gmail login flow added; all verification uses local fixtures only.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Completed TASK-23 by establishing a stronger canonical fixture corpus and enforceable sanitization checks. The three canonical fixtures were rewritten with realistic-but-synthetic newsletter content, fixture tests now fail on obvious PII/tracking-token regressions and non-synthetic hostnames, and fixture authoring guidance was documented for future contributors. Required gates all pass: npm test, npm run lint, npm run build.
<!-- SECTION:FINAL_SUMMARY:END -->
