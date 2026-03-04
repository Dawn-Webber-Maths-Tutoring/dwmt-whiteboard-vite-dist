import{d as we,G as Se,a as Ae,g as Ue,b as xe,f as Le,c as Pe,H as ke,I as Ne,J as qe,K as Fe,L as Te,M as Be,A as Ge,N as Ie}from"./apiClient-u9KkifKM.js";const $e=()=>`
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
`,ye=()=>"/default_avatar.png",De=()=>{const b="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",S=[];for(let C=0;C<window.localStorage.length;C+=1){const P=window.localStorage.key(C);P&&P.startsWith(b)&&S.push(P)}S.forEach(C=>window.localStorage.removeItem(C))},y=s=>Array.from(new Set(s.map(b=>b.trim()).filter(b=>b.length>0))).sort((b,S)=>b.localeCompare(S)),je=async()=>{const s=document.querySelector("#app");if(!s)throw new Error("Missing #app root");const S=we().includes("admin"),C=Se();if(!S){window.location.href="/whiteboard";return}s.innerHTML=$e();const P=s.querySelector("#userManagementAppBarContainer"),A=s.querySelector("#userManagementFeedback"),F=s.querySelector("#userManagementSearch"),R=s.querySelector("#userManagementPreApprovalForm"),K=s.querySelector("#userManagementPreApprovalEmail"),T=s.querySelector("#userManagementPreApprovalGroups"),B=s.querySelector("#userManagementPreApprovalList"),G=s.querySelector("#userManagementCreateUserForm"),ee=s.querySelector("#userManagementCreateUserEmail"),ae=s.querySelector("#userManagementCreateUserGivenName"),te=s.querySelector("#userManagementCreateUserFamilyName"),ne=s.querySelector("#userManagementCreateUserBirthDate"),re=s.querySelector("#userManagementCreateUserTempPassword"),I=s.querySelector("#userManagementCreateUserGroups"),O=s.querySelector("#userManagementGroupsLegend"),$=s.querySelector("#userManagementList"),_=s.querySelector("#userManagementPreApprovalToggle"),V=s.querySelector("#userManagementInviteToggle"),J=s.querySelector("#userManagementManageToggle"),se=s.querySelector("#userManagementPreApprovalPanel"),oe=s.querySelector("#userManagementInvitePanel"),ie=s.querySelector("#userManagementManagePanel");if(!P||!A||!F||!R||!K||!T||!B||!G||!ee||!ae||!te||!ne||!re||!I||!O||!$||!_||!V||!J||!se||!oe||!ie)throw new Error("Missing user management UI elements");const X=(e,t,n)=>{e.setAttribute("aria-expanded",n?"true":"false"),t.hidden=!n},D=e=>{X(_,se,e==="preapproval"),X(V,oe,e==="invite"),X(J,ie,e==="manage")};_.addEventListener("click",()=>D("preapproval")),V.addEventListener("click",()=>D("invite")),J.addEventListener("click",()=>D("manage"));const be=Ae(),Ce=Ue(),Ee=xe({currentApp:"user-management",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard";return}if(e==="inbox"){window.location.href="/mailbox/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:be,userRole:Ce,isAdmin:S});P.appendChild(Ee);const g=s.querySelector("#userAvatar"),U=s.querySelector("#userMenu"),H=s.querySelector("#userEmail"),le=s.querySelector("#signOutBtn"),ce=s.querySelector("#profileBtn"),me=s.querySelector("#selectStudentBtn");me&&(me.hidden=!0),g&&(g.innerHTML=`<img src="${ye()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.addEventListener("click",e=>{if(e.stopPropagation(),!U)return;const t=U.hidden;U.hidden=!t,g.setAttribute("aria-expanded",String(!t))})),U&&U.addEventListener("click",e=>{e.stopPropagation()}),document.addEventListener("click",()=>{U&&(U.hidden=!0),g&&g.setAttribute("aria-expanded","false")}),ce&&ce.addEventListener("click",()=>{window.location.href="/profile/"}),le&&le.addEventListener("click",()=>{De(),window.location.href="/auth"});try{const e=await Le();if(H&&(H.textContent=e.displayName||e.email),g){const t=e.avatarUrl||ye();g.innerHTML=`<img src="${t}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.title=e.displayName.trim()||e.email}}catch{H&&(H.textContent="")}const Me=Pe();s.appendChild(Me);let N=[],E=[],x=[];const M=new Set;let j="",W="";const u=(e,t="info")=>{A.hidden=!1,A.textContent=e,A.dataset.tone=t},k=()=>{A.hidden=!0,A.textContent="",A.dataset.tone=""},de=()=>{j="",W=""},Q=()=>{O.innerHTML="";const e=document.createDocumentFragment();N.forEach(t=>{const n=document.createElement("button");n.type="button",n.className="user-management-group-filter",n.textContent=t,n.dataset.active=M.has(t)?"true":"false",n.setAttribute("aria-pressed",M.has(t)?"true":"false"),n.addEventListener("click",()=>{M.has(t)?M.delete(t):M.add(t),de(),Q(),L()}),e.appendChild(n)}),O.appendChild(e)},ue=(e=[])=>{T.innerHTML="";const t=new Set(e),n=document.createDocumentFragment();N.forEach(a=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=a,o.checked=t.has(a),r.appendChild(o),r.append(` ${a}`),n.appendChild(r)}),T.appendChild(n)},pe=(e=[])=>{I.innerHTML="";const t=new Set(e),n=document.createDocumentFragment();N.forEach(a=>{const r=document.createElement("label");r.className="user-management-group-chip";const o=document.createElement("input");o.type="checkbox",o.value=a,o.checked=t.has(a),r.appendChild(o),r.append(` ${a}`),n.appendChild(r)}),I.appendChild(n)},Z=()=>{B.innerHTML="";const e=document.createDocumentFragment();if(x.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",e.appendChild(t),B.appendChild(e);return}x.forEach(t=>{const n=document.createElement("article");n.className="user-management-user";const a=document.createElement("div");a.className="user-management-user-header";const r=document.createElement("div"),o=document.createElement("strong");o.textContent=t.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=t.groups.length>0?t.groups.join(", "):"No groups",r.appendChild(o),r.appendChild(i),a.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{K.value=t.email,ue(t.groups)});const c=document.createElement("button");c.type="button",c.className="user-management-delete-btn",c.textContent="Delete",c.addEventListener("click",async()=>{k(),c.disabled=!0;try{await Be(t.email),x=x.filter(d=>d.email!==t.email),Z(),u(`Deleted pre-approval for ${t.email}.`,"success")}catch(d){const q=d instanceof Error?d.message:"Failed to delete pre-approval";u(q,"error")}finally{c.disabled=!1}}),m.appendChild(l),m.appendChild(c),n.appendChild(a),n.appendChild(m),e.appendChild(n)}),B.appendChild(e)},L=()=>{const e=F.value.trim().toLowerCase(),t=E.filter(a=>{const r=`${a.displayName} ${a.email} ${a.username}`.toLowerCase();if(e&&!r.includes(e))return!1;if(M.size===0)return!0;const o=new Set(a.groups);for(const i of M)if(!o.has(i))return!1;return!0});$.innerHTML="";const n=document.createDocumentFragment();if(t.forEach(a=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=a.username,(j!==""&&a.username===j||W!==""&&a.email.toLowerCase()===W.toLowerCase())&&r.classList.add("user-management-user-highlight");const i=document.createElement("div");i.className="user-management-user-header";const m=document.createElement("div"),l=document.createElement("strong");l.textContent=a.displayName||a.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=a.email;const d=document.createElement("div");d.className="user-management-user-meta",d.textContent=`Username: ${a.username}`,m.appendChild(l),m.appendChild(c),m.appendChild(d);const q=document.createElement("div");q.className="user-management-user-status",q.textContent=a.status,i.appendChild(m),i.appendChild(q);const Y=document.createElement("div");Y.className="user-management-user-groups",N.forEach(f=>{const p=document.createElement("label");p.className="user-management-group-chip";const w=document.createElement("input");w.type="checkbox",w.value=f,w.checked=a.groups.includes(f),p.appendChild(w),p.append(` ${f}`),Y.appendChild(p)});const z=document.createElement("div");z.className="user-management-user-actions";const h=document.createElement("button");h.type="button",h.className="user-management-save-btn",h.textContent="Save groups",h.addEventListener("click",async()=>{k(),h.disabled=!0;try{const f=y(Array.from(Y.querySelectorAll('input[type="checkbox"]:checked')).map(w=>w.value)),p=await Fe(a.username,f);a.groups=y(p.groups),L(),u(`Updated groups for ${a.displayName}.`,"success")}catch(f){const p=f instanceof Error?f.message:"Failed to update user groups";u(p,"error")}finally{h.disabled=!1}}),z.appendChild(h);const v=document.createElement("button");v.type="button",v.className="user-management-delete-btn",v.textContent="Delete user";const fe=C!==""&&a.username===C;fe&&(v.disabled=!0,v.title="You cannot delete your own account."),v.addEventListener("click",async()=>{if(fe){u("You cannot delete your own account.","error");return}if(k(),!!window.confirm(`Are you sure you want to delete ${a.displayName||a.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`)){h.disabled=!0,v.disabled=!0;try{await Te(a.username),E=E.filter(p=>p.username!==a.username),L(),u(`Deleted user ${a.displayName||a.email}.`,"success")}catch(p){const w=p instanceof Error?p.message:"Failed to delete user";u(w,"error")}finally{h.disabled=!1,v.disabled=!1}}}),z.appendChild(v),r.appendChild(i),r.appendChild(Y),r.appendChild(z),n.appendChild(r)}),t.length===0){const a=document.createElement("div");a.className="user-management-empty",a.textContent="No users match your search.",n.appendChild(a)}$.appendChild(n)},ge=e=>{if(!(e instanceof Ge)||e.status!==409||!e.data||typeof e.data!="object")return null;const t=e.data;if(t.code!=="USER_EXISTS"||!t.existingUser||typeof t.existingUser!="object")return null;const n=t.existingUser;return{username:typeof n.username=="string"?n.username.trim():"",email:typeof n.email=="string"?n.email.trim():"",displayName:typeof n.displayName=="string"?n.displayName.trim():"",status:typeof n.status=="string"?n.status.trim():""}},he=async()=>{const e=await Ie();N=y(e.availableGroups),E=e.users.map(t=>({...t,groups:y(t.groups)})),Q(),pe(),ue()},ve=async(e,t)=>{const n=(e.username||"").trim(),a=(e.email||"").trim().toLowerCase();E.some(d=>!!(n&&d.username===n||a&&d.email.toLowerCase()===a))||await he();const o=E.find(d=>!!(n&&d.username===n||a&&d.email.toLowerCase()===a)),i=o?.username||n,m=(o?.email||a).toLowerCase();D("manage"),M.clear(),Q(),k(),j=i,W=m,F.value=o?.email||a||i,L(),i&&requestAnimationFrame(()=>{$.querySelector(`[data-username="${CSS.escape(i)}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})});const l=o?.displayName||e.displayName||o?.email||m,c=o?.status||e.status||"UNKNOWN";u(`${t} ${l||"User"} already exists (${c}). Showing existing user in Search and modify users.`,"error")};F.addEventListener("input",()=>{de(),L()}),R.addEventListener("submit",async e=>{e.preventDefault(),k();const t=K.value.trim().toLowerCase(),n=y(Array.from(T.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),a=R.querySelector("#userManagementPreApprovalSave");a&&(a.disabled=!0);try{const r=await ke(t,n),o={...r,groups:y(r.groups)};x=[...x.filter(i=>i.email!==o.email),o].sort((i,m)=>i.email.localeCompare(m.email)),Z(),u(`Saved pre-approval for ${o.email}.`,"success")}catch(r){const o=ge(r);if(o){await ve(o,"Pre-approval was not saved.");return}const i=r instanceof Error?r.message:"Failed to save pre-approval";u(i,"error")}finally{a&&(a.disabled=!1)}}),G.addEventListener("submit",async e=>{e.preventDefault(),k();const t=ee.value.trim().toLowerCase(),n=ae.value.trim(),a=te.value.trim(),r=ne.value.trim(),o=re.value.trim(),i=y(Array.from(I.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){u("Please enter a valid email address.","error");return}if(!n||!a){u("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){u("Birth date must be set in YYYY-MM-DD format.","error");return}const m=G.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await Ne({email:t,givenName:n,familyName:a,birthDate:r,groups:i,...o?{tempPassword:o}:{}});E=[...E.filter(c=>c.username!==l.username),{...l,groups:y(l.groups)}].sort((c,d)=>c.displayName.localeCompare(d.displayName)),L(),u(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),G.reset(),pe()}catch(l){const c=ge(l);if(c){await ve(c,"Invitation was not created.");return}const d=l instanceof Error?l.message:"Failed to create user";u(d,"error")}finally{m&&(m.disabled=!1)}});try{const[e,t]=await Promise.all([he(),qe()]);x=t.preApprovals.map(n=>({...n,email:n.email.trim().toLowerCase(),groups:y(n.groups)})).sort((n,a)=>n.email.localeCompare(a.email)),Z(),L()}catch(e){const t=e instanceof Error?e.message:"Failed to load users";u(t,"error")}};export{je as mountUserManagementPage};
