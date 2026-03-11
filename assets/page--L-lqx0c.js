import{b as St,m as Ct,e as Et,o as At,j as Vt,p as Bt,i as qt,k as kt,l as Mt,H as Lt,K as Tt,L as xt,M as Nt,N as Ut,O as Ft,P as It,c as Dt,C as Rt,Q as Ot,R as $t}from"./UserMenu-DeYQW1ve.js";import{T as Gt}from"./trash-2-3SRlmJKU.js";const zt=5*1024*1024,jt="af-south-1_bIOvLpsST",Ht="3h1hjhsq24cm86n83oklrkf6be",ct=new Rt({UserPoolId:jt,ClientId:Ht}),_t=()=>`
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
          <button id="profilePhotoModalCloseBtn" class="profile-modal-close profile-btn-secondary" type="button">Close</button>
        </header>
        <div class="profile-avatar-actions">
          <button id="profilePhotoUploadBtn" class="profile-btn-secondary" type="button">Upload from device</button>
          <button id="profileCameraStartBtn" type="button">Capture using camera</button>
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
`,s=(t,h,$)=>{if(!h){t.hidden=!0,t.textContent="",t.dataset.tone="";return}t.hidden=!1,t.textContent=h,t.dataset.tone=$},Ve=(t,h,$,Be,qe,We,fe,ke)=>{h.value=t.email,$.textContent=Array.isArray(t.groups)&&t.groups.length>0?t.groups.join(", "):"none",Be.textContent=t.givenName||"Not set",qe.textContent=t.familyName||"Not set",We.textContent=t.birthDate||"Not set",fe.textContent=t.displayName||"Unnamed user",ke.textContent=t.email},_e=t=>{switch(t.avatarStatus){case"pending":return"Avatar queued";case"processing":return"Generating stylised avatar...";case"failed":return t.avatarError||"Avatar generation failed";default:return null}},Wt=t=>t.type.toLowerCase().startsWith("image/")?t.size<=0||t.size>zt?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},Jt=t=>{if(typeof t!="number"||!Number.isFinite(t)||t<=0)return null;const h=new Date(t*1e3);return Number.isNaN(h.getTime())?null:new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(h)},Yt=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");t.innerHTML=_t(),t.appendChild(St()),Ct(),Et();const h=t.querySelector("#profileAppBarContainer");if(!h)throw new Error("Missing profile app bar container");const $=At(),Be=()=>"/default_avatar.png",qe=Vt(),fe=Bt().map(e=>e.trim().toLowerCase()),ke=fe.includes("admin"),Je=fe.includes("mailbox");let Qe=0;if(Je)try{Qe=await qt()}catch(e){console.warn("Failed to load inbox unread count",e)}const ut=kt({currentApp:"profile",onAppChange:e=>{if(e==="whiteboard"){Tt(),window.location.href="/whiteboard";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="inbox"){window.location.href="/mailbox/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="notes"){window.location.href="/notes/";return}if(e==="issues"){window.location.href="/issues/";return}e==="user-management"&&(window.location.href="/user-management/")},rightContent:qe,userRole:$,isAdmin:ke,hasMailboxAccess:Je,unreadInboxCount:Qe});h.appendChild(ut);const Me=t.querySelector("#userAvatar"),Ke=t.querySelector("#userEmail");await Mt({root:t,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"email"});const S=t.querySelector("#profileEmail"),Ye=t.querySelector("#profileGroupsLabel"),G=t.querySelector("#profileGroups"),z=t.querySelector("#profileGivenName"),j=t.querySelector("#profileFamilyName"),H=t.querySelector("#profileBirthDate"),_=t.querySelector("#profileAccountName"),W=t.querySelector("#profileAccountEmail"),Le=t.querySelector("#profileAccountAvatar"),Xe=t.querySelector("#profileEmailVerifiedBadge"),Ze=t.querySelector("#profileEmailWarning"),ve=t.querySelector("#profileAccountEditBtn"),me=t.querySelector("#profileAccountCancelBtn"),et=t.querySelector("#profileAccountEditPanel"),Te=t.querySelector("#profilePhotoChangeBtn"),ye=t.querySelector("#profileEmailQuickVerifyBtn"),ge=t.querySelector("#profileEmailStartBtn"),B=t.querySelector("#profileEmailCode"),tt=t.querySelector("#profileEmailVerificationPanel"),xe=t.querySelector("#profileEmailVerifyBtn"),Ne=t.querySelector("#profileEmailResendBtn"),N=t.querySelector("#profileCurrentPassword"),J=t.querySelector("#profileNewPassword"),Q=t.querySelector("#profileConfirmPassword"),at=t.querySelector("#profilePasswordForm"),rt=t.querySelector("#profilePasswordChangeBtn"),Ue=t.querySelector("#profileOpenPasswordModalBtn"),q=t.querySelector("#profilePasswordModal"),Fe=t.querySelector("#profilePasswordModalCloseBtn"),n=t.querySelector("#profileFeedback"),K=t.querySelector("#profileToast"),U=t.querySelector("#profileAccountToggle"),F=t.querySelector("#profileSecurityToggle"),I=t.querySelector("#profilePersonalToggle"),Y=t.querySelector("#profileAccountPanel"),X=t.querySelector("#profileSecurityPanel"),Z=t.querySelector("#profilePersonalPanel"),ee=t.querySelector("#profileAvatarGalleryRail"),C=t.querySelector("#profileAvatarFileInput"),Ie=t.querySelector("#profilePhotoUploadBtn"),k=t.querySelector("#profilePhotoModal"),De=t.querySelector("#profilePhotoModalCloseBtn"),te=t.querySelector("#profileCameraStartBtn"),he=t.querySelector("#profileAvatarRetryBtn"),ae=t.querySelector("#profileAvatarRegenerateBtn"),Re=t.querySelector("#profileCameraPanel"),M=t.querySelector("#profilePromptVersionLabel"),E=t.querySelector("#profilePromptVersionSelect"),re=t.querySelector("#profilePromptVersionDetails"),be=t.querySelector("#profilePromptVersionModel"),we=t.querySelector("#profilePromptVersionTemplate"),A=t.querySelector("#profileCameraVideo"),L=t.querySelector("#profileCameraCanvas"),Oe=t.querySelector("#profileCameraCaptureBtn"),$e=t.querySelector("#profileCameraCancelBtn");if(!S||!Ye||!G||!z||!j||!H||!_||!W||!Le||!Xe||!Ze||!ve||!me||!et||!Te||!ye||!ge||!tt||!B||!xe||!Ne||!N||!J||!Q||!at||!rt||!Ue||!q||!Fe||!n||!K||!U||!F||!I||!Y||!X||!Z||!ee||!C||!Ie||!k||!De||!te||!he||!ae||!M||!E||!re||!be||!we||!Re||!A||!L||!Oe||!$e)throw new Error("Missing profile UI elements");let o=null,pt=!1,D=!1,oe=!1,Pe=!1,Se=!1,ie=!1,Ge=!1,ze=!1,w=!1,P=!1,T=!0,ne=null,R=null,se=null,b="";const ft=e=>{if(e.avatarAiEnabled!==!0||e.avatarStatus==="pending"||e.avatarStatus==="processing")return!1;if(e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0){const r=e.avatarCurrentPromptVersion||null;return b.trim().length>0&&b!==r}return e.avatarOutdated===!0},ot=()=>{ae.hidden=!o||!ft(o)},je=()=>{if(!o||M.hidden){re.hidden=!0,be.textContent="",we.textContent="";return}const e=Array.isArray(o.avatarPromptVersions)?o.avatarPromptVersions.find(a=>a.version===b):void 0;if(!e){re.hidden=!0,be.textContent="",we.textContent="";return}be.textContent=`${e.modelId} (${e.region})`,we.textContent=e.template,re.hidden=!1},le=async()=>{if(!ct)throw new Error("Cognito user pool is not configured");const e=ct.getCurrentUser();if(!e)throw new Error("No signed-in Cognito user found");return await new Promise((a,r)=>{e.getSession((l,d)=>{if(l||!d){r(l??new Error("Missing Cognito session"));return}a(d)})}),e},it=e=>{try{const a=e.split(".")[1];if(!a)return{};const r=a.replace(/-/g,"+").replace(/_/g,"/"),l=decodeURIComponent(atob(r).split("").map(d=>"%"+("00"+d.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(l)}catch{return{}}},vt=async e=>{const r=(await new Promise((f,i)=>{e.getSession((v,c)=>{if(v||!c){i(v??new Error("Failed to refresh session"));return}f(c)})})).getIdToken().getJwtToken(),l=it(r);typeof l.email_verified=="boolean"&&(T=l.email_verified);const d=typeof l.email=="string"?l.email.trim().toLowerCase():"";if(!d)throw new Error("Updated email not present in session yet. Sign out and sign in again, then save profile.");return d},mt=async()=>{try{const e=await le(),a=await new Promise((l,d)=>{e.getSession((f,i)=>{if(f||!i){d(f??new Error("Missing Cognito session"));return}l(i)})}),r=it(a.getIdToken().getJwtToken());typeof r.email_verified=="boolean"&&(T=r.email_verified)}catch{T=!0}},de=()=>{R&&(R.getTracks().forEach(e=>e.stop()),R=null),A.srcObject=null,Re.hidden=!0},p=()=>{const e=D||oe||Pe||Se||ie||Ge||ze;S.disabled=e||!o||!P,B.disabled=e||!o||!w,ve.disabled=e||!o,me.disabled=e||!o||!P,ge.disabled=e||!o||!P,xe.disabled=e||!o||!w,Ne.disabled=e||!o||!w,ye.disabled=e||!o||T,Te.disabled=e||!o,Ie.disabled=e||!o,Ue.disabled=e||!o,Fe.disabled=e,De.disabled=e,N.disabled=e||!o,J.disabled=e||!o,Q.disabled=e||!o,rt.disabled=e||!o,C.disabled=e||!o,te.disabled=e||!o,Oe.disabled=e||!o,$e.disabled=e||!o,he.disabled=e||!o,ae.disabled=e||!o,Array.from(ee.querySelectorAll(".profile-avatar-tile")).forEach(a=>{a.disabled=e||!o}),Array.from(ee.querySelectorAll(".profile-avatar-delete-btn")).forEach(a=>{a.disabled=e||!o}),E.disabled=e||!o||M.hidden},Ce=()=>{tt.hidden=!w,B.required=w,ge.textContent=w?"Send code to updated email":"Send verification code"},V=e=>{e&&(ne!==null&&(window.clearTimeout(ne),ne=null),K.textContent=e,K.hidden=!1,ne=window.setTimeout(()=>{K.hidden=!0,K.textContent="",ne=null},2600))},O=()=>{et.hidden=!P,Ze.hidden=T,Xe.hidden=!T,ye.hidden=T,ve.hidden=P,me.hidden=!P,Ce()},y=(e,a,r)=>{e.setAttribute("aria-expanded",String(r)),a.hidden=!r},ce=e=>{const a=e.avatarUrl||Be();if(Le.src=a,Le.alt=`${e.displayName||"User"} profile photo`,Me){Me.innerHTML=`<img src="${a}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const r=e.displayName.trim()||e.email;Me.title=r}},ue=e=>{const a=e.avatarAiEnabled===!0,r=e.avatarOriginalVersions&&e.avatarOriginalVersions.length>0?e.avatarOriginalVersions:e.originalAvatarUrl?[{version:"v1",url:e.originalAvatarUrl,createdAt:0}]:[],l=a&&e.avatarStylizedVersions?e.avatarStylizedVersions:[],d=[...(()=>{const i=new Map,v=new Map,c=m=>{if(typeof m!="number"||!Number.isFinite(m))return null;const u=new Date(m*1e3);return Number.isNaN(u.getTime())?null:`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`};return r.forEach(m=>{const u=c(m.createdAt);u&&i.set(u,(i.get(u)||0)+1)}),r.map(m=>{const u=c(m.createdAt);let g=Jt(m.createdAt)||m.version;if(u){const pe=(v.get(u)||0)+1;v.set(u,pe),(i.get(u)||0)>1&&(g=`${g}-${pe}`)}return{value:`original:${m.version}`,label:g,url:m.url,source:"original",version:m.version}})})(),...l.slice().sort((i,v)=>i.version.localeCompare(v.version,void 0,{numeric:!0})).map(i=>({value:`stylized:${i.version}`,label:i.version,url:i.url,source:"stylized",version:i.version}))];ee.innerHTML="";let f=d[0]?.value||"";if(e.activeAvatarSource==="stylized"){const i=e.avatarCurrentPromptVersion;i&&l.some(v=>v.version===i)?f=`stylized:${i}`:l[0]&&(f=`stylized:${l[0].version}`)}else e.activeOriginalVersion&&(f=`original:${e.activeOriginalVersion}`);d.forEach(i=>{const v=document.createElement("div");v.className="profile-avatar-tile-wrap";const c=document.createElement("button");c.type="button",c.className="profile-avatar-tile",c.setAttribute("role","option"),c.setAttribute("aria-selected",String(i.value===f));const m=i.value===f;m&&c.classList.add("is-active");const u=document.createElement("img");u.src=i.url,u.alt=i.label,u.className="profile-avatar-tile-image";const Ae=document.createElement("span");if(Ae.className="profile-avatar-tile-label",Ae.textContent=i.label,c.append(u,Ae),c.disabled=D||oe||Pe||Se||!o,c.addEventListener("click",()=>{yt(i.source,i.version)}),v.appendChild(c),!m){const g=document.createElement("button");g.type="button",g.className="profile-avatar-delete-btn",g.innerHTML='<span data-lucide="trash-2" aria-hidden="true"></span>',g.setAttribute("aria-label",`Delete ${i.label}`),g.title=`Delete ${i.label}`,g.disabled=c.disabled,g.addEventListener("click",pe=>{pe.preventDefault(),pe.stopPropagation(),gt(i.source,i.version)}),v.appendChild(g)}ee.appendChild(v)}),Dt({icons:{Trash2:Gt},attrs:{stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",width:"14",height:"14"}})},yt=async(e,a)=>{if(o){Pe=!0,p();try{const r=await Ot(e,a);o=r,ue(r),ce(r),s(n,"","info"),r.avatarAiEnabled===!0?V(e==="original"?"Using original avatar":"Using stylized avatar"):V("Profile photo updated")}catch(r){s(n,r instanceof Error?r.message:"Failed to select avatar","error")}finally{Pe=!1,p()}}},gt=async(e,a)=>{if(o){Se=!0,p();try{const r=await $t(e,a);o=r,ue(r),ce(r),s(n,"","info"),V("Profile photo deleted")}catch(r){s(n,r instanceof Error?r.message:"Failed to delete profile photo","error")}finally{Se=!1,p()}}},nt=async()=>{await mt();const e=await xt();o=e,Ve(e,S,G,z,j,H,_,W),ue(e),ce(e),Ke&&(Ke.textContent=e.email);const a=Array.isArray(e.groups)&&e.groups.some(d=>d.trim().toLowerCase()==="admin");Ye.hidden=!a,he.hidden=e.avatarStatus!=="failed",e.avatarAiEnabled||(ae.hidden=!0,M.hidden=!0,re.hidden=!0,je());const r=e.avatarAiEnabled===!0&&e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0;if(M.hidden=!r,r){const d=e.avatarAvailablePromptVersions||[],f=e.avatarDefaultPromptVersion||d[0]||"",i=new Map((e.avatarPromptVersions||[]).map(c=>[c.version,c]));b=d.includes(b)?b:f,E.options.length!==d.length?(E.innerHTML="",d.forEach(c=>{const m=i.get(c),u=document.createElement("option");u.value=c,u.textContent=m?`${c} — ${m.modelId}`:c,E.appendChild(u)})):Array.from(E.options).forEach(c=>{c.selected=c.value===b}),E.value=b}je(),ot(),O();const l=_e(e);return l&&s(n,l,e.avatarStatus==="failed"?"error":"info"),e.avatarOutdated&&s(n,"A new avatar style is available","info"),e},Ee=()=>{se!==null&&(window.clearInterval(se),se=null)},He=()=>{se===null&&(se=window.setInterval(async()=>{if(!D){if(!o||o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"){Ee();return}try{await nt(),o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"&&Ee()}catch(e){Ee(),s(n,e instanceof Error?e.message:"Failed to refresh profile","error")}}},3e3))},st=async e=>{const a=Wt(e);if(!a.ok){s(n,a.message,"error");return}D=!0,p(),s(n,"Uploading avatar...","info");try{const r=e.type||"image/jpeg",{uploadUrl:l,objectKey:d}=await Ut(r,e.size),f=await fetch(l,{method:"PUT",headers:{"Content-Type":r},body:e});if(!f.ok)throw new Error(`Avatar upload failed (${f.status})`);s(n,"Avatar queued","info");const i=await Ft(d,M.hidden?void 0:b);o=i,Ve(i,S,G,z,j,H,_,W),ce(i),ue(i);const v=_e(i);v?s(n,v,i.avatarStatus==="failed"?"error":"info"):(s(n,"","info"),V("Profile photo updated")),(i.avatarStatus==="pending"||i.avatarStatus==="processing")&&He()}catch(r){s(n,r instanceof Error?r.message:"Failed to upload avatar","error")}finally{D=!1,p()}},ht=async()=>{if(!(!o||pt||D||oe)){oe=!0,p(),s(n,"Avatar queued","info");try{const e=await It(M.hidden?void 0:b);o=e,Ve(e,S,G,z,j,H,_,W),ce(e),ue(e);const a=_e(e);a&&s(n,a,e.avatarStatus==="failed"?"error":"info"),(e.avatarStatus==="pending"||e.avatarStatus==="processing")&&He()}catch(e){s(n,e instanceof Error?e.message:"Failed to regenerate avatar","error")}finally{oe=!1,p()}}},bt=async()=>{const e=S.value.trim().toLowerCase();if(!e){s(n,"Enter a valid new email address.","error");return}if(o&&e===o.email.toLowerCase()){s(n,"That is already your current email address.","info");return}try{ie=!0,p();const a=await le();await new Promise((r,l)=>{a.updateAttributes([{Name:"email",Value:e}],d=>{if(d){l(d);return}r()})}),s(n,"Verification code sent to the new email. Enter it below and click Verify email.","info"),w=!0,Ce(),V("Verification code sent")}catch(a){s(n,a instanceof Error?a.message:"Failed to start email change","error")}finally{ie=!1,p()}},lt=async()=>{try{ie=!0,p();const e=await le();await new Promise((a,r)=>{e.getAttributeVerificationCode("email",{onSuccess:()=>a(),onFailure:l=>r(l),inputVerificationCode:()=>a()})}),s(n,"","info"),V("Verification code sent")}catch(e){s(n,e instanceof Error?e.message:"Failed to resend code","error")}finally{ie=!1,p()}},wt=async()=>{const e=B.value.trim();if(!e){s(n,"Enter the email verification code.","error");return}try{Ge=!0,p();const a=await le();await new Promise((l,d)=>{a.verifyAttribute("email",e,{onSuccess:()=>l(),onFailure:f=>d(f)})});const r=await vt(a);o=await Nt(r),Ve(o,S,G,z,j,H,_,W),B.value="",w=!1,P=!1,Ce(),O(),s(n,"","info"),V("Email updated")}catch(a){s(n,a instanceof Error?a.message:"Failed to verify email","error")}finally{Ge=!1,p()}},Pt=async()=>{const e=N.value,a=J.value,r=Q.value;if(!e||!a||!r){s(n,"Enter current password, new password, and confirmation.","error");return}if(a!==r){s(n,"New password confirmation does not match.","error");return}try{ze=!0,p();const l=await le();await new Promise((d,f)=>{l.changePassword(e,a,i=>{if(i){f(i);return}d()})}),N.value="",J.value="",Q.value="",x(q),s(n,"","info"),V("Password changed")}catch(l){s(n,l instanceof Error?l.message:"Failed to change password","error")}finally{ze=!1,p()}};s(n,"Loading profile...","info");try{const e=await nt();O(),y(U,Y,!0),y(F,X,!1),y(I,Z,!1),Ce();const a=e.avatarStatus;a==="pending"||a==="processing"?He():e.avatarOutdated||s(n,"","info")}catch(e){if(e instanceof Lt&&e.status===404){s(n,"Profile record does not exist yet. Contact support if this persists.","info"),C.disabled=!0,te.disabled=!0;return}s(n,e instanceof Error?e.message:"Failed to load profile","error"),C.disabled=!0,te.disabled=!0;return}p(),U.addEventListener("click",()=>{y(U,Y,!0),y(F,X,!1),y(I,Z,!1)}),F.addEventListener("click",()=>{y(U,Y,!1),y(F,X,!0),y(I,Z,!1)}),I.addEventListener("click",()=>{y(U,Y,!1),y(F,X,!1),y(I,Z,!0)});const dt=e=>{e.hidden=!1},x=e=>{if(e.hidden=!0,e===k){de();return}N.value="",J.value="",Q.value=""};ve.addEventListener("click",()=>{P=!0,O(),p(),S.focus()}),me.addEventListener("click",()=>{P=!1,w=!1,o&&(S.value=o.email),B.value="",O(),p(),s(n,"","info")}),Te.addEventListener("click",()=>{dt(k)}),De.addEventListener("click",()=>{x(k)}),Ue.addEventListener("click",()=>{dt(q),N.focus()}),Fe.addEventListener("click",()=>{x(q)}),ye.addEventListener("click",()=>{P=!0,w=!0,O(),p(),B.focus(),lt()}),ge.addEventListener("click",()=>{bt()}),xe.addEventListener("click",()=>{wt()}),Ne.addEventListener("click",()=>{lt()}),at.addEventListener("submit",e=>{e.preventDefault(),Pt()}),Ie.addEventListener("click",()=>{C.click()}),C.addEventListener("change",async()=>{const e=C.files?.[0];C.value="",e&&await st(e)}),te.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){s(n,"Camera is not supported on this device","error");return}try{de(),R=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),A.srcObject=R,Re.hidden=!1,s(n,"Camera ready","info")}catch{s(n,"Camera access denied or unavailable","error")}}),$e.addEventListener("click",()=>{de()}),Oe.addEventListener("click",async()=>{if(!R||A.videoWidth===0||A.videoHeight===0){s(n,"Camera is not ready","error");return}L.width=A.videoWidth,L.height=A.videoHeight;const e=L.getContext("2d");if(!e){s(n,"Failed to capture image","error");return}e.drawImage(A,0,0,L.width,L.height);const a=await new Promise(r=>{L.toBlob(r,"image/jpeg",.9)});if(de(),!a){s(n,"Failed to capture image","error");return}await st(a)}),he.addEventListener("click",()=>{C.click()}),ae.addEventListener("click",()=>{ht()}),E.addEventListener("change",()=>{b=E.value,je(),ot()}),window.addEventListener("beforeunload",()=>{Ee(),de()},{once:!0}),t.querySelectorAll("[data-close-modal]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-close-modal");if(a==="photo"){x(k);return}a==="password"&&x(q)})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(k.hidden||x(k),q.hidden||x(q))})};export{Yt as mountProfilePage};
