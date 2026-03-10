import{p as te,o as ie,b as ae,m as ne,e as re,i as oe,k as le,j as ce,l as ue,x as de,Z as pe,a4 as fe,a0 as me}from"./UserMenu-CvLCxBnn.js";import{g as ve,s as he}from"./authSession-8qB2aCvc.js";const F=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],ye=()=>`
  <div class="app issues-page">
    <div id="issuesAppBarContainer"></div>
    <main class="issues-layout">
      <section class="issues-sidebar">
        <header class="issues-sidebar-header">
          <div>
            <p class="issues-eyebrow">Admin</p>
            <h2>Issues</h2>
            <p id="issuesEnvironmentLabel" class="issues-environment-label"></p>
          </div>
          <button id="issuesRefreshBtn" class="issues-refresh-btn" type="button">Refresh</button>
        </header>
        <div class="issues-filter-grid">
          <label class="issues-field">
            <span>Search</span>
            <input id="issuesSearchInput" type="search" placeholder="Search title, description, reporter" />
          </label>
          <label class="issues-field">
            <span>State</span>
            <select id="issuesStateFilter">
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="all">All</option>
            </select>
          </label>
          <label class="issues-field">
            <span>Status</span>
            <select id="issuesStatusFilter">
              <option value="">Any status</option>
              ${F.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
            </select>
          </label>
        </div>
        <div id="issuesListStatus" class="issues-list-status" hidden></div>
        <div id="issuesListSummary" class="issues-list-summary">Loading issues…</div>
        <div id="issuesList" class="issues-list" role="listbox" aria-label="Issues"></div>
      </section>

      <section class="issues-detail">
        <div id="issuesDetailEmpty" class="issues-empty-state">
          <h3>Select an issue</h3>
          <p>Choose an issue from this environment to inspect media, context, and status.</p>
        </div>
        <article id="issuesDetailCard" class="issues-detail-card" hidden>
          <header class="issues-detail-header">
            <div>
              <div id="issuesDetailMeta" class="issues-detail-meta"></div>
              <h3 id="issuesDetailTitle"></h3>
            </div>
            <span id="issuesDetailStatusBadge" class="issues-status-badge"></span>
          </header>

          <div id="issuesDetailReporter" class="issues-detail-reporter"></div>
          <div id="issuesDetailDescription" class="issues-detail-description"></div>

          <section id="issuesDetailClarification" class="issues-section" hidden>
            <h4>Clarification</h4>
            <div id="issuesDetailClarificationQuestion" class="issues-callout"></div>
            <div id="issuesDetailClarificationResponse" class="issues-callout issues-callout-response" hidden></div>
          </section>

          <section class="issues-section">
            <div class="issues-section-header">
              <h4>Attachments</h4>
              <span id="issuesDetailAttachmentCount" class="issues-section-caption"></span>
            </div>
            <div id="issuesDetailAttachments" class="issues-attachments"></div>
          </section>

          <section class="issues-section">
            <h4>Context</h4>
            <div id="issuesDetailContext" class="issues-context-grid"></div>
          </section>

          <section class="issues-section">
            <h4>Status</h4>
            <div class="issues-status-editor">
              <label class="issues-field">
                <span>Status</span>
                <select id="issuesDetailStatusSelect">
                  ${F.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
                </select>
              </label>
              <label class="issues-field issues-field-note">
                <span>Note</span>
                <textarea id="issuesDetailStatusNote" rows="3" placeholder="Optional admin note"></textarea>
              </label>
            </div>
            <div class="issues-detail-actions">
              <button id="issuesSaveBtn" class="issues-save-btn" type="button">Save status</button>
            </div>
          </section>
        </article>
      </section>
    </main>
  </div>
`,y=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},Y=e=>e==="resolved"||e==="duplicate"||e==="wont-fix",ee=e=>F.find(n=>n.value===e)?.label||e,be=e=>e.trim().toLowerCase(),ge=()=>{switch(de()){case"test":return"Test environment";case"beta":return"Beta environment";case"prod":return"Production environment";case"local":return"Local environment";default:return"Current environment"}},p=(e,n,r)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=r},l=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),h=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},Se=e=>{const r=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Bug ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:y(e.createdAt)},{label:"Updated",value:y(e.updatedAt)},{label:"Path",value:h(r.path)},{label:"URL",value:h(r.url)},{label:"Frontend",value:h(r.frontendDetails)},{label:"Backend",value:h(r.backendDetails)},{label:"Version",value:h(r.versionIndicator)},{label:"Likely area",value:h(e.likelyArea)}]},Ce=e=>{const n=e.kind==="video",r=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${l(r)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${l(r)}</strong>
        <span>${l(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},De=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=te().map(s=>s.trim().toLowerCase()),r=n.includes("admin");if(!r){window.location.href="/whiteboard";return}const M=ie(),N=n.includes("mailbox");e.innerHTML=ye(),e.appendChild(ae()),ne(),re();const U=e.querySelector("#issuesAppBarContainer"),O=e.querySelector("#issuesEnvironmentLabel"),b=e.querySelector("#issuesRefreshBtn"),c=e.querySelector("#issuesListStatus"),Q=e.querySelector("#issuesListSummary"),g=e.querySelector("#issuesList"),x=e.querySelector("#issuesSearchInput"),D=e.querySelector("#issuesStateFilter"),q=e.querySelector("#issuesStatusFilter"),L=e.querySelector("#issuesDetailEmpty"),$=e.querySelector("#issuesDetailCard"),j=e.querySelector("#issuesDetailMeta"),H=e.querySelector("#issuesDetailTitle"),B=e.querySelector("#issuesDetailStatusBadge"),V=e.querySelector("#issuesDetailReporter"),P=e.querySelector("#issuesDetailDescription"),z=e.querySelector("#issuesDetailClarification"),G=e.querySelector("#issuesDetailClarificationQuestion"),I=e.querySelector("#issuesDetailClarificationResponse"),_=e.querySelector("#issuesDetailAttachmentCount"),W=e.querySelector("#issuesDetailAttachments"),J=e.querySelector("#issuesDetailContext"),R=e.querySelector("#issuesDetailStatusSelect"),A=e.querySelector("#issuesDetailStatusNote"),S=e.querySelector("#issuesSaveBtn");if(!U||!O||!b||!c||!Q||!g||!x||!D||!q||!L||!$||!j||!H||!B||!V||!P||!z||!G||!I||!_||!W||!J||!R||!A||!S)throw new Error("Issues page failed to mount");O.textContent=ge();let Z=0;if(N)try{Z=await oe()}catch(s){console.warn("Failed to load unread inbox count for issues page",s)}const se=le({currentApp:"issues",onAppChange:s=>{if(s==="whiteboard"){window.location.href="/whiteboard/";return}if(s==="activity"){window.location.href="/activity/";return}if(s==="inbox"){window.location.href="/mailbox/";return}if(s==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(s==="notes"){window.location.href="/notes/";return}if(s==="user-management"){window.location.href="/user-management/";return}s==="profile"&&(window.location.href="/profile/")},userRole:M,isAdmin:r,hasMailboxAccess:N,unreadInboxCount:Z,rightContent:ce()});U.appendChild(se),await ue({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{he(),window.location.href="/auth"}});let m=[],a="",i=null;const u={query:"",state:"open",status:""},E=()=>{const s=be(u.query);return m.filter(t=>u.state==="open"&&Y(t.status)||u.state==="closed"&&!Y(t.status)||u.status&&t.status!==u.status?!1:s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0)},f=()=>{const s=E();if(Q.textContent=`${s.length} issue${s.length===1?"":"s"} shown`,s.length===0){g.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}g.innerHTML=s.map(t=>{const o=t.bugId===a?" is-active":"",d=t.reporterEmail?`<span class="issues-list-item-reporter">${l(t.reporterEmail)}</span>`:"";return`
          <button type="button" class="issues-list-item${o}" data-bug-id="${t.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${t.status}"></span>
              <strong>${l(t.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${l(t.humanReference||t.bugId)}</span>
              <span>${l(ee(t.status))}</span>
              <span>${l(y(t.updatedAt))}</span>
            </div>
            ${d}
          </button>
        `}).join("")},v=()=>{if(!i){$.hidden=!0,L.hidden=!1;return}L.hidden=!0,$.hidden=!1,j.textContent=`${i.humanReference||i.bugId} · Created ${y(i.createdAt)} · Updated ${y(i.updatedAt)}`,H.textContent=i.summary?.trim()||"Bug report",B.textContent=ee(i.status),B.dataset.status=i.status,V.textContent=`${i.reporterDisplayName} · ${i.reporterEmail}`,P.textContent=i.description||"No description.";const s=typeof i.clarificationQuestion=="string"?i.clarificationQuestion.trim():"",t=typeof i.statusComment=="string"?i.statusComment.trim():"",o=s||(i.status==="require-clarification"?t||"Clarification requested.":"");z.hidden=!o,G.textContent=o;const d=typeof i.clarificationResponse=="string"&&i.clarificationResponse.trim()?i.clarificationResponse.trim():"";I.hidden=!d,I.textContent=d;const C=Array.isArray(i.attachments)?i.attachments:[];_.textContent=`${C.length} file${C.length===1?"":"s"}`,W.innerHTML=C.length>0?C.map(w=>Ce(w)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',J.innerHTML=Se(i).map(w=>`
          <div class="issues-context-item">
            <span>${l(w.label)}</span>
            <strong>${l(w.value)}</strong>
          </div>
        `).join(""),R.value=i.status,A.value=typeof i.statusComment=="string"?i.statusComment:""},T=async s=>{a=s,i=null,f(),v(),p(c,"Loading issue details…","info");try{i=(await pe(s)).bug,p(c,"","success")}catch(t){a="";const o=t instanceof Error?t.message:"Failed to load issue details";p(c,o,"error")}f(),v()},k=async()=>{const s=E();if(s.some(o=>o.bugId===a)){f();return}if(a=s[0]?.bugId||"",!a){i=null,f(),v();return}await T(a)},K=async()=>{b.disabled=!0,p(c,"Loading issues…","info");try{m=(await fe()).bugs||[],p(c,"","success"),(!a||!m.some(t=>t.bugId===a))&&(a=E()[0]?.bugId||""),f(),a?await T(a):(i=null,v())}catch(s){m=[],a="",i=null,f(),v();const t=s instanceof Error?s.message:"Failed to load issues";p(c,t,"error")}finally{b.disabled=!1}};g.addEventListener("click",s=>{const d=s.target?.closest("[data-bug-id]")?.dataset.bugId;!d||d===a||T(d)}),x.addEventListener("input",()=>{u.query=x.value,k()}),D.addEventListener("change",()=>{u.state=D.value,k()}),q.addEventListener("change",()=>{u.status=q.value||"",k()}),b.addEventListener("click",()=>{K()}),S.addEventListener("click",async()=>{if(a){S.disabled=!0;try{const s=await me(a,R.value,A.value.trim());i=s.bug,m=m.map(t=>t.bugId===a?{...t,status:s.bug.status,statusComment:typeof s.bug.statusComment=="string"?s.bug.statusComment:t.statusComment,updatedAt:typeof s.bug.updatedAt=="string"?s.bug.updatedAt:t.updatedAt,clarificationQuestion:typeof s.bug.clarificationQuestion=="string"?s.bug.clarificationQuestion:t.clarificationQuestion,clarificationResponse:typeof s.bug.clarificationResponse=="string"?s.bug.clarificationResponse:t.clarificationResponse}:t),f(),v(),p(c,"Issue updated.","success")}catch(s){const t=s instanceof Error?s.message:"Failed to update issue";p(c,t,"error")}finally{S.disabled=!1}}});const X=await ve().catch(()=>null);if(!X||!X.isValid()){window.location.href="/auth";return}await K()};export{De as mountIssuesPage};
