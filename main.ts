import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My right earbud dies at 20% while the left one still shows 80, like they aren't even on the same team.";

// The gate only accepts 1 to 200 characters of non-blank text.
if (ROAST.trim().length === 0 || ROAST.length > 200) {
  throw new Error(`roast is ${ROAST.length} chars; the gate needs 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars to ${target}`);
