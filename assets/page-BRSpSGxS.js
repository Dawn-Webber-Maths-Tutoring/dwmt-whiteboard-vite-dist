import{o as ie,p as se,b as ne,m as le,e as re,j as ce,i as de,k as me,l as ue,M as be,N as xe,A as V,O as pe,P as fe,C as ge,Q as he,R as Se,S as ye,T as ve,U as we,V as Ce}from"./UserMenu-CrJbHsdn.js";const Me="af-south-1_bIOvLpsST",Be="3h1hjhsq24cm86n83oklrkf6be",te=new ge({UserPoolId:Me,ClientId:Be}),ke=()=>`
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
                <input
                  id="mailboxScopeInput"
                  class="mailbox-scope-input"
                  type="text"
                  list="mailboxScopeOptions"
                  placeholder="local-part"
                  autocomplete="off"
                  spellcheck="false"
                />
                <datalist id="mailboxScopeOptions"></datalist>
                <button id="mailboxScopeApplyBtn" class="mailbox-btn mailbox-btn-secondary" type="button">View</button>
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
`,Ee=async()=>new Promise((t,n)=>{const u=te?.getCurrentUser();if(!u){t(null);return}u.getSession((b,w)=>{if(b){n(b);return}t(w)})}),Te=()=>{const t=te?.getCurrentUser()||null;t&&t.signOut()},ee=t=>{const n=new Date(t);return Number.isNaN(n.getTime())?t:n.toLocaleString()},i=(t,n,u)=>{if(!n){t.textContent="",t.hidden=!0,t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=n,t.setAttribute("data-tone",u)},qe=t=>{const n=t.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return n?n[1]:null},Ae=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const n=ie(),u=se().map(e=>e.trim().toLowerCase()),b=u.includes("mailbox");if(!b){window.location.href="/whiteboard";return}t.innerHTML=ke(),t.appendChild(ne()),le(),re();const w=t.querySelector("#mailboxAppBarContainer"),o=t.querySelector("#mailboxFeedback"),C=t.querySelector("#mailboxList"),G=t.querySelector("#mailboxTitle"),_=t.querySelector("#mailboxRefreshBtn"),E=t.querySelector("#mailboxScopeControls"),f=t.querySelector("#mailboxScopeInput"),T=t.querySelector("#mailboxScopeOptions"),Q=t.querySelector("#mailboxScopeApplyBtn"),q=t.querySelector("#mailboxMessageCard"),I=t.querySelector("#mailboxMessageSubject"),L=t.querySelector("#mailboxMessageMeta"),j=t.querySelector("#mailboxMessageText"),W=t.querySelector("#mailboxMarkUnreadBtn"),g=t.querySelector("#mailboxBugAdmin"),A=t.querySelector("#mailboxBugStatusSelect"),F=t.querySelector("#mailboxBugNote"),M=t.querySelector("#mailboxBugSaveBtn"),R=t.querySelector("#mailboxReplyText"),J=t.querySelector("#mailboxReplyBtn"),U=t.querySelector("#mailboxSendTo"),N=t.querySelector("#mailboxSendSubject"),O=t.querySelector("#mailboxSendText"),K=t.querySelector("#mailboxSendBtn");if(!w||!o||!C||!G||!_||!E||!f||!T||!Q||!q||!I||!L||!j||!W||!g||!A||!F||!M||!R||!J||!U||!N||!O||!K)throw new Error("Mailbox page is missing required elements");const ae=ce(),c=u.includes("admin");let X=0;if(b)try{X=await de()}catch(e){console.warn("Failed to load inbox unread count",e)}const oe=me({currentApp:"inbox",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:ae,userRole:n,isAdmin:c,hasMailboxAccess:b,unreadInboxCount:X});w.appendChild(oe),await ue({root:t,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let l="",x="",p=0,h=[];const S=new Set,P=be();let r=P.includes("@")?P.slice(0,P.indexOf("@")).trim().toLowerCase():"";const B=()=>{r&&S.add(r),T.innerHTML="",Array.from(S).filter(e=>!!e).sort((e,a)=>e.localeCompare(a)).forEach(e=>{const a=document.createElement("option");a.value=e,T.appendChild(a)})},H=()=>{G.textContent=c&&r?`Inbox (${r})`:"Inbox"},Y=()=>{if(!c)return;const e=f.value.trim().toLowerCase();if(!e){i(o,"Mailbox local-part is required.","info");return}if(!/^[a-z0-9._+-]{1,64}$/.test(e)){i(o,"Mailbox must use letters, numbers, dot, underscore, plus, or hyphen.","info");return}r=e,S.add(e),B(),H(),l="",p+=1,D(),$()},D=()=>{I.textContent="",L.textContent="",j.textContent="",q.hidden=!0,g.hidden=!0,x=""},k=()=>{if(C.innerHTML="",h.length===0){C.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}h.forEach(e=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",e.read||a.classList.add("is-unread"),e.emailId===l&&a.classList.add("is-active");const s=document.createElement("div");s.className="mailbox-item-from",s.textContent=e.from||"(unknown sender)";const d=document.createElement("div");d.className="mailbox-item-subject",d.textContent=e.subject||"(no subject)";const y=document.createElement("div");y.className="mailbox-item-time",y.textContent=ee(e.timestamp),a.appendChild(s),a.appendChild(d),a.appendChild(y),a.addEventListener("click",async()=>{l=e.emailId,p+=1;const Z=p;k();try{const m=await he(e.emailId);if(Z!==p||l!==e.emailId)return;if(I.textContent=m.subject||"(no subject)",L.textContent=`From ${m.from} | ${ee(m.timestamp)}`,j.textContent=m.text||"",q.hidden=!1,c){const v=qe(m.subject||"");if(v)try{const z=await Se(v);x=v,A.value=z.bug.status,F.value=typeof z.bug.statusComment=="string"?z.bug.statusComment:"",g.hidden=!1}catch{x="",g.hidden=!0}else x="",g.hidden=!0}e.read||(await ye(e.emailId),e.read=!0,k())}catch(m){if(Z!==p||l!==e.emailId)return;D();const v=m instanceof Error?m.message:"Failed to load email";i(o,v,"error")}}),C.appendChild(a)})},$=async()=>{i(o,"","info");try{const e=await fe({limit:50,mailbox:c?r:void 0});c&&e.mailbox&&e.mailbox!==r&&(r=e.mailbox,f.value=e.mailbox),e.mailbox&&S.add(e.mailbox),B(),H(),h=e.emails,h.find(a=>a.emailId===l)||(l="",p+=1,D()),k()}catch(e){const a=e instanceof Error?e.message:"Failed to load mailbox";i(o,a,"error")}};if(_.addEventListener("click",()=>{$()}),Q.addEventListener("click",()=>{Y()}),f.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Y())}),W.addEventListener("click",async()=>{if(l)try{await ve(l);const e=h.find(a=>a.emailId===l);e&&(e.read=!1),k(),i(o,"Marked unread.","success")}catch(e){const a=e instanceof Error?e.message:"Failed to mark unread";i(o,a,"error")}}),M.addEventListener("click",async()=>{if(!c||!x)return;const e=A.value;M.disabled=!0;try{await we(x,e,F.value.trim()),i(o,"Bug status updated.","success")}catch(a){const s=a instanceof V||a instanceof Error?a.message:"Failed to update bug status";i(o,s,"error")}finally{M.disabled=!1}}),J.addEventListener("click",async()=>{if(!l){i(o,"Select an email first.","info");return}const e=R.value.trim();if(!e){i(o,"Reply text is required.","info");return}try{await Ce(l,{text:e}),R.value="",i(o,"Reply sent.","success")}catch(a){const s=a instanceof V||a instanceof Error?a.message:"Failed to send reply";i(o,s,"error")}}),K.addEventListener("click",async()=>{const e=U.value.trim(),a=N.value.trim(),s=O.value.trim();if(!e||!a||!s){i(o,"To, subject and message are required.","info");return}try{await xe({to:e,subject:a,text:s}),U.value="",N.value="",O.value="",i(o,"Email sent.","success")}catch(d){const y=d instanceof V||d instanceof Error?d.message:"Failed to send email";i(o,y,"error")}}),!await Ee()){Te(),window.location.href="/auth";return}if(c){E.hidden=!1,r&&(f.value=r),B();try{const e=await pe();for(const a of e.mailboxes||[]){const s=a.trim().toLowerCase();s&&S.add(s)}B()}catch(e){console.warn("Failed to load mailbox directory",e)}}else E.hidden=!0;H(),$()};export{Ae as mountMailboxPage};
