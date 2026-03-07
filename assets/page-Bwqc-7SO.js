import{o as M,p as x,b as E,m as R,e as H,i as N,k as D,j as O,l as j,Y as G,C as J,Z as V}from"./UserMenu-D_fWJJ2B.js";import{c as _}from"./studentPicker--1eQP9lv.js";const z="af-south-1_bIOvLpsST",W="3h1hjhsq24cm86n83oklrkf6be",B=new J({UserPoolId:z,ClientId:W}),Y=async()=>new Promise((t,e)=>{const n=B?.getCurrentUser();if(!n){t(null);return}n.getSession((a,s)=>{if(a){e(a);return}t(s)})}),Z=()=>{const t=B?.getCurrentUser()||null;t&&t.signOut()},K=()=>{try{const t=localStorage.getItem("dwmt-selected-student");if(!t)return[];const e=JSON.parse(t);if(Array.isArray(e))return e.filter(n=>n&&n.username&&n.email)}catch(t){console.warn("Failed to load selected students for activity filter",t)}return[]},Q=t=>{try{if(t.length>0){localStorage.setItem("dwmt-selected-student",JSON.stringify(t));return}localStorage.removeItem("dwmt-selected-student")}catch(e){console.warn("Failed to save selected students for activity filter",e)}},I=(t,e,n)=>{const a=t.querySelector("#studentAvatarGroup");if(!a)return;if(e!=="tutor"||n.length===0){a.hidden=!0,a.innerHTML="";return}const s=document.createDocumentFragment();n.forEach(o=>{const r=document.createElement("button");r.type="button",r.className="student-avatar";const l=o.avatarUrl||"/default_avatar.png";r.innerHTML=`<img src="${l}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const d=o.displayName?.trim()||o.email||o.username;r.title=d,r.setAttribute("aria-label",`Selected student: ${d}`),s.appendChild(r)}),a.hidden=!1,a.innerHTML="",a.appendChild(s)},p=t=>{if(!t)return"—";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()},X=t=>{const e=t.split("/").pop()||t;return decodeURIComponent(e)},tt=()=>`
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
`,u=(t,e,n)=>{if(!e){t.hidden=!0,t.textContent="",t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=e,t.setAttribute("data-tone",n)},et=t=>{const e=t.studentEmail||"Unknown student";if(t.documents.length===0)return`
      <article class="activity-student-card">
        <header class="activity-student-card-header">
          <h3>${e}</h3>
          <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
        </header>
        <p class="activity-empty-student">No work captured yet for this student.</p>
      </article>
    `;const n=t.documents.map(a=>{const s=X(a.pdfKey),o=a.usedLegacyAttribution?'<span class="activity-legacy-hint" title="Includes older strokes without author metadata.">legacy estimate</span>':"";return`
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
      <ul class="activity-document-list">${n}</ul>
    </article>
  `},nt=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const e=M(),n=x().map(i=>i.trim().toLowerCase()),a=n.includes("admin"),s=n.includes("mailbox");if(e!=="tutor"&&e!=="student"){window.location.href="/whiteboard";return}t.innerHTML=tt(),t.appendChild(E()),R(),H();const o=t.querySelector("#activityAppBarContainer"),r=t.querySelector("#activityStatus"),l=t.querySelector("#activityFilterSummary"),d=t.querySelector("#activitySummary"),y=t.querySelector("#activityStudentList"),h=t.querySelector("#activityRefreshBtn"),S=t.querySelector("#activityStudentPanel"),f=t.querySelector("#activityStudentClose"),g=t.querySelector("#activityStudentSearchInput"),w=t.querySelector("#activityStudentStatus"),b=t.querySelector("#activityStudentClear"),C=t.querySelector("#activityStudentResults");if(!o||!r||!l||!d||!y||!h||!S||!f||!g||!w||!b||!C)throw new Error("Activity page failed to mount");let $=0;if(s)try{$=await N()}catch(i){console.warn("Failed to load unread inbox count for activity page",i)}const F=D({currentApp:"activity",onAppChange:i=>{if(i==="whiteboard"){window.location.href="/whiteboard/";return}if(i==="inbox"){window.location.href="/mailbox/";return}if(i==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(i==="user-management"){window.location.href="/user-management/";return}i==="profile"&&(window.location.href="/profile/")},userRole:e,isAdmin:a,hasMailboxAccess:s,unreadInboxCount:$,rightContent:O()});o.appendChild(F);let v=e==="tutor"?K():[];const A=()=>v.map(i=>i.email?.trim().toLowerCase()||"").filter(i=>i.length>0),L=()=>{const i=A();if(e==="tutor"&&i.length>0){u(l,`Filtered to selected students: ${i.join(", ")}`,"info");return}if(e==="tutor"){u(l,"Showing all active students (no student filter selected).","info");return}u(l,"Showing your activity.","info")},m=async()=>{h.disabled=!0,u(r,"Loading activity…","info");try{const i=await G(e==="tutor"?A():void 0),c=i.students,q=c.reduce((T,U)=>T+U.totalDocuments,0);d.textContent=`${c.length} student${c.length===1?"":"s"} · ${q} active document${q===1?"":"s"} · Updated ${p(i.generatedAt)}`,c.length===0?y.innerHTML='<p class="activity-empty-global">No activity found yet.</p>':y.innerHTML=c.map(et).join(""),u(r,"","success")}catch(i){const c=i instanceof Error?i.message:"Failed to load activity";u(r,c,"error"),y.innerHTML="",d.textContent=""}finally{h.disabled=!1}};let k=null;j({root:t,onSignOutClick:()=>{Z(),window.location.href="/auth"},profileHref:"/profile/",hideSelectStudent:!1,onSelectStudentClick:()=>{e==="tutor"&&k?.setOpen(!0)}}),I(t,e,v),L(),k=_({elements:{panel:S,closeButton:f,searchInput:g,status:w,clearButton:b,results:C},getToggleButton:()=>t.querySelector("#studentToggle"),fetchStudents:V,getSelected:()=>v,setSelected:i=>{v=i,Q(i)},onSelectionChanged:()=>{I(t,e,v),L(),m()}}),h.addEventListener("click",()=>{m()});const P=await Y().catch(()=>null);if(!P||!P.isValid()){window.location.href="/auth";return}await m()};export{nt as mountActivityPage};
