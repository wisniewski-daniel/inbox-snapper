import assert from "node:assert/strict";
import test from "node:test";
import { loadAllFixtures, listFixtureDefinitions } from "./fixture-harness.mjs";

const expectedCategories = ["image-heavy", "long", "short"];
const blockedFixturePatterns = Object.freeze([
  {
    label: "email addresses",
    pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
  },
  {
    label: "phone numbers",
    pattern: /\b(?:\+?\d{1,2}[ .-])?(?:\(\d{3}\)|\d{3})[ .-]\d{3}[ .-]\d{4}\b/
  },
  {
    label: "social security number format",
    pattern: /\b\d{3}-\d{2}-\d{4}\b/
  },
  {
    label: "credit card number format",
    pattern: /\b(?:\d[ -]*?){13,16}\b/
  },
  {
    label: "tracking query parameters",
    pattern: /[?&](?:utm_[^=]+|fbclid|gclid|mc_eid|mkt_tok|msclkid|vero_id|trk|tracking_id|referrer_id)=/i
  },
  {
    label: "unsubscribe tokens",
    pattern: /unsubscribe[^"'<>]{0,120}(?:token|uid|user|id)=/i
  },
  {
    label: "1x1 tracking pixel html",
    pattern:
      /<img[^>]+(?:width=(?:["'])?1(?:["'])?[^>]*height=(?:["'])?1(?:["'])?|height=(?:["'])?1(?:["'])?[^>]*width=(?:["'])?1(?:["'])?)/i
  }
]);
const allowedFixtureHostnamePattern = /^(?:[a-z0-9-]+\.)*example\.invalid$/i;

function extractHttpUrls(html) {
  return Array.from(html.matchAll(/https?:\/\/[^\s"'<>]+/gi), (match) => match[0]);
}

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

test("fixtures block obvious PII and tracking token patterns", async () => {
  const fixtures = await loadAllFixtures();

  for (const fixture of fixtures) {
    for (const blockedPattern of blockedFixturePatterns) {
      assert.doesNotMatch(
        fixture.normalizedHtml,
        blockedPattern.pattern,
        `${fixture.id} fixture contains blocked pattern: ${blockedPattern.label}`
      );
    }

    const urls = extractHttpUrls(fixture.normalizedHtml);
    for (const url of urls) {
      const parsedUrl = new URL(url);
      assert.match(
        parsedUrl.hostname,
        allowedFixtureHostnamePattern,
        `${fixture.id} fixture contains non-synthetic hostname: ${parsedUrl.hostname}`
      );
    }
  }
});

test("fixtures preserve canonical short/long/image-heavy content profiles", async () => {
  const fixtures = await loadAllFixtures();
  const fixtureById = Object.fromEntries(fixtures.map((fixture) => [fixture.id, fixture]));

  assert.ok(fixtureById.short.stats.wordCount >= 25, "short fixture should include enough text for export checks");
  assert.ok(fixtureById.short.stats.paragraphCount >= 2, "short fixture should contain multiple paragraphs");

  assert.ok(fixtureById.long.stats.wordCount >= 220, "long fixture should contain dense content");
  assert.ok(fixtureById.long.stats.paragraphCount >= 10, "long fixture should include many paragraphs");
  assert.ok(
    fixtureById.long.stats.charCount > fixtureById.short.stats.charCount,
    "long fixture should be larger than short fixture"
  );

  assert.ok(fixtureById.images.stats.imageCount >= 5, "image-heavy fixture should include several image tags");
  assert.ok(fixtureById.images.stats.wordCount >= 35, "image-heavy fixture should still include meaningful text");
});
