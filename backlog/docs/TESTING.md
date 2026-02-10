---
id: doc-4
title: TESTING
type: other
created_date: '2026-02-10 00:00'
updated_date: '2026-02-10 00:00'
---

> **Agent note (Codex):** Do **not** attempt to log into Gmail automatically. Use **fixtures** for automation. Gmail end-to-end checks are **manual** using a logged-in browser session.

# Testing (Phase 1)

We use a mix of **automated fixture-based tests** and a **minimal manual Gmail smoke test**.

- Codex/agents can run all automated tests locally (no Gmail login required).
- Gmail end-to-end checks require a logged-in Gmail session (manual).

## 1) Automated tests (required)

### What they cover (minimum)
Automated tests must run against fixtures and validate at minimum:

- **PNG** export is exactly **1920×1080**
- **PDF Fit** produces **1 page** for short/medium fixtures
- **PDF Paginated** produces **> 1 page** for long fixtures
- Export outputs are **not blank** (basic sanity)
- (Optional) Unit tests for crop/pagination/utility logic

### How to run (the “gates”)
A task is not done unless these pass:

```bash
npm test
npm run lint
npm run build
```

If the implementation adds separate scripts later (e.g. `npm run test:fixtures`), list them here as well.

## 2) Fixtures

### Location
Fixtures live in a stable folder, e.g.:

- `fixtures/`
- `fixtures/assets/` (local images referenced by fixtures, if needed)

Recommended minimum set:

- `fixtures/short.html` (short/medium email)
- `fixtures/long.html` (newsletter-style long email)
- `fixtures/images.html` (image-heavy email)

### Fixture rules (privacy)
Fixtures must be **sanitized**:

- no real names/emails/addresses/phone numbers
- remove/replace tracking URLs and unsubscribe tokens
- prefer newsletters or synthetic content over personal emails

## 3) Manual Gmail smoke test (required before release)

### Setup
1. Build the extension.
2. Chrome → `chrome://extensions` → Developer mode ON → Load unpacked.
3. Ensure you are logged into Gmail in your normal browser profile.

### Test emails (recommended)
Use at least:

- one short email
- one long newsletter-style email
- one image-heavy email

### Desktop export (PNG)
- [ ] Open a Gmail message view
- [ ] Export Desktop → PNG
- [ ] Verify:
  - [ ] PNG is 1920×1080
  - [ ] no Gmail UI visible
  - [ ] margins/padding look intentional
  - [ ] readable in PowerPoint at 100%

### Mobile export (PNG)
- [ ] Export Mobile → PNG
- [ ] Verify:
  - [ ] generic phone frame (no Apple/iPhone look)
  - [ ] no clipping/overlap
  - [ ] PNG is 1920×1080

### Manual crop (MVP)
- [ ] Adjust crop rectangle → export reflects crop
- [ ] Reset crop → default behavior restored

### PDF export — Fit (single page)
(Use a short/medium email.)
- [ ] Export → PDF
- [ ] Verify:
  - [ ] 1 page
  - [ ] layout/padding matches PNG visual contract
  - [ ] readable at normal zoom (not “postage stamp”)

### PDF export — Paginated (multi page)
(Use a long newsletter email.)
- [ ] Export → PDF
- [ ] Verify:
  - [ ] multiple pages
  - [ ] correct order
  - [ ] no big missing sections or duplicated slices
  - [ ] padding/layout consistent

## 4) Privacy / GDPR verification (hard requirement)
- [ ] Open DevTools → Network tab on Gmail
- [ ] Perform one PNG export + one PDF export
- [ ] Confirm no request contains:
  - email body text
  - subject / sender / recipients
  - extracted HTML
  - screenshot/image payloads

## 5) Pass/Fail rules
- If **any automated test** fails: the task is not done.
- If **any manual smoke test** checkbox fails: not a release candidate.