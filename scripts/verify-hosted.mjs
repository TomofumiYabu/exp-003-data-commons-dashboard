import fs from 'node:fs';
import crypto from 'node:crypto';
const base='https://tomofumiyabu.github.io/exp-003-data-commons-dashboard/';
const results=[];
for(const file of ['index.html','styles.css','app.js','data/dataset.json','data/observations.csv']){
 const response=await fetch(base+file);if(!response.ok)throw Error(`${file}: HTTP ${response.status}`);
 const hosted=Buffer.from(await response.arrayBuffer()),local=fs.readFileSync('web/'+file);
 const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
 const row={file,status:response.status,bytes:hosted.length,hostedSha256:hash(hosted),localSha256:hash(local),exactMatch:hosted.equals(local)};
 results.push(row);if(!row.exactMatch)throw Error(`${file}: byte mismatch`);
}
const d=JSON.parse(fs.readFileSync('web/data/dataset.json','utf8'));
const result={checkedAt:new Date().toISOString(),url:base,result:'PASS',observations:d.series.reduce((n,s)=>n+s.values.length,0),series:d.series.length,files:results};
fs.writeFileSync('evidence/deployment/http-verification.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
