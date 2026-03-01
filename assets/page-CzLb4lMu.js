import{d as se,a as oe,g as le,b as ie,f as ce,c as me,y as de,z as ue,B as pe,C as ge,D as he,E as ve}from"./apiClient-B-smrYZh.js";const fe=()=>`
  <div class="app user-management-page">
    <div id="userManagementAppBarContainer"></div>
    <main class="user-management-layout">
      <section class="user-management-card">
        <h2>User Management</h2>
        <p class="user-management-subtitle">Assign Cognito groups to confirmed users.</p>
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
        <label class="user-management-search-label">
          Search users
          <input id="userManagementSearch" type="search" placeholder="Name or email" />
        </label>
        <div id="userManagementFeedback" class="user-management-feedback" hidden></div>
        <div id="userManagementGroupsLegend" class="user-management-groups-legend"></div>
        <div id="userManagementList" class="user-management-list"></div>
      </section>
    </main>
  </div>
`,ee=()=>"/default_avatar.png",be=()=>{const v="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",C=[];for(let f=0;f<window.localStorage.length;f+=1){const u=window.localStorage.key(f);u&&u.startsWith(v)&&C.push(u)}C.forEach(f=>window.localStorage.removeItem(f))},h=s=>Array.from(new Set(s.map(v=>v.trim()).filter(v=>v.length>0))).sort((v,C)=>v.localeCompare(C)),Ce=async()=>{const s=document.querySelector("#app");if(!s)throw new Error("Missing #app root");const C=se().includes("admin");if(!C){window.location.href="/whiteboard";return}s.innerHTML=fe();const f=s.querySelector("#userManagementAppBarContainer"),u=s.querySelector("#userManagementFeedback"),D=s.querySelector("#userManagementSearch"),I=s.querySelector("#userManagementPreApprovalForm"),T=s.querySelector("#userManagementPreApprovalEmail"),q=s.querySelector("#userManagementPreApprovalGroups"),x=s.querySelector("#userManagementPreApprovalList"),F=s.querySelector("#userManagementCreateUserForm"),W=s.querySelector("#userManagementCreateUserEmail"),Y=s.querySelector("#userManagementCreateUserGivenName"),R=s.querySelector("#userManagementCreateUserFamilyName"),O=s.querySelector("#userManagementCreateUserBirthDate"),V=s.querySelector("#userManagementCreateUserTempPassword"),P=s.querySelector("#userManagementCreateUserGroups"),$=s.querySelector("#userManagementGroupsLegend"),H=s.querySelector("#userManagementList");if(!f||!u||!D||!I||!T||!q||!x||!F||!W||!Y||!R||!O||!V||!P||!$||!H)throw new Error("Missing user management UI elements");const ae=oe(),te=le(),re=ie({currentApp:"user-management",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:ae,userRole:te,isAdmin:C});f.appendChild(re);const g=s.querySelector("#userAvatar"),E=s.querySelector("#userMenu"),N=s.querySelector("#userEmail"),_=s.querySelector("#signOutBtn"),J=s.querySelector("#profileBtn"),K=s.querySelector("#selectStudentBtn");K&&(K.hidden=!0),g&&(g.innerHTML=`<img src="${ee()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.addEventListener("click",t=>{if(t.stopPropagation(),!E)return;const a=E.hidden;E.hidden=!a,g.setAttribute("aria-expanded",String(!a))})),E&&E.addEventListener("click",t=>{t.stopPropagation()}),document.addEventListener("click",()=>{E&&(E.hidden=!0),g&&g.setAttribute("aria-expanded","false")}),J&&J.addEventListener("click",()=>{window.location.href="/profile/"}),_&&_.addEventListener("click",()=>{be(),window.location.href="/auth"});try{const t=await ce();if(N&&(N.textContent=t.displayName||t.email),g){const a=t.avatarUrl||ee();g.innerHTML=`<img src="${a}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.title=t.displayName.trim()||t.email}}catch{N&&(N.textContent="")}const ne=me();s.appendChild(ne);let U=[],B=[],S=[];const M=new Set,d=(t,a="info")=>{u.hidden=!1,u.textContent=t,u.dataset.tone=a},G=()=>{u.hidden=!0,u.textContent="",u.dataset.tone=""},Q=()=>{$.innerHTML="";const t=document.createDocumentFragment();U.forEach(a=>{const n=document.createElement("button");n.type="button",n.className="user-management-group-filter",n.textContent=a,n.dataset.active=M.has(a)?"true":"false",n.setAttribute("aria-pressed",M.has(a)?"true":"false"),n.addEventListener("click",()=>{M.has(a)?M.delete(a):M.add(a),Q(),L()}),t.appendChild(n)}),$.appendChild(t)},X=(t=[])=>{q.innerHTML="";const a=new Set(t),n=document.createDocumentFragment();U.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=a.has(e),r.appendChild(o),r.append(` ${e}`),n.appendChild(r)}),q.appendChild(n)},Z=(t=[])=>{P.innerHTML="";const a=new Set(t),n=document.createDocumentFragment();U.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=a.has(e),r.appendChild(o),r.append(` ${e}`),n.appendChild(r)}),P.appendChild(n)},j=()=>{x.innerHTML="";const t=document.createDocumentFragment();if(S.length===0){const a=document.createElement("div");a.className="user-management-empty",a.textContent="No pre-approved users.",t.appendChild(a),x.appendChild(t);return}S.forEach(a=>{const n=document.createElement("article");n.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const r=document.createElement("div"),o=document.createElement("strong");o.textContent=a.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=a.groups.length>0?a.groups.join(", "):"No groups",r.appendChild(o),r.appendChild(c),e.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{T.value=a.email,X(a.groups)});const i=document.createElement("button");i.type="button",i.className="user-management-delete-btn",i.textContent="Delete",i.addEventListener("click",async()=>{G(),i.disabled=!0;try{await ve(a.email),S=S.filter(p=>p.email!==a.email),j(),d(`Deleted pre-approval for ${a.email}.`,"success")}catch(p){const A=p instanceof Error?p.message:"Failed to delete pre-approval";d(A,"error")}finally{i.disabled=!1}}),m.appendChild(l),m.appendChild(i),n.appendChild(e),n.appendChild(m),t.appendChild(n)}),x.appendChild(t)},L=()=>{const t=D.value.trim().toLowerCase(),a=B.filter(e=>{const r=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(t&&!r.includes(t))return!1;if(M.size===0)return!0;const o=new Set(e.groups);for(const c of M)if(!o.has(c))return!1;return!0});H.innerHTML="";const n=document.createDocumentFragment();if(a.forEach(e=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=e.username;const o=document.createElement("div");o.className="user-management-user-header";const c=document.createElement("div"),m=document.createElement("strong");m.textContent=e.displayName||e.email;const l=document.createElement("div");l.className="user-management-user-meta",l.textContent=e.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=`Username: ${e.username}`,c.appendChild(m),c.appendChild(l),c.appendChild(i);const p=document.createElement("div");p.className="user-management-user-status",p.textContent=e.status,o.appendChild(c),o.appendChild(p);const A=document.createElement("div");A.className="user-management-user-groups",U.forEach(b=>{const y=document.createElement("label");y.className="user-management-group-chip";const k=document.createElement("input");k.type="checkbox",k.value=b,k.checked=e.groups.includes(b),y.appendChild(k),y.append(` ${b}`),A.appendChild(y)});const z=document.createElement("div");z.className="user-management-user-actions";const w=document.createElement("button");w.type="button",w.className="user-management-save-btn",w.textContent="Save groups",w.addEventListener("click",async()=>{G(),w.disabled=!0;try{const b=h(Array.from(A.querySelectorAll('input[type="checkbox"]:checked')).map(k=>k.value)),y=await he(e.username,b);e.groups=h(y.groups),L(),d(`Updated groups for ${e.displayName}.`,"success")}catch(b){const y=b instanceof Error?b.message:"Failed to update user groups";d(y,"error")}finally{w.disabled=!1}}),z.appendChild(w),r.appendChild(o),r.appendChild(A),r.appendChild(z),n.appendChild(r)}),a.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",n.appendChild(e)}H.appendChild(n)};D.addEventListener("input",()=>L()),I.addEventListener("submit",async t=>{t.preventDefault(),G();const a=T.value.trim().toLowerCase(),n=h(Array.from(q.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),e=I.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const r=await de(a,n),o={...r,groups:h(r.groups)};S=[...S.filter(c=>c.email!==o.email),o].sort((c,m)=>c.email.localeCompare(m.email)),j(),d(`Saved pre-approval for ${o.email}.`,"success")}catch(r){const o=r instanceof Error?r.message:"Failed to save pre-approval";d(o,"error")}finally{e&&(e.disabled=!1)}}),F.addEventListener("submit",async t=>{t.preventDefault(),G();const a=W.value.trim().toLowerCase(),n=Y.value.trim(),e=R.value.trim(),r=O.value.trim(),o=V.value.trim(),c=h(Array.from(P.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!a||!a.includes("@")){d("Please enter a valid email address.","error");return}if(!n||!e){d("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){d("Birth date must be set in YYYY-MM-DD format.","error");return}const m=F.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await ue({email:a,givenName:n,familyName:e,birthDate:r,groups:c,...o?{tempPassword:o}:{}});B=[...B.filter(i=>i.username!==l.username),{...l,groups:h(l.groups)}].sort((i,p)=>i.displayName.localeCompare(p.displayName)),L(),d(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),F.reset(),Z()}catch(l){const i=l instanceof Error?l.message:"Failed to create user";d(i,"error")}finally{m&&(m.disabled=!1)}});try{const[t,a]=await Promise.all([pe(),ge()]),n=t;U=h(n.availableGroups),B=n.users.map(e=>({...e,groups:h(e.groups)})),S=a.preApprovals.map(e=>({...e,email:e.email.trim().toLowerCase(),groups:h(e.groups)})).sort((e,r)=>e.email.localeCompare(r.email)),X(),Z(),j(),Q(),L()}catch(t){const a=t instanceof Error?t.message:"Failed to load users";d(a,"error")}};export{Ce as mountUserManagementPage};
