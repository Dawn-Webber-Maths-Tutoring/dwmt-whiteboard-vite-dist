(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();const P=document.querySelector("#app");if(!P)throw new Error("Missing #app root");P.innerHTML=`
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
      <div class="stroke-color">
        <label for="strokeColor">Stroke Colour</label>
        <input id="strokeColor" type="color" aria-label="Stroke color" />
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
`;const L="wss://ptqhj1tocd.execute-api.af-south-1.amazonaws.com/prod",T=document.querySelector("#statusDot"),I=document.querySelector("#statusText"),S=document.querySelector("#strokeColor"),M=document.querySelector("#endpointText"),D=document.querySelector("#connectBtn"),a=document.querySelector("#board");if(!T||!I||!S||!M||!D||!a)throw new Error("Missing UI elements");M.textContent=L;const s=a.getContext("2d");if(!s)throw new Error("Canvas rendering context unavailable");const C=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`client_${Math.random().toString(16).slice(2)}`;let d=null,q=0,O=0,b=!1,U="",f=null,g=[];const z=(t,e,c)=>{const i=e/100,n=c/100,o=(1-Math.abs(2*n-1))*i,r=t/60,l=o*(1-Math.abs(r%2-1));let u=0,p=0,m=0;r>=0&&r<1?(u=o,p=l):r>=1&&r<2?(u=l,p=o):r>=2&&r<3?(p=o,m=l):r>=3&&r<4?(p=l,m=o):r>=4&&r<5?(u=l,m=o):r>=5&&r<6&&(u=o,m=l);const B=n-o/2,x=$=>Math.round(($+B)*255).toString(16).padStart(2,"0");return`#${x(u)}${x(p)}${x(m)}`},F=t=>{let e=0;for(let c=0;c<t.length;c+=1)e=(e*31+t.charCodeAt(c))%360;return z(e,60,40)};let y=F(C);const w=3;S.value=y;S.addEventListener("input",()=>{y=S.value});const v=t=>{T.dataset.status=t,I.textContent=t==="open"?"Connected":t==="connecting"?"Connecting":t==="error"?"Error":"Idle"},W=()=>{const t=a.getBoundingClientRect(),e=window.devicePixelRatio||1;q=t.width,O=t.height,a.width=Math.max(1,Math.floor(t.width*e)),a.height=Math.max(1,Math.floor(t.height*e)),s.setTransform(e,0,0,e,0,0),s.lineCap="round",s.lineJoin="round"},h=t=>({x:t.x*q,y:t.y*O}),E=t=>{const e=a.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width,y:(t.clientY-e.top)/e.height,p:t.pressure||.5,t:performance.now()}},k=(t,e,c,i)=>{const n=h(t),o=h(e);s.strokeStyle=c,s.lineWidth=i,s.beginPath(),s.moveTo(n.x,n.y),s.lineTo(o.x,o.y),s.stroke()},H=(t,e,c)=>{if(t.length===0)return;s.strokeStyle=e,s.lineWidth=c;const i=h(t[0]);if(s.beginPath(),s.moveTo(i.x,i.y),t.length===1){s.lineTo(i.x,i.y),s.stroke();return}if(t.length===2){const o=h(t[1]);s.lineTo(o.x,o.y),s.stroke();return}for(let o=1;o<t.length-1;o+=1){const r=h(t[o]),l=h(t[o+1]),u=(r.x+l.x)/2,p=(r.y+l.y)/2;s.quadraticCurveTo(r.x,r.y,u,p)}const n=h(t[t.length-1]);s.lineTo(n.x,n.y),s.stroke()},J=t=>{t.clientId!==C&&H(t.points,t.color,t.width)},R=t=>{if(!d||d.readyState!==WebSocket.OPEN)return;const e={action:"stroke",clientId:C,strokeId:U,points:t,color:y,width:w};d.send(JSON.stringify(e))},X=t=>{if(t.button!==0)return;b=!0,U=crypto.randomUUID?crypto.randomUUID():`stroke_${Math.random().toString(16).slice(2)}`;const e=E(t);f=e,g=[e],k(e,e,y,w),a.setPointerCapture(t.pointerId)},Y=t=>{if(!b||!f)return;const e=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():[t];for(const c of e){const i=E(c);k(f,i,y,w),f=i,g.push(i)}},N=t=>{if(!b||!f)return;const e=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():[],c=e.length>0?e[e.length-1]:t,i=E(c);k(f,i,y,w),g.push(i),R(g),b=!1,f=null,g=[],a.releasePointerCapture(t.pointerId)},A=()=>{d&&d.readyState===WebSocket.OPEN||(v("connecting"),d=new WebSocket(L),d.addEventListener("open",()=>v("open")),d.addEventListener("close",()=>v("idle")),d.addEventListener("error",()=>v("error")),d.addEventListener("message",t=>{try{const e=JSON.parse(t.data);e&&e.action==="stroke"&&Array.isArray(e.points)&&J(e)}catch{}}))};a.addEventListener("pointerdown",X);a.addEventListener("pointermove",Y);a.addEventListener("pointerup",N);a.addEventListener("pointercancel",N);a.style.touchAction="none";D.addEventListener("click",A);window.addEventListener("resize",W);W();A();
