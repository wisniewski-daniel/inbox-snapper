
<!-- BACKLOG.MD MCP GUIDELINES START -->

<CRITICAL_INSTRUCTION>

## BACKLOG WORKFLOW INSTRUCTIONS

This project uses Backlog.md MCP for all task and project management activities.

**CRITICAL GUIDANCE**

- If your client supports MCP resources, read `backlog://workflow/overview` to understand when and how to use Backlog for this project.
- If your client only supports tools or the above request fails, call `backlog.get_workflow_overview()` tool to load the tool-oriented overview (it lists the matching guide tools).

- **First time working here?** Read the overview resource IMMEDIATELY to learn the workflow
- **Already familiar?** You should have the overview cached ("## Backlog.md Overview (MCP)")
- **When to read it**: BEFORE creating tasks, or when you're unsure whether to track work

These guides cover:
- Decision framework for when to create tasks
- Search-first workflow to avoid duplicates
- Links to detailed guides for task creation, execution, and finalization
- MCP tools reference

You MUST read the overview resource to understand the complete workflow. The information is NOT summarized here.

</CRITICAL_INSTRUCTION>

<!-- BACKLOG.MD MCP GUIDELINES END -->

<!-- INBOX SNAPPER GUIDELINES START -->

## Inbox Snapper project guardrails (read before starting)

### Canonical specs
- Treat these files as the **source of truth**:
  - `backlog/docs/PROJECT.md`
  - `backlog/docs/ACCEPTANCE.md`
  - `backlog/docs/TESTING.md`
  - `backlog/docs/RELEASE.md`
- If there is any conflict between other notes and these docs, follow the docs.

### Testing & verification (hard requirement)
- Do **not** attempt to log into Gmail automatically.
- Use **fixtures** for automation; Gmail end-to-end checks are **manual** using a logged-in browser session.
- A task is not done unless the automated gates pass:
  - `npm test`
  - `npm run lint`
  - `npm run build`
- When adding behavior that can be tested via fixtures, add/extend fixture-based tests.

### Scope (Phase 1)
- Phase 1 is **Gmail only**.
- Export formats in Phase 1: **PNG (1920×1080)** and **PDF** (Fit single-page for short emails; Paginated multi-page for long emails).

### Backlog workflow
- Use Backlog.md for tasks/decisions.
- Create or update decision entries when changing permissions, export contract, scope, privacy posture, or PDF behavior (see `backlog/docs/DECISION_RULES.md`).

<!-- INBOX SNAPPER GUIDELINES END -->