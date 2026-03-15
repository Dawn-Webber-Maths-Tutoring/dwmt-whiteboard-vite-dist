import{t as ve,s as ge,b as be,m as ye,e as Ce,j as Se,n as De,k as we,o as xe,B as $e,_ as Le,a5 as qe,a1 as ke,a6 as Ee}from"./UserMenu-BdVzuF9D.js";import{g as Re,s as Ie}from"./authSession-vDdC_S6m.js";const pe=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Ae=()=>`
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
`,w=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},ue=e=>pe.find(n=>n.value===e)?.label||e,de=e=>e.trim().toLowerCase(),Te=()=>{switch($e()){case"test":return"DEV";case"beta":return"STG";case"prod":return"PRD";case"local":return"DEV";default:return"DEV"}},v=(e,n,r)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=r},c=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),g=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},O=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},Q=e=>e?w(e):"Unknown time",j=(e,n)=>e.length>0?e.map(r=>`
            <div class="issues-telemetry-item">
              <pre>${c(r)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${c(n)}</div>`,Be=e=>{const r=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:w(e.createdAt)},{label:"Updated",value:w(e.updatedAt)},{label:"Path",value:g(r.path)},{label:"URL",value:g(r.url)},{label:"Frontend",value:g(r.frontendDetails)},{label:"Backend",value:g(r.backendDetails)},{label:"Version",value:g(r.versionIndicator)},{label:"Likely area",value:g(e.likelyArea)},{label:"Viewport",value:g(r.viewport)},{label:"Device",value:g(r.deviceInfo)}]},Fe=e=>{const n=O(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(i=>{const f=typeof i.transport=="string"?i.transport:"?",h=typeof i.method=="string"?i.method:"GET",p=typeof i.url=="string"?i.url:"(unknown)",m=typeof i.status=="number"&&Number.isFinite(i.status)?` -> ${i.status}`:"",u=typeof i.error=="string"&&i.error.trim()?` (${i.error.trim()})`:"";return`${Q(typeof i.ts=="string"?i.ts:void 0)} · ${f.toUpperCase()} ${h.toUpperCase()} ${p}${m}${u}`})},Ue=e=>{const n=O(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(i=>{const f=typeof i.level=="string"?i.level.toUpperCase():"LOG",h=typeof i.message=="string"?i.message:"",p=typeof i.count=="number"&&Number.isFinite(i.count)?i.count:1,m=p>1?` (x${p})`:"";return`${Q(typeof i.ts=="string"?i.ts:void 0)} · ${f}${m}
${h}`.trim()})},Me=e=>{const n=O(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(i=>{const f=typeof i.type=="string"?i.type:"event",h=typeof i.target=="string"?i.target:"unknown",p=typeof i.detail=="string"&&i.detail.trim()?` · ${i.detail.trim()}`:"";return`${Q(typeof i.ts=="string"?i.ts:void 0)} · ${f} · ${h}${p}`})},He=e=>{const n=e.kind==="video",r=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${c(r)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${c(r)}</strong>
        <span>${c(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},Oe=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=ve().map(s=>s.trim().toLowerCase()),r=n.includes("admin");if(!r){window.location.href="/whiteboard";return}const i=ge(),f=n.includes("mailbox");e.innerHTML=Ae(),e.appendChild(be()),ye(),Ce();const h=e.querySelector("#issuesAppBarContainer"),p=e.querySelector("#issuesEnvironmentLabel"),m=e.querySelector("#issuesRefreshBtn"),u=e.querySelector("#issuesListStatus"),V=e.querySelector("#issuesListSummary"),x=e.querySelector("#issuesList"),q=e.querySelector("#issuesSearchInput"),k=e.querySelector("#issuesStatusFilterChips"),E=e.querySelector("#issuesDetailEmpty"),R=e.querySelector("#issuesDetailCard"),G=e.querySelector("#issuesDetailMeta"),P=e.querySelector("#issuesDetailTitle"),I=e.querySelector("#issuesDetailStatusBadge"),z=e.querySelector("#issuesDetailReporter"),_=e.querySelector("#issuesDetailDescription"),W=e.querySelector("#issuesDetailClarification"),J=e.querySelector("#issuesDetailClarificationQuestion"),A=e.querySelector("#issuesDetailClarificationResponse"),K=e.querySelector("#issuesDetailAttachmentCount"),X=e.querySelector("#issuesDetailAttachments"),Y=e.querySelector("#issuesDetailContext"),Z=e.querySelector("#issuesDetailHttpFailureCount"),ee=e.querySelector("#issuesDetailHttpFailures"),se=e.querySelector("#issuesDetailConsoleLogCount"),te=e.querySelector("#issuesDetailConsoleLogs"),ie=e.querySelector("#issuesDetailUiEventCount"),ae=e.querySelector("#issuesDetailUiEvents"),T=e.querySelector("#issuesDetailStatusSelect"),B=e.querySelector("#issuesDetailStatusNote"),$=e.querySelector("#issuesSaveBtn");if(!h||!p||!m||!u||!V||!x||!q||!k||!E||!R||!G||!P||!I||!z||!_||!W||!J||!A||!K||!X||!Y||!Z||!ee||!se||!te||!ie||!ae||!T||!B||!$)throw new Error("Issues page failed to mount");p.textContent=Te();let ne=0;if(f)try{ne=await Se()}catch(s){console.warn("Failed to load unread inbox count for issues page",s)}const fe=De({currentApp:"issues",onAppChange:s=>{if(s==="whiteboard"){window.location.href="/whiteboard/";return}if(s==="activity"){window.location.href="/activity/";return}if(s==="inbox"){window.location.href="/mailbox/";return}if(s==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(s==="notes"){window.location.href="/notes/";return}if(s==="user-management"){window.location.href="/user-management/";return}s==="profile"&&(window.location.href="/profile/")},userRole:i,isAdmin:r,hasMailboxAccess:f,unreadInboxCount:ne,rightContent:we()});h.appendChild(fe),await xe({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{Ie(),window.location.href="/auth"}});let b=[],o="",a=null;const y={query:"",status:"open"},F=()=>{const s=de(y.query);return b.filter(t=>re(t,y.status)?s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0:!1)},he=s=>{const t=de(y.query);return t?[s.summary,s.description,s.reporterEmail||"",s.humanReference||""].join(" ").toLowerCase().includes(t):!0},re=(s,t)=>t==="all"?!0:t==="open"?s.status==="open":t==="in-progress"?s.status==="in-progress":t==="require-clarification"?s.status==="require-clarification":t==="testing-bucket"?s.status==="testing"||s.status==="tested":t==="resolved"?s.status==="resolved":t==="closed-other"?s.status==="duplicate"||s.status==="wont-fix":!1,me=()=>{const s=b.filter(he);k.querySelectorAll(".issues-filter-chip").forEach(t=>{const l=t.dataset.filterValue||"all",d=s.filter(D=>re(D,l)).length;t.classList.toggle("is-active",y.status===l),t.querySelector(".issues-filter-chip-count").textContent=String(d)})},C=()=>{const s=F();if(me(),V.textContent=`${s.length} issue${s.length===1?"":"s"} shown`,s.length===0){x.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}x.innerHTML=s.map(t=>{const l=t.bugId===o?" is-active":"",d=t.reporterEmail?`<span class="issues-list-item-reporter">${c(t.reporterEmail)}</span>`:"";return`
          <button type="button" class="issues-list-item${l}" data-bug-id="${t.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${t.status}"></span>
              <strong>${c(t.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${c(t.humanReference||t.bugId)}</span>
              <span>${c(ue(t.status))}</span>
              <span>${c(w(t.updatedAt))}</span>
            </div>
            ${d}
          </button>
        `}).join("")},S=()=>{if(!a){R.hidden=!0,E.hidden=!1;return}E.hidden=!0,R.hidden=!1,G.textContent=`${a.humanReference||a.bugId} · Created ${w(a.createdAt)} · Updated ${w(a.updatedAt)}`,P.textContent=a.summary?.trim()||"Issue",I.textContent=ue(a.status),I.dataset.status=a.status,z.textContent=`${a.reporterDisplayName} · ${a.reporterEmail}`,_.textContent=a.description||"No description.";const s=typeof a.clarificationQuestion=="string"?a.clarificationQuestion.trim():"",t=typeof a.statusComment=="string"?a.statusComment.trim():"",l=s||(a.status==="require-clarification"?t||"Clarification requested.":"");W.hidden=!l,J.textContent=l;const d=typeof a.clarificationResponse=="string"&&a.clarificationResponse.trim()?a.clarificationResponse.trim():"";A.hidden=!d,A.textContent=d;const D=Array.isArray(a.attachments)?a.attachments:[];K.textContent=`${D.length} file${D.length===1?"":"s"}`,X.innerHTML=D.length>0?D.map(L=>He(L)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',Y.innerHTML=Be(a).map(L=>`
          <div class="issues-context-item">
            <span>${c(L.label)}</span>
            <strong>${c(L.value)}</strong>
          </div>
        `).join("");const M=Fe(a);Z.textContent=`${M.length} item${M.length===1?"":"s"}`,ee.innerHTML=j(M,"No failed requests captured for this issue.");const H=Ue(a);se.textContent=`${H.length} item${H.length===1?"":"s"}`,te.innerHTML=j(H,"No console logs captured for this issue.");const N=Me(a);ie.textContent=`${N.length} item${N.length===1?"":"s"}`,ae.innerHTML=j(N,"No recent UI events captured for this issue."),T.value=a.status,B.value=typeof a.statusComment=="string"?a.statusComment:""},U=async s=>{o=s,a=null,C(),S(),v(u,"Loading issue details…","info");try{a=(await Le(s)).bug,v(u,"","success")}catch(t){o="";const l=t instanceof Error?t.message:"Failed to load issue details";v(u,l,"error")}C(),S()},oe=async()=>{const s=F();if(s.some(l=>l.bugId===o)){C();return}if(o=s[0]?.bugId||"",!o){a=null,C(),S();return}await U(o)},le=async()=>{m.disabled=!0,v(u,"Loading issues…","info");try{b=(await qe()).bugs||[],v(u,"","success"),(!o||!b.some(t=>t.bugId===o))&&(o=F()[0]?.bugId||""),C(),o?await U(o):(a=null,S())}catch(s){b=[],o="",a=null,C(),S();const t=s instanceof Error?s.message:"Failed to load issues";v(u,t,"error")}finally{m.disabled=!1}};x.addEventListener("click",s=>{const d=s.target?.closest("[data-bug-id]")?.dataset.bugId;!d||d===o||U(d)}),q.addEventListener("input",()=>{y.query=q.value,oe()}),k.addEventListener("click",s=>{const l=s.target?.closest(".issues-filter-chip")?.dataset.filterValue||"all";y.status!==l&&(y.status=l,oe())}),m.addEventListener("click",()=>{le()}),$.addEventListener("click",async()=>{if(o){$.disabled=!0;try{const s=await ke(o,T.value,B.value.trim());a=s.bug,b=b.map(t=>t.bugId===o?{...t,status:s.bug.status,statusComment:typeof s.bug.statusComment=="string"?s.bug.statusComment:t.statusComment,updatedAt:typeof s.bug.updatedAt=="string"?s.bug.updatedAt:t.updatedAt,clarificationQuestion:typeof s.bug.clarificationQuestion=="string"?s.bug.clarificationQuestion:t.clarificationQuestion,clarificationResponse:typeof s.bug.clarificationResponse=="string"?s.bug.clarificationResponse:t.clarificationResponse}:t),C(),S(),Ee(),v(u,"Issue updated.","success")}catch(s){const t=s instanceof Error?s.message:"Failed to update issue";v(u,t,"error")}finally{$.disabled=!1}}});const ce=await Re().catch(()=>null);if(!ce||!ce.isValid()){window.location.href="/auth";return}await le()};export{Oe as mountIssuesPage};
