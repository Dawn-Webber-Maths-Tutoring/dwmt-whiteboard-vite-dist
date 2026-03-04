import{g as R,c as F,a as U,d as A,b as N,z as P,A as E,B as $,C as H,D,E as G,F as O}from"./apiClient-u9KkifKM.js";import{C as z}from"./js.cookie-Co-gs8up.js";import"./_commonjsHelpers-DaWZu8wl.js";const V="af-south-1_bIOvLpsST",_="3h1hjhsq24cm86n83oklrkf6be",q=new z({UserPoolId:V,ClientId:_}),J=()=>`
  <div class="app mailbox-page">
    <div id="mailboxAppBarContainer"></div>
    <main class="mailbox-layout">
      <section class="mailbox-sidebar">
        <header class="mailbox-sidebar-header">
          <h2>Inbox</h2>
          <button id="mailboxRefreshBtn" type="button">Refresh</button>
        </header>
        <div id="mailboxFeedback" class="mailbox-feedback" hidden></div>
        <div id="mailboxList" class="mailbox-list" role="listbox" aria-label="Inbox emails"></div>
      </section>

      <section class="mailbox-content">
        <article id="mailboxMessageCard" class="mailbox-message-card" hidden>
          <header class="mailbox-message-header">
            <h3 id="mailboxMessageSubject"></h3>
            <div id="mailboxMessageMeta" class="mailbox-message-meta"></div>
          </header>
          <pre id="mailboxMessageText" class="mailbox-message-text"></pre>
          <div class="mailbox-message-actions">
            <button id="mailboxMarkUnreadBtn" type="button">Mark unread</button>
          </div>
        </article>

        <article class="mailbox-compose-card">
          <h3>Reply</h3>
          <textarea id="mailboxReplyText" rows="6" placeholder="Type your reply"></textarea>
          <div class="mailbox-inline-actions">
            <button id="mailboxReplyBtn" type="button">Send reply</button>
          </div>
        </article>

        <article class="mailbox-compose-card">
          <h3>New email</h3>
          <label>
            To
            <input id="mailboxSendTo" type="email" />
          </label>
          <label>
            Subject
            <input id="mailboxSendSubject" type="text" />
          </label>
          <label>
            Message
            <textarea id="mailboxSendText" rows="5"></textarea>
          </label>
          <div class="mailbox-inline-actions">
            <button id="mailboxSendBtn" type="button">Send email</button>
          </div>
        </article>
      </section>
    </main>
  </div>
`,K=async()=>new Promise((e,r)=>{const l=q?.getCurrentUser();if(!l){e(null);return}l.getSession((i,c)=>{if(i){r(i);return}e(c)})}),Q=()=>{const e=q?.getCurrentUser()||null;e&&e.signOut()},T=e=>{const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString()},s=(e,r,l)=>{if(!r){e.textContent="",e.hidden=!0,e.setAttribute("data-tone","");return}e.hidden=!1,e.textContent=r,e.setAttribute("data-tone",l)},te=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const r=R();if(r!=="tutor"){window.location.href="/whiteboard";return}e.innerHTML=J(),e.appendChild(F());const l=e.querySelector("#mailboxAppBarContainer"),i=e.querySelector("#mailboxFeedback"),c=e.querySelector("#mailboxList"),g=e.querySelector("#mailboxRefreshBtn"),u=e.querySelector("#mailboxMessageCard"),y=e.querySelector("#mailboxMessageSubject"),v=e.querySelector("#mailboxMessageMeta"),S=e.querySelector("#mailboxMessageText"),w=e.querySelector("#mailboxMarkUnreadBtn"),x=e.querySelector("#mailboxReplyText"),M=e.querySelector("#mailboxReplyBtn"),p=e.querySelector("#mailboxSendTo"),f=e.querySelector("#mailboxSendSubject"),h=e.querySelector("#mailboxSendText"),k=e.querySelector("#mailboxSendBtn");if(!l||!i||!c||!g||!u||!y||!v||!S||!w||!x||!M||!p||!f||!h||!k)throw new Error("Mailbox page is missing required elements");const B=U(),L=A().includes("admin"),j=N({currentApp:"inbox",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:B,userRole:r,isAdmin:L});l.appendChild(j);let n="",m=[];const b=()=>{if(c.innerHTML="",m.length===0){c.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}m.forEach(t=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",t.read||a.classList.add("is-unread"),t.emailId===n&&a.classList.add("is-active"),a.innerHTML=`
        <div class="mailbox-item-from">${t.from||"(unknown sender)"}</div>
        <div class="mailbox-item-subject">${t.subject||"(no subject)"}</div>
        <div class="mailbox-item-time">${T(t.timestamp)}</div>
      `,a.addEventListener("click",async()=>{n=t.emailId,b();try{const o=await H(t.emailId);y.textContent=o.subject||"(no subject)",v.textContent=`From ${o.from} | ${T(o.timestamp)}`,S.textContent=o.text||"",u.hidden=!1,t.read||(await D(t.emailId),t.read=!0,b())}catch(o){const d=o instanceof Error?o.message:"Failed to load email";s(i,d,"error")}}),c.appendChild(a)})},C=async()=>{s(i,"","info");try{m=(await $({limit:50})).emails,m.find(a=>a.emailId===n)||(n="",u.hidden=!0),b()}catch(t){const a=t instanceof Error?t.message:"Failed to load mailbox";s(i,a,"error")}};if(g.addEventListener("click",()=>{C()}),w.addEventListener("click",async()=>{if(n)try{await G(n);const t=m.find(a=>a.emailId===n);t&&(t.read=!1),b(),s(i,"Marked unread.","success")}catch(t){const a=t instanceof Error?t.message:"Failed to mark unread";s(i,a,"error")}}),M.addEventListener("click",async()=>{if(!n){s(i,"Select an email first.","info");return}const t=x.value.trim();if(!t){s(i,"Reply text is required.","info");return}try{await O(n,{text:t}),x.value="",s(i,"Reply sent.","success")}catch(a){const o=a instanceof E||a instanceof Error?a.message:"Failed to send reply";s(i,o,"error")}}),k.addEventListener("click",async()=>{const t=p.value.trim(),a=f.value.trim(),o=h.value.trim();if(!t||!a||!o){s(i,"To, subject and message are required.","info");return}try{await P({to:t,subject:a,text:o}),p.value="",f.value="",h.value="",s(i,"Email sent.","success")}catch(d){const I=d instanceof E||d instanceof Error?d.message:"Failed to send email";s(i,I,"error")}}),!await K()){Q(),window.location.href="/auth";return}C()};export{te as mountMailboxPage};
