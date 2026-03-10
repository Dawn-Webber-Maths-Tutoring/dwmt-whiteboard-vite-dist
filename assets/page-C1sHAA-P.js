import{o as M,p as E,b as I,m as R,e as H,i as N,k as U,j as D,l as j,a2 as O,a3 as G}from"./UserMenu-D_ZLiPbU.js";import{c as J}from"./studentPicker--1eQP9lv.js";import{g as V,s as z}from"./authSession-mJbn7jB0.js";const W=()=>{try{const t=localStorage.getItem("dwmt-selected-student");if(!t)return[];const e=JSON.parse(t);if(Array.isArray(e))return e.filter(r=>r&&r.username&&r.email)}catch(t){console.warn("Failed to load selected students for activity filter",t)}return[]},_=t=>{try{if(t.length>0){localStorage.setItem("dwmt-selected-student",JSON.stringify(t));return}localStorage.removeItem("dwmt-selected-student")}catch(e){console.warn("Failed to save selected students for activity filter",e)}},F=(t,e,r)=>{const a=t.querySelector("#studentAvatarGroup");if(!a)return;if(e!=="tutor"||r.length===0){a.hidden=!0,a.innerHTML="";return}const s=document.createDocumentFragment();r.forEach(o=>{const n=document.createElement("button");n.type="button",n.className="student-avatar";const d=o.avatarUrl||"/default_avatar.png";n.innerHTML=`<img src="${d}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const l=o.displayName?.trim()||o.email||o.username;n.title=l,n.setAttribute("aria-label",`Selected student: ${l}`),s.appendChild(n)}),a.hidden=!1,a.innerHTML="",a.appendChild(s)},p=t=>{if(!t)return"—";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()},K=(t,e)=>{const r=typeof e=="string"?e.trim():"";if(r)return r;const a=t.split("/").pop()||t,s=decodeURIComponent(a);return s.replace(/\.pdf$/i,"").trim()||s},Q=()=>`
  <div class="app activity-page">
    <div id="activityAppBarContainer"></div>
    <div class="student-panel" id="activityStudentPanel" hidden>
      <div class="student-panel-header">
        <div>
          <h3>Students</h3>
          <p>Select students to filter activity</p>
        </div>
        <button class="student-panel-close" id="activityStudentClose" type="button" aria-label="Close student list">×</button>
      </div>
      <div class="student-panel-search">
        <input id="activityStudentSearchInput" type="search" placeholder="Search by name or email" />
      </div>
      <div class="student-panel-status" id="activityStudentStatus"></div>
      <button class="student-panel-clear" id="activityStudentClear" type="button" hidden>Clear Students</button>
      <div class="student-results" id="activityStudentResults"></div>
    </div>
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
`,u=(t,e,r)=>{if(!e){t.hidden=!0,t.textContent="",t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=e,t.setAttribute("data-tone",r)},X=t=>{const e=t.studentEmail||"Unknown student";if(t.documents.length===0)return`
      <article class="activity-student-card">
        <header class="activity-student-card-header">
          <h3>${e}</h3>
          <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
        </header>
        <p class="activity-empty-student">No work captured yet for this student.</p>
      </article>
    `;const r=t.documents.map(a=>{const s=K(a.pdfKey,a.displayTitle),o=a.usedLegacyAttribution?'<span class="activity-legacy-hint" title="Includes older strokes without author metadata.">legacy estimate</span>':"";return`
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
            <span>${p(a.latestStudentActivity)}</span>
          </div>
        </li>
      `}).join("");return`
    <article class="activity-student-card">
      <header class="activity-student-card-header">
        <h3>${e}</h3>
        <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
      </header>
      <p class="activity-student-meta">
        ${t.totalDocuments} document${t.totalDocuments===1?"":"s"} · Last activity: ${p(t.lastActivity)}
      </p>
      <ul class="activity-document-list">${r}</ul>
    </article>
  `},et=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const e=M(),r=E().map(i=>i.trim().toLowerCase()),a=r.includes("admin"),s=r.includes("mailbox");if(e!=="tutor"&&e!=="student"){window.location.href="/whiteboard";return}t.innerHTML=Q(),t.appendChild(I()),R(),H();const o=t.querySelector("#activityAppBarContainer"),n=t.querySelector("#activityStatus"),d=t.querySelector("#activityFilterSummary"),l=t.querySelector("#activitySummary"),y=t.querySelector("#activityStudentList"),m=t.querySelector("#activityRefreshBtn"),f=t.querySelector("#activityStudentPanel"),S=t.querySelector("#activityStudentClose"),g=t.querySelector("#activityStudentSearchInput"),w=t.querySelector("#activityStudentStatus"),b=t.querySelector("#activityStudentClear"),C=t.querySelector("#activityStudentResults");if(!o||!n||!d||!l||!y||!m||!f||!S||!g||!w||!b||!C)throw new Error("Activity page failed to mount");let $=0;if(s)try{$=await N()}catch(i){console.warn("Failed to load unread inbox count for activity page",i)}const P=U({currentApp:"activity",onAppChange:i=>{if(i==="whiteboard"){window.location.href="/whiteboard/";return}if(i==="inbox"){window.location.href="/mailbox/";return}if(i==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(i==="notes"){window.location.href="/notes/";return}if(i==="issues"){window.location.href="/issues/";return}if(i==="user-management"){window.location.href="/user-management/";return}i==="profile"&&(window.location.href="/profile/")},userRole:e,isAdmin:a,hasMailboxAccess:s,unreadInboxCount:$,rightContent:D()});o.appendChild(P);let v=e==="tutor"?W():[];const L=()=>v.map(i=>i.email?.trim().toLowerCase()||"").filter(i=>i.length>0),A=()=>{const i=L();if(e==="tutor"&&i.length>0){u(d,`Filtered to selected students: ${i.join(", ")}`,"info");return}if(e==="tutor"){u(d,"Showing all active students (no student filter selected).","info");return}u(d,"Showing your activity.","info")},h=async()=>{m.disabled=!0,u(n,"Loading activity…","info");try{const i=await O(e==="tutor"?L():void 0),c=i.students,B=c.reduce((T,x)=>T+x.totalDocuments,0);l.textContent=`${c.length} student${c.length===1?"":"s"} · ${B} active document${B===1?"":"s"} · Updated ${p(i.generatedAt)}`,c.length===0?y.innerHTML='<p class="activity-empty-global">No activity found yet.</p>':y.innerHTML=c.map(X).join(""),u(n,"","success")}catch(i){const c=i instanceof Error?i.message:"Failed to load activity";u(n,c,"error"),y.innerHTML="",l.textContent=""}finally{m.disabled=!1}};let k=null;j({root:t,onSignOutClick:()=>{z(),window.location.href="/auth"},profileHref:"/profile/",hideSelectStudent:!1,onSelectStudentClick:()=>{e==="tutor"&&k?.setOpen(!0)}}),F(t,e,v),A(),k=J({elements:{panel:f,closeButton:S,searchInput:g,status:w,clearButton:b,results:C},getToggleButton:()=>t.querySelector("#studentToggle"),fetchStudents:G,getSelected:()=>v,setSelected:i=>{v=i,_(i)},onSelectionChanged:()=>{F(t,e,v),A(),h()}}),m.addEventListener("click",()=>{h()});const q=await V().catch(()=>null);if(!q||!q.isValid()){window.location.href="/auth";return}await h()};export{et as mountActivityPage};
