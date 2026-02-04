(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const v=document.querySelector("#app");if(!v)throw new Error("Missing #app root");v.innerHTML=`
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
`;const g=document.querySelector("#statusDot"),y=document.querySelector("#statusText"),w=document.querySelector("#endpointText"),b=document.querySelector("#connectBtn"),r=document.querySelector("#board");if(!g||!y||!w||!b||!r)throw new Error("Missing UI elements");w.textContent="Set VITE_WS_ENDPOINT in .env";const i=r.getContext("2d");if(!i)throw new Error("Canvas rendering context unavailable");const L=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`client_${Math.random().toString(16).slice(2)}`;let x=0,P=0,d=!1,a=null;const D=t=>{let e=0;for(let s=0;s<t.length;s+=1)e=(e*31+t.charCodeAt(s))%360;return`hsl(${e} 60% 40%)`},u=D(L),p=3,I=t=>{g.dataset.status=t,y.textContent="Error"},S=()=>{const t=r.getBoundingClientRect(),e=window.devicePixelRatio||1;x=t.width,P=t.height,r.width=Math.max(1,Math.floor(t.width*e)),r.height=Math.max(1,Math.floor(t.height*e)),i.setTransform(e,0,0,e,0,0),i.lineCap="round",i.lineJoin="round"},m=t=>({x:t.x*x,y:t.y*P}),h=t=>{const e=r.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width,y:(t.clientY-e.top)/e.height,p:t.pressure||.5,t:performance.now()}},f=(t,e,s,c)=>{const n=m(t),o=m(e);i.strokeStyle=s,i.lineWidth=c,i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(o.x,o.y),i.stroke()},T=t=>{if(t.button!==0)return;d=!0,crypto.randomUUID?crypto.randomUUID():`${Math.random().toString(16).slice(2)}`;const e=h(t);a=e,f(e,e,u,p),r.setPointerCapture(t.pointerId)},M=t=>{if(!d||!a)return;const e=h(t);f(a,e,u,p),a=e},C=t=>{if(!d||!a)return;const e=h(t);f(a,e,u,p),d=!1,a=null,r.releasePointerCapture(t.pointerId)},E=()=>{{I("error");return}};r.addEventListener("pointerdown",T);r.addEventListener("pointermove",M);r.addEventListener("pointerup",C);r.addEventListener("pointercancel",C);r.style.touchAction="none";b.addEventListener("click",E);window.addEventListener("resize",S);S();E();
