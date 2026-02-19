import{c as v}from"./AppBar-CbjOLueh.js";import{g as S,i as w,A as g,j as q}from"./apiClient-DaXPYeHC.js";const E=()=>`
  <div class="app profile-page">
    <div id="profileAppBarContainer"></div>
    <main class="profile-layout">
      <section class="profile-card" aria-live="polite">
        <h2>Profile</h2>
        <p class="profile-subtitle">Update your display name.</p>

        <div class="profile-feedback" id="profileFeedback" hidden></div>

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
`,o=(e,a,l)=>{if(!a){e.hidden=!0,e.textContent="",e.dataset.tone="";return}e.hidden=!1,e.textContent=a,e.dataset.tone=l},h=(e,a,l,f)=>{a.value=e.email,l.value=e.role,f.value=e.displayName},F=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");e.innerHTML=E();const a=e.querySelector("#profileAppBarContainer");if(!a)throw new Error("Missing profile app bar container");const l=S(),f=v({currentApp:"profile",onAppChange:r=>{if(r==="whiteboard"){window.location.pathname="/";return}r==="worksheet-builder"&&(window.location.pathname="/worksheet-builder/")},userRole:l});a.appendChild(f);const y=e.querySelector("#profileForm"),c=e.querySelector("#profileEmail"),u=e.querySelector("#profileRole"),i=e.querySelector("#profileDisplayName"),n=e.querySelector("#profileSaveBtn"),t=e.querySelector("#profileFeedback");if(!y||!c||!u||!i||!n||!t)throw new Error("Missing profile UI elements");let s=null,b=!1;const d=r=>{b=r,n.disabled=r||!s,n.textContent=r?"Saving...":"Save",i.disabled=r||!s};d(!1),o(t,"Loading profile...","info");try{const r=await w();s=r,h(r,c,u,i),o(t,"","info"),d(!1)}catch(r){if(r instanceof g&&r.status===404){o(t,"Profile record does not exist yet. Contact support if this persists.","info"),i.disabled=!0,n.disabled=!0;return}o(t,r instanceof Error?r.message:"Failed to load profile","error"),i.disabled=!0,n.disabled=!0;return}y.addEventListener("submit",async r=>{if(r.preventDefault(),!s||b)return;const m=i.value.trim();if(!m){o(t,"Display name is required","error");return}if(m.length>100){o(t,"Display name must be at most 100 characters","error");return}d(!0),o(t,"","info");try{const p=await q(m);s=p,h(p,c,u,i),o(t,"Profile saved","success")}catch(p){o(t,p instanceof Error?p.message:"Failed to save profile","error")}finally{d(!1)}})};export{F as mountProfilePage};
