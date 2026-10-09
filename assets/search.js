/* Site-wide search across sessions, speakers, takeaways and the glossary */
(function(){
const days=Object.values((window.SECTOR||{}).days||{});
const G=window.GLOSSARY||{};
const items=[];
for(const D of days){
  const base=`day-${D.n}/`;
  for(const s of D.sessions){
    items.push({type:"Session",title:s.title,sub:`Day ${D.n} · ${s.time} · ${s.speakers.map(x=>x[0]).join(", ")}`,href:base+"#"+s.id,cats:s.cats,
      text:[s.summary,...s.covered,...(s.learned||[]),s.why,s.takeaway||"",...s.concepts.map(k=>G[k]?G[k][0]:""),...s.program].join(" ")});
    for(const [n,r] of s.speakers)items.push({type:"Speaker",title:n,sub:`${r} · ${s.short}, Day ${D.n}`,href:base+"#"+s.id,cats:s.cats,text:r});
  }
  for(const t of D.takeaways.items)items.push({type:"Takeaway",title:t.title,sub:`Day ${D.n} takeaway`,href:base+"#remember",cats:[],text:t.text});
}
for(const [k,[t,d]] of Object.entries(G))items.push({type:"Glossary",title:t,sub:"Glossary",href:"glossary/#g-"+k,cats:[],text:d});

const inp=$("#gq"),out=$("#gresults"),catBox=$("#gcats");let cat="all";
catBox.innerHTML=`<button class="chipbtn" data-c="all" aria-pressed="true">All</button>`+Object.entries(CATS).map(([k,[l,i]])=>`<button class="chipbtn" data-c="${k}" aria-pressed="false">${ic(i)}${l}</button>`).join("");
catBox.addEventListener("click",e=>{const b=e.target.closest(".chipbtn");if(!b)return;cat=b.dataset.c;catBox.querySelectorAll(".chipbtn").forEach(x=>x.setAttribute("aria-pressed",x===b));run()});
const snippet=(text,terms)=>{const low=text.toLowerCase();let i=-1;for(const t of terms){i=low.indexOf(t);if(i>-1)break}if(i<0)return text.slice(0,150)+(text.length>150?"…":"");const a=Math.max(0,i-60);return(a?"…":"")+text.slice(a,a+170)+(a+170<text.length?"…":"")};
const mark=(s,terms)=>{let h=esc(s);for(const t of terms){if(!t)continue;h=h.replace(new RegExp("("+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi"),"<mark>$1</mark>")}return h};
function run(){
  const q=inp.value.trim().toLowerCase(),terms=q.split(/\s+/).filter(Boolean);
  if(!terms.length&&cat==="all"){out.innerHTML=`<p class="hint">Search covers ${days.reduce((n,D)=>n+D.sessions.length,0)} sessions, their speakers, takeaways and ${Object.keys(G).length} glossary terms. Pick a topic to browse.</p>`;return}
  let res=items.filter(it=>(cat==="all"||it.cats.includes(cat))&&terms.every(t=>(it.title+" "+it.sub+" "+it.text).toLowerCase().includes(t)));
  res.sort((a,b)=>terms.filter(t=>b.title.toLowerCase().includes(t)).length-terms.filter(t=>a.title.toLowerCase().includes(t)).length);
  if(!res.length){out.innerHTML=`<p class="hint">Nothing matches “${esc(q)}”${cat!=="all"?` in ${CATS[cat][0]}`:""}. Try a broader word.</p>`;return}
  const groups={};for(const r of res)(groups[r.type]=groups[r.type]||[]).push(r);
  out.innerHTML=["Session","Speaker","Takeaway","Glossary"].filter(g=>groups[g]).map(g=>`<div class="gr-group"><p class="label">${g==="Session"?ic("note"):g==="Speaker"?ic("users"):g==="Glossary"?ic("book"):g==="Enterprise"?ic("building"):ic("key")}${g}s · ${groups[g].length}</p>${groups[g].slice(0,8).map(r=>`<a class="gr" href="${r.href}"><b>${mark(r.title,terms)}</b><small>${esc(r.sub)}</small>${terms.length&&r.type!=="Speaker"?`<span>${mark(snippet(r.text,terms),terms)}</span>`:""}</a>`).join("")}${groups[g].length>8?`<p class="hint">${groups[g].length-8} more. Narrow your search to see them.</p>`:""}</div>`).join("");
}
inp.addEventListener("input",run);run();
if(location.hash==="#search")setTimeout(()=>inp.focus(),100);
})();
