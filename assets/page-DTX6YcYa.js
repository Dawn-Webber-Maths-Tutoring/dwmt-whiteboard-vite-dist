import{q as fe,p as ve,b as he,m as ge,e as ye,i as be,k as Ce,j as Se,l as $e,y as De,_ as xe,a5 as we,a1 as Le,a6 as qe}from"./UserMenu-BC5y6lCL.js";import{g as Ee,s as Ae}from"./authSession-Bm-pI7C8.js";const V=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Ie=()=>`
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
              ${V.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
                  ${V.map(e=>`<option value="${e.value}">${e.label}</option>`).join("")}
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
`,$=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},de=e=>e==="resolved"||e==="duplicate"||e==="wont-fix",pe=e=>V.find(n=>n.value===e)?.label||e,Re=e=>e.trim().toLowerCase(),Te=()=>{switch(De()){case"test":return"Test environment";case"beta":return"Beta environment";case"prod":return"Production environment";case"local":return"Local environment";default:return"Current environment"}},g=(e,n,o)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=o},l=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),y=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},G=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},z=e=>e?$(e):"Unknown time",Q=(e,n)=>e.length>0?e.map(o=>`
            <div class="issues-telemetry-item">
              <pre>${l(o)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${l(n)}</div>`,Be=e=>{const o=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:$(e.createdAt)},{label:"Updated",value:$(e.updatedAt)},{label:"Path",value:y(o.path)},{label:"URL",value:y(o.url)},{label:"Frontend",value:y(o.frontendDetails)},{label:"Backend",value:y(o.backendDetails)},{label:"Version",value:y(o.versionIndicator)},{label:"Likely area",value:y(e.likelyArea)},{label:"Viewport",value:y(o.viewport)},{label:"Device",value:y(o.deviceInfo)}]},Fe=e=>{const n=G(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(i=>{const p=typeof i.transport=="string"?i.transport:"?",m=typeof i.method=="string"?i.method:"GET",d=typeof i.url=="string"?i.url:"(unknown)",f=typeof i.status=="number"&&Number.isFinite(i.status)?` -> ${i.status}`:"",c=typeof i.error=="string"&&i.error.trim()?` (${i.error.trim()})`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${p.toUpperCase()} ${m.toUpperCase()} ${d}${f}${c}`})},Ue=e=>{const n=G(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(i=>{const p=typeof i.level=="string"?i.level.toUpperCase():"LOG",m=typeof i.message=="string"?i.message:"",d=typeof i.count=="number"&&Number.isFinite(i.count)?i.count:1,f=d>1?` (x${d})`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${p}${f}
${m}`.trim()})},ke=e=>{const n=G(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(i=>{const p=typeof i.type=="string"?i.type:"event",m=typeof i.target=="string"?i.target:"unknown",d=typeof i.detail=="string"&&i.detail.trim()?` · ${i.detail.trim()}`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${p} · ${m}${d}`})},He=e=>{const n=e.kind==="video",o=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${l(o)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${l(o)}</strong>
        <span>${l(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},Oe=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=fe().map(s=>s.trim().toLowerCase()),o=n.includes("admin");if(!o){window.location.href="/whiteboard";return}const i=ve(),p=n.includes("mailbox");e.innerHTML=Ie(),e.appendChild(he()),ge(),ye();const m=e.querySelector("#issuesAppBarContainer"),d=e.querySelector("#issuesEnvironmentLabel"),f=e.querySelector("#issuesRefreshBtn"),c=e.querySelector("#issuesListStatus"),P=e.querySelector("#issuesListSummary"),D=e.querySelector("#issuesList"),q=e.querySelector("#issuesSearchInput"),E=e.querySelector("#issuesStateFilter"),A=e.querySelector("#issuesStatusFilter"),I=e.querySelector("#issuesDetailEmpty"),R=e.querySelector("#issuesDetailCard"),_=e.querySelector("#issuesDetailMeta"),W=e.querySelector("#issuesDetailTitle"),T=e.querySelector("#issuesDetailStatusBadge"),J=e.querySelector("#issuesDetailReporter"),K=e.querySelector("#issuesDetailDescription"),X=e.querySelector("#issuesDetailClarification"),Y=e.querySelector("#issuesDetailClarificationQuestion"),B=e.querySelector("#issuesDetailClarificationResponse"),Z=e.querySelector("#issuesDetailAttachmentCount"),ee=e.querySelector("#issuesDetailAttachments"),se=e.querySelector("#issuesDetailContext"),te=e.querySelector("#issuesDetailHttpFailureCount"),ie=e.querySelector("#issuesDetailHttpFailures"),ae=e.querySelector("#issuesDetailConsoleLogCount"),ne=e.querySelector("#issuesDetailConsoleLogs"),oe=e.querySelector("#issuesDetailUiEventCount"),re=e.querySelector("#issuesDetailUiEvents"),F=e.querySelector("#issuesDetailStatusSelect"),U=e.querySelector("#issuesDetailStatusNote"),x=e.querySelector("#issuesSaveBtn");if(!m||!d||!f||!c||!P||!D||!q||!E||!A||!I||!R||!_||!W||!T||!J||!K||!X||!Y||!B||!Z||!ee||!se||!te||!ie||!ae||!ne||!oe||!re||!F||!U||!x)throw new Error("Issues page failed to mount");d.textContent=Te();let le=0;if(p)try{le=await be()}catch(s){console.warn("Failed to load unread inbox count for issues page",s)}const me=Ce({currentApp:"issues",onAppChange:s=>{if(s==="whiteboard"){window.location.href="/whiteboard/";return}if(s==="activity"){window.location.href="/activity/";return}if(s==="inbox"){window.location.href="/mailbox/";return}if(s==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(s==="notes"){window.location.href="/notes/";return}if(s==="user-management"){window.location.href="/user-management/";return}s==="profile"&&(window.location.href="/profile/")},userRole:i,isAdmin:o,hasMailboxAccess:p,unreadInboxCount:le,rightContent:Se()});m.appendChild(me),await $e({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{Ae(),window.location.href="/auth"}});let C=[],r="",a=null;const v={query:"",state:"open",status:""},k=()=>{const s=Re(v.query);return C.filter(t=>v.state==="open"&&de(t.status)||v.state==="closed"&&!de(t.status)||v.status&&t.status!==v.status?!1:s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0)},b=()=>{const s=k();if(P.textContent=`${s.length} issue${s.length===1?"":"s"} shown`,s.length===0){D.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}D.innerHTML=s.map(t=>{const u=t.bugId===r?" is-active":"",h=t.reporterEmail?`<span class="issues-list-item-reporter">${l(t.reporterEmail)}</span>`:"";return`
          <button type="button" class="issues-list-item${u}" data-bug-id="${t.bugId}">
            <div class="issues-list-item-row">
              <span class="issues-status-dot" data-status="${t.status}"></span>
              <strong>${l(t.summary)}</strong>
            </div>
            <div class="issues-list-item-meta">
              <span>${l(t.humanReference||t.bugId)}</span>
              <span>${l(pe(t.status))}</span>
              <span>${l($(t.updatedAt))}</span>
            </div>
            ${h}
          </button>
        `}).join("")},S=()=>{if(!a){R.hidden=!0,I.hidden=!1;return}I.hidden=!0,R.hidden=!1,_.textContent=`${a.humanReference||a.bugId} · Created ${$(a.createdAt)} · Updated ${$(a.updatedAt)}`,W.textContent=a.summary?.trim()||"Issue",T.textContent=pe(a.status),T.dataset.status=a.status,J.textContent=`${a.reporterDisplayName} · ${a.reporterEmail}`,K.textContent=a.description||"No description.";const s=typeof a.clarificationQuestion=="string"?a.clarificationQuestion.trim():"",t=typeof a.statusComment=="string"?a.statusComment.trim():"",u=s||(a.status==="require-clarification"?t||"Clarification requested.":"");X.hidden=!u,Y.textContent=u;const h=typeof a.clarificationResponse=="string"&&a.clarificationResponse.trim()?a.clarificationResponse.trim():"";B.hidden=!h,B.textContent=h;const w=Array.isArray(a.attachments)?a.attachments:[];Z.textContent=`${w.length} file${w.length===1?"":"s"}`,ee.innerHTML=w.length>0?w.map(L=>He(L)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',se.innerHTML=Be(a).map(L=>`
          <div class="issues-context-item">
            <span>${l(L.label)}</span>
            <strong>${l(L.value)}</strong>
          </div>
        `).join("");const M=Fe(a);te.textContent=`${M.length} item${M.length===1?"":"s"}`,ie.innerHTML=Q(M,"No failed requests captured for this issue.");const O=Ue(a);ae.textContent=`${O.length} item${O.length===1?"":"s"}`,ne.innerHTML=Q(O,"No console logs captured for this issue.");const j=ke(a);oe.textContent=`${j.length} item${j.length===1?"":"s"}`,re.innerHTML=Q(j,"No recent UI events captured for this issue."),F.value=a.status,U.value=typeof a.statusComment=="string"?a.statusComment:""},H=async s=>{r=s,a=null,b(),S(),g(c,"Loading issue details…","info");try{a=(await xe(s)).bug,g(c,"","success")}catch(t){r="";const u=t instanceof Error?t.message:"Failed to load issue details";g(c,u,"error")}b(),S()},N=async()=>{const s=k();if(s.some(u=>u.bugId===r)){b();return}if(r=s[0]?.bugId||"",!r){a=null,b(),S();return}await H(r)},ce=async()=>{f.disabled=!0,g(c,"Loading issues…","info");try{C=(await we()).bugs||[],g(c,"","success"),(!r||!C.some(t=>t.bugId===r))&&(r=k()[0]?.bugId||""),b(),r?await H(r):(a=null,S())}catch(s){C=[],r="",a=null,b(),S();const t=s instanceof Error?s.message:"Failed to load issues";g(c,t,"error")}finally{f.disabled=!1}};D.addEventListener("click",s=>{const h=s.target?.closest("[data-bug-id]")?.dataset.bugId;!h||h===r||H(h)}),q.addEventListener("input",()=>{v.query=q.value,N()}),E.addEventListener("change",()=>{v.state=E.value,N()}),A.addEventListener("change",()=>{v.status=A.value||"",N()}),f.addEventListener("click",()=>{ce()}),x.addEventListener("click",async()=>{if(r){x.disabled=!0;try{const s=await Le(r,F.value,U.value.trim());a=s.bug,C=C.map(t=>t.bugId===r?{...t,status:s.bug.status,statusComment:typeof s.bug.statusComment=="string"?s.bug.statusComment:t.statusComment,updatedAt:typeof s.bug.updatedAt=="string"?s.bug.updatedAt:t.updatedAt,clarificationQuestion:typeof s.bug.clarificationQuestion=="string"?s.bug.clarificationQuestion:t.clarificationQuestion,clarificationResponse:typeof s.bug.clarificationResponse=="string"?s.bug.clarificationResponse:t.clarificationResponse}:t),b(),S(),qe(),g(c,"Issue updated.","success")}catch(s){const t=s instanceof Error?s.message:"Failed to update issue";g(c,t,"error")}finally{x.disabled=!1}}});const ue=await Ee().catch(()=>null);if(!ue||!ue.isValid()){window.location.href="/auth";return}await ce()};export{Oe as mountIssuesPage};
