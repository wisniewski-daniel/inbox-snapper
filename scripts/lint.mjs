import { spawnSync } from "node:child_process";
import { readdir } from "node:fs/promises";
import path from "node:path";

const ignoredDirectories = new Set([".git", "node_modules", "backlog"]);
const allowedExtensions = new Set([".js", ".mjs", ".cjs"]);

async function collectJavaScriptFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(process.cwd(), absolutePath);

    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) {
        continue;
      }
      files.push(...(await collectJavaScriptFiles(absolutePath)));
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name))) {
      files.push(relativePath);
    }
  }

  return files;
}

const files = await collectJavaScriptFiles(process.cwd());

if (files.length === 0) {
  console.log("No JavaScript files found.");
  process.exit(0);
}

for (const file of files) {
  const checkResult = spawnSync(process.execPath, ["--check", file], {
    stdio: "inherit"
  });

  if (checkResult.status !== 0) {
    console.error(`Syntax check failed: ${file}`);
    process.exit(checkResult.status ?? 1);
  }
}

console.log(`Lint passed for ${files.length} JavaScript file(s).`);
