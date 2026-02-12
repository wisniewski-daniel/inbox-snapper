import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const manifestPath = resolve("src/extension/manifest.json");
const filesToScan = [
  "src/extension/background/service-worker.js",
  "src/extension/action/popup.js",
  "src/extension/content/content-script.js"
];
const forbiddenPatterns = [
  /eval\s*\(/,
  /new Function\s*\(/,
  /accounts\.google\.com/i,
  /chrome\.identity/i
];

const manifestRaw = await readFile(manifestPath, "utf8");
const manifest = JSON.parse(manifestRaw);

if (manifest.manifest_version !== 3) {
  throw new Error("Manifest must use MV3.");
}

const contentScripts = manifest.content_scripts ?? [];
const gmailOnlyMatch = contentScripts.every((entry) => {
  const matches = entry.matches ?? [];
  return matches.length > 0 && matches.every((match) => /^https:\/\/mail\.google\.com\/\*/.test(match));
});

if (!gmailOnlyMatch) {
  throw new Error("Content scripts must remain Gmail-only for Phase 1.");
}

for (const filePath of filesToScan) {
  const source = await readFile(resolve(filePath), "utf8");
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(source)) {
      throw new Error(`Forbidden pattern "${pattern}" found in ${filePath}`);
    }
  }
}

console.info("Lint checks passed.");
