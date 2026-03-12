import{t as we,aa as Se,k as Ae,s as Ue,j as xe,n as Pe,o as Le,b as ke,m as Ne,e as qe,ah as Fe,ai as Ge,aj as Te,ak as Ie,al as Be,am as De,I as $e,an as He}from"./UserMenu-BzWWuvho.js";import{b as Re}from"./dialogs-ChSClj4n.js";import{P as Oe,t as _e,c as ze}from"./paperAccess-BAxWj9_K.js";const Ye="tutor",je="student",Ke=()=>`
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
`,h=o=>Array.from(new Set(o.map(p=>p.trim()).filter(p=>p.length>0))).sort((p,N)=>p.localeCompare(N)),W=o=>h(Array.from(o.querySelectorAll('input[type="checkbox"]:checked')).map(p=>p.value)),Ve=o=>{const p=new Set(W(o));return p.has(Ye)||p.has(je)},We=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const p=we().map(a=>a.trim().toLowerCase()),N=p.includes("admin"),Z=Se();if(!N){window.location.href="/whiteboard";return}o.innerHTML=Ke();const ee=o.querySelector("#userManagementAppBarContainer"),M=o.querySelector("#userManagementFeedback"),q=o.querySelector("#userManagementSearch"),R=o.querySelector("#userManagementPreApprovalForm"),O=o.querySelector("#userManagementPreApprovalEmail"),A=o.querySelector("#userManagementPreApprovalGroups"),F=o.querySelector("#userManagementPreApprovalList"),G=o.querySelector("#userManagementCreateUserForm"),ae=o.querySelector("#userManagementCreateUserEmail"),te=o.querySelector("#userManagementCreateUserGivenName"),ne=o.querySelector("#userManagementCreateUserFamilyName"),re=o.querySelector("#userManagementCreateUserBirthDate"),se=o.querySelector("#userManagementCreateUserTempPassword"),U=o.querySelector("#userManagementCreateUserGroups"),_=o.querySelector("#userManagementGroupsLegend"),T=o.querySelector("#userManagementList"),z=o.querySelector("#userManagementPreApprovalToggle"),Y=o.querySelector("#userManagementInviteToggle"),j=o.querySelector("#userManagementManageToggle"),oe=o.querySelector("#userManagementPreApprovalPanel"),ie=o.querySelector("#userManagementInvitePanel"),le=o.querySelector("#userManagementManagePanel");if(!ee||!M||!q||!R||!O||!A||!F||!G||!ae||!te||!ne||!re||!se||!U||!_||!T||!z||!Y||!j||!oe||!ie||!le)throw new Error("Missing user management UI elements");const K=(a,t,n)=>{a.setAttribute("aria-expanded",n?"true":"false"),t.hidden=!n},I=a=>{K(z,oe,a==="preapproval"),K(Y,ie,a==="invite"),K(j,le,a==="manage")};z.addEventListener("click",()=>I("preapproval")),Y.addEventListener("click",()=>I("invite")),j.addEventListener("click",()=>I("manage"));const be=Ae(),ye=Ue(),ce=p.includes("mailbox");let me=0;if(ce)try{me=await xe()}catch(a){console.warn("Failed to load inbox unread count",a)}const Ce=Pe({currentApp:"user-management",onAppChange:a=>{if(a==="whiteboard"){window.location.href="/whiteboard";return}if(a==="activity"){window.location.href="/activity/";return}if(a==="inbox"){window.location.href="/mailbox/";return}if(a==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(a==="notes"){window.location.href="/notes/";return}if(a==="issues"){window.location.href="/issues/";return}a==="profile"&&(window.location.href="/profile/")},rightContent:be,userRole:ye,isAdmin:N,hasMailboxAccess:ce,unreadInboxCount:me});ee.appendChild(Ce),await Le({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});const Ee=ke();o.appendChild(Ee),Ne(),qe();let P=[],y=[],w=[];const C=new Set;let B="",D="";const u=(a,t="info")=>{M.hidden=!1,M.textContent=a,M.dataset.tone=t},x=()=>{M.hidden=!0,M.textContent="",M.dataset.tone=""},de=()=>{B="",D=""},V=()=>{_.innerHTML="";const a=document.createDocumentFragment();P.forEach(t=>{const n=document.createElement("button");n.type="button",n.className="user-management-group-filter",n.textContent=t,n.dataset.active=C.has(t)?"true":"false",n.setAttribute("aria-pressed",C.has(t)?"true":"false"),n.addEventListener("click",()=>{C.has(t)?C.delete(t):C.add(t),de(),V(),S()}),a.appendChild(n)}),_.appendChild(a)},X=(a,t)=>{const n=Ve(a);t.hidden=!n;const e=W(a);t.querySelectorAll("[data-paper-preset]").forEach(r=>{const s=r.dataset.paperPreset,i=ze(e,s);r.dataset.active=i?"true":"false",r.setAttribute("aria-pressed",i?"true":"false")})},J=a=>{const t=document.createElement("div");return t.className="user-management-paper-presets",t.hidden=!0,Oe.forEach(n=>{const e=document.createElement("button");e.type="button",e.className="user-management-paper-preset",e.textContent=n.label,e.dataset.paperPreset=n.key,e.setAttribute("aria-pressed","false"),e.addEventListener("click",()=>{const r=new Set(_e(W(a),n.key));a.querySelectorAll('input[type="checkbox"]').forEach(s=>{s.checked=r.has(s.value)}),X(a,t)}),t.appendChild(e)}),a.querySelectorAll('input[type="checkbox"]').forEach(n=>{n.addEventListener("change",()=>{X(a,t)})}),X(a,t),t},ue=(a=[])=>{A.innerHTML="";const t=new Set(a),n=document.createDocumentFragment();P.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const s=document.createElement("input");s.type="checkbox",s.value=e,s.checked=t.has(e),r.appendChild(s),r.append(` ${e}`),n.appendChild(r)}),A.appendChild(n),A.appendChild(J(A))},pe=(a=[])=>{U.innerHTML="";const t=new Set(a),n=document.createDocumentFragment();P.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const s=document.createElement("input");s.type="checkbox",s.value=e,s.checked=t.has(e),r.appendChild(s),r.append(` ${e}`),n.appendChild(r)}),U.appendChild(n),U.appendChild(J(U))},Q=()=>{F.innerHTML="";const a=document.createDocumentFragment();if(w.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",a.appendChild(t),F.appendChild(a);return}w.forEach(t=>{const n=document.createElement("article");n.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const r=document.createElement("div"),s=document.createElement("strong");s.textContent=t.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=t.groups.length>0?t.groups.join(", "):"No groups",r.appendChild(s),r.appendChild(i),e.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{O.value=t.email,ue(t.groups)});const c=document.createElement("button");c.type="button",c.className="user-management-delete-btn",c.textContent="Delete",c.addEventListener("click",async()=>{x(),c.disabled=!0;try{await De(t.email),w=w.filter(d=>d.email!==t.email),Q(),u(`Deleted pre-approval for ${t.email}.`,"success")}catch(d){const L=d instanceof Error?d.message:"Failed to delete pre-approval";u(L,"error")}finally{c.disabled=!1}}),m.appendChild(l),m.appendChild(c),n.appendChild(e),n.appendChild(m),a.appendChild(n)}),F.appendChild(a)},S=()=>{const a=q.value.trim().toLowerCase(),t=y.filter(e=>{const r=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(a&&!r.includes(a))return!1;if(C.size===0)return!0;const s=new Set(e.groups);for(const i of C)if(!s.has(i))return!1;return!0});T.innerHTML="";const n=document.createDocumentFragment();if(t.forEach(e=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=e.username,(B!==""&&e.username===B||D!==""&&e.email.toLowerCase()===D.toLowerCase())&&r.classList.add("user-management-user-highlight");const i=document.createElement("div");i.className="user-management-user-header";const m=document.createElement("div"),l=document.createElement("strong");l.textContent=e.displayName||e.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=e.email;const d=document.createElement("div");d.className="user-management-user-meta",d.textContent=`Username: ${e.username}`,m.appendChild(l),m.appendChild(c),m.appendChild(d);const L=document.createElement("div");L.className="user-management-user-status",L.textContent=e.status,i.appendChild(m),i.appendChild(L);const k=document.createElement("div");k.className="user-management-user-groups",P.forEach(b=>{const g=document.createElement("label");g.className="user-management-group-chip";const E=document.createElement("input");E.type="checkbox",E.value=b,E.checked=e.groups.includes(b),g.appendChild(E),g.append(` ${b}`),k.appendChild(g)});const $=document.createElement("div");$.className="user-management-user-actions";const v=document.createElement("button");v.type="button",v.className="user-management-save-btn",v.textContent="Save groups",v.addEventListener("click",async()=>{x(),v.disabled=!0;try{const b=h(Array.from(k.querySelectorAll('input[type="checkbox"]:checked')).map(E=>E.value)),g=await Ie(e.username,b);e.groups=h(g.groups),S(),u(`Updated groups for ${e.displayName}.`,"success")}catch(b){const g=b instanceof Error?b.message:"Failed to update user groups";u(g,"error")}finally{v.disabled=!1}}),$.appendChild(v);const f=document.createElement("button");f.type="button",f.className="user-management-delete-btn",f.textContent="Delete user";const fe=Z!==""&&e.username===Z;fe&&(f.disabled=!0,f.title="You cannot delete your own account."),f.addEventListener("click",async()=>{if(fe){u("You cannot delete your own account.","error");return}if(x(),!!await Re({title:"Delete user",message:`Are you sure you want to delete ${e.displayName||e.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`,confirmLabel:"Delete user",confirmTone:"danger"})){v.disabled=!0,f.disabled=!0;try{await Be(e.username),y=y.filter(g=>g.username!==e.username),S(),u(`Deleted user ${e.displayName||e.email}.`,"success")}catch(g){const E=g instanceof Error?g.message:"Failed to delete user";u(E,"error")}finally{v.disabled=!1,f.disabled=!1}}}),$.appendChild(f);const H=document.createElement("div");H.className="user-management-user-footer";const Me=J(k);H.appendChild(Me),H.appendChild($),r.appendChild(i),r.appendChild(k),r.appendChild(H),n.appendChild(r)}),t.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",n.appendChild(e)}T.appendChild(n)},ge=a=>{if(!(a instanceof $e)||a.status!==409||!a.data||typeof a.data!="object")return null;const t=a.data;if(t.code!=="USER_EXISTS"||!t.existingUser||typeof t.existingUser!="object")return null;const n=t.existingUser;return{username:typeof n.username=="string"?n.username.trim():"",email:typeof n.email=="string"?n.email.trim():"",displayName:typeof n.displayName=="string"?n.displayName.trim():"",status:typeof n.status=="string"?n.status.trim():""}},he=async()=>{const a=await He();P=h(a.availableGroups),y=a.users.map(t=>({...t,groups:h(t.groups)})),V(),pe(),ue()},ve=async(a,t)=>{const n=(a.username||"").trim(),e=(a.email||"").trim().toLowerCase();y.some(d=>!!(n&&d.username===n||e&&d.email.toLowerCase()===e))||await he();const s=y.find(d=>!!(n&&d.username===n||e&&d.email.toLowerCase()===e)),i=s?.username||n,m=(s?.email||e).toLowerCase();I("manage"),C.clear(),V(),x(),B=i,D=m,q.value=s?.email||e||i,S(),i&&requestAnimationFrame(()=>{T.querySelector(`[data-username="${CSS.escape(i)}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})});const l=s?.displayName||a.displayName||s?.email||m,c=s?.status||a.status||"UNKNOWN";u(`${t} ${l||"User"} already exists (${c}). Showing existing user in Search and modify users.`,"error")};q.addEventListener("input",()=>{de(),S()}),R.addEventListener("submit",async a=>{a.preventDefault(),x();const t=O.value.trim().toLowerCase(),n=h(Array.from(A.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),e=R.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const r=await Fe(t,n),s={...r,groups:h(r.groups)};w=[...w.filter(i=>i.email!==s.email),s].sort((i,m)=>i.email.localeCompare(m.email)),Q(),u(`Saved pre-approval for ${s.email}.`,"success")}catch(r){const s=ge(r);if(s){await ve(s,"Pre-approval was not saved.");return}const i=r instanceof Error?r.message:"Failed to save pre-approval";u(i,"error")}finally{e&&(e.disabled=!1)}}),G.addEventListener("submit",async a=>{a.preventDefault(),x();const t=ae.value.trim().toLowerCase(),n=te.value.trim(),e=ne.value.trim(),r=re.value.trim(),s=se.value.trim(),i=h(Array.from(U.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){u("Please enter a valid email address.","error");return}if(!n||!e){u("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){u("Birth date must be set in YYYY-MM-DD format.","error");return}const m=G.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await Ge({email:t,givenName:n,familyName:e,birthDate:r,groups:i,...s?{tempPassword:s}:{}});y=[...y.filter(c=>c.username!==l.username),{...l,groups:h(l.groups)}].sort((c,d)=>c.displayName.localeCompare(d.displayName)),S(),u(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),G.reset(),pe()}catch(l){const c=ge(l);if(c){await ve(c,"Invitation was not created.");return}const d=l instanceof Error?l.message:"Failed to create user";u(d,"error")}finally{m&&(m.disabled=!1)}});try{const[a,t]=await Promise.all([he(),Te()]);w=t.preApprovals.map(n=>({...n,email:n.email.trim().toLowerCase(),groups:h(n.groups)})).sort((n,e)=>n.email.localeCompare(e.email)),Q(),S()}catch(a){const t=a instanceof Error?a.message:"Failed to load users";u(t,"error")}};export{We as mountUserManagementPage};
