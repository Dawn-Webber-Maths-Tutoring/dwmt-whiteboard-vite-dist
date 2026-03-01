import{c as Ct,g as At,a as Vt,d as Bt,b as qt,A as kt,p as Mt,f as Lt,s as Tt,q as Nt,t as xt,v as Ut,w as Ft,x as It}from"./apiClient-Cr5lX9bC.js";import{c as Dt}from"./lucide-s4dRgpWl.js";import{C as Rt}from"./js.cookie-CqCNl8jZ.js";import{T as $t}from"./trash-2-DVPlYQui.js";const Ot=5*1024*1024,Gt="af-south-1_bIOvLpsST",jt="3h1hjhsq24cm86n83oklrkf6be",pt=new Rt({UserPoolId:Gt,ClientId:jt}),zt=()=>`
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
`,s=(t,h,j)=>{if(!h){t.hidden=!0,t.textContent="",t.dataset.tone="";return}t.hidden=!1,t.textContent=h,t.dataset.tone=j},qe=(t,h,j,me,ke,Me,Je,Le)=>{h.value=t.email,j.textContent=Array.isArray(t.groups)&&t.groups.length>0?t.groups.join(", "):"none",me.textContent=t.givenName||"Not set",ke.textContent=t.familyName||"Not set",Me.textContent=t.birthDate||"Not set",Je.textContent=t.displayName||"Unnamed user",Le.textContent=t.email},We=t=>{switch(t.avatarStatus){case"pending":return"Avatar queued";case"processing":return"Generating stylised avatar...";case"failed":return t.avatarError||"Avatar generation failed";default:return null}},_t=t=>t.type.toLowerCase().startsWith("image/")?t.size<=0||t.size>Ot?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},Ht=t=>{if(typeof t!="number"||!Number.isFinite(t)||t<=0)return null;const h=new Date(t*1e3);return Number.isNaN(h.getTime())?null:new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(h)},Yt=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");t.innerHTML=zt(),t.appendChild(Ct());const h=t.querySelector("#profileAppBarContainer");if(!h)throw new Error("Missing profile app bar container");const j=At(),me=()=>"/default_avatar.png",ke=()=>{const a="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",r=[];for(let l=0;l<window.localStorage.length;l+=1){const d=window.localStorage.key(l);d&&d.startsWith(a)&&r.push(d)}r.forEach(l=>window.localStorage.removeItem(l))},Me=Vt(),Le=Bt().includes("admin"),ft=qt({currentApp:"profile",onAppChange:e=>{if(e==="whiteboard"){Mt(),window.location.href="/whiteboard";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}e==="user-management"&&(window.location.href="/user-management/")},rightContent:Me,userRole:j,isAdmin:Le});h.appendChild(ft);const P=t.querySelector("#userAvatar"),q=t.querySelector("#userMenu"),Qe=t.querySelector("#userEmail"),Ke=t.querySelector("#signOutBtn"),Ye=t.querySelector("#profileBtn"),Xe=t.querySelector("#selectStudentBtn");Xe&&(Xe.hidden=!0),P&&(P.innerHTML=`<img src="${me()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,P.addEventListener("click",e=>{if(e.stopPropagation(),!q)return;const a=q.hidden;q.hidden=!a,P.setAttribute("aria-expanded",String(!a))})),q&&q.addEventListener("click",e=>{e.stopPropagation()}),document.addEventListener("click",()=>{q&&(q.hidden=!0),P&&P.setAttribute("aria-expanded","false")}),Ye&&Ye.addEventListener("click",()=>{window.location.href="/profile/"}),Ke&&Ke.addEventListener("click",()=>{ke(),window.location.href="/auth"});const E=t.querySelector("#profileEmail"),Ze=t.querySelector("#profileGroupsLabel"),z=t.querySelector("#profileGroups"),_=t.querySelector("#profileGivenName"),H=t.querySelector("#profileFamilyName"),W=t.querySelector("#profileBirthDate"),J=t.querySelector("#profileAccountName"),Q=t.querySelector("#profileAccountEmail"),Te=t.querySelector("#profileAccountAvatar"),et=t.querySelector("#profileEmailVerifiedBadge"),tt=t.querySelector("#profileEmailWarning"),ge=t.querySelector("#profileAccountEditBtn"),ye=t.querySelector("#profileAccountCancelBtn"),at=t.querySelector("#profileAccountEditPanel"),Ne=t.querySelector("#profilePhotoChangeBtn"),he=t.querySelector("#profileEmailQuickVerifyBtn"),be=t.querySelector("#profileEmailStartBtn"),k=t.querySelector("#profileEmailCode"),rt=t.querySelector("#profileEmailVerificationPanel"),xe=t.querySelector("#profileEmailVerifyBtn"),Ue=t.querySelector("#profileEmailResendBtn"),F=t.querySelector("#profileCurrentPassword"),K=t.querySelector("#profileNewPassword"),Y=t.querySelector("#profileConfirmPassword"),ot=t.querySelector("#profilePasswordForm"),it=t.querySelector("#profilePasswordChangeBtn"),Fe=t.querySelector("#profileOpenPasswordModalBtn"),M=t.querySelector("#profilePasswordModal"),Ie=t.querySelector("#profilePasswordModalCloseBtn"),n=t.querySelector("#profileFeedback"),X=t.querySelector("#profileToast"),I=t.querySelector("#profileAccountToggle"),D=t.querySelector("#profileSecurityToggle"),R=t.querySelector("#profilePersonalToggle"),Z=t.querySelector("#profileAccountPanel"),ee=t.querySelector("#profileSecurityPanel"),te=t.querySelector("#profilePersonalPanel"),ae=t.querySelector("#profileAvatarGalleryRail"),C=t.querySelector("#profileAvatarFileInput"),De=t.querySelector("#profilePhotoUploadBtn"),L=t.querySelector("#profilePhotoModal"),Re=t.querySelector("#profilePhotoModalCloseBtn"),re=t.querySelector("#profileCameraStartBtn"),we=t.querySelector("#profileAvatarRetryBtn"),oe=t.querySelector("#profileAvatarRegenerateBtn"),$e=t.querySelector("#profileCameraPanel"),T=t.querySelector("#profilePromptVersionLabel"),A=t.querySelector("#profilePromptVersionSelect"),ie=t.querySelector("#profilePromptVersionDetails"),Se=t.querySelector("#profilePromptVersionModel"),Pe=t.querySelector("#profilePromptVersionTemplate"),V=t.querySelector("#profileCameraVideo"),N=t.querySelector("#profileCameraCanvas"),Oe=t.querySelector("#profileCameraCaptureBtn"),Ge=t.querySelector("#profileCameraCancelBtn");if(!E||!Ze||!z||!_||!H||!W||!J||!Q||!Te||!et||!tt||!ge||!ye||!at||!Ne||!he||!be||!rt||!k||!xe||!Ue||!F||!K||!Y||!ot||!it||!Fe||!M||!Ie||!n||!X||!I||!D||!R||!Z||!ee||!te||!ae||!C||!De||!L||!Re||!re||!we||!oe||!T||!A||!ie||!Se||!Pe||!$e||!V||!N||!Oe||!Ge)throw new Error("Missing profile UI elements");let o=null,vt=!1,$=!1,ne=!1,Ee=!1,Ce=!1,se=!1,je=!1,ze=!1,w=!1,S=!1,x=!0,le=null,O=null,de=null,b="";const mt=e=>{if(e.avatarAiEnabled!==!0||e.avatarStatus==="pending"||e.avatarStatus==="processing")return!1;if(e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0){const r=e.avatarCurrentPromptVersion||null;return b.trim().length>0&&b!==r}return e.avatarOutdated===!0},nt=()=>{oe.hidden=!o||!mt(o)},_e=()=>{if(!o||T.hidden){ie.hidden=!0,Se.textContent="",Pe.textContent="";return}const e=Array.isArray(o.avatarPromptVersions)?o.avatarPromptVersions.find(a=>a.version===b):void 0;if(!e){ie.hidden=!0,Se.textContent="",Pe.textContent="";return}Se.textContent=`${e.modelId} (${e.region})`,Pe.textContent=e.template,ie.hidden=!1},ce=async()=>{if(!pt)throw new Error("Cognito user pool is not configured");const e=pt.getCurrentUser();if(!e)throw new Error("No signed-in Cognito user found");return await new Promise((a,r)=>{e.getSession((l,d)=>{if(l||!d){r(l??new Error("Missing Cognito session"));return}a(d)})}),e},st=e=>{try{const a=e.split(".")[1];if(!a)return{};const r=a.replace(/-/g,"+").replace(/_/g,"/"),l=decodeURIComponent(atob(r).split("").map(d=>"%"+("00"+d.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(l)}catch{return{}}},gt=async e=>{const r=(await new Promise((f,i)=>{e.getSession((v,c)=>{if(v||!c){i(v??new Error("Failed to refresh session"));return}f(c)})})).getIdToken().getJwtToken(),l=st(r);typeof l.email_verified=="boolean"&&(x=l.email_verified);const d=typeof l.email=="string"?l.email.trim().toLowerCase():"";if(!d)throw new Error("Updated email not present in session yet. Sign out and sign in again, then save profile.");return d},yt=async()=>{try{const e=await ce(),a=await new Promise((l,d)=>{e.getSession((f,i)=>{if(f||!i){d(f??new Error("Missing Cognito session"));return}l(i)})}),r=st(a.getIdToken().getJwtToken());typeof r.email_verified=="boolean"&&(x=r.email_verified)}catch{x=!0}},ue=()=>{O&&(O.getTracks().forEach(e=>e.stop()),O=null),V.srcObject=null,$e.hidden=!0},p=()=>{const e=$||ne||Ee||Ce||se||je||ze;E.disabled=e||!o||!S,k.disabled=e||!o||!w,ge.disabled=e||!o,ye.disabled=e||!o||!S,be.disabled=e||!o||!S,xe.disabled=e||!o||!w,Ue.disabled=e||!o||!w,he.disabled=e||!o||x,Ne.disabled=e||!o,De.disabled=e||!o,Fe.disabled=e||!o,Ie.disabled=e,Re.disabled=e,F.disabled=e||!o,K.disabled=e||!o,Y.disabled=e||!o,it.disabled=e||!o,C.disabled=e||!o,re.disabled=e||!o,Oe.disabled=e||!o,Ge.disabled=e||!o,we.disabled=e||!o,oe.disabled=e||!o,Array.from(ae.querySelectorAll(".profile-avatar-tile")).forEach(a=>{a.disabled=e||!o}),Array.from(ae.querySelectorAll(".profile-avatar-delete-btn")).forEach(a=>{a.disabled=e||!o}),A.disabled=e||!o||T.hidden},Ae=()=>{rt.hidden=!w,k.required=w,be.textContent=w?"Send code to updated email":"Send verification code"},B=e=>{e&&(le!==null&&(window.clearTimeout(le),le=null),X.textContent=e,X.hidden=!1,le=window.setTimeout(()=>{X.hidden=!0,X.textContent="",le=null},2600))},G=()=>{at.hidden=!S,tt.hidden=x,et.hidden=!x,he.hidden=x,ge.hidden=S,ye.hidden=!S,Ae()},g=(e,a,r)=>{e.setAttribute("aria-expanded",String(r)),a.hidden=!r},pe=e=>{const a=e.avatarUrl||me();if(Te.src=a,Te.alt=`${e.displayName||"User"} profile photo`,P){P.innerHTML=`<img src="${a}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const r=e.displayName.trim()||e.email;P.title=r}},fe=e=>{const a=e.avatarAiEnabled===!0,r=e.avatarOriginalVersions&&e.avatarOriginalVersions.length>0?e.avatarOriginalVersions:e.originalAvatarUrl?[{version:"v1",url:e.originalAvatarUrl,createdAt:0}]:[],l=a&&e.avatarStylizedVersions?e.avatarStylizedVersions:[],d=[...(()=>{const i=new Map,v=new Map,c=m=>{if(typeof m!="number"||!Number.isFinite(m))return null;const u=new Date(m*1e3);return Number.isNaN(u.getTime())?null:`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`};return r.forEach(m=>{const u=c(m.createdAt);u&&i.set(u,(i.get(u)||0)+1)}),r.map(m=>{const u=c(m.createdAt);let y=Ht(m.createdAt)||m.version;if(u){const ve=(v.get(u)||0)+1;v.set(u,ve),(i.get(u)||0)>1&&(y=`${y}-${ve}`)}return{value:`original:${m.version}`,label:y,url:m.url,source:"original",version:m.version}})})(),...l.slice().sort((i,v)=>i.version.localeCompare(v.version,void 0,{numeric:!0})).map(i=>({value:`stylized:${i.version}`,label:i.version,url:i.url,source:"stylized",version:i.version}))];ae.innerHTML="";let f=d[0]?.value||"";if(e.activeAvatarSource==="stylized"){const i=e.avatarCurrentPromptVersion;i&&l.some(v=>v.version===i)?f=`stylized:${i}`:l[0]&&(f=`stylized:${l[0].version}`)}else e.activeOriginalVersion&&(f=`original:${e.activeOriginalVersion}`);d.forEach(i=>{const v=document.createElement("div");v.className="profile-avatar-tile-wrap";const c=document.createElement("button");c.type="button",c.className="profile-avatar-tile",c.setAttribute("role","option"),c.setAttribute("aria-selected",String(i.value===f));const m=i.value===f;m&&c.classList.add("is-active");const u=document.createElement("img");u.src=i.url,u.alt=i.label,u.className="profile-avatar-tile-image";const Be=document.createElement("span");if(Be.className="profile-avatar-tile-label",Be.textContent=i.label,c.append(u,Be),c.disabled=$||ne||Ee||Ce||!o,c.addEventListener("click",()=>{ht(i.source,i.version)}),v.appendChild(c),!m){const y=document.createElement("button");y.type="button",y.className="profile-avatar-delete-btn",y.innerHTML='<span data-lucide="trash-2" aria-hidden="true"></span>',y.setAttribute("aria-label",`Delete ${i.label}`),y.title=`Delete ${i.label}`,y.disabled=c.disabled,y.addEventListener("click",ve=>{ve.preventDefault(),ve.stopPropagation(),bt(i.source,i.version)}),v.appendChild(y)}ae.appendChild(v)}),Dt({icons:{Trash2:$t},attrs:{stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",width:"14",height:"14"}})},ht=async(e,a)=>{if(o){Ee=!0,p();try{const r=await Ft(e,a);o=r,fe(r),pe(r),s(n,"","info"),r.avatarAiEnabled===!0?B(e==="original"?"Using original avatar":"Using stylized avatar"):B("Profile photo updated")}catch(r){s(n,r instanceof Error?r.message:"Failed to select avatar","error")}finally{Ee=!1,p()}}},bt=async(e,a)=>{if(o){Ce=!0,p();try{const r=await It(e,a);o=r,fe(r),pe(r),s(n,"","info"),B("Profile photo deleted")}catch(r){s(n,r instanceof Error?r.message:"Failed to delete profile photo","error")}finally{Ce=!1,p()}}},lt=async()=>{await yt();const e=await Lt();o=e,qe(e,E,z,_,H,W,J,Q),fe(e),pe(e),Qe&&(Qe.textContent=e.email);const a=Array.isArray(e.groups)&&e.groups.some(d=>d.trim().toLowerCase()==="admin");Ze.hidden=!a,we.hidden=e.avatarStatus!=="failed",e.avatarAiEnabled||(oe.hidden=!0,T.hidden=!0,ie.hidden=!0,_e());const r=e.avatarAiEnabled===!0&&e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0;if(T.hidden=!r,r){const d=e.avatarAvailablePromptVersions||[],f=e.avatarDefaultPromptVersion||d[0]||"",i=new Map((e.avatarPromptVersions||[]).map(c=>[c.version,c]));b=d.includes(b)?b:f,A.options.length!==d.length?(A.innerHTML="",d.forEach(c=>{const m=i.get(c),u=document.createElement("option");u.value=c,u.textContent=m?`${c} — ${m.modelId}`:c,A.appendChild(u)})):Array.from(A.options).forEach(c=>{c.selected=c.value===b}),A.value=b}_e(),nt(),G();const l=We(e);return l&&s(n,l,e.avatarStatus==="failed"?"error":"info"),e.avatarOutdated&&s(n,"A new avatar style is available","info"),e},Ve=()=>{de!==null&&(window.clearInterval(de),de=null)},He=()=>{de===null&&(de=window.setInterval(async()=>{if(!$){if(!o||o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"){Ve();return}try{await lt(),o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"&&Ve()}catch(e){Ve(),s(n,e instanceof Error?e.message:"Failed to refresh profile","error")}}},3e3))},dt=async e=>{const a=_t(e);if(!a.ok){s(n,a.message,"error");return}$=!0,p(),s(n,"Uploading avatar...","info");try{const r=e.type||"image/jpeg",{uploadUrl:l,objectKey:d}=await Nt(r,e.size),f=await fetch(l,{method:"PUT",headers:{"Content-Type":r},body:e});if(!f.ok)throw new Error(`Avatar upload failed (${f.status})`);s(n,"Avatar queued","info");const i=await xt(d,T.hidden?void 0:b);o=i,qe(i,E,z,_,H,W,J,Q),pe(i),fe(i);const v=We(i);v?s(n,v,i.avatarStatus==="failed"?"error":"info"):(s(n,"","info"),B("Profile photo updated")),(i.avatarStatus==="pending"||i.avatarStatus==="processing")&&He()}catch(r){s(n,r instanceof Error?r.message:"Failed to upload avatar","error")}finally{$=!1,p()}},wt=async()=>{if(!(!o||vt||$||ne)){ne=!0,p(),s(n,"Avatar queued","info");try{const e=await Ut(T.hidden?void 0:b);o=e,qe(e,E,z,_,H,W,J,Q),pe(e),fe(e);const a=We(e);a&&s(n,a,e.avatarStatus==="failed"?"error":"info"),(e.avatarStatus==="pending"||e.avatarStatus==="processing")&&He()}catch(e){s(n,e instanceof Error?e.message:"Failed to regenerate avatar","error")}finally{ne=!1,p()}}},St=async()=>{const e=E.value.trim().toLowerCase();if(!e){s(n,"Enter a valid new email address.","error");return}if(o&&e===o.email.toLowerCase()){s(n,"That is already your current email address.","info");return}try{se=!0,p();const a=await ce();await new Promise((r,l)=>{a.updateAttributes([{Name:"email",Value:e}],d=>{if(d){l(d);return}r()})}),s(n,"Verification code sent to the new email. Enter it below and click Verify email.","info"),w=!0,Ae(),B("Verification code sent")}catch(a){s(n,a instanceof Error?a.message:"Failed to start email change","error")}finally{se=!1,p()}},ct=async()=>{try{se=!0,p();const e=await ce();await new Promise((a,r)=>{e.getAttributeVerificationCode("email",{onSuccess:()=>a(),onFailure:l=>r(l),inputVerificationCode:()=>a()})}),s(n,"","info"),B("Verification code sent")}catch(e){s(n,e instanceof Error?e.message:"Failed to resend code","error")}finally{se=!1,p()}},Pt=async()=>{const e=k.value.trim();if(!e){s(n,"Enter the email verification code.","error");return}try{je=!0,p();const a=await ce();await new Promise((l,d)=>{a.verifyAttribute("email",e,{onSuccess:()=>l(),onFailure:f=>d(f)})});const r=await gt(a);o=await Tt(r),qe(o,E,z,_,H,W,J,Q),k.value="",w=!1,S=!1,Ae(),G(),s(n,"","info"),B("Email updated")}catch(a){s(n,a instanceof Error?a.message:"Failed to verify email","error")}finally{je=!1,p()}},Et=async()=>{const e=F.value,a=K.value,r=Y.value;if(!e||!a||!r){s(n,"Enter current password, new password, and confirmation.","error");return}if(a!==r){s(n,"New password confirmation does not match.","error");return}try{ze=!0,p();const l=await ce();await new Promise((d,f)=>{l.changePassword(e,a,i=>{if(i){f(i);return}d()})}),F.value="",K.value="",Y.value="",U(M),s(n,"","info"),B("Password changed")}catch(l){s(n,l instanceof Error?l.message:"Failed to change password","error")}finally{ze=!1,p()}};s(n,"Loading profile...","info");try{const e=await lt();G(),g(I,Z,!0),g(D,ee,!1),g(R,te,!1),Ae();const a=e.avatarStatus;a==="pending"||a==="processing"?He():e.avatarOutdated||s(n,"","info")}catch(e){if(e instanceof kt&&e.status===404){s(n,"Profile record does not exist yet. Contact support if this persists.","info"),C.disabled=!0,re.disabled=!0;return}s(n,e instanceof Error?e.message:"Failed to load profile","error"),C.disabled=!0,re.disabled=!0;return}p(),I.addEventListener("click",()=>{g(I,Z,!0),g(D,ee,!1),g(R,te,!1)}),D.addEventListener("click",()=>{g(I,Z,!1),g(D,ee,!0),g(R,te,!1)}),R.addEventListener("click",()=>{g(I,Z,!1),g(D,ee,!1),g(R,te,!0)});const ut=e=>{e.hidden=!1},U=e=>{if(e.hidden=!0,e===L){ue();return}F.value="",K.value="",Y.value=""};ge.addEventListener("click",()=>{S=!0,G(),p(),E.focus()}),ye.addEventListener("click",()=>{S=!1,w=!1,o&&(E.value=o.email),k.value="",G(),p(),s(n,"","info")}),Ne.addEventListener("click",()=>{ut(L)}),Re.addEventListener("click",()=>{U(L)}),Fe.addEventListener("click",()=>{ut(M),F.focus()}),Ie.addEventListener("click",()=>{U(M)}),he.addEventListener("click",()=>{S=!0,w=!0,G(),p(),k.focus(),ct()}),be.addEventListener("click",()=>{St()}),xe.addEventListener("click",()=>{Pt()}),Ue.addEventListener("click",()=>{ct()}),ot.addEventListener("submit",e=>{e.preventDefault(),Et()}),De.addEventListener("click",()=>{C.click()}),C.addEventListener("change",async()=>{const e=C.files?.[0];C.value="",e&&await dt(e)}),re.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){s(n,"Camera is not supported on this device","error");return}try{ue(),O=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),V.srcObject=O,$e.hidden=!1,s(n,"Camera ready","info")}catch{s(n,"Camera access denied or unavailable","error")}}),Ge.addEventListener("click",()=>{ue()}),Oe.addEventListener("click",async()=>{if(!O||V.videoWidth===0||V.videoHeight===0){s(n,"Camera is not ready","error");return}N.width=V.videoWidth,N.height=V.videoHeight;const e=N.getContext("2d");if(!e){s(n,"Failed to capture image","error");return}e.drawImage(V,0,0,N.width,N.height);const a=await new Promise(r=>{N.toBlob(r,"image/jpeg",.9)});if(ue(),!a){s(n,"Failed to capture image","error");return}await dt(a)}),we.addEventListener("click",()=>{C.click()}),oe.addEventListener("click",()=>{wt()}),A.addEventListener("change",()=>{b=A.value,_e(),nt()}),window.addEventListener("beforeunload",()=>{Ve(),ue()},{once:!0}),t.querySelectorAll("[data-close-modal]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-close-modal");if(a==="photo"){U(L);return}a==="password"&&U(M)})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(L.hidden||U(L),M.hidden||U(M))})};export{Yt as mountProfilePage};
