import{o as ce,p as de,b as me,m as ue,e as be,j as xe,i as te,k as pe,l as fe,M as ge,N as he,A as G,O as ve,P as Se,C as ye,Q as we,R as Ce,S as Me,T as Be,U as Ee,V as Ie,W as ke}from"./UserMenu-BzNnO_sE.js";const qe="af-south-1_bIOvLpsST",Te="3h1hjhsq24cm86n83oklrkf6be",oe=new ye({UserPoolId:qe,ClientId:Te}),Le=()=>`
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
`,Ae=async()=>new Promise((a,l)=>{const f=oe?.getCurrentUser();if(!f){a(null);return}f.getSession((g,y)=>{if(g){l(g);return}a(y)})}),Fe=()=>{const a=oe?.getCurrentUser()||null;a&&a.signOut()},ae=a=>{const l=new Date(a);return Number.isNaN(l.getTime())?a:l.toLocaleString()},n=(a,l,f)=>{if(!l){a.textContent="",a.hidden=!0,a.setAttribute("data-tone","");return}a.hidden=!1,a.textContent=l,a.setAttribute("data-tone",f)},je=a=>{const l=a.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return l?l[1]:null},Pe=async()=>{const a=document.querySelector("#app");if(!a)throw new Error("Missing #app root");const l=ce(),f=de().map(e=>e.trim().toLowerCase()),g=f.includes("mailbox");if(!g){window.location.href="/whiteboard";return}a.innerHTML=Le(),a.appendChild(me()),ue(),be();const y=a.querySelector("#mailboxAppBarContainer"),i=a.querySelector("#mailboxFeedback"),I=a.querySelector("#mailboxList"),Q=a.querySelector("#mailboxTitle"),Y=a.querySelector("#mailboxRefreshBtn"),A=a.querySelector("#mailboxScopeControls"),u=a.querySelector("#mailboxScopeInput"),F=a.querySelector("#mailboxMessageCard"),j=a.querySelector("#mailboxMessageSubject"),R=a.querySelector("#mailboxMessageMeta"),U=a.querySelector("#mailboxMessageText"),J=a.querySelector("#mailboxMarkUnreadBtn"),w=a.querySelector("#mailboxBugAdmin"),N=a.querySelector("#mailboxBugStatusSelect"),P=a.querySelector("#mailboxBugNote"),k=a.querySelector("#mailboxBugSaveBtn"),O=a.querySelector("#mailboxReplyText"),K=a.querySelector("#mailboxReplyBtn"),D=a.querySelector("#mailboxSendTo"),H=a.querySelector("#mailboxSendSubject"),$=a.querySelector("#mailboxSendText"),X=a.querySelector("#mailboxSendBtn");if(!y||!i||!I||!Q||!Y||!A||!u||!F||!j||!R||!U||!J||!w||!N||!P||!k||!O||!K||!D||!H||!$||!X)throw new Error("Mailbox page is missing required elements");const ie=xe(),x=f.includes("admin");let C=0;if(g)try{C=await te()}catch(e){console.warn("Failed to load inbox unread count",e)}const ne=pe({currentApp:"inbox",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:ie,userRole:l,isAdmin:x,hasMailboxAccess:g,unreadInboxCount:C});y.appendChild(ne),await fe({root:a,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let s="",S="",h=0,v=[];const M=new Set,z=ge(),se=z.includes("@")?z.slice(0,z.indexOf("@")).trim().toLowerCase():"",V=new URLSearchParams(window.location.search).get("mailbox")?.trim().toLowerCase();let r=V&&/^[a-z0-9._+-]{1,64}$/.test(V)?V:se;const Z=e=>{const t=Math.max(0,Math.floor(e)),o=Array.from(y.querySelectorAll(".app-selector-btn")).find(p=>p.textContent?.trim().startsWith("Inbox"));if(!o)return;const c=o.querySelector(".app-selector-badge");if(t<=0){c?.remove(),o.setAttribute("aria-label","Switch to Inbox");return}const d=c??document.createElement("span");d.className="app-selector-badge",d.setAttribute("aria-hidden","true"),d.textContent=t>99?"99+":String(t),c||o.appendChild(d),o.setAttribute("aria-label",`Switch to Inbox (${t} unread)`)},q=async()=>{if(!g){C=0,Z(0);return}try{C=await te(),Z(C)}catch(e){console.warn("Failed to refresh inbox unread count",e)}},T=()=>{r&&M.add(r);const e=Array.from(M).filter(t=>!!t).sort((t,o)=>t.localeCompare(o));u.innerHTML="";for(const t of e){const o=document.createElement("option");o.value=t,o.textContent=t,u.appendChild(o)}r?u.value=r:e[0]&&(u.value=e[0],r=e[0])},W=()=>{Q.textContent=x&&r?`Inbox (${r})`:"Inbox"},re=()=>{if(!x)return;const e=u.value.trim().toLowerCase();if(!e){n(i,"Mailbox local-part is required.","info");return}if(!/^[a-z0-9._+-]{1,64}$/.test(e)){n(i,"Mailbox must use letters, numbers, dot, underscore, plus, or hyphen.","info");return}r=e,M.add(e),T(),W(),s="",h+=1,L(),_()},L=()=>{j.textContent="",R.textContent="",U.textContent="",F.hidden=!0,w.hidden=!0,S=""},B=()=>{if(I.innerHTML="",v.length===0){I.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}v.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="mailbox-item",e.read||t.classList.add("is-unread"),e.emailId===s&&t.classList.add("is-active");const o=document.createElement("div");o.className="mailbox-item-from",o.textContent=e.from||"(unknown sender)";const c=document.createElement("div");c.className="mailbox-item-subject",c.textContent=e.subject||"(no subject)";const d=document.createElement("div");d.className="mailbox-item-time",d.textContent=ae(e.timestamp);const p=document.createElement("span");p.className="mailbox-item-delete",p.textContent="🗑",p.title="Delete email permanently",p.setAttribute("aria-label","Delete email permanently"),p.setAttribute("data-email-id",e.emailId),t.appendChild(o),t.appendChild(c),t.appendChild(d),t.appendChild(p),t.addEventListener("click",async le=>{if(le.target?.closest(".mailbox-item-delete")){if(!window.confirm("Delete this email permanently from mailbox storage?"))return;try{await we(e.emailId),v=v.filter(m=>m.emailId!==e.emailId),s===e.emailId&&(s="",h+=1,L()),B(),q(),n(i,"Email deleted.","success")}catch(m){const E=m instanceof Error?m.message:"Failed to delete email";n(i,E,"error")}return}s=e.emailId,h+=1;const ee=h;B();try{const b=await Ce(e.emailId);if(ee!==h||s!==e.emailId)return;if(j.textContent=b.subject||"(no subject)",R.textContent=`From ${b.from} | ${ae(b.timestamp)}`,U.textContent=b.text||"",F.hidden=!1,x){const m=je(b.subject||"");if(m)try{const E=await Me(m);S=m,N.value=E.bug.status,P.value=typeof E.bug.statusComment=="string"?E.bug.statusComment:"",w.hidden=!1}catch{S="",w.hidden=!0}else S="",w.hidden=!0}e.read||(await Be(e.emailId),e.read=!0,B(),q())}catch(b){if(ee!==h||s!==e.emailId)return;L();const m=b instanceof Error?b.message:"Failed to load email";n(i,m,"error")}}),I.appendChild(t)})},_=async()=>{n(i,"","info");try{const e=await Se({limit:50,mailbox:x?r:void 0});x&&e.mailbox&&e.mailbox!==r&&(r=e.mailbox,u.value=e.mailbox),e.mailbox&&M.add(e.mailbox),T(),W(),v=e.emails,v.find(t=>t.emailId===s)||(s="",h+=1,L()),B()}catch(e){const t=e instanceof Error?e.message:"Failed to load mailbox";n(i,t,"error")}};if(Y.addEventListener("click",()=>{_()}),u.addEventListener("change",()=>{re()}),J.addEventListener("click",async()=>{if(s)try{await Ee(s);const e=v.find(t=>t.emailId===s);e&&(e.read=!1),B(),q(),n(i,"Marked unread.","success")}catch(e){const t=e instanceof Error?e.message:"Failed to mark unread";n(i,t,"error")}}),k.addEventListener("click",async()=>{if(!x||!S)return;const e=N.value;k.disabled=!0;try{await Ie(S,e,P.value.trim()),n(i,"Bug status updated.","success")}catch(t){const o=t instanceof G||t instanceof Error?t.message:"Failed to update bug status";n(i,o,"error")}finally{k.disabled=!1}}),K.addEventListener("click",async()=>{if(!s){n(i,"Select an email first.","info");return}const e=O.value.trim();if(!e){n(i,"Reply text is required.","info");return}try{await ke(s,{text:e}),O.value="",n(i,"Reply sent.","success")}catch(t){const o=t instanceof G||t instanceof Error?t.message:"Failed to send reply";n(i,o,"error")}}),X.addEventListener("click",async()=>{const e=D.value.trim(),t=H.value.trim(),o=$.value.trim();if(!e||!t||!o){n(i,"To, subject and message are required.","info");return}try{await he({to:e,subject:t,text:o}),D.value="",H.value="",$.value="",n(i,"Email sent.","success")}catch(c){const d=c instanceof G||c instanceof Error?c.message:"Failed to send email";n(i,d,"error")}}),!await Ae()){Fe(),window.location.href="/auth";return}if(x){A.hidden=!1,r&&(u.value=r),T();try{const e=await ve();for(const t of e.mailboxes||[]){const o=t.trim().toLowerCase();o&&M.add(o)}T()}catch(e){console.warn("Failed to load mailbox directory",e),n(i,"Could not load mailbox directory. You can still type a mailbox local-part and click View.","info")}}else A.hidden=!0;W(),_(),q()};export{Pe as mountMailboxPage};
