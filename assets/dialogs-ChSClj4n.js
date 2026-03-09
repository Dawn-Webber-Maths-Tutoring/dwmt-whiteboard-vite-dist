const g=()=>{let e=document.querySelector("#appDialogRoot");return e||(e=document.createElement("div"),e.id="appDialogRoot",document.body.appendChild(e),e)},s=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#39;"),d=({title:e,message:t,body:n,buttons:i})=>{const a=g();return a.innerHTML=`
    <div class="app-dialog-backdrop">
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="appDialogTitle">
        <header class="app-dialog-header">
          <div>
            <h3 id="appDialogTitle">${s(e)}</h3>
            ${t?`<p class="app-dialog-message">${s(t)}</p>`:""}
          </div>
        </header>
        ${n??""}
        <div class="app-dialog-actions">
          ${i.map(o=>`
                <button
                  type="button"
                  class="app-dialog-btn ${o.tone==="danger"?"is-danger":o.id==="confirm"?"is-primary":""}"
                  data-dialog-button="${o.id}"
                >
                  ${s(o.label)}
                </button>
              `).join("")}
        </div>
      </div>
    </div>
  `,a},m=()=>{const e=document.querySelector("#appDialogRoot");e&&(e.innerHTML="")},p=(e,t)=>new Promise(n=>{const i=e.querySelector(".app-dialog-backdrop"),a=l=>{m(),n(l)};e.addEventListener("click",l=>{const c=l.target,r=c?.closest("[data-dialog-button]")?.dataset.dialogButton;if(r){a(r);return}c===i&&a(null)},{once:!1});const o=l=>{l.key==="Escape"&&(document.removeEventListener("keydown",o),a(null))};document.addEventListener("keydown",o,{once:!1}),t?.()}),y=async(e,t)=>{const n=d({title:e,message:t,buttons:[{id:"ok",label:"OK",tone:"default"}]});await p(n)},v=async({title:e,message:t,confirmLabel:n="Confirm",cancelLabel:i="Cancel",confirmTone:a="default"})=>{const o=d({title:e,message:t,buttons:[{id:"cancel",label:i},{id:"confirm",label:n,tone:a}]});return await p(o)==="confirm"},D=async({title:e,message:t,initialValue:n="",confirmLabel:i="Save",cancelLabel:a="Cancel",placeholder:o=""})=>{const l=`
    <label class="app-dialog-field">
      <input
        id="appDialogPromptInput"
        class="app-dialog-input"
        type="text"
        value="${s(n)}"
        placeholder="${s(o)}"
      />
    </label>
  `,c=d({title:e,message:t,body:l,buttons:[{id:"cancel",label:a},{id:"confirm",label:i,tone:"default"}]}),r=c.querySelector("#appDialogPromptInput");return await p(c,()=>{r?.focus(),r?.select(),r?.addEventListener("keydown",u=>{u.key==="Enter"&&c.querySelector('[data-dialog-button="confirm"]')?.click()})})!=="confirm"?null:r?.value??null};export{D as a,v as b,y as s};
