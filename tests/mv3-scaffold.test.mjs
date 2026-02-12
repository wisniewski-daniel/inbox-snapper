import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import vm from "node:vm";

const extensionRoot = resolve("src/extension");
const manifestPath = resolve(extensionRoot, "manifest.json");

async function loadManifest() {
  const raw = await readFile(manifestPath, "utf8");
  return JSON.parse(raw);
}

async function assertScriptParses(relativePath) {
  const fullPath = resolve(extensionRoot, relativePath);
  const source = await readFile(fullPath, "utf8");
  assert.doesNotThrow(() => new vm.Script(source, { filename: fullPath }));
}

test("manifest wires MV3 baseline entrypoints", async () => {
  const manifest = await loadManifest();

  assert.equal(manifest.manifest_version, 3);
  assert.equal(manifest.background?.service_worker, "background/service-worker.js");
  assert.equal(manifest.action?.default_popup, "action/popup.html");
  assert.ok(Array.isArray(manifest.content_scripts));
  assert.ok(manifest.content_scripts.length > 0);
  assert.deepEqual(manifest.permissions, ["activeTab", "storage"]);
});

test("content script remains Gmail-only in Phase 1", async () => {
  const manifest = await loadManifest();
  const matches = manifest.content_scripts.flatMap((entry) => entry.matches ?? []);

  assert.ok(matches.length > 0, "Expected at least one content script match pattern.");
  assert.ok(
    matches.every((pattern) => pattern === "https://mail.google.com/*"),
    "All content script patterns must target Gmail only."
  );
});

test("entrypoint files parse without startup syntax errors", async () => {
  await assertScriptParses("background/service-worker.js");
  await assertScriptParses("action/popup.js");
  await assertScriptParses("content/content-script.js");
});

test("scaffold does not contain automated Gmail login logic", async () => {
  const files = [
    "background/service-worker.js",
    "action/popup.js",
    "content/content-script.js"
  ];
  const forbiddenTerms = ["accounts.google.com", "chrome.identity", "oauth", "signIn"];

  for (const file of files) {
    const source = await readFile(resolve(extensionRoot, file), "utf8");
    for (const term of forbiddenTerms) {
      assert.equal(
        source.includes(term),
        false,
        `Found forbidden login automation term "${term}" in ${file}`
      );
    }
  }
});
