import{d as he,y as fe,a as be,g as ye,b as Ce,f as Me,c as Ee,z as Se,B as we,C as Ae,D as Pe,E as ke,F as Le,G as Ue}from"./apiClient-CYk22T_M.js";const qe=()=>`
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
`,de=()=>"/default_avatar.png",xe=()=>{const y="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",E=[];for(let C=0;C<window.localStorage.length;C+=1){const k=window.localStorage.key(C);k&&k.startsWith(y)&&E.push(k)}E.forEach(C=>window.localStorage.removeItem(C))},b=r=>Array.from(new Set(r.map(y=>y.trim()).filter(y=>y.length>0))).sort((y,E)=>y.localeCompare(E)),Ne=async()=>{const r=document.querySelector("#app");if(!r)throw new Error("Missing #app root");const E=he().includes("admin"),C=fe();if(!E){window.location.href="/whiteboard";return}r.innerHTML=qe();const k=r.querySelector("#userManagementAppBarContainer"),S=r.querySelector("#userManagementFeedback"),$=r.querySelector("#userManagementSearch"),H=r.querySelector("#userManagementPreApprovalForm"),Y=r.querySelector("#userManagementPreApprovalEmail"),N=r.querySelector("#userManagementPreApprovalGroups"),B=r.querySelector("#userManagementPreApprovalList"),G=r.querySelector("#userManagementCreateUserForm"),K=r.querySelector("#userManagementCreateUserEmail"),Q=r.querySelector("#userManagementCreateUserGivenName"),X=r.querySelector("#userManagementCreateUserFamilyName"),Z=r.querySelector("#userManagementCreateUserBirthDate"),ee=r.querySelector("#userManagementCreateUserTempPassword"),T=r.querySelector("#userManagementCreateUserGroups"),W=r.querySelector("#userManagementGroupsLegend"),j=r.querySelector("#userManagementList"),z=r.querySelector("#userManagementPreApprovalToggle"),R=r.querySelector("#userManagementInviteToggle"),O=r.querySelector("#userManagementManageToggle"),ae=r.querySelector("#userManagementPreApprovalPanel"),te=r.querySelector("#userManagementInvitePanel"),ne=r.querySelector("#userManagementManagePanel");if(!k||!S||!$||!H||!Y||!N||!B||!G||!K||!Q||!X||!Z||!ee||!T||!W||!j||!z||!R||!O||!ae||!te||!ne)throw new Error("Missing user management UI elements");const V=(a,t,s)=>{a.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s},_=a=>{V(z,ae,a==="preapproval"),V(R,te,a==="invite"),V(O,ne,a==="manage")};z.addEventListener("click",()=>_("preapproval")),R.addEventListener("click",()=>_("invite")),O.addEventListener("click",()=>_("manage"));const ue=be(),pe=ye(),ge=Ce({currentApp:"user-management",onAppChange:a=>{if(a==="whiteboard"){window.location.href="/whiteboard";return}if(a==="worksheet-builder"){window.location.href="/worksheet-builder/";return}a==="profile"&&(window.location.href="/profile/")},rightContent:ue,userRole:pe,isAdmin:E});k.appendChild(ge);const g=r.querySelector("#userAvatar"),w=r.querySelector("#userMenu"),I=r.querySelector("#userEmail"),re=r.querySelector("#signOutBtn"),se=r.querySelector("#profileBtn"),oe=r.querySelector("#selectStudentBtn");oe&&(oe.hidden=!0),g&&(g.innerHTML=`<img src="${de()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.addEventListener("click",a=>{if(a.stopPropagation(),!w)return;const t=w.hidden;w.hidden=!t,g.setAttribute("aria-expanded",String(!t))})),w&&w.addEventListener("click",a=>{a.stopPropagation()}),document.addEventListener("click",()=>{w&&(w.hidden=!0),g&&g.setAttribute("aria-expanded","false")}),se&&se.addEventListener("click",()=>{window.location.href="/profile/"}),re&&re.addEventListener("click",()=>{xe(),window.location.href="/auth"});try{const a=await Me();if(I&&(I.textContent=a.displayName||a.email),g){const t=a.avatarUrl||de();g.innerHTML=`<img src="${t}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.title=a.displayName.trim()||a.email}}catch{I&&(I.textContent="")}const ve=Ee();r.appendChild(ve);let x=[],L=[],A=[];const P=new Set,m=(a,t="info")=>{S.hidden=!1,S.textContent=a,S.dataset.tone=t},F=()=>{S.hidden=!0,S.textContent="",S.dataset.tone=""},le=()=>{W.innerHTML="";const a=document.createDocumentFragment();x.forEach(t=>{const s=document.createElement("button");s.type="button",s.className="user-management-group-filter",s.textContent=t,s.dataset.active=P.has(t)?"true":"false",s.setAttribute("aria-pressed",P.has(t)?"true":"false"),s.addEventListener("click",()=>{P.has(t)?P.delete(t):P.add(t),le(),U()}),a.appendChild(s)}),W.appendChild(a)},ie=(a=[])=>{N.innerHTML="";const t=new Set(a),s=document.createDocumentFragment();x.forEach(e=>{const n=document.createElement("label");n.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=t.has(e),n.appendChild(o),n.append(` ${e}`),s.appendChild(n)}),N.appendChild(s)},ce=(a=[])=>{T.innerHTML="";const t=new Set(a),s=document.createDocumentFragment();x.forEach(e=>{const n=document.createElement("label");n.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=t.has(e),n.appendChild(o),n.append(` ${e}`),s.appendChild(n)}),T.appendChild(s)},J=()=>{B.innerHTML="";const a=document.createDocumentFragment();if(A.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",a.appendChild(t),B.appendChild(a);return}A.forEach(t=>{const s=document.createElement("article");s.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const n=document.createElement("div"),o=document.createElement("strong");o.textContent=t.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=t.groups.length>0?t.groups.join(", "):"No groups",n.appendChild(o),n.appendChild(c),e.appendChild(n);const d=document.createElement("div");d.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{Y.value=t.email,ie(t.groups)});const i=document.createElement("button");i.type="button",i.className="user-management-delete-btn",i.textContent="Delete",i.addEventListener("click",async()=>{F(),i.disabled=!0;try{await Ue(t.email),A=A.filter(p=>p.email!==t.email),J(),m(`Deleted pre-approval for ${t.email}.`,"success")}catch(p){const q=p instanceof Error?p.message:"Failed to delete pre-approval";m(q,"error")}finally{i.disabled=!1}}),d.appendChild(l),d.appendChild(i),s.appendChild(e),s.appendChild(d),a.appendChild(s)}),B.appendChild(a)},U=()=>{const a=$.value.trim().toLowerCase(),t=L.filter(e=>{const n=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(a&&!n.includes(a))return!1;if(P.size===0)return!0;const o=new Set(e.groups);for(const c of P)if(!o.has(c))return!1;return!0});j.innerHTML="";const s=document.createDocumentFragment();if(t.forEach(e=>{const n=document.createElement("article");n.className="user-management-user",n.dataset.username=e.username;const o=document.createElement("div");o.className="user-management-user-header";const c=document.createElement("div"),d=document.createElement("strong");d.textContent=e.displayName||e.email;const l=document.createElement("div");l.className="user-management-user-meta",l.textContent=e.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=`Username: ${e.username}`,c.appendChild(d),c.appendChild(l),c.appendChild(i);const p=document.createElement("div");p.className="user-management-user-status",p.textContent=e.status,o.appendChild(c),o.appendChild(p);const q=document.createElement("div");q.className="user-management-user-groups",x.forEach(f=>{const u=document.createElement("label");u.className="user-management-group-chip";const M=document.createElement("input");M.type="checkbox",M.value=f,M.checked=e.groups.includes(f),u.appendChild(M),u.append(` ${f}`),q.appendChild(u)});const D=document.createElement("div");D.className="user-management-user-actions";const v=document.createElement("button");v.type="button",v.className="user-management-save-btn",v.textContent="Save groups",v.addEventListener("click",async()=>{F(),v.disabled=!0;try{const f=b(Array.from(q.querySelectorAll('input[type="checkbox"]:checked')).map(M=>M.value)),u=await ke(e.username,f);e.groups=b(u.groups),U(),m(`Updated groups for ${e.displayName}.`,"success")}catch(f){const u=f instanceof Error?f.message:"Failed to update user groups";m(u,"error")}finally{v.disabled=!1}}),D.appendChild(v);const h=document.createElement("button");h.type="button",h.className="user-management-delete-btn",h.textContent="Delete user";const me=C!==""&&e.username===C;me&&(h.disabled=!0,h.title="You cannot delete your own account."),h.addEventListener("click",async()=>{if(me){m("You cannot delete your own account.","error");return}if(F(),!!window.confirm(`Are you sure you want to delete ${e.displayName||e.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`)){v.disabled=!0,h.disabled=!0;try{await Le(e.username),L=L.filter(u=>u.username!==e.username),U(),m(`Deleted user ${e.displayName||e.email}.`,"success")}catch(u){const M=u instanceof Error?u.message:"Failed to delete user";m(M,"error")}finally{v.disabled=!1,h.disabled=!1}}}),D.appendChild(h),n.appendChild(o),n.appendChild(q),n.appendChild(D),s.appendChild(n)}),t.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",s.appendChild(e)}j.appendChild(s)};$.addEventListener("input",()=>U()),H.addEventListener("submit",async a=>{a.preventDefault(),F();const t=Y.value.trim().toLowerCase(),s=b(Array.from(N.querySelectorAll('input[type="checkbox"]:checked')).map(n=>n.value)),e=H.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const n=await Se(t,s),o={...n,groups:b(n.groups)};A=[...A.filter(c=>c.email!==o.email),o].sort((c,d)=>c.email.localeCompare(d.email)),J(),m(`Saved pre-approval for ${o.email}.`,"success")}catch(n){const o=n instanceof Error?n.message:"Failed to save pre-approval";m(o,"error")}finally{e&&(e.disabled=!1)}}),G.addEventListener("submit",async a=>{a.preventDefault(),F();const t=K.value.trim().toLowerCase(),s=Q.value.trim(),e=X.value.trim(),n=Z.value.trim(),o=ee.value.trim(),c=b(Array.from(T.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){m("Please enter a valid email address.","error");return}if(!s||!e){m("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(n)){m("Birth date must be set in YYYY-MM-DD format.","error");return}const d=G.querySelector("#userManagementCreateUserSubmit");d&&(d.disabled=!0);try{const l=await we({email:t,givenName:s,familyName:e,birthDate:n,groups:c,...o?{tempPassword:o}:{}});L=[...L.filter(i=>i.username!==l.username),{...l,groups:b(l.groups)}].sort((i,p)=>i.displayName.localeCompare(p.displayName)),U(),m(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),G.reset(),ce()}catch(l){const i=l instanceof Error?l.message:"Failed to create user";m(i,"error")}finally{d&&(d.disabled=!1)}});try{const[a,t]=await Promise.all([Ae(),Pe()]),s=a;x=b(s.availableGroups),L=s.users.map(e=>({...e,groups:b(e.groups)})),A=t.preApprovals.map(e=>({...e,email:e.email.trim().toLowerCase(),groups:b(e.groups)})).sort((e,n)=>e.email.localeCompare(n.email)),ie(),ce(),J(),le(),U()}catch(a){const t=a instanceof Error?a.message:"Failed to load users";m(t,"error")}};export{Ne as mountUserManagementPage};
