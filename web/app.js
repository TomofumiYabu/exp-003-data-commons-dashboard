const colors={Japan:'#175e83',Kenya:'#b84b26',Mexico:'#427548'};
const format=(v,key)=>v.toLocaleString('en-US',{maximumFractionDigits:key==='population'?0:2});
function chart(d,v){
 const ss=d.series.filter(s=>s.indicator===v.key),points=ss.flatMap(s=>s.values),factor=v.key==='population'?1e6:1;
 const low=v.key==='life'?50:0,high=v.key==='population'?140:v.key==='life'?90:50;
 const x=y=>64+(y-2015)/9*770,y=n=>238-(n/factor-low)/(high-low)*208;
 let svg=`<svg viewBox="0 0 900 290" role="img" aria-label="${v.label}, annual trends for Japan, Kenya and Mexico"><title>${v.label}</title>`;
 for(let i=0;i<=4;i++){const n=low+(high-low)*i/4,Y=y(n*factor);svg+=`<line x1="64" x2="834" y1="${Y}" y2="${Y}" stroke="#e0e5e4"/><text x="52" y="${Y+4}" text-anchor="end">${n}</text>`;}
 for(let year=2015;year<=2024;year++)svg+=`<text x="${x(year)}" y="265" text-anchor="middle">${year}</text>`;
 for(const s of ss){let path='',previous=null;for(const p of s.values){path+=`${previous===p.year-1?'L':'M'}${x(p.year)},${y(p.value)} `;previous=p.year;}svg+=`<path d="${path}" fill="none" stroke="${colors[s.country]}" stroke-width="2.5"/>`;for(const p of s.values)svg+=`<circle tabindex="0" cx="${x(p.year)}" cy="${y(p.value)}" r="4" fill="${colors[s.country]}" aria-label="${s.country}, ${p.year}: ${format(p.value,v.key)} ${v.unit}"><title>${s.country} · ${p.year}: ${format(p.value,v.key)} ${v.unit}</title></circle>`;}
 svg+='</svg>';
 return `<article class="chart-card"><h3>${v.label}</h3><p class="chart-meta">${v.key==='population'?'Millions of people':v.unit} · ${Math.min(...points.map(p=>p.year))}–${Math.max(...points.map(p=>p.year))}</p>${svg}<p class="chart-note">World Bank WDI via Data Commons MCP. ${v.key==='life'?'Vertical scale begins at 50 years. ':''}${v.key==='population'?'2024 available.':'2024 missing; no extrapolation.'}</p></article>`;
}
fetch('data/dataset.json').then(r=>{if(!r.ok)throw Error('Static dataset unavailable');return r.json()}).then(d=>{
 document.querySelector('#charts').innerHTML=d.variables.map(v=>chart(d,v)).join('');
 function compare(){const key=document.querySelector('#indicator').value,v=d.variables.find(v=>v.key===key);document.querySelector('#comparison-caption').textContent=`${v.label} · ${v.unit} · latest year ${key==='population'?2024:2023}`;document.querySelector('#comparison-body').innerHTML=['Japan','Kenya','Mexico'].map(c=>{const s=d.changes.find(s=>s.indicator===key&&s.country===c);return `<tr><th scope="row">${c}</th><td>${format(s.first,key)}</td><td>${format(s.last,key)}</td><td>${s.absolute>0?'+':''}${format(s.absolute,key)}</td><td>${s.percent>0?'+':''}${s.percent.toFixed(2)}%</td></tr>`}).join('');}
 compare();document.querySelector('#indicator').addEventListener('change',compare);
 document.querySelector('#finding-list').innerHTML=d.findings.map(f=>`<li>${f.text}<small>TRACE · ${f.indicator} / ${f.countries.join(', ')} / ${f.years.join(', ')}</small></li>`).join('');
 document.querySelector('#source-list').innerHTML=d.variables.map(v=>`<div class="source"><h3>${v.label}</h3><p>${v.definition} Unit: ${v.unit}.</p><a href="https://data.worldbank.org/indicator/${v.wb}">World Bank indicator ↗</a><p><code>DCID: ${v.id}<br>Facet: ${d.series.find(s=>s.indicator===v.key).source.sourceId}</code></p></div>`).join('');
 document.querySelector('#limitations').innerHTML=d.limitations.map(l=>`<li>${l}</li>`).join('');
 document.querySelector('#all-data').innerHTML='<table><caption>Frozen MCP snapshot. Missing values are explicitly marked.</caption><thead><tr><th>Indicator / country</th>'+Array.from({length:10},(_,i)=>`<th>${2015+i}</th>`).join('')+'</tr></thead><tbody>'+d.series.map(s=>`<tr><th>${d.variables.find(v=>v.key===s.indicator).label} / ${s.country}</th>`+Array.from({length:10},(_,i)=>{const p=s.values.find(p=>p.year===2015+i);return `<td>${p?format(p.value,s.indicator):'Missing'}</td>`}).join('')+'</tr>').join('')+'</tbody></table>';
 window.EXP003={charts:3,observations:d.series.reduce((n,s)=>n+s.values.length,0),findings:d.findings.length};
}).catch(e=>{document.querySelector('#charts').textContent='The static dataset could not be loaded. Serve this folder over HTTP and try again.';console.error(e)});
