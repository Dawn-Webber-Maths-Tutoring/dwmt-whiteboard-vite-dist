import{d as pe,a as ge,g as ve,b as he,f as fe,c as be,y as ye,z as Ce,B as Me,C as Ee,D as Se,E as Ae}from"./apiClient-CVlxnLjO.js";const we=()=>`
  <div class="app user-management-page">
    <div id="userManagementAppBarContainer"></div>
    <main class="user-management-layout">
      <section class="user-management-card">
        <h2>User Management</h2>
        <p class="user-management-subtitle">Manage pre-approval, invitations, and group assignment.</p>
        <section class="user-management-accordion">
          <article class="user-management-accordion-card">
            <button
              id="userManagementPreApprovalToggle"
              class="user-management-accordion-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="userManagementPreApprovalPanel"
            >
              Pre-approval
            </button>
            <div id="userManagementPreApprovalPanel" class="user-management-accordion-panel" hidden>
              <section class="user-management-preapproval">
                <h3>Pre-approve by email</h3>
                <p class="user-management-preapproval-subtitle">
                  Set groups before signup so access is ready immediately after email verification.
                </p>
                <form id="userManagementPreApprovalForm" class="user-management-preapproval-form">
                  <label class="user-management-search-label">
                    Email address
                    <input id="userManagementPreApprovalEmail" type="email" placeholder="student@example.com" />
                  </label>
                  <div id="userManagementPreApprovalGroups" class="user-management-user-groups"></div>
                  <div class="user-management-user-actions">
                    <button id="userManagementPreApprovalSave" type="submit" class="user-management-save-btn">
                      Save pre-approval
                    </button>
                  </div>
                </form>
                <div id="userManagementPreApprovalList" class="user-management-preapproval-list"></div>
              </section>
            </div>
          </article>

          <article class="user-management-accordion-card">
            <button
              id="userManagementInviteToggle"
              class="user-management-accordion-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="userManagementInvitePanel"
            >
              Invited users
            </button>
            <div id="userManagementInvitePanel" class="user-management-accordion-panel" hidden>
              <section class="user-management-preapproval">
                <h3>Create invited user</h3>
                <p class="user-management-preapproval-subtitle">
                  Create an account now and email a temporary password with the environment login URL.
                </p>
                <form id="userManagementCreateUserForm" class="user-management-preapproval-form">
                  <label class="user-management-search-label">
                    Email address
                    <input id="userManagementCreateUserEmail" type="email" placeholder="student@example.com" />
                  </label>
                  <div class="user-management-create-grid">
                    <label class="user-management-search-label">
                      First name
                      <input id="userManagementCreateUserGivenName" type="text" placeholder="First name" />
                    </label>
                    <label class="user-management-search-label">
                      Surname
                      <input id="userManagementCreateUserFamilyName" type="text" placeholder="Surname" />
                    </label>
                  </div>
                  <div class="user-management-create-grid">
                    <label class="user-management-search-label">
                      Birth date
                      <input id="userManagementCreateUserBirthDate" type="date" />
                    </label>
                    <label class="user-management-search-label">
                      Temporary password (optional)
                      <input id="userManagementCreateUserTempPassword" type="text" placeholder="Auto-generate if blank" />
                    </label>
                  </div>
                  <div id="userManagementCreateUserGroups" class="user-management-user-groups"></div>
                  <div class="user-management-user-actions">
                    <button id="userManagementCreateUserSubmit" type="submit" class="user-management-save-btn">
                      Create user and send invite
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </article>

          <article class="user-management-accordion-card user-management-accordion-card-manage">
            <button
              id="userManagementManageToggle"
              class="user-management-accordion-toggle"
              type="button"
              aria-expanded="true"
              aria-controls="userManagementManagePanel"
            >
              Search and modify users
            </button>
            <div id="userManagementManagePanel" class="user-management-accordion-panel user-management-accordion-panel-manage">
              <label class="user-management-search-label">
                Search users
                <input id="userManagementSearch" type="search" placeholder="Name or email" />
              </label>
              <div class="user-management-list-pane">
                <div id="userManagementFeedback" class="user-management-feedback" hidden></div>
                <div id="userManagementGroupsLegend" class="user-management-groups-legend"></div>
                <div id="userManagementList" class="user-management-list"></div>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  </div>
`,ie=()=>"/default_avatar.png",Pe=()=>{const h="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",C=[];for(let f=0;f<window.localStorage.length;f+=1){const u=window.localStorage.key(f);u&&u.startsWith(h)&&C.push(u)}C.forEach(f=>window.localStorage.removeItem(f))},v=n=>Array.from(new Set(n.map(h=>h.trim()).filter(h=>h.length>0))).sort((h,C)=>h.localeCompare(C)),Le=async()=>{const n=document.querySelector("#app");if(!n)throw new Error("Missing #app root");const C=pe().includes("admin");if(!C){window.location.href="/whiteboard";return}n.innerHTML=we();const f=n.querySelector("#userManagementAppBarContainer"),u=n.querySelector("#userManagementFeedback"),T=n.querySelector("#userManagementSearch"),I=n.querySelector("#userManagementPreApprovalForm"),D=n.querySelector("#userManagementPreApprovalEmail"),q=n.querySelector("#userManagementPreApprovalGroups"),U=n.querySelector("#userManagementPreApprovalList"),x=n.querySelector("#userManagementCreateUserForm"),_=n.querySelector("#userManagementCreateUserEmail"),J=n.querySelector("#userManagementCreateUserGivenName"),K=n.querySelector("#userManagementCreateUserFamilyName"),Q=n.querySelector("#userManagementCreateUserBirthDate"),X=n.querySelector("#userManagementCreateUserTempPassword"),F=n.querySelector("#userManagementCreateUserGroups"),$=n.querySelector("#userManagementGroupsLegend"),H=n.querySelector("#userManagementList"),j=n.querySelector("#userManagementPreApprovalToggle"),z=n.querySelector("#userManagementInviteToggle"),W=n.querySelector("#userManagementManageToggle"),Z=n.querySelector("#userManagementPreApprovalPanel"),ee=n.querySelector("#userManagementInvitePanel"),ae=n.querySelector("#userManagementManagePanel");if(!f||!u||!T||!I||!D||!q||!U||!x||!_||!J||!K||!Q||!X||!F||!$||!H||!j||!z||!W||!Z||!ee||!ae)throw new Error("Missing user management UI elements");const Y=(a,t,s)=>{a.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s},R=a=>{Y(j,Z,a==="preapproval"),Y(z,ee,a==="invite"),Y(W,ae,a==="manage")};j.addEventListener("click",()=>R("preapproval")),z.addEventListener("click",()=>R("invite")),W.addEventListener("click",()=>R("manage"));const ce=ge(),me=ve(),de=he({currentApp:"user-management",onAppChange:a=>{if(a==="whiteboard"){window.location.href="/whiteboard";return}if(a==="worksheet-builder"){window.location.href="/worksheet-builder/";return}a==="profile"&&(window.location.href="/profile/")},rightContent:ce,userRole:me,isAdmin:C});f.appendChild(de);const g=n.querySelector("#userAvatar"),M=n.querySelector("#userMenu"),N=n.querySelector("#userEmail"),te=n.querySelector("#signOutBtn"),re=n.querySelector("#profileBtn"),ne=n.querySelector("#selectStudentBtn");ne&&(ne.hidden=!0),g&&(g.innerHTML=`<img src="${ie()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.addEventListener("click",a=>{if(a.stopPropagation(),!M)return;const t=M.hidden;M.hidden=!t,g.setAttribute("aria-expanded",String(!t))})),M&&M.addEventListener("click",a=>{a.stopPropagation()}),document.addEventListener("click",()=>{M&&(M.hidden=!0),g&&g.setAttribute("aria-expanded","false")}),re&&re.addEventListener("click",()=>{window.location.href="/profile/"}),te&&te.addEventListener("click",()=>{Pe(),window.location.href="/auth"});try{const a=await fe();if(N&&(N.textContent=a.displayName||a.email),g){const t=a.avatarUrl||ie();g.innerHTML=`<img src="${t}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.title=a.displayName.trim()||a.email}}catch{N&&(N.textContent="")}const ue=be();n.appendChild(ue);let k=[],B=[],E=[];const S=new Set,d=(a,t="info")=>{u.hidden=!1,u.textContent=a,u.dataset.tone=t},G=()=>{u.hidden=!0,u.textContent="",u.dataset.tone=""},se=()=>{$.innerHTML="";const a=document.createDocumentFragment();k.forEach(t=>{const s=document.createElement("button");s.type="button",s.className="user-management-group-filter",s.textContent=t,s.dataset.active=S.has(t)?"true":"false",s.setAttribute("aria-pressed",S.has(t)?"true":"false"),s.addEventListener("click",()=>{S.has(t)?S.delete(t):S.add(t),se(),L()}),a.appendChild(s)}),$.appendChild(a)},oe=(a=[])=>{q.innerHTML="";const t=new Set(a),s=document.createDocumentFragment();k.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=t.has(e),r.appendChild(o),r.append(` ${e}`),s.appendChild(r)}),q.appendChild(s)},le=(a=[])=>{F.innerHTML="";const t=new Set(a),s=document.createDocumentFragment();k.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=t.has(e),r.appendChild(o),r.append(` ${e}`),s.appendChild(r)}),F.appendChild(s)},O=()=>{U.innerHTML="";const a=document.createDocumentFragment();if(E.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",a.appendChild(t),U.appendChild(a);return}E.forEach(t=>{const s=document.createElement("article");s.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const r=document.createElement("div"),o=document.createElement("strong");o.textContent=t.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=t.groups.length>0?t.groups.join(", "):"No groups",r.appendChild(o),r.appendChild(c),e.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{D.value=t.email,oe(t.groups)});const i=document.createElement("button");i.type="button",i.className="user-management-delete-btn",i.textContent="Delete",i.addEventListener("click",async()=>{G(),i.disabled=!0;try{await Ae(t.email),E=E.filter(p=>p.email!==t.email),O(),d(`Deleted pre-approval for ${t.email}.`,"success")}catch(p){const w=p instanceof Error?p.message:"Failed to delete pre-approval";d(w,"error")}finally{i.disabled=!1}}),m.appendChild(l),m.appendChild(i),s.appendChild(e),s.appendChild(m),a.appendChild(s)}),U.appendChild(a)},L=()=>{const a=T.value.trim().toLowerCase(),t=B.filter(e=>{const r=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(a&&!r.includes(a))return!1;if(S.size===0)return!0;const o=new Set(e.groups);for(const c of S)if(!o.has(c))return!1;return!0});H.innerHTML="";const s=document.createDocumentFragment();if(t.forEach(e=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=e.username;const o=document.createElement("div");o.className="user-management-user-header";const c=document.createElement("div"),m=document.createElement("strong");m.textContent=e.displayName||e.email;const l=document.createElement("div");l.className="user-management-user-meta",l.textContent=e.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=`Username: ${e.username}`,c.appendChild(m),c.appendChild(l),c.appendChild(i);const p=document.createElement("div");p.className="user-management-user-status",p.textContent=e.status,o.appendChild(c),o.appendChild(p);const w=document.createElement("div");w.className="user-management-user-groups",k.forEach(b=>{const y=document.createElement("label");y.className="user-management-group-chip";const P=document.createElement("input");P.type="checkbox",P.value=b,P.checked=e.groups.includes(b),y.appendChild(P),y.append(` ${b}`),w.appendChild(y)});const V=document.createElement("div");V.className="user-management-user-actions";const A=document.createElement("button");A.type="button",A.className="user-management-save-btn",A.textContent="Save groups",A.addEventListener("click",async()=>{G(),A.disabled=!0;try{const b=v(Array.from(w.querySelectorAll('input[type="checkbox"]:checked')).map(P=>P.value)),y=await Se(e.username,b);e.groups=v(y.groups),L(),d(`Updated groups for ${e.displayName}.`,"success")}catch(b){const y=b instanceof Error?b.message:"Failed to update user groups";d(y,"error")}finally{A.disabled=!1}}),V.appendChild(A),r.appendChild(o),r.appendChild(w),r.appendChild(V),s.appendChild(r)}),t.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",s.appendChild(e)}H.appendChild(s)};T.addEventListener("input",()=>L()),I.addEventListener("submit",async a=>{a.preventDefault(),G();const t=D.value.trim().toLowerCase(),s=v(Array.from(q.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),e=I.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const r=await ye(t,s),o={...r,groups:v(r.groups)};E=[...E.filter(c=>c.email!==o.email),o].sort((c,m)=>c.email.localeCompare(m.email)),O(),d(`Saved pre-approval for ${o.email}.`,"success")}catch(r){const o=r instanceof Error?r.message:"Failed to save pre-approval";d(o,"error")}finally{e&&(e.disabled=!1)}}),x.addEventListener("submit",async a=>{a.preventDefault(),G();const t=_.value.trim().toLowerCase(),s=J.value.trim(),e=K.value.trim(),r=Q.value.trim(),o=X.value.trim(),c=v(Array.from(F.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){d("Please enter a valid email address.","error");return}if(!s||!e){d("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){d("Birth date must be set in YYYY-MM-DD format.","error");return}const m=x.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await Ce({email:t,givenName:s,familyName:e,birthDate:r,groups:c,...o?{tempPassword:o}:{}});B=[...B.filter(i=>i.username!==l.username),{...l,groups:v(l.groups)}].sort((i,p)=>i.displayName.localeCompare(p.displayName)),L(),d(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),x.reset(),le()}catch(l){const i=l instanceof Error?l.message:"Failed to create user";d(i,"error")}finally{m&&(m.disabled=!1)}});try{const[a,t]=await Promise.all([Me(),Ee()]),s=a;k=v(s.availableGroups),B=s.users.map(e=>({...e,groups:v(e.groups)})),E=t.preApprovals.map(e=>({...e,email:e.email.trim().toLowerCase(),groups:v(e.groups)})).sort((e,r)=>e.email.localeCompare(r.email)),oe(),le(),O(),se(),L()}catch(a){const t=a instanceof Error?a.message:"Failed to load users";d(t,"error")}};export{Le as mountUserManagementPage};
