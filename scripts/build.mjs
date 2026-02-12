import { access, readFile } from "node:fs/promises";

const requiredFixtures = [
  "fixtures/short.html",
  "fixtures/long.html",
  "fixtures/images.html"
];

for (const fixturePath of requiredFixtures) {
  try {
    await access(fixturePath);
  } catch {
    console.error(`Missing fixture required by test gate: ${fixturePath}`);
    process.exit(1);
  }
}

let packageJson;
try {
  packageJson = JSON.parse(await readFile("package.json", "utf8"));
} catch {
  console.error("Unable to read package.json during build gate.");
  process.exit(1);
}

if (packageJson?.scripts?.gates !== "node scripts/run-gates.mjs") {
  console.error("Gate contract mismatch: scripts.gates must run scripts/run-gates.mjs.");
  process.exit(1);
}

let workflow;
try {
  workflow = await readFile(".github/workflows/ci.yml", "utf8");
} catch {
  console.error("Missing CI workflow: .github/workflows/ci.yml");
  process.exit(1);
}

if (!workflow.includes("npm run gates")) {
  console.error("CI contract mismatch: workflow must run `npm run gates`.");
  process.exit(1);
}

console.log("Build contract checks passed.");
