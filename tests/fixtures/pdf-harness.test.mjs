import assert from "node:assert/strict";
import test from "node:test";

import { buildPdfFixtureCase } from "./fixture-harness.mjs";

test("PDF fixture harness auto-selects paginated mode for long fixtures", async () => {
  const firstResult = await buildPdfFixtureCase("long");
  const secondResult = await buildPdfFixtureCase("long");

  assert.equal(firstResult.format, "pdf");
  assert.equal(firstResult.renderMode, "paginated");
  assert.ok(firstResult.pageCount > 1, "Long fixture should produce a multi-page PDF case");
  assert.equal(firstResult.pageHashes.length, firstResult.pageCount);
  assert.ok(firstResult.nonBlankScore > 0, "PDF fixture output should not be blank");
  assert.deepEqual(secondResult, firstResult, "PDF harness output must be deterministic");
});
