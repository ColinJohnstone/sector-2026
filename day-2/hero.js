/* hero memory cells: a still pattern on the right edge, a few "flipped" cells in teal */
(()=>{
  const cv=$("#net"),cx=cv.getContext("2d");let seed=7;
  const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
  function draw(){
    const cs=getComputedStyle(document.documentElement),line=cs.getPropertyValue("--net").trim(),sig=cs.getPropertyValue("--signal").trim();
    const dpr=Math.min(devicePixelRatio||1,2),W=cv.clientWidth,H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,W,H);
    if(W<760)return;
    seed=7;const cell=22,gap=5,x0=Math.max(W*.62,(W+736)/2+24);
    for(let y=cell;y<H-cell;y+=cell)for(let x=x0;x<W-8;x+=cell){
      const t=Math.min(1,(x-x0)/Math.max(1,W-x0)*1.4)*Math.min(1,(1-y/H)*1.5+.15),flip=rnd()<.035;
      cx.globalAlpha=flip?Math.min(1,.35+t*.5):t*.9;
      if(flip){cx.fillStyle=sig;cx.fillRect(x,y,cell-gap,cell-gap)}
      else{cx.strokeStyle=line;cx.lineWidth=1;cx.strokeRect(x+.5,y+.5,cell-gap-1,cell-gap-1)}
    }
    cx.globalAlpha=1;
  }
  draw();addEventListener("resize",draw);
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",draw);
  new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});
  document.fonts?.ready.then(draw);
})();
