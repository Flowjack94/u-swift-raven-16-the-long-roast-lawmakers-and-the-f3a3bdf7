// The Long Roast: Lawmakers and the File They Cannot Convert
// make.fun bounty entry — u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
//
// Writes exactly one satirical sentence to /output/entry.txt and validates it:
//   - UTF-8 text
//   - 1 to 320 characters
//   - not only whitespace
//   - exactly one sentence (a single terminal period, no other sentence-ending
//     punctuation inside the sentence)
//
// Run:  node main.ts
// The output path can be overridden with ENTRY_OUTPUT (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY =
  "The senator writing the law to regulate artificial intelligence just asked his intern to print the PDF, scan the printout, and email it back to him — as a PDF.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT
  ? resolve(process.env.ENTRY_OUTPUT)
  : "/output/entry.txt";

function validate(text) {
  // UTF-8 round-trip check.
  const encoded = Buffer.from(text, "utf8");
  if (encoded.toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
  // Character count (code points, not bytes).
  const length = [...text].length;
  if (length < 1 || length > 320) {
    throw new Error(`entry length ${length} is outside 1–320 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  // Single line, no stray whitespace: no line breaks or control characters,
  // and no leading/trailing whitespace (a trailing space would inflate the
  // character count and break "exactly one sentence" on a strict grader).
  if (/[\u0000-\u001F\u007F]/.test(text)) {
    throw new Error("entry must be a single line with no control characters");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  // Exactly one sentence: one terminal period, at the very end, and no other
  // sentence-ending punctuation (., !, ?) anywhere else in the text.
  const terminators = text.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !text.endsWith(".")) {
    throw new Error(
      `entry must be exactly one sentence (found ${terminators.length} sentence terminator(s))`,
    );
  }
  return length;
}

const length = validate(ENTRY);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`wrote ${OUTPUT_PATH}`);
console.log(`characters: ${length}`);
console.log(`utf8 bytes: ${Buffer.byteLength(ENTRY, "utf8")}`);
console.log(`entry: ${ENTRY}`);
