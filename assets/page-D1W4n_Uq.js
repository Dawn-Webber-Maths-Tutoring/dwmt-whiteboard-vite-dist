import{o as x,p as E,b as I,m as R,e as H,i as N,k as U,j as D,l as j,Y as O,Z as G}from"./UserMenu-I5xP3jH8.js";import{c as J}from"./studentPicker--1eQP9lv.js";import{g as V,s as z}from"./authSession-Bm_-rhc0.js";const W=()=>{try{const t=localStorage.getItem("dwmt-selected-student");if(!t)return[];const e=JSON.parse(t);if(Array.isArray(e))return e.filter(n=>n&&n.username&&n.email)}catch(t){console.warn("Failed to load selected students for activity filter",t)}return[]},Y=t=>{try{if(t.length>0){localStorage.setItem("dwmt-selected-student",JSON.stringify(t));return}localStorage.removeItem("dwmt-selected-student")}catch(e){console.warn("Failed to save selected students for activity filter",e)}},F=(t,e,n)=>{const i=t.querySelector("#studentAvatarGroup");if(!i)return;if(e!=="tutor"||n.length===0){i.hidden=!0,i.innerHTML="";return}const o=document.createDocumentFragment();n.forEach(s=>{const r=document.createElement("button");r.type="button",r.className="student-avatar";const d=s.avatarUrl||"/default_avatar.png";r.innerHTML=`<img src="${d}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const l=s.displayName?.trim()||s.email||s.username;r.title=l,r.setAttribute("aria-label",`Selected student: ${l}`),o.appendChild(r)}),i.hidden=!1,i.innerHTML="",i.appendChild(o)},h=t=>{if(!t)return"—";const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()},Z=t=>{const e=t.split("/").pop()||t;return decodeURIComponent(e)},_=()=>`
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
`,u=(t,e,n)=>{if(!e){t.hidden=!0,t.textContent="",t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=e,t.setAttribute("data-tone",n)},K=t=>{const e=t.studentEmail||"Unknown student";if(t.documents.length===0)return`
      <article class="activity-student-card">
        <header class="activity-student-card-header">
          <h3>${e}</h3>
          <span class="activity-overall-progress">${t.overallProgressPercent}%</span>
        </header>
        <p class="activity-empty-student">No work captured yet for this student.</p>
      </article>
    `;const n=t.documents.map(i=>{const o=Z(i.pdfKey),s=i.usedLegacyAttribution?'<span class="activity-legacy-hint" title="Includes older strokes without author metadata.">legacy estimate</span>':"";return`
        <li class="activity-document-row">
          <div class="activity-document-main">
            <div class="activity-document-title">${o}</div>
            <div class="activity-document-meta">
              ${i.studentPagesWithStrokes}/${i.totalPagesEstimate} pages with student strokes
              ${s}
            </div>
          </div>
          <div class="activity-document-side">
            <strong>${i.progressPercent}%</strong>
            <span>${h(i.latestStudentActivity)}</span>
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
      <ul class="activity-document-list">${n}</ul>
    </article>
  `},et=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const e=x(),n=E().map(a=>a.trim().toLowerCase()),i=n.includes("admin"),o=n.includes("mailbox");if(e!=="tutor"&&e!=="student"){window.location.href="/whiteboard";return}t.innerHTML=_(),t.appendChild(I()),R(),H();const s=t.querySelector("#activityAppBarContainer"),r=t.querySelector("#activityStatus"),d=t.querySelector("#activityFilterSummary"),l=t.querySelector("#activitySummary"),y=t.querySelector("#activityStudentList"),m=t.querySelector("#activityRefreshBtn"),S=t.querySelector("#activityStudentPanel"),f=t.querySelector("#activityStudentClose"),g=t.querySelector("#activityStudentSearchInput"),w=t.querySelector("#activityStudentStatus"),b=t.querySelector("#activityStudentClear"),C=t.querySelector("#activityStudentResults");if(!s||!r||!d||!l||!y||!m||!S||!f||!g||!w||!b||!C)throw new Error("Activity page failed to mount");let $=0;if(o)try{$=await N()}catch(a){console.warn("Failed to load unread inbox count for activity page",a)}const P=U({currentApp:"activity",onAppChange:a=>{if(a==="whiteboard"){window.location.href="/whiteboard/";return}if(a==="inbox"){window.location.href="/mailbox/";return}if(a==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(a==="user-management"){window.location.href="/user-management/";return}a==="profile"&&(window.location.href="/profile/")},userRole:e,isAdmin:i,hasMailboxAccess:o,unreadInboxCount:$,rightContent:D()});s.appendChild(P);let v=e==="tutor"?W():[];const A=()=>v.map(a=>a.email?.trim().toLowerCase()||"").filter(a=>a.length>0),L=()=>{const a=A();if(e==="tutor"&&a.length>0){u(d,`Filtered to selected students: ${a.join(", ")}`,"info");return}if(e==="tutor"){u(d,"Showing all active students (no student filter selected).","info");return}u(d,"Showing your activity.","info")},p=async()=>{m.disabled=!0,u(r,"Loading activity…","info");try{const a=await O(e==="tutor"?A():void 0),c=a.students,B=c.reduce((T,M)=>T+M.totalDocuments,0);l.textContent=`${c.length} student${c.length===1?"":"s"} · ${B} active document${B===1?"":"s"} · Updated ${h(a.generatedAt)}`,c.length===0?y.innerHTML='<p class="activity-empty-global">No activity found yet.</p>':y.innerHTML=c.map(K).join(""),u(r,"","success")}catch(a){const c=a instanceof Error?a.message:"Failed to load activity";u(r,c,"error"),y.innerHTML="",l.textContent=""}finally{m.disabled=!1}};let k=null;j({root:t,onSignOutClick:()=>{z(),window.location.href="/auth"},profileHref:"/profile/",hideSelectStudent:!1,onSelectStudentClick:()=>{e==="tutor"&&k?.setOpen(!0)}}),F(t,e,v),L(),k=J({elements:{panel:S,closeButton:f,searchInput:g,status:w,clearButton:b,results:C},getToggleButton:()=>t.querySelector("#studentToggle"),fetchStudents:G,getSelected:()=>v,setSelected:a=>{v=a,Y(a)},onSelectionChanged:()=>{F(t,e,v),L(),p()}}),m.addEventListener("click",()=>{p()});const q=await V().catch(()=>null);if(!q||!q.isValid()){window.location.href="/auth";return}await p()};export{et as mountActivityPage};
