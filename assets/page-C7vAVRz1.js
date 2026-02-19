import{c as T}from"./AppBar-B0XaHAjb.js";import{g as D,A as R,i as N,j,k as V,l as z}from"./apiClient-CELJrUXt.js";const H=5*1024*1024,O=()=>`
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
`,t=(e,n,v)=>{if(!n){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=n,e.dataset.tone=v},I=(e,n,v,S,d,f)=>{n.value=e.email,v.value=e.role,S.value=e.displayName,e.avatarUrl?(d.src=e.avatarUrl,d.hidden=!1,f.hidden=!0):(d.removeAttribute("src"),d.hidden=!0,f.hidden=!1)},W=e=>e.type.toLowerCase().startsWith("image/")?e.size<=0||e.size>H?{ok:!1,message:"Avatar file must be 5MB or smaller"}:{ok:!0}:{ok:!1,message:"Only image files are allowed"},X=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");e.innerHTML=O();const n=e.querySelector("#profileAppBarContainer");if(!n)throw new Error("Missing profile app bar container");const v=D(),S=T({currentApp:"profile",onAppChange:a=>{if(a==="whiteboard"){window.location.pathname="/";return}a==="worksheet-builder"&&(window.location.pathname="/worksheet-builder/")},userRole:v});n.appendChild(S);const d=e.querySelector("#profileForm"),f=e.querySelector("#profileEmail"),A=e.querySelector("#profileRole"),c=e.querySelector("#profileDisplayName"),y=e.querySelector("#profileSaveBtn"),r=e.querySelector("#profileFeedback"),B=e.querySelector("#profileAvatarImage"),P=e.querySelector("#profileAvatarPlaceholder"),p=e.querySelector("#profileAvatarFileInput"),h=e.querySelector("#profileCameraStartBtn"),q=e.querySelector("#profileCameraPanel"),s=e.querySelector("#profileCameraVideo"),u=e.querySelector("#profileCameraCanvas"),E=e.querySelector("#profileCameraCaptureBtn"),k=e.querySelector("#profileCameraCancelBtn");if(!d||!f||!A||!c||!y||!r||!B||!P||!p||!h||!q||!s||!u||!E||!k)throw new Error("Missing profile UI elements");let o=null,b=!1,C=!1,m=null;const w=()=>{m&&(m.getTracks().forEach(a=>a.stop()),m=null),s.srcObject=null,q.hidden=!0},g=()=>{const a=b||C;y.disabled=a||!o,y.textContent=b?"Saving...":"Save",c.disabled=a||!o,p.disabled=a||!o,h.disabled=a||!o,E.disabled=a||!o,k.disabled=a||!o},U=async()=>{const a=await N();o=a,I(a,f,A,c,B,P)},F=async a=>{const l=W(a);if(!l.ok){t(r,l.message,"error");return}C=!0,g(),t(r,"Uploading avatar...","info");try{const i=a.type||"image/jpeg",{uploadUrl:M,objectKey:L}=await j(i,a.size),x=await fetch(M,{method:"PUT",headers:{"Content-Type":i},body:a});if(!x.ok)throw new Error(`Avatar upload failed (${x.status})`);await V(L),await U(),t(r,"Avatar updated","success")}catch(i){t(r,i instanceof Error?i.message:"Failed to upload avatar","error")}finally{C=!1,g()}};t(r,"Loading profile...","info");try{await U(),t(r,"","info")}catch(a){if(a instanceof R&&a.status===404){t(r,"Profile record does not exist yet. Contact support if this persists.","info"),c.disabled=!0,y.disabled=!0,p.disabled=!0,h.disabled=!0;return}t(r,a instanceof Error?a.message:"Failed to load profile","error"),c.disabled=!0,y.disabled=!0,p.disabled=!0,h.disabled=!0;return}g(),d.addEventListener("submit",async a=>{if(a.preventDefault(),!o||b||C)return;const l=c.value.trim();if(!l){t(r,"Display name is required","error");return}if(l.length>100){t(r,"Display name must be at most 100 characters","error");return}b=!0,g(),t(r,"","info");try{const i=await z(l);o=i,I(i,f,A,c,B,P),t(r,"Profile saved","success")}catch(i){t(r,i instanceof Error?i.message:"Failed to save profile","error")}finally{b=!1,g()}}),p.addEventListener("change",async()=>{const a=p.files?.[0];p.value="",a&&await F(a)}),h.addEventListener("click",async()=>{if(!navigator.mediaDevices?.getUserMedia){t(r,"Camera is not supported on this device","error");return}try{w(),m=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!1}),s.srcObject=m,q.hidden=!1,t(r,"Camera ready","info")}catch{t(r,"Camera access denied or unavailable","error")}}),k.addEventListener("click",()=>{w(),t(r,"","info")}),E.addEventListener("click",async()=>{if(!m||s.videoWidth===0||s.videoHeight===0){t(r,"Camera is not ready","error");return}u.width=s.videoWidth,u.height=s.videoHeight;const a=u.getContext("2d");if(!a){t(r,"Failed to capture image","error");return}a.drawImage(s,0,0,u.width,u.height);const l=await new Promise(i=>{u.toBlob(i,"image/jpeg",.9)});if(w(),!l){t(r,"Failed to capture image","error");return}await F(l)}),window.addEventListener("beforeunload",w,{once:!0})};export{X as mountProfilePage};
