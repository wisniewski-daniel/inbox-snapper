import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import path from "node:path";

const fixtureRoot = path.resolve(process.cwd(), "fixtures");
const requiredFixtures = ["short.html", "long.html", "images.html"];

test("required fixture files are present and non-empty", async () => {
  for (const fixtureName of requiredFixtures) {
    const fixturePath = path.join(fixtureRoot, fixtureName);
    const contents = await readFile(fixturePath, "utf8");
    assert.ok(contents.length > 50, `${fixtureName} should not be blank`);
  }
});

test("fixtures are HTML documents", async () => {
  for (const fixtureName of requiredFixtures) {
    const fixturePath = path.join(fixtureRoot, fixtureName);
    const contents = await readFile(fixturePath, "utf8");
    assert.match(contents.toLowerCase(), /<html[\s>]/, `${fixtureName} must contain <html>`);
  }
});
