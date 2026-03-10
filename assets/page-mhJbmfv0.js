import{p as be,ad as ye,j as Ce,o as Me,i as Ee,k as we,l as Se,b as Ue,m as Ae,e as xe,ae as Pe,af as Le,ag as Ne,ah as ke,ai as Fe,aj as qe,H as Ge,ak as Te}from"./UserMenu-D0H25Nhy.js";import{b as Ie}from"./dialogs-ChSClj4n.js";const Be=()=>`
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
`,f=o=>Array.from(new Set(o.map(b=>b.trim()).filter(b=>b.length>0))).sort((b,P)=>b.localeCompare(P)),He=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const b=be().map(a=>a.trim().toLowerCase()),P=b.includes("admin"),_=ye();if(!P){window.location.href="/whiteboard";return}o.innerHTML=Be();const X=o.querySelector("#userManagementAppBarContainer"),E=o.querySelector("#userManagementFeedback"),L=o.querySelector("#userManagementSearch"),H=o.querySelector("#userManagementPreApprovalForm"),z=o.querySelector("#userManagementPreApprovalEmail"),N=o.querySelector("#userManagementPreApprovalGroups"),k=o.querySelector("#userManagementPreApprovalList"),F=o.querySelector("#userManagementCreateUserForm"),J=o.querySelector("#userManagementCreateUserEmail"),Q=o.querySelector("#userManagementCreateUserGivenName"),Z=o.querySelector("#userManagementCreateUserFamilyName"),ee=o.querySelector("#userManagementCreateUserBirthDate"),ae=o.querySelector("#userManagementCreateUserTempPassword"),q=o.querySelector("#userManagementCreateUserGroups"),R=o.querySelector("#userManagementGroupsLegend"),G=o.querySelector("#userManagementList"),Y=o.querySelector("#userManagementPreApprovalToggle"),j=o.querySelector("#userManagementInviteToggle"),W=o.querySelector("#userManagementManageToggle"),te=o.querySelector("#userManagementPreApprovalPanel"),ne=o.querySelector("#userManagementInvitePanel"),re=o.querySelector("#userManagementManagePanel");if(!X||!E||!L||!H||!z||!N||!k||!F||!J||!Q||!Z||!ee||!ae||!q||!R||!G||!Y||!j||!W||!te||!ne||!re)throw new Error("Missing user management UI elements");const K=(a,n,t)=>{a.setAttribute("aria-expanded",t?"true":"false"),n.hidden=!t},T=a=>{K(Y,te,a==="preapproval"),K(j,ne,a==="invite"),K(W,re,a==="manage")};Y.addEventListener("click",()=>T("preapproval")),j.addEventListener("click",()=>T("invite")),W.addEventListener("click",()=>T("manage"));const ge=Ce(),ve=Me(),se=b.includes("mailbox");let oe=0;if(se)try{oe=await Ee()}catch(a){console.warn("Failed to load inbox unread count",a)}const he=we({currentApp:"user-management",onAppChange:a=>{if(a==="whiteboard"){window.location.href="/whiteboard";return}if(a==="activity"){window.location.href="/activity/";return}if(a==="inbox"){window.location.href="/mailbox/";return}if(a==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(a==="notes"){window.location.href="/notes/";return}a==="profile"&&(window.location.href="/profile/")},rightContent:ge,userRole:ve,isAdmin:P,hasMailboxAccess:se,unreadInboxCount:oe});X.appendChild(he),await Se({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});const fe=Ue();o.appendChild(fe),Ae(),xe();let A=[],y=[],w=[];const C=new Set;let I="",B="";const d=(a,n="info")=>{E.hidden=!1,E.textContent=a,E.dataset.tone=n},U=()=>{E.hidden=!0,E.textContent="",E.dataset.tone=""},ie=()=>{I="",B=""},O=()=>{R.innerHTML="";const a=document.createDocumentFragment();A.forEach(n=>{const t=document.createElement("button");t.type="button",t.className="user-management-group-filter",t.textContent=n,t.dataset.active=C.has(n)?"true":"false",t.setAttribute("aria-pressed",C.has(n)?"true":"false"),t.addEventListener("click",()=>{C.has(n)?C.delete(n):C.add(n),ie(),O(),S()}),a.appendChild(t)}),R.appendChild(a)},le=(a=[])=>{N.innerHTML="";const n=new Set(a),t=document.createDocumentFragment();A.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const s=document.createElement("input");s.type="checkbox",s.value=e,s.checked=n.has(e),r.appendChild(s),r.append(` ${e}`),t.appendChild(r)}),N.appendChild(t)},ce=(a=[])=>{q.innerHTML="";const n=new Set(a),t=document.createDocumentFragment();A.forEach(e=>{const r=document.createElement("label");r.className="user-management-group-chip";const s=document.createElement("input");s.type="checkbox",s.value=e,s.checked=n.has(e),r.appendChild(s),r.append(` ${e}`),t.appendChild(r)}),q.appendChild(t)},V=()=>{k.innerHTML="";const a=document.createDocumentFragment();if(w.length===0){const n=document.createElement("div");n.className="user-management-empty",n.textContent="No pre-approved users.",a.appendChild(n),k.appendChild(a);return}w.forEach(n=>{const t=document.createElement("article");t.className="user-management-user";const e=document.createElement("div");e.className="user-management-user-header";const r=document.createElement("div"),s=document.createElement("strong");s.textContent=n.email;const i=document.createElement("div");i.className="user-management-user-meta",i.textContent=n.groups.length>0?n.groups.join(", "):"No groups",r.appendChild(s),r.appendChild(i),e.appendChild(r);const m=document.createElement("div");m.className="user-management-user-actions";const l=document.createElement("button");l.type="button",l.className="user-management-save-btn",l.textContent="Edit",l.addEventListener("click",()=>{z.value=n.email,le(n.groups)});const c=document.createElement("button");c.type="button",c.className="user-management-delete-btn",c.textContent="Delete",c.addEventListener("click",async()=>{U(),c.disabled=!0;try{await qe(n.email),w=w.filter(u=>u.email!==n.email),V(),d(`Deleted pre-approval for ${n.email}.`,"success")}catch(u){const x=u instanceof Error?u.message:"Failed to delete pre-approval";d(x,"error")}finally{c.disabled=!1}}),m.appendChild(l),m.appendChild(c),t.appendChild(e),t.appendChild(m),a.appendChild(t)}),k.appendChild(a)},S=()=>{const a=L.value.trim().toLowerCase(),n=y.filter(e=>{const r=`${e.displayName} ${e.email} ${e.username}`.toLowerCase();if(a&&!r.includes(a))return!1;if(C.size===0)return!0;const s=new Set(e.groups);for(const i of C)if(!s.has(i))return!1;return!0});G.innerHTML="";const t=document.createDocumentFragment();if(n.forEach(e=>{const r=document.createElement("article");r.className="user-management-user",r.dataset.username=e.username,(I!==""&&e.username===I||B!==""&&e.email.toLowerCase()===B.toLowerCase())&&r.classList.add("user-management-user-highlight");const i=document.createElement("div");i.className="user-management-user-header";const m=document.createElement("div"),l=document.createElement("strong");l.textContent=e.displayName||e.email;const c=document.createElement("div");c.className="user-management-user-meta",c.textContent=e.email;const u=document.createElement("div");u.className="user-management-user-meta",u.textContent=`Username: ${e.username}`,m.appendChild(l),m.appendChild(c),m.appendChild(u);const x=document.createElement("div");x.className="user-management-user-status",x.textContent=e.status,i.appendChild(m),i.appendChild(x);const D=document.createElement("div");D.className="user-management-user-groups",A.forEach(h=>{const p=document.createElement("label");p.className="user-management-group-chip";const M=document.createElement("input");M.type="checkbox",M.value=h,M.checked=e.groups.includes(h),p.appendChild(M),p.append(` ${h}`),D.appendChild(p)});const $=document.createElement("div");$.className="user-management-user-actions";const g=document.createElement("button");g.type="button",g.className="user-management-save-btn",g.textContent="Save groups",g.addEventListener("click",async()=>{U(),g.disabled=!0;try{const h=f(Array.from(D.querySelectorAll('input[type="checkbox"]:checked')).map(M=>M.value)),p=await ke(e.username,h);e.groups=f(p.groups),S(),d(`Updated groups for ${e.displayName}.`,"success")}catch(h){const p=h instanceof Error?h.message:"Failed to update user groups";d(p,"error")}finally{g.disabled=!1}}),$.appendChild(g);const v=document.createElement("button");v.type="button",v.className="user-management-delete-btn",v.textContent="Delete user";const pe=_!==""&&e.username===_;pe&&(v.disabled=!0,v.title="You cannot delete your own account."),v.addEventListener("click",async()=>{if(pe){d("You cannot delete your own account.","error");return}if(U(),!!await Ie({title:"Delete user",message:`Are you sure you want to delete ${e.displayName||e.email}? This removes Cognito login and dwmt-users profile only. Whiteboard sessions and S3 files are preserved.`,confirmLabel:"Delete user",confirmTone:"danger"})){g.disabled=!0,v.disabled=!0;try{await Fe(e.username),y=y.filter(p=>p.username!==e.username),S(),d(`Deleted user ${e.displayName||e.email}.`,"success")}catch(p){const M=p instanceof Error?p.message:"Failed to delete user";d(M,"error")}finally{g.disabled=!1,v.disabled=!1}}}),$.appendChild(v),r.appendChild(i),r.appendChild(D),r.appendChild($),t.appendChild(r)}),n.length===0){const e=document.createElement("div");e.className="user-management-empty",e.textContent="No users match your search.",t.appendChild(e)}G.appendChild(t)},me=a=>{if(!(a instanceof Ge)||a.status!==409||!a.data||typeof a.data!="object")return null;const n=a.data;if(n.code!=="USER_EXISTS"||!n.existingUser||typeof n.existingUser!="object")return null;const t=n.existingUser;return{username:typeof t.username=="string"?t.username.trim():"",email:typeof t.email=="string"?t.email.trim():"",displayName:typeof t.displayName=="string"?t.displayName.trim():"",status:typeof t.status=="string"?t.status.trim():""}},ue=async()=>{const a=await Te();A=f(a.availableGroups),y=a.users.map(n=>({...n,groups:f(n.groups)})),O(),ce(),le()},de=async(a,n)=>{const t=(a.username||"").trim(),e=(a.email||"").trim().toLowerCase();y.some(u=>!!(t&&u.username===t||e&&u.email.toLowerCase()===e))||await ue();const s=y.find(u=>!!(t&&u.username===t||e&&u.email.toLowerCase()===e)),i=s?.username||t,m=(s?.email||e).toLowerCase();T("manage"),C.clear(),O(),U(),I=i,B=m,L.value=s?.email||e||i,S(),i&&requestAnimationFrame(()=>{G.querySelector(`[data-username="${CSS.escape(i)}"]`)?.scrollIntoView({behavior:"smooth",block:"center"})});const l=s?.displayName||a.displayName||s?.email||m,c=s?.status||a.status||"UNKNOWN";d(`${n} ${l||"User"} already exists (${c}). Showing existing user in Search and modify users.`,"error")};L.addEventListener("input",()=>{ie(),S()}),H.addEventListener("submit",async a=>{a.preventDefault(),U();const n=z.value.trim().toLowerCase(),t=f(Array.from(N.querySelectorAll('input[type="checkbox"]:checked')).map(r=>r.value)),e=H.querySelector("#userManagementPreApprovalSave");e&&(e.disabled=!0);try{const r=await Pe(n,t),s={...r,groups:f(r.groups)};w=[...w.filter(i=>i.email!==s.email),s].sort((i,m)=>i.email.localeCompare(m.email)),V(),d(`Saved pre-approval for ${s.email}.`,"success")}catch(r){const s=me(r);if(s){await de(s,"Pre-approval was not saved.");return}const i=r instanceof Error?r.message:"Failed to save pre-approval";d(i,"error")}finally{e&&(e.disabled=!1)}}),F.addEventListener("submit",async a=>{a.preventDefault(),U();const n=J.value.trim().toLowerCase(),t=Q.value.trim(),e=Z.value.trim(),r=ee.value.trim(),s=ae.value.trim(),i=f(Array.from(q.querySelectorAll('input[type="checkbox"]:checked')).map(l=>l.value));if(!n||!n.includes("@")){d("Please enter a valid email address.","error");return}if(!t||!e){d("First name and surname are required.","error");return}if(!/^\d{4}-\d{2}-\d{2}$/.test(r)){d("Birth date must be set in YYYY-MM-DD format.","error");return}const m=F.querySelector("#userManagementCreateUserSubmit");m&&(m.disabled=!0);try{const l=await Le({email:n,givenName:t,familyName:e,birthDate:r,groups:i,...s?{tempPassword:s}:{}});y=[...y.filter(c=>c.username!==l.username),{...l,groups:f(l.groups)}].sort((c,u)=>c.displayName.localeCompare(u.displayName)),S(),d(`Created ${l.displayName||l.email}; invitation email sent.`,"success"),F.reset(),ce()}catch(l){const c=me(l);if(c){await de(c,"Invitation was not created.");return}const u=l instanceof Error?l.message:"Failed to create user";d(u,"error")}finally{m&&(m.disabled=!1)}});try{const[a,n]=await Promise.all([ue(),Ne()]);w=n.preApprovals.map(t=>({...t,email:t.email.trim().toLowerCase(),groups:f(t.groups)})).sort((t,e)=>t.email.localeCompare(e.email)),V(),S()}catch(a){const n=a instanceof Error?a.message:"Failed to load users";d(n,"error")}};export{He as mountUserManagementPage};
