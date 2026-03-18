const g=()=>{let o=document.querySelector("#appDialogRoot");return o||(o=document.createElement("div"),o.id="appDialogRoot",document.body.appendChild(o),o)},s=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#39;"),d=({title:o,message:t,body:e,buttons:l})=>{const n=g();return n.innerHTML=`
    <div class="app-dialog-backdrop">
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="appDialogTitle">
        <header class="app-dialog-header">
          <div>
            <h3 id="appDialogTitle">${s(o)}</h3>
            ${t?`<p class="app-dialog-message">${s(t)}</p>`:""}
          </div>
        </header>
        ${e??""}
        <div class="app-dialog-actions">
          ${l.map(a=>`
                <button
                  type="button"
                  class="app-dialog-btn ${a.tone==="danger"?"is-danger":a.id==="confirm"?"is-primary":""}"
                  data-dialog-button="${a.id}"
                >
                  ${s(a.label)}
                </button>
              `).join("")}
        </div>
      </div>
    </div>
  `,n},m=()=>{const o=document.querySelector("#appDialogRoot");o&&(o.innerHTML="")},p=(o,t)=>new Promise(e=>{const l=o.querySelector(".app-dialog-backdrop"),n=i=>{m(),e(i)};o.addEventListener("click",i=>{const r=i.target,c=r?.closest("[data-dialog-button]")?.dataset.dialogButton;if(c){n(c);return}r===l&&n(null)},{once:!1});const a=i=>{i.key==="Escape"&&(document.removeEventListener("keydown",a),n(null))};document.addEventListener("keydown",a,{once:!1}),t?.()}),y=async(o,t)=>{const e=d({title:o,message:t,buttons:[{id:"ok",label:"OK",tone:"default"}]});await p(e)},v=async({title:o,message:t,confirmLabel:e="Confirm",cancelLabel:l="Cancel",confirmTone:n="default"})=>{const a=d({title:o,message:t,buttons:[{id:"cancel",label:l},{id:"confirm",label:e,tone:n}]});return await p(a)==="confirm"},D=async({title:o,message:t,choices:e})=>{const l=d({title:o,message:t,buttons:e});return await p(l)},h=async({title:o,message:t,initialValue:e="",confirmLabel:l="Save",cancelLabel:n="Cancel",placeholder:a=""})=>{const i=`
    <label class="app-dialog-field">
      <input
        id="appDialogPromptInput"
        class="app-dialog-input"
        type="text"
        value="${s(e)}"
        placeholder="${s(a)}"
      />
    </label>
  `,r=d({title:o,message:t,body:i,buttons:[{id:"cancel",label:n},{id:"confirm",label:l,tone:"default"}]}),c=r.querySelector("#appDialogPromptInput");return await p(r,()=>{c?.focus(),c?.select(),c?.addEventListener("keydown",u=>{u.key==="Enter"&&r.querySelector('[data-dialog-button="confirm"]')?.click()})})!=="confirm"?null:c?.value??null};export{v as a,h as b,D as c,y as s};
