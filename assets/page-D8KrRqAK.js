import{b as Ct,m as Et,e as At,t as Vt,n as Bt,u as qt,k as kt,o as Mt,p as Lt,A as Tt,L as Ut,M as xt,N as Nt,O as Ft,P as It,Q as Dt,c as Rt,C as Ot,R as $t,S as Gt}from"./UserMenu-DpupbAyR.js";import{T as zt}from"./trash-2-B-9Pvqkm.js";const jt=5*1024*1024,_t="af-south-1_bIOvLpsST",Ht="3h1hjhsq24cm86n83oklrkf6be",ct=new Ot({UserPoolId:_t,ClientId:Ht}),Wt=()=>`
  <div class="app profile-page">
    <div id="profileAppBarContainer"></div>
    <main class="profile-layout">
      <section class="profile-card" aria-live="polite">
        <h2>Profile</h2>
        <p class="profile-subtitle">Manage your account details and security settings.</p>
        <div class="profile-feedback" id="profileFeedback" hidden></div>
        <section class="profile-accordion">
          <article class="profile-accordion-card">
            <button id="profileAccountToggle" class="profile-accordion-toggle" type="button" aria-expanded="true" aria-controls="profileAccountPanel">
              <span>Account</span>
            </button>
            <div id="profileAccountPanel" class="profile-accordion-panel">
              <header class="profile-account-header">
                <div class="profile-account-avatar-wrap">
                  <img id="profileAccountAvatar" class="profile-account-avatar" alt="Profile photo" />
                </div>
                <div class="profile-account-meta">
                  <div id="profileAccountName" class="profile-account-name"></div>
                  <div class="profile-account-email-row">
                    <span id="profileAccountEmail" class="profile-account-email"></span>
                    <span id="profileEmailVerifiedBadge" class="profile-email-badge" hidden>Verified</span>
                  </div>
                </div>
              </header>

              <div id="profileEmailWarning" class="profile-inline-warning" hidden>
                Email address not verified.
              </div>

              <div class="profile-inline-actions">
                <button id="profileAccountEditBtn" type="button">Edit account</button>
                <button id="profilePhotoChangeBtn" class="profile-btn-secondary" type="button">Change photo</button>
                <button id="profileEmailQuickVerifyBtn" class="profile-btn-secondary" type="button" hidden>Verify</button>
              </div>

              <div id="profileAccountEditPanel" hidden>
                <label>
                  Email address
                  <input id="profileEmail" type="email" />
                </label>
                <div class="profile-inline-actions">
                  <button id="profileEmailStartBtn" type="button">Send verification code</button>
                  <button id="profileAccountCancelBtn" class="profile-btn-secondary" type="button">Cancel</button>
                </div>
                <div id="profileEmailVerificationPanel" hidden>
                  <label>
                    Verification code
                    <input id="profileEmailCode" type="text" inputmode="numeric" autocomplete="one-time-code" />
                  </label>
                  <div class="profile-inline-actions">
                    <button id="profileEmailVerifyBtn" type="button">Verify and save email</button>
                    <button id="profileEmailResendBtn" class="profile-btn-secondary" type="button">Resend code</button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article class="profile-accordion-card">
            <button id="profileSecurityToggle" class="profile-accordion-toggle" type="button" aria-expanded="false" aria-controls="profileSecurityPanel">
              <span>Security</span>
            </button>
            <div id="profileSecurityPanel" class="profile-accordion-panel" hidden>
              <p class="profile-section-hint">Security actions are handled separately from profile details.</p>
              <div class="profile-inline-actions">
                <button id="profileOpenPasswordModalBtn" type="button">Change password</button>
              </div>
            </div>
          </article>

          <article class="profile-accordion-card">
            <button id="profilePersonalToggle" class="profile-accordion-toggle" type="button" aria-expanded="false" aria-controls="profilePersonalPanel">
              <span>Personal Info</span>
            </button>
            <div id="profilePersonalPanel" class="profile-accordion-panel" hidden>
              <p class="profile-section-hint">Locked after sign-up.</p>
              <dl class="profile-info-list">
                <div class="profile-info-row">
                  <dt>First name</dt>
                  <dd id="profileGivenName"></dd>
                </div>
                <div class="profile-info-row">
                  <dt>Last name</dt>
                  <dd id="profileFamilyName"></dd>
                </div>
                <div class="profile-info-row">
                  <dt>Date of birth</dt>
                  <dd id="profileBirthDate"></dd>
                </div>
                <div id="profileGroupsLabel" class="profile-info-row" hidden>
                  <dt>Groups</dt>
                  <dd id="profileGroups"></dd>
                </div>
              </dl>
            </div>
          </article>
        </section>
      </section>
    </main>

    <div id="profilePhotoModal" class="profile-modal" hidden>
      <div class="profile-modal-backdrop" data-close-modal="photo"></div>
      <div class="profile-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="profilePhotoModalTitle">
        <header class="profile-modal-header">
          <h3 id="profilePhotoModalTitle">Change photo</h3>
          <button id="profilePhotoModalCloseBtn" class="profile-modal-close profile-btn-secondary" type="button" aria-label="Close">×</button>
        </header>
        <div class="profile-avatar-actions">
          <button id="profilePhotoUploadBtn" class="profile-btn-secondary" type="button">Upload from device</button>
          <button id="profileCameraStartBtn" class="profile-btn-secondary" type="button">Capture using camera</button>
          <button id="profileAvatarRetryBtn" class="profile-btn-secondary" type="button" hidden>Retry</button>
          <button id="profileAvatarRegenerateBtn" class="profile-btn-secondary" type="button" hidden>Regenerate</button>
          <input id="profileAvatarFileInput" type="file" accept="image/*" />
        </div>
        <label id="profilePromptVersionLabel" hidden>
          Avatar style version
          <select id="profilePromptVersionSelect"></select>
        </label>
        <div id="profilePromptVersionDetails" class="profile-prompt-version-details" hidden>
          <div><strong>Model:</strong> <code id="profilePromptVersionModel"></code></div>
          <div><strong>Template:</strong></div>
          <pre id="profilePromptVersionTemplate"></pre>
        </div>
        <div id="profileAvatarGalleryRail" class="profile-avatar-gallery-rail" role="listbox" aria-label="Avatar gallery"></div>
        <div id="profileCameraPanel" class="profile-camera-panel" hidden>
          <video id="profileCameraVideo" autoplay playsinline muted></video>
          <canvas id="profileCameraCanvas" hidden></canvas>
          <div class="profile-camera-actions">
            <button id="profileCameraCaptureBtn" type="button">Capture</button>
            <button id="profileCameraCancelBtn" class="profile-btn-secondary" type="button">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <div id="profilePasswordModal" class="profile-modal" hidden>
      <div class="profile-modal-backdrop" data-close-modal="password"></div>
      <div class="profile-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="profilePasswordModalTitle">
        <header class="profile-modal-header">
          <h3 id="profilePasswordModalTitle">Change password</h3>
          <button id="profilePasswordModalCloseBtn" class="profile-modal-close profile-btn-secondary" type="button">Close</button>
        </header>
        <form id="profilePasswordForm">
          <label>
            Current password
            <input id="profileCurrentPassword" type="password" autocomplete="current-password" required />
          </label>
          <label>
            New password
            <input id="profileNewPassword" type="password" autocomplete="new-password" required />
          </label>
          <label>
            Confirm new password
            <input id="profileConfirmPassword" type="password" autocomplete="new-password" required />
          </label>
          <div class="profile-inline-actions">
            <button id="profilePasswordChangeBtn" type="submit">Update password</button>
          </div>
        </form>
      </div>
    </div>

    <div id="profileToast" class="profile-toast" hidden></div>
  </div>
`,s=(t,h,$)=>{if(!h){t.hidden=!0,t.textContent="",t.dataset.tone="";return}t.hidden=!1,t.textContent=h,t.dataset.tone=$},Be=(t,h,$,qe,ke,Je,fe,Me)=>{h.value=t.email,$.textContent=Array.isArray(t.groups)&&t.groups.length>0?t.groups.join(", "):"none",qe.textContent=t.givenName||"Not set",ke.textContent=t.familyName||"Not set",Je.textContent=t.birthDate||"Not set",fe.textContent=t.displayName||"Unnamed user",Me.textContent=t.email},We=t=>{switch(t.avatarStatus){case"pending":return"Avatar queued";case"processing":return"Generating stylised avatar...";case"failed":return t.avatarError||"Avatar generation failed";default:return null}},Jt=t=>t.type.toLowerCase().startsWith("image/")?t.size<=0||t.size>jt?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},Qt=t=>{if(typeof t!="number"||!Number.isFinite(t)||t<=0)return null;const h=new Date(t*1e3);return Number.isNaN(h.getTime())?null:new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(h)},Xt=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");t.innerHTML=Wt(),t.appendChild(Ct()),Et(),At();const h=t.querySelector("#profileAppBarContainer");if(!h)throw new Error("Missing profile app bar container");const $=Vt(),qe=()=>"/default_avatar.png",ke=Bt(),fe=qt().map(e=>e.trim().toLowerCase()),Me=fe.includes("admin"),Qe=fe.includes("mailbox");let Ke=0;if(Qe)try{Ke=await kt()}catch(e){console.warn("Failed to load inbox unread count",e)}const ut=Mt({currentApp:"profile",onAppChange:e=>{if(e==="whiteboard"){Ut(),window.location.href="/whiteboard";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="inbox"){window.location.href="/mailbox/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="notes"){window.location.href="/notes/";return}if(e==="issues"){window.location.href="/issues/";return}e==="user-management"&&(window.location.href="/user-management/")},rightContent:ke,userRole:$,isAdmin:Me,hasMailboxAccess:Qe,unreadInboxCount:Ke});h.appendChild(ut);const Le=t.querySelector("#userAvatar"),Ye=t.querySelector("#userEmail");await Lt({root:t,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"email"});const S=t.querySelector("#profileEmail"),Xe=t.querySelector("#profileGroupsLabel"),G=t.querySelector("#profileGroups"),z=t.querySelector("#profileGivenName"),j=t.querySelector("#profileFamilyName"),_=t.querySelector("#profileBirthDate"),H=t.querySelector("#profileAccountName"),W=t.querySelector("#profileAccountEmail"),Te=t.querySelector("#profileAccountAvatar"),Ze=t.querySelector("#profileEmailVerifiedBadge"),et=t.querySelector("#profileEmailWarning"),me=t.querySelector("#profileAccountEditBtn"),ve=t.querySelector("#profileAccountCancelBtn"),tt=t.querySelector("#profileAccountEditPanel"),Ue=t.querySelector("#profilePhotoChangeBtn"),ye=t.querySelector("#profileEmailQuickVerifyBtn"),ge=t.querySelector("#profileEmailStartBtn"),q=t.querySelector("#profileEmailCode"),at=t.querySelector("#profileEmailVerificationPanel"),xe=t.querySelector("#profileEmailVerifyBtn"),Ne=t.querySelector("#profileEmailResendBtn"),x=t.querySelector("#profileCurrentPassword"),J=t.querySelector("#profileNewPassword"),Q=t.querySelector("#profileConfirmPassword"),rt=t.querySelector("#profilePasswordForm"),ot=t.querySelector("#profilePasswordChangeBtn"),Fe=t.querySelector("#profileOpenPasswordModalBtn"),k=t.querySelector("#profilePasswordModal"),Ie=t.querySelector("#profilePasswordModalCloseBtn"),n=t.querySelector("#profileFeedback"),K=t.querySelector("#profileToast"),N=t.querySelector("#profileAccountToggle"),F=t.querySelector("#profileSecurityToggle"),I=t.querySelector("#profilePersonalToggle"),Y=t.querySelector("#profileAccountPanel"),X=t.querySelector("#profileSecurityPanel"),Z=t.querySelector("#profilePersonalPanel"),ee=t.querySelector("#profileAvatarGalleryRail"),C=t.querySelector("#profileAvatarFileInput"),he=t.querySelector("#profilePhotoUploadBtn"),A=t.querySelector("#profilePhotoModal"),De=t.querySelector("#profilePhotoModalCloseBtn"),te=t.querySelector("#profileCameraStartBtn"),be=t.querySelector("#profileAvatarRetryBtn"),ae=t.querySelector("#profileAvatarRegenerateBtn"),Re=t.querySelector("#profileCameraPanel"),M=t.querySelector("#profilePromptVersionLabel"),E=t.querySelector("#profilePromptVersionSelect"),re=t.querySelector("#profilePromptVersionDetails"),we=t.querySelector("#profilePromptVersionModel"),Pe=t.querySelector("#profilePromptVersionTemplate"),V=t.querySelector("#profileCameraVideo"),L=t.querySelector("#profileCameraCanvas"),Oe=t.querySelector("#profileCameraCaptureBtn"),$e=t.querySelector("#profileCameraCancelBtn");if(!S||!Xe||!G||!z||!j||!_||!H||!W||!Te||!Ze||!et||!me||!ve||!tt||!Ue||!ye||!ge||!at||!q||!xe||!Ne||!x||!J||!Q||!rt||!ot||!Fe||!k||!Ie||!n||!K||!N||!F||!I||!Y||!X||!Z||!ee||!C||!he||!A||!De||!te||!be||!ae||!M||!E||!re||!we||!Pe||!Re||!V||!L||!Oe||!$e)throw new Error("Missing profile UI elements");let o=null,pt=!1,D=!1,oe=!1,Se=!1,Ce=!1,ie=!1,Ge=!1,ze=!1,w=!1,P=!1,T=!0,ne=null,R=null,se=null,b="";const ft=new URLSearchParams(window.location.search).get("openPhotoModal")==="1",mt=e=>{if(e.avatarAiEnabled!==!0||e.avatarStatus==="pending"||e.avatarStatus==="processing")return!1;if(e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0){const r=e.avatarCurrentPromptVersion||null;return b.trim().length>0&&b!==r}return e.avatarOutdated===!0},it=()=>{ae.hidden=!o||!mt(o)},je=()=>{if(!o||M.hidden){re.hidden=!0,we.textContent="",Pe.textContent="";return}const e=Array.isArray(o.avatarPromptVersions)?o.avatarPromptVersions.find(a=>a.version===b):void 0;if(!e){re.hidden=!0,we.textContent="",Pe.textContent="";return}we.textContent=`${e.modelId} (${e.region})`,Pe.textContent=e.template,re.hidden=!1},le=async()=>{if(!ct)throw new Error("Cognito user pool is not configured");const e=ct.getCurrentUser();if(!e)throw new Error("No signed-in Cognito user found");return await new Promise((a,r)=>{e.getSession((l,d)=>{if(l||!d){r(l??new Error("Missing Cognito session"));return}a(d)})}),e},nt=e=>{try{const a=e.split(".")[1];if(!a)return{};const r=a.replace(/-/g,"+").replace(/_/g,"/"),l=decodeURIComponent(atob(r).split("").map(d=>"%"+("00"+d.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(l)}catch{return{}}},vt=async e=>{const r=(await new Promise((f,i)=>{e.getSession((m,c)=>{if(m||!c){i(m??new Error("Failed to refresh session"));return}f(c)})})).getIdToken().getJwtToken(),l=nt(r);typeof l.email_verified=="boolean"&&(T=l.email_verified);const d=typeof l.email=="string"?l.email.trim().toLowerCase():"";if(!d)throw new Error("Updated email not present in session yet. Sign out and sign in again, then save profile.");return d},yt=async()=>{try{const e=await le(),a=await new Promise((l,d)=>{e.getSession((f,i)=>{if(f||!i){d(f??new Error("Missing Cognito session"));return}l(i)})}),r=nt(a.getIdToken().getJwtToken());typeof r.email_verified=="boolean"&&(T=r.email_verified)}catch{T=!0}},de=()=>{R&&(R.getTracks().forEach(e=>e.stop()),R=null),V.srcObject=null,Re.hidden=!0},p=()=>{const e=D||oe||Se||Ce||ie||Ge||ze;S.disabled=e||!o||!P,q.disabled=e||!o||!w,me.disabled=e||!o,ve.disabled=e||!o||!P,ge.disabled=e||!o||!P,xe.disabled=e||!o||!w,Ne.disabled=e||!o||!w,ye.disabled=e||!o||T,Ue.disabled=e||!o,he.disabled=e||!o,Fe.disabled=e||!o,Ie.disabled=e,De.disabled=e,x.disabled=e||!o,J.disabled=e||!o,Q.disabled=e||!o,ot.disabled=e||!o,C.disabled=e||!o,te.disabled=e||!o,Oe.disabled=e||!o,$e.disabled=e||!o,be.disabled=e||!o,ae.disabled=e||!o,Array.from(ee.querySelectorAll(".profile-avatar-tile")).forEach(a=>{a.disabled=e||!o}),Array.from(ee.querySelectorAll(".profile-avatar-delete-btn")).forEach(a=>{a.disabled=e||!o}),E.disabled=e||!o||M.hidden},Ee=()=>{at.hidden=!w,q.required=w,ge.textContent=w?"Send code to updated email":"Send verification code"},B=e=>{e&&(ne!==null&&(window.clearTimeout(ne),ne=null),K.textContent=e,K.hidden=!1,ne=window.setTimeout(()=>{K.hidden=!0,K.textContent="",ne=null},2600))},O=()=>{tt.hidden=!P,et.hidden=T,Ze.hidden=!T,ye.hidden=T,me.hidden=P,ve.hidden=!P,Ee()},y=(e,a,r)=>{e.setAttribute("aria-expanded",String(r)),a.hidden=!r},ce=e=>{const a=e.avatarUrl||qe();if(Te.src=a,Te.alt=`${e.displayName||"User"} profile photo`,Le){Le.innerHTML=`<img src="${a}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const r=e.displayName.trim()||e.email;Le.title=r}},ue=e=>{const a=e.avatarAiEnabled===!0,r=e.avatarOriginalVersions&&e.avatarOriginalVersions.length>0?e.avatarOriginalVersions:e.originalAvatarUrl?[{version:"v1",url:e.originalAvatarUrl,createdAt:0}]:[],l=a&&e.avatarStylizedVersions?e.avatarStylizedVersions:[],d=[...(()=>{const i=new Map,m=new Map,c=v=>{if(typeof v!="number"||!Number.isFinite(v))return null;const u=new Date(v*1e3);return Number.isNaN(u.getTime())?null:`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`};return r.forEach(v=>{const u=c(v.createdAt);u&&i.set(u,(i.get(u)||0)+1)}),r.map(v=>{const u=c(v.createdAt);let g=Qt(v.createdAt)||v.version;if(u){const pe=(m.get(u)||0)+1;m.set(u,pe),(i.get(u)||0)>1&&(g=`${g}-${pe}`)}return{value:`original:${v.version}`,label:g,url:v.url,source:"original",version:v.version}})})(),...l.slice().sort((i,m)=>i.version.localeCompare(m.version,void 0,{numeric:!0})).map(i=>({value:`stylized:${i.version}`,label:i.version,url:i.url,source:"stylized",version:i.version}))];ee.innerHTML="";let f=d[0]?.value||"";if(e.activeAvatarSource==="stylized"){const i=e.avatarCurrentPromptVersion;i&&l.some(m=>m.version===i)?f=`stylized:${i}`:l[0]&&(f=`stylized:${l[0].version}`)}else e.activeOriginalVersion&&(f=`original:${e.activeOriginalVersion}`);d.forEach(i=>{const m=document.createElement("div");m.className="profile-avatar-tile-wrap";const c=document.createElement("button");c.type="button",c.className="profile-avatar-tile",c.setAttribute("role","option"),c.setAttribute("aria-selected",String(i.value===f));const v=i.value===f;v&&c.classList.add("is-active");const u=document.createElement("img");u.src=i.url,u.alt=i.label,u.className="profile-avatar-tile-image";const Ve=document.createElement("span");if(Ve.className="profile-avatar-tile-label",Ve.textContent=i.label,c.append(u,Ve),c.disabled=D||oe||Se||Ce||!o,c.addEventListener("click",()=>{gt(i.source,i.version)}),m.appendChild(c),!v){const g=document.createElement("button");g.type="button",g.className="profile-avatar-delete-btn",g.innerHTML='<span data-lucide="trash-2" aria-hidden="true"></span>',g.setAttribute("aria-label",`Delete ${i.label}`),g.title=`Delete ${i.label}`,g.disabled=c.disabled,g.addEventListener("click",pe=>{pe.preventDefault(),pe.stopPropagation(),ht(i.source,i.version)}),m.appendChild(g)}ee.appendChild(m)}),Rt({icons:{Trash2:zt},attrs:{stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",width:"14",height:"14"}})},gt=async(e,a)=>{if(o){Se=!0,p();try{const r=await $t(e,a);o=r,ue(r),ce(r),s(n,"","info"),r.avatarAiEnabled===!0?B(e==="original"?"Using original avatar":"Using stylized avatar"):B("Profile photo updated")}catch(r){s(n,r instanceof Error?r.message:"Failed to select avatar","error")}finally{Se=!1,p()}}},ht=async(e,a)=>{if(o){Ce=!0,p();try{const r=await Gt(e,a);o=r,ue(r),ce(r),s(n,"","info"),B("Profile photo deleted")}catch(r){s(n,r instanceof Error?r.message:"Failed to delete profile photo","error")}finally{Ce=!1,p()}}},st=async()=>{await yt();const e=await xt();o=e,Be(e,S,G,z,j,_,H,W),ue(e),ce(e),Ye&&(Ye.textContent=e.email);const a=Array.isArray(e.groups)&&e.groups.some(d=>d.trim().toLowerCase()==="admin");Xe.hidden=!a,be.hidden=e.avatarStatus!=="failed",e.avatarAiEnabled||(ae.hidden=!0,M.hidden=!0,re.hidden=!0,je());const r=e.avatarAiEnabled===!0&&e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0;if(M.hidden=!r,r){const d=e.avatarAvailablePromptVersions||[],f=e.avatarDefaultPromptVersion||d[0]||"",i=new Map((e.avatarPromptVersions||[]).map(c=>[c.version,c]));b=d.includes(b)?b:f,E.options.length!==d.length?(E.innerHTML="",d.forEach(c=>{const v=i.get(c),u=document.createElement("option");u.value=c,u.textContent=v?`${c} — ${v.modelId}`:c,E.appendChild(u)})):Array.from(E.options).forEach(c=>{c.selected=c.value===b}),E.value=b}je(),it(),O();const l=We(e);return l&&s(n,l,e.avatarStatus==="failed"?"error":"info"),e.avatarOutdated&&s(n,"A new avatar style is available","info"),e},Ae=()=>{se!==null&&(window.clearInterval(se),se=null)},_e=()=>{se===null&&(se=window.setInterval(async()=>{if(!D){if(!o||o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"){Ae();return}try{await st(),o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"&&Ae()}catch(e){Ae(),s(n,e instanceof Error?e.message:"Failed to refresh profile","error")}}},3e3))},lt=async e=>{const a=Jt(e);if(!a.ok){s(n,a.message,"error");return}D=!0,p(),s(n,"Uploading avatar...","info");try{const r=e.type||"image/jpeg",{uploadUrl:l,objectKey:d}=await Ft(r,e.size),f=await fetch(l,{method:"PUT",headers:{"Content-Type":r},body:e});if(!f.ok)throw new Error(`Avatar upload failed (${f.status})`);s(n,"Avatar queued","info");const i=await It(d,M.hidden?void 0:b);o=i,Be(i,S,G,z,j,_,H,W),ce(i),ue(i);const m=We(i);m?s(n,m,i.avatarStatus==="failed"?"error":"info"):(s(n,"","info"),B("Profile photo updated")),(i.avatarStatus==="pending"||i.avatarStatus==="processing")&&_e()}catch(r){s(n,r instanceof Error?r.message:"Failed to upload avatar","error")}finally{D=!1,p()}},bt=async()=>{if(!(!o||pt||D||oe)){oe=!0,p(),s(n,"Avatar queued","info");try{const e=await Dt(M.hidden?void 0:b);o=e,Be(e,S,G,z,j,_,H,W),ce(e),ue(e);const a=We(e);a&&s(n,a,e.avatarStatus==="failed"?"error":"info"),(e.avatarStatus==="pending"||e.avatarStatus==="processing")&&_e()}catch(e){s(n,e instanceof Error?e.message:"Failed to regenerate avatar","error")}finally{oe=!1,p()}}},wt=async()=>{const e=S.value.trim().toLowerCase();if(!e){s(n,"Enter a valid new email address.","error");return}if(o&&e===o.email.toLowerCase()){s(n,"That is already your current email address.","info");return}try{ie=!0,p();const a=await le();await new Promise((r,l)=>{a.updateAttributes([{Name:"email",Value:e}],d=>{if(d){l(d);return}r()})}),s(n,"Verification code sent to the new email. Enter it below and click Verify email.","info"),w=!0,Ee(),B("Verification code sent")}catch(a){s(n,a instanceof Error?a.message:"Failed to start email change","error")}finally{ie=!1,p()}},dt=async()=>{try{ie=!0,p();const e=await le();await new Promise((a,r)=>{e.getAttributeVerificationCode("email",{onSuccess:()=>a(),onFailure:l=>r(l),inputVerificationCode:()=>a()})}),s(n,"","info"),B("Verification code sent")}catch(e){s(n,e instanceof Error?e.message:"Failed to resend code","error")}finally{ie=!1,p()}},Pt=async()=>{const e=q.value.trim();if(!e){s(n,"Enter the email verification code.","error");return}try{Ge=!0,p();const a=await le();await new Promise((l,d)=>{a.verifyAttribute("email",e,{onSuccess:()=>l(),onFailure:f=>d(f)})});const r=await vt(a);o=await Nt(r),Be(o,S,G,z,j,_,H,W),q.value="",w=!1,P=!1,Ee(),O(),s(n,"","info"),B("Email updated")}catch(a){s(n,a instanceof Error?a.message:"Failed to verify email","error")}finally{Ge=!1,p()}},St=async()=>{const e=x.value,a=J.value,r=Q.value;if(!e||!a||!r){s(n,"Enter current password, new password, and confirmation.","error");return}if(a!==r){s(n,"New password confirmation does not match.","error");return}try{ze=!0,p();const l=await le();await new Promise((d,f)=>{l.changePassword(e,a,i=>{if(i){f(i);return}d()})}),x.value="",J.value="",Q.value="",U(k),s(n,"","info"),B("Password changed")}catch(l){s(n,l instanceof Error?l.message:"Failed to change password","error")}finally{ze=!1,p()}},He=e=>{e.hidden=!1},U=e=>{if(e.hidden=!0,e===A){de();return}x.value="",J.value="",Q.value=""};s(n,"Loading profile...","info");try{const e=await st();O(),y(N,Y,!0),y(F,X,!1),y(I,Z,!1),Ee();const a=e.avatarStatus;if(a==="pending"||a==="processing"?_e():e.avatarOutdated||s(n,"","info"),ft&&(!e.avatarUrl||e.avatarUrl.trim().length===0)){He(A),he.focus(),s(n,"Upload or capture a profile photo to finish setting up your account.","info");const r=new URL(window.location.href);r.searchParams.delete("openPhotoModal"),window.history.replaceState({},"",r.toString())}}catch(e){if(e instanceof Tt&&e.status===404){s(n,"Profile record does not exist yet. Contact support if this persists.","info"),C.disabled=!0,te.disabled=!0;return}s(n,e instanceof Error?e.message:"Failed to load profile","error"),C.disabled=!0,te.disabled=!0;return}p(),N.addEventListener("click",()=>{y(N,Y,!0),y(F,X,!1),y(I,Z,!1)}),F.addEventListener("click",()=>{y(N,Y,!1),y(F,X,!0),y(I,Z,!1)}),I.addEventListener("click",()=>{y(N,Y,!1),y(F,X,!1),y(I,Z,!0)}),me.addEventListener("click",()=>{P=!0,O(),p(),S.focus()}),ve.addEventListener("click",()=>{P=!1,w=!1,o&&(S.value=o.email),q.value="",O(),p(),s(n,"","info")}),Ue.addEventListener("click",()=>{He(A)}),De.addEventListener("click",()=>{U(A)}),Fe.addEventListener("click",()=>{He(k),x.focus()}),Ie.addEventListener("click",()=>{U(k)}),ye.addEventListener("click",()=>{P=!0,w=!0,O(),p(),q.focus(),dt()}),ge.addEventListener("click",()=>{wt()}),xe.addEventListener("click",()=>{Pt()}),Ne.addEventListener("click",()=>{dt()}),rt.addEventListener("submit",e=>{e.preventDefault(),St()}),he.addEventListener("click",()=>{C.click()}),C.addEventListener("change",async()=>{const e=C.files?.[0];C.value="",e&&await lt(e)}),te.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){s(n,"Camera is not supported on this device","error");return}try{de(),R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),V.srcObject=R,Re.hidden=!1,s(n,"Camera ready","info")}catch{s(n,"Camera access denied or unavailable","error")}}),$e.addEventListener("click",()=>{de()}),Oe.addEventListener("click",async()=>{if(!R||V.videoWidth===0||V.videoHeight===0){s(n,"Camera is not ready","error");return}L.width=V.videoWidth,L.height=V.videoHeight;const e=L.getContext("2d");if(!e){s(n,"Failed to capture image","error");return}e.drawImage(V,0,0,L.width,L.height);const a=await new Promise(r=>{L.toBlob(r,"image/jpeg",.9)});if(de(),!a){s(n,"Failed to capture image","error");return}await lt(a)}),be.addEventListener("click",()=>{C.click()}),ae.addEventListener("click",()=>{bt()}),E.addEventListener("change",()=>{b=E.value,je(),it()}),window.addEventListener("beforeunload",()=>{Ae(),de()},{once:!0}),t.querySelectorAll("[data-close-modal]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-close-modal");if(a==="photo"){U(A);return}a==="password"&&U(k)})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(A.hidden||U(A),k.hidden||U(k))})};export{Xt as mountProfilePage};
