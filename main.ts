// Fortune Cookie Wisdom for Developers — make.fun entry.
// Writes one original fortune-cookie line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Your next bug is already in production. It is patient — it has read your code more carefully than you did.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  if (fortune.length < 1 || fortune.length > 120) {
    throw new Error(`fortune must be 1-120 characters, got ${fortune.length}`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
}

main();
