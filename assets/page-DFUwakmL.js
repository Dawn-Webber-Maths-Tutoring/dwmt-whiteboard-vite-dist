import{u as ye,t as be,b as Ce,m as Se,e as $e,k as we,o as De,n as xe,p as qe,i as Ee,a0 as Le,a7 as ke,a3 as Re,a8 as de,a9 as Ae}from"./UserMenu-Bj1YS3xO.js";import{g as Ie,s as Be}from"./authSession-8_kqKGyk.js";const fe=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Fe=()=>`
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
          <div class="issues-field">
            <span class="issues-field-label">Status</span>
            <div id="issuesStatusFilterChips" class="issues-filter-chips" role="group" aria-label="Filter by status">
              <button type="button" class="issues-filter-chip is-active" data-filter-value="all">All <span class="issues-filter-chip-count">0</span></button>
              <button type="button" class="issues-filter-chip" data-filter-value="open">Open <span class="issues-filter-chip-count">0</span></button>
              <button type="button" class="issues-filter-chip" data-filter-value="in-progress">In Progress <span class="issues-filter-chip-count">0</span></button>
              <button type="button" class="issues-filter-chip" data-filter-value="require-clarification">Needs Clarification <span class="issues-filter-chip-count">0</span></button>
              <button type="button" class="issues-filter-chip" data-filter-value="testing-bucket">Testing <span class="issues-filter-chip-count">0</span></button>
              <button type="button" class="issues-filter-chip" data-filter-value="resolved">Resolved <span class="issues-filter-chip-count">0</span></button>
              <button type="button" class="issues-filter-chip" data-filter-value="closed-other">Closed Other <span class="issues-filter-chip-count">0</span></button>
            </div>
          </div>
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
                  ${fe.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
                </select>
              </label>
              <label class="issues-field issues-field-note">
                <span>Note</span>
                <textarea id="issuesDetailStatusNote" rows="3" placeholder="Optional admin note"></textarea>
              </label>
            </div>
            <div class="issues-detail-actions">
              <button id="issuesRetryAutomationBtn" class="issues-retry-btn" type="button">Retry automation</button>
              <button id="issuesSaveBtn" class="issues-save-btn" type="button">Save status</button>
            </div>
          </section>
        </article>
      </section>
    </main>
  </div>
`,q=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},pe=e=>fe.find(n=>n.value===e)?.label||e,me=e=>e.trim().toLowerCase(),Te=()=>{switch(Ee()){case"test":return"DEV";case"beta":return"STG";case"prod":return"PRD";case"local":return"DEV";default:return"DEV"}},m=(e,n,o)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=o},u=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),d=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},O=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},V=e=>e?q(e):"Unknown time",j=(e,n)=>e.length>0?e.map(o=>`
            <div class="issues-telemetry-item">
              <pre>${u(o)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${u(n)}</div>`,Ue=e=>{const o=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:q(e.createdAt)},{label:"Updated",value:q(e.updatedAt)},{label:"Path",value:d(o.path)},{label:"URL",value:d(o.url)},{label:"Frontend",value:d(o.frontendDetails)},{label:"Backend",value:d(o.backendDetails)},{label:"Version",value:d(o.versionIndicator)},{label:"Reported env",value:d(e.reportedEnvironment)},{label:"Reported frontend rev",value:d(e.reportedFrontendCommit)},{label:"Reported backend rev",value:d(e.reportedBackendCommit)},{label:"Likely area",value:d(e.likelyArea)},{label:"Implementation status",value:d(e.implementationStatus)},{label:"Implementation summary",value:d(e.implementationSummary),className:"issues-context-item-wide"},{label:"Viewport",value:d(o.viewport)},{label:"Device",value:d(o.deviceInfo)}]},Me=e=>{const n=O(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(a=>{const v=typeof a.transport=="string"?a.transport:"?",g=typeof a.method=="string"?a.method:"GET",f=typeof a.url=="string"?a.url:"(unknown)",y=typeof a.status=="number"&&Number.isFinite(a.status)?` -> ${a.status}`:"",c=typeof a.error=="string"&&a.error.trim()?` (${a.error.trim()})`:"";return`${V(typeof a.ts=="string"?a.ts:void 0)} · ${v.toUpperCase()} ${g.toUpperCase()} ${f}${y}${c}`})},Ne=e=>{const n=O(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(a=>{const v=typeof a.level=="string"?a.level.toUpperCase():"LOG",g=typeof a.message=="string"?a.message:"",f=typeof a.count=="number"&&Number.isFinite(a.count)?a.count:1,y=f>1?` (x${f})`:"";return`${V(typeof a.ts=="string"?a.ts:void 0)} · ${v}${y}
${g}`.trim()})},He=e=>{const n=O(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(a=>{const v=typeof a.type=="string"?a.type:"event",g=typeof a.target=="string"?a.target:"unknown",f=typeof a.detail=="string"&&a.detail.trim()?` · ${a.detail.trim()}`:"";return`${V(typeof a.ts=="string"?a.ts:void 0)} · ${v} · ${g}${f}`})},Qe=e=>{const n=e.kind==="video",o=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${u(o)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${u(o)}</strong>
        <span>${u(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},Ve=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=ye().map(t=>t.trim().toLowerCase()),o=n.includes("admin");if(!o){window.location.href="/whiteboard";return}const a=be(),v=n.includes("mailbox");e.innerHTML=Fe(),e.appendChild(Ce()),Se(),$e();const g=e.querySelector("#issuesAppBarContainer"),f=e.querySelector("#issuesEnvironmentLabel"),y=e.querySelector("#issuesRefreshBtn"),c=e.querySelector("#issuesListStatus"),G=e.querySelector("#issuesListSummary"),L=e.querySelector("#issuesList"),k=e.querySelector("#issuesSearchInput"),R=e.querySelector("#issuesStatusFilterChips"),A=e.querySelector("#issuesDetailEmpty"),I=e.querySelector("#issuesDetailCard"),P=e.querySelector("#issuesDetailMeta"),z=e.querySelector("#issuesDetailTitle"),B=e.querySelector("#issuesDetailStatusBadge"),_=e.querySelector("#issuesDetailReporter"),W=e.querySelector("#issuesDetailDescription"),J=e.querySelector("#issuesDetailClarification"),K=e.querySelector("#issuesDetailClarificationQuestion"),F=e.querySelector("#issuesDetailClarificationResponse"),X=e.querySelector("#issuesDetailAttachmentCount"),Y=e.querySelector("#issuesDetailAttachments"),Z=e.querySelector("#issuesDetailContext"),ee=e.querySelector("#issuesDetailHttpFailureCount"),te=e.querySelector("#issuesDetailHttpFailures"),se=e.querySelector("#issuesDetailConsoleLogCount"),ie=e.querySelector("#issuesDetailConsoleLogs"),ae=e.querySelector("#issuesDetailUiEventCount"),ne=e.querySelector("#issuesDetailUiEvents"),T=e.querySelector("#issuesDetailStatusSelect"),U=e.querySelector("#issuesDetailStatusNote"),w=e.querySelector("#issuesRetryAutomationBtn"),D=e.querySelector("#issuesSaveBtn");if(!g||!f||!y||!c||!G||!L||!k||!R||!A||!I||!P||!z||!B||!_||!W||!J||!K||!F||!X||!Y||!Z||!ee||!te||!se||!ie||!ae||!ne||!T||!U||!w||!D)throw new Error("Issues page failed to mount");f.textContent=Te();let oe=0;if(v)try{oe=await we()}catch(t){console.warn("Failed to load unread inbox count for issues page",t)}const he=De({currentApp:"issues",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="notes"){window.location.href="/notes/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},userRole:a,isAdmin:o,hasMailboxAccess:v,unreadInboxCount:oe,rightContent:xe()});g.appendChild(he),await qe({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{Be(),window.location.href="/auth"}});let h=[],r="",i=null;const S={query:"",status:"open"},M=()=>{const t=me(S.query);return h.filter(s=>re(s,S.status)?t?[s.summary,s.description,s.reporterEmail||"",s.humanReference||""].join(" ").toLowerCase().includes(t):!0:!1)},ve=t=>{const s=me(S.query);return s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0},re=(t,s)=>s==="all"?!0:s==="open"?t.status==="open":s==="in-progress"?t.status==="in-progress":s==="require-clarification"?t.status==="require-clarification":s==="testing-bucket"?t.status==="testing"||t.status==="tested":s==="resolved"?t.status==="resolved":s==="closed-other"?t.status==="duplicate"||t.status==="wont-fix":!1,ge=()=>{const t=h.filter(ve);R.querySelectorAll(".issues-filter-chip").forEach(s=>{const l=s.dataset.filterValue||"all",p=t.filter(C=>re(C,l)).length;s.classList.toggle("is-active",S.status===l),s.querySelector(".issues-filter-chip-count").textContent=String(p)})},b=()=>{const t=M();if(ge(),G.textContent=`${t.length} issue${t.length===1?"":"s"} shown`,t.length===0){L.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}L.innerHTML=t.map(s=>{const l=s.bugId===r?" is-active":"",p=s.reporterEmail?`<span class="issues-list-item-reporter">${u(s.reporterEmail)}</span>`:"",C=s.implementationStatus?`<span>${u(s.implementationStatus)}</span>`:"",E=s.reportedEnvironment?`<span>${u(String(s.reportedEnvironment).toUpperCase())}</span>`:"";return`
          <button type="button" class="issues-list-item${l}" data-bug-id="${s.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${s.status}"></span>
              <strong>${u(s.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${u(s.humanReference||s.bugId)}</span>
              <span>${u(pe(s.status))}</span>
              ${E}
              ${C}
              <span>${u(q(s.updatedAt))}</span>
            </div>
            ${p}
          </button>
        `}).join("")},$=()=>{if(!i){I.hidden=!0,A.hidden=!1;return}A.hidden=!0,I.hidden=!1,P.textContent=[i.humanReference||i.bugId,`Created ${q(i.createdAt)}`,`Updated ${q(i.updatedAt)}`,i.reportedEnvironment?`Reported ${String(i.reportedEnvironment).toUpperCase()}`:"",i.implementationStatus?`Implementation ${i.implementationStatus}`:""].filter(Boolean).join(" · "),z.textContent=i.summary?.trim()||"Issue",B.textContent=pe(i.status),B.dataset.status=i.status,_.textContent=`${i.reporterDisplayName} · ${i.reporterEmail}`,W.textContent=i.description||"No description.";const t=typeof i.clarificationQuestion=="string"?i.clarificationQuestion.trim():"",s=typeof i.statusComment=="string"?i.statusComment.trim():"",l=t||(i.status==="require-clarification"?s||"Clarification requested.":"");J.hidden=!l,K.textContent=l;const p=typeof i.clarificationResponse=="string"&&i.clarificationResponse.trim()?i.clarificationResponse.trim():"";F.hidden=!p,F.textContent=p;const C=Array.isArray(i.attachments)?i.attachments:[];X.textContent=`${C.length} file${C.length===1?"":"s"}`,Y.innerHTML=C.length>0?C.map(x=>Qe(x)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',Z.innerHTML=Ue(i).map(x=>`
          <div class="issues-context-item${x.className?` ${x.className}`:""}">
            <span>${u(x.label)}</span>
            <strong>${u(x.value)}</strong>
          </div>
        `).join("");const E=Me(i);ee.textContent=`${E.length} item${E.length===1?"":"s"}`,te.innerHTML=j(E,"No failed requests captured for this issue.");const H=Ne(i);se.textContent=`${H.length} item${H.length===1?"":"s"}`,ie.innerHTML=j(H,"No console logs captured for this issue.");const Q=He(i);ae.textContent=`${Q.length} item${Q.length===1?"":"s"}`,ne.innerHTML=j(Q,"No recent UI events captured for this issue."),T.value=i.status,U.value=typeof i.statusComment=="string"?i.statusComment:""},N=async t=>{r=t,i=null,b(),$(),m(c,"Loading issue details…","info");try{i=(await Le(t)).bug,m(c,"","success")}catch(s){r="";const l=s instanceof Error?s.message:"Failed to load issue details";m(c,l,"error")}b(),$()},le=async()=>{const t=M();if(t.some(l=>l.bugId===r)){b();return}if(r=t[0]?.bugId||"",!r){i=null,b(),$();return}await N(r)},ue=async()=>{y.disabled=!0,m(c,"Loading issues…","info");try{h=(await ke()).bugs||[],m(c,"","success"),(!r||!h.some(s=>s.bugId===r))&&(r=M()[0]?.bugId||""),b(),r?await N(r):(i=null,$())}catch(t){h=[],r="",i=null,b(),$();const s=t instanceof Error?t.message:"Failed to load issues";m(c,s,"error")}finally{y.disabled=!1}};L.addEventListener("click",t=>{const p=t.target?.closest("[data-bug-id]")?.dataset.bugId;!p||p===r||N(p)}),k.addEventListener("input",()=>{S.query=k.value,le()}),R.addEventListener("click",t=>{const l=t.target?.closest(".issues-filter-chip")?.dataset.filterValue||"all";S.status!==l&&(S.status=l,le())}),y.addEventListener("click",()=>{ue()}),D.addEventListener("click",async()=>{if(r){D.disabled=!0,w.disabled=!0;try{const t=await Re(r,T.value,U.value.trim());i=t.bug,h=h.map(s=>s.bugId===r?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse}:s),b(),$(),de(),m(c,"Issue updated.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to update issue";m(c,s,"error")}finally{D.disabled=!1,w.disabled=!1}}}),w.addEventListener("click",async()=>{if(r){w.disabled=!0,D.disabled=!0;try{const t=await Ae(r);i=t.bug,h=h.map(s=>s.bugId===r?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse,reportedEnvironment:typeof t.bug.reportedEnvironment=="string"?t.bug.reportedEnvironment:s.reportedEnvironment,reportedFrontendCommit:typeof t.bug.reportedFrontendCommit=="string"?t.bug.reportedFrontendCommit:s.reportedFrontendCommit,reportedBackendCommit:typeof t.bug.reportedBackendCommit=="string"?t.bug.reportedBackendCommit:s.reportedBackendCommit,implementationStatus:typeof t.bug.implementationStatus=="string"?t.bug.implementationStatus:s.implementationStatus,implementationSummary:typeof t.bug.implementationSummary=="string"?t.bug.implementationSummary:s.implementationSummary}:s),b(),$(),de(),m(c,"Automation requeued.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to requeue automation";m(c,s,"error")}finally{w.disabled=!1,D.disabled=!1}}});const ce=await Ie().catch(()=>null);if(!ce||!ce.isValid()){window.location.href="/auth";return}await ue()};export{Ve as mountIssuesPage};
