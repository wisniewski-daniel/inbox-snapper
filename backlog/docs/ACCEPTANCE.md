---
id: doc-6
title: ACCEPTANCE
type: other
created_date: '2026-02-10 00:00'
updated_date: '2026-02-10 00:00'
---

# Phase 1 Acceptance Criteria (Canonical)

If anything conflicts with older notes, this file wins.

## A. Platform & Scope
- Phase 1 supports **Gmail only** (`mail.google.com`).
- No Outlook support in Phase 1.

## B. Core Flows

### B1 — Desktop mockup export
Given a user opens a Gmail email and triggers the extension:
- The exported output contains **only the email content** (no Gmail UI chrome).
- Output is visually “presentation-ready” without manual cleanup.

### B2 — Mobile-style mockup export
Given a user opens a Gmail email and triggers the extension in mobile mode:
- Export includes a **generic** phone frame (no Apple/iPhone look).
- Email content is not overlapped/clipped by the frame unexpectedly.
- Output remains presentation-ready.

## C. Export Contract

### C1 — PNG export
- PNG export is exactly **1920×1080** pixels.
- PNG is readable in PowerPoint at 100% scale.
- Margins/padding look intentional and prevent accidental cut-offs.
- Export does not include Gmail UI elements.

### C2 — PDF export (Fit & Paginated)
- PDF export exists and is usable for “email-to-PDF” use cases.
- PDF supports:
  - **Fit** (single-page) for short/medium emails
  - **Paginated** (multi-page) for long emails
- PDF output preserves the same visual contract as PNG:
  - clean email content only (no Gmail UI)
  - consistent layout + padding
- In Paginated mode:
  - pages are ordered correctly
  - no missing sections / gaps
  - no duplicated slices that confuse reading

## D. Crop / Fit (Phase 1 MVP)

### D1 — Auto-fit default
- For typical emails, a user can export without touching any settings and get a good result.

### D2 — Manual crop adjustment
- User can adjust a crop rectangle.
- User can reset crop to the default.
- Crop changes affect the next export.

## E. Settings (Local Persistence)
- Last used mode (desktop/mobile) persists across browser restarts.
- Any quality setting (if present) persists across sessions.
- Settings are stored locally.

## F. Privacy / GDPR (Hard)
- No email content leaves the browser:
  - no email body text
  - no subjects/recipients/senders
  - no screenshot/image payloads
  - no HTML snapshots
- If analytics events exist:
  - events are limited to non-content actions (e.g. `export_clicked`, `mode_switched`)
  - no DOM text is recorded

## G. Security (Hard)
- No `eval`, `new Function`, dynamic script injection.
- No unsafe HTML injection (no `dangerouslySetInnerHTML` or equivalent).
- Content script remains isolated (no breaking the page, no leaking styles).

## H. Permissions (Hard)
- Permissions are minimal by default (ideally `activeTab` + `storage`).
- If Gmail host permissions are introduced, there is a decision entry explaining why.