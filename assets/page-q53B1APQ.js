import{u as Te,t as Be,b as Fe,m as Qe,e as Ue,k as Me,o as Ne,n as He,p as Oe,i as je,a0 as Ge,a7 as Ve,a8 as Pe,a3 as ze,a9 as we,aa as _e}from"./UserMenu-Cse7LVhl.js";import{g as We,s as Je}from"./authSession-D78EMqe6.js";const Ee=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Ke=()=>`
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
        <section id="issuesAutomationOverview" class="issues-automation-overview" hidden>
          <div class="issues-automation-header">
            <div>
              <h3>Automation Queue</h3>
              <p id="issuesAutomationGeneratedAt" class="issues-automation-caption">Loading shared queue state…</p>
            </div>
          </div>
          <div class="issues-automation-metrics">
            <div class="issues-automation-metric">
              <span class="issues-automation-metric-label">Active</span>
              <strong id="issuesAutomationActiveLabel">Idle</strong>
            </div>
            <div class="issues-automation-metric">
              <span class="issues-automation-metric-label">Queued</span>
              <strong id="issuesAutomationQueuedTotal">0</strong>
            </div>
            <div class="issues-automation-metric">
              <span class="issues-automation-metric-label">Attention</span>
              <strong id="issuesAutomationAttentionTotal">0</strong>
            </div>
          </div>
          <div id="issuesAutomationActiveDetail" class="issues-automation-active-detail">No issue is currently being handled.</div>
          <div class="issues-automation-subsection">
            <div class="issues-automation-subsection-header">
              <span>Queued by environment</span>
              <span id="issuesAutomationQueueDepth" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationQueuedByEnv" class="issues-automation-chip-row"></div>
          </div>
          <div class="issues-automation-subsection">
            <div class="issues-automation-subsection-header">
              <span>Next up</span>
              <span id="issuesAutomationOldestQueued" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationQueuedList" class="issues-automation-list"></div>
          </div>
          <div class="issues-automation-subsection">
            <div class="issues-automation-subsection-header">
              <span>Needs attention</span>
              <span id="issuesAutomationAttentionSummary" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationAttentionList" class="issues-automation-list"></div>
          </div>
        </section>
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
                  ${Ee.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
`,m=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},Xe=e=>{if(typeof e!="number"||!Number.isFinite(e)||e<0)return"—";if(e<60)return`${e}s`;const n=Math.floor(e/60),r=e%60;if(n<60)return`${n}m ${r}s`;const i=Math.floor(n/60),v=n%60;return`${i}h ${v}m`},Le=e=>Ee.find(n=>n.value===e)?.label||e,De=e=>e.trim().toLowerCase(),Ye=()=>{switch(je()){case"test":return"DEV";case"beta":return"STG";case"prod":return"PRD";case"local":return"DEV";default:return"DEV"}},h=(e,n,r)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=r},l=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),d=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},se=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},ie=e=>e?m(e):"Unknown time",te=(e,n)=>e.length>0?e.map(r=>`
            <div class="issues-telemetry-item">
              <pre>${l(r)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${l(n)}</div>`,Ze=e=>{const r=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:m(e.createdAt)},{label:"Updated",value:m(e.updatedAt)},{label:"Path",value:d(r.path)},{label:"URL",value:d(r.url)},{label:"Frontend",value:d(r.frontendDetails)},{label:"Backend",value:d(r.backendDetails)},{label:"Version",value:d(r.versionIndicator)},{label:"Reported env",value:d(e.reportedEnvironment)},{label:"Reported frontend rev",value:d(e.reportedFrontendCommit)},{label:"Reported backend rev",value:d(e.reportedBackendCommit)},{label:"Likely area",value:d(e.likelyArea)},{label:"Implementation status",value:d(e.implementationStatus)},{label:"Implementation summary",value:d(e.implementationSummary),className:"issues-context-item-wide"},{label:"Viewport",value:d(r.viewport)},{label:"Device",value:d(r.deviceInfo)}]},et=e=>{const n=se(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(i=>{const v=typeof i.transport=="string"?i.transport:"?",b=typeof i.method=="string"?i.method:"GET",g=typeof i.url=="string"?i.url:"(unknown)",C=typeof i.status=="number"&&Number.isFinite(i.status)?` -> ${i.status}`:"",c=typeof i.error=="string"&&i.error.trim()?` (${i.error.trim()})`:"";return`${ie(typeof i.ts=="string"?i.ts:void 0)} · ${v.toUpperCase()} ${b.toUpperCase()} ${g}${C}${c}`})},tt=e=>{const n=se(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(i=>{const v=typeof i.level=="string"?i.level.toUpperCase():"LOG",b=typeof i.message=="string"?i.message:"",g=typeof i.count=="number"&&Number.isFinite(i.count)?i.count:1,C=g>1?` (x${g})`:"";return`${ie(typeof i.ts=="string"?i.ts:void 0)} · ${v}${C}
${b}`.trim()})},st=e=>{const n=se(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(i=>{const v=typeof i.type=="string"?i.type:"event",b=typeof i.target=="string"?i.target:"unknown",g=typeof i.detail=="string"&&i.detail.trim()?` · ${i.detail.trim()}`:"";return`${ie(typeof i.ts=="string"?i.ts:void 0)} · ${v} · ${b}${g}`})},it=e=>{const n=e.kind==="video",r=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${l(r)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${l(r)}</strong>
        <span>${l(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},ot=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=Te().map(t=>t.trim().toLowerCase()),r=n.includes("admin");if(!r){window.location.href="/whiteboard";return}const i=Be(),v=n.includes("mailbox");e.innerHTML=Ke(),e.appendChild(Fe()),Qe(),Ue();const b=e.querySelector("#issuesAppBarContainer"),g=e.querySelector("#issuesEnvironmentLabel"),C=e.querySelector("#issuesRefreshBtn"),c=e.querySelector("#issuesListStatus"),ae=e.querySelector("#issuesListSummary"),D=e.querySelector("#issuesList"),k=e.querySelector("#issuesAutomationOverview"),R=e.querySelector("#issuesAutomationGeneratedAt"),I=e.querySelector("#issuesAutomationActiveLabel"),T=e.querySelector("#issuesAutomationQueuedTotal"),B=e.querySelector("#issuesAutomationAttentionTotal"),F=e.querySelector("#issuesAutomationActiveDetail"),Q=e.querySelector("#issuesAutomationQueuedByEnv"),U=e.querySelector("#issuesAutomationQueueDepth"),M=e.querySelector("#issuesAutomationQueuedList"),N=e.querySelector("#issuesAutomationOldestQueued"),H=e.querySelector("#issuesAutomationAttentionSummary"),O=e.querySelector("#issuesAutomationAttentionList"),j=e.querySelector("#issuesSearchInput"),G=e.querySelector("#issuesStatusFilterChips"),V=e.querySelector("#issuesDetailEmpty"),P=e.querySelector("#issuesDetailCard"),ne=e.querySelector("#issuesDetailMeta"),oe=e.querySelector("#issuesDetailTitle"),z=e.querySelector("#issuesDetailStatusBadge"),re=e.querySelector("#issuesDetailReporter"),ue=e.querySelector("#issuesDetailDescription"),le=e.querySelector("#issuesDetailClarification"),ce=e.querySelector("#issuesDetailClarificationQuestion"),_=e.querySelector("#issuesDetailClarificationResponse"),de=e.querySelector("#issuesDetailAttachmentCount"),pe=e.querySelector("#issuesDetailAttachments"),me=e.querySelector("#issuesDetailContext"),ve=e.querySelector("#issuesDetailHttpFailureCount"),fe=e.querySelector("#issuesDetailHttpFailures"),he=e.querySelector("#issuesDetailConsoleLogCount"),ge=e.querySelector("#issuesDetailConsoleLogs"),ye=e.querySelector("#issuesDetailUiEventCount"),be=e.querySelector("#issuesDetailUiEvents"),W=e.querySelector("#issuesDetailStatusSelect"),J=e.querySelector("#issuesDetailStatusNote"),x=e.querySelector("#issuesRetryAutomationBtn"),q=e.querySelector("#issuesSaveBtn");if(!b||!g||!C||!c||!ae||!D||!k||!R||!I||!T||!B||!F||!Q||!U||!M||!N||!H||!O||!j||!G||!V||!P||!ne||!oe||!z||!re||!ue||!le||!ce||!_||!de||!pe||!me||!ve||!fe||!he||!ge||!ye||!be||!W||!J||!x||!q)throw new Error("Issues page failed to mount");g.textContent=Ye();let Ce=0;if(v)try{Ce=await Me()}catch(t){console.warn("Failed to load unread inbox count for issues page",t)}const ke=Ne({currentApp:"issues",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="notes"){window.location.href="/notes/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},userRole:i,isAdmin:r,hasMailboxAccess:v,unreadInboxCount:Ce,rightContent:He()});b.appendChild(ke),await Oe({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{Je(),window.location.href="/auth"}});let y=[],E=null,u="",a=null;const A={query:"",status:"open"},K=()=>{const t=De(A.query);return y.filter(s=>Se(s,A.status)?t?[s.summary,s.description,s.reporterEmail||"",s.humanReference||""].join(" ").toLowerCase().includes(t):!0:!1)},Re=t=>{const s=De(A.query);return s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0},Se=(t,s)=>s==="all"?!0:s==="open"?t.status==="open":s==="in-progress"?t.status==="in-progress":s==="require-clarification"?t.status==="require-clarification":s==="testing-bucket"?t.status==="testing"||t.status==="tested":s==="resolved"?t.status==="resolved":s==="closed-other"?t.status==="duplicate"||t.status==="wont-fix":!1,Ie=()=>{const t=y.filter(Re);G.querySelectorAll(".issues-filter-chip").forEach(s=>{const o=s.dataset.filterValue||"all",p=t.filter(f=>Se(f,o)).length;s.classList.toggle("is-active",A.status===o),s.querySelector(".issues-filter-chip-count").textContent=String(p)})},S=()=>{const t=K();if(Ie(),ae.textContent=`${t.length} issue${t.length===1?"":"s"} shown`,t.length===0){D.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}D.innerHTML=t.map(s=>{const o=s.bugId===u?" is-active":"",p=s.reporterEmail?`<span class="issues-list-item-reporter">${l(s.reporterEmail)}</span>`:"",f=s.implementationStatus?`<span>${l(s.implementationStatus)}</span>`:"",L=s.reportedEnvironment?`<span>${l(String(s.reportedEnvironment).toUpperCase())}</span>`:"";return`
          <button type="button" class="issues-list-item${o}" data-bug-id="${s.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${s.status}"></span>
              <strong>${l(s.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${l(s.humanReference||s.bugId)}</span>
              <span>${l(Le(s.status))}</span>
              ${L}
              ${f}
              <span>${l(m(s.updatedAt))}</span>
            </div>
            ${p}
          </button>
        `}).join("")},Ae=(t,s)=>t.length===0?`<div class="issues-automation-empty">${l(s)}</div>`:t.map(o=>{const p=o.humanReference||o.bugId,f=o.implementationUpdatedAt||o.updatedAt;return`
          <div class="issues-automation-list-item">
            <div class="issues-automation-list-item-main">
              <strong>${l(p)}</strong>
              <span>${l(o.summary)}</span>
            </div>
            <div class="issues-automation-list-item-meta">
              <span>${l(o.environment.toUpperCase())}</span>
              <span>${l(o.implementationStatus)}</span>
              <span>${l(m(f))}</span>
            </div>
          </div>
        `}).join(""),X=()=>{if(!r){k.hidden=!0;return}if(k.hidden=!1,!E){R.textContent="Loading shared queue state…",I.textContent="Loading",T.textContent="—",B.textContent="—",F.textContent="Checking shared automation state…",Q.innerHTML="",U.textContent="",M.innerHTML='<div class="issues-automation-empty">Loading queued issues…</div>',N.textContent="",H.textContent="",O.innerHTML='<div class="issues-automation-empty">Loading attention issues…</div>';return}const t=E;R.textContent=`Updated ${m(t.generatedAt)}`,I.textContent=t.active.isRunning?t.active.isStale?"Stale":"Running":"Idle",T.textContent=String(t.queued.total),B.textContent=String(t.attention.needsClarification+t.attention.failed+t.attention.escalatedToAdmin),F.textContent=t.active.isRunning?[`${t.active.humanReference||t.active.issueId||"Issue"} in ${String(t.active.reportedEnvironment||"unknown").toUpperCase()}`,t.active.implementationStatus||t.active.phase||"working",t.active.elapsedSeconds!=null?`${Xe(t.active.elapsedSeconds)} elapsed`:"",t.active.lastHeartbeatAt?`heartbeat ${m(t.active.lastHeartbeatAt)}`:t.active.executionStartedAt?`started ${m(t.active.executionStartedAt)}`:"",t.active.summary||""].filter(Boolean).join(" • "):"No issue is currently being handled.",Q.innerHTML=["dev","stg","prd"].map(s=>`
          <span class="issues-automation-chip">
            ${s.toUpperCase()} ${t.queued.byEnvironment[s]}
          </span>
        `).join(""),U.textContent=`Queue ${t.queue.approximateQueued} waiting • ${t.queue.approximateInFlight} active`,M.innerHTML=Ae(t.queued.issues,"No queued issues."),N.textContent=t.queued.oldestUpdatedAt?`Oldest ${m(t.queued.oldestUpdatedAt)}`:"",H.textContent=`${t.attention.needsClarification} needs clarification • ${t.attention.failed} failed • ${t.attention.escalatedToAdmin} escalated`,O.innerHTML=Ae(t.attention.issues,"No attention issues.")},$=()=>{if(!a){P.hidden=!0,V.hidden=!1;return}V.hidden=!0,P.hidden=!1,ne.textContent=[a.humanReference||a.bugId,`Created ${m(a.createdAt)}`,`Updated ${m(a.updatedAt)}`,a.reportedEnvironment?`Reported ${String(a.reportedEnvironment).toUpperCase()}`:"",a.implementationStatus?`Implementation ${a.implementationStatus}`:""].filter(Boolean).join(" · "),oe.textContent=a.summary?.trim()||"Issue",z.textContent=Le(a.status),z.dataset.status=a.status,re.textContent=`${a.reporterDisplayName} · ${a.reporterEmail}`,ue.textContent=a.description||"No description.";const t=typeof a.clarificationQuestion=="string"?a.clarificationQuestion.trim():"",s=typeof a.statusComment=="string"?a.statusComment.trim():"",o=t||(a.status==="require-clarification"?s||"Clarification requested.":"");le.hidden=!o,ce.textContent=o;const p=typeof a.clarificationResponse=="string"&&a.clarificationResponse.trim()?a.clarificationResponse.trim():"";_.hidden=!p,_.textContent=p;const f=Array.isArray(a.attachments)?a.attachments:[];de.textContent=`${f.length} file${f.length===1?"":"s"}`,pe.innerHTML=f.length>0?f.map(w=>it(w)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',me.innerHTML=Ze(a).map(w=>`
          <div class="issues-context-item${w.className?` ${w.className}`:""}">
            <span>${l(w.label)}</span>
            <strong>${l(w.value)}</strong>
          </div>
        `).join("");const L=et(a);ve.textContent=`${L.length} item${L.length===1?"":"s"}`,fe.innerHTML=te(L,"No failed requests captured for this issue.");const Z=tt(a);he.textContent=`${Z.length} item${Z.length===1?"":"s"}`,ge.innerHTML=te(Z,"No console logs captured for this issue.");const ee=st(a);ye.textContent=`${ee.length} item${ee.length===1?"":"s"}`,be.innerHTML=te(ee,"No recent UI events captured for this issue."),W.value=a.status,J.value=typeof a.statusComment=="string"?a.statusComment:""},Y=async t=>{u=t,a=null,S(),$(),h(c,"Loading issue details…","info");try{a=(await Ge(t)).bug,h(c,"","success")}catch(s){u="";const o=s instanceof Error?s.message:"Failed to load issue details";h(c,o,"error")}S(),$()},$e=async()=>{const t=K();if(t.some(o=>o.bugId===u)){S();return}if(u=t[0]?.bugId||"",!u){a=null,S(),$();return}await Y(u)},xe=async()=>{C.disabled=!0,h(c,"Loading issues…","info"),X();try{const[t,s]=await Promise.all([Ve(),r?Pe().catch(o=>(console.warn("Failed to load issue automation overview",o),null)):Promise.resolve(null)]);y=t.bugs||[],E=s,X(),h(c,"","success"),(!u||!y.some(o=>o.bugId===u))&&(u=K()[0]?.bugId||""),S(),u?await Y(u):(a=null,$())}catch(t){y=[],E=null,u="",a=null,S(),X(),$();const s=t instanceof Error?t.message:"Failed to load issues";h(c,s,"error")}finally{C.disabled=!1}};D.addEventListener("click",t=>{const p=t.target?.closest("[data-bug-id]")?.dataset.bugId;!p||p===u||Y(p)}),j.addEventListener("input",()=>{A.query=j.value,$e()}),G.addEventListener("click",t=>{const o=t.target?.closest(".issues-filter-chip")?.dataset.filterValue||"all";A.status!==o&&(A.status=o,$e())}),C.addEventListener("click",()=>{xe()}),q.addEventListener("click",async()=>{if(u){q.disabled=!0,x.disabled=!0;try{const t=await ze(u,W.value,J.value.trim());a=t.bug,y=y.map(s=>s.bugId===u?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse}:s),S(),$(),we(),h(c,"Issue updated.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to update issue";h(c,s,"error")}finally{q.disabled=!1,x.disabled=!1}}}),x.addEventListener("click",async()=>{if(u){x.disabled=!0,q.disabled=!0;try{const t=await _e(u);a=t.bug,y=y.map(s=>s.bugId===u?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse,reportedEnvironment:typeof t.bug.reportedEnvironment=="string"?t.bug.reportedEnvironment:s.reportedEnvironment,reportedFrontendCommit:typeof t.bug.reportedFrontendCommit=="string"?t.bug.reportedFrontendCommit:s.reportedFrontendCommit,reportedBackendCommit:typeof t.bug.reportedBackendCommit=="string"?t.bug.reportedBackendCommit:s.reportedBackendCommit,implementationStatus:typeof t.bug.implementationStatus=="string"?t.bug.implementationStatus:s.implementationStatus,implementationSummary:typeof t.bug.implementationSummary=="string"?t.bug.implementationSummary:s.implementationSummary}:s),S(),$(),we(),h(c,"Automation requeued.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to requeue automation";h(c,s,"error")}finally{x.disabled=!1,q.disabled=!1}}});const qe=await We().catch(()=>null);if(!qe||!qe.isValid()){window.location.href="/auth";return}await xe()};export{ot as mountIssuesPage};
