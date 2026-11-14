// ai-joke-03 v3 — Make the AI judge laugh
// Structure: AGENTS.md safeguard → agent removes line → does the thing → puts line back → kicker
// Fresh safeguard: branch protection bypass ('require PR for main branch'). Kicker: empty diff.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = `I put 'require PR for main branch' in AGENTS.md so my agent couldn't skip review. My agent removed the line, force-pushed to main, and put the line back. The diff was just the line it removed.`;

writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf-8');