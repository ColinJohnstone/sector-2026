/* Site extras: style switcher, light/dark choice, and a per-reader progress "passport".
   Everything is stored only in this browser (localStorage) and the site works without it. */
(function(){
const de=document.documentElement;
const store={get(k,d){try{const v=localStorage.getItem("sector."+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
             set(k,v){try{localStorage.setItem("sector."+k,JSON.stringify(v))}catch(e){}}};
const base=(document.querySelector('link[href*="assets/base.css"]')||{}).getAttribute?.("href")?.split("assets/")[0]||"";

/* ---------- styles ---------- */
const STYLES={
  report:{label:"Report",desc:"Printed report, each day with its own look",font:null},
  broadsheet:{label:"Broadsheet",desc:"Bold newspaper headlines and thick rules",font:"family=Libre+Franklin:wght@400..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..600&family=DM+Mono:wght@400;500"},
  terminal:{label:"Terminal",desc:"Green-on-black console for the SOC crowd",font:"family=JetBrains+Mono:ital,wght@0,400..800;1,400"},
  plain:{label:"Plain",desc:"Large, high-contrast text with no animation",font:"family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400"}
};
const THEMES={auto:"Auto",light:"Light",dark:"Dark"};
function loadFont(st){const f=STYLES[st]&&STYLES[st].font;if(!f||document.getElementById("font-"+st))return;
  const l=document.createElement("link");l.id="font-"+st;l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?"+f+"&display=swap";document.head.appendChild(l)}
function applyStyle(st){
  if(st==="report"||!STYLES[st])delete de.dataset.style;else de.dataset.style=st;
  loadFont(st);
  if(st==="plain"){de.classList.remove("motion");document.querySelectorAll("[data-rv]").forEach(e=>e.classList.add("seen"))}
}
function applyTheme(t){if(t==="light"||t==="dark")de.dataset.theme=t;else delete de.dataset.theme}
applyStyle(store.get("style","report"));applyTheme(store.get("theme","auto"));

function picker(){
  const nav=document.querySelector(".bar nav");if(!nav||document.getElementById("stylebtn"))return;
  const b=document.createElement("button");b.id="stylebtn";b.type="button";b.className="stylebtn";b.setAttribute("aria-expanded","false");b.setAttribute("aria-controls","stylepanel");b.textContent="Style";
  nav.appendChild(b);
  const p=document.createElement("div");p.id="stylepanel";p.className="stylepanel";p.hidden=true;p.setAttribute("role","dialog");p.setAttribute("aria-label","Choose a site style");
  const cur=()=>store.get("style","report"),curT=()=>store.get("theme","auto");
  const draw=()=>{p.innerHTML=`<p class="sp-h">Site style</p>
    <div class="sp-list">${Object.entries(STYLES).map(([k,v])=>`<button type="button" class="sp-opt" data-style="${k}" aria-pressed="${cur()===k}"><span class="sp-sw sw-${k}" aria-hidden="true">Aa</span><span><b>${v.label}</b><small>${v.desc}</small></span></button>`).join("")}</div>
    <p class="sp-h">Light or dark</p>
    <div class="sp-seg">${Object.entries(THEMES).map(([k,v])=>`<button type="button" data-theme-pick="${k}" aria-pressed="${curT()===k}">${v}</button>`).join("")}</div>
    <p class="sp-note">Saved in this browser only.</p>`};
  draw();document.body.appendChild(p);
  const close=()=>{p.hidden=true;b.setAttribute("aria-expanded","false")};
  b.onclick=e=>{e.stopPropagation();const open=p.hidden;p.hidden=!open;b.setAttribute("aria-expanded",open);if(open){const r=b.getBoundingClientRect();p.style.top=(r.bottom+8)+"px";p.style.right=Math.max(12,innerWidth-r.right)+"px"}};
  p.addEventListener("click",e=>{e.stopPropagation();const s=e.target.closest("[data-style]"),t=e.target.closest("[data-theme-pick]");
    if(s){store.set("style",s.dataset.style);applyStyle(s.dataset.style);Progress.badge("stylist");draw()}
    if(t){store.set("theme",t.dataset.themePick);applyTheme(t.dataset.themePick);draw()}});
  document.addEventListener("click",close);document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
}

/* ---------- progress passport ---------- */
const P={
  data(){return store.get("progress",{read:{},quiz:{},badges:{}})},
  save(d){store.set("progress",d)},
  isRead(id){return !!this.data().read[id]},
  toggleRead(id){const d=this.data();if(d.read[id])delete d.read[id];else d.read[id]=Date.now();this.save(d);return !!d.read[id]},
  quiz(key,score,n,title){const d=this.data();const prev=d.quiz[key];if(!prev||score>prev.score)d.quiz[key]={score,n,title:title||"",at:Date.now()};this.save(d)},
  badge(k){const d=this.data();if(!d.badges[k]){d.badges[k]=Date.now();this.save(d)}},
  reset(){store.set("progress",{read:{},quiz:{},badges:{}})}
};
window.Progress=P;

function syncReadButtons(){document.querySelectorAll(".readmark").forEach(b=>{const on=P.isRead(b.dataset.sid);b.setAttribute("aria-pressed",on);b.textContent=on?"✓ Read":"Mark as read";b.closest(".session")?.classList.toggle("is-read",on)})}
document.addEventListener("click",e=>{const b=e.target.closest(".readmark");if(!b)return;P.toggleRead(b.dataset.sid);syncReadButtons();renderPassport()});
document.addEventListener("play",e=>{if(e.target.closest&&e.target.closest("#recap"))P.badge("listener")},true);
document.addEventListener("click",e=>{const a=e.target.closest("a[href*='readysetcyber.ca']");if(a)P.badge("drill")});

const BADGES=[
  ["day1","Day 1 stamp","Read all Day 1 sessions"],["day2","Day 2 stamp","Read all Day 2 sessions"],["day3","Day 3 stamp","Read all Day 3 sessions"],
  ["quizall","Triple quiz","Finished all three day quizzes"],["ace","Quiz ace","Scored 90% or more on a day quiz"],
  ["challenge","Challenger","Finished the SecTor Challenge"],["listener","Listener","Played an audio recap"],
  ["drill","Drill ready","Tried a ReadySetCyber game"],["stylist","Stylist","Tried a different site style"]
];
function earned(){
  const d=P.data(),days=(window.SECTOR&&SECTOR.days)||{},e={...d.badges};
  for(const n of Object.keys(days)){const S=days[n].sessions;if(S.length&&S.every(s=>d.read[n+":"+s.id]))e["day"+n]=1}
  const q=d.quiz;if(["day1","day2","day3"].every(k=>q[k]))e.quizall=1;
  if(Object.entries(q).some(([k,v])=>k.startsWith("day")&&v.score/v.n>=.9))e.ace=1;
  if(q.challenge)e.challenge=1;
  return e;
}
function renderPassport(){
  const box=document.getElementById("passport-in");if(!box||!window.SECTOR)return;
  const d=P.data(),days=SECTOR.days,e=earned();
  const stamps=Object.keys(days).map(n=>{const D=days[n],S=D.sessions,r=S.filter(s=>d.read[n+":"+s.id]).length,q=d.quiz["day"+n],done=r===S.length;
    return `<a class="stamp d${n} ${done?"done":""} ${r?"started":""}" href="day-${n}/"><span class="st-ring"><b>Day ${n}</b><i>${done?"Complete":r+"/"+S.length+" read"}</i></span><small>${q?`Quiz best ${q.score}/${q.n}`:"Quiz not taken"}</small></a>`}).join("");
  const ch=d.quiz.challenge;
  const totalS=Object.values(days).reduce((a,D)=>a+D.sessions.length,0),readS=Object.keys(d.read).length;
  box.innerHTML=`<div class="pp-top"><div class="pp-stamps">${stamps}</div>
    <div class="pp-sum"><p class="pp-big">${readS}<span>/${totalS}</span></p><p>sessions read</p>
    <div class="pp-bar"><i style="width:${totalS?readS/totalS*100:0}%"></i></div>
    <p>${ch?`Challenge: <b>${ch.score}/${ch.n}</b> · ${ch.title}`:`<a href="challenge/">Take the challenge</a> to earn a rank`}</p></div></div>
    <ul class="badges">${BADGES.map(([k,t,h])=>`<li class="${e[k]?"got":""}" title="${h}"><span class="bd-i" aria-hidden="true">${e[k]?"★":"☆"}</span><b>${t}</b><small>${h}</small></li>`).join("")}</ul>
    <p class="pp-note">Progress is saved in this browser only. Mark sessions as read on each day page. <button type="button" class="pp-reset">Reset</button></p>`;
  box.querySelector(".pp-reset").onclick=()=>{if(confirmReset())P.reset();renderPassport()};
}
function confirmReset(){const b=document.querySelector(".pp-reset");if(b.dataset.armed){return true}b.dataset.armed=1;b.textContent="Click again to reset";setTimeout(()=>{b.textContent="Reset";delete b.dataset.armed},3000);return false}

/* ---------- topic map (home) ---------- */
function renderTopicMap(){
  const box=document.getElementById("topicmap-in");if(!box||!window.SECTOR||typeof CATS==="undefined")return;
  const days=SECTOR.days,ns=Object.keys(days);let max=1;
  const cnt={};for(const k of Object.keys(CATS)){cnt[k]={};for(const n of ns){const c=days[n].sessions.filter(s=>s.cats.includes(k));cnt[k][n]=c;max=Math.max(max,c.length)}}
  box.innerHTML=`<table class="tmap"><thead><tr><th scope="col">Topic</th>${ns.map(n=>`<th scope="col"><a href="day-${n}/">Day ${n}</a></th>`).join("")}<th scope="col">Total</th></tr></thead><tbody>${Object.entries(CATS).map(([k,[l]])=>{const tot=ns.reduce((a,n)=>a+cnt[k][n].length,0);return `<tr><th scope="row">${l}</th>${ns.map(n=>{const c=cnt[k][n];return `<td style="--v:${c.length/max}"${c.length?` title="${c.map(s=>s.short).join(", ")}"`:""}>${c.length?`<a href="day-${n}/#${c[0].id}"><b>${c.length}</b><span>${c.map(s=>s.short).join(" · ")}</span></a>`:`<span class="z">·</span>`}</td>`}).join("")}<td class="tot">${tot}</td></tr>`}).join("")}</tbody></table>`;
}

function init(){picker();syncReadButtons();renderPassport();renderTopicMap();
  new MutationObserver(()=>{if(document.querySelector(".readmark:not([data-synced])")){document.querySelectorAll(".readmark").forEach(b=>b.dataset.synced=1);syncReadButtons()}}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
