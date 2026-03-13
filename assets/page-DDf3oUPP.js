import{t as me,s as he,b as ve,m as ge,e as be,j as ye,n as Ce,k as Se,o as De,B as $e,_ as we,a5 as xe,a1 as Le,a6 as qe}from"./UserMenu-CZaOT_D2.js";import{g as Ee,s as ke}from"./authSession-Nj2lIJ_w.js";const Q=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Re=()=>`
  <div class="app issues-page">
    <div id="issuesAppBarContainer"></div>
    <main class="issues-layout">
      <section class="issues-sidebar">
        <header class="issues-sidebar-header">
          <div class="issues-sidebar-heading">
            <h2>Issues</h2>
            <p id="issuesEnvironmentLabel" class="issues-environment-label"></p>
          </div>
          <button
            id="issuesRefreshBtn"
            class="issues-refresh-btn"
            type="button"
            aria-label="Refresh issues"
            title="Refresh issues"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M21 2v6h-6"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M3 11a9 9 0 0 1 15.55-5.36L21 8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M3 22v-6h6"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M21 13a9 9 0 0 1-15.55 5.36L3 16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </header>
        <div class="issues-filter-grid">
          <label class="issues-field">
            <input id="issuesSearchInput" type="search" placeholder="Search title, description, reporter" aria-label="Search issues" />
          </label>
          <label class="issues-field">
            <select id="issuesStateFilter" aria-label="Filter by state">
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="all">All</option>
            </select>
          </label>
          <label class="issues-field">
            <select id="issuesStatusFilter" aria-label="Filter by status">
              <option value="">Any status</option>
              ${Q.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
            <div class="issues-section-header">
              <h4>Failed requests</h4>
              <span id="issuesDetailHttpFailureCount" class="issues-section-caption"></span>
            </div>
            <div id="issuesDetailHttpFailures" class="issues-telemetry-list"></div>
          </section>

          <section class="issues-section">
            <div class="issues-section-header">
              <h4>Console logs</h4>
              <span id="issuesDetailConsoleLogCount" class="issues-section-caption"></span>
            </div>
            <div id="issuesDetailConsoleLogs" class="issues-telemetry-list"></div>
          </section>

          <section class="issues-section">
            <div class="issues-section-header">
              <h4>Recent UI events</h4>
              <span id="issuesDetailUiEventCount" class="issues-section-caption"></span>
            </div>
            <div id="issuesDetailUiEvents" class="issues-telemetry-list"></div>
          </section>

          <section class="issues-section">
            <h4>Status</h4>
            <div class="issues-status-editor">
              <label class="issues-field">
                <span>Status</span>
                <select id="issuesDetailStatusSelect">
                  ${Q.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
`,D=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},de=e=>e==="resolved"||e==="duplicate"||e==="wont-fix",pe=e=>Q.find(n=>n.value===e)?.label||e,Ie=e=>e.trim().toLowerCase(),Ae=()=>{switch($e()){case"test":return"DEV";case"beta":return"STG";case"prod":return"PRD";case"local":return"DEV";default:return"DEV"}},g=(e,n,o)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=o},l=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),b=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},G=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},z=e=>e?D(e):"Unknown time",O=(e,n)=>e.length>0?e.map(o=>`
            <div class="issues-telemetry-item">
              <pre>${l(o)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${l(n)}</div>`,Fe=e=>{const o=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:D(e.createdAt)},{label:"Updated",value:D(e.updatedAt)},{label:"Path",value:b(o.path)},{label:"URL",value:b(o.url)},{label:"Frontend",value:b(o.frontendDetails)},{label:"Backend",value:b(o.backendDetails)},{label:"Version",value:b(o.versionIndicator)},{label:"Likely area",value:b(e.likelyArea)},{label:"Viewport",value:b(o.viewport)},{label:"Device",value:b(o.deviceInfo)}]},Te=e=>{const n=G(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(i=>{const p=typeof i.transport=="string"?i.transport:"?",f=typeof i.method=="string"?i.method:"GET",d=typeof i.url=="string"?i.url:"(unknown)",m=typeof i.status=="number"&&Number.isFinite(i.status)?` -> ${i.status}`:"",c=typeof i.error=="string"&&i.error.trim()?` (${i.error.trim()})`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${p.toUpperCase()} ${f.toUpperCase()} ${d}${m}${c}`})},Be=e=>{const n=G(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(i=>{const p=typeof i.level=="string"?i.level.toUpperCase():"LOG",f=typeof i.message=="string"?i.message:"",d=typeof i.count=="number"&&Number.isFinite(i.count)?i.count:1,m=d>1?` (x${d})`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${p}${m}
${f}`.trim()})},Ue=e=>{const n=G(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(i=>{const p=typeof i.type=="string"?i.type:"event",f=typeof i.target=="string"?i.target:"unknown",d=typeof i.detail=="string"&&i.detail.trim()?` · ${i.detail.trim()}`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${p} · ${f}${d}`})},Me=e=>{const n=e.kind==="video",o=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${l(o)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${l(o)}</strong>
        <span>${l(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},je=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=me().map(s=>s.trim().toLowerCase()),o=n.includes("admin");if(!o){window.location.href="/whiteboard";return}const i=he(),p=n.includes("mailbox");e.innerHTML=Re(),e.appendChild(ve()),ge(),be();const f=e.querySelector("#issuesAppBarContainer"),d=e.querySelector("#issuesEnvironmentLabel"),m=e.querySelector("#issuesRefreshBtn"),c=e.querySelector("#issuesListStatus"),P=e.querySelector("#issuesListSummary"),$=e.querySelector("#issuesList"),q=e.querySelector("#issuesSearchInput"),E=e.querySelector("#issuesStateFilter"),k=e.querySelector("#issuesStatusFilter"),R=e.querySelector("#issuesDetailEmpty"),I=e.querySelector("#issuesDetailCard"),_=e.querySelector("#issuesDetailMeta"),W=e.querySelector("#issuesDetailTitle"),A=e.querySelector("#issuesDetailStatusBadge"),J=e.querySelector("#issuesDetailReporter"),K=e.querySelector("#issuesDetailDescription"),X=e.querySelector("#issuesDetailClarification"),Y=e.querySelector("#issuesDetailClarificationQuestion"),F=e.querySelector("#issuesDetailClarificationResponse"),Z=e.querySelector("#issuesDetailAttachmentCount"),ee=e.querySelector("#issuesDetailAttachments"),se=e.querySelector("#issuesDetailContext"),te=e.querySelector("#issuesDetailHttpFailureCount"),ie=e.querySelector("#issuesDetailHttpFailures"),ae=e.querySelector("#issuesDetailConsoleLogCount"),ne=e.querySelector("#issuesDetailConsoleLogs"),oe=e.querySelector("#issuesDetailUiEventCount"),re=e.querySelector("#issuesDetailUiEvents"),T=e.querySelector("#issuesDetailStatusSelect"),B=e.querySelector("#issuesDetailStatusNote"),w=e.querySelector("#issuesSaveBtn");if(!f||!d||!m||!c||!P||!$||!q||!E||!k||!R||!I||!_||!W||!A||!J||!K||!X||!Y||!F||!Z||!ee||!se||!te||!ie||!ae||!ne||!oe||!re||!T||!B||!w)throw new Error("Issues page failed to mount");d.textContent=Ae();let le=0;if(p)try{le=await ye()}catch(s){console.warn("Failed to load unread inbox count for issues page",s)}const fe=Ce({currentApp:"issues",onAppChange:s=>{if(s==="whiteboard"){window.location.href="/whiteboard/";return}if(s==="activity"){window.location.href="/activity/";return}if(s==="inbox"){window.location.href="/mailbox/";return}if(s==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(s==="notes"){window.location.href="/notes/";return}if(s==="user-management"){window.location.href="/user-management/";return}s==="profile"&&(window.location.href="/profile/")},userRole:i,isAdmin:o,hasMailboxAccess:p,unreadInboxCount:le,rightContent:Se()});f.appendChild(fe),await De({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{ke(),window.location.href="/auth"}});let C=[],r="",a=null;const h={query:"",state:"open",status:""},U=()=>{const s=Ie(h.query);return C.filter(t=>h.state==="open"&&de(t.status)||h.state==="closed"&&!de(t.status)||h.status&&t.status!==h.status?!1:s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0)},y=()=>{const s=U();if(P.textContent=`${s.length} issue${s.length===1?"":"s"} shown`,s.length===0){$.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}$.innerHTML=s.map(t=>{const u=t.bugId===r?" is-active":"",v=t.reporterEmail?`<span class="issues-list-item-reporter">${l(t.reporterEmail)}</span>`:"";return`
          <button type="button" class="issues-list-item${u}" data-bug-id="${t.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${t.status}"></span>
              <strong>${l(t.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${l(t.humanReference||t.bugId)}</span>
              <span>${l(pe(t.status))}</span>
              <span>${l(D(t.updatedAt))}</span>
            </div>
            ${v}
          </button>
        `}).join("")},S=()=>{if(!a){I.hidden=!0,R.hidden=!1;return}R.hidden=!0,I.hidden=!1,_.textContent=`${a.humanReference||a.bugId} · Created ${D(a.createdAt)} · Updated ${D(a.updatedAt)}`,W.textContent=a.summary?.trim()||"Issue",A.textContent=pe(a.status),A.dataset.status=a.status,J.textContent=`${a.reporterDisplayName} · ${a.reporterEmail}`,K.textContent=a.description||"No description.";const s=typeof a.clarificationQuestion=="string"?a.clarificationQuestion.trim():"",t=typeof a.statusComment=="string"?a.statusComment.trim():"",u=s||(a.status==="require-clarification"?t||"Clarification requested.":"");X.hidden=!u,Y.textContent=u;const v=typeof a.clarificationResponse=="string"&&a.clarificationResponse.trim()?a.clarificationResponse.trim():"";F.hidden=!v,F.textContent=v;const x=Array.isArray(a.attachments)?a.attachments:[];Z.textContent=`${x.length} file${x.length===1?"":"s"}`,ee.innerHTML=x.length>0?x.map(L=>Me(L)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',se.innerHTML=Fe(a).map(L=>`
          <div class="issues-context-item">
            <span>${l(L.label)}</span>
            <strong>${l(L.value)}</strong>
          </div>
        `).join("");const N=Te(a);te.textContent=`${N.length} item${N.length===1?"":"s"}`,ie.innerHTML=O(N,"No failed requests captured for this issue.");const j=Be(a);ae.textContent=`${j.length} item${j.length===1?"":"s"}`,ne.innerHTML=O(j,"No console logs captured for this issue.");const V=Ue(a);oe.textContent=`${V.length} item${V.length===1?"":"s"}`,re.innerHTML=O(V,"No recent UI events captured for this issue."),T.value=a.status,B.value=typeof a.statusComment=="string"?a.statusComment:""},M=async s=>{r=s,a=null,y(),S(),g(c,"Loading issue details…","info");try{a=(await we(s)).bug,g(c,"","success")}catch(t){r="";const u=t instanceof Error?t.message:"Failed to load issue details";g(c,u,"error")}y(),S()},H=async()=>{const s=U();if(s.some(u=>u.bugId===r)){y();return}if(r=s[0]?.bugId||"",!r){a=null,y(),S();return}await M(r)},ce=async()=>{m.disabled=!0,g(c,"Loading issues…","info");try{C=(await xe()).bugs||[],g(c,"","success"),(!r||!C.some(t=>t.bugId===r))&&(r=U()[0]?.bugId||""),y(),r?await M(r):(a=null,S())}catch(s){C=[],r="",a=null,y(),S();const t=s instanceof Error?s.message:"Failed to load issues";g(c,t,"error")}finally{m.disabled=!1}};$.addEventListener("click",s=>{const v=s.target?.closest("[data-bug-id]")?.dataset.bugId;!v||v===r||M(v)}),q.addEventListener("input",()=>{h.query=q.value,H()}),E.addEventListener("change",()=>{h.state=E.value,H()}),k.addEventListener("change",()=>{h.status=k.value||"",H()}),m.addEventListener("click",()=>{ce()}),w.addEventListener("click",async()=>{if(r){w.disabled=!0;try{const s=await Le(r,T.value,B.value.trim());a=s.bug,C=C.map(t=>t.bugId===r?{...t,status:s.bug.status,statusComment:typeof s.bug.statusComment=="string"?s.bug.statusComment:t.statusComment,updatedAt:typeof s.bug.updatedAt=="string"?s.bug.updatedAt:t.updatedAt,clarificationQuestion:typeof s.bug.clarificationQuestion=="string"?s.bug.clarificationQuestion:t.clarificationQuestion,clarificationResponse:typeof s.bug.clarificationResponse=="string"?s.bug.clarificationResponse:t.clarificationResponse}:t),y(),S(),qe(),g(c,"Issue updated.","success")}catch(s){const t=s instanceof Error?s.message:"Failed to update issue";g(c,t,"error")}finally{w.disabled=!1}}});const ue=await Ee().catch(()=>null);if(!ue||!ue.isValid()){window.location.href="/auth";return}await ce()};export{je as mountIssuesPage};
