import{g as U,c as N,a as A,d as P,b as H,i as G,B as O,A as q,C as D,D as $,E as z,F as V,G as _}from"./UserMenu-DNxdjeeO.js";import{C as J}from"./js.cookie-Co-gs8up.js";import"./_commonjsHelpers-DaWZu8wl.js";const K="af-south-1_bIOvLpsST",Q="3h1hjhsq24cm86n83oklrkf6be",j=new J({UserPoolId:K,ClientId:Q}),W=()=>`
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
`,X=async()=>new Promise((e,s)=>{const c=j?.getCurrentUser();if(!c){e(null);return}c.getSession((o,m)=>{if(o){s(o);return}e(m)})}),Y=()=>{const e=j?.getCurrentUser()||null;e&&e.signOut()},B=e=>{const s=new Date(e);return Number.isNaN(s.getTime())?e:s.toLocaleString()},i=(e,s,c)=>{if(!s){e.textContent="",e.hidden=!0,e.setAttribute("data-tone","");return}e.hidden=!1,e.textContent=s,e.setAttribute("data-tone",c)},ie=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const s=U();if(s!=="tutor"){window.location.href="/whiteboard";return}e.innerHTML=W(),e.appendChild(N());const c=e.querySelector("#mailboxAppBarContainer"),o=e.querySelector("#mailboxFeedback"),m=e.querySelector("#mailboxList"),S=e.querySelector("#mailboxRefreshBtn"),p=e.querySelector("#mailboxMessageCard"),v=e.querySelector("#mailboxMessageSubject"),w=e.querySelector("#mailboxMessageMeta"),M=e.querySelector("#mailboxMessageText"),C=e.querySelector("#mailboxMarkUnreadBtn"),f=e.querySelector("#mailboxReplyText"),E=e.querySelector("#mailboxReplyBtn"),h=e.querySelector("#mailboxSendTo"),g=e.querySelector("#mailboxSendSubject"),y=e.querySelector("#mailboxSendText"),k=e.querySelector("#mailboxSendBtn");if(!c||!o||!m||!S||!p||!v||!w||!M||!C||!f||!E||!h||!g||!y||!k)throw new Error("Mailbox page is missing required elements");const L=A(),I=P().includes("admin"),R=H({currentApp:"inbox",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:L,userRole:s,isAdmin:I});c.appendChild(R),await G({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let r="",u=[];const x=()=>{if(m.innerHTML="",u.length===0){m.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}u.forEach(t=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",t.read||a.classList.add("is-unread"),t.emailId===r&&a.classList.add("is-active");const n=document.createElement("div");n.className="mailbox-item-from",n.textContent=t.from||"(unknown sender)";const l=document.createElement("div");l.className="mailbox-item-subject",l.textContent=t.subject||"(no subject)";const b=document.createElement("div");b.className="mailbox-item-time",b.textContent=B(t.timestamp),a.appendChild(n),a.appendChild(l),a.appendChild(b),a.addEventListener("click",async()=>{r=t.emailId,x();try{const d=await $(t.emailId);v.textContent=d.subject||"(no subject)",w.textContent=`From ${d.from} | ${B(d.timestamp)}`,M.textContent=d.text||"",p.hidden=!1,t.read||(await z(t.emailId),t.read=!0,x())}catch(d){const F=d instanceof Error?d.message:"Failed to load email";i(o,F,"error")}}),m.appendChild(a)})},T=async()=>{i(o,"","info");try{u=(await D({limit:50})).emails,u.find(a=>a.emailId===r)||(r="",p.hidden=!0),x()}catch(t){const a=t instanceof Error?t.message:"Failed to load mailbox";i(o,a,"error")}};if(S.addEventListener("click",()=>{T()}),C.addEventListener("click",async()=>{if(r)try{await V(r);const t=u.find(a=>a.emailId===r);t&&(t.read=!1),x(),i(o,"Marked unread.","success")}catch(t){const a=t instanceof Error?t.message:"Failed to mark unread";i(o,a,"error")}}),E.addEventListener("click",async()=>{if(!r){i(o,"Select an email first.","info");return}const t=f.value.trim();if(!t){i(o,"Reply text is required.","info");return}try{await _(r,{text:t}),f.value="",i(o,"Reply sent.","success")}catch(a){const n=a instanceof q||a instanceof Error?a.message:"Failed to send reply";i(o,n,"error")}}),k.addEventListener("click",async()=>{const t=h.value.trim(),a=g.value.trim(),n=y.value.trim();if(!t||!a||!n){i(o,"To, subject and message are required.","info");return}try{await O({to:t,subject:a,text:n}),h.value="",g.value="",y.value="",i(o,"Email sent.","success")}catch(l){const b=l instanceof q||l instanceof Error?l.message:"Failed to send email";i(o,b,"error")}}),!await X()){Y(),window.location.href="/auth";return}T()};export{ie as mountMailboxPage};
