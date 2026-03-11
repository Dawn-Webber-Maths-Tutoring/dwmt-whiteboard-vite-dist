import{o as ve,p as Se,b as Ce,m as we,e as Me,j as Ee,i as ue,k as Be,l as Te,S as ke,T as Ie,H as oe,U as qe,V as Le,W as be,X as Ae,Y as Re,Z as Ne,_ as Fe,$ as Ue,a0 as je,a1 as De}from"./UserMenu-D9Aidcen.js";import{b as $e}from"./dialogs-ChSClj4n.js";import{g as He,s as Pe}from"./authSession-B_KcTfm2.js";const We=()=>`
  <div class="app mailbox-page">
    <div id="mailboxAppBarContainer"></div>
    <main class="mailbox-layout">
      <section class="mailbox-sidebar">
        <header class="mailbox-sidebar-header">
          <h2 id="mailboxTitle">Inbox</h2>
          <div class="mailbox-header-actions">
            <button id="mailboxComposeBtn" class="mailbox-btn" type="button">Compose new</button>
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
          <div id="mailboxMessageAttachments" class="mailbox-message-attachments" hidden></div>
          <div id="mailboxBugAdmin" class="mailbox-bug-admin" hidden>
            <div class="mailbox-bug-admin-row">
              <strong>Issue status</strong>
              <select id="mailboxBugStatusSelect">
                <option value="open">Open</option>
                <option value="in-progress">In progress</option>
                <option value="require-clarification">Require clarification</option>
                <option value="testing">Testing</option>
                <option value="tested">Tested</option>
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
              <button id="mailboxBugSaveBtn" class="mailbox-btn" type="button">Update issue</button>
            </div>
          </div>
          <div class="mailbox-message-actions">
            <button id="mailboxReplyActionBtn" class="mailbox-btn" type="button">Reply</button>
            <button id="mailboxMarkUnreadBtn" class="mailbox-btn mailbox-btn-secondary" type="button">Mark unread</button>
          </div>
        </article>

        <article id="mailboxReplyCard" class="mailbox-compose-card" hidden>
          <h3>Reply</h3>
          <textarea id="mailboxReplyText" rows="6" placeholder="Type your reply"></textarea>
          <div class="mailbox-inline-actions">
            <button id="mailboxReplyCancelBtn" class="mailbox-btn mailbox-btn-secondary" type="button">Cancel</button>
            <button id="mailboxReplyBtn" class="mailbox-btn" type="button">Send reply</button>
          </div>
        </article>

        <article id="mailboxSendCard" class="mailbox-compose-card" hidden>
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
            <button id="mailboxSendCancelBtn" class="mailbox-btn mailbox-btn-secondary" type="button">Cancel</button>
            <button id="mailboxSendBtn" class="mailbox-btn" type="button">Send email</button>
          </div>
        </article>
      </section>
    </main>
  </div>
`,xe=t=>{const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString()},l=(t,r,x)=>{if(!r){t.textContent="",t.hidden=!0,t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=r,t.setAttribute("data-tone",x)},ze=t=>{const r=t.match(/\[(?:Bug|Issue)\s+#([0-9a-fA-F-]{8,})\]/);return r?r[1]:null},_e=/(https?:\/\/[^\s<>()]+|mailto:[^\s<>()]+)/gi,Oe=/[),.;!?]+$/,Ve=(t,r)=>{if(t.textContent="",!r)return;let x=0;r.replace(_e,(p,N,i)=>{i>x&&t.append(document.createTextNode(r.slice(x,i)));const S=p.match(Oe)?.[0]??"",h=S?p.slice(0,-S.length):p;if(h){const g=document.createElement("a");g.href=h,g.textContent=h,(h.startsWith("http://")||h.startsWith("https://"))&&(g.target="_blank",g.rel="noopener noreferrer"),t.append(g)}return S&&t.append(document.createTextNode(S)),x=i+p.length,p}),x<r.length&&t.append(document.createTextNode(r.slice(x)))},Ze=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const r=ve(),x=Se().map(e=>e.trim().toLowerCase()),p=x.includes("mailbox");if(!p){window.location.href="/whiteboard";return}t.innerHTML=We(),t.appendChild(Ce()),we(),Me();const N=t.querySelector("#mailboxAppBarContainer"),i=t.querySelector("#mailboxFeedback"),B=t.querySelector("#mailboxList"),S=t.querySelector("#mailboxTitle"),h=t.querySelector("#mailboxComposeBtn"),g=t.querySelector("#mailboxRefreshBtn"),_=t.querySelector("#mailboxScopeControls"),f=t.querySelector("#mailboxScopeInput"),O=t.querySelector("#mailboxMessageCard"),V=t.querySelector("#mailboxMessageSubject"),G=t.querySelector("#mailboxMessageMeta"),Y=t.querySelector("#mailboxMessageText"),ie=t.querySelector("#mailboxMarkUnreadBtn"),M=t.querySelector("#mailboxReplyActionBtn"),ne=t.querySelector("#mailboxReplyCard"),y=t.querySelector("#mailboxMessageAttachments"),T=t.querySelector("#mailboxBugAdmin"),K=t.querySelector("#mailboxBugStatusSelect"),X=t.querySelector("#mailboxBugNote"),F=t.querySelector("#mailboxBugSaveBtn"),U=t.querySelector("#mailboxReplyText"),se=t.querySelector("#mailboxReplyCancelBtn"),le=t.querySelector("#mailboxReplyBtn"),re=t.querySelector("#mailboxSendCard"),j=t.querySelector("#mailboxSendTo"),Z=t.querySelector("#mailboxSendSubject"),J=t.querySelector("#mailboxSendText"),ce=t.querySelector("#mailboxSendCancelBtn"),de=t.querySelector("#mailboxSendBtn");if(!N||!i||!B||!S||!h||!g||!_||!f||!O||!V||!G||!Y||!ie||!M||!ne||!y||!T||!K||!X||!F||!U||!se||!le||!re||!j||!Z||!J||!ce||!de)throw new Error("Mailbox page is missing required elements");const pe=Ee(),v=x.includes("admin");let k=0;if(p)try{k=await ue()}catch(e){console.warn("Failed to load inbox unread count",e)}const fe=Be({currentApp:"inbox",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="notes"){window.location.href="/notes/";return}if(e==="issues"){window.location.href="/issues/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:pe,userRole:r,isAdmin:v,hasMailboxAccess:p,unreadInboxCount:k});N.appendChild(fe),await Te({root:t,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let c="",E="",C=0,w=[];const I=new Set,Q=ke(),he=Q.includes("@")?Q.slice(0,Q.indexOf("@")).trim().toLowerCase():"",ee=new URLSearchParams(window.location.search).get("mailbox")?.trim().toLowerCase();let u=ee&&/^[a-z0-9._+-]{1,64}$/.test(ee)?ee:he;const q=e=>{ne.hidden=!e,e||(U.value="")},D=e=>{re.hidden=!e,e||(j.value="",Z.value="",J.value="")},me=e=>{const a=Math.max(0,Math.floor(e)),o=Array.from(N.querySelectorAll(".app-selector-btn")).find(d=>d.textContent?.trim().startsWith("Inbox"));if(!o)return;const n=o.querySelector(".app-selector-badge");if(a<=0){n?.remove(),o.setAttribute("aria-label","Switch to Inbox");return}const b=n??document.createElement("span");b.className="app-selector-badge",b.setAttribute("aria-hidden","true"),b.textContent=a>99?"99+":String(a),n||o.appendChild(b),o.setAttribute("aria-label",`Switch to Inbox (${a} unread)`)},$=async()=>{if(!p){k=0,me(0);return}try{k=await ue(),me(k)}catch(e){console.warn("Failed to refresh inbox unread count",e)}},H=()=>{u&&I.add(u);const e=Array.from(I).filter(a=>!!a).sort((a,o)=>a.localeCompare(o));f.innerHTML="";for(const a of e){const o=document.createElement("option");o.value=a,o.textContent=a,f.appendChild(o)}u?f.value=u:e[0]&&(f.value=e[0],u=e[0])},te=()=>{S.textContent=v&&u?`Inbox (${u})`:"Inbox"},ge=()=>{if(!v)return;const e=f.value.trim().toLowerCase();if(!e){l(i,"Mailbox local-part is required.","info");return}if(!/^[a-z0-9._+-]{1,64}$/.test(e)){l(i,"Mailbox must use letters, numbers, dot, underscore, plus, or hyphen.","info");return}u=e,I.add(e),H(),te(),c="",C+=1,P(),ae()},P=()=>{V.textContent="",G.textContent="",Y.textContent="",y.hidden=!0,y.innerHTML="",O.hidden=!0,T.hidden=!0,E="",M.disabled=!0,M.hidden=!0,q(!1)},ye=e=>{if(y.innerHTML="",!Array.isArray(e)||e.length===0){y.hidden=!0;return}const a=document.createElement("h4");a.className="mailbox-attachments-title",a.textContent="Attachments",y.appendChild(a);const o=document.createElement("div");o.className="mailbox-attachments-list",e.forEach((n,b)=>{const d=document.createElement("div");d.className="mailbox-attachment-card";const A=document.createElement("div");A.className="mailbox-attachment-name",A.textContent=n.filename||`attachment-${b+1}${n.type?.startsWith("image/")?".image":""}`,d.appendChild(A);const W=document.createElement("div");W.className="mailbox-attachment-meta";const z=Number.isFinite(n.size)?`${Math.max(1,Math.round(n.size/1024))} KB`:"unknown size";W.textContent=`${n.type||"application/octet-stream"} · ${z}`,d.appendChild(W);const m=typeof n.inlineDataUrl=="string"&&n.inlineDataUrl.trim()?n.inlineDataUrl.trim():"";if(m&&n.type.startsWith("image/")){const s=document.createElement("img");s.className="mailbox-attachment-image",s.src=m,s.alt=n.filename||"Attachment image",d.appendChild(s)}else if(m&&n.type.startsWith("video/")){const s=document.createElement("video");s.className="mailbox-attachment-video",s.src=m,s.controls=!0,s.preload="metadata",s.playsInline=!0,d.appendChild(s)}o.appendChild(d)}),y.appendChild(o),y.hidden=!1},L=()=>{if(B.innerHTML="",w.length===0){B.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}w.forEach(e=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",e.read||a.classList.add("is-unread"),e.emailId===c&&a.classList.add("is-active");const o=document.createElement("div");o.className="mailbox-item-from",o.textContent=e.from||"(unknown sender)";const n=document.createElement("div");n.className="mailbox-item-subject",n.textContent=be(e.subject||"(no subject)");const b=document.createElement("div");b.className="mailbox-item-time",b.textContent=xe(e.timestamp);const d=document.createElement("span");d.className="mailbox-item-delete",d.textContent="🗑",d.title="Delete email permanently",d.setAttribute("aria-label","Delete email permanently"),d.setAttribute("data-email-id",e.emailId),a.appendChild(o),a.appendChild(n),a.appendChild(b),a.appendChild(d),a.addEventListener("click",async A=>{if(A.target?.closest(".mailbox-item-delete")){if(!await $e({title:"Delete email",message:"Delete this email permanently from mailbox storage?",confirmLabel:"Delete email",confirmTone:"danger"}))return;try{await Ae(e.emailId),w=w.filter(s=>s.emailId!==e.emailId),c===e.emailId&&(c="",C+=1,P()),L(),$(),l(i,"Email deleted.","success")}catch(s){const R=s instanceof Error?s.message:"Failed to delete email";l(i,R,"error")}return}c=e.emailId,C+=1;const z=C;L();try{const m=await Re(e.emailId);if(z!==C||c!==e.emailId)return;if(V.textContent=be(m.subject||"(no subject)"),G.textContent=`From ${m.from} | ${xe(m.timestamp)}`,Ve(Y,m.text||""),ye(m.attachments||[]),O.hidden=!1,M.disabled=!1,M.hidden=!1,v){const s=ze(m.subject||"");if(s)try{const R=await Ne(s);E=s,K.value=R.bug.status,X.value=typeof R.bug.statusComment=="string"?R.bug.statusComment:"",T.hidden=!1}catch{E="",T.hidden=!0}else E="",T.hidden=!0}e.read||(await Fe(e.emailId),e.read=!0,L(),$())}catch(m){if(z!==C||c!==e.emailId)return;P();const s=m instanceof Error?m.message:"Failed to load email";l(i,s,"error")}}),B.appendChild(a)})},ae=async()=>{l(i,"","info");try{const e=await Le({limit:50,mailbox:v?u:void 0});v&&e.mailbox&&e.mailbox!==u&&(u=e.mailbox,f.value=e.mailbox),e.mailbox&&I.add(e.mailbox),H(),te(),w=e.emails,w.find(a=>a.emailId===c)||(c="",C+=1,P()),L()}catch(e){const a=e instanceof Error?e.message:"Failed to load mailbox";l(i,a,"error")}};if(g.addEventListener("click",()=>{ae()}),f.addEventListener("change",()=>{ge()}),ie.addEventListener("click",async()=>{if(c)try{await Ue(c);const e=w.find(a=>a.emailId===c);e&&(e.read=!1),L(),$(),l(i,"Marked unread.","success")}catch(e){const a=e instanceof Error?e.message:"Failed to mark unread";l(i,a,"error")}}),M.addEventListener("click",()=>{if(!c){l(i,"Select an email first.","info");return}D(!1),q(!0),U.focus()}),se.addEventListener("click",()=>{q(!1)}),F.addEventListener("click",async()=>{if(!v||!E)return;const e=K.value;F.disabled=!0;try{await je(E,e,X.value.trim()),l(i,"Issue status updated.","success")}catch(a){const o=a instanceof oe||a instanceof Error?a.message:"Failed to update issue status";l(i,o,"error")}finally{F.disabled=!1}}),le.addEventListener("click",async()=>{if(!c){l(i,"Select an email first.","info");return}const e=U.value.trim();if(!e){l(i,"Reply text is required.","info");return}try{await De(c,{text:e}),q(!1),l(i,"Reply sent.","success")}catch(a){const o=a instanceof oe||a instanceof Error?a.message:"Failed to send reply";l(i,o,"error")}}),h.addEventListener("click",()=>{q(!1),D(!0),j.focus()}),ce.addEventListener("click",()=>{D(!1)}),de.addEventListener("click",async()=>{const e=j.value.trim(),a=Z.value.trim(),o=J.value.trim();if(!e||!a||!o){l(i,"To, subject and message are required.","info");return}try{await Ie({to:e,subject:a,text:o}),D(!1),l(i,"Email sent.","success")}catch(n){const b=n instanceof oe||n instanceof Error?n.message:"Failed to send email";l(i,b,"error")}}),!await He()){Pe(),window.location.href="/auth";return}if(v){_.hidden=!1,u&&(f.value=u),H();try{const e=await qe();for(const a of e.mailboxes||[]){const o=a.trim().toLowerCase();o&&I.add(o)}H()}catch(e){console.warn("Failed to load mailbox directory",e),l(i,"Could not load mailbox directory. You can still type a mailbox local-part and click View.","info")}}else _.hidden=!0;te(),ae(),$()};export{Ze as mountMailboxPage};
