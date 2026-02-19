import{c as D}from"./AppBar-B0XaHAjb.js";import{g as R,A as N,i as j,j as O,k as V,l as z}from"./apiClient-KJ8TVDgt.js";const G=5*1024*1024,H=()=>`
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
`,t=(e,n,m)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=m},F=(e,n,m,q,c,p)=>{n.value=e.email,m.value=e.role,q.value=e.displayName,e.avatarUrl?(c.src=e.avatarUrl,c.hidden=!1,p.hidden=!0):(c.removeAttribute("src"),c.hidden=!0,p.hidden=!1)},W=e=>e.type.toLowerCase().startsWith("image/")?e.size<=0||e.size>G?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},X=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");e.innerHTML=H();const n=e.querySelector("#profileAppBarContainer");if(!n)throw new Error("Missing profile app bar container");const m=R(),q=D({currentApp:"profile",onAppChange:a=>{if(a==="whiteboard"){window.location.pathname="/";return}a==="worksheet-builder"&&(window.location.pathname="/worksheet-builder/")},userRole:m});n.appendChild(q);const c=e.querySelector("#profileForm"),p=e.querySelector("#profileEmail"),C=e.querySelector("#profileRole"),s=e.querySelector("#profileDisplayName"),y=e.querySelector("#profileSaveBtn"),r=e.querySelector("#profileFeedback"),w=e.querySelector("#profileAvatarImage"),S=e.querySelector("#profileAvatarPlaceholder"),f=e.querySelector("#profileAvatarFileInput"),h=e.querySelector("#profileCameraStartBtn"),E=e.querySelector("#profileCameraPanel"),d=e.querySelector("#profileCameraVideo"),u=e.querySelector("#profileCameraCanvas"),k=e.querySelector("#profileCameraCaptureBtn"),U=e.querySelector("#profileCameraCancelBtn");if(!c||!p||!C||!s||!y||!r||!w||!S||!f||!h||!E||!d||!u||!k||!U)throw new Error("Missing profile UI elements");let o=null,b=!1,A=!1,v=null;const B=()=>{v&&(v.getTracks().forEach(a=>a.stop()),v=null),d.srcObject=null,E.hidden=!0},g=()=>{const a=b||A;y.disabled=a||!o,y.textContent=b?"Saving...":"Save",s.disabled=a||!o,f.disabled=a||!o,h.disabled=a||!o,k.disabled=a||!o,U.disabled=a||!o},I=async()=>{const a=await j();o=a,F(a,p,C,s,w,S)},M=async a=>{const l=W(a);if(!l.ok){t(r,l.message,"error");return}A=!0,g(),t(r,"Uploading avatar...","info");try{const i=a.type||"image/jpeg",{uploadUrl:L,objectKey:T}=await O(i,a.size),x=await fetch(L,{method:"PUT",headers:{"Content-Type":i},body:a});if(!x.ok)throw new Error(`Avatar upload failed (${x.status})`);t(r,"Generating stylised avatar...","info");const P=await V(T);o=P,F(P,p,C,s,w,S),P.avatarGenerationStatus==="failed"?t(r,P.avatarGenerationMessage||"Original image saved, but stylised generation failed","error"):t(r,"Avatar updated","success")}catch(i){t(r,i instanceof Error?i.message:"Failed to upload avatar","error")}finally{A=!1,g()}};t(r,"Loading profile...","info");try{await I(),t(r,"","info")}catch(a){if(a instanceof N&&a.status===404){t(r,"Profile record does not exist yet. Contact support if this persists.","info"),s.disabled=!0,y.disabled=!0,f.disabled=!0,h.disabled=!0;return}t(r,a instanceof Error?a.message:"Failed to load profile","error"),s.disabled=!0,y.disabled=!0,f.disabled=!0,h.disabled=!0;return}g(),c.addEventListener("submit",async a=>{if(a.preventDefault(),!o||b||A)return;const l=s.value.trim();if(!l){t(r,"Display name is required","error");return}if(l.length>100){t(r,"Display name must be at most 100 characters","error");return}b=!0,g(),t(r,"","info");try{const i=await z(l);o=i,F(i,p,C,s,w,S),t(r,"Profile saved","success")}catch(i){t(r,i instanceof Error?i.message:"Failed to save profile","error")}finally{b=!1,g()}}),f.addEventListener("change",async()=>{const a=f.files?.[0];f.value="",a&&await M(a)}),h.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){t(r,"Camera is not supported on this device","error");return}try{B(),v=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),d.srcObject=v,E.hidden=!1,t(r,"Camera ready","info")}catch{t(r,"Camera access denied or unavailable","error")}}),U.addEventListener("click",()=>{B(),t(r,"","info")}),k.addEventListener("click",async()=>{if(!v||d.videoWidth===0||d.videoHeight===0){t(r,"Camera is not ready","error");return}u.width=d.videoWidth,u.height=d.videoHeight;const a=u.getContext("2d");if(!a){t(r,"Failed to capture image","error");return}a.drawImage(d,0,0,u.width,u.height);const l=await new Promise(i=>{u.toBlob(i,"image/jpeg",.9)});if(B(),!l){t(r,"Failed to capture image","error");return}await M(l)}),window.addEventListener("beforeunload",B,{once:!0})};export{X as mountProfilePage};
