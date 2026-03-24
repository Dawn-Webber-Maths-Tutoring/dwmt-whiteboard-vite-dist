import{v as Je,u as Ke,b as Xe,m as Ye,e as Ze,k as et,p as tt,n as st,q as it,a8 as nt,a9 as at,i as ot,a1 as rt,aa as ut,ab as lt,a4 as ct,ac as Ue,ad as dt}from"./UserMenu-wyQa3Vdi.js";import{g as pt,s as mt}from"./authSession-DVevapsh.js";const He=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],p=e=>{if(!e)return"Unknown";const i=new Date(e);return Number.isNaN(i.getTime())?e:i.toLocaleString()},vt=e=>{if(typeof e!="number"||!Number.isFinite(e)||e<0)return"—";if(e<60)return`${e}s`;const i=Math.floor(e/60),a=e%60;if(i<60)return`${i}m ${a}s`;const n=Math.floor(i/60),f=i%60;return`${n}h ${f}m`},Qe=e=>He.find(i=>i.value===e)?.label||e,ft=e=>e.trim().toLowerCase(),l=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),v=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},ve=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},fe=e=>e?p(e):"Unknown time",me=(e,i)=>e.length>0?e.map(a=>`
            <div class="issues-telemetry-item">
              <pre>${l(a)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${l(i)}</div>`,ht=e=>{const a=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:p(e.createdAt)},{label:"Updated",value:p(e.updatedAt)},{label:"Path",value:v(a.path)},{label:"URL",value:v(a.url)},{label:"Frontend",value:v(a.frontendDetails)},{label:"Backend",value:v(a.backendDetails)},{label:"Version",value:v(a.versionIndicator)},{label:"Reported env",value:v(e.reportedEnvironment)},{label:"Reported frontend rev",value:v(e.reportedFrontendCommit)},{label:"Reported backend rev",value:v(e.reportedBackendCommit)},{label:"Likely area",value:v(e.likelyArea)},{label:"Implementation status",value:v(e.implementationStatus)},{label:"Implementation summary",value:v(e.implementationSummary),className:"issues-context-item-wide"},{label:"Viewport",value:v(a.viewport)},{label:"Device",value:v(a.deviceInfo)}]},gt=e=>{const i=ve(e.context);return(Array.isArray(i.recentHttpFailures)?i.recentHttpFailures:[]).map(n=>{const f=typeof n.transport=="string"?n.transport:"?",S=typeof n.method=="string"?n.method:"GET",b=typeof n.url=="string"?n.url:"(unknown)",C=typeof n.status=="number"&&Number.isFinite(n.status)?` -> ${n.status}`:"",d=typeof n.error=="string"&&n.error.trim()?` (${n.error.trim()})`:"";return`${fe(typeof n.ts=="string"?n.ts:void 0)} · ${f.toUpperCase()} ${S.toUpperCase()} ${b}${C}${d}`})},yt=e=>{const i=ve(e.context);return(Array.isArray(i.recentConsoleLogs)?i.recentConsoleLogs:[]).map(n=>{const f=typeof n.level=="string"?n.level.toUpperCase():"LOG",S=typeof n.message=="string"?n.message:"",b=typeof n.count=="number"&&Number.isFinite(n.count)?n.count:1,C=b>1?` (x${b})`:"";return`${fe(typeof n.ts=="string"?n.ts:void 0)} · ${f}${C}
${S}`.trim()})},bt=e=>{const i=ve(e.context);return(Array.isArray(i.recentUiEvents)?i.recentUiEvents:[]).map(n=>{const f=typeof n.type=="string"?n.type:"event",S=typeof n.target=="string"?n.target:"unknown",b=typeof n.detail=="string"&&n.detail.trim()?` · ${n.detail.trim()}`:"";return`${fe(typeof n.ts=="string"?n.ts:void 0)} · ${f} · ${S}${b}`})},At=e=>{const i=e.kind==="video",a=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${i?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${l(a)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${l(a)}</strong>
        <span>${l(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},Ne=(e,i)=>{const a=ft(i);return a?[e.summary,e.description,e.reporterEmail||"",e.humanReference||""].join(" ").toLowerCase().includes(a):!0},Oe=(e,i)=>i==="all"?!0:i==="open"?e.status==="open":i==="in-progress"?e.status==="in-progress":i==="require-clarification"?e.status==="require-clarification":i==="testing-bucket"?e.status==="testing"||e.status==="tested":i==="resolved"?e.status==="resolved":i==="closed-other"?e.status==="duplicate"||e.status==="wont-fix":!1,St=(e,i)=>e.filter(a=>Oe(a,i.status)&&Ne(a,i.query)),B=(e,i)=>e.length===0?`<div class="issues-automation-empty">${l(i)}</div>`:e.map(a=>{const n=a.humanReference||a.bugId,f=a.implementationUpdatedAt||a.updatedAt;return`
          <div class="issues-automation-list-item">
            <div class="issues-automation-list-item-main">
              <strong>${l(n)}</strong>
              <span>${l(a.summary)}</span>
            </div>
            <div class="issues-automation-list-item-meta">
              <span>${l(a.environment.toUpperCase())}</span>
              <span>${l(a.implementationStatus)}</span>
              <span>${l(p(f))}</span>
            </div>
          </div>
        `}).join(""),Ct=()=>`
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
            <button
              id="issuesAutomationToggleBtn"
              class="issues-refresh-btn"
              type="button"
              aria-label="Resume automation"
              title="Resume automation"
            >
              <span id="issuesAutomationToggleIcon" aria-hidden="true">▶</span>
            </button>
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
              <span>Working stages</span>
              <span id="issuesAutomationWorkingSummary" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationWorkingByStatus" class="issues-automation-chip-row"></div>
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
              <span>In progress</span>
              <span id="issuesAutomationWorkingOldest" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationWorkingList" class="issues-automation-list"></div>
          </div>
          <div class="issues-automation-subsection">
            <div class="issues-automation-subsection-header">
              <span>Needs attention</span>
              <span id="issuesAutomationAttentionSummary" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationAttentionList" class="issues-automation-list"></div>
          </div>
          <div class="issues-automation-subsection">
            <div class="issues-automation-subsection-header">
              <span>Recently finished</span>
              <span id="issuesAutomationRecentSummary" class="issues-automation-caption"></span>
            </div>
            <div id="issuesAutomationRecentList" class="issues-automation-list"></div>
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
            <div id="issuesDetailClarificationThread" class="issues-telemetry-list"></div>
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
                  ${He.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
`,$t=()=>{switch(ot()){case"test":return"DEV";case"beta":return"STG";case"prod":return"PRD";case"local":return"DEV";default:return"DEV"}},h=(e,i,a)=>{if(!i){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=i,e.dataset.tone=a},Lt=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const i=Je().map(t=>t.trim().toLowerCase()),a=i.includes("admin");if(!a){window.location.href="/whiteboard";return}const n=Ke(),f=i.includes("mailbox");e.innerHTML=Ct(),e.appendChild(Xe()),Ye(),Ze();const S=e.querySelector("#issuesAppBarContainer"),b=e.querySelector("#issuesEnvironmentLabel"),C=e.querySelector("#issuesRefreshBtn"),d=e.querySelector("#issuesListStatus"),he=e.querySelector("#issuesListSummary"),T=e.querySelector("#issuesList"),M=e.querySelector("#issuesAutomationOverview"),F=e.querySelector("#issuesAutomationGeneratedAt"),y=e.querySelector("#issuesAutomationToggleBtn"),U=e.querySelector("#issuesAutomationToggleIcon"),Q=e.querySelector("#issuesAutomationActiveLabel"),H=e.querySelector("#issuesAutomationQueuedTotal"),N=e.querySelector("#issuesAutomationAttentionTotal"),O=e.querySelector("#issuesAutomationActiveDetail"),j=e.querySelector("#issuesAutomationQueuedByEnv"),W=e.querySelector("#issuesAutomationWorkingByStatus"),V=e.querySelector("#issuesAutomationWorkingSummary"),P=e.querySelector("#issuesAutomationQueueDepth"),G=e.querySelector("#issuesAutomationQueuedList"),z=e.querySelector("#issuesAutomationOldestQueued"),_=e.querySelector("#issuesAutomationWorkingList"),J=e.querySelector("#issuesAutomationWorkingOldest"),K=e.querySelector("#issuesAutomationAttentionSummary"),X=e.querySelector("#issuesAutomationAttentionList"),Y=e.querySelector("#issuesAutomationRecentSummary"),Z=e.querySelector("#issuesAutomationRecentList"),ee=e.querySelector("#issuesSearchInput"),te=e.querySelector("#issuesStatusFilterChips"),se=e.querySelector("#issuesDetailEmpty"),ie=e.querySelector("#issuesDetailCard"),ge=e.querySelector("#issuesDetailMeta"),ye=e.querySelector("#issuesDetailTitle"),ne=e.querySelector("#issuesDetailStatusBadge"),be=e.querySelector("#issuesDetailReporter"),Ae=e.querySelector("#issuesDetailDescription"),Se=e.querySelector("#issuesDetailClarification"),Ce=e.querySelector("#issuesDetailClarificationQuestion"),ae=e.querySelector("#issuesDetailClarificationResponse"),$e=e.querySelector("#issuesDetailClarificationThread"),qe=e.querySelector("#issuesDetailAttachmentCount"),xe=e.querySelector("#issuesDetailAttachments"),Le=e.querySelector("#issuesDetailContext"),we=e.querySelector("#issuesDetailHttpFailureCount"),ke=e.querySelector("#issuesDetailHttpFailures"),De=e.querySelector("#issuesDetailConsoleLogCount"),Re=e.querySelector("#issuesDetailConsoleLogs"),Te=e.querySelector("#issuesDetailUiEventCount"),Ee=e.querySelector("#issuesDetailUiEvents"),oe=e.querySelector("#issuesDetailStatusSelect"),re=e.querySelector("#issuesDetailStatusNote"),w=e.querySelector("#issuesRetryAutomationBtn"),k=e.querySelector("#issuesSaveBtn");if(!S||!b||!C||!d||!he||!T||!M||!F||!y||!U||!Q||!H||!N||!O||!j||!W||!V||!P||!G||!z||!_||!J||!K||!X||!Y||!Z||!ee||!te||!se||!ie||!ge||!ye||!ne||!be||!Ae||!Se||!Ce||!ae||!$e||!qe||!xe||!Le||!we||!ke||!De||!Re||!Te||!Ee||!oe||!re||!w||!k)throw new Error("Issues page failed to mount");b.textContent=$t();let Ie=0;if(f)try{Ie=await et()}catch(t){console.warn("Failed to load unread inbox count for issues page",t)}const je=tt({currentApp:"issues",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="notes"){window.location.href="/notes/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},userRole:n,isAdmin:a,hasMailboxAccess:f,unreadInboxCount:Ie,rightContent:st()});S.appendChild(je),await it({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{mt(),window.location.href="/auth"}});let A=[],x=null,c="",r=null;const $=t=>typeof t=="string"&&t.trim()?t.trim():void 0,We=t=>{if(!t)return[];const s=Array.isArray(t.clarificationThread)?t.clarificationThread.filter(o=>o&&typeof o=="object").map(o=>{const u=o;return{question:typeof u.question=="string"&&u.question.trim()?u.question.trim():void 0,requestedAt:typeof u.requestedAt=="string"&&u.requestedAt.trim()?u.requestedAt.trim():void 0,response:typeof u.response=="string"&&u.response.trim()?u.response.trim():void 0,respondedAt:typeof u.respondedAt=="string"&&u.respondedAt.trim()?u.respondedAt.trim():void 0}}).filter(o=>!!o.question||!!o.requestedAt||!!o.response||!!o.respondedAt):[];return s.length>0?s:$(t.clarificationQuestion)||$(t.clarificationRequestedAt)||$(t.clarificationResponse)||$(t.clarificationRespondedAt)?[{question:$(t.clarificationQuestion),requestedAt:$(t.clarificationRequestedAt),response:$(t.clarificationResponse),respondedAt:$(t.clarificationRespondedAt)}]:[]},D={query:"",status:"open"},ue=()=>St(A,D),Ve=t=>Ne(t,D.query),Pe=(t,s)=>Oe(t,s),Ge=()=>{const t=A.filter(Ve);te.querySelectorAll(".issues-filter-chip").forEach(s=>{const o=s.dataset.filterValue||"all",u=t.filter(g=>Pe(g,o)).length;s.classList.toggle("is-active",D.status===o),s.querySelector(".issues-filter-chip-count").textContent=String(u)})},q=()=>{const t=ue();if(Ge(),he.textContent=`${t.length} issue${t.length===1?"":"s"} shown`,t.length===0){T.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}T.innerHTML=t.map(s=>{const o=s.bugId===c?" is-active":"",u=s.reporterEmail?`<span class="issues-list-item-reporter">${l(s.reporterEmail)}</span>`:"",g=s.implementationStatus?`<span>${l(s.implementationStatus)}</span>`:"",R=s.reportedEnvironment?`<span>${l(String(s.reportedEnvironment).toUpperCase())}</span>`:"";return`
          <button type="button" class="issues-list-item${o}" data-bug-id="${s.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${s.status}"></span>
              <strong>${l(s.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${l(s.humanReference||s.bugId)}</span>
              <span>${l(Qe(s.status))}</span>
              ${R}
              ${g}
              <span>${l(p(s.updatedAt))}</span>
            </div>
            ${u}
          </button>
        `}).join("")},E=()=>{if(!a){M.hidden=!0;return}if(M.hidden=!1,!x){F.textContent="Loading shared queue state…",y.disabled=!0,y.setAttribute("aria-label","Automation control loading"),y.title="Automation control loading",U.textContent="…",Q.textContent="Loading",H.textContent="—",N.textContent="—",O.textContent="Checking shared automation state…",j.innerHTML="",W.innerHTML="",V.textContent="",P.textContent="",G.innerHTML='<div class="issues-automation-empty">Loading queued issues…</div>',z.textContent="",_.innerHTML='<div class="issues-automation-empty">Loading working issues…</div>',J.textContent="",K.textContent="",X.innerHTML='<div class="issues-automation-empty">Loading attention issues…</div>',Y.textContent="",Z.innerHTML='<div class="issues-automation-empty">Loading recent completions…</div>';return}const t=x,s=t.control??{paused:!1},o=t.working??{total:0,byStatus:{"reproducing-on-dev":0,"reproducing-on-reported-env":0,"clarification-received":0,"fixing-on-dev":0},oldestUpdatedAt:null,issues:[]},u=t.recent??{fixedOnDev:0,alreadyFixedOnDev:0,issues:[]};y.disabled=!1,y.setAttribute("aria-label",s.paused?"Resume automation":"Pause automation"),y.title=s.paused?"Resume automation":"Pause automation",U.textContent=s.paused?"▶":"⏸",F.textContent=`Updated ${p(t.generatedAt)}`,Q.textContent=s.paused?"Paused":t.active.isRunning?t.active.isStale?"Stale":"Running":"Idle",H.textContent=String(t.queued.total),N.textContent=String(t.attention.needsClarification+t.attention.failed+t.attention.escalatedToAdmin+(t.attention.staleWorking||0)),O.textContent=s.paused?["Automation is paused.",s.humanReference||s.issueId||"",s.reportedEnvironment?String(s.reportedEnvironment).toUpperCase():"",s.reason||"",s.updatedAt?`updated ${p(s.updatedAt)}`:""].filter(Boolean).join(" • "):t.active.isRunning?[`${t.active.humanReference||t.active.issueId||"Issue"} in ${String(t.active.reportedEnvironment||"unknown").toUpperCase()}`,t.active.implementationStatus||t.active.phase||"working",t.active.elapsedSeconds!=null?`${vt(t.active.elapsedSeconds)} elapsed`:"",t.active.lastHeartbeatAt?`heartbeat ${p(t.active.lastHeartbeatAt)}`:t.active.executionStartedAt?`started ${p(t.active.executionStartedAt)}`:"",t.active.summary||""].filter(Boolean).join(" • "):"No issue is currently being handled.",j.innerHTML=["dev","stg","prd"].map(g=>`
          <span class="issues-automation-chip">
            ${g.toUpperCase()} ${t.queued.byEnvironment[g]}
          </span>
        `).join(""),W.innerHTML=[["Reproducing DEV",o.byStatus["reproducing-on-dev"]],["Reproducing Reported",o.byStatus["reproducing-on-reported-env"]],["Clarification In",o.byStatus["clarification-received"]],["Fixing DEV",o.byStatus["fixing-on-dev"]]].map(([g,R])=>`
          <span class="issues-automation-chip">
            ${l(String(g))} ${l(String(R))}
          </span>
        `).join(""),V.textContent=`${o.total} active issue${o.total===1?"":"s"}`,P.textContent=`Queue ${t.queue.approximateQueued} waiting • ${t.queue.approximateInFlight} active`,G.innerHTML=B(t.queued.issues,"No queued issues."),z.textContent=t.queued.oldestUpdatedAt?`Oldest ${p(t.queued.oldestUpdatedAt)}`:"",_.innerHTML=B(o.issues,"No issues are currently being worked."),J.textContent=o.oldestUpdatedAt?`Oldest ${p(o.oldestUpdatedAt)}`:"",K.textContent=`${t.attention.needsClarification} needs clarification • ${t.attention.failed} failed • ${t.attention.escalatedToAdmin} escalated • ${t.attention.staleWorking||0} stale working`,X.innerHTML=B(t.attention.issues,"No attention issues."),Y.textContent=`${u.fixedOnDev} fixed on dev • ${u.alreadyFixedOnDev} already fixed`,Z.innerHTML=B(u.issues,"No recent completions.")},L=()=>{if(!r){ie.hidden=!0,se.hidden=!1;return}se.hidden=!0,ie.hidden=!1,ge.textContent=[r.humanReference||r.bugId,`Created ${p(r.createdAt)}`,`Updated ${p(r.updatedAt)}`,r.reportedEnvironment?`Reported ${String(r.reportedEnvironment).toUpperCase()}`:"",r.implementationStatus?`Implementation ${r.implementationStatus}`:""].filter(Boolean).join(" · "),ye.textContent=r.summary?.trim()||"Issue",ne.textContent=Qe(r.status),ne.dataset.status=r.status,be.textContent=`${r.reporterDisplayName} · ${r.reporterEmail}`,Ae.textContent=r.description||"No description.";const t=We(r),s=t[t.length-1],o=s?.question||"",u=typeof r.statusComment=="string"?r.statusComment.trim():"",g=o||(r.status==="require-clarification"?u||"Clarification requested.":"");Se.hidden=!g,Ce.textContent=g;const R=s?.response||"";ae.hidden=!R,ae.textContent=R,$e.innerHTML=t.map((m,ze)=>{const _e=[m.requestedAt?`<div><strong>Asked:</strong> ${l(p(m.requestedAt))}</div>`:"",`<div><strong>Question:</strong> ${l(m.question||"(none)")}</div>`,m.response?`<div><strong>Answer:</strong> ${l(m.response)}</div>`:"<div><strong>Answer:</strong> <em>Awaiting response</em></div>",m.respondedAt?`<div><strong>Answered:</strong> ${l(p(m.respondedAt))}</div>`:""].filter(Boolean).join("");return`<div class="issues-telemetry-item"><strong>Round ${ze+1}</strong>${_e}</div>`}).join("");const I=Array.isArray(r.attachments)?r.attachments:[];qe.textContent=`${I.length} file${I.length===1?"":"s"}`,xe.innerHTML=I.length>0?I.map(m=>At(m)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',Le.innerHTML=ht(r).map(m=>`
          <div class="issues-context-item${m.className?` ${m.className}`:""}">
            <span>${l(m.label)}</span>
            <strong>${l(m.value)}</strong>
          </div>
        `).join("");const ce=gt(r);we.textContent=`${ce.length} item${ce.length===1?"":"s"}`,ke.innerHTML=me(ce,"No failed requests captured for this issue.");const de=yt(r);De.textContent=`${de.length} item${de.length===1?"":"s"}`,Re.innerHTML=me(de,"No console logs captured for this issue.");const pe=bt(r);Te.textContent=`${pe.length} item${pe.length===1?"":"s"}`,Ee.innerHTML=me(pe,"No recent UI events captured for this issue."),oe.value=r.status,re.value=typeof r.statusComment=="string"?r.statusComment:""},le=async t=>{c=t,r=null,q(),L(),h(d,"Loading issue details…","info");try{r=(await rt(t)).bug,h(d,"","success")}catch(s){c="";const o=s instanceof Error?s.message:"Failed to load issue details";h(d,o,"error")}q(),L()},Be=async()=>{const t=ue();if(t.some(o=>o.bugId===c)){q();return}if(c=t[0]?.bugId||"",!c){r=null,q(),L();return}await le(c)},Me=async()=>{C.disabled=!0,h(d,"Loading issues…","info"),E();try{const[t,s]=await Promise.all([ut(),a?lt().catch(o=>(console.warn("Failed to load issue automation overview",o),null)):Promise.resolve(null)]);A=t.bugs||[],x=s,E(),h(d,"","success"),(!c||!A.some(o=>o.bugId===c))&&(c=ue()[0]?.bugId||""),q(),c?await le(c):(r=null,L())}catch(t){A=[],x=null,c="",r=null,q(),E(),L();const s=t instanceof Error?t.message:"Failed to load issues";h(d,s,"error")}finally{C.disabled=!1}};T.addEventListener("click",t=>{const u=t.target?.closest("[data-bug-id]")?.dataset.bugId;!u||u===c||le(u)}),ee.addEventListener("input",()=>{D.query=ee.value,Be()}),te.addEventListener("click",t=>{const o=t.target?.closest(".issues-filter-chip")?.dataset.filterValue||"all";D.status!==o&&(D.status=o,Be())}),C.addEventListener("click",()=>{Me()}),y.addEventListener("click",async()=>{if(a){y.disabled=!0;try{x?.control?.paused?x=await nt():x=await at(),E(),h(d,"Automation control updated.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to update automation control";h(d,s,"error")}finally{y.disabled=!1}}}),k.addEventListener("click",async()=>{if(c){k.disabled=!0,w.disabled=!0;try{const t=await ct(c,oe.value,re.value.trim());r=t.bug,A=A.map(s=>s.bugId===c?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationThread:Array.isArray(t.bug.clarificationThread)?t.bug.clarificationThread:s.clarificationThread,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse}:s),q(),L(),Ue(),h(d,"Issue updated.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to update issue";h(d,s,"error")}finally{k.disabled=!1,w.disabled=!1}}}),w.addEventListener("click",async()=>{if(c){w.disabled=!0,k.disabled=!0;try{const t=await dt(c);r=t.bug,A=A.map(s=>s.bugId===c?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationThread:Array.isArray(t.bug.clarificationThread)?t.bug.clarificationThread:s.clarificationThread,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse,reportedEnvironment:typeof t.bug.reportedEnvironment=="string"?t.bug.reportedEnvironment:s.reportedEnvironment,reportedFrontendCommit:typeof t.bug.reportedFrontendCommit=="string"?t.bug.reportedFrontendCommit:s.reportedFrontendCommit,reportedBackendCommit:typeof t.bug.reportedBackendCommit=="string"?t.bug.reportedBackendCommit:s.reportedBackendCommit,implementationStatus:typeof t.bug.implementationStatus=="string"?t.bug.implementationStatus:s.implementationStatus,implementationSummary:typeof t.bug.implementationSummary=="string"?t.bug.implementationSummary:s.implementationSummary}:s),q(),L(),Ue(),h(d,"Automation requeued.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to requeue automation";h(d,s,"error")}finally{w.disabled=!1,k.disabled=!1}}});const Fe=await pt().catch(()=>null);if(!Fe||!Fe.isValid()){window.location.href="/auth";return}await Me()};export{Lt as mountIssuesPage};
