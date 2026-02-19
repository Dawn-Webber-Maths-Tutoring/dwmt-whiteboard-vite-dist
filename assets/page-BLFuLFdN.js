import{c as ee,a as te}from"./AvatarBar-Dewq-eRA.js";import{g as ae,A as re,f as ie,j as oe,k as ne,l as se,m as le}from"./apiClient-D_y2ZuY3.js";const de=5*1024*1024,ce=()=>`
  <div class="app profile-page">
    <div id="profileAppBarContainer"></div>
    <main class="profile-layout">
      <section class="profile-card" aria-live="polite">
        <h2>Profile</h2>
        <p class="profile-subtitle">Update your display name and profile photo.</p>

        <div class="profile-feedback" id="profileFeedback" hidden></div>

        <section class="profile-avatar-section" aria-label="Profile photo">
          <h3>Profile Photo</h3>
          <div class="profile-avatar-preview-wrap">
            <img id="profileAvatarImage" class="profile-avatar-preview" alt="Profile avatar" hidden />
            <div id="profileAvatarPlaceholder" class="profile-avatar-placeholder">No photo</div>
          </div>

          <div class="profile-avatar-actions">
            <label class="profile-upload-label" for="profileAvatarFileInput">Upload from device</label>
            <input id="profileAvatarFileInput" type="file" accept="image/*" />
            <button id="profileCameraStartBtn" type="button">Capture using camera</button>
            <button id="profileAvatarRetryBtn" type="button" hidden>Retry</button>
            <button id="profileAvatarRegenerateBtn" type="button" hidden>Regenerate</button>
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
          <label>
            Email
            <input id="profileEmail" type="email" readonly disabled />
          </label>

          <label>
            Role
            <input id="profileRole" type="text" readonly disabled />
          </label>

          <label>
            Display Name
            <input id="profileDisplayName" type="text" maxlength="100" required />
          </label>

          <button id="profileSaveBtn" type="submit">Save</button>
        </form>
      </section>
    </main>
  </div>
`,r=(t,d,y)=>{if(!d){t.hidden=!0,t.textContent="",t.dataset.tone="";return}t.hidden=!1,t.textContent=d,t.dataset.tone=y},j=(t,d,y,M,h,R)=>{d.value=t.email,y.value=t.role,M.value=t.displayName,t.avatarUrl?(h.src=t.avatarUrl,h.hidden=!1,R.hidden=!0):(h.removeAttribute("src"),h.hidden=!0,R.hidden=!1)},_=t=>{switch(t.avatarStatus){case"pending":return"Avatar queued";case"processing":return"Generating stylised avatar...";case"failed":return t.avatarError||"Avatar generation failed";default:return null}},ue=t=>t.type.toLowerCase().startsWith("image/")?t.size<=0||t.size>de?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},ve=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");t.innerHTML=ce();const d=t.querySelector("#profileAppBarContainer");if(!d)throw new Error("Missing profile app bar container");const y=ae(),M=()=>y==="tutor"?"./tutor_avatar.png":"./student_avatar.png",h=()=>{const i="CognitoIdentityServiceProvider.3d5h2593ojr4l2g3hduj2f17lp.",n=[];for(let m=0;m<window.localStorage.length;m+=1){const L=window.localStorage.key(m);L&&L.startsWith(i)&&n.push(L)}n.forEach(m=>window.localStorage.removeItem(m))},R=ee(),J=te({currentApp:"profile",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/";return}e==="worksheet-builder"&&(window.location.href="/worksheet-builder/")},rightContent:R,userRole:y});d.appendChild(J);const s=t.querySelector("#userAvatar"),p=t.querySelector("#userMenu"),V=t.querySelector("#userEmail"),W=t.querySelector("#signOutBtn"),$=t.querySelector("#profileBtn"),z=t.querySelector("#selectStudentBtn");z&&(z.hidden=!0),s&&(s.innerHTML=`<img src="${M()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,s.addEventListener("click",e=>{if(e.stopPropagation(),!p)return;const i=p.hidden;p.hidden=!i,s.setAttribute("aria-expanded",String(!i))})),p&&p.addEventListener("click",e=>{e.stopPropagation()}),document.addEventListener("click",()=>{p&&(p.hidden=!0),s&&s.setAttribute("aria-expanded","false")}),$&&$.addEventListener("click",()=>{window.location.href="/profile"}),W&&W.addEventListener("click",()=>{h(),window.location.href="/#/auth"});const G=t.querySelector("#profileForm"),C=t.querySelector("#profileEmail"),A=t.querySelector("#profileRole"),l=t.querySelector("#profileDisplayName"),B=t.querySelector("#profileSaveBtn"),a=t.querySelector("#profileFeedback"),E=t.querySelector("#profileAvatarImage"),q=t.querySelector("#profileAvatarPlaceholder"),c=t.querySelector("#profileAvatarFileInput"),k=t.querySelector("#profileCameraStartBtn"),U=t.querySelector("#profileAvatarRetryBtn"),F=t.querySelector("#profileAvatarRegenerateBtn"),D=t.querySelector("#profileCameraPanel"),u=t.querySelector("#profileCameraVideo"),f=t.querySelector("#profileCameraCanvas"),N=t.querySelector("#profileCameraCaptureBtn"),O=t.querySelector("#profileCameraCancelBtn");if(!G||!C||!A||!l||!B||!a||!E||!q||!c||!k||!U||!F||!D||!u||!f||!N||!O)throw new Error("Missing profile UI elements");let o=null,v=!1,b=!1,I=!1,S=null,P=null;const x=()=>{S&&(S.getTracks().forEach(e=>e.stop()),S=null),u.srcObject=null,D.hidden=!0},g=()=>{const e=v||b||I;B.disabled=e||!o,B.textContent=v?"Saving...":"Save",l.disabled=e||!o,c.disabled=e||!o,k.disabled=e||!o,N.disabled=e||!o,O.disabled=e||!o,U.disabled=e||!o,F.disabled=e||!o},K=async()=>{const e=await ie();if(o=e,j(e,C,A,l,E,q),s){const n=e.avatarUrl||M();s.innerHTML=`<img src="${n}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,s.title=e.email}V&&(V.textContent=e.email),U.hidden=e.avatarStatus!=="failed",F.hidden=!e.avatarOutdated;const i=_(e);return i&&r(a,i,e.avatarStatus==="failed"?"error":"info"),e.avatarOutdated&&r(a,"A new avatar style is available","info"),e},T=()=>{P!==null&&(window.clearInterval(P),P=null)},H=()=>{P===null&&(P=window.setInterval(async()=>{if(!(v||b)){if(!o||o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"){T();return}try{await K(),o.avatarStatus!=="pending"&&o.avatarStatus!=="processing"&&T()}catch(e){T(),r(a,e instanceof Error?e.message:"Failed to refresh profile","error")}}},3e3))},X=async e=>{const i=ue(e);if(!i.ok){r(a,i.message,"error");return}b=!0,g(),r(a,"Uploading avatar...","info");try{const n=e.type||"image/jpeg",{uploadUrl:m,objectKey:L}=await oe(n,e.size),Y=await fetch(m,{method:"PUT",headers:{"Content-Type":n},body:e});if(!Y.ok)throw new Error(`Avatar upload failed (${Y.status})`);r(a,"Avatar queued","info");const w=await ne(L);o=w,j(w,C,A,l,E,q);const Z=_(w);Z?r(a,Z,w.avatarStatus==="failed"?"error":"info"):r(a,"Avatar updated","success"),(w.avatarStatus==="pending"||w.avatarStatus==="processing")&&H()}catch(n){r(a,n instanceof Error?n.message:"Failed to upload avatar","error")}finally{b=!1,g()}},Q=async()=>{if(!(!o||v||b||I)){I=!0,g(),r(a,"Avatar queued","info");try{const e=await se();o=e,j(e,C,A,l,E,q);const i=_(e);i&&r(a,i,e.avatarStatus==="failed"?"error":"info"),(e.avatarStatus==="pending"||e.avatarStatus==="processing")&&H()}catch(e){r(a,e instanceof Error?e.message:"Failed to regenerate avatar","error")}finally{I=!1,g()}}};r(a,"Loading profile...","info");try{const i=(await K()).avatarStatus;(i==="pending"||i==="processing")&&H()}catch(e){if(e instanceof re&&e.status===404){r(a,"Profile record does not exist yet. Contact support if this persists.","info"),l.disabled=!0,B.disabled=!0,c.disabled=!0,k.disabled=!0;return}r(a,e instanceof Error?e.message:"Failed to load profile","error"),l.disabled=!0,B.disabled=!0,c.disabled=!0,k.disabled=!0;return}g(),G.addEventListener("submit",async e=>{if(e.preventDefault(),!o||v||b)return;const i=l.value.trim();if(!i){r(a,"Display name is required","error");return}if(i.length>100){r(a,"Display name must be at most 100 characters","error");return}v=!0,g(),r(a,"","info");try{const n=await le(i);o=n,j(n,C,A,l,E,q),r(a,"Profile saved","success")}catch(n){r(a,n instanceof Error?n.message:"Failed to save profile","error")}finally{v=!1,g()}}),c.addEventListener("change",async()=>{const e=c.files?.[0];c.value="",e&&await X(e)}),k.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){r(a,"Camera is not supported on this device","error");return}try{x(),S=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),u.srcObject=S,D.hidden=!1,r(a,"Camera ready","info")}catch{r(a,"Camera access denied or unavailable","error")}}),O.addEventListener("click",()=>{x(),r(a,"","info")}),N.addEventListener("click",async()=>{if(!S||u.videoWidth===0||u.videoHeight===0){r(a,"Camera is not ready","error");return}f.width=u.videoWidth,f.height=u.videoHeight;const e=f.getContext("2d");if(!e){r(a,"Failed to capture image","error");return}e.drawImage(u,0,0,f.width,f.height);const i=await new Promise(n=>{f.toBlob(n,"image/jpeg",.9)});if(x(),!i){r(a,"Failed to capture image","error");return}await X(i)}),U.addEventListener("click",()=>{c.click()}),F.addEventListener("click",()=>{Q()}),window.addEventListener("beforeunload",()=>{T(),x()},{once:!0})};export{ve as mountProfilePage};
