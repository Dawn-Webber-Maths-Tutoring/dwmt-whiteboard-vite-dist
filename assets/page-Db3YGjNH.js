import{d as he,H as fe,a as be,g as ye,b as Ce,i as Me,c as Ee,I as we,J as Se,K as Ae,L as Ue,M as xe,N as Pe,A as Le,O as Ne}from"./UserMenu-Duyqt5Wq.js";const ke=()=>`
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
`,f=o=>Array.from(new Set(o.map(S=>S.trim()).filter(S=>S.length>0))).sort((S,P)=>S.localeCompare(P)),Fe=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const P=he().includes("admin"),_=fe();if(!P){window.location.href="/whiteboard";return}o.innerHTML=ke();const J=o.querySelector("#userManagementAppBarContainer"),M=o.querySelector("#userManagementFeedback"),L=o.querySelector("#userManagementSearch"),H=o.querySelector("#userManagementPreApprovalForm"),z=o.querySelector("#userManagementPreApprovalEmail"),N=o.querySelector("#userManagementPreApprovalGroups"),k=o.querySelector("#userManagementPreApprovalList"),q=o.querySelector("#userManagementCreateUserForm"),X=o.querySelector("#userManagementCreateUserEmail"),Q=o.querySelector("#userManagementCreateUserGivenName"),Z=o.querySelector("#userManagementCreateUserFamilyName"),ee=o.querySelector("#userManagementCreateUserBirthDate"),ae=o.querySelector("#userManagementCreateUserTempPassword"),F=o.querySelector("#userManagementCreateUserGroups"),Y=o.querySelector("#userManagementGroupsLegend"),G=o.querySelector("#userManagementList"),R=o.querySelector("#userManagementPreApprovalToggle"),W=o.querySelector("#userManagementInviteToggle"),K=o.querySelector("#userManagementManageToggle"),te=o.querySelector("#userManagementPreApprovalPanel"),ne=o.querySelector("#userManagementInvitePanel"),re=o.querySelector("#userManagementManagePanel");if(!J||!M||!L||!H||!z||!N||!k||!q||!X||!Q||!Z||!ee||!ae||!F||!Y||!G||!R||!W||!K||!te||!ne||!re)throw new Error("Missing user management UI elements");const j=(n,t,a)=>{n.setAttribute("aria-expanded",a?"true":"false"),t.hidden=!a},T=n=>{j(R,te,n==="preapproval"),j(W,ne,n==="invite"),j(K,re,n==="manage")};R.addEventListener("click",()=>T("preapproval")),W.addEventListener("click",()=>T("invite")),K.addEventListener("click",()=>T("manage"));const ue=be(),pe=ye(),ge=Ce({currentApp:"user-management",onAppChange:n=>{if(n==="whiteboard"){window.location.href="/whiteboard";return}if(n==="inbox"){window.location.href="/mailbox/";return}if(n==="worksheet-builder"){window.location.href="/worksheet-builder/";return}n==="profile"&&(window.location.href="/profile/")},rightContent:ue,userRole:pe,isAdmin:P});J.appendChild(ge),await Me({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});const ve=Ee();o.appendChild(ve);let U=[],b=[],E=[];const y=new Set;let I="",B="";const u=(n,t="info")=>{M.hidden=!1,M.textContent=n,M.dataset.tone=t},A=()=>{M.hidden=!0,M.textContent="",M.dataset.tone=""},se=()=>{I="",B=""},O=()=>{Y.innerHTML="";const n=document.createDocumentFragment();U.forEach(t=>{const a=document.createElement("button");a.type="button",a.className="user-management-group-filter",a.textContent=t,a.dataset.active=y.has(t)?"true":"false",a.setAttribute("aria-pressed",y.has(t)?"true":"false"),a.addEventListener("click",()=>{y.has(t)?y.delete(t):y.add(t),se(),O(),w()}),n.appendChild(a)}),Y.appendChild(n)},oe=(n=[])=>{N.innerHTML="";const t=new Set(n),a=document.createDocumentFragment();U.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const s=document.createElement("input");s.type="checkbox",s.value=e,s.checked=t.has(e),r.appendChild(s),r.append(` ${e}`),a.appendChild(r)}),N.appendChild(a)},ie=(n=[])=>{F.innerHTML="";const t=new Set(n),a=document.createDocumentFragment();U.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const s=document.createElement("input");s.type="checkbox",s.value=e,s.checked=t.has(e),r.appendChild(s),r.append(` ${e}`),a.appendChild(r)}),F.appendChild(a)},V=()=>{k.innerHTML="";const n=document.createDocumentFragment();if(E.length===0){const t=document.createElement("div");t.className="user-management-empty",t.textContent="No pre-approved users.",n.appendChild(t),k.appendChild(n);return}E.forEach(t=>{const a=document.createElement("article");a.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const r=document.createElement("div"),s=document.createElement("strong");s.textContent=t.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=t.groups.length>0?t.groups.join(", "):"No groups",r.appendChild(s),r.appendChild(i),e.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{z.value=t.email,oe(t.groups)});const c=document.createElement("button");c.type="button",c.className="user-management-delete-btn",c.textContent="Delete",c.addEventListener("click",async()=>{A(),c.disabled=!0;try{await Pe(t.email),E=E.filter(d=>d.email!==t.email),V(),u(`Deleted pre-approval for ${t.email}.`,"success")}catch(d){const x=d instanceof Error?d.message:"Failed to delete pre-approval";u(x,"error")}finally{c.disabled=!1}}),m.appendChild(l),m.appendChild(c),a.appendChild(e),a.appendChild(m),n.appendChild(a)}),k.appendChild(n)},w=()=>{const n=L.value.trim().toLowerCase(),t=b.filter(e=>{const r=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(n&&!r.includes(n))return!1;if(y.size===0)return!0;const s=new Set(e.groups);for(const i of y)if(!s.has(i))return!1;return!0});G.innerHTML="";const a=document.createDocumentFragment();if(t.forEach(e=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=e.username,(I!==""&&e.username===I||B!==""&&e.email.toLowerCase()===B.toLowerCase())&&r.classList.add("user-management-user-highlight");const i=document.createElement("div");i.className="user-management-user-header";const m=document.createElement("div"),l=document.createElement("strong");l.textContent=e.displayName||e.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=e.email;const d=document.createElement("div");d.className="user-management-user-meta",d.textContent=`Username: ${e.username}`,m.appendChild(l),m.appendChild(c),m.appendChild(d);const x=document.createElement("div");x.className="user-management-user-status",x.textContent=e.status,i.appendChild(m),i.appendChild(x);const $=document.createElement("div");$.className="user-management-user-groups",U.forEach(h=>{const p=document.createElement("label");p.className="user-management-group-chip";const C=document.createElement("input");C.type="checkbox",C.value=h,C.checked=e.groups.includes(h),p.appendChild(C),p.append(` ${h}`),$.appendChild(p)});const D=document.createElement("div");D.className="user-management-user-actions";const g=document.createElement("button");g.type="button",g.className="user-management-save-btn",g.textContent="Save groups",g.addEventListener("click",async()=>{A(),g.disabled=!0;try{const h=f(Array.from($.querySelectorAll('input[type="checkbox"]:checked')).map(C=>C.value)),p=await Ue(e.username,h);e.groups=f(p.groups),w(),u(`Updated groups for ${e.displayName}.`,"success")}catch(h){const p=h instanceof Error?h.message:"Failed to update user groups";u(p,"error")}finally{g.disabled=!1}}),D.appendChild(g);const v=document.createElement("button");v.type="button",v.className="user-management-delete-btn",v.textContent="Delete user";const de=_!==""&&e.username===_;de&&(v.disabled=!0,v.title="You cannot delete your own account."),v.addEventListener("click",async()=>{if(de){u("You cannot delete your own account.","error");return}if(A(),!!window.confirm(`Are you sure you want to delete ${e.displayName||e.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`)){g.disabled=!0,v.disabled=!0;try{await xe(e.username),b=b.filter(p=>p.username!==e.username),w(),u(`Deleted user ${e.displayName||e.email}.`,"success")}catch(p){const C=p instanceof Error?p.message:"Failed to delete user";u(C,"error")}finally{g.disabled=!1,v.disabled=!1}}}),D.appendChild(v),r.appendChild(i),r.appendChild($),r.appendChild(D),a.appendChild(r)}),t.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",a.appendChild(e)}G.appendChild(a)},le=n=>{if(!(n instanceof Le)||n.status!==409||!n.data||typeof n.data!="object")return null;const t=n.data;if(t.code!=="USER_EXISTS"||!t.existingUser||typeof t.existingUser!="object")return null;const a=t.existingUser;return{username:typeof a.username=="string"?a.username.trim():"",email:typeof a.email=="string"?a.email.trim():"",displayName:typeof a.displayName=="string"?a.displayName.trim():"",status:typeof a.status=="string"?a.status.trim():""}},ce=async()=>{const n=await Ne();U=f(n.availableGroups),b=n.users.map(t=>({...t,groups:f(t.groups)})),O(),ie(),oe()},me=async(n,t)=>{const a=(n.username||"").trim(),e=(n.email||"").trim().toLowerCase();b.some(d=>!!(a&&d.username===a||e&&d.email.toLowerCase()===e))||await ce();const s=b.find(d=>!!(a&&d.username===a||e&&d.email.toLowerCase()===e)),i=s?.username||a,m=(s?.email||e).toLowerCase();T("manage"),y.clear(),O(),A(),I=i,B=m,L.value=s?.email||e||i,w(),i&&requestAnimationFrame(()=>{G.querySelector(`[data-username="${CSS.escape(i)}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})});const l=s?.displayName||n.displayName||s?.email||m,c=s?.status||n.status||"UNKNOWN";u(`${t} ${l||"User"} already exists (${c}). Showing existing user in Search and modify users.`,"error")};L.addEventListener("input",()=>{se(),w()}),H.addEventListener("submit",async n=>{n.preventDefault(),A();const t=z.value.trim().toLowerCase(),a=f(Array.from(N.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),e=H.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const r=await we(t,a),s={...r,groups:f(r.groups)};E=[...E.filter(i=>i.email!==s.email),s].sort((i,m)=>i.email.localeCompare(m.email)),V(),u(`Saved pre-approval for ${s.email}.`,"success")}catch(r){const s=le(r);if(s){await me(s,"Pre-approval was not saved.");return}const i=r instanceof Error?r.message:"Failed to save pre-approval";u(i,"error")}finally{e&&(e.disabled=!1)}}),q.addEventListener("submit",async n=>{n.preventDefault(),A();const t=X.value.trim().toLowerCase(),a=Q.value.trim(),e=Z.value.trim(),r=ee.value.trim(),s=ae.value.trim(),i=f(Array.from(F.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!t||!t.includes("@")){u("Please enter a valid email address.","error");return}if(!a||!e){u("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){u("Birth date must be set in YYYY-MM-DD format.","error");return}const m=q.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await Se({email:t,givenName:a,familyName:e,birthDate:r,groups:i,...s?{tempPassword:s}:{}});b=[...b.filter(c=>c.username!==l.username),{...l,groups:f(l.groups)}].sort((c,d)=>c.displayName.localeCompare(d.displayName)),w(),u(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),q.reset(),ie()}catch(l){const c=le(l);if(c){await me(c,"Invitation was not created.");return}const d=l instanceof Error?l.message:"Failed to create user";u(d,"error")}finally{m&&(m.disabled=!1)}});try{const[n,t]=await Promise.all([ce(),Ae()]);E=t.preApprovals.map(a=>({...a,email:a.email.trim().toLowerCase(),groups:f(a.groups)})).sort((a,e)=>a.email.localeCompare(e.email)),V(),w()}catch(n){const t=n instanceof Error?n.message:"Failed to load users";u(t,"error")}};export{Fe as mountUserManagementPage};
