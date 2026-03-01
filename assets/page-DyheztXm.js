import{c as He,g as _e,a as We,d as Je,b as Ye,A as Ke,p as Xe,f as Ze,s as Qe,q as et,t as tt,v as at,w as rt,x as it}from"./apiClient-eihRWSVq.js";import{c as ot}from"./lucide-s4dRgpWl.js";import{C as nt}from"./js.cookie-CqCNl8jZ.js";import{T as st}from"./trash-2-DVPlYQui.js";const lt=5*1024*1024,dt="af-south-1_bIOvLpsST",ct="3h1hjhsq24cm86n83oklrkf6be",Ie=new nt({UserPoolId:dt,ClientId:ct}),ut=()=>`
  <div class="app profile-page">
    <div id="profileAppBarContainer"></div>
    <main class="profile-layout">
      <section class="profile-card" aria-live="polite">
        <h2>Profile</h2>
        <p class="profile-subtitle">Name and date of birth are fixed after signup. You can update your email, password, and profile photo.</p>

        <div class="profile-feedback" id="profileFeedback" hidden></div>

        <section class="profile-avatar-section" aria-label="Profile photo">
          <h3>Profile Photo</h3>
          <div id="profileAvatarGalleryRail" class="profile-avatar-gallery-rail" role="listbox" aria-label="Avatar gallery"></div>

          <div class="profile-avatar-actions">
            <label class="profile-upload-label" for="profileAvatarFileInput">Upload from device</label>
            <input id="profileAvatarFileInput" type="file" accept="image/*" />
            <button id="profileCameraStartBtn" type="button">Capture using camera</button>
            <button id="profileAvatarRetryBtn" type="button" hidden>Retry</button>
            <button id="profileAvatarRegenerateBtn" type="button" hidden>Regenerate</button>
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

          <div id="profileCameraPanel" class="profile-camera-panel" hidden>
            <video id="profileCameraVideo" autoplay playsinline muted></video>
            <canvas id="profileCameraCanvas" hidden></canvas>
            <div class="profile-camera-actions">
              <button id="profileCameraCaptureBtn" type="button">Capture</button>
              <button id="profileCameraCancelBtn" type="button">Cancel</button>
            </div>
          </div>
        </section>

        <form id="profileForm">
          <section class="profile-form-section" aria-label="Email">
            <h3>Email</h3>
            <p class="profile-section-hint">Update your email, then verify it with a code sent to the new address.</p>
            <label>
              Email address
              <input id="profileEmail" type="email" />
            </label>
            <div class="profile-inline-actions">
              <button id="profileEmailStartBtn" type="button">Send verification code</button>
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
          </section>

          <section class="profile-form-section" aria-label="Read-only profile details">
            <h3>Identity details</h3>
            <p class="profile-section-hint">These fields are fixed after sign-up.</p>
            <label id="profileGroupsLabel" hidden>
              Groups
              <input id="profileGroups" type="text" readonly disabled />
            </label>
            <label>
              First Name
              <input id="profileGivenName" type="text" maxlength="100" readonly disabled />
            </label>
            <label>
              Last Name
              <input id="profileFamilyName" type="text" maxlength="100" readonly disabled />
            </label>
            <label>
              Date of birth
              <input id="profileBirthDate" type="date" readonly disabled />
            </label>
          </section>

          <section class="profile-form-section" aria-label="Password">
            <h3>Password</h3>
            <p class="profile-section-hint">Use one primary action to update your password.</p>
            <label>
              Current password
              <input id="profileCurrentPassword" type="password" autocomplete="current-password" />
            </label>
            <label>
              New password
              <input id="profileNewPassword" type="password" autocomplete="new-password" />
            </label>
            <label>
              Confirm new password
              <input id="profileConfirmPassword" type="password" autocomplete="new-password" />
            </label>
            <div class="profile-inline-actions">
              <button id="profilePasswordChangeBtn" type="button">Change password</button>
            </div>
          </section>

          <button id="profileSaveBtn" type="submit" hidden disabled>Save</button>
        </form>
      </section>
    </main>
  </div>
`,s=(t,h,F)=>{if(!h){t.hidden=!0,t.textContent="",t.dataset.tone="";return}t.hidden=!1,t.textContent=h,t.dataset.tone=F},se=(t,h,F,L,le,de)=>{h.value=t.email,F.value=Array.isArray(t.groups)&&t.groups.length>0?t.groups.join(", "):"none",L.value=t.givenName,le.value=t.familyName,de.value=t.birthDate||""},we=t=>{switch(t.avatarStatus){case"pending":return"Avatar queued";case"processing":return"Generating stylised avatar...";case"failed":return t.avatarError||"Avatar generation failed";default:return null}},pt=t=>t.type.toLowerCase().startsWith("image/")?t.size<=0||t.size>lt?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},ft=t=>{if(typeof t!="number"||!Number.isFinite(t)||t<=0)return null;const h=new Date(t*1e3);return Number.isNaN(h.getTime())?null:new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(h)},bt=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");t.innerHTML=ut(),t.appendChild(He());const h=t.querySelector("#profileAppBarContainer");if(!h)throw new Error("Missing profile app bar container");const F=_e(),L=()=>"/default_avatar.png",le=()=>{const a="CognitoIdentityServiceProvider.3h1hjhsq24cm86n83oklrkf6be.",r=[];for(let l=0;l<window.localStorage.length;l+=1){const d=window.localStorage.key(l);d&&d.startsWith(a)&&r.push(d)}r.forEach(l=>window.localStorage.removeItem(l))},de=We(),xe=Je().includes("admin"),Fe=Ye({currentApp:"profile",onAppChange:e=>{if(e==="whiteboard"){Xe(),window.location.href="/whiteboard";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}e==="user-management"&&(window.location.href="/user-management/")},rightContent:de,userRole:F,isAdmin:xe});h.appendChild(Fe);const g=t.querySelector("#userAvatar"),V=t.querySelector("#userMenu"),Se=t.querySelector("#userEmail"),Ce=t.querySelector("#signOutBtn"),Ee=t.querySelector("#profileBtn"),Pe=t.querySelector("#selectStudentBtn");Pe&&(Pe.hidden=!0),g&&(g.innerHTML=`<img src="${L()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,g.addEventListener("click",e=>{if(e.stopPropagation(),!V)return;const a=V.hidden;V.hidden=!a,g.setAttribute("aria-expanded",String(!a))})),V&&V.addEventListener("click",e=>{e.stopPropagation()}),document.addEventListener("click",()=>{V&&(V.hidden=!0),g&&g.setAttribute("aria-expanded","false")}),Ee&&Ee.addEventListener("click",()=>{window.location.href="/profile/"}),Ce&&Ce.addEventListener("click",()=>{le(),window.location.href="/auth"});const Ae=t.querySelector("#profileForm"),B=t.querySelector("#profileEmail"),Ve=t.querySelector("#profileGroupsLabel"),M=t.querySelector("#profileGroups"),C=t.querySelector("#profileGivenName"),E=t.querySelector("#profileFamilyName"),T=t.querySelector("#profileBirthDate"),W=t.querySelector("#profileEmailStartBtn"),N=t.querySelector("#profileEmailCode"),Be=t.querySelector("#profileEmailVerificationPanel"),ce=t.querySelector("#profileEmailVerifyBtn"),ue=t.querySelector("#profileEmailResendBtn"),J=t.querySelector("#profileCurrentPassword"),Y=t.querySelector("#profileNewPassword"),K=t.querySelector("#profileConfirmPassword"),pe=t.querySelector("#profilePasswordChangeBtn"),U=t.querySelector("#profileSaveBtn"),i=t.querySelector("#profileFeedback"),D=t.querySelector("#profileAvatarGalleryRail"),P=t.querySelector("#profileAvatarFileInput"),R=t.querySelector("#profileCameraStartBtn"),X=t.querySelector("#profileAvatarRetryBtn"),$=t.querySelector("#profileAvatarRegenerateBtn"),fe=t.querySelector("#profileCameraPanel"),k=t.querySelector("#profilePromptVersionLabel"),w=t.querySelector("#profilePromptVersionSelect"),O=t.querySelector("#profilePromptVersionDetails"),Z=t.querySelector("#profilePromptVersionModel"),Q=t.querySelector("#profilePromptVersionTemplate"),A=t.querySelector("#profileCameraVideo"),q=t.querySelector("#profileCameraCanvas"),me=t.querySelector("#profileCameraCaptureBtn"),ve=t.querySelector("#profileCameraCancelBtn");if(!Ae||!B||!Ve||!M||!C||!E||!T||!W||!Be||!N||!ce||!ue||!J||!Y||!K||!pe||!U||!i||!D||!P||!R||!X||!$||!k||!w||!O||!Z||!Q||!fe||!A||!q||!me||!ve)throw new Error("Missing profile UI elements");let o=null,Me=!1,I=!1,j=!1,ee=!1,te=!1,G=!1,ge=!1,ye=!1,S=!1,x=null,z=null,b="";const Te=e=>{if(e.avatarAiEnabled!==!0||e.avatarStatus==="pending"||e.avatarStatus==="processing")return!1;if(e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0){const r=e.avatarCurrentPromptVersion||null;return b.trim().length>0&&b!==r}return e.avatarOutdated===!0},ke=()=>{$.hidden=!o||!Te(o)},he=()=>{if(!o||k.hidden){O.hidden=!0,Z.textContent="",Q.textContent="";return}const e=Array.isArray(o.avatarPromptVersions)?o.avatarPromptVersions.find(a=>a.version===b):void 0;if(!e){O.hidden=!0,Z.textContent="",Q.textContent="";return}Z.textContent=`${e.modelId} (${e.region})`,Q.textContent=e.template,O.hidden=!1},ae=async()=>{if(!Ie)throw new Error("Cognito user pool is not configured");const e=Ie.getCurrentUser();if(!e)throw new Error("No signed-in Cognito user found");return await new Promise((a,r)=>{e.getSession((l,d)=>{if(l||!d){r(l??new Error("Missing Cognito session"));return}a(d)})}),e},Ne=e=>{try{const a=e.split(".")[1];if(!a)return{};const r=a.replace(/-/g,"+").replace(/_/g,"/"),l=decodeURIComponent(atob(r).split("").map(d=>"%"+("00"+d.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(l)}catch{return{}}},Ue=async e=>{const r=(await new Promise((p,n)=>{e.getSession((f,c)=>{if(f||!c){n(f??new Error("Failed to refresh session"));return}p(c)})})).getIdToken().getJwtToken(),l=Ne(r),d=typeof l.email=="string"?l.email.trim().toLowerCase():"";if(!d)throw new Error("Updated email not present in session yet. Sign out and sign in again, then save profile.");return d},re=()=>{x&&(x.getTracks().forEach(e=>e.stop()),x=null),A.srcObject=null,fe.hidden=!0},v=()=>{const e=I||j||ee||te||G||ge||ye;U.disabled=!0,U.textContent="Save",C.disabled=!0,E.disabled=!0,B.disabled=e||!o,N.disabled=e||!o||!S,W.disabled=e||!o,ce.disabled=e||!o||!S,ue.disabled=e||!o||!S,J.disabled=e||!o,Y.disabled=e||!o,K.disabled=e||!o,pe.disabled=e||!o,P.disabled=e||!o,R.disabled=e||!o,me.disabled=e||!o,ve.disabled=e||!o,X.disabled=e||!o,$.disabled=e||!o,Array.from(D.querySelectorAll(".profile-avatar-tile")).forEach(a=>{a.disabled=e||!o}),Array.from(D.querySelectorAll(".profile-avatar-delete-btn")).forEach(a=>{a.disabled=e||!o}),w.disabled=e||!o||k.hidden},ie=()=>{Be.hidden=!S,N.required=S,W.textContent=S?"Send code to updated email":"Send verification code"},H=e=>{const a=e.avatarAiEnabled===!0,r=e.avatarOriginalVersions&&e.avatarOriginalVersions.length>0?e.avatarOriginalVersions:e.originalAvatarUrl?[{version:"v1",url:e.originalAvatarUrl,createdAt:0}]:[],l=a&&e.avatarStylizedVersions?e.avatarStylizedVersions:[],d=[...(()=>{const n=new Map,f=new Map,c=m=>{if(typeof m!="number"||!Number.isFinite(m))return null;const u=new Date(m*1e3);return Number.isNaN(u.getTime())?null:`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`};return r.forEach(m=>{const u=c(m.createdAt);u&&n.set(u,(n.get(u)||0)+1)}),r.map(m=>{const u=c(m.createdAt);let y=ft(m.createdAt)||m.version;if(u){const _=(f.get(u)||0)+1;f.set(u,_),(n.get(u)||0)>1&&(y=`${y}-${_}`)}return{value:`original:${m.version}`,label:y,url:m.url,source:"original",version:m.version}})})(),...l.slice().sort((n,f)=>n.version.localeCompare(f.version,void 0,{numeric:!0})).map(n=>({value:`stylized:${n.version}`,label:n.version,url:n.url,source:"stylized",version:n.version}))];D.innerHTML="";let p=d[0]?.value||"";if(e.activeAvatarSource==="stylized"){const n=e.avatarCurrentPromptVersion;n&&l.some(f=>f.version===n)?p=`stylized:${n}`:l[0]&&(p=`stylized:${l[0].version}`)}else e.activeOriginalVersion&&(p=`original:${e.activeOriginalVersion}`);d.forEach(n=>{const f=document.createElement("div");f.className="profile-avatar-tile-wrap";const c=document.createElement("button");c.type="button",c.className="profile-avatar-tile",c.setAttribute("role","option"),c.setAttribute("aria-selected",String(n.value===p));const m=n.value===p;m&&c.classList.add("is-active");const u=document.createElement("img");u.src=n.url,u.alt=n.label,u.className="profile-avatar-tile-image";const ne=document.createElement("span");if(ne.className="profile-avatar-tile-label",ne.textContent=n.label,c.append(u,ne),c.disabled=I||j||ee||te||!o,c.addEventListener("click",()=>{De(n.source,n.version)}),f.appendChild(c),!m){const y=document.createElement("button");y.type="button",y.className="profile-avatar-delete-btn",y.innerHTML='<span data-lucide="trash-2" aria-hidden="true"></span>',y.setAttribute("aria-label",`Delete ${n.label}`),y.title=`Delete ${n.label}`,y.disabled=c.disabled,y.addEventListener("click",_=>{_.preventDefault(),_.stopPropagation(),Re(n.source,n.version)}),f.appendChild(y)}D.appendChild(f)}),ot({icons:{Trash2:st},attrs:{stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",width:"14",height:"14"}})},De=async(e,a)=>{if(o){ee=!0,v();try{const r=await rt(e,a);if(o=r,H(r),g){const l=r.avatarUrl||L();g.innerHTML=`<img src="${l}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`}s(i,e==="original"?"Using original avatar":"Using stylized avatar","success")}catch(r){s(i,r instanceof Error?r.message:"Failed to select avatar","error")}finally{ee=!1,v()}}},Re=async(e,a)=>{if(o){te=!0,v();try{const r=await it(e,a);if(o=r,H(r),g){const l=r.avatarUrl||L();g.innerHTML=`<img src="${l}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`}s(i,"Profile photo deleted","success")}catch(r){s(i,r instanceof Error?r.message:"Failed to delete profile photo","error")}finally{te=!1,v()}}},qe=async()=>{const e=await Ze();if(o=e,se(e,B,M,C,E,T),H(e),g){const d=e.avatarUrl||L();g.innerHTML=`<img src="${d}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`;const p=e.displayName.trim()||e.email;g.title=p}Se&&(Se.textContent=e.email);const a=Array.isArray(e.groups)&&e.groups.some(d=>d.trim().toLowerCase()==="admin");Ve.hidden=!a,X.hidden=e.avatarStatus!=="failed",e.avatarAiEnabled||($.hidden=!0,k.hidden=!0,O.hidden=!0,he());const r=e.avatarAiEnabled===!0&&e.avatarCanSelectPromptVersion===!0&&Array.isArray(e.avatarAvailablePromptVersions)&&e.avatarAvailablePromptVersions.length>0;if(k.hidden=!r,r){const d=e.avatarAvailablePromptVersions||[],p=e.avatarDefaultPromptVersion||d[0]||"",n=new Map((e.avatarPromptVersions||[]).map(c=>[c.version,c]));b=d.includes(b)?b:p,w.options.length!==d.length?(w.innerHTML="",d.forEach(c=>{const m=n.get(c),u=document.createElement("option");u.value=c,u.textContent=m?`${c} — ${m.modelId}`:c,w.appendChild(u)})):Array.from(w.options).forEach(c=>{c.selected=c.value===b}),w.value=b}he(),ke(),S||ie();const l=we(e);return l&&s(i,l,e.avatarStatus==="failed"?"error":"info"),e.avatarOutdated&&s(i,"A new avatar style is available","info"),e},oe=()=>{z!==null&&(window.clearInterval(z),z=null)},be=()=>{z===null&&(z=window.setInterval(async()=>{if(!I){if(!o||o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"){oe();return}try{await qe(),o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"&&oe()}catch(e){oe(),s(i,e instanceof Error?e.message:"Failed to refresh profile","error")}}},3e3))},Le=async e=>{const a=pt(e);if(!a.ok){s(i,a.message,"error");return}I=!0,v(),s(i,"Uploading avatar...","info");try{const r=e.type||"image/jpeg",{uploadUrl:l,objectKey:d}=await et(r,e.size),p=await fetch(l,{method:"PUT",headers:{"Content-Type":r},body:e});if(!p.ok)throw new Error(`Avatar upload failed (${p.status})`);s(i,"Avatar queued","info");const n=await tt(d,k.hidden?void 0:b);o=n,se(n,B,M,C,E,T),H(n);const f=we(n);f?s(i,f,n.avatarStatus==="failed"?"error":"info"):s(i,"Avatar updated","success"),(n.avatarStatus==="pending"||n.avatarStatus==="processing")&&be()}catch(r){s(i,r instanceof Error?r.message:"Failed to upload avatar","error")}finally{I=!1,v()}},$e=async()=>{if(!(!o||Me||I||j)){j=!0,v(),s(i,"Avatar queued","info");try{const e=await at(k.hidden?void 0:b);o=e,se(e,B,M,C,E,T),H(e);const a=we(e);a&&s(i,a,e.avatarStatus==="failed"?"error":"info"),(e.avatarStatus==="pending"||e.avatarStatus==="processing")&&be()}catch(e){s(i,e instanceof Error?e.message:"Failed to regenerate avatar","error")}finally{j=!1,v()}}},Oe=async()=>{const e=B.value.trim().toLowerCase();if(!e){s(i,"Enter a valid new email address.","error");return}if(o&&e===o.email.toLowerCase()){s(i,"That is already your current email address.","info");return}try{G=!0,v();const a=await ae();await new Promise((r,l)=>{a.updateAttributes([{Name:"email",Value:e}],d=>{if(d){l(d);return}r()})}),s(i,"Verification code sent to the new email. Enter it below and click Verify email.","success"),S=!0,ie()}catch(a){s(i,a instanceof Error?a.message:"Failed to start email change","error")}finally{G=!1,v()}},je=async()=>{try{G=!0,v();const e=await ae();await new Promise((a,r)=>{e.getAttributeVerificationCode("email",{onSuccess:()=>a(),onFailure:l=>r(l),inputVerificationCode:()=>a()})}),s(i,"Verification code sent.","success")}catch(e){s(i,e instanceof Error?e.message:"Failed to resend code","error")}finally{G=!1,v()}},Ge=async()=>{const e=N.value.trim();if(!e){s(i,"Enter the email verification code.","error");return}try{ge=!0,v();const a=await ae();await new Promise((l,d)=>{a.verifyAttribute("email",e,{onSuccess:()=>l(),onFailure:p=>d(p)})});const r=await Ue(a);o=await Qe(r),se(o,B,M,C,E,T),N.value="",S=!1,ie(),s(i,"Email updated successfully.","success")}catch(a){s(i,a instanceof Error?a.message:"Failed to verify email","error")}finally{ge=!1,v()}},ze=async()=>{const e=J.value,a=Y.value,r=K.value;if(!e||!a||!r){s(i,"Enter current password, new password, and confirmation.","error");return}if(a!==r){s(i,"New password confirmation does not match.","error");return}try{ye=!0,v();const l=await ae();await new Promise((d,p)=>{l.changePassword(e,a,n=>{if(n){p(n);return}d()})}),J.value="",Y.value="",K.value="",s(i,"Password changed successfully.","success")}catch(l){s(i,l instanceof Error?l.message:"Failed to change password","error")}finally{ye=!1,v()}};s(i,"Loading profile...","info");try{const e=await qe();ie();const a=e.avatarStatus;a==="pending"||a==="processing"?be():e.avatarOutdated||s(i,"","info")}catch(e){if(e instanceof Ke&&e.status===404){s(i,"Profile record does not exist yet. Contact support if this persists.","info"),C.disabled=!0,E.disabled=!0,U.disabled=!0,P.disabled=!0,R.disabled=!0;return}s(i,e instanceof Error?e.message:"Failed to load profile","error"),C.disabled=!0,E.disabled=!0,U.disabled=!0,P.disabled=!0,R.disabled=!0;return}v(),Ae.addEventListener("submit",async e=>{e.preventDefault(),s(i,"First and last name are immutable after signup.","info")}),W.addEventListener("click",()=>{Oe()}),ce.addEventListener("click",()=>{Ge()}),ue.addEventListener("click",()=>{je()}),pe.addEventListener("click",()=>{ze()}),P.addEventListener("change",async()=>{const e=P.files?.[0];P.value="",e&&await Le(e)}),R.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){s(i,"Camera is not supported on this device","error");return}try{re(),x=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),A.srcObject=x,fe.hidden=!1,s(i,"Camera ready","info")}catch{s(i,"Camera access denied or unavailable","error")}}),ve.addEventListener("click",()=>{re(),s(i,"","info")}),me.addEventListener("click",async()=>{if(!x||A.videoWidth===0||A.videoHeight===0){s(i,"Camera is not ready","error");return}q.width=A.videoWidth,q.height=A.videoHeight;const e=q.getContext("2d");if(!e){s(i,"Failed to capture image","error");return}e.drawImage(A,0,0,q.width,q.height);const a=await new Promise(r=>{q.toBlob(r,"image/jpeg",.9)});if(re(),!a){s(i,"Failed to capture image","error");return}await Le(a)}),X.addEventListener("click",()=>{P.click()}),$.addEventListener("click",()=>{$e()}),w.addEventListener("change",()=>{b=w.value,he(),ke()}),window.addEventListener("beforeunload",()=>{oe(),re()},{once:!0})};export{bt as mountProfilePage};
