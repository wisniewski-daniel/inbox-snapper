import assert from "node:assert/strict";
import test from "node:test";

import { buildPngFixtureCase } from "./fixture-harness.mjs";

test("PNG fixture harness returns deterministic 1920x1080 export metadata", async () => {
  const firstResult = await buildPngFixtureCase("short");
  const secondResult = await buildPngFixtureCase("short");

  assert.equal(firstResult.format, "png");
  assert.equal(firstResult.width, 1920);
  assert.equal(firstResult.height, 1080);
  assert.ok(firstResult.nonBlankScore > 0, "PNG fixture output should not be blank");
  assert.deepEqual(secondResult, firstResult, "PNG harness output must be deterministic");
});
