import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
assert(scripts.length >= 1,'inline game script missing');
assert(!/<script\b[^>]*\bsrc\s*=/.test(html),'runtime source must stay inline');
assert(/<canvas\b/i.test(html),'WebGL canvas missing');
assert(!/<link\b[^>]*\bhref=["']https?:/i.test(html),'external styles/import not permitted');
for(let i=0;i<scripts.length;i++)new vm.Script(scripts[i],{filename:`inline-${i}.js`});
assert(html.includes('PW_NAV_GAME.pause()'),'background pause protection missing');
assert(html.includes('VD.lastIdleRenderMs'),'idle render governor missing');
assert(html.includes('const ERASE_STAGES = 5'),'scenario erasure constants missing');

for (const artifact of ['docs/TECHNICAL_REPORT.pdf', 'docs/TECHNICAL_REPORT.md', 'docs/ARCHITECTURE.png', 'docs/screenshots/cover.png']) {
  assert(fs.statSync(path.join(root,artifact)).size>500, `Missing or empty artifact: ${artifact}`);
}

console.log(`PASS: ${scripts.length} inline script(s) parse, key guards present, runtime self-contained.`);
