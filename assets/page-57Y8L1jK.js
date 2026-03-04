import{h as V,j as W,a as _,m as Q,b as X,f as Y,g as Z,i as ee,F as te,A as R,G as ae,H as oe,I as ie,J as se,K as ne,L as re,M as le}from"./UserMenu-Ch0iAQ-b.js";import{C as ce}from"./js.cookie-Co-gs8up.js";import"./_commonjsHelpers-DaWZu8wl.js";const de="af-south-1_bIOvLpsST",me="3h1hjhsq24cm86n83oklrkf6be",z=new ce({UserPoolId:de,ClientId:me}),ue=()=>`
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
`,be=async()=>new Promise((e,s)=>{const d=z?.getCurrentUser();if(!d){e(null);return}d.getSession((m,h)=>{if(m){s(m);return}e(h)})}),xe=()=>{const e=z?.getCurrentUser()||null;e&&e.signOut()},$=e=>{const s=new Date(e);return Number.isNaN(s.getTime())?e:s.toLocaleString()},i=(e,s,d)=>{if(!s){e.textContent="",e.hidden=!0,e.setAttribute("data-tone","");return}e.hidden=!1,e.textContent=s,e.setAttribute("data-tone",d)},pe=e=>{const s=e.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return s?s[1]:null},ye=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const s=V(),d=W().map(t=>t.trim().toLowerCase()),m=d.includes("mailbox");if(!m){window.location.href="/whiteboard";return}e.innerHTML=ue(),e.appendChild(_()),Q();const h=e.querySelector("#mailboxAppBarContainer"),o=e.querySelector("#mailboxFeedback"),v=e.querySelector("#mailboxList"),A=e.querySelector("#mailboxRefreshBtn"),w=e.querySelector("#mailboxMessageCard"),C=e.querySelector("#mailboxMessageSubject"),B=e.querySelector("#mailboxMessageMeta"),M=e.querySelector("#mailboxMessageText"),U=e.querySelector("#mailboxMarkUnreadBtn"),b=e.querySelector("#mailboxBugAdmin"),E=e.querySelector("#mailboxBugStatusSelect"),k=e.querySelector("#mailboxBugNote"),y=e.querySelector("#mailboxBugSaveBtn"),q=e.querySelector("#mailboxReplyText"),N=e.querySelector("#mailboxReplyBtn"),T=e.querySelector("#mailboxSendTo"),I=e.querySelector("#mailboxSendSubject"),L=e.querySelector("#mailboxSendText"),P=e.querySelector("#mailboxSendBtn");if(!h||!o||!v||!A||!w||!C||!B||!M||!U||!b||!E||!k||!y||!q||!N||!T||!I||!L||!P)throw new Error("Mailbox page is missing required elements");const J=X(),j=d.includes("admin");let H=0;if(m)try{H=await Y()}catch(t){console.warn("Failed to load inbox unread count",t)}const K=Z({currentApp:"inbox",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:J,userRole:s,isAdmin:j,hasMailboxAccess:m,unreadInboxCount:H});h.appendChild(K),await ee({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let n="",u="",x=0,p=[];const O=()=>{C.textContent="",B.textContent="",M.textContent="",w.hidden=!0,b.hidden=!0,u=""},S=()=>{if(v.innerHTML="",p.length===0){v.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}p.forEach(t=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",t.read||a.classList.add("is-unread"),t.emailId===n&&a.classList.add("is-active");const r=document.createElement("div");r.className="mailbox-item-from",r.textContent=t.from||"(unknown sender)";const l=document.createElement("div");l.className="mailbox-item-subject",l.textContent=t.subject||"(no subject)";const g=document.createElement("div");g.className="mailbox-item-time",g.textContent=$(t.timestamp),a.appendChild(r),a.appendChild(l),a.appendChild(g),a.addEventListener("click",async()=>{n=t.emailId,x+=1;const G=x;S();try{const c=await oe(t.emailId);if(G!==x||n!==t.emailId)return;if(C.textContent=c.subject||"(no subject)",B.textContent=`From ${c.from} | ${$(c.timestamp)}`,M.textContent=c.text||"",w.hidden=!1,j){const f=pe(c.subject||"");if(f)try{const F=await ie(f);u=f,E.value=F.bug.status,k.value=typeof F.bug.statusComment=="string"?F.bug.statusComment:"",b.hidden=!1}catch{u="",b.hidden=!0}else u="",b.hidden=!0}t.read||(await se(t.emailId),t.read=!0,S())}catch(c){if(G!==x||n!==t.emailId)return;O();const f=c instanceof Error?c.message:"Failed to load email";i(o,f,"error")}}),v.appendChild(a)})},D=async()=>{i(o,"","info");try{p=(await ae({limit:50})).emails,p.find(a=>a.emailId===n)||(n="",x+=1,O()),S()}catch(t){const a=t instanceof Error?t.message:"Failed to load mailbox";i(o,a,"error")}};if(A.addEventListener("click",()=>{D()}),U.addEventListener("click",async()=>{if(n)try{await ne(n);const t=p.find(a=>a.emailId===n);t&&(t.read=!1),S(),i(o,"Marked unread.","success")}catch(t){const a=t instanceof Error?t.message:"Failed to mark unread";i(o,a,"error")}}),y.addEventListener("click",async()=>{if(!j||!u)return;const t=E.value;y.disabled=!0;try{await re(u,t,k.value.trim()),i(o,"Bug status updated.","success")}catch(a){const r=a instanceof R||a instanceof Error?a.message:"Failed to update bug status";i(o,r,"error")}finally{y.disabled=!1}}),N.addEventListener("click",async()=>{if(!n){i(o,"Select an email first.","info");return}const t=q.value.trim();if(!t){i(o,"Reply text is required.","info");return}try{await le(n,{text:t}),q.value="",i(o,"Reply sent.","success")}catch(a){const r=a instanceof R||a instanceof Error?a.message:"Failed to send reply";i(o,r,"error")}}),P.addEventListener("click",async()=>{const t=T.value.trim(),a=I.value.trim(),r=L.value.trim();if(!t||!a||!r){i(o,"To, subject and message are required.","info");return}try{await te({to:t,subject:a,text:r}),T.value="",I.value="",L.value="",i(o,"Email sent.","success")}catch(l){const g=l instanceof R||l instanceof Error?l.message:"Failed to send email";i(o,g,"error")}}),!await be()){xe(),window.location.href="/auth";return}D()};export{ye as mountMailboxPage};
