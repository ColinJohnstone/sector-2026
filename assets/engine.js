/* Day page renderer: builds a day from window.SECTOR.days[n] */
(function(){
const D=window.SECTOR.days[document.body.dataset.day];
const PH=window.PHOTOS||{};
const G=window.GLOSSARY||{};
const S=D.sessions;
const byId=Object.fromEntries(S.map(s=>[s.id,s]));
const pos=id=>S.findIndex(s=>s.id===id);
const linkTo=id=>`<a href="#${id}">${esc(byId[id].short)}</a>`;
const rel=ids=>ids&&ids.length?`<div class="rel">${ids.map(linkTo).join("")}</div>`:"";

/* ---------- hero ---------- */
$("#hero-in").innerHTML=`
  <p class="eyebrow">${ic("pin")}${esc(D.eyebrow)}</p>
  <h1 id="h1">${D.h1}</h1>
  <p class="lead">${esc(D.lead)}</p>
  ${D.heroExtra||""}
  <div class="howto" aria-label="Ways to use this page">${D.howto.map(([m,l,h,i])=>`<a href="${h}">${ic(i)}<b>${esc(m)}</b>${esc(l)}</a>`).join("")}</div>
  <div class="byline"><img class="me" src="../assets/colin.jpg" alt="Colin Johnstone" width="46" height="46"><div class="who"><a href="https://www.linkedin.com/in/colin-johnstone-7a982a187/" rel="author">Colin Johnstone</a><span>Senior Consultant, Authentication Services @ CIBC</span></div><a class="li" href="https://www.linkedin.com/in/colin-johnstone-7a982a187/">LinkedIn</a></div>
  <p class="disclaimer">${ic("note")}Personal conference notes, analysis and observations by <a href="https://www.linkedin.com/in/colin-johnstone-7a982a187/" rel="author">Colin Johnstone</a>. Not an official CIBC publication or position.</p>`;
splitWords($("#h1"));

/* ---------- brief ---------- */
const B=D.brief;
$("#brief-in").innerHTML=`
  <div class="sec-head rv"><p class="eyebrow">${ic("bolt")}The brief</p><h2>If you only read one thing</h2><p class="lead">${esc(B.lead)}</p></div>
  <div class="big3">${B.ideas.map(x=>`<div class="idea rv"><div class="ico">${ic(x.icon)}</div><p class="eyebrow">${esc(x.eyebrow)}</p><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div>`).join("")}</div>
  <div class="numbers rv" aria-label="${esc("Day "+D.n+" by the numbers")}">${B.stats.map(st=>`<div class="num"><b data-count>${esc(st.v)}</b><span>${esc(st.l)}</span><small>${esc(st.from)}</small>${provenance(st.src)}</div>`).join("")}</div>
  <blockquote class="rv"><p>${esc(B.quote.text)}</p><footer>${esc(B.quote.by)}</footer></blockquote>
  <p class="after-q">${esc(B.afterQuote)}</p>
  <div class="agenda"><p class="label">${ic("clock")}${esc(B.agendaLabel)}</p><ol id="agenda"></ol></div>`;
$("#agenda").innerHTML=D.agenda.map(d=>{
  if(typeof d==="string"){const s=byId[d];return `<li><time>${s.time}</time><i class="pin"></i><a href="#${s.id}"><span class="pin-i">${ic(s.icon)}</span><span><b>${esc(s.short)}</b><small>${esc(s.speakers.map(x=>x[0]).join(", "))}</small><span class="faces" aria-hidden="true">${s.speakers.filter(x=>PH[x[0]]).map(x=>`<img src="data:image/jpeg;base64,${PH[x[0]]}" alt="">`).join("")}</span></span></a></li>`}
  return `<li class="brk"><time>${d[0]}</time><i class="pin"></i><div class="row"><span class="pin-i">${ic(d[3])}</span><span><b>${esc(d[1])}</b>${d[2]?`<small>${esc(d[2])}</small>`:""}</span></div></li>`}).join("");

/* ---------- sessions ---------- */
const usedCats=Object.keys(CATS).filter(k=>S.some(s=>s.cats.includes(k)));
$("#sessions-in").innerHTML=`
  <div class="sec-head rv"><p class="eyebrow">${ic("note")}Session notes</p><h2>${esc(D.sessionsHead.title)}</h2><p class="lead">${esc(D.sessionsHead.lead)}</p>
    <div class="legend"><span><i class="prov presented">Presented</i>what the speaker covered</span><span><i class="prov mine">My analysis</i>my interpretation</span><span><i class="prov ext">External</i>sources I added</span></div></div>
  <ol class="sindex" aria-label="All sessions">${S.map((s,i)=>`<li><a href="#${s.id}"><span class="n">${String(i+1).padStart(2,"0")}</span><span><b>${esc(s.short)}</b><small>${s.time} · ${esc(s.speakers.map(x=>x[0]).slice(0,2).join(", "))}${s.speakers.length>2?" +"+(s.speakers.length-2):""}</small></span></a></li>`).join("")}</ol>
  <div class="tools">
    <label class="search" for="q"><span class="sr">Search this day's sessions</span>${ic("search")}<input id="q" type="search" placeholder="${esc(D.searchHint)}" autocomplete="off"></label>
    <div class="filter-row" role="group" aria-label="Filter by topic">
      <button class="chipbtn" data-tag="all" aria-pressed="true">All</button>
      ${usedCats.map(k=>`<button class="chipbtn" data-tag="${k}" aria-pressed="false">${ic(CATS[k][1])}${CATS[k][0]}</button>`).join("")}
      <span class="count" id="count" aria-live="polite"></span>
    </div>
  </div>
  <div class="sessions" id="list"></div>`;

let query="",tag="all";const tabState={};
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const hl=t=>{const safe=esc(t);if(!query)return safe;return safe.replace(new RegExp("("+reEsc(esc(query))+")","gi"),"<mark>$1</mark>")};
const statTxt=s=>(s.stats||[]).map(x=>x.v+" "+x.l).join(" ");
const txt={
  head:s=>[s.title,s.summary,s.fmt,...s.speakers.flat(),...s.cats.map(k=>CATS[k][0])].join(" "),
  notes:s=>[...s.covered,...(s.learned||[]),s.why,s.takeaway||"",s.ask,...(s.identity?s.identity.points:[]),...s.concepts.map(c=>G[c]?G[c][0]:""),...(s.chain?s.chain.steps:[]),statTxt(s)].join(" "),
  program:s=>s.program.join(" "),
  reading:s=>s.links.map(l=>l.t+" "+l.d+" "+l.k).join(" ")
};
const has=(t,q)=>t.toLowerCase().includes(q);

function speaker(n,r){
  const li=(D.linkedin||{})[n];
  return `<div class="spk">${PH[n]?`<img class="av photo" src="data:image/jpeg;base64,${PH[n]}" alt="${esc(n)}" width="88" height="88" loading="lazy">`:`<span class="av" style="--h:${hue(n)}" aria-hidden="true">${initials(n)}</span>`}<div>
    <b>${hl(n)}</b><small>${hl(r)}</small>${(()=>{const o=(D.people||{})[n]||{};const parts=[o.site?`<a href="${o.site}" target="_blank" rel="noopener">${esc(o.co)}</a>`:"",o.loc?`<span class="loc">${esc(o.loc)}</span>`:"",li?`<a href="${li}" target="_blank" rel="noopener">LinkedIn</a>`:""].filter(Boolean);return parts.length?`<span class="spk-links">${parts.join("")}</span>`:""})()}</div></div>`;
}
function briefingPanel(s){
  const covLabel=s.fromProgram?`<i class="prov program">From the official program</i>`:`<i class="prov presented">Presented</i>`;
  return `<div class="panel">
    <div class="blk"><div class="blk-h"><p class="label">${ic("check")}What was covered</p>${covLabel}</div><ul class="bul">${s.covered.map(c=>`<li>${hl(c)}</li>`).join("")}</ul></div>
    ${s.chain?`<div class="chain"><ol>${s.chain.steps.map((x,k)=>`<li style="--k:${k}">${hl(x)}</li>`).join("")}</ol><small>${esc(s.chain.note)}</small></div>`:""}
    ${s.stats&&s.stats.length?`<div class="blk"><div class="blk-h"><p class="label">${ic("chart")}Key statistics and claims</p></div><div class="statgrid">${s.stats.map(st=>statCard(st,s.org)).join("")}</div></div>`:""}
    ${s.learned&&s.learned.length?`<div class="blk"><div class="blk-h"><p class="label">${ic("spark")}What I learned</p><i class="prov mine">My analysis</i></div><ul class="bul mine">${s.learned.map(c=>`<li>${hl(c)}</li>`).join("")}</ul></div>`:""}
    <div class="blk"><div class="blk-h"><p class="label">${ic("bolt")}Why it matters</p><i class="prov mine">My analysis</i></div><p>${hl(s.why)}</p></div>
    ${s.identity?`<div class="lens"><div class="lens-h">${ic("finger")}<b>Identity Lens</b><i class="prov mine">My analysis</i></div>${s.identity.intro?`<p>${hl(s.identity.intro)}</p>`:""}<ul>${s.identity.points.map(p=>`<li>${hl(p)}</li>`).join("")}</ul></div>`:""}
    <div><p class="label">${ic("book")}Key concepts</p><div class="concepts">${s.concepts.map(c=>termChip(c)).join("")}</div></div>
    ${s.takeaway?`<div class="takeaway"><p class="label">${ic("key")}My takeaway</p><p>${hl(s.takeaway)}</p></div>`:""}
    <p class="ask">${ic("q")}<span><strong>Ask yourself:</strong> ${hl(s.ask)}</span></p></div>`;
}
function panel(s,which){
  if(which==="program") return `<div class="panel prog">
    <div class="pmeta"><span>${ic("clock")}${s.time}–${s.end}</span><span>${ic("pin")}${esc(s.room)}</span><span>${ic("mic")}${esc(s.fmt)}</span></div>
    <div class="blk"><div class="blk-h"><p class="label">${ic("note")}What the program promised</p><i class="prov program">Official abstract, summarized</i></div><ul class="bul">${s.program.map(c=>`<li>${hl(c)}</li>`).join("")}</ul></div>
    <a class="official" href="${s.url||D.official}" target="_blank" rel="noopener">${ic("ext")}Official session listing</a></div>`;
  if(which==="reading") return `<div class="panel"><div class="blk-h"><p class="label">${ic("book")}Primary and technical resources</p><i class="prov ext">External</i></div>
    <p class="note-ext">Sources I've added for depth and verification. Unless noted, they weren't part of the presentation.</p>
    <div class="links">${s.links.map(l=>`<a href="${l.u}" target="_blank" rel="noopener">${ic("ext")}<strong>${hl(l.t)}</strong><span><em class="kind">${esc(l.k)}</em> ${hl(l.d)}</span></a>`).join("")}</div></div>`;
  return briefingPanel(s);
}
function card(s){
  const i=pos(s.id),prev=S[i-1],next=S[i+1],q=query.toLowerCase();
  const hits={brief:q&&has(txt.notes(s),q),program:q&&has(txt.program(s),q),reading:q&&has(txt.reading(s),q)};
  let t=tabState[s.id]||"brief";if(q&&!hits[t])t=["brief","program","reading"].find(k=>hits[k])||t;
  const tab=(k,label,icon)=>`<button class="tab" role="tab" aria-selected="${t===k}" data-s="${s.id}" data-t="${k}">${ic(icon)}${label}${hits[k]?'<i class="hit" title="Has matches"></i>':""}</button>`;
  return `<article class="session rv" id="${s.id}">
  <div class="s-top">
    <div class="s-icon">${ic(s.icon)}<span class="n">${String(i+1).padStart(2,"0")}</span></div>
    <div class="s-head">
      <div class="s-meta"><span class="s-time">${ic("clock")}${s.time}–${s.end}</span><span class="fmt">${esc(s.fmt)}</span>${s.cats.map(catChip).join("")}</div>
      <h3>${hl(s.title)}</h3>
      <div class="speakers">${s.speakers.map(([n,r])=>speaker(n,r)).join("")}</div>
    </div>
  </div>
  <p class="oneline">${hl(s.summary)}</p>
  <div class="tabs" role="tablist" aria-label="${esc(s.title)}">${tab("brief","Briefing","note")}${tab("program","Official program","mic")}${tab("reading",`Resources (${s.links.length})`,"book")}</div>
  <div class="panel-wrap">${panel(s,t)}</div>
  <nav class="snav" aria-label="Session navigation">
    ${prev?`<a class="prev" href="#${prev.id}">${ic("arrowl")}<span>${esc(prev.short)}</span></a>`:"<span></span>"}
    <span class="pos">Session ${i+1} of ${S.length}<a href="#sessions">${ic("list")}All sessions</a></span>
    ${next?`<a class="next" href="#${next.id}"><span>${esc(next.short)}</span>${ic("arrow")}</a>`:`<a class="next" href="#remember"><span>Takeaways</span>${ic("arrow")}</a>`}
  </nav>
  </article>`;
}
function render(){
  const q=query.toLowerCase(),all=s=>Object.values(txt).map(f=>f(s)).join(" ");
  const shown=S.filter(s=>(tag==="all"||s.cats.includes(tag))&&(!q||has(all(s),q)));
  $("#list").innerHTML=shown.length?shown.map(card).join(""):`<div class="empty">${ic("search")}<p>No sessions match${query?` “${esc(query)}”`:""}${tag!=="all"?` in ${CATS[tag][0]}`:""}.</p><button class="btn ghost" id="clear">${ic("retry")}Clear search and filters</button></div>`;
  $("#count").textContent=`${shown.length} of ${S.length} sessions`;
  const c=$("#clear");if(c)c.onclick=()=>{query="";$("#q").value="";setTag("all")};
  observeCounts($("#list"));
}
$("#list").addEventListener("click",e=>{
  const b=e.target.closest(".tab");if(!b)return;
  const s=byId[b.dataset.s];tabState[s.id]=b.dataset.t;
  const art=b.closest(".session");
  art.querySelectorAll(".tab").forEach(x=>x.setAttribute("aria-selected",x===b));
  art.querySelector(".panel-wrap").innerHTML=panel(s,b.dataset.t);observeCounts(art);
});
function setTag(t){tag=t;document.querySelectorAll(".chipbtn").forEach(b=>b.setAttribute("aria-pressed",b.dataset.tag===t));render()}
document.querySelectorAll(".chipbtn").forEach(b=>b.addEventListener("click",()=>setTag(b.dataset.tag)));
$("#q").addEventListener("input",e=>{query=e.target.value.trim();render()});
render();

/* ---------- takeaways ---------- */
const T=D.takeaways;
$("#remember-in").innerHTML=`
  <div class="sec-head rv"><p class="eyebrow">${ic("key")}What I'm taking away</p><h2>${esc(T.title)}</h2><p class="lead">${esc(T.lead)}</p></div>
  <div class="tk">${T.items.map(x=>`<div class="rv"><div class="ico">${ic(x.icon)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p>${rel(x.sessions)}</div>`).join("")}</div>
  <blockquote class="closing rv"><p>${esc(T.quote.text)}</p>${T.quote.by?`<footer>${esc(T.quote.by)}</footer>`:""}</blockquote>`;

/* ---------- enterprise ---------- */
const E=D.enterprise;
$("#enterprise-in").innerHTML=`
  <div class="sec-head rv"><p class="eyebrow">${ic("building")}Practical implications</p><h2>What this means for an enterprise</h2><p class="lead">${esc(E.lead)}</p></div>
  <ol class="ent">${E.items.map(x=>`<li class="rv"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p>${rel(x.sessions)}</li>`).join("")}</ol>`;

/* ---------- glossary (terms used today) ---------- */
const used=[...new Set(S.flatMap(s=>s.concepts).concat(D.extraTerms||[]))].filter(k=>G[k]).sort((a,b)=>G[a][0].localeCompare(G[b][0]));
$("#glossary-in").innerHTML=`
  <div class="sec-head rv"><p class="eyebrow">${ic("book")}Glossary</p><h2>Key concepts</h2><p class="lead">Plain-language definitions for the terms that came up on Day ${D.n}. Hover a concept on any session to see its definition.</p></div>
  <dl class="gloss">${used.map(k=>`<div id="g-${k}" class="rv"><dt>${ic(G[k][2]||"book")}${esc(G[k][0])}</dt><dd>${esc(G[k][1])}</dd></div>`).join("")}</dl>
  <a class="more" href="../glossary/">${ic("book")}Full glossary for the conference${ic("arrow")}</a>`;

/* ---------- quiz ---------- */
$("#quiz-head").innerHTML=`<p class="eyebrow">${ic("q")}Knowledge check</p><h2>Day ${D.n} quiz</h2><p class="lead">${esc(D.quiz.lead)}</p>`;
Quiz($("#quizbox"),D.quiz.items,{resolve:id=>byId[id]?{title:byId[id].title,href:"#"+id}:null});

/* ---------- footer ---------- */
$("#foot").innerHTML=`<strong style="color:var(--ink)">${esc(D.footer.title)}</strong><span>${esc(D.footer.place)}</span>
  <span>Personal conference notes, analysis and observations by <a href="https://www.linkedin.com/in/colin-johnstone-7a982a187/" rel="author">Colin Johnstone</a>. Not an official CIBC publication or position.</span>
  <span>Program details from the official <a href="${D.official}" target="_blank" rel="noopener">SecTor 2026 schedule</a>. Statistics marked “Presented during the session” are as stated by the speakers and haven't been independently verified. <a href="../">Back to all days</a>.</span>`;

observeCounts();readProgress();
if(location.hash){const el=document.getElementById(location.hash.slice(1));if(el)setTimeout(()=>el.scrollIntoView(),50)}
})();
