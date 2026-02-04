(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const S=document.querySelector("#app");if(!S)throw new Error("Missing #app root");S.innerHTML=`
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
      <div class="pen-status" aria-live="polite">
        <span class="pen-dot" id="penDot" data-pen="up"></span>
        <span id="penText">Pencil up</span>
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
`;const E="wss://ptqhj1tocd.execute-api.af-south-1.amazonaws.com/prod",b=document.querySelector("#statusDot"),P=document.querySelector("#statusText"),C=document.querySelector("#penDot"),T=document.querySelector("#penText"),k=document.querySelector("#endpointText"),L=document.querySelector("#connectBtn"),c=document.querySelector("#board");if(!b||!P||!C||!T||!k||!L||!c)throw new Error("Missing UI elements");k.textContent=E;const r=c.getContext("2d");if(!r)throw new Error("Canvas rendering context unavailable");const g=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`client_${Math.random().toString(16).slice(2)}`;let a=null,D=0,I=0,f=!1,M="",u=null,p=[];const B=t=>{let e=0;for(let i=0;i<t.length;i+=1)e=(e*31+t.charCodeAt(i))%360;return`hsl(${e} 60% 40%)`},y=B(g),m=3,h=t=>{b.dataset.status=t,P.textContent=t==="open"?"Connected":t==="connecting"?"Connecting":t==="error"?"Error":"Idle"},q=t=>{C.dataset.pen=t,T.textContent=t==="down"?"Pencil down":"Pencil up"},O=()=>{const t=c.getBoundingClientRect(),e=window.devicePixelRatio||1;D=t.width,I=t.height,c.width=Math.max(1,Math.floor(t.width*e)),c.height=Math.max(1,Math.floor(t.height*e)),r.setTransform(e,0,0,e,0,0),r.lineCap="round",r.lineJoin="round"},l=t=>({x:t.x*D,y:t.y*I}),v=t=>{const e=c.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width,y:(t.clientY-e.top)/e.height,p:t.pressure||.5,t:performance.now()}},w=(t,e,i,s)=>{const o=l(t),n=l(e);r.strokeStyle=i,r.lineWidth=s,r.beginPath(),r.moveTo(o.x,o.y),r.lineTo(n.x,n.y),r.stroke()},z=(t,e,i)=>{if(t.length===0)return;r.strokeStyle=e,r.lineWidth=i;const s=l(t[0]);if(r.beginPath(),r.moveTo(s.x,s.y),t.length===1){r.lineTo(s.x,s.y),r.stroke();return}if(t.length===2){const n=l(t[1]);r.lineTo(n.x,n.y),r.stroke();return}for(let n=1;n<t.length-1;n+=1){const d=l(t[n]),x=l(t[n+1]),N=(d.x+x.x)/2,A=(d.y+x.y)/2;r.quadraticCurveTo(d.x,d.y,N,A)}const o=l(t[t.length-1]);r.lineTo(o.x,o.y),r.stroke()},J=t=>{t.clientId!==g&&z(t.points,t.color,t.width)},R=t=>{if(!a||a.readyState!==WebSocket.OPEN)return;const e={action:"stroke",clientId:g,strokeId:M,points:t,color:y,width:m};a.send(JSON.stringify(e))},$=t=>{if(t.button!==0)return;f=!0,q("down"),M=crypto.randomUUID?crypto.randomUUID():`stroke_${Math.random().toString(16).slice(2)}`;const e=v(t);u=e,p=[e],w(e,e,y,m),c.setPointerCapture(t.pointerId)},F=t=>{if(!f||!u)return;const e=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():[t];for(const i of e){const s=v(i);w(u,s,y,m),u=s,p.push(s)}},U=t=>{if(!f||!u)return;const e=typeof t.getCoalescedEvents=="function"?t.getCoalescedEvents():[],i=e.length>0?e[e.length-1]:t,s=v(i);w(u,s,y,m),p.push(s),R(p),f=!1,u=null,p=[],q("up"),c.releasePointerCapture(t.pointerId)},W=()=>{a&&a.readyState===WebSocket.OPEN||(h("connecting"),a=new WebSocket(E),a.addEventListener("open",()=>h("open")),a.addEventListener("close",()=>h("idle")),a.addEventListener("error",()=>h("error")),a.addEventListener("message",t=>{try{const e=JSON.parse(t.data);e&&e.action==="stroke"&&Array.isArray(e.points)&&J(e)}catch{}}))};c.addEventListener("pointerdown",$);c.addEventListener("pointermove",F);c.addEventListener("pointerup",U);c.addEventListener("pointercancel",U);c.style.touchAction="none";L.addEventListener("click",W);window.addEventListener("resize",O);O();W();
