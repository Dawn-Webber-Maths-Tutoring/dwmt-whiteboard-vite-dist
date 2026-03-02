import{d as Se,z as we,a as Ae,g as Ue,b as xe,f as Pe,c as Le,B as ke,C as qe,D as Ne,E as Fe,F as Be,G as Te,A as Ge,H as Ie}from"./apiClient-Biwb7eVy.js";const $e=()=>`
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
`,ye=()=>"/default_avatar.png",De=()=>{const b="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",w=[];for(let C=0;C<window.localStorage.length;C+=1){const L=window.localStorage.key(C);L&&L.startsWith(b)&&w.push(L)}w.forEach(C=>window.localStorage.removeItem(C))},y=s=>Array.from(new Set(s.map(b=>b.trim()).filter(b=>b.length>0))).sort((b,w)=>b.localeCompare(w)),je=async()=>{const s=document.querySelector("#app");if(!s)throw new Error("Missing #app root");const w=Se().includes("admin"),C=we();if(!w){window.location.href="/whiteboard";return}s.innerHTML=$e();const L=s.querySelector("#userManagementAppBarContainer"),A=s.querySelector("#userManagementFeedback"),F=s.querySelector("#userManagementSearch"),R=s.querySelector("#userManagementPreApprovalForm"),K=s.querySelector("#userManagementPreApprovalEmail"),B=s.querySelector("#userManagementPreApprovalGroups"),T=s.querySelector("#userManagementPreApprovalList"),G=s.querySelector("#userManagementCreateUserForm"),ee=s.querySelector("#userManagementCreateUserEmail"),ae=s.querySelector("#userManagementCreateUserGivenName"),te=s.querySelector("#userManagementCreateUserFamilyName"),ne=s.querySelector("#userManagementCreateUserBirthDate"),re=s.querySelector("#userManagementCreateUserTempPassword"),I=s.querySelector("#userManagementCreateUserGroups"),O=s.querySelector("#userManagementGroupsLegend"),$=s.querySelector("#userManagementList"),_=s.querySelector("#userManagementPreApprovalToggle"),V=s.querySelector("#userManagementInviteToggle"),X=s.querySelector("#userManagementManageToggle"),se=s.querySelector("#userManagementPreApprovalPanel"),oe=s.querySelector("#userManagementInvitePanel"),ie=s.querySelector("#userManagementManagePanel");if(!L||!A||!F||!R||!K||!B||!T||!G||!ee||!ae||!te||!ne||!re||!I||!O||!$||!_||!V||!X||!se||!oe||!ie)throw new Error("Missing user management UI elements");const J=(e,t,n)=>{e.setAttribute("aria-expanded",n?"true":"false"),t.hidden=!n},D=e=>{J(_,se,e==="preapproval"),J(V,oe,e==="invite"),J(X,ie,e==="manage")};_.addEventListener("click",()=>D("preapproval")),V.addEventListener("click",()=>D("invite")),X.addEventListener("click",()=>D("manage"));const be=Ae(),Ce=Ue(),Ee=xe({currentApp:"user-management",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:be,userRole:Ce,isAdmin:w});L.appendChild(Ee);const g=s.querySelector("#userAvatar"),U=s.querySelector("#userMenu"),H=s.querySelector("#userEmail"),le=s.querySelector("#signOutBtn"),ce=s.querySelector("#profileBtn"),me=s.querySelector("#selectStudentBtn");me&&(me.hidden=!0),g&&(g.innerHTML=`<img src="${ye()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.addEventListener("click",e=>{if(e.stopPropagation(),!U)return;const t=U.hidden;U.hidden=!t,g.setAttribute("aria-expanded",String(!t))})),U&&U.addEventListener("click",e=>{e.stopPropagation()}),document.addEventListener("click",()=>{U&&(U.hidden=!0),g&&g.setAttribute("aria-expanded","false")}),ce&&ce.addEventListener("click",()=>{window.location.href="/profile/"}),le&&le.addEventListener("click",()=>{De(),window.location.href="/auth"});try{const e=await Pe();if(H&&(H.textContent=e.displayName||e.email),g){const t=e.avatarUrl||ye();g.innerHTML=`<img src="${t}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.title=e.displayName.trim()||e.email}}catch{H&&(H.textContent="")}const Me=Le();s.appendChild(Me);let q=[],E=[],x=[];const M=new Set;let j="",z="";const u=(e,t="info")=>{A.hidden=!1,A.textContent=e,A.dataset.tone=t},k=()=>{A.hidden=!0,A.textContent="",A.dataset.tone=""},de=()=>{j="",z=""},Q=()=>{O.innerHTML="";const e=document.createDocumentFragment();q.forEach(t=>{const n=document.createElement("button");n.type="button",n.className="user-management-group-filter",n.textContent=t,n.dataset.active=M.has(t)?"true":"false",n.setAttribute("aria-pressed",M.has(t)?"true":"false"),n.addEventListener("click",()=>{M.has(t)?M.delete(t):M.add(t),de(),Q(),P()}),e.appendChild(n)}),O.appendChild(e)},ue=(e=[])=>{B.innerHTML="";const t=new Set(e),n=document.createDocumentFragment();q.forEach(a=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=a,o.checked=t.has(a),r.appendChild(o),r.append(` ${a}`),n.appendChild(r)}),B.appendChild(n)},pe=(e=[])=>{I.innerHTML="";const t=new Set(e),n=document.createDocumentFragment();q.forEach(a=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=a,o.checked=t.has(a),r.appendChild(o),r.append(` ${a}`),n.appendChild(r)}),I.appendChild(n)},Z=()=>{T.innerHTML="";const e=document.createDocumentFragment();if(x.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",e.appendChild(t),T.appendChild(e);return}x.forEach(t=>{const n=document.createElement("article");n.className="user-management-user";const a=document.createElement("div");a.className="user-management-user-header";const r=document.createElement("div"),o=document.createElement("strong");o.textContent=t.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=t.groups.length>0?t.groups.join(", "):"No groups",r.appendChild(o),r.appendChild(i),a.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{K.value=t.email,ue(t.groups)});const c=document.createElement("button");c.type="button",c.className="user-management-delete-btn",c.textContent="Delete",c.addEventListener("click",async()=>{k(),c.disabled=!0;try{await Te(t.email),x=x.filter(d=>d.email!==t.email),Z(),u(`Deleted pre-approval for ${t.email}.`,"success")}catch(d){const N=d instanceof Error?d.message:"Failed to delete pre-approval";u(N,"error")}finally{c.disabled=!1}}),m.appendChild(l),m.appendChild(c),n.appendChild(a),n.appendChild(m),e.appendChild(n)}),T.appendChild(e)},P=()=>{const e=F.value.trim().toLowerCase(),t=E.filter(a=>{const r=`${a.displayName} ${a.email} ${a.username}`.toLowerCase();if(e&&!r.includes(e))return!1;if(M.size===0)return!0;const o=new Set(a.groups);for(const i of M)if(!o.has(i))return!1;return!0});$.innerHTML="";const n=document.createDocumentFragment();if(t.forEach(a=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=a.username,(j!==""&&a.username===j||z!==""&&a.email.toLowerCase()===z.toLowerCase())&&r.classList.add("user-management-user-highlight");const i=document.createElement("div");i.className="user-management-user-header";const m=document.createElement("div"),l=document.createElement("strong");l.textContent=a.displayName||a.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=a.email;const d=document.createElement("div");d.className="user-management-user-meta",d.textContent=`Username: ${a.username}`,m.appendChild(l),m.appendChild(c),m.appendChild(d);const N=document.createElement("div");N.className="user-management-user-status",N.textContent=a.status,i.appendChild(m),i.appendChild(N);const W=document.createElement("div");W.className="user-management-user-groups",q.forEach(f=>{const p=document.createElement("label");p.className="user-management-group-chip";const S=document.createElement("input");S.type="checkbox",S.value=f,S.checked=a.groups.includes(f),p.appendChild(S),p.append(` ${f}`),W.appendChild(p)});const Y=document.createElement("div");Y.className="user-management-user-actions";const v=document.createElement("button");v.type="button",v.className="user-management-save-btn",v.textContent="Save groups",v.addEventListener("click",async()=>{k(),v.disabled=!0;try{const f=y(Array.from(W.querySelectorAll('input[type="checkbox"]:checked')).map(S=>S.value)),p=await Fe(a.username,f);a.groups=y(p.groups),P(),u(`Updated groups for ${a.displayName}.`,"success")}catch(f){const p=f instanceof Error?f.message:"Failed to update user groups";u(p,"error")}finally{v.disabled=!1}}),Y.appendChild(v);const h=document.createElement("button");h.type="button",h.className="user-management-delete-btn",h.textContent="Delete user";const fe=C!==""&&a.username===C;fe&&(h.disabled=!0,h.title="You cannot delete your own account."),h.addEventListener("click",async()=>{if(fe){u("You cannot delete your own account.","error");return}if(k(),!!window.confirm(`Are you sure you want to delete ${a.displayName||a.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`)){v.disabled=!0,h.disabled=!0;try{await Be(a.username),E=E.filter(p=>p.username!==a.username),P(),u(`Deleted user ${a.displayName||a.email}.`,"success")}catch(p){const S=p instanceof Error?p.message:"Failed to delete user";u(S,"error")}finally{v.disabled=!1,h.disabled=!1}}}),Y.appendChild(h),r.appendChild(i),r.appendChild(W),r.appendChild(Y),n.appendChild(r)}),t.length===0){const a=document.createElement("div");a.className="user-management-empty",a.textContent="No users match your search.",n.appendChild(a)}$.appendChild(n)},ge=e=>{if(!(e instanceof Ge)||e.status!==409||!e.data||typeof e.data!="object")return null;const t=e.data;if(t.code!=="USER_EXISTS"||!t.existingUser||typeof t.existingUser!="object")return null;const n=t.existingUser;return{username:typeof n.username=="string"?n.username.trim():"",email:typeof n.email=="string"?n.email.trim():"",displayName:typeof n.displayName=="string"?n.displayName.trim():"",status:typeof n.status=="string"?n.status.trim():""}},ve=async()=>{const e=await Ie();q=y(e.availableGroups),E=e.users.map(t=>({...t,groups:y(t.groups)})),Q(),pe(),ue()},he=async(e,t)=>{const n=(e.username||"").trim(),a=(e.email||"").trim().toLowerCase();E.some(d=>!!(n&&d.username===n||a&&d.email.toLowerCase()===a))||await ve();const o=E.find(d=>!!(n&&d.username===n||a&&d.email.toLowerCase()===a)),i=o?.username||n,m=(o?.email||a).toLowerCase();D("manage"),M.clear(),Q(),k(),j=i,z=m,F.value=o?.email||a||i,P(),i&&requestAnimationFrame(()=>{$.querySelector(`[data-username="${CSS.escape(i)}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})});const l=o?.displayName||e.displayName||o?.email||m,c=o?.status||e.status||"UNKNOWN";u(`${t} ${l||"User"} already exists (${c}). Showing existing user in Search and modify users.`,"error")};F.addEventListener("input",()=>{de(),P()}),R.addEventListener("submit",async e=>{e.preventDefault(),k();const t=K.value.trim().toLowerCase(),n=y(Array.from(B.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),a=R.querySelector("#userManagementPreApprovalSave");a&&(a.disabled=!0);try{const r=await ke(t,n),o={...r,groups:y(r.groups)};x=[...x.filter(i=>i.email!==o.email),o].sort((i,m)=>i.email.localeCompare(m.email)),Z(),u(`Saved pre-approval for ${o.email}.`,"success")}catch(r){const o=ge(r);if(o){await he(o,"Pre-approval was not saved.");return}const i=r instanceof Error?r.message:"Failed to save pre-approval";u(i,"error")}finally{a&&(a.disabled=!1)}}),G.addEventListener("submit",async e=>{e.preventDefault(),k();const t=ee.value.trim().toLowerCase(),n=ae.value.trim(),a=te.value.trim(),r=ne.value.trim(),o=re.value.trim(),i=y(Array.from(I.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){u("Please enter a valid email address.","error");return}if(!n||!a){u("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){u("Birth date must be set in YYYY-MM-DD format.","error");return}const m=G.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await qe({email:t,givenName:n,familyName:a,birthDate:r,groups:i,...o?{tempPassword:o}:{}});E=[...E.filter(c=>c.username!==l.username),{...l,groups:y(l.groups)}].sort((c,d)=>c.displayName.localeCompare(d.displayName)),P(),u(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),G.reset(),pe()}catch(l){const c=ge(l);if(c){await he(c,"Invitation was not created.");return}const d=l instanceof Error?l.message:"Failed to create user";u(d,"error")}finally{m&&(m.disabled=!1)}});try{const[e,t]=await Promise.all([ve(),Ne()]);x=t.preApprovals.map(n=>({...n,email:n.email.trim().toLowerCase(),groups:y(n.groups)})).sort((n,a)=>n.email.localeCompare(a.email)),Z(),P()}catch(e){const t=e instanceof Error?e.message:"Failed to load users";u(t,"error")}};export{je as mountUserManagementPage};
