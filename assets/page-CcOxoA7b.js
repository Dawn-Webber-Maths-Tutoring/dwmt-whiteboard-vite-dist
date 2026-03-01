import{d as ge,a as ve,g as he,b as fe,f as be,c as ye,y as Ce,z as Me,B as Ee,C as Se,D as Ae,E as we,F as Pe}from"./apiClient-DJe9GKuO.js";const ke=()=>`
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
`,ce=()=>"/default_avatar.png",Le=()=>{const y="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",E=[];for(let C=0;C<window.localStorage.length;C+=1){const p=window.localStorage.key(C);p&&p.startsWith(y)&&E.push(p)}E.forEach(C=>window.localStorage.removeItem(C))},b=r=>Array.from(new Set(r.map(y=>y.trim()).filter(y=>y.length>0))).sort((y,E)=>y.localeCompare(E)),Ue=async()=>{const r=document.querySelector("#app");if(!r)throw new Error("Missing #app root");const E=ge().includes("admin");if(!E){window.location.href="/whiteboard";return}r.innerHTML=ke();const C=r.querySelector("#userManagementAppBarContainer"),p=r.querySelector("#userManagementFeedback"),D=r.querySelector("#userManagementSearch"),$=r.querySelector("#userManagementPreApprovalForm"),H=r.querySelector("#userManagementPreApprovalEmail"),F=r.querySelector("#userManagementPreApprovalGroups"),N=r.querySelector("#userManagementPreApprovalList"),B=r.querySelector("#userManagementCreateUserForm"),J=r.querySelector("#userManagementCreateUserEmail"),K=r.querySelector("#userManagementCreateUserGivenName"),Q=r.querySelector("#userManagementCreateUserFamilyName"),X=r.querySelector("#userManagementCreateUserBirthDate"),Z=r.querySelector("#userManagementCreateUserTempPassword"),G=r.querySelector("#userManagementCreateUserGroups"),W=r.querySelector("#userManagementGroupsLegend"),j=r.querySelector("#userManagementList"),z=r.querySelector("#userManagementPreApprovalToggle"),Y=r.querySelector("#userManagementInviteToggle"),R=r.querySelector("#userManagementManageToggle"),ee=r.querySelector("#userManagementPreApprovalPanel"),ae=r.querySelector("#userManagementInvitePanel"),te=r.querySelector("#userManagementManagePanel");if(!C||!p||!D||!$||!H||!F||!N||!B||!J||!K||!Q||!X||!Z||!G||!W||!j||!z||!Y||!R||!ee||!ae||!te)throw new Error("Missing user management UI elements");const O=(a,t,s)=>{a.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s},V=a=>{O(z,ee,a==="preapproval"),O(Y,ae,a==="invite"),O(R,te,a==="manage")};z.addEventListener("click",()=>V("preapproval")),Y.addEventListener("click",()=>V("invite")),R.addEventListener("click",()=>V("manage"));const me=ve(),de=he(),ue=fe({currentApp:"user-management",onAppChange:a=>{if(a==="whiteboard"){window.location.href="/whiteboard";return}if(a==="worksheet-builder"){window.location.href="/worksheet-builder/";return}a==="profile"&&(window.location.href="/profile/")},rightContent:me,userRole:de,isAdmin:E});C.appendChild(ue);const v=r.querySelector("#userAvatar"),S=r.querySelector("#userMenu"),T=r.querySelector("#userEmail"),ne=r.querySelector("#signOutBtn"),re=r.querySelector("#profileBtn"),se=r.querySelector("#selectStudentBtn");se&&(se.hidden=!0),v&&(v.innerHTML=`<img src="${ce()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,v.addEventListener("click",a=>{if(a.stopPropagation(),!S)return;const t=S.hidden;S.hidden=!t,v.setAttribute("aria-expanded",String(!t))})),S&&S.addEventListener("click",a=>{a.stopPropagation()}),document.addEventListener("click",()=>{S&&(S.hidden=!0),v&&v.setAttribute("aria-expanded","false")}),re&&re.addEventListener("click",()=>{window.location.href="/profile/"}),ne&&ne.addEventListener("click",()=>{Le(),window.location.href="/auth"});try{const a=await be();if(T&&(T.textContent=a.displayName||a.email),v){const t=a.avatarUrl||ce();v.innerHTML=`<img src="${t}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,v.title=a.displayName.trim()||a.email}}catch{T&&(T.textContent="")}const pe=ye();r.appendChild(pe);let U=[],k=[],A=[];const w=new Set,m=(a,t="info")=>{p.hidden=!1,p.textContent=a,p.dataset.tone=t},x=()=>{p.hidden=!0,p.textContent="",p.dataset.tone=""},oe=()=>{W.innerHTML="";const a=document.createDocumentFragment();U.forEach(t=>{const s=document.createElement("button");s.type="button",s.className="user-management-group-filter",s.textContent=t,s.dataset.active=w.has(t)?"true":"false",s.setAttribute("aria-pressed",w.has(t)?"true":"false"),s.addEventListener("click",()=>{w.has(t)?w.delete(t):w.add(t),oe(),L()}),a.appendChild(s)}),W.appendChild(a)},le=(a=[])=>{F.innerHTML="";const t=new Set(a),s=document.createDocumentFragment();U.forEach(e=>{const n=document.createElement("label");n.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=t.has(e),n.appendChild(o),n.append(` ${e}`),s.appendChild(n)}),F.appendChild(s)},ie=(a=[])=>{G.innerHTML="";const t=new Set(a),s=document.createDocumentFragment();U.forEach(e=>{const n=document.createElement("label");n.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=e,o.checked=t.has(e),n.appendChild(o),n.append(` ${e}`),s.appendChild(n)}),G.appendChild(s)},_=()=>{N.innerHTML="";const a=document.createDocumentFragment();if(A.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",a.appendChild(t),N.appendChild(a);return}A.forEach(t=>{const s=document.createElement("article");s.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const n=document.createElement("div"),o=document.createElement("strong");o.textContent=t.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=t.groups.length>0?t.groups.join(", "):"No groups",n.appendChild(o),n.appendChild(c),e.appendChild(n);const d=document.createElement("div");d.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{H.value=t.email,le(t.groups)});const i=document.createElement("button");i.type="button",i.className="user-management-delete-btn",i.textContent="Delete",i.addEventListener("click",async()=>{x(),i.disabled=!0;try{await Pe(t.email),A=A.filter(g=>g.email!==t.email),_(),m(`Deleted pre-approval for ${t.email}.`,"success")}catch(g){const q=g instanceof Error?g.message:"Failed to delete pre-approval";m(q,"error")}finally{i.disabled=!1}}),d.appendChild(l),d.appendChild(i),s.appendChild(e),s.appendChild(d),a.appendChild(s)}),N.appendChild(a)},L=()=>{const a=D.value.trim().toLowerCase(),t=k.filter(e=>{const n=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(a&&!n.includes(a))return!1;if(w.size===0)return!0;const o=new Set(e.groups);for(const c of w)if(!o.has(c))return!1;return!0});j.innerHTML="";const s=document.createDocumentFragment();if(t.forEach(e=>{const n=document.createElement("article");n.className="user-management-user",n.dataset.username=e.username;const o=document.createElement("div");o.className="user-management-user-header";const c=document.createElement("div"),d=document.createElement("strong");d.textContent=e.displayName||e.email;const l=document.createElement("div");l.className="user-management-user-meta",l.textContent=e.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=`Username: ${e.username}`,c.appendChild(d),c.appendChild(l),c.appendChild(i);const g=document.createElement("div");g.className="user-management-user-status",g.textContent=e.status,o.appendChild(c),o.appendChild(g);const q=document.createElement("div");q.className="user-management-user-groups",U.forEach(f=>{const u=document.createElement("label");u.className="user-management-group-chip";const M=document.createElement("input");M.type="checkbox",M.value=f,M.checked=e.groups.includes(f),u.appendChild(M),u.append(` ${f}`),q.appendChild(u)});const I=document.createElement("div");I.className="user-management-user-actions";const h=document.createElement("button");h.type="button",h.className="user-management-save-btn",h.textContent="Save groups",h.addEventListener("click",async()=>{x(),h.disabled=!0;try{const f=b(Array.from(q.querySelectorAll('input[type="checkbox"]:checked')).map(M=>M.value)),u=await Ae(e.username,f);e.groups=b(u.groups),L(),m(`Updated groups for ${e.displayName}.`,"success")}catch(f){const u=f instanceof Error?f.message:"Failed to update user groups";m(u,"error")}finally{h.disabled=!1}}),I.appendChild(h);const P=document.createElement("button");P.type="button",P.className="user-management-delete-btn",P.textContent="Delete user",P.addEventListener("click",async()=>{if(x(),!!window.confirm(`Are you sure you want to delete ${e.displayName||e.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`)){h.disabled=!0,P.disabled=!0;try{await we(e.username),k=k.filter(u=>u.username!==e.username),L(),m(`Deleted user ${e.displayName||e.email}.`,"success")}catch(u){const M=u instanceof Error?u.message:"Failed to delete user";m(M,"error")}finally{h.disabled=!1,P.disabled=!1}}}),I.appendChild(P),n.appendChild(o),n.appendChild(q),n.appendChild(I),s.appendChild(n)}),t.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",s.appendChild(e)}j.appendChild(s)};D.addEventListener("input",()=>L()),$.addEventListener("submit",async a=>{a.preventDefault(),x();const t=H.value.trim().toLowerCase(),s=b(Array.from(F.querySelectorAll('input[type="checkbox"]:checked')).map(n=>n.value)),e=$.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const n=await Ce(t,s),o={...n,groups:b(n.groups)};A=[...A.filter(c=>c.email!==o.email),o].sort((c,d)=>c.email.localeCompare(d.email)),_(),m(`Saved pre-approval for ${o.email}.`,"success")}catch(n){const o=n instanceof Error?n.message:"Failed to save pre-approval";m(o,"error")}finally{e&&(e.disabled=!1)}}),B.addEventListener("submit",async a=>{a.preventDefault(),x();const t=J.value.trim().toLowerCase(),s=K.value.trim(),e=Q.value.trim(),n=X.value.trim(),o=Z.value.trim(),c=b(Array.from(G.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){m("Please enter a valid email address.","error");return}if(!s||!e){m("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(n)){m("Birth date must be set in YYYY-MM-DD format.","error");return}const d=B.querySelector("#userManagementCreateUserSubmit");d&&(d.disabled=!0);try{const l=await Me({email:t,givenName:s,familyName:e,birthDate:n,groups:c,...o?{tempPassword:o}:{}});k=[...k.filter(i=>i.username!==l.username),{...l,groups:b(l.groups)}].sort((i,g)=>i.displayName.localeCompare(g.displayName)),L(),m(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),B.reset(),ie()}catch(l){const i=l instanceof Error?l.message:"Failed to create user";m(i,"error")}finally{d&&(d.disabled=!1)}});try{const[a,t]=await Promise.all([Ee(),Se()]),s=a;U=b(s.availableGroups),k=s.users.map(e=>({...e,groups:b(e.groups)})),A=t.preApprovals.map(e=>({...e,email:e.email.trim().toLowerCase(),groups:b(e.groups)})).sort((e,n)=>e.email.localeCompare(n.email)),le(),ie(),_(),oe(),L()}catch(a){const t=a instanceof Error?a.message:"Failed to load users";m(t,"error")}};export{Ue as mountUserManagementPage};
