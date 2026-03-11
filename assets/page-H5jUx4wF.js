import{p as fe,o as ve,b as he,m as ge,e as ye,i as be,k as Ce,j as Se,l as $e,x as De,Z as we,a4 as xe,a0 as Le}from"./UserMenu-D9Aidcen.js";import{g as qe,s as Ee}from"./authSession-B_KcTfm2.js";const V=[{value:"open",label:"Open"},{value:"in-progress",label:"In progress"},{value:"require-clarification",label:"Needs clarification"},{value:"testing",label:"Testing"},{value:"tested",label:"Tested"},{value:"resolved",label:"Resolved"},{value:"duplicate",label:"Duplicate"},{value:"wont-fix",label:"Won't fix"}],Ae=()=>`
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
`,$=e=>{if(!e)return"Unknown";const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toLocaleString()},de=e=>e==="resolved"||e==="duplicate"||e==="wont-fix",pe=e=>V.find(n=>n.value===e)?.label||e,Ie=e=>e.trim().toLowerCase(),Re=()=>{switch(De()){case"test":return"Test environment";case"beta":return"Beta environment";case"prod":return"Production environment";case"local":return"Local environment";default:return"Current environment"}},v=(e,n,o)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=o},l=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),h=e=>{if(typeof e=="string")return e.trim()||"—";if(typeof e=="number"||typeof e=="boolean")return String(e);if(!e)return"—";try{return JSON.stringify(e)}catch{return String(e)}},G=e=>e&&typeof e=="object"&&!Array.isArray(e)?e:{},z=e=>e?$(e):"Unknown time",Q=(e,n)=>e.length>0?e.map(o=>`
            <div class="issues-telemetry-item">
              <pre>${l(o)}</pre>
            </div>
          `).join(""):`<div class="issues-empty-attachments">${l(n)}</div>`,Te=e=>{const o=e.context&&typeof e.context=="object"?e.context:{};return[{label:"Issue ID",value:e.bugId},{label:"Reference",value:e.humanReference||e.bugId},{label:"Created",value:$(e.createdAt)},{label:"Updated",value:$(e.updatedAt)},{label:"Path",value:h(o.path)},{label:"URL",value:h(o.url)},{label:"Frontend",value:h(o.frontendDetails)},{label:"Backend",value:h(o.backendDetails)},{label:"Version",value:h(o.versionIndicator)},{label:"Likely area",value:h(e.likelyArea)},{label:"Viewport",value:h(o.viewport)},{label:"Device",value:h(o.deviceInfo)}]},Be=e=>{const n=G(e.context);return(Array.isArray(n.recentHttpFailures)?n.recentHttpFailures:[]).map(i=>{const d=typeof i.transport=="string"?i.transport:"?",p=typeof i.method=="string"?i.method:"GET",y=typeof i.url=="string"?i.url:"(unknown)",b=typeof i.status=="number"&&Number.isFinite(i.status)?` -> ${i.status}`:"",c=typeof i.error=="string"&&i.error.trim()?` (${i.error.trim()})`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${d.toUpperCase()} ${p.toUpperCase()} ${y}${b}${c}`})},Fe=e=>{const n=G(e.context);return(Array.isArray(n.recentConsoleLogs)?n.recentConsoleLogs:[]).map(i=>{const d=typeof i.level=="string"?i.level.toUpperCase():"LOG",p=typeof i.message=="string"?i.message:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${d}
${p}`.trim()})},Ue=e=>{const n=G(e.context);return(Array.isArray(n.recentUiEvents)?n.recentUiEvents:[]).map(i=>{const d=typeof i.type=="string"?i.type:"event",p=typeof i.target=="string"?i.target:"unknown",y=typeof i.detail=="string"&&i.detail.trim()?` · ${i.detail.trim()}`:"";return`${z(typeof i.ts=="string"?i.ts:void 0)} · ${d} · ${p}${y}`})},ke=e=>{const n=e.kind==="video",o=e.filename||"attachment";return`
    <article class="issues-attachment-card">
      <div class="issues-attachment-preview">${n?`<video controls preload="metadata" src="${e.url}"></video>`:`<img src="${e.url}" alt="${l(o)}" loading="lazy" />`}</div>
      <div class="issues-attachment-meta">
        <strong>${l(o)}</strong>
        <span>${l(e.contentType)}</span>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </article>
  `},Me=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const n=fe().map(s=>s.trim().toLowerCase()),o=n.includes("admin");if(!o){window.location.href="/whiteboard";return}const i=ve(),d=n.includes("mailbox");e.innerHTML=Ae(),e.appendChild(he()),ge(),ye();const p=e.querySelector("#issuesAppBarContainer"),y=e.querySelector("#issuesEnvironmentLabel"),b=e.querySelector("#issuesRefreshBtn"),c=e.querySelector("#issuesListStatus"),P=e.querySelector("#issuesListSummary"),D=e.querySelector("#issuesList"),q=e.querySelector("#issuesSearchInput"),E=e.querySelector("#issuesStateFilter"),A=e.querySelector("#issuesStatusFilter"),I=e.querySelector("#issuesDetailEmpty"),R=e.querySelector("#issuesDetailCard"),_=e.querySelector("#issuesDetailMeta"),W=e.querySelector("#issuesDetailTitle"),T=e.querySelector("#issuesDetailStatusBadge"),J=e.querySelector("#issuesDetailReporter"),Z=e.querySelector("#issuesDetailDescription"),K=e.querySelector("#issuesDetailClarification"),X=e.querySelector("#issuesDetailClarificationQuestion"),B=e.querySelector("#issuesDetailClarificationResponse"),Y=e.querySelector("#issuesDetailAttachmentCount"),ee=e.querySelector("#issuesDetailAttachments"),se=e.querySelector("#issuesDetailContext"),te=e.querySelector("#issuesDetailHttpFailureCount"),ie=e.querySelector("#issuesDetailHttpFailures"),ae=e.querySelector("#issuesDetailConsoleLogCount"),ne=e.querySelector("#issuesDetailConsoleLogs"),oe=e.querySelector("#issuesDetailUiEventCount"),re=e.querySelector("#issuesDetailUiEvents"),F=e.querySelector("#issuesDetailStatusSelect"),U=e.querySelector("#issuesDetailStatusNote"),w=e.querySelector("#issuesSaveBtn");if(!p||!y||!b||!c||!P||!D||!q||!E||!A||!I||!R||!_||!W||!T||!J||!Z||!K||!X||!B||!Y||!ee||!se||!te||!ie||!ae||!ne||!oe||!re||!F||!U||!w)throw new Error("Issues page failed to mount");y.textContent=Re();let le=0;if(d)try{le=await be()}catch(s){console.warn("Failed to load unread inbox count for issues page",s)}const me=Ce({currentApp:"issues",onAppChange:s=>{if(s==="whiteboard"){window.location.href="/whiteboard/";return}if(s==="activity"){window.location.href="/activity/";return}if(s==="inbox"){window.location.href="/mailbox/";return}if(s==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(s==="notes"){window.location.href="/notes/";return}if(s==="user-management"){window.location.href="/user-management/";return}s==="profile"&&(window.location.href="/profile/")},userRole:i,isAdmin:o,hasMailboxAccess:d,unreadInboxCount:le,rightContent:Se()});p.appendChild(me),await $e({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:()=>{Ee(),window.location.href="/auth"}});let C=[],r="",a=null;const m={query:"",state:"open",status:""},k=()=>{const s=Ie(m.query);return C.filter(t=>m.state==="open"&&de(t.status)||m.state==="closed"&&!de(t.status)||m.status&&t.status!==m.status?!1:s?[t.summary,t.description,t.reporterEmail||"",t.humanReference||""].join(" ").toLowerCase().includes(s):!0)},g=()=>{const s=k();if(P.textContent=`${s.length} issue${s.length===1?"":"s"} shown`,s.length===0){D.innerHTML='<div class="issues-empty-list">No issues match the current filters.</div>';return}D.innerHTML=s.map(t=>{const u=t.bugId===r?" is-active":"",f=t.reporterEmail?`<span class="issues-list-item-reporter">${l(t.reporterEmail)}</span>`:"";return`
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
            ${f}
          </button>
        `}).join("")},S=()=>{if(!a){R.hidden=!0,I.hidden=!1;return}I.hidden=!0,R.hidden=!1,_.textContent=`${a.humanReference||a.bugId} · Created ${$(a.createdAt)} · Updated ${$(a.updatedAt)}`,W.textContent=a.summary?.trim()||"Issue",T.textContent=pe(a.status),T.dataset.status=a.status,J.textContent=`${a.reporterDisplayName} · ${a.reporterEmail}`,Z.textContent=a.description||"No description.";const s=typeof a.clarificationQuestion=="string"?a.clarificationQuestion.trim():"",t=typeof a.statusComment=="string"?a.statusComment.trim():"",u=s||(a.status==="require-clarification"?t||"Clarification requested.":"");K.hidden=!u,X.textContent=u;const f=typeof a.clarificationResponse=="string"&&a.clarificationResponse.trim()?a.clarificationResponse.trim():"";B.hidden=!f,B.textContent=f;const x=Array.isArray(a.attachments)?a.attachments:[];Y.textContent=`${x.length} file${x.length===1?"":"s"}`,ee.innerHTML=x.length>0?x.map(L=>ke(L)).join(""):'<div class="issues-empty-attachments">No attachments for this issue.</div>',se.innerHTML=Te(a).map(L=>`
          <div class="issues-context-item">
            <span>${l(L.label)}</span>
            <strong>${l(L.value)}</strong>
          </div>
        `).join("");const M=Be(a);te.textContent=`${M.length} item${M.length===1?"":"s"}`,ie.innerHTML=Q(M,"No failed requests captured for this issue.");const O=Fe(a);ae.textContent=`${O.length} item${O.length===1?"":"s"}`,ne.innerHTML=Q(O,"No console logs captured for this issue.");const j=Ue(a);oe.textContent=`${j.length} item${j.length===1?"":"s"}`,re.innerHTML=Q(j,"No recent UI events captured for this issue."),F.value=a.status,U.value=typeof a.statusComment=="string"?a.statusComment:""},H=async s=>{r=s,a=null,g(),S(),v(c,"Loading issue details…","info");try{a=(await we(s)).bug,v(c,"","success")}catch(t){r="";const u=t instanceof Error?t.message:"Failed to load issue details";v(c,u,"error")}g(),S()},N=async()=>{const s=k();if(s.some(u=>u.bugId===r)){g();return}if(r=s[0]?.bugId||"",!r){a=null,g(),S();return}await H(r)},ce=async()=>{b.disabled=!0,v(c,"Loading issues…","info");try{C=(await xe()).bugs||[],v(c,"","success"),(!r||!C.some(t=>t.bugId===r))&&(r=k()[0]?.bugId||""),g(),r?await H(r):(a=null,S())}catch(s){C=[],r="",a=null,g(),S();const t=s instanceof Error?s.message:"Failed to load issues";v(c,t,"error")}finally{b.disabled=!1}};D.addEventListener("click",s=>{const f=s.target?.closest("[data-bug-id]")?.dataset.bugId;!f||f===r||H(f)}),q.addEventListener("input",()=>{m.query=q.value,N()}),E.addEventListener("change",()=>{m.state=E.value,N()}),A.addEventListener("change",()=>{m.status=A.value||"",N()}),b.addEventListener("click",()=>{ce()}),w.addEventListener("click",async()=>{if(r){w.disabled=!0;try{const s=await Le(r,F.value,U.value.trim());a=s.bug,C=C.map(t=>t.bugId===r?{...t,status:s.bug.status,statusComment:typeof s.bug.statusComment=="string"?s.bug.statusComment:t.statusComment,updatedAt:typeof s.bug.updatedAt=="string"?s.bug.updatedAt:t.updatedAt,clarificationQuestion:typeof s.bug.clarificationQuestion=="string"?s.bug.clarificationQuestion:t.clarificationQuestion,clarificationResponse:typeof s.bug.clarificationResponse=="string"?s.bug.clarificationResponse:t.clarificationResponse}:t),g(),S(),v(c,"Issue updated.","success")}catch(s){const t=s instanceof Error?s.message:"Failed to update issue";v(c,t,"error")}finally{w.disabled=!1}}});const ue=await qe().catch(()=>null);if(!ue||!ue.isValid()){window.location.href="/auth";return}await ce()};export{Me as mountIssuesPage};
