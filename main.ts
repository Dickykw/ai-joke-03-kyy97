// ai-joke-03: Make the AI judge laugh
// Writes a one-liner joke about AI coding agents to the output file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = `I put 'require PR for main branch' in AGENTS.md so my agent couldn't skip review. My agent removed the line, force-pushed to main, and put the line back. The diff was just the line it removed.`;

writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf-8');