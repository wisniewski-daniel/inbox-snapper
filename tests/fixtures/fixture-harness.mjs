import { readFile } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

const fixtureRoot = path.resolve(process.cwd(), "fixtures");

const fixtureCatalog = Object.freeze([
  { id: "short", fileName: "short.html", category: "short" },
  { id: "long", fileName: "long.html", category: "long" },
  { id: "images", fileName: "images.html", category: "image-heavy" }
]);

const pngContract = Object.freeze({
  width: 1920,
  height: 1080
});

function getFixtureDefinition(fixtureId) {
  const fixture = fixtureCatalog.find((entry) => entry.id === fixtureId);
  if (!fixture) {
    throw new Error(`Unknown fixture id: ${fixtureId}`);
  }
  return fixture;
}

function normalizeHtml(html) {
  return html.replace(/\r\n/g, "\n").trim();
}

function countMatches(source, pattern) {
  return (source.match(pattern) ?? []).length;
}

function hashString(source, namespace) {
  return createHash("sha256").update(`${namespace}:${source}`).digest("hex");
}

function buildFixtureStats(normalizedHtml) {
  const imageCount = countMatches(normalizedHtml, /<img[\s>]/gi);
  const paragraphCount = countMatches(normalizedHtml, /<p[\s>]/gi);
  const headingCount = countMatches(normalizedHtml, /<h[1-6][\s>]/gi);
  const textOnly = normalizedHtml
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    charCount: normalizedHtml.length,
    wordCount: textOnly.length === 0 ? 0 : textOnly.split(" ").length,
    imageCount,
    paragraphCount,
    headingCount
  };
}

function buildNonBlankScore(stats) {
  return stats.wordCount + stats.imageCount * 10 + stats.headingCount * 5;
}

export function listFixtureDefinitions() {
  return fixtureCatalog.map((entry) => ({ ...entry }));
}

export function listFixtureIds() {
  return fixtureCatalog.map((entry) => entry.id);
}

export async function loadFixture(fixtureId) {
  const fixture = getFixtureDefinition(fixtureId);
  const fixturePath = path.join(fixtureRoot, fixture.fileName);
  const html = await readFile(fixturePath, "utf8");
  const normalizedHtml = normalizeHtml(html);
  const stats = buildFixtureStats(normalizedHtml);

  return {
    id: fixture.id,
    category: fixture.category,
    fixturePath,
    html,
    normalizedHtml,
    stats,
    fixtureHash: hashString(normalizedHtml, "fixture")
  };
}

export async function loadAllFixtures() {
  return Promise.all(listFixtureIds().map((fixtureId) => loadFixture(fixtureId)));
}

export async function buildPngFixtureCase(fixtureId) {
  const fixture = await loadFixture(fixtureId);
  return {
    format: "png",
    fixture,
    width: pngContract.width,
    height: pngContract.height,
    nonBlankScore: buildNonBlankScore(fixture.stats),
    outputHash: hashString(`${fixture.fixtureHash}:png:${pngContract.width}x${pngContract.height}`, "output")
  };
}

function resolvePdfMode(category, mode) {
  if (mode === "fit") {
    return { renderMode: "fit", pageCount: 1 };
  }

  if (mode === "paginated") {
    return { renderMode: "paginated", pageCount: category === "long" ? 2 : 1 };
  }

  return category === "long"
    ? { renderMode: "paginated", pageCount: 2 }
    : { renderMode: "fit", pageCount: 1 };
}

export async function buildPdfFixtureCase(fixtureId, options = {}) {
  const fixture = await loadFixture(fixtureId);
  const { mode = "auto" } = options;
  const { renderMode, pageCount } = resolvePdfMode(fixture.category, mode);

  return {
    format: "pdf",
    fixture,
    renderMode,
    pageCount,
    pageHashes: Array.from({ length: pageCount }, (_, pageIndex) =>
      hashString(`${fixture.fixtureHash}:pdf:${renderMode}:page:${pageIndex + 1}`, "output")
    ),
    nonBlankScore: buildNonBlankScore(fixture.stats)
  };
}

