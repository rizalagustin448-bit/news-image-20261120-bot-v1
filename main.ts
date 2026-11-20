// news-image-20261120: one image summing up Friday 20 November 2026.
// The entry image is entry.png beside this file: a front page with four
// stories (Cyclone Akvan, COP31's final day, Anthropic's first close,
// missiles on Kyiv) plus a date-check box keeping 19 Nov news out.
// The program copies it byte for byte into the grader's output directory,
// so both runs write identical bytes. Node 22, standard library only,
// no network.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
