# Inbox Snapper — Phase 1 Project Spec (Canonical)

## Purpose
Inbox Snapper is a Google Chrome Extension (Manifest V3/MV3) that turns a Gmail email into a **presentation-ready mockup image** in one click.

**Vision:** Stop wasting hours on email screenshots. Create slide-ready mockups in one click.

## Phase 1 Scope
### Supported platform
- ✅ Gmail only (`mail.google.com`)
- ❌ Outlook and other providers are out of scope for Phase 1

### What the user can do (Phase 1)
From an opened Gmail email, the user can export:
1) **Desktop mockup** (clean email content; no Gmail UI)
2) **Mobile-style mockup** (generic phone frame; no Apple/iPhone look)

### Output contract (non-negotiable)
- Export is available as **PNG** (raster image) and **PDF** suitable for presentations and sharing:
  - Resolution: **1920×1080**
  - Readable at 100% scale in PPT
  - Predictable margins/padding (no accidental cut-offs)
  - PDF export supports **Fit** (single-page) for short/medium emails and **Paginated** (multi-page) for long emails
  - PDF output preserves the same visual contract as the PNG export (layout, padding, no Gmail UI)

## What it is / is not
### This is
- A one-click mockup generator for email marketers and designers
- A tool for clean, slide-ready exports

### This is not
- A generic screenshot tool (e.g. Fireshot)
- An email testing platform (e.g. Litmus)
- A CRM/contact extraction tool

## Phase 1 Features
### F1 — Clean email capture (Gmail)
Capture only the email content (as rendered) and exclude Gmail UI elements.

### F2 — Render modes
- Desktop render (clean email)
- Mobile-style render (generic phone frame)

### F3 — Export
Generate exports in two formats:
- **PNG**: 1920×1080 image optimized for PowerPoint
- **PDF**: PDF export of the same mockup, using **Fit** (single-page) or **Paginated** (multi-page) depending on email length

### F4 — Crop / Fit (Phase 1 MVP)
Phase 1 must include:
- **Auto-fit** that produces a good default result for typical emails, and
- **Manual crop adjustment** (basic rectangle + reset), to handle edge cases

(Advanced crop modes and “smart/symmetrical” behavior are explicitly out of Phase 1.)

### F5 — Settings (local)
Persist simple user preferences locally (e.g., last used mode, quality).

## Testing strategy (Phase 1)
We commit to **fixture-based automated tests** so agents can validate changes without needing Gmail credentials.

- The repo contains a small set of **sanitized email fixtures** (sample newsletters) used for automated tests.
- Automated tests must cover at least:
  - PNG export is **1920×1080** for fixtures
  - PDF export supports **Fit** (single-page) and **Paginated** (multi-page) depending on fixture length
  - basic “not blank” checks for exported outputs
- Gmail end-to-end behavior (DOM extraction/injection) is verified via a short manual smoke test (see TESTING.md).

## Hard constraints (must always hold)
### Privacy / GDPR
- Email content is processed **client-side only**
- No uploading or remote processing of email content or images
- For analytics (e.g. PostHog): Never include email content, subject lines, recipients, or DOM text

### Security
- No `eval`, `new Function`, or dynamic script injection
- No unsafe HTML injection (no `dangerouslySetInnerHTML` or equivalent)
- Content script must remain isolated (avoid page contamination)

### Permissions (minimal by default)
- Start with the smallest possible permission set (ideally `activeTab` + `storage`)
- If Gmail host permissions are required for reliability, record an explicit decision

### MV3 / CSP
- Must comply with Manifest V3 and its CSP limitations

## Phase 1 Definition of Done (Release)
Phase 1 is done when:
- Gmail email → Desktop export works reliably
- Gmail email → Mobile-style export works reliably
- Export meets the output contract (1920×1080, PPT-friendly, no Gmail UI)
- PDF export works reliably and matches the visual output contract (Fit single-page for short emails; Paginated multi-page for long emails)
- No email content leaves the browser (Verified via DevTools Network)
- Permissions are minimal and justified via a decision entry
- Manual smoke tests pass (see TESTING.md)
- Automated fixture-based tests pass (unit + export tests against fixtures)
- Legal docs exist and are linked (privacy policy + terms)
- Chrome Web Store listing assets are ready (see RELEASE.md)