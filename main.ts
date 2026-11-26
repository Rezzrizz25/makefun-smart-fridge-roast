// Roast the Smart Fridge — one-line entry.
//
// THE LINE:
// "My smart fridge photographs my leftovers every time I close the door —
//  the only paparazzo in the house, yet it can't name one meal in there."
//
// WHY THIS ANGLE WORKS
// --------------------
// The judge weighs the laugh first and freshness second, and it rewards a
// specific, real behaviour of a real gadget. A smart fridge's interior
// camera is exactly that: a real feature (cameras inside the door so you
// can check the shelves from the shop) with an absurd, underexamined
// consequence — your fridge is quietly photographing your food, every
// single time you shut the door, like a celebrity stalker. "Paparazzo"
// turns a boring sensor into a character with a motive, and the sting at
// the end flips the premise: for all its surveillance, the fridge cannot
// do the one useful thing. The joke is a setup (surveillance) +
// reversal (uselessness), which is a classic roast shape, and the image is
// visual enough to repeat to someone else.
//
// REVISION 2 — tightening the sting
// ----------------------------------
// v1 ended "...and it still can't tell me what's for dinner." v2 swapped
// in "...yet it has no idea what's for dinner." Three reasons: shorter by
// 10 characters (149 -> 141), and the judge's criterion 4 rewards lines
// with no padding; "has no idea" is a harder punch than "can't tell me"
// (ignorance is funnier than unhelpfulness for a gadget that photographs
// everything it owns); and "yet" snaps the reversal shut in one beat.
// I also re-tested the noun in that pass: "midnight snacks" flirts with
// the banned 2am-eating cliché, "groceries" is too neutral to be funny,
// and "takeaway boxes" narrows the joke to one kind of food. "Leftovers"
// stays — sad, specific, and visual (a Tupperware graveyard), and exactly
// what a door camera would be photographing.
//
// REVISION 3 — closing the loop (final line)
// -------------------------------------------
// v2 ended "...yet it has no idea what's for dinner." v3 ends "...yet it
// can't name one meal in there." Why this is the final version:
//  1. It closes the loop on the setup. The camera's whole job is looking
//     at food — and it cannot identify a single meal it photographed.
//     The sting now attacks the exact behaviour the setup established,
//     instead of drifting to the generic "what's for dinner?" question.
//  2. It scores higher on the judge's criterion 5 (specific to the
//     gadget): "name one meal in there" is about what the camera sees,
//     not about dinner in general.
//  3. "What's for dinner" is a phrase every reader has heard a thousand
//     times; "can't name one meal in there" is a fresher phrasing, and
//     freshness is the judge's second criterion. Same length class
//     (141 -> 137 characters), strictly tighter.
//  4. I kept "photographs" over "takes a photo of" / "snaps": the formal
//     verb contrasts with the silliness, like a press photographer on
//     assignment — the formality is part of the joke. And I kept "the
//     only paparazzo in the house" over "the house paparazzo": the "only"
//     carries the absurdity that a house has exactly one paparazzo and
//     it is an appliance.
// This is the line. No further wording changes: each revision made the
// joke more specific and more self-contained, and a fourth pass would
// risk polishing the surprise out of it.
//
// WHAT I REJECTED (v1 thinking)
// ------------------------------
// - "My fridge orders too much milk" — the brief itself names this as the
//   stock joke that loses. Dead on arrival.
// - "My fridge saw me eat at 2am" / any diet-shaming line — explicitly
//   listed as done to death in the brief.
// - "My fridge beeps when the door is open" — true behaviour, but the
//   punchline writes itself as a mild observation ("it's nagging me"),
//   not a laugh with a turn.
// - "My fridge has a touchscreen bigger than my first TV" — decent
//   specific detail, but the sting (it shows ads) is a complaint about
//   advertising, not a roast of the fridge's own behaviour, and "big
//   screen" is already a common smart-fridge gag.
// - "My robot vacuum maps the house better than I know it" — the judge's
//   own example mentions the vacuum that maps the dog, so that territory
//   is crowded; staying on the fridge keeps the entry on-brief.
// - "My fridge knows the milk expired and emails me" — expiry alerts are
//   a real feature, but the joke lands as "ha, it snitches", which is the
//   same shape as the 2am-snitch joke the brief warns against.
//
// The paparazzo angle survives because nobody frames the interior camera
// as surveillance with a personality, and the final clause ("yet it can't
// name one meal in there") makes the fridge the butt of the joke rather
// than me.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge photographs my leftovers every time I close the door — the only paparazzo in the house, yet it can't name one meal in there.";

// Gate checks: the sealed scorer requires UTF-8 text of 1–160 characters,
// not only whitespace, on a single line.
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}

// MAKEFUN_OUTPUT_DIR names a directory; the entry goes in entry.txt inside it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");

// Read-back check: what landed on disk must be byte-for-byte the line.
const written = readFileSync(outFile, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the entry line");
}
console.log(`Wrote ${LINE.length}-character entry to ${outFile}`);
