(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const S=document.querySelector("#app");if(!S)throw new Error("Missing #app root");S.innerHTML=`
  <div class="app">
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark" aria-hidden="true"></span>
        <div>
          <h1>DWMT Whiteboard</h1>
          <p>Live strokes over WebSocket</p>
        </div>
      </div>
      <div class="status" aria-live="polite">
        <span class="status-dot" id="statusDot" data-status="idle"></span>
        <span id="statusText">Idle</span>
      </div>
      <div class="endpoint">
        <span>Endpoint</span>
        <code id="endpointText">Not configured</code>
        <button id="connectBtn" type="button">Connect</button>
      </div>
    </header>
    <main class="board">
      <canvas id="board" role="img" aria-label="Drawing board"></canvas>
      <div class="board-hint">Draw with mouse, touch, or Apple Pencil</div>
    </main>
  </div>
`;const x="wss://ptqhj1tocd.execute-api.af-south-1.amazonaws.com/prod",P=document.querySelector("#statusDot"),E=document.querySelector("#statusText"),L=document.querySelector("#endpointText"),C=document.querySelector("#connectBtn"),i=document.querySelector("#board");if(!P||!E||!L||!C||!i)throw new Error("Missing UI elements");L.textContent=x;const c=i.getContext("2d");if(!c)throw new Error("Canvas rendering context unavailable");const w=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`client_${Math.random().toString(16).slice(2)}`;let s=null,I=0,k=0,h=!1,M="",a=null;const p=new Map,U=t=>{let e=0;for(let o=0;o<t.length;o+=1)e=(e*31+t.charCodeAt(o))%360;return`hsl(${e} 60% 40%)`},f=U(w),y=3,u=t=>{P.dataset.status=t,E.textContent=t==="open"?"Connected":t==="connecting"?"Connecting":t==="error"?"Error":"Idle"},D=()=>{const t=i.getBoundingClientRect(),e=window.devicePixelRatio||1;I=t.width,k=t.height,i.width=Math.max(1,Math.floor(t.width*e)),i.height=Math.max(1,Math.floor(t.height*e)),c.setTransform(e,0,0,e,0,0),c.lineCap="round",c.lineJoin="round"},b=t=>({x:t.x*I,y:t.y*k}),m=t=>{const e=i.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width,y:(t.clientY-e.top)/e.height,p:t.pressure||.5,t:performance.now()}},d=(t,e,o,l)=>{const n=b(t),r=b(e);c.strokeStyle=o,c.lineWidth=l,c.beginPath(),c.moveTo(n.x,n.y),c.lineTo(r.x,r.y),c.stroke()},N=t=>{if(t.clientId===w)return;const e=t.strokeId,o=p.get(e);if(t.phase==="begin"||!o){p.set(e,{lastPoint:t.point,color:t.color,width:t.width}),d(t.point,t.point,t.color,t.width);return}d(o.lastPoint,t.point,o.color,o.width),t.phase==="end"?p.delete(e):p.set(e,{...o,lastPoint:t.point})},g=(t,e)=>{if(!s||s.readyState!==WebSocket.OPEN)return;const o={action:"stroke",clientId:w,strokeId:M,phase:t,point:e,color:f,width:y};s.send(JSON.stringify(o))},W=t=>{if(t.button!==0)return;h=!0,M=crypto.randomUUID?crypto.randomUUID():`stroke_${Math.random().toString(16).slice(2)}`;const e=m(t);a=e,d(e,e,f,y),g("begin",e),i.setPointerCapture(t.pointerId)},q=t=>{if(!h||!a)return;const e=m(t);d(a,e,f,y),a=e,g("move",e)},T=t=>{if(!h||!a)return;const e=m(t);d(a,e,f,y),g("end",e),h=!1,a=null,i.releasePointerCapture(t.pointerId)},O=()=>{s&&s.readyState===WebSocket.OPEN||(u("connecting"),s=new WebSocket(x),s.addEventListener("open",()=>u("open")),s.addEventListener("close",()=>u("idle")),s.addEventListener("error",()=>u("error")),s.addEventListener("message",t=>{try{const e=JSON.parse(t.data);e&&e.action==="stroke"&&e.point&&N(e)}catch{}}))};i.addEventListener("pointerdown",W);i.addEventListener("pointermove",q);i.addEventListener("pointerup",T);i.addEventListener("pointercancel",T);i.style.touchAction="none";C.addEventListener("click",O);window.addEventListener("resize",D);D();O();
