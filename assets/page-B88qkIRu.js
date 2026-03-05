import{n as W,o as _,b as J,m as K,i as X,h as Y,j as Z,k as ee,L as te,A as F,M as ae,C as oe,N as se,O as ie,P as ne,Q as re,R as le,S as ce}from"./UserMenu-BOYj3BjI.js";const de="af-south-1_bIOvLpsST",ue="3h1hjhsq24cm86n83oklrkf6be",z=new oe({UserPoolId:de,ClientId:ue}),me=()=>`
  <div class="app mailbox-page">
    <div id="mailboxAppBarContainer"></div>
    <main class="mailbox-layout">
      <section class="mailbox-sidebar">
        <header class="mailbox-sidebar-header">
          <h2>Inbox</h2>
          <button id="mailboxRefreshBtn" class="mailbox-btn mailbox-btn-secondary" type="button">Refresh</button>
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
          <div id="mailboxBugAdmin" class="mailbox-bug-admin" hidden>
            <div class="mailbox-bug-admin-row">
              <strong>Bug status</strong>
              <select id="mailboxBugStatusSelect">
                <option value="open">Open</option>
                <option value="resolved">Resolved</option>
                <option value="duplicate">Duplicate</option>
                <option value="wont-fix">Won't fix</option>
              </select>
            </div>
            <label>
              Admin note
              <textarea id="mailboxBugNote" rows="2" placeholder="Optional comment"></textarea>
            </label>
            <div class="mailbox-inline-actions">
              <button id="mailboxBugSaveBtn" class="mailbox-btn" type="button">Update bug</button>
            </div>
          </div>
          <div class="mailbox-message-actions">
            <button id="mailboxMarkUnreadBtn" class="mailbox-btn mailbox-btn-secondary" type="button">Mark unread</button>
          </div>
        </article>

        <article class="mailbox-compose-card">
          <h3>Reply</h3>
          <textarea id="mailboxReplyText" rows="6" placeholder="Type your reply"></textarea>
          <div class="mailbox-inline-actions">
            <button id="mailboxReplyBtn" class="mailbox-btn" type="button">Send reply</button>
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
            <button id="mailboxSendBtn" class="mailbox-btn" type="button">Send email</button>
          </div>
        </article>
      </section>
    </main>
  </div>
`,be=async()=>new Promise((e,i)=>{const d=z?.getCurrentUser();if(!d){e(null);return}d.getSession((u,h)=>{if(u){i(u);return}e(h)})}),xe=()=>{const e=z?.getCurrentUser()||null;e&&e.signOut()},$=e=>{const i=new Date(e);return Number.isNaN(i.getTime())?e:i.toLocaleString()},s=(e,i,d)=>{if(!i){e.textContent="",e.hidden=!0,e.setAttribute("data-tone","");return}e.hidden=!1,e.textContent=i,e.setAttribute("data-tone",d)},pe=e=>{const i=e.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return i?i[1]:null},he=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const i=W(),d=_().map(t=>t.trim().toLowerCase()),u=d.includes("mailbox");if(!u){window.location.href="/whiteboard";return}e.innerHTML=me(),e.appendChild(J()),K();const h=e.querySelector("#mailboxAppBarContainer"),o=e.querySelector("#mailboxFeedback"),v=e.querySelector("#mailboxList"),A=e.querySelector("#mailboxRefreshBtn"),w=e.querySelector("#mailboxMessageCard"),C=e.querySelector("#mailboxMessageSubject"),B=e.querySelector("#mailboxMessageMeta"),M=e.querySelector("#mailboxMessageText"),U=e.querySelector("#mailboxMarkUnreadBtn"),b=e.querySelector("#mailboxBugAdmin"),k=e.querySelector("#mailboxBugStatusSelect"),E=e.querySelector("#mailboxBugNote"),y=e.querySelector("#mailboxBugSaveBtn"),q=e.querySelector("#mailboxReplyText"),N=e.querySelector("#mailboxReplyBtn"),T=e.querySelector("#mailboxSendTo"),I=e.querySelector("#mailboxSendSubject"),L=e.querySelector("#mailboxSendText"),P=e.querySelector("#mailboxSendBtn");if(!h||!o||!v||!A||!w||!C||!B||!M||!U||!b||!k||!E||!y||!q||!N||!T||!I||!L||!P)throw new Error("Mailbox page is missing required elements");const Q=X(),j=d.includes("admin");let O=0;if(u)try{O=await Y()}catch(t){console.warn("Failed to load inbox unread count",t)}const V=Z({currentApp:"inbox",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:Q,userRole:i,isAdmin:j,hasMailboxAccess:u,unreadInboxCount:O});h.appendChild(V),await ee({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let n="",m="",x=0,p=[];const H=()=>{C.textContent="",B.textContent="",M.textContent="",w.hidden=!0,b.hidden=!0,m=""},S=()=>{if(v.innerHTML="",p.length===0){v.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}p.forEach(t=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",t.read||a.classList.add("is-unread"),t.emailId===n&&a.classList.add("is-active");const r=document.createElement("div");r.className="mailbox-item-from",r.textContent=t.from||"(unknown sender)";const l=document.createElement("div");l.className="mailbox-item-subject",l.textContent=t.subject||"(no subject)";const g=document.createElement("div");g.className="mailbox-item-time",g.textContent=$(t.timestamp),a.appendChild(r),a.appendChild(l),a.appendChild(g),a.addEventListener("click",async()=>{n=t.emailId,x+=1;const G=x;S();try{const c=await se(t.emailId);if(G!==x||n!==t.emailId)return;if(C.textContent=c.subject||"(no subject)",B.textContent=`From ${c.from} | ${$(c.timestamp)}`,M.textContent=c.text||"",w.hidden=!1,j){const f=pe(c.subject||"");if(f)try{const R=await ie(f);m=f,k.value=R.bug.status,E.value=typeof R.bug.statusComment=="string"?R.bug.statusComment:"",b.hidden=!1}catch{m="",b.hidden=!0}else m="",b.hidden=!0}t.read||(await ne(t.emailId),t.read=!0,S())}catch(c){if(G!==x||n!==t.emailId)return;H();const f=c instanceof Error?c.message:"Failed to load email";s(o,f,"error")}}),v.appendChild(a)})},D=async()=>{s(o,"","info");try{p=(await ae({limit:50})).emails,p.find(a=>a.emailId===n)||(n="",x+=1,H()),S()}catch(t){const a=t instanceof Error?t.message:"Failed to load mailbox";s(o,a,"error")}};if(A.addEventListener("click",()=>{D()}),U.addEventListener("click",async()=>{if(n)try{await re(n);const t=p.find(a=>a.emailId===n);t&&(t.read=!1),S(),s(o,"Marked unread.","success")}catch(t){const a=t instanceof Error?t.message:"Failed to mark unread";s(o,a,"error")}}),y.addEventListener("click",async()=>{if(!j||!m)return;const t=k.value;y.disabled=!0;try{await le(m,t,E.value.trim()),s(o,"Bug status updated.","success")}catch(a){const r=a instanceof F||a instanceof Error?a.message:"Failed to update bug status";s(o,r,"error")}finally{y.disabled=!1}}),N.addEventListener("click",async()=>{if(!n){s(o,"Select an email first.","info");return}const t=q.value.trim();if(!t){s(o,"Reply text is required.","info");return}try{await ce(n,{text:t}),q.value="",s(o,"Reply sent.","success")}catch(a){const r=a instanceof F||a instanceof Error?a.message:"Failed to send reply";s(o,r,"error")}}),P.addEventListener("click",async()=>{const t=T.value.trim(),a=I.value.trim(),r=L.value.trim();if(!t||!a||!r){s(o,"To, subject and message are required.","info");return}try{await te({to:t,subject:a,text:r}),T.value="",I.value="",L.value="",s(o,"Email sent.","success")}catch(l){const g=l instanceof F||l instanceof Error?l.message:"Failed to send email";s(o,g,"error")}}),!await be()){xe(),window.location.href="/auth";return}D()};export{he as mountMailboxPage};
