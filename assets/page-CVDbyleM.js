import{u as ve,t as ge,b as ye,m as be,e as Ce,k as Se,o as $e,n as De,p as we,i as xe,a0 as Le,a7 as qe,a3 as Ee,a8 as ke}from"./UserMenu-DtIjcbtj.js";import{g as Re,s as Ie}from"./authSession-CiAht5G1.js";const pe=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Ae=()=>`
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
                  ${pe.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
`,D=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},ue=e=>pe.find(n=>n.value===e)?.label||e,de=e=>e.trim().toLowerCase(),Te=()=>{switch(xe()){case"test":return"DEV";case"beta":return"STG";case"prod":return"PRD";case"local":return"DEV";default:return"DEV"}},y=(e,n,o)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=o},c=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),u=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},O=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},Q=e=>e?D(e):"Unknown time",j=(e,n)=>e.length>0?e.map(o=>`
            <div class="issues-telemetry-item">
              <pre>${c(o)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${c(n)}</div>`,Be=e=>{const o=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:D(e.createdAt)},{label:"Updated",value:D(e.updatedAt)},{label:"Path",value:u(o.path)},{label:"URL",value:u(o.url)},{label:"Frontend",value:u(o.frontendDetails)},{label:"Backend",value:u(o.backendDetails)},{label:"Version",value:u(o.versionIndicator)},{label:"Reported env",value:u(e.reportedEnvironment)},{label:"Reported frontend rev",value:u(e.reportedFrontendCommit)},{label:"Reported backend rev",value:u(e.reportedBackendCommit)},{label:"Likely area",value:u(e.likelyArea)},{label:"Implementation status",value:u(e.implementationStatus)},{label:"Implementation summary",value:u(e.implementationSummary)},{label:"Viewport",value:u(o.viewport)},{label:"Device",value:u(o.deviceInfo)}]},Ue=e=>{const n=O(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(a=>{const m=typeof a.transport=="string"?a.transport:"?",h=typeof a.method=="string"?a.method:"GET",f=typeof a.url=="string"?a.url:"(unknown)",v=typeof a.status=="number"&&Number.isFinite(a.status)?` -> ${a.status}`:"",d=typeof a.error=="string"&&a.error.trim()?` (${a.error.trim()})`:"";return`${Q(typeof a.ts=="string"?a.ts:void 0)} · ${m.toUpperCase()} ${h.toUpperCase()} ${f}${v}${d}`})},Fe=e=>{const n=O(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(a=>{const m=typeof a.level=="string"?a.level.toUpperCase():"LOG",h=typeof a.message=="string"?a.message:"",f=typeof a.count=="number"&&Number.isFinite(a.count)?a.count:1,v=f>1?` (x${f})`:"";return`${Q(typeof a.ts=="string"?a.ts:void 0)} · ${m}${v}
${h}`.trim()})},Me=e=>{const n=O(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(a=>{const m=typeof a.type=="string"?a.type:"event",h=typeof a.target=="string"?a.target:"unknown",f=typeof a.detail=="string"&&a.detail.trim()?` · ${a.detail.trim()}`:"";return`${Q(typeof a.ts=="string"?a.ts:void 0)} · ${m} · ${h}${f}`})},He=e=>{const n=e.kind==="video",o=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${c(o)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${c(o)}</strong>
        <span>${c(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},Oe=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=ve().map(t=>t.trim().toLowerCase()),o=n.includes("admin");if(!o){window.location.href="/whiteboard";return}const a=ge(),m=n.includes("mailbox");e.innerHTML=Ae(),e.appendChild(ye()),be(),Ce();const h=e.querySelector("#issuesAppBarContainer"),f=e.querySelector("#issuesEnvironmentLabel"),v=e.querySelector("#issuesRefreshBtn"),d=e.querySelector("#issuesListStatus"),V=e.querySelector("#issuesListSummary"),x=e.querySelector("#issuesList"),E=e.querySelector("#issuesSearchInput"),k=e.querySelector("#issuesStatusFilterChips"),R=e.querySelector("#issuesDetailEmpty"),I=e.querySelector("#issuesDetailCard"),G=e.querySelector("#issuesDetailMeta"),P=e.querySelector("#issuesDetailTitle"),A=e.querySelector("#issuesDetailStatusBadge"),z=e.querySelector("#issuesDetailReporter"),_=e.querySelector("#issuesDetailDescription"),W=e.querySelector("#issuesDetailClarification"),J=e.querySelector("#issuesDetailClarificationQuestion"),T=e.querySelector("#issuesDetailClarificationResponse"),K=e.querySelector("#issuesDetailAttachmentCount"),X=e.querySelector("#issuesDetailAttachments"),Y=e.querySelector("#issuesDetailContext"),Z=e.querySelector("#issuesDetailHttpFailureCount"),ee=e.querySelector("#issuesDetailHttpFailures"),te=e.querySelector("#issuesDetailConsoleLogCount"),se=e.querySelector("#issuesDetailConsoleLogs"),ie=e.querySelector("#issuesDetailUiEventCount"),ae=e.querySelector("#issuesDetailUiEvents"),B=e.querySelector("#issuesDetailStatusSelect"),U=e.querySelector("#issuesDetailStatusNote"),L=e.querySelector("#issuesSaveBtn");if(!h||!f||!v||!d||!V||!x||!E||!k||!R||!I||!G||!P||!A||!z||!_||!W||!J||!T||!K||!X||!Y||!Z||!ee||!te||!se||!ie||!ae||!B||!U||!L)throw new Error("Issues page failed to mount");f.textContent=Te();let ne=0;if(m)try{ne=await Se()}catch(t){console.warn("Failed to load unread inbox count for issues page",t)}const fe=$e({currentApp:"issues",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="notes"){window.location.href="/notes/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},userRole:a,isAdmin:o,hasMailboxAccess:m,unreadInboxCount:ne,rightContent:De()});h.appendChild(fe),await we({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{Ie(),window.location.href="/auth"}});let b=[],r="",i=null;const C={query:"",status:"open"},F=()=>{const t=de(C.query);return b.filter(s=>oe(s,C.status)?t?[s.summary,s.description,s.reporterEmail||"",s.humanReference||""].join(" ").toLowerCase().includes(t):!0:!1)},me=t=>{const s=de(C.query);return s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0},oe=(t,s)=>s==="all"?!0:s==="open"?t.status==="open":s==="in-progress"?t.status==="in-progress":s==="require-clarification"?t.status==="require-clarification":s==="testing-bucket"?t.status==="testing"||t.status==="tested":s==="resolved"?t.status==="resolved":s==="closed-other"?t.status==="duplicate"||t.status==="wont-fix":!1,he=()=>{const t=b.filter(me);k.querySelectorAll(".issues-filter-chip").forEach(s=>{const l=s.dataset.filterValue||"all",p=t.filter(g=>oe(g,l)).length;s.classList.toggle("is-active",C.status===l),s.querySelector(".issues-filter-chip-count").textContent=String(p)})},S=()=>{const t=F();if(he(),V.textContent=`${t.length} issue${t.length===1?"":"s"} shown`,t.length===0){x.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}x.innerHTML=t.map(s=>{const l=s.bugId===r?" is-active":"",p=s.reporterEmail?`<span class="issues-list-item-reporter">${c(s.reporterEmail)}</span>`:"",g=s.implementationStatus?`<span>${c(s.implementationStatus)}</span>`:"",w=s.reportedEnvironment?`<span>${c(String(s.reportedEnvironment).toUpperCase())}</span>`:"";return`
          <button type="button" class="issues-list-item${l}" data-bug-id="${s.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${s.status}"></span>
              <strong>${c(s.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${c(s.humanReference||s.bugId)}</span>
              <span>${c(ue(s.status))}</span>
              ${w}
              ${g}
              <span>${c(D(s.updatedAt))}</span>
            </div>
            ${p}
          </button>
        `}).join("")},$=()=>{if(!i){I.hidden=!0,R.hidden=!1;return}R.hidden=!0,I.hidden=!1,G.textContent=[i.humanReference||i.bugId,`Created ${D(i.createdAt)}`,`Updated ${D(i.updatedAt)}`,i.reportedEnvironment?`Reported ${String(i.reportedEnvironment).toUpperCase()}`:"",i.implementationStatus?`Implementation ${i.implementationStatus}`:""].filter(Boolean).join(" · "),P.textContent=i.summary?.trim()||"Issue",A.textContent=ue(i.status),A.dataset.status=i.status,z.textContent=`${i.reporterDisplayName} · ${i.reporterEmail}`,_.textContent=i.description||"No description.";const t=typeof i.clarificationQuestion=="string"?i.clarificationQuestion.trim():"",s=typeof i.statusComment=="string"?i.statusComment.trim():"",l=t||(i.status==="require-clarification"?s||"Clarification requested.":"");W.hidden=!l,J.textContent=l;const p=typeof i.clarificationResponse=="string"&&i.clarificationResponse.trim()?i.clarificationResponse.trim():"";T.hidden=!p,T.textContent=p;const g=Array.isArray(i.attachments)?i.attachments:[];K.textContent=`${g.length} file${g.length===1?"":"s"}`,X.innerHTML=g.length>0?g.map(q=>He(q)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',Y.innerHTML=Be(i).map(q=>`
          <div class="issues-context-item">
            <span>${c(q.label)}</span>
            <strong>${c(q.value)}</strong>
          </div>
        `).join("");const w=Ue(i);Z.textContent=`${w.length} item${w.length===1?"":"s"}`,ee.innerHTML=j(w,"No failed requests captured for this issue.");const H=Fe(i);te.textContent=`${H.length} item${H.length===1?"":"s"}`,se.innerHTML=j(H,"No console logs captured for this issue.");const N=Me(i);ie.textContent=`${N.length} item${N.length===1?"":"s"}`,ae.innerHTML=j(N,"No recent UI events captured for this issue."),B.value=i.status,U.value=typeof i.statusComment=="string"?i.statusComment:""},M=async t=>{r=t,i=null,S(),$(),y(d,"Loading issue details…","info");try{i=(await Le(t)).bug,y(d,"","success")}catch(s){r="";const l=s instanceof Error?s.message:"Failed to load issue details";y(d,l,"error")}S(),$()},re=async()=>{const t=F();if(t.some(l=>l.bugId===r)){S();return}if(r=t[0]?.bugId||"",!r){i=null,S(),$();return}await M(r)},le=async()=>{v.disabled=!0,y(d,"Loading issues…","info");try{b=(await qe()).bugs||[],y(d,"","success"),(!r||!b.some(s=>s.bugId===r))&&(r=F()[0]?.bugId||""),S(),r?await M(r):(i=null,$())}catch(t){b=[],r="",i=null,S(),$();const s=t instanceof Error?t.message:"Failed to load issues";y(d,s,"error")}finally{v.disabled=!1}};x.addEventListener("click",t=>{const p=t.target?.closest("[data-bug-id]")?.dataset.bugId;!p||p===r||M(p)}),E.addEventListener("input",()=>{C.query=E.value,re()}),k.addEventListener("click",t=>{const l=t.target?.closest(".issues-filter-chip")?.dataset.filterValue||"all";C.status!==l&&(C.status=l,re())}),v.addEventListener("click",()=>{le()}),L.addEventListener("click",async()=>{if(r){L.disabled=!0;try{const t=await Ee(r,B.value,U.value.trim());i=t.bug,b=b.map(s=>s.bugId===r?{...s,status:t.bug.status,statusComment:typeof t.bug.statusComment=="string"?t.bug.statusComment:s.statusComment,updatedAt:typeof t.bug.updatedAt=="string"?t.bug.updatedAt:s.updatedAt,clarificationQuestion:typeof t.bug.clarificationQuestion=="string"?t.bug.clarificationQuestion:s.clarificationQuestion,clarificationResponse:typeof t.bug.clarificationResponse=="string"?t.bug.clarificationResponse:s.clarificationResponse}:s),S(),$(),ke(),y(d,"Issue updated.","success")}catch(t){const s=t instanceof Error?t.message:"Failed to update issue";y(d,s,"error")}finally{L.disabled=!1}}});const ce=await Re().catch(()=>null);if(!ce||!ce.isValid()){window.location.href="/auth";return}await le()};export{Oe as mountIssuesPage};
