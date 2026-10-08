/* hero network canvas */
(()=>{
  const cv=$("#net"),cx=cv.getContext("2d");let W,H,dpr,nodes=[],edges=[],packets=[],col,colP;
  const readCol=()=>{const cs=getComputedStyle(document.documentElement);col=cs.getPropertyValue("--net").trim();colP=cs.getPropertyValue("--signal").trim();};
  function build(){
    dpr=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
    const n=Math.round(Math.min(46,Math.max(18,W*H/26000)));
    nodes=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,r:Math.random()*1.6+1}));
    edges=[];nodes.forEach((a,i)=>{nodes.map((b,j)=>[j,Math.hypot(a.x-b.x,a.y-b.y)]).filter(([j])=>j!==i).sort((p,q)=>p[1]-q[1]).slice(0,2).forEach(([j])=>{if(!edges.some(e=>(e[0]===j&&e[1]===i)))edges.push([i,j])})});
    packets=[];
  }
  function draw(dt){
    cx.clearRect(0,0,W,H);cx.strokeStyle=col;cx.fillStyle=col;cx.lineWidth=1;
    edges.forEach(([i,j])=>{const a=nodes[i],b=nodes[j];cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()});
    nodes.forEach(n=>{cx.beginPath();cx.arc(n.x,n.y,n.r,0,7);cx.fill()});
    if(!dt)return;
    nodes.forEach(n=>{n.x+=n.vx*dt;n.y+=n.vy*dt;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1});
    if(packets.length<9&&Math.random()<.06){const e=edges[Math.floor(Math.random()*edges.length)];if(e)packets.push({e,t:0,s:.0012+Math.random()*.0016})}
    cx.fillStyle=colP;cx.shadowColor=colP;cx.shadowBlur=10;
    packets=packets.filter(p=>{p.t+=p.s*dt;if(p.t>=1){const nxt=edges.filter(x=>x[0]===p.e[1]);if(nxt.length&&Math.random()<.8){p.e=nxt[Math.floor(Math.random()*nxt.length)];p.t=0}else return false}
      const a=nodes[p.e[0]],b=nodes[p.e[1]];cx.beginPath();cx.arc(a.x+(b.x-a.x)*p.t,a.y+(b.y-a.y)*p.t,2.2,0,7);cx.fill();return true});
    cx.shadowBlur=0;
  }
  readCol();build();
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>{readCol();draw(0)});
  new MutationObserver(()=>{readCol();draw(0)}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});
  addEventListener("resize",()=>{build();draw(0)});
  if(reduceMotion){draw(0);return}
  let last=performance.now(),vis=true;
  new IntersectionObserver(([e])=>{vis=e.isIntersecting}).observe(cv);
  const loop=t=>{const dt=Math.min(50,t-last);last=t;if(vis&&!document.hidden)draw(dt);requestAnimationFrame(loop)};
  draw(0);requestAnimationFrame(loop);
})();
