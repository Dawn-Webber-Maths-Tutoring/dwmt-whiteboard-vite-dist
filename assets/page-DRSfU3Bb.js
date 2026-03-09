import{o as ue,p as be,b as xe,m as pe,e as fe,j as ge,i as ie,k as he,l as ve,N as ye,O as Se,A as Z,P as Ce,Q as Me,R as ne,S as we,T as Ee,U as Be,V as Te,W as Ie,X as ke,Y as qe}from"./UserMenu-CfZKbDJh.js";import{g as Ae,s as Ne}from"./authSession-CqrMakIu.js";const Le=()=>`
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
          <div id="mailboxMessageAttachments" class="mailbox-message-attachments" hidden></div>
          <div id="mailboxBugAdmin" class="mailbox-bug-admin" hidden>
            <div class="mailbox-bug-admin-row">
              <strong>Bug status</strong>
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
`,se=a=>{const l=new Date(a);return Number.isNaN(l.getTime())?a:l.toLocaleString()},r=(a,l,x)=>{if(!l){a.textContent="",a.hidden=!0,a.setAttribute("data-tone","");return}a.hidden=!1,a.textContent=l,a.setAttribute("data-tone",x)},Re=a=>{const l=a.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return l?l[1]:null},Fe=/(https?:\/\/[^\s<>()]+|mailto:[^\s<>()]+)/gi,Ue=/[),.;!?]+$/,je=(a,l)=>{if(a.textContent="",!l)return;let x=0;l.replace(Fe,(p,N,i)=>{i>x&&a.append(document.createTextNode(l.slice(x,i)));const S=p.match(Ue)?.[0]??"",h=S?p.slice(0,-S.length):p;if(h){const f=document.createElement("a");f.href=h,f.textContent=h,(h.startsWith("http://")||h.startsWith("https://"))&&(f.target="_blank",f.rel="noopener noreferrer"),a.append(f)}return S&&a.append(document.createTextNode(S)),x=i+p.length,p}),x<l.length&&a.append(document.createTextNode(l.slice(x)))},We=async()=>{const a=document.querySelector("#app");if(!a)throw new Error("Missing #app root");const l=ue(),x=be().map(e=>e.trim().toLowerCase()),p=x.includes("mailbox");if(!p){window.location.href="/whiteboard";return}a.innerHTML=Le(),a.appendChild(xe()),pe(),fe();const N=a.querySelector("#mailboxAppBarContainer"),i=a.querySelector("#mailboxFeedback"),E=a.querySelector("#mailboxList"),S=a.querySelector("#mailboxTitle"),h=a.querySelector("#mailboxRefreshBtn"),f=a.querySelector("#mailboxScopeControls"),g=a.querySelector("#mailboxScopeInput"),D=a.querySelector("#mailboxMessageCard"),P=a.querySelector("#mailboxMessageSubject"),W=a.querySelector("#mailboxMessageMeta"),z=a.querySelector("#mailboxMessageText"),ee=a.querySelector("#mailboxMarkUnreadBtn"),v=a.querySelector("#mailboxMessageAttachments"),B=a.querySelector("#mailboxBugAdmin"),H=a.querySelector("#mailboxBugStatusSelect"),O=a.querySelector("#mailboxBugNote"),L=a.querySelector("#mailboxBugSaveBtn"),_=a.querySelector("#mailboxReplyText"),te=a.querySelector("#mailboxReplyBtn"),G=a.querySelector("#mailboxSendTo"),V=a.querySelector("#mailboxSendSubject"),Y=a.querySelector("#mailboxSendText"),ae=a.querySelector("#mailboxSendBtn");if(!N||!i||!E||!S||!h||!f||!g||!D||!P||!W||!z||!ee||!v||!B||!H||!O||!L||!_||!te||!G||!V||!Y||!ae)throw new Error("Mailbox page is missing required elements");const re=ge(),y=x.includes("admin");let T=0;if(p)try{T=await ie()}catch(e){console.warn("Failed to load inbox unread count",e)}const le=he({currentApp:"inbox",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:re,userRole:l,isAdmin:y,hasMailboxAccess:p,unreadInboxCount:T});N.appendChild(le),await ve({root:a,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let m="",w="",C=0,M=[];const I=new Set,K=ye(),ce=K.includes("@")?K.slice(0,K.indexOf("@")).trim().toLowerCase():"",Q=new URLSearchParams(window.location.search).get("mailbox")?.trim().toLowerCase();let u=Q&&/^[a-z0-9._+-]{1,64}$/.test(Q)?Q:ce;const oe=e=>{const t=Math.max(0,Math.floor(e)),o=Array.from(N.querySelectorAll(".app-selector-btn")).find(c=>c.textContent?.trim().startsWith("Inbox"));if(!o)return;const n=o.querySelector(".app-selector-badge");if(t<=0){n?.remove(),o.setAttribute("aria-label","Switch to Inbox");return}const b=n??document.createElement("span");b.className="app-selector-badge",b.setAttribute("aria-hidden","true"),b.textContent=t>99?"99+":String(t),n||o.appendChild(b),o.setAttribute("aria-label",`Switch to Inbox (${t} unread)`)},R=async()=>{if(!p){T=0,oe(0);return}try{T=await ie(),oe(T)}catch(e){console.warn("Failed to refresh inbox unread count",e)}},F=()=>{u&&I.add(u);const e=Array.from(I).filter(t=>!!t).sort((t,o)=>t.localeCompare(o));g.innerHTML="";for(const t of e){const o=document.createElement("option");o.value=t,o.textContent=t,g.appendChild(o)}u?g.value=u:e[0]&&(g.value=e[0],u=e[0])},X=()=>{S.textContent=y&&u?`Inbox (${u})`:"Inbox"},de=()=>{if(!y)return;const e=g.value.trim().toLowerCase();if(!e){r(i,"Mailbox local-part is required.","info");return}if(!/^[a-z0-9._+-]{1,64}$/.test(e)){r(i,"Mailbox must use letters, numbers, dot, underscore, plus, or hyphen.","info");return}u=e,I.add(e),F(),X(),m="",C+=1,U(),J()},U=()=>{P.textContent="",W.textContent="",z.textContent="",v.hidden=!0,v.innerHTML="",D.hidden=!0,B.hidden=!0,w=""},me=e=>{if(v.innerHTML="",!Array.isArray(e)||e.length===0){v.hidden=!0;return}const t=document.createElement("h4");t.className="mailbox-attachments-title",t.textContent="Attachments",v.appendChild(t);const o=document.createElement("div");o.className="mailbox-attachments-list",e.forEach((n,b)=>{const c=document.createElement("div");c.className="mailbox-attachment-card";const q=document.createElement("div");q.className="mailbox-attachment-name",q.textContent=n.filename||`attachment-${b+1}${n.type?.startsWith("image/")?".image":""}`,c.appendChild(q);const j=document.createElement("div");j.className="mailbox-attachment-meta";const $=Number.isFinite(n.size)?`${Math.max(1,Math.round(n.size/1024))} KB`:"unknown size";j.textContent=`${n.type||"application/octet-stream"} · ${$}`,c.appendChild(j);const d=typeof n.inlineDataUrl=="string"&&n.inlineDataUrl.trim()?n.inlineDataUrl.trim():"";if(d&&n.type.startsWith("image/")){const s=document.createElement("img");s.className="mailbox-attachment-image",s.src=d,s.alt=n.filename||"Attachment image",c.appendChild(s)}else if(d&&n.type.startsWith("video/")){const s=document.createElement("video");s.className="mailbox-attachment-video",s.src=d,s.controls=!0,s.preload="metadata",s.playsInline=!0,c.appendChild(s)}o.appendChild(c)}),v.appendChild(o),v.hidden=!1},k=()=>{if(E.innerHTML="",M.length===0){E.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}M.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="mailbox-item",e.read||t.classList.add("is-unread"),e.emailId===m&&t.classList.add("is-active");const o=document.createElement("div");o.className="mailbox-item-from",o.textContent=e.from||"(unknown sender)";const n=document.createElement("div");n.className="mailbox-item-subject",n.textContent=ne(e.subject||"(no subject)");const b=document.createElement("div");b.className="mailbox-item-time",b.textContent=se(e.timestamp);const c=document.createElement("span");c.className="mailbox-item-delete",c.textContent="🗑",c.title="Delete email permanently",c.setAttribute("aria-label","Delete email permanently"),c.setAttribute("data-email-id",e.emailId),t.appendChild(o),t.appendChild(n),t.appendChild(b),t.appendChild(c),t.addEventListener("click",async q=>{if(q.target?.closest(".mailbox-item-delete")){if(!window.confirm("Delete this email permanently from mailbox storage?"))return;try{await we(e.emailId),M=M.filter(s=>s.emailId!==e.emailId),m===e.emailId&&(m="",C+=1,U()),k(),R(),r(i,"Email deleted.","success")}catch(s){const A=s instanceof Error?s.message:"Failed to delete email";r(i,A,"error")}return}m=e.emailId,C+=1;const $=C;k();try{const d=await Ee(e.emailId);if($!==C||m!==e.emailId)return;if(P.textContent=ne(d.subject||"(no subject)"),W.textContent=`From ${d.from} | ${se(d.timestamp)}`,je(z,d.text||""),me(d.attachments||[]),D.hidden=!1,y){const s=Re(d.subject||"");if(s)try{const A=await Be(s);w=s,H.value=A.bug.status,O.value=typeof A.bug.statusComment=="string"?A.bug.statusComment:"",B.hidden=!1}catch{w="",B.hidden=!0}else w="",B.hidden=!0}e.read||(await Te(e.emailId),e.read=!0,k(),R())}catch(d){if($!==C||m!==e.emailId)return;U();const s=d instanceof Error?d.message:"Failed to load email";r(i,s,"error")}}),E.appendChild(t)})},J=async()=>{r(i,"","info");try{const e=await Me({limit:50,mailbox:y?u:void 0});y&&e.mailbox&&e.mailbox!==u&&(u=e.mailbox,g.value=e.mailbox),e.mailbox&&I.add(e.mailbox),F(),X(),M=e.emails,M.find(t=>t.emailId===m)||(m="",C+=1,U()),k()}catch(e){const t=e instanceof Error?e.message:"Failed to load mailbox";r(i,t,"error")}};if(h.addEventListener("click",()=>{J()}),g.addEventListener("change",()=>{de()}),ee.addEventListener("click",async()=>{if(m)try{await Ie(m);const e=M.find(t=>t.emailId===m);e&&(e.read=!1),k(),R(),r(i,"Marked unread.","success")}catch(e){const t=e instanceof Error?e.message:"Failed to mark unread";r(i,t,"error")}}),L.addEventListener("click",async()=>{if(!y||!w)return;const e=H.value;L.disabled=!0;try{await ke(w,e,O.value.trim()),r(i,"Bug status updated.","success")}catch(t){const o=t instanceof Z||t instanceof Error?t.message:"Failed to update bug status";r(i,o,"error")}finally{L.disabled=!1}}),te.addEventListener("click",async()=>{if(!m){r(i,"Select an email first.","info");return}const e=_.value.trim();if(!e){r(i,"Reply text is required.","info");return}try{await qe(m,{text:e}),_.value="",r(i,"Reply sent.","success")}catch(t){const o=t instanceof Z||t instanceof Error?t.message:"Failed to send reply";r(i,o,"error")}}),ae.addEventListener("click",async()=>{const e=G.value.trim(),t=V.value.trim(),o=Y.value.trim();if(!e||!t||!o){r(i,"To, subject and message are required.","info");return}try{await Se({to:e,subject:t,text:o}),G.value="",V.value="",Y.value="",r(i,"Email sent.","success")}catch(n){const b=n instanceof Z||n instanceof Error?n.message:"Failed to send email";r(i,b,"error")}}),!await Ae()){Ne(),window.location.href="/auth";return}if(y){f.hidden=!1,u&&(g.value=u),F();try{const e=await Ce();for(const t of e.mailboxes||[]){const o=t.trim().toLowerCase();o&&I.add(o)}F()}catch(e){console.warn("Failed to load mailbox directory",e),r(i,"Could not load mailbox directory. You can still type a mailbox local-part and click View.","info")}}else f.hidden=!0;X(),J(),R()};export{We as mountMailboxPage};
