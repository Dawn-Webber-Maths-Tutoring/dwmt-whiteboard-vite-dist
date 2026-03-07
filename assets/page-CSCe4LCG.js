import{o as L,p as k,b as P,m as U,e as x,i as M,k as T,j as B,l as E,Y as F,C as I}from"./UserMenu-BpcQM8oA.js";const q="af-south-1_bIOvLpsST",H="3h1hjhsq24cm86n83oklrkf6be",b=new I({UserPoolId:q,ClientId:H}),D=async()=>new Promise((t,e)=>{const r=b?.getCurrentUser();if(!r){t(null);return}r.getSession((a,s)=>{if(a){e(a);return}t(s)})}),N=()=>{const t=b?.getCurrentUser()||null;t&&t.signOut()},R=()=>{try{const t=localStorage.getItem("dwmt-selected-student");if(!t)return[];const e=JSON.parse(t);if(Array.isArray(e))return e.filter(r=>r&&r.username&&r.email)}catch(t){console.warn("Failed to load selected students for activity filter",t)}return[]},j=(t,e,r)=>{const a=t.querySelector("#studentAvatarGroup");if(!a)return;if(e!=="tutor"||r.length===0){a.hidden=!0,a.innerHTML="";return}const s=document.createDocumentFragment();r.forEach(o=>{const n=document.createElement("button");n.type="button",n.className="student-avatar";const d=o.avatarUrl||"/default_avatar.png";n.innerHTML=`<img src="${d}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const l=o.displayName?.trim()||o.email||o.username;n.title=l,n.setAttribute("aria-label",`Selected student: ${l}`),s.appendChild(n)}),a.hidden=!1,a.innerHTML="",a.appendChild(s)},h=t=>{if(!t)return"—";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()},O=t=>{const e=t.split("/").pop()||t;return decodeURIComponent(e)},G=()=>`
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
`,u=(t,e,r)=>{if(!e){t.hidden=!0,t.textContent="",t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=e,t.setAttribute("data-tone",r)},V=t=>{const e=t.studentEmail||"Unknown student";if(t.documents.length===0)return`
      <article class="activity-student-card">
        <header class="activity-student-card-header">
          <h3>${e}</h3>
          <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
        </header>
        <p class="activity-empty-student">No work captured yet for this student.</p>
      </article>
    `;const r=t.documents.map(a=>{const s=O(a.pdfKey),o=a.usedLegacyAttribution?'<span class="activity-legacy-hint" title="Includes older strokes without author metadata.">legacy estimate</span>':"";return`
        <li class="activity-document-row">
          <div class="activity-document-main">
            <div class="activity-document-title">${s}</div>
            <div class="activity-document-meta">
              ${a.studentPagesWithStrokes}/${a.totalPagesEstimate} pages with student strokes
              ${o}
            </div>
          </div>
          <div class="activity-document-side">
            <strong>${a.progressPercent}%</strong>
            <span>${h(a.latestStudentActivity)}</span>
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
      <ul class="activity-document-list">${r}</ul>
    </article>
  `},z=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const e=L(),r=k().map(i=>i.trim().toLowerCase()),a=r.includes("admin"),s=r.includes("mailbox");if(e!=="tutor"&&e!=="student"){window.location.href="/whiteboard";return}t.innerHTML=G(),t.appendChild(P()),U(),x();const o=t.querySelector("#activityAppBarContainer"),n=t.querySelector("#activityStatus"),d=t.querySelector("#activityFilterSummary"),l=t.querySelector("#activitySummary"),v=t.querySelector("#activityStudentList"),y=t.querySelector("#activityRefreshBtn");if(!o||!n||!d||!l||!v||!y)throw new Error("Activity page failed to mount");let p=0;if(s)try{p=await M()}catch(i){console.warn("Failed to load unread inbox count for activity page",i)}const C=T({currentApp:"activity",onAppChange:i=>{if(i==="whiteboard"){window.location.href="/whiteboard/";return}if(i==="inbox"){window.location.href="/mailbox/";return}if(i==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(i==="user-management"){window.location.href="/user-management/";return}i==="profile"&&(window.location.href="/profile/")},userRole:e,isAdmin:a,hasMailboxAccess:s,unreadInboxCount:p,rightContent:B()});o.appendChild(C),E({root:t,onSignOutClick:()=>{N(),window.location.href="/auth"},profileHref:"/profile/",hideSelectStudent:!1,onSelectStudentClick:()=>{window.location.href="/whiteboard/?selectStudents=1"}});const f=e==="tutor"?R():[];j(t,e,f);const m=f.map(i=>i.email?.trim().toLowerCase()||"").filter(i=>i.length>0);e==="tutor"&&m.length>0?u(d,`Filtered to selected students: ${m.join(", ")}`,"info"):e==="tutor"?u(d,"Showing all active students (no student filter selected).","info"):u(d,"Showing your activity.","info");const g=async()=>{y.disabled=!0,u(n,"Loading activity…","info");try{const i=await F(e==="tutor"?m:void 0),c=i.students,S=c.reduce(($,A)=>$+A.totalDocuments,0);l.textContent=`${c.length} student${c.length===1?"":"s"} · ${S} active document${S===1?"":"s"} · Updated ${h(i.generatedAt)}`,c.length===0?v.innerHTML='<p class="activity-empty-global">No activity found yet.</p>':v.innerHTML=c.map(V).join(""),u(n,"","success")}catch(i){const c=i instanceof Error?i.message:"Failed to load activity";u(n,c,"error"),v.innerHTML="",l.textContent=""}finally{y.disabled=!1}};y.addEventListener("click",()=>{g()});const w=await D().catch(()=>null);if(!w||!w.isValid()){window.location.href="/auth";return}await g()};export{z as mountActivityPage};
