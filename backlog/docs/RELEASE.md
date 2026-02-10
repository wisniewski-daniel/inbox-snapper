# Phase 1 Release Checklist (Chrome Web Store)

This checklist is the source of truth for getting Phase 1 shipped.
Phase 1 scope is **Gmail only**. Exports: **PNG (1920×1080)** + **PDF (Fit + Paginated)**.

---

## 1) Legal (required)

### Documents
- [ ] **Privacy Policy** exists (publicly accessible URL)
- [ ] **Terms of Service** exists (publicly accessible URL)

### In-extension links
- [ ] Extension UI links to Privacy Policy
- [ ] Extension UI links to Terms
- [ ] Links open safely (no navigation hijack), and any external link uses `rel="noopener noreferrer"` where applicable

### Accuracy check
- [ ] Privacy Policy matches reality:
  - [ ] Email content is processed client-side
  - [ ] No email content is uploaded
  - [ ] Analytics (if present) does not capture email content/PII

---

## 2) Functional readiness

### Smoke tests (manual)
- [ ] Manual smoke tests pass (see `TESTING.md`)

### Automated tests (fixtures)
- [ ] Automated fixture-based tests pass (unit + export tests)
- [ ] `npm test` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes

### Core feature checklist
- [ ] Gmail email → **Desktop** export works reliably
- [ ] Gmail email → **Mobile-style** export works reliably (generic frame, no Apple/iPhone look)
- [ ] **PNG** export:
  - [ ] Exactly 1920×1080
  - [ ] Readable in PowerPoint at 100%
  - [ ] No Gmail UI chrome
  - [ ] Margins/padding look intentional
- [ ] **PDF** export:
  - [ ] Fit (single page) works for short/medium emails
  - [ ] Paginated (multi page) works for long emails
  - [ ] No missing/duplicated sections in paginated output
  - [ ] Visual contract matches PNG (layout/padding/clean content)
- [ ] Manual crop adjustment works (rectangle + reset)
- [ ] Settings persist locally (mode, quality if present)

---

## 3) Privacy / Security verification (hard requirement)

### No-content-leaves-browser check
- [ ] DevTools Network check on Gmail:
  - [ ] No requests contain email body text / subject / sender / recipients
  - [ ] No requests contain extracted HTML or screenshot/image payloads
  - [ ] No unexpected third-party requests that could include content

### Security basics
- [ ] No `eval`, `new Function`, or dynamic script injection
- [ ] No unsafe HTML injection (no `dangerouslySetInnerHTML` or equivalent)
- [ ] Content script remains isolated (does not break Gmail UI)

---

## 4) Permissions & compliance

### Permissions
- [ ] Permissions are minimal by default (ideally `activeTab` + `storage`)
- [ ] If Gmail host permissions are used:
  - [ ] Decision entry exists in `backlog/decisions/`
  - [ ] Justification is documented clearly

### MV3 / CSP
- [ ] Manifest V3 compliance verified
- [ ] CSP compliance verified (no remote code execution)

---

## 5) Chrome Web Store listing (ASO)

### Metadata
- [ ] Name is finalized
- [ ] Short description (clear value prop)
- [ ] Full description includes:
  - [ ] “presentation-ready email mockups in 1 click”
  - [ ] Gmail-only scope (Phase 1)
  - [ ] Exports: PNG + PDF (Fit/Paginated)
  - [ ] Privacy statement: client-side only, no content uploads

### Visual assets
- [ ] Icon set meets CWS requirements
- [ ] Screenshots (recommended minimum):
  - [ ] Desktop mockup example
  - [ ] Mobile mockup example
  - [ ] PDF export example (optional but helpful)
  - [ ] “Before → After” clarity (optional)

### Keywords (honest only)
- [ ] Keywords/phrasing are accurate:
  - [ ] “Gmail screenshot” / “email mockup” / “PowerPoint” / “email to PDF” (only if true)

---

## 6) Versioning & release notes

### Version
- [ ] Version bumped in manifest/package
- [ ] Git tag created for release (optional but recommended)

### Release notes
- [ ] Short “What’s new” text prepared (even for v1.0)

---

## 7) Packaging & submission

### Package sanity
- [ ] Build output is clean (no dev-only debug UIs shipped)
- [ ] Source maps policy decided (keep/remove)
- [ ] No test fixtures shipped inside production build (fixtures should stay dev/test only)

### Submit
- [ ] Upload package to Chrome Web Store
- [ ] Fill privacy/data disclosures accurately
- [ ] Submit for review

---

## 8) Post-submit quick plan (nice to have)
- [ ] Monitor review feedback and fix quickly
- [ ] Prepare one “known issues” note (if needed)
- [ ] Prepare a lightweight feedback channel (e.g., support email)