import fs from 'node:fs';import assert from 'node:assert/strict';
const d=JSON.parse(fs.readFileSync('web/data/dataset.json','utf8'));
const b=JSON.parse(fs.readFileSync('evidence/deployment/browser-verification.json','utf8'));
assert.equal(b.charts.length,3);assert.equal(b.missingCells,6);let count=0;
for(const v of d.variables){const chart=b.charts.find(c=>c.label===v.label);const series=d.series.filter(s=>s.indicator===v.key);const expected=series.flatMap(s=>s.values.map(p=>({country:s.country,...p})));assert.equal(chart.points.length,expected.length);for(let i=0;i<expected.length;i++){const p=expected[i],point=chart.points[i];const value=p.value.toLocaleString('en-US',{maximumFractionDigits:v.key==='population'?0:2});assert.equal(point.label,`${p.country}, ${p.year}: ${value} ${v.unit}`);assert.ok(Math.abs(point.cx-(64+(p.year-2015)/9*770))<1e-8);const low=v.key==='life'?50:0,high=v.key==='population'?140:v.key==='life'?90:50,factor=v.key==='population'?1e6:1;assert.ok(Math.abs(point.cy-(238-(p.value/factor-low)/(high-low)*208))<1e-8);count++;}}
for(let i=0;i<d.findings.length;i++)assert.ok(b.findings[i].startsWith(d.findings[i].text));
assert.deepEqual(b.sourceLinks,d.variables.map(v=>'https://data.worldbank.org/indicator/'+v.wb));
const result={result:'PASS',checkedPointLabelsAndCoordinates:count,findings:6,sourceLinks:3,missingCells:6};fs.writeFileSync('evidence/deployment/chart-checks.json',JSON.stringify(result,null,2)+'\n');console.log(result);
