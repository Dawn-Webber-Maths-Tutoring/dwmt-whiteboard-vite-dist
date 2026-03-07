import{o as L,p as k,b as A,m as P,e as x,i as U,k as B,j as I,l as F,Y as M,C as T}from"./UserMenu-MWk0fdax.js";const q="af-south-1_bIOvLpsST",E="3h1hjhsq24cm86n83oklrkf6be",S=new T({UserPoolId:q,ClientId:E}),D=async()=>new Promise((t,e)=>{const a=S?.getCurrentUser();if(!a){t(null);return}a.getSession((s,n)=>{if(s){e(s);return}t(n)})}),R=()=>{const t=S?.getCurrentUser()||null;t&&t.signOut()},H=()=>{try{const t=localStorage.getItem("dwmt-selected-student");if(!t)return[];const e=JSON.parse(t);if(Array.isArray(e))return e.filter(a=>a&&a.username&&a.email)}catch(t){console.warn("Failed to load selected students for activity filter",t)}return[]},h=t=>{if(!t)return"—";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()},N=t=>{const e=t.split("/").pop()||t;return decodeURIComponent(e)},j=()=>`
  <div class="app activity-page">
    <div id="activityAppBarContainer"></div>
    <main class="activity-layout">
      <section class="activity-card">
        <header class="activity-header">
          <h2>Activity</h2>
          <button id="activityRefreshBtn" type="button" class="activity-refresh-btn">Refresh</button>
        </header>
        <div id="activityStatus" class="activity-status" hidden></div>
        <div id="activityFilterSummary" class="activity-filter-summary" hidden></div>
        <div id="activitySummary" class="activity-summary"></div>
        <div id="activityStudentList" class="activity-student-list"></div>
      </section>
    </main>
  </div>
`,o=(t,e,a)=>{if(!e){t.hidden=!0,t.textContent="",t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=e,t.setAttribute("data-tone",a)},O=t=>{const e=t.studentEmail||"Unknown student";if(t.documents.length===0)return`
      <article class="activity-student-card">
        <header class="activity-student-card-header">
          <h3>${e}</h3>
          <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
        </header>
        <p class="activity-empty-student">No work captured yet for this student.</p>
      </article>
    `;const a=t.documents.map(s=>{const n=N(s.pdfKey),c=s.usedLegacyAttribution?'<span class="activity-legacy-hint" title="Includes older strokes without author metadata.">legacy estimate</span>':"";return`
        <li class="activity-document-row">
          <div class="activity-document-main">
            <div class="activity-document-title">${n}</div>
            <div class="activity-document-meta">
              ${s.studentPagesWithStrokes}/${s.totalPagesEstimate} pages with student strokes
              ${c}
            </div>
          </div>
          <div class="activity-document-side">
            <strong>${s.progressPercent}%</strong>
            <span>${h(s.latestStudentActivity)}</span>
          </div>
        </li>
      `}).join("");return`
    <article class="activity-student-card">
      <header class="activity-student-card-header">
        <h3>${e}</h3>
        <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
      </header>
      <p class="activity-student-meta">
        ${t.totalDocuments} document${t.totalDocuments===1?"":"s"} · Last activity: ${h(t.lastActivity)}
      </p>
      <ul class="activity-document-list">${a}</ul>
    </article>
  `},z=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const e=L(),a=k().map(i=>i.trim().toLowerCase()),s=a.includes("admin"),n=a.includes("mailbox");if(e!=="tutor"&&e!=="student"){window.location.href="/whiteboard";return}t.innerHTML=j(),t.appendChild(A()),P(),x();const c=t.querySelector("#activityAppBarContainer"),d=t.querySelector("#activityStatus"),l=t.querySelector("#activityFilterSummary"),v=t.querySelector("#activitySummary"),u=t.querySelector("#activityStudentList"),y=t.querySelector("#activityRefreshBtn");if(!c||!d||!l||!v||!u||!y)throw new Error("Activity page failed to mount");let p=0;if(n)try{p=await U()}catch(i){console.warn("Failed to load unread inbox count for activity page",i)}const b=B({currentApp:"activity",onAppChange:i=>{if(i==="whiteboard"){window.location.href="/whiteboard/";return}if(i==="inbox"){window.location.href="/mailbox/";return}if(i==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(i==="user-management"){window.location.href="/user-management/";return}i==="profile"&&(window.location.href="/profile/")},userRole:e,isAdmin:s,hasMailboxAccess:n,unreadInboxCount:p,rightContent:I()});c.appendChild(b),F({root:t,onSignOutClick:()=>{R(),window.location.href="/auth"},profileHref:"/profile/"});const m=(e==="tutor"?H():[]).map(i=>i.email?.trim().toLowerCase()||"").filter(i=>i.length>0);e==="tutor"&&m.length>0?o(l,`Filtered to selected students: ${m.join(", ")}`,"info"):e==="tutor"?o(l,"Showing all active students (no student filter selected).","info"):o(l,"Showing your activity.","info");const f=async()=>{y.disabled=!0,o(d,"Loading activity…","info");try{const i=await M(e==="tutor"?m:void 0),r=i.students,w=r.reduce((C,$)=>C+$.totalDocuments,0);v.textContent=`${r.length} student${r.length===1?"":"s"} · ${w} active document${w===1?"":"s"} · Updated ${h(i.generatedAt)}`,r.length===0?u.innerHTML='<p class="activity-empty-global">No activity found yet.</p>':u.innerHTML=r.map(O).join(""),o(d,"","success")}catch(i){const r=i instanceof Error?i.message:"Failed to load activity";o(d,r,"error"),u.innerHTML="",v.textContent=""}finally{y.disabled=!1}};y.addEventListener("click",()=>{f()});const g=await D().catch(()=>null);if(!g||!g.isValid()){window.location.href="/auth";return}await f()};export{z as mountActivityPage};
