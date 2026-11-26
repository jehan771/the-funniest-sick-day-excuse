import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// The entry is one line under 200 characters. It is assembled from parts so
// the joke's rhythm is visible in the code: a polite opener, the absurd
// cause, and a twist that lands on the last word. The final string is written
// byte-exact to /output/entry.txt with no trailing newline.

const OPENER = "Sorry, can't come in today";
const CAUSE = "my smart fridge locked me out of the kitchen";
const TWIST = "and now it's holding my lunch hostage until I apologise to it.";

function buildExcuse(): string {
  const parts = [OPENER, CAUSE, TWIST];
  // Em-dashes join the beats; the line reads as one breathless message.
  return `${parts[0]} — ${parts[1]}, ${parts[2]}`;
}

function main(): void {
  const entry = buildExcuse();

  // Gate from competition.yaml: UTF-8 text, 1 to 200 characters, not blank.
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`entry length ${entry.length} is outside the 1-200 gate`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outPath = join("/output", "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, entry, "utf8");

  // Report the exact size so a human can eyeball the gate at a glance:
  // the em-dash is 3 bytes in UTF-8, so byte length differs from char length.
  const byteLength = Buffer.byteLength(entry, "utf8");
  console.log(`wrote ${entry.length} chars (${byteLength} bytes) to ${outPath}`);
}

main();
