import{c as $,a as z}from"./AvatarBar-Dewq-eRA.js";import{g as G,A as K,f as X,j as Y,k as Z,l as J}from"./apiClient-B1tTESNQ.js";const Q=5*1024*1024,ee=()=>`
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
`,r=(e,s,m)=>{if(!s){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=s,e.dataset.tone=m},T=(e,s,m,B,h,A)=>{s.value=e.email,m.value=e.role,B.value=e.displayName,e.avatarUrl?(h.src=e.avatarUrl,h.hidden=!1,A.hidden=!0):(h.removeAttribute("src"),h.hidden=!0,A.hidden=!1)},te=e=>e.type.toLowerCase().startsWith("image/")?e.size<=0||e.size>Q?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},ie=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");e.innerHTML=ee();const s=e.querySelector("#profileAppBarContainer");if(!s)throw new Error("Missing profile app bar container");const m=G(),B=()=>m==="tutor"?"./tutor_avatar.png":"./student_avatar.png",h=()=>{const i="CognitoIdentityServiceProvider.3d5h2593ojr4l2g3hduj2f17lp.",o=[];for(let v=0;v<window.localStorage.length;v+=1){const C=window.localStorage.key(v);C&&C.startsWith(i)&&o.push(C)}o.forEach(v=>window.localStorage.removeItem(v))},A=$(),V=z({currentApp:"profile",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/";return}t==="worksheet-builder"&&(window.location.href="/worksheet-builder/")},rightContent:A,userRole:m});s.appendChild(V);const l=e.querySelector("#userAvatar"),p=e.querySelector("#userMenu"),j=e.querySelector("#userEmail"),D=e.querySelector("#signOutBtn"),R=e.querySelector("#profileBtn"),N=e.querySelector("#selectStudentBtn");N&&(N.hidden=!0),l&&(l.innerHTML=`<img src="${B()}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,l.addEventListener("click",t=>{if(t.stopPropagation(),!p)return;const i=p.hidden;p.hidden=!i,l.setAttribute("aria-expanded",String(!i))})),p&&p.addEventListener("click",t=>{t.stopPropagation()}),document.addEventListener("click",()=>{p&&(p.hidden=!0),l&&l.setAttribute("aria-expanded","false")}),R&&R.addEventListener("click",()=>{window.location.href="/profile"}),D&&D.addEventListener("click",()=>{h(),window.location.href="/#/auth"});const H=e.querySelector("#profileForm"),E=e.querySelector("#profileEmail"),k=e.querySelector("#profileRole"),d=e.querySelector("#profileDisplayName"),g=e.querySelector("#profileSaveBtn"),a=e.querySelector("#profileFeedback"),q=e.querySelector("#profileAvatarImage"),P=e.querySelector("#profileAvatarPlaceholder"),u=e.querySelector("#profileAvatarFileInput"),b=e.querySelector("#profileCameraStartBtn"),M=e.querySelector("#profileCameraPanel"),c=e.querySelector("#profileCameraVideo"),f=e.querySelector("#profileCameraCanvas"),x=e.querySelector("#profileCameraCaptureBtn"),I=e.querySelector("#profileCameraCancelBtn");if(!H||!E||!k||!d||!g||!a||!q||!P||!u||!b||!M||!c||!f||!x||!I)throw new Error("Missing profile UI elements");let n=null,w=!1,U=!1,y=null;const L=()=>{y&&(y.getTracks().forEach(t=>t.stop()),y=null),c.srcObject=null,M.hidden=!0},S=()=>{const t=w||U;g.disabled=t||!n,g.textContent=w?"Saving...":"Save",d.disabled=t||!n,u.disabled=t||!n,b.disabled=t||!n,x.disabled=t||!n,I.disabled=t||!n},W=async()=>{const t=await X();if(n=t,T(t,E,k,d,q,P),l){const i=t.avatarUrl||B();l.innerHTML=`<img src="${i}" alt="" aria-hidden="true" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`,l.title=t.email}j&&(j.textContent=t.email)},O=async t=>{const i=te(t);if(!i.ok){r(a,i.message,"error");return}U=!0,S(),r(a,"Uploading avatar...","info");try{const o=t.type||"image/jpeg",{uploadUrl:v,objectKey:C}=await Y(o,t.size),_=await fetch(v,{method:"PUT",headers:{"Content-Type":o},body:t});if(!_.ok)throw new Error(`Avatar upload failed (${_.status})`);r(a,"Generating stylised avatar...","info");const F=await Z(C);n=F,T(F,E,k,d,q,P),F.avatarGenerationStatus==="failed"?r(a,F.avatarGenerationMessage||"Original image saved, but stylised generation failed","error"):r(a,"Avatar updated","success")}catch(o){r(a,o instanceof Error?o.message:"Failed to upload avatar","error")}finally{U=!1,S()}};r(a,"Loading profile...","info");try{await W(),r(a,"","info")}catch(t){if(t instanceof K&&t.status===404){r(a,"Profile record does not exist yet. Contact support if this persists.","info"),d.disabled=!0,g.disabled=!0,u.disabled=!0,b.disabled=!0;return}r(a,t instanceof Error?t.message:"Failed to load profile","error"),d.disabled=!0,g.disabled=!0,u.disabled=!0,b.disabled=!0;return}S(),H.addEventListener("submit",async t=>{if(t.preventDefault(),!n||w||U)return;const i=d.value.trim();if(!i){r(a,"Display name is required","error");return}if(i.length>100){r(a,"Display name must be at most 100 characters","error");return}w=!0,S(),r(a,"","info");try{const o=await J(i);n=o,T(o,E,k,d,q,P),r(a,"Profile saved","success")}catch(o){r(a,o instanceof Error?o.message:"Failed to save profile","error")}finally{w=!1,S()}}),u.addEventListener("change",async()=>{const t=u.files?.[0];u.value="",t&&await O(t)}),b.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){r(a,"Camera is not supported on this device","error");return}try{L(),y=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),c.srcObject=y,M.hidden=!1,r(a,"Camera ready","info")}catch{r(a,"Camera access denied or unavailable","error")}}),I.addEventListener("click",()=>{L(),r(a,"","info")}),x.addEventListener("click",async()=>{if(!y||c.videoWidth===0||c.videoHeight===0){r(a,"Camera is not ready","error");return}f.width=c.videoWidth,f.height=c.videoHeight;const t=f.getContext("2d");if(!t){r(a,"Failed to capture image","error");return}t.drawImage(c,0,0,f.width,f.height);const i=await new Promise(o=>{f.toBlob(o,"image/jpeg",.9)});if(L(),!i){r(a,"Failed to capture image","error");return}await O(i)}),window.addEventListener("beforeunload",L,{once:!0})};export{ie as mountProfilePage};
