import{o as re,p as le,b as ce,m as de,e as me,j as ue,i as ee,k as be,l as xe,M as pe,N as fe,A as W,O as ge,P as he,C as ve,Q as Se,R as ye,S as we,T as Ce,U as Me,V as Be}from"./UserMenu-DLI1N75f.js";const Ee="af-south-1_bIOvLpsST",ke="3h1hjhsq24cm86n83oklrkf6be",ae=new ve({UserPoolId:Ee,ClientId:ke}),qe=()=>`
  <div class="app mailbox-page">
    <div id="mailboxAppBarContainer"></div>
    <main class="mailbox-layout">
      <section class="mailbox-sidebar">
        <header class="mailbox-sidebar-header">
          <h2 id="mailboxTitle">Inbox</h2>
          <div class="mailbox-header-actions">
            <button id="mailboxRefreshBtn" class="mailbox-btn mailbox-btn-secondary" type="button">Refresh</button>
            <div id="mailboxScopeControls" class="mailbox-scope-controls" hidden>
              <label class="mailbox-scope-label" for="mailboxScopeInput">Mailbox</label>
              <div class="mailbox-scope-row">
                <select
                  id="mailboxScopeInput"
                  class="mailbox-scope-input"
                ></select>
              </div>
            </div>
          </div>
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
                <option value="testing">Testing</option>
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
`,Ie=async()=>new Promise((t,r)=>{const x=ae?.getCurrentUser();if(!x){t(null);return}x.getSession((p,h)=>{if(p){r(p);return}t(h)})}),Te=()=>{const t=ae?.getCurrentUser()||null;t&&t.signOut()},te=t=>{const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString()},n=(t,r,x)=>{if(!r){t.textContent="",t.hidden=!0,t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=r,t.setAttribute("data-tone",x)},Le=t=>{const r=t.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return r?r[1]:null},Fe=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const r=re(),x=le().map(e=>e.trim().toLowerCase()),p=x.includes("mailbox");if(!p){window.location.href="/whiteboard";return}t.innerHTML=qe(),t.appendChild(ce()),de(),me();const h=t.querySelector("#mailboxAppBarContainer"),i=t.querySelector("#mailboxFeedback"),M=t.querySelector("#mailboxList"),Q=t.querySelector("#mailboxTitle"),Y=t.querySelector("#mailboxRefreshBtn"),I=t.querySelector("#mailboxScopeControls"),m=t.querySelector("#mailboxScopeInput"),T=t.querySelector("#mailboxMessageCard"),L=t.querySelector("#mailboxMessageSubject"),A=t.querySelector("#mailboxMessageMeta"),j=t.querySelector("#mailboxMessageText"),J=t.querySelector("#mailboxMarkUnreadBtn"),v=t.querySelector("#mailboxBugAdmin"),F=t.querySelector("#mailboxBugStatusSelect"),R=t.querySelector("#mailboxBugNote"),B=t.querySelector("#mailboxBugSaveBtn"),U=t.querySelector("#mailboxReplyText"),K=t.querySelector("#mailboxReplyBtn"),N=t.querySelector("#mailboxSendTo"),P=t.querySelector("#mailboxSendSubject"),O=t.querySelector("#mailboxSendText"),X=t.querySelector("#mailboxSendBtn");if(!h||!i||!M||!Q||!Y||!I||!m||!T||!L||!A||!j||!J||!v||!F||!R||!B||!U||!K||!N||!P||!O||!X)throw new Error("Mailbox page is missing required elements");const oe=ue(),u=x.includes("admin");let S=0;if(p)try{S=await ee()}catch(e){console.warn("Failed to load inbox unread count",e)}const ie=be({currentApp:"inbox",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:oe,userRole:r,isAdmin:u,hasMailboxAccess:p,unreadInboxCount:S});h.appendChild(ie),await xe({root:t,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let l="",f="",g=0,y=[];const w=new Set,H=pe(),ne=H.includes("@")?H.slice(0,H.indexOf("@")).trim().toLowerCase():"",$=new URLSearchParams(window.location.search).get("mailbox")?.trim().toLowerCase();let s=$&&/^[a-z0-9._+-]{1,64}$/.test($)?$:ne;const Z=e=>{const a=Math.max(0,Math.floor(e)),o=Array.from(h.querySelectorAll(".app-selector-btn")).find(q=>q.textContent?.trim().startsWith("Inbox"));if(!o)return;const c=o.querySelector(".app-selector-badge");if(a<=0){c?.remove(),o.setAttribute("aria-label","Switch to Inbox");return}const d=c??document.createElement("span");d.className="app-selector-badge",d.setAttribute("aria-hidden","true"),d.textContent=a>99?"99+":String(a),c||o.appendChild(d),o.setAttribute("aria-label",`Switch to Inbox (${a} unread)`)},z=async()=>{if(!p){S=0,Z(0);return}try{S=await ee(),Z(S)}catch(e){console.warn("Failed to refresh inbox unread count",e)}},E=()=>{s&&w.add(s);const e=Array.from(w).filter(a=>!!a).sort((a,o)=>a.localeCompare(o));m.innerHTML="";for(const a of e){const o=document.createElement("option");o.value=a,o.textContent=a,m.appendChild(o)}s?m.value=s:e[0]&&(m.value=e[0],s=e[0])},D=()=>{Q.textContent=u&&s?`Inbox (${s})`:"Inbox"},se=()=>{if(!u)return;const e=m.value.trim().toLowerCase();if(!e){n(i,"Mailbox local-part is required.","info");return}if(!/^[a-z0-9._+-]{1,64}$/.test(e)){n(i,"Mailbox must use letters, numbers, dot, underscore, plus, or hyphen.","info");return}s=e,w.add(e),E(),D(),l="",g+=1,V(),_()},V=()=>{L.textContent="",A.textContent="",j.textContent="",T.hidden=!0,v.hidden=!0,f=""},k=()=>{if(M.innerHTML="",y.length===0){M.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}y.forEach(e=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",e.read||a.classList.add("is-unread"),e.emailId===l&&a.classList.add("is-active");const o=document.createElement("div");o.className="mailbox-item-from",o.textContent=e.from||"(unknown sender)";const c=document.createElement("div");c.className="mailbox-item-subject",c.textContent=e.subject||"(no subject)";const d=document.createElement("div");d.className="mailbox-item-time",d.textContent=te(e.timestamp),a.appendChild(o),a.appendChild(c),a.appendChild(d),a.addEventListener("click",async()=>{l=e.emailId,g+=1;const q=g;k();try{const b=await Se(e.emailId);if(q!==g||l!==e.emailId)return;if(L.textContent=b.subject||"(no subject)",A.textContent=`From ${b.from} | ${te(b.timestamp)}`,j.textContent=b.text||"",T.hidden=!1,u){const C=Le(b.subject||"");if(C)try{const G=await ye(C);f=C,F.value=G.bug.status,R.value=typeof G.bug.statusComment=="string"?G.bug.statusComment:"",v.hidden=!1}catch{f="",v.hidden=!0}else f="",v.hidden=!0}e.read||(await we(e.emailId),e.read=!0,k(),z())}catch(b){if(q!==g||l!==e.emailId)return;V();const C=b instanceof Error?b.message:"Failed to load email";n(i,C,"error")}}),M.appendChild(a)})},_=async()=>{n(i,"","info");try{const e=await he({limit:50,mailbox:u?s:void 0});u&&e.mailbox&&e.mailbox!==s&&(s=e.mailbox,m.value=e.mailbox),e.mailbox&&w.add(e.mailbox),E(),D(),y=e.emails,y.find(a=>a.emailId===l)||(l="",g+=1,V()),k()}catch(e){const a=e instanceof Error?e.message:"Failed to load mailbox";n(i,a,"error")}};if(Y.addEventListener("click",()=>{_()}),m.addEventListener("change",()=>{se()}),J.addEventListener("click",async()=>{if(l)try{await Ce(l);const e=y.find(a=>a.emailId===l);e&&(e.read=!1),k(),z(),n(i,"Marked unread.","success")}catch(e){const a=e instanceof Error?e.message:"Failed to mark unread";n(i,a,"error")}}),B.addEventListener("click",async()=>{if(!u||!f)return;const e=F.value;B.disabled=!0;try{await Me(f,e,R.value.trim()),n(i,"Bug status updated.","success")}catch(a){const o=a instanceof W||a instanceof Error?a.message:"Failed to update bug status";n(i,o,"error")}finally{B.disabled=!1}}),K.addEventListener("click",async()=>{if(!l){n(i,"Select an email first.","info");return}const e=U.value.trim();if(!e){n(i,"Reply text is required.","info");return}try{await Be(l,{text:e}),U.value="",n(i,"Reply sent.","success")}catch(a){const o=a instanceof W||a instanceof Error?a.message:"Failed to send reply";n(i,o,"error")}}),X.addEventListener("click",async()=>{const e=N.value.trim(),a=P.value.trim(),o=O.value.trim();if(!e||!a||!o){n(i,"To, subject and message are required.","info");return}try{await fe({to:e,subject:a,text:o}),N.value="",P.value="",O.value="",n(i,"Email sent.","success")}catch(c){const d=c instanceof W||c instanceof Error?c.message:"Failed to send email";n(i,d,"error")}}),!await Ie()){Te(),window.location.href="/auth";return}if(u){I.hidden=!1,s&&(m.value=s),E();try{const e=await ge();for(const a of e.mailboxes||[]){const o=a.trim().toLowerCase();o&&w.add(o)}E()}catch(e){console.warn("Failed to load mailbox directory",e),n(i,"Could not load mailbox directory. You can still type a mailbox local-part and click View.","info")}}else I.hidden=!0;D(),_(),z()};export{Fe as mountMailboxPage};
