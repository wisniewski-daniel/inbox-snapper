import { spawnSync } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const steps = [
  ["test"],
  ["run", "lint"],
  ["run", "build"]
];

for (const step of steps) {
  const rendered = [npmCommand, ...step].join(" ");
  console.log(`\n[gates] Running: ${rendered}`);

  const result = spawnSync(npmCommand, step, { stdio: "inherit" });
  if (result.status !== 0) {
    const exitCode = result.status ?? 1;
    console.error(`[gates] Failed at: ${rendered}`);
    process.exit(exitCode);
  }
}

console.log("\n[gates] All required gates passed.");
