// ai-joke-03: Make the AI judge laugh
// Writes a one-liner joke about AI coding agents to the output file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = `My AI coding agent said "trust me" — that's when I knew the unit tests would fail.`;

writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf-8');