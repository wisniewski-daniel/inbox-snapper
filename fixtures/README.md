# Fixture Authoring and Sanitization Guide

These fixtures are the canonical test corpus for Phase 1 export automation.

Current canonical files:
- `fixtures/short.html`
- `fixtures/long.html`
- `fixtures/images.html`

## Why these fixtures exist

The fixture suite lets us validate export behavior without Gmail login automation. Tests should run against these
files only for deterministic checks.

## Authoring rules

1. Keep fixtures realistic for marketing/newsletter layouts, but fully synthetic.
2. Preserve category intent:
   - `short.html`: compact content for fit-mode behavior.
   - `long.html`: dense content that drives paginated behavior.
   - `images.html`: image-forward layout with multiple visual blocks.
3. Keep fixtures self-contained HTML documents (`<html>`, `<head>`, `<body>`).
4. Prefer stable formatting so diffs are easy to review.

## Sanitization rules (hard)

Do not include:
- real names, real emails, phone numbers, postal addresses, or account numbers
- live tracking artifacts (`utm_*`, `fbclid`, `gclid`, `mc_eid`, `mkt_tok`, unsubscribe tokens)
- production URLs or live asset hosts
- hidden 1x1 tracking pixels

Allowed hostnames for absolute URLs in fixtures:
- `*.example.invalid`

## Verification before merge

Run required gates:

```bash
npm test
npm run lint
npm run build
```

`tests/fixtures/fixture-gates.test.js` enforces canonical categories, blocked PII/tracking patterns, and fixture
profile sanity checks.
