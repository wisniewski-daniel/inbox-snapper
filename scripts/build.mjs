import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const SOURCE_ROOT = resolve("src/extension");
const DIST_ROOT = resolve("dist/extension");
const manifestPath = resolve(SOURCE_ROOT, "manifest.json");

const requiredFiles = [
  "background/service-worker.js",
  "action/popup.html",
  "action/popup.js",
  "content/content-script.js"
];

const manifestRaw = await readFile(manifestPath, "utf8");
const manifest = JSON.parse(manifestRaw);

if (manifest.manifest_version !== 3) {
  throw new Error("Build aborted: manifest_version must be 3.");
}

for (const relativePath of requiredFiles) {
  await access(resolve(SOURCE_ROOT, relativePath));
}

await rm(resolve("dist"), { recursive: true, force: true });
await mkdir(resolve("dist"), { recursive: true });
await cp(SOURCE_ROOT, DIST_ROOT, { recursive: true });

console.info("Built extension scaffold into dist/extension.");
