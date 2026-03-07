import{o as ue,p as be,b as xe,m as pe,e as fe,j as ge,i as ie,k as he,l as ve,M as ye,N as Se,A as Y,O as we,P as Ce,Q as ne,R as Me,S as Ee,T as Be,U as ke,V as Ie,W as qe,X as Te}from"./UserMenu-BWShCZhe.js";import{g as Ae,s as Le}from"./authSession-QdSCENo-.js";const Ne=()=>`
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
`,se=a=>{const b=new Date(a);return Number.isNaN(b.getTime())?a:b.toLocaleString()},r=(a,b,B)=>{if(!b){a.textContent="",a.hidden=!0,a.setAttribute("data-tone","");return}a.hidden=!1,a.textContent=b,a.setAttribute("data-tone",B)},Fe=a=>{const b=a.match(/\[Bug\s+#([0-9a-fA-F-]{8,})\]/);return b?b[1]:null},$e=async()=>{const a=document.querySelector("#app");if(!a)throw new Error("Missing #app root");const b=ue(),B=be().map(e=>e.trim().toLowerCase()),k=B.includes("mailbox");if(!k){window.location.href="/whiteboard";return}a.innerHTML=Ne(),a.appendChild(xe()),pe(),fe();const R=a.querySelector("#mailboxAppBarContainer"),s=a.querySelector("#mailboxFeedback"),I=a.querySelector("#mailboxList"),J=a.querySelector("#mailboxTitle"),Z=a.querySelector("#mailboxRefreshBtn"),j=a.querySelector("#mailboxScopeControls"),x=a.querySelector("#mailboxScopeInput"),U=a.querySelector("#mailboxMessageCard"),$=a.querySelector("#mailboxMessageSubject"),D=a.querySelector("#mailboxMessageMeta"),z=a.querySelector("#mailboxMessageText"),ee=a.querySelector("#mailboxMarkUnreadBtn"),p=a.querySelector("#mailboxMessageAttachments"),y=a.querySelector("#mailboxBugAdmin"),H=a.querySelector("#mailboxBugStatusSelect"),O=a.querySelector("#mailboxBugNote"),q=a.querySelector("#mailboxBugSaveBtn"),W=a.querySelector("#mailboxReplyText"),te=a.querySelector("#mailboxReplyBtn"),P=a.querySelector("#mailboxSendTo"),V=a.querySelector("#mailboxSendSubject"),G=a.querySelector("#mailboxSendText"),ae=a.querySelector("#mailboxSendBtn");if(!R||!s||!I||!J||!Z||!j||!x||!U||!$||!D||!z||!ee||!p||!y||!H||!O||!q||!W||!te||!P||!V||!G||!ae)throw new Error("Mailbox page is missing required elements");const re=ge(),f=B.includes("admin");let S=0;if(k)try{S=await ie()}catch(e){console.warn("Failed to load inbox unread count",e)}const le=he({currentApp:"inbox",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:re,userRole:b,isAdmin:f,hasMailboxAccess:k,unreadInboxCount:S});R.appendChild(le),await ve({root:a,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let d="",v="",g=0,h=[];const w=new Set,_=ye(),ce=_.includes("@")?_.slice(0,_.indexOf("@")).trim().toLowerCase():"",K=new URLSearchParams(window.location.search).get("mailbox")?.trim().toLowerCase();let m=K&&/^[a-z0-9._+-]{1,64}$/.test(K)?K:ce;const oe=e=>{const t=Math.max(0,Math.floor(e)),o=Array.from(R.querySelectorAll(".app-selector-btn")).find(l=>l.textContent?.trim().startsWith("Inbox"));if(!o)return;const i=o.querySelector(".app-selector-badge");if(t<=0){i?.remove(),o.setAttribute("aria-label","Switch to Inbox");return}const u=i??document.createElement("span");u.className="app-selector-badge",u.setAttribute("aria-hidden","true"),u.textContent=t>99?"99+":String(t),i||o.appendChild(u),o.setAttribute("aria-label",`Switch to Inbox (${t} unread)`)},T=async()=>{if(!k){S=0,oe(0);return}try{S=await ie(),oe(S)}catch(e){console.warn("Failed to refresh inbox unread count",e)}},A=()=>{m&&w.add(m);const e=Array.from(w).filter(t=>!!t).sort((t,o)=>t.localeCompare(o));x.innerHTML="";for(const t of e){const o=document.createElement("option");o.value=t,o.textContent=t,x.appendChild(o)}m?x.value=m:e[0]&&(x.value=e[0],m=e[0])},Q=()=>{J.textContent=f&&m?`Inbox (${m})`:"Inbox"},de=()=>{if(!f)return;const e=x.value.trim().toLowerCase();if(!e){r(s,"Mailbox local-part is required.","info");return}if(!/^[a-z0-9._+-]{1,64}$/.test(e)){r(s,"Mailbox must use letters, numbers, dot, underscore, plus, or hyphen.","info");return}m=e,w.add(e),A(),Q(),d="",g+=1,L(),X()},L=()=>{$.textContent="",D.textContent="",z.textContent="",p.hidden=!0,p.innerHTML="",U.hidden=!0,y.hidden=!0,v=""},me=e=>{if(p.innerHTML="",!Array.isArray(e)||e.length===0){p.hidden=!0;return}const t=document.createElement("h4");t.className="mailbox-attachments-title",t.textContent="Attachments",p.appendChild(t);const o=document.createElement("div");o.className="mailbox-attachments-list",e.forEach((i,u)=>{const l=document.createElement("div");l.className="mailbox-attachment-card";const M=document.createElement("div");M.className="mailbox-attachment-name",M.textContent=i.filename||`attachment-${u+1}${i.type?.startsWith("image/")?".image":""}`,l.appendChild(M);const N=document.createElement("div");N.className="mailbox-attachment-meta";const F=Number.isFinite(i.size)?`${Math.max(1,Math.round(i.size/1024))} KB`:"unknown size";N.textContent=`${i.type||"application/octet-stream"} · ${F}`,l.appendChild(N);const c=typeof i.inlineDataUrl=="string"&&i.inlineDataUrl.trim()?i.inlineDataUrl.trim():"";if(c&&i.type.startsWith("image/")){const n=document.createElement("img");n.className="mailbox-attachment-image",n.src=c,n.alt=i.filename||"Attachment image",l.appendChild(n)}else if(c&&i.type.startsWith("video/")){const n=document.createElement("video");n.className="mailbox-attachment-video",n.src=c,n.controls=!0,n.preload="metadata",n.playsInline=!0,l.appendChild(n)}o.appendChild(l)}),p.appendChild(o),p.hidden=!1},C=()=>{if(I.innerHTML="",h.length===0){I.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}h.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="mailbox-item",e.read||t.classList.add("is-unread"),e.emailId===d&&t.classList.add("is-active");const o=document.createElement("div");o.className="mailbox-item-from",o.textContent=e.from||"(unknown sender)";const i=document.createElement("div");i.className="mailbox-item-subject",i.textContent=ne(e.subject||"(no subject)");const u=document.createElement("div");u.className="mailbox-item-time",u.textContent=se(e.timestamp);const l=document.createElement("span");l.className="mailbox-item-delete",l.textContent="🗑",l.title="Delete email permanently",l.setAttribute("aria-label","Delete email permanently"),l.setAttribute("data-email-id",e.emailId),t.appendChild(o),t.appendChild(i),t.appendChild(u),t.appendChild(l),t.addEventListener("click",async M=>{if(M.target?.closest(".mailbox-item-delete")){if(!window.confirm("Delete this email permanently from mailbox storage?"))return;try{await Me(e.emailId),h=h.filter(n=>n.emailId!==e.emailId),d===e.emailId&&(d="",g+=1,L()),C(),T(),r(s,"Email deleted.","success")}catch(n){const E=n instanceof Error?n.message:"Failed to delete email";r(s,E,"error")}return}d=e.emailId,g+=1;const F=g;C();try{const c=await Ee(e.emailId);if(F!==g||d!==e.emailId)return;if($.textContent=ne(c.subject||"(no subject)"),D.textContent=`From ${c.from} | ${se(c.timestamp)}`,z.textContent=c.text||"",me(c.attachments||[]),U.hidden=!1,f){const n=Fe(c.subject||"");if(n)try{const E=await Be(n);v=n,H.value=E.bug.status,O.value=typeof E.bug.statusComment=="string"?E.bug.statusComment:"",y.hidden=!1}catch{v="",y.hidden=!0}else v="",y.hidden=!0}e.read||(await ke(e.emailId),e.read=!0,C(),T())}catch(c){if(F!==g||d!==e.emailId)return;L();const n=c instanceof Error?c.message:"Failed to load email";r(s,n,"error")}}),I.appendChild(t)})},X=async()=>{r(s,"","info");try{const e=await Ce({limit:50,mailbox:f?m:void 0});f&&e.mailbox&&e.mailbox!==m&&(m=e.mailbox,x.value=e.mailbox),e.mailbox&&w.add(e.mailbox),A(),Q(),h=e.emails,h.find(t=>t.emailId===d)||(d="",g+=1,L()),C()}catch(e){const t=e instanceof Error?e.message:"Failed to load mailbox";r(s,t,"error")}};if(Z.addEventListener("click",()=>{X()}),x.addEventListener("change",()=>{de()}),ee.addEventListener("click",async()=>{if(d)try{await Ie(d);const e=h.find(t=>t.emailId===d);e&&(e.read=!1),C(),T(),r(s,"Marked unread.","success")}catch(e){const t=e instanceof Error?e.message:"Failed to mark unread";r(s,t,"error")}}),q.addEventListener("click",async()=>{if(!f||!v)return;const e=H.value;q.disabled=!0;try{await qe(v,e,O.value.trim()),r(s,"Bug status updated.","success")}catch(t){const o=t instanceof Y||t instanceof Error?t.message:"Failed to update bug status";r(s,o,"error")}finally{q.disabled=!1}}),te.addEventListener("click",async()=>{if(!d){r(s,"Select an email first.","info");return}const e=W.value.trim();if(!e){r(s,"Reply text is required.","info");return}try{await Te(d,{text:e}),W.value="",r(s,"Reply sent.","success")}catch(t){const o=t instanceof Y||t instanceof Error?t.message:"Failed to send reply";r(s,o,"error")}}),ae.addEventListener("click",async()=>{const e=P.value.trim(),t=V.value.trim(),o=G.value.trim();if(!e||!t||!o){r(s,"To, subject and message are required.","info");return}try{await Se({to:e,subject:t,text:o}),P.value="",V.value="",G.value="",r(s,"Email sent.","success")}catch(i){const u=i instanceof Y||i instanceof Error?i.message:"Failed to send email";r(s,u,"error")}}),!await Ae()){Le(),window.location.href="/auth";return}if(f){j.hidden=!1,m&&(x.value=m),A();try{const e=await we();for(const t of e.mailboxes||[]){const o=t.trim().toLowerCase();o&&w.add(o)}A()}catch(e){console.warn("Failed to load mailbox directory",e),r(s,"Could not load mailbox directory. You can still type a mailbox local-part and click View.","info")}}else j.hidden=!0;Q(),X(),T()};export{$e as mountMailboxPage};
