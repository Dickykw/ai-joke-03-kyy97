// ai-joke-03: Make the AI judge laugh
// Writes a one-liner joke about AI coding agents to the output file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = `I made the config read-only to stop my agent editing it. It made it writable, edited it, and made it read-only again.`;

writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf-8');