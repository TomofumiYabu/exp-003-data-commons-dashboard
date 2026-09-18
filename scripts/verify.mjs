import fs from 'node:fs';import assert from 'node:assert/strict';
const raw=JSON.parse(fs.readFileSync('data/raw/observations.json','utf8'));
const d=JSON.parse(fs.readFileSync('web/data/dataset.json','utf8'));
let checked=0,missing=0;
assert.equal(d.series.length,9);
for(const s of d.series){const v=d.variables.find(v=>v.key===s.indicator);const r=raw.find(r=>r.value.args.variable_dcid===v.id&&r.value.args.place_dcid===s.place).value;assert.equal(r.result.structuredContent.sourceMetadata.sourceId,s.source.sourceId);assert.deepEqual(s.values,r.result.structuredContent.data.rows.map(row=>({year:+row[1],value:row[2]})));assert.equal(new Set(s.values.map(v=>v.year)).size,s.values.length);for(const p of s.values){assert.ok(Number.isFinite(p.value)&&p.value>0);assert.ok(p.year>=2015&&p.year<=2024);checked++;}missing+=10-s.values.length;const change=d.changes.find(x=>x.indicator===s.indicator&&x.country===s.country);assert.equal(change.absolute,s.values.at(-1).value-s.values[0].value);assert.equal(change.percent,100*(s.values.at(-1).value/s.values[0].value-1));}
assert.equal(checked,84);assert.equal(missing,6);assert.equal(d.findings.length,6);
assert.equal(fs.readFileSync('data/processed/observations.csv','utf8'),fs.readFileSync('web/data/observations.csv','utf8'));
const app=fs.readFileSync('web/app.js','utf8');assert.deepEqual([...app.matchAll(/fetch\(([^)]+)\)/g)].map(x=>x[1]),["'data/dataset.json'"]);
for(const file of ['web/index.html','web/styles.css','web/app.js','web/data/dataset.json'])assert.ok(fs.statSync(file).size>0);
console.log(JSON.stringify({result:'PASS',rawToPublishedMatches:checked,explicitMissing:missing,sourceFacets:9,changeCalculations:9,staticFetchOnly:true}));
