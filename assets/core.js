const SPRITE="<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\">\n  <defs>\n    <symbol id=\"i-globe\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z\"/></symbol>\n    <symbol id=\"i-cloud\" viewBox=\"0 0 24 24\"><path d=\"M7 18h10.5a4 4 0 0 0 .4-8A6 6 0 0 0 6.3 9.5 4.3 4.3 0 0 0 7 18z\"/></symbol>\n    <symbol id=\"i-badge\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2.5\"/><circle cx=\"12\" cy=\"10\" r=\"2.6\"/><path d=\"M8 17c.8-1.8 2.2-2.6 4-2.6s3.2.8 4 2.6M10 6h4\"/></symbol>\n    <symbol id=\"i-shield\" viewBox=\"0 0 24 24\"><path d=\"M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z\"/><path d=\"M9 12l2.2 2.2L15.5 10\"/></symbol>\n    <symbol id=\"i-radar\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 12l6.4-6.4\"/><circle cx=\"16\" cy=\"9\" r=\"1\" fill=\"currentColor\"/></symbol>\n    <symbol id=\"i-coins\" viewBox=\"0 0 24 24\"><ellipse cx=\"9\" cy=\"7\" rx=\"5\" ry=\"2.5\"/><path d=\"M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7\"/><path d=\"M10 15.4c.6 1.2 2.6 2.1 5 2.1 2.8 0 5-1.1 5-2.5v-4c0-1.2-1.6-2.2-3.8-2.5\"/><path d=\"M14 11.5c.3.1.7.1 1 .1 2.8 0 5-1.1 5-2.5\"/></symbol>\n    <symbol id=\"i-mic\" viewBox=\"0 0 24 24\"><rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7\"/></symbol>\n    <symbol id=\"i-fork\" viewBox=\"0 0 24 24\"><circle cx=\"6\" cy=\"5\" r=\"2\"/><circle cx=\"18\" cy=\"5\" r=\"2\"/><circle cx=\"12\" cy=\"19\" r=\"2\"/><path d=\"M6 7v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M12 12v5\"/></symbol>\n    <symbol id=\"i-graph\" viewBox=\"0 0 24 24\"><circle cx=\"5\" cy=\"6\" r=\"2.2\"/><circle cx=\"19\" cy=\"6\" r=\"2.2\"/><circle cx=\"12\" cy=\"18\" r=\"2.2\"/><circle cx=\"12\" cy=\"10\" r=\"1.6\"/><path d=\"M7 7l3.6 2.2M17 7l-3.6 2.2M12 11.6v4.2\"/></symbol>\n    <symbol id=\"i-scale\" viewBox=\"0 0 24 24\"><path d=\"M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z\"/></symbol>\n    <symbol id=\"i-bolt\" viewBox=\"0 0 24 24\"><path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/></symbol>\n    <symbol id=\"i-layers\" viewBox=\"0 0 24 24\"><path d=\"M12 3l9 5-9 5-9-5z\"/><path d=\"M3 13l9 5 9-5\"/></symbol>\n    <symbol id=\"i-bot\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"8\" width=\"16\" height=\"11\" rx=\"3\"/><path d=\"M12 4v4M9 13h.01M15 13h.01M9.5 16h5\"/><circle cx=\"12\" cy=\"3.5\" r=\"1\"/></symbol>\n    <symbol id=\"i-target\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v4M12 18v4M2 12h4M18 12h4\"/></symbol>\n    <symbol id=\"i-chart\" viewBox=\"0 0 24 24\"><path d=\"M3 20h18M5 16l4-5 4 3 6-8\"/><path d=\"M15 6h4v4\"/></symbol>\n    <symbol id=\"i-book\" viewBox=\"0 0 24 24\"><path d=\"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z\"/><path d=\"M4 21V5M8 7h7\"/></symbol>\n    <symbol id=\"i-check\" viewBox=\"0 0 24 24\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"/></symbol>\n    <symbol id=\"i-x\" viewBox=\"0 0 24 24\"><path d=\"M6 6l12 12M18 6L6 18\"/></symbol>\n    <symbol id=\"i-search\" viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-3.5-3.5\"/></symbol>\n    <symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></symbol>\n    <symbol id=\"i-pin\" viewBox=\"0 0 24 24\"><path d=\"M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.3\"/></symbol>\n    <symbol id=\"i-ext\" viewBox=\"0 0 24 24\"><path d=\"M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5\"/></symbol>\n    <symbol id=\"i-arrow\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></symbol>\n    <symbol id=\"i-up\" viewBox=\"0 0 24 24\"><path d=\"M12 19V5M6 11l6-6 6 6\"/></symbol>\n    <symbol id=\"i-coffee\" viewBox=\"0 0 24 24\"><path d=\"M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z\"/><path d=\"M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3\"/></symbol>\n    <symbol id=\"i-flag\" viewBox=\"0 0 24 24\"><path d=\"M5 21V4M5 4h11l-2 4 2 4H5\"/></symbol>\n    <symbol id=\"i-spark\" viewBox=\"0 0 24 24\"><path d=\"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6\"/></symbol>\n    <symbol id=\"i-q\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9.5a2.6 2.6 0 1 1 3.6 2.4c-.7.3-1.1.9-1.1 1.6v.5M12 17h.01\"/></symbol>\n    <symbol id=\"i-key\" viewBox=\"0 0 24 24\"><circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3M15 8l2 2\"/></symbol>\n    <symbol id=\"i-note\" viewBox=\"0 0 24 24\"><path d=\"M5 3h10l4 4v14H5z\"/><path d=\"M14 3v5h5M8 12h8M8 16h6\"/></symbol>\n    <symbol id=\"i-retry\" viewBox=\"0 0 24 24\"><path d=\"M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4\"/></symbol>\n    <symbol id=\"i-li\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M8 10.5V17M8 7.3v.01M12 17v-6.5M12 13.5c0-1.8 1-3 2.6-3S17 11.7 17 13.5V17\"/></symbol>\n    <symbol id=\"i-eye\" viewBox=\"0 0 24 24\"><path d=\"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></symbol>\n    <symbol id=\"i-browser\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2.5\"/><path d=\"M3 9h18M6.5 6.5h.01M9 6.5h.01\"/></symbol>\n    <symbol id=\"i-chip\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/><rect x=\"9.5\" y=\"9.5\" width=\"5\" height=\"5\" rx=\"1\"/><path d=\"M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4\"/></symbol>\n    <symbol id=\"i-phone\" viewBox=\"0 0 24 24\"><rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2.5\"/><path d=\"M11 18.5h2\"/></symbol>\n    <symbol id=\"i-finger\" viewBox=\"0 0 24 24\"><path d=\"M4.5 9.5A8 8 0 0 1 20 11\"/><path d=\"M8.5 7.6A5 5 0 0 1 17 11v1.5\"/><path d=\"M6 15c.6-1.2 1-2.6 1-4a5 5 0 0 1 .7-2.6\"/><path d=\"M12 11v3a6 6 0 0 1-1 3.4\"/><path d=\"M17 15.5c-.2 1.3-.5 2.4-1 3.5\"/><path d=\"M9.5 20.5c1.2-1.6 1.9-3.6 2-5.7\"/></symbol>\n    <symbol id=\"i-building\" viewBox=\"0 0 24 24\"><path d=\"M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3\"/></symbol>\n    <symbol id=\"i-trophy\" viewBox=\"0 0 24 24\"><path d=\"M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4\"/></symbol>\n    <symbol id=\"i-list\" viewBox=\"0 0 24 24\"><path d=\"M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01\"/></symbol>\n    <symbol id=\"i-arrowl\" viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></symbol>\n    <symbol id=\"i-home\" viewBox=\"0 0 24 24\"><path d=\"M4 11l8-7 8 7M6 9.5V20h12V9.5\"/></symbol>\n    <symbol id=\"i-users\" viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"8\" r=\"3\"/><path d=\"M3.5 19c.7-3 2.8-4.5 5.5-4.5s4.8 1.5 5.5 4.5\"/><circle cx=\"17\" cy=\"9\" r=\"2.4\"/><path d=\"M16.5 14.6c2 .2 3.4 1.6 4 4.4\"/></symbol>\n  </defs>\n</svg>";
/* SecTor 2026 site core: icons, helpers, glossary tooltips, quiz. Shared by every page. */
(function(){
  const holder=document.createElement("div");holder.innerHTML=SPRITE;document.body.prepend(holder.firstElementChild);
})();
const $=s=>document.querySelector(s);
const esc=t=>String(t??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ic=(n,c="")=>`<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const initials=n=>n.split(" ").filter(w=>/^[A-Z]/.test(w)).map(w=>w[0]).slice(0,2).join("");
const hue=n=>[...n].reduce((h,c)=>(h*31+c.charCodeAt(0))%360,7);
const reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

/* topic categories used for filters, quiz breakdowns and search */
const CATS={
  ai:["AI","bot"],identity:["Identity","finger"],cloud:["Cloud","cloud"],endpoint:["Endpoint","browser"],
  hardware:["Hardware","chip"],offensive:["Offensive security","target"],governance:["Governance","scale"]
};
const catChip=k=>`<span class="cat">${ic(CATS[k][1])}${CATS[k][0]}</span>`;

/* glossary chip with hover/focus definition */
function termChip(k,href){
  const g=(window.GLOSSARY||{})[k];if(!g)return "";
  return `<a class="concept" href="${href||"#g-"+k}" data-def="${esc(g[1])}">${esc(g[0])}</a>`;
}

/* provenance line for a statistic */
function provenance(src,sess){
  if(!src||src==="presented")return `<span class="src">${ic("mic")}Presented during the session${sess?` · ${esc(sess)}`:""}</span>`;
  if(src==="program")return `<span class="src">${ic("note")}Official session abstract</span>`;
  return `<span class="src">${ic("ext")}<a href="${src.u}" target="_blank" rel="noopener">${esc(src.t)}</a></span>`;
}
function statCard(st,sess){
  return `<div class="statc"><b data-count>${esc(st.v)}</b><span class="lbl">${esc(st.l)}</span>${provenance(st.src,sess)}</div>`;
}

/* count-up for figures (resting text is always the real value) */
const countIO="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;countIO.unobserve(en.target);countUp(en.target)}),{threshold:.6}):null;
function observeCounts(root=document){if(!countIO||reduceMotion)return;root.querySelectorAll("[data-count]:not([data-done])").forEach(el=>{if(el.querySelector("mark"))return;el.dataset.done=1;countIO.observe(el)})}
function countUp(el){
  const full=el.textContent,m=full.match(/[\d,.]+/);if(!m)return;
  const raw=m[0].replace(/,/g,""),target=parseFloat(raw);if(!isFinite(target)||target===0)return;
  const dec=(raw.split(".")[1]||"").length,pre=full.slice(0,m.index),post=full.slice(m.index+m[0].length),comma=m[0].includes(","),t0=performance.now();
  const fmt=v=>{let s=v.toFixed(dec);if(comma)s=Number(s).toLocaleString("en-US",{minimumFractionDigits:dec,maximumFractionDigits:dec});return s};
  const step=t=>{const p=Math.min(1,(t-t0)/1000),v=target*(1-Math.pow(1-p,3));el.textContent=pre+fmt(v)+post;if(p<1)requestAnimationFrame(step);else el.textContent=full};
  requestAnimationFrame(step);
}

/* reading progress bar */
function readProgress(){const rb=$("#readbar");if(!rb)return;addEventListener("scroll",()=>{const h=document.documentElement;rb.style.setProperty("--p",(h.scrollTop/((h.scrollHeight-h.clientHeight)||1)).toFixed(3))},{passive:true})}

/* split headline into words for the entrance animation */
function splitWords(h){if(!h)return;let k=0;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(!w.trim()){f.append(w);return}const s=document.createElement("span");s.className="w";s.style.animationDelay=(k++*70)+"ms";s.textContent=w;f.append(s)});c.replaceWith(f)}else walk(c)})};walk(h)}

/* ---------- quiz ---------- */
function Quiz(box,items,opt={}){
  let qi=0,score=0,answers=[],order=[];
  const resolve=opt.resolve||(s=>null);
  const pips=()=>`<div class="pips" aria-hidden="true">${items.map((_,i)=>{const a=answers[i];return `<i class="pip ${a?(a.ok?"ok":"no"):(i===qi?"cur":"")}"></i>`}).join("")}</div>`;
  const top=label=>`<div class="q-top"><span>${label}</span>${pips()}<span>Score ${score}</span></div>`;
  function draw(){
    const it=items[qi];order=shuffle(it.o.map((_,i)=>i));
    box.innerHTML=`${top(`Question ${qi+1} of ${items.length}`)}
    <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${items.length}" aria-valuenow="${qi}"><i style="width:${qi/items.length*100}%"></i></div>
    ${it.cat?`<p class="q-cat">${catChip(it.cat)}</p>`:""}
    <p class="q-text">${esc(it.q)}</p>
    <div class="opts">${order.map((i,p)=>`<button class="opt" data-i="${i}" style="--k:${p}"><span class="k">${"ABCD"[p]}</span><span>${esc(it.o[i])}</span><span class="res"></span></button>`).join("")}</div>
    <div class="fb"></div>`;
    box.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>choose(+b.dataset.i)));
  }
  function choose(i){
    const it=items[qi],ok=i===it.a;if(ok)score++;answers[qi]={ok,cat:it.cat};
    box.querySelectorAll(".opt").forEach(b=>{const j=+b.dataset.i;b.disabled=true;const r=b.querySelector(".res");
      if(j===it.a){b.classList.add("right");r.innerHTML=ic("check")}else if(j===i){b.classList.add("wrong");r.innerHTML=ic("x")}else b.classList.add("dim")});
    box.querySelector(".q-top").outerHTML=top(`Question ${qi+1} of ${items.length}`);
    box.querySelector(".progress i").style.width=`${(qi+1)/items.length*100}%`;
    const last=qi===items.length-1,ref=resolve(it.s);
    box.querySelector(".fb").innerHTML=`<div class="feedback ${ok?"ok":"no"}"><strong>${ic(ok?"check":"x")}${ok?"Correct.":"Not quite. The answer is "+"ABCD"[order.indexOf(it.a)]+": "+esc(it.o[it.a])+"."}</strong><p>${esc(it.e)}</p>${ref?`<a href="${ref.href}">${ic("arrow")}Review: ${esc(ref.title)}</a>`:""}</div>
    <div class="q-actions"><button class="btn" id="${box.id}-next">${last?"See my score":"Next question"}${ic("arrow")}</button></div>`;
    const n=document.getElementById(box.id+"-next");n.focus({preventScroll:true});n.onclick=()=>{qi++;last?result():draw()};
  }
  function result(){
    const N=items.length,pct=score/N,C=2*Math.PI*52;
    let title,msg;
    if(opt.ranks){const r=opt.ranks.find(r=>score>=r[0]);title=r[1];msg=r[2]}
    else [title,msg]=pct===1?["Perfect score","You've got the day covered."]:pct>=.75?["Strong result","Review the ones you missed below."]:pct>=.5?["Good start","The sessions below are worth a second look."]:["Worth another pass","Read the brief and the sessions you missed, then try again."];
    const cats={};answers.forEach(a=>{if(!a.cat)return;cats[a.cat]=cats[a.cat]||[0,0];cats[a.cat][1]++;if(a.ok)cats[a.cat][0]++});
    const missed=answers.map((a,i)=>({a,i})).filter(x=>!x.a.ok);
    box.innerHTML=`<div class="result">${top("Complete")}
    <div class="score">
      <div class="ring"><svg viewBox="0 0 120 120"><defs><linearGradient id="${box.id}-rg" x1="0" x2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--signal)"/></linearGradient></defs><circle class="bg" cx="60" cy="60" r="52"/><circle class="fg" cx="60" cy="60" r="52" stroke="url(#${box.id}-rg)" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><b>${score}/${N}</b></div>
      <div><p class="eyebrow">${esc(opt.resultLabel||"Your result")}</p><h3>${esc(title)}</h3><p>${esc(msg)}</p></div>
    </div>
    ${Object.keys(cats).length?`<div><p class="label">${ic("chart")}By category</p><div class="catbars">${Object.entries(cats).sort((a,b)=>b[1][1]-a[1][1]).map(([k,[c,t]])=>`<div class="catbar"><span class="cn">${ic(CATS[k][1])}${CATS[k][0]}</span><span class="track"><i style="width:${c/t*100}%"></i></span><span class="cv">${c}/${t}</span></div>`).join("")}</div></div>`:""}
    ${missed.length?`<div><p class="label">${ic("retry")}Review these</p><ul class="missed">${missed.map(({i})=>{const it=items[i],ref=resolve(it.s);return `<li>${esc(it.q)}${ref?`<a href="${ref.href}">${ic("arrow")}${esc(ref.title)}</a>`:""}</li>`}).join("")}</ul></div>`:""}
    <div class="q-actions" style="justify-content:flex-start"><button class="btn" id="${box.id}-restart">${ic("retry")}Restart</button></div></div>`;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{const a=box.querySelector(".fg");if(a)a.style.strokeDashoffset=C*(1-pct)}));
    document.getElementById(box.id+"-restart").onclick=()=>{qi=0;score=0;answers=[];draw();box.scrollIntoView?.({block:"start"})};
  }
  draw();
}
