import assert from "node:assert/strict";
import test from "node:test";
import { loadAllFixtures, listFixtureDefinitions } from "./fixture-harness.mjs";

const expectedCategories = ["image-heavy", "long", "short"];

test("required fixture files are present and non-empty", async () => {
  const fixtures = await loadAllFixtures();
  for (const fixture of fixtures) {
    assert.ok(fixture.normalizedHtml.length > 50, `${fixture.id} fixture should not be blank`);
  }
});

test("fixtures are HTML documents", async () => {
  const fixtures = await loadAllFixtures();
  for (const fixture of fixtures) {
    assert.match(fixture.normalizedHtml.toLowerCase(), /<html[\s>]/, `${fixture.id} must contain <html>`);
  }
});

test("fixture harness publishes canonical categories", () => {
  const categories = [...new Set(listFixtureDefinitions().map((fixture) => fixture.category))].sort();
  assert.deepEqual(categories, expectedCategories);
});
