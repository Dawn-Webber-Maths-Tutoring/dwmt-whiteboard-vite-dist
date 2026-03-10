import{o as ft,p as vt,b as bt,m as yt,e as wt,j as Tt,i as St,k as Mt,l as Ct,q as At,a4 as It,a5 as Nt,a6 as Lt,a7 as at,x as $t,z as Pt,a8 as kt,a9 as Et,aa as Bt,ab as U,ac as Rt}from"./UserMenu-Cc6nLCNv.js";import{a as nt,s as qt,b as Ut}from"./dialogs-ChSClj4n.js";import{g as Ft,s as xt}from"./authSession-CVg4y6sw.js";const rt="dwmt-notes-sort",Dt=()=>`
  <div class="app notes-page">
    <div id="notesAppBarContainer"></div>
    <main class="notes-layout">
      <section class="notes-card">
        <header class="notes-header">
          <div>
            <h2>Notes</h2>
            <p>Browse, filter, and open your notes in Whiteboard.</p>
          </div>
          <div class="notes-header-actions">
            <button id="notesRefreshBtn" type="button" class="notes-btn notes-btn-secondary">Refresh</button>
            <button id="notesNewBtn" type="button" class="notes-btn">New note</button>
          </div>
        </header>
        <div class="notes-controls">
          <div class="notes-sort-control">
            <label for="notesSortSelect">Sort</label>
            <select id="notesSortSelect">
              <option value="updated-desc">Date updated: newest</option>
              <option value="created-desc">Date created: newest</option>
              <option value="created-asc">Date created: oldest</option>
              <option value="title-asc">Title: A-Z</option>
            </select>
          </div>
          <button id="notesManageTagsBtn" type="button" class="notes-btn notes-btn-secondary">Manage tags</button>
        </div>
        <div id="notesStatus" class="notes-status" hidden></div>
        <div class="notes-tags-card">
          <div class="notes-tags-header">
            <h3>Tags</h3>
            <p>Filter notes by toggling your personal tags.</p>
          </div>
          <div id="notesTagFilters" class="notes-tag-filters"></div>
        </div>
        <div id="notesSummary" class="notes-summary"></div>
        <div id="notesList" class="notes-list"></div>
      </section>
    </main>
    <div id="notesTagModal" class="notes-modal-backdrop" hidden>
      <div class="notes-modal" role="dialog" aria-modal="true" aria-labelledby="notesTagModalTitle">
        <header class="notes-modal-header">
          <div>
            <h3 id="notesTagModalTitle">Manage tags</h3>
            <p>Create, rename, archive, restore, and delete your personal tags.</p>
          </div>
          <button id="notesTagModalClose" type="button" class="notes-modal-close" aria-label="Close tag manager">×</button>
        </header>
        <div id="notesTagModalStatus" class="notes-status" hidden></div>
        <form id="notesTagCreateForm" class="notes-tag-create-form">
          <label class="notes-modal-label" for="notesTagCreateInput">New tag</label>
          <div class="notes-tag-create-row">
            <input id="notesTagCreateInput" class="notes-modal-input" type="text" maxlength="60" placeholder="e.g. Memo, Algebra, Homework" />
            <button type="submit" class="notes-btn">Add tag</button>
          </div>
        </form>
        <div id="notesTagModalList" class="notes-tag-modal-list"></div>
      </div>
    </div>
    <div id="noteAssignTagsModal" class="notes-modal-backdrop" hidden>
      <div class="notes-modal" role="dialog" aria-modal="true" aria-labelledby="noteAssignTagsModalTitle">
        <header class="notes-modal-header">
          <div>
            <h3 id="noteAssignTagsModalTitle">Assign tags</h3>
            <p id="noteAssignTagsModalSubtitle">Choose tags for this note.</p>
          </div>
          <button id="noteAssignTagsModalClose" type="button" class="notes-modal-close" aria-label="Close note tag assignment">×</button>
        </header>
        <div id="noteAssignTagsModalStatus" class="notes-status" hidden></div>
        <div id="noteAssignTagsModalList" class="notes-tag-assignment-list"></div>
        <div class="notes-modal-actions">
          <button id="noteAssignTagsCancel" type="button" class="notes-btn notes-btn-secondary">Cancel</button>
          <button id="noteAssignTagsSave" type="button" class="notes-btn">Save tags</button>
        </div>
      </div>
    </div>
  </div>
`,B=o=>{if(!o)return"—";const r=new Date(o);return Number.isNaN(r.getTime())?o:r.toLocaleString()},s=(o,r,c)=>{if(!r){o.hidden=!0,o.textContent="",o.setAttribute("data-tone","");return}o.hidden=!1,o.textContent=r,o.setAttribute("data-tone",c)},Ht=o=>{try{localStorage.setItem(rt,o)}catch{}},Kt=()=>{try{const o=localStorage.getItem(rt);if(o==="updated-desc"||o==="created-desc"||o==="created-asc"||o==="title-asc")return o}catch{}return"updated-desc"},st=o=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",o),r.toString()},x="promotionPackage",Ot=()=>{const r=new URLSearchParams(window.location.search).get(x);return r?.trim()?r.trim():null},F=()=>{const o=new URL(window.location.href);o.searchParams.delete(x),window.history.replaceState({},"",o.toString())},jt=async o=>{const r=await fetch(o,{cache:"no-store"});if(!r.ok)throw new Error(`Failed to load promotion package (${r.status})`);const c=await r.json();if(c.kind!=="note"||typeof c.promotionKey!="string"||typeof c.title!="string"||typeof c.pageCount!="number"||!Array.isArray(c.tagNames)||typeof c.snapshotUrl!="string")throw new Error("Promotion package was incomplete");return c},Yt=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const r=ft();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const c=vt().map(t=>t.trim().toLowerCase()),it=c.includes("admin"),D=c.includes("mailbox");o.innerHTML=Dt(),o.appendChild(bt()),yt(),wt();const H=o.querySelector("#notesAppBarContainer");if(!H)throw new Error("Missing notes app bar container");const dt=Tt();let K=0;if(D)try{K=await St()}catch(t){console.warn("Failed to load inbox unread count",t)}const ct=Mt({currentApp:"notes",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:dt,userRole:r,isAdmin:it,hasMailboxAccess:D,unreadInboxCount:K});H.appendChild(ct),await Ct({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await xt(),window.location.href="/auth"}});const i=o.querySelector("#notesStatus"),C=o.querySelector("#notesTagFilters"),O=o.querySelector("#notesSummary"),A=o.querySelector("#notesList"),j=o.querySelector("#notesRefreshBtn"),G=o.querySelector("#notesNewBtn"),V=o.querySelector("#notesManageTagsBtn"),I=o.querySelector("#notesSortSelect"),w=o.querySelector("#notesTagModal"),_=o.querySelector("#notesTagModalClose"),N=o.querySelector("#notesTagModalList"),u=o.querySelector("#notesTagModalStatus"),L=o.querySelector("#notesTagCreateForm"),R=o.querySelector("#notesTagCreateInput"),T=o.querySelector("#noteAssignTagsModal"),z=o.querySelector("#noteAssignTagsModalClose"),f=o.querySelector("#noteAssignTagsModalStatus"),W=o.querySelector("#noteAssignTagsModalSubtitle"),$=o.querySelector("#noteAssignTagsModalList"),Y=o.querySelector("#noteAssignTagsCancel"),Z=o.querySelector("#noteAssignTagsSave");if(!i||!C||!O||!A||!j||!G||!V||!I||!w||!_||!N||!u||!L||!R||!T||!z||!f||!W||!$||!Y||!Z)throw new Error("Missing notes page controls");let S=[],p=[];const g=new Set;let M=null;const m=new Set;let v=Kt();const b=At();I.value=v;const lt=t=>{const a=[...t];return a.sort((e,n)=>v==="title-asc"?e.title.localeCompare(n.title):v==="created-asc"?(e.createdAt||"").localeCompare(n.createdAt||""):v==="created-desc"?(n.createdAt||"").localeCompare(e.createdAt||""):(n.updatedAt||"").localeCompare(e.updatedAt||"")),a},gt=()=>{const t=S.filter(a=>{if(g.size===0)return!0;for(const e of g)if(!a.tagIds.includes(e))return!1;return!0});return lt(t)},J=()=>{const t=p.filter(e=>!e.archived||g.has(e.tagId));if(t.length===0){C.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}C.innerHTML="";const a=document.createDocumentFragment();t.forEach(e=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",g.has(e.tagId)),n.textContent=e.archived?`${e.name} (archived)`:e.name,n.addEventListener("click",()=>{g.has(e.tagId)?g.delete(e.tagId):g.add(e.tagId),J(),q()}),a.appendChild(n)}),C.appendChild(a)},q=()=>{const t=gt();if(O.textContent=`${t.length} note${t.length===1?"":"s"} shown`,t.length===0){A.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const a=new Map(p.map(e=>[e.tagId,e.name]));A.innerHTML=t.map(e=>{const n=e.tagIds.map(d=>a.get(d)).filter(d=>!!d);return`
          <article class="notes-item">
            <div class="notes-item-main">
              <div class="notes-item-title">${e.title}</div>
              <div class="notes-item-meta">
                <span>${e.pageCount} page${e.pageCount===1?"":"s"}</span>
                <span>${e.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${B(e.createdAt)}</span>
                <span>Updated ${B(e.updatedAt)}</span>
              </div>
              ${n.length>0?`<div class="notes-item-tags">${n.map(d=>`<span class="notes-item-tag">${d}</span>`).join("")}</div>`:""}
            </div>
            <div class="notes-item-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-add-note-page="${e.noteId}">Add page</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-note-tags="${e.noteId}">Tags</button>
              ${b?`<button type="button" class="notes-btn notes-btn-secondary" data-promote-note="${e.noteId}">Promote to ${b.shortLabel}</button>`:""}
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
            </div>
          </article>
        `}).join("")},Q=()=>{w.hidden=!0,s(u,"","info"),L.reset()},ut=()=>{if(p.length===0){$.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}$.innerHTML=p.map(t=>{const a=m.has(t.tagId)?"checked":"",e=t.archived?"disabled":"",n=t.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${t.tagId}" ${a} ${e} />
            <span>${t.name}${n}</span>
          </label>
        `}).join("")},P=()=>{T.hidden=!0,M=null,m.clear(),s(f,"","info")},pt=t=>{const a=S.find(e=>e.noteId===t);if(!a){s(i,"Note not found.","error");return}M=a.noteId,m.clear(),a.tagIds.forEach(e=>m.add(e)),W.textContent=`Choose tags for “${a.title}”.`,ut(),s(f,"","info"),T.hidden=!1},X=()=>{if(p.length===0){N.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}N.innerHTML=p.map(t=>`
          <article class="notes-tag-manager-item" data-tag-id="${t.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${t.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${t.archived?"Archived":"Active"}</span>
                <span>Created ${B(t.createdAt)}</span>
                <span>Updated ${B(t.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${t.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${t.archived?"restore":"archive"}" data-tag-id="${t.tagId}">${t.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${t.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},mt=()=>{X(),s(u,"","info"),w.hidden=!1,R.focus()},h=async t=>{s(i,t||"Loading notes…","info");try{const[a,e]=await Promise.all([Et(),Bt()]);S=a,p=e,J(),q(),X(),s(i,"","info")}catch(a){s(i,a instanceof Error?a.message:"Failed to load notes.","error")}},ht=async(t,a)=>{const e=p.find(n=>n.tagId===a);if(!e)throw new Error("Tag not found.");try{if(t==="rename"){const n=await nt({title:"Rename tag",message:"Update the tag name.",initialValue:e.name,confirmLabel:"Rename"});if(!n?.trim())return;await U(e.tagId,{name:n.trim()})}else t==="archive"?(await U(e.tagId,{archived:!0}),g.delete(e.tagId)):t==="restore"?await U(e.tagId,{archived:!1}):(await Rt(e.tagId),g.delete(e.tagId));await h("Refreshing tags…"),s(u,"Updated tags.","success")}catch(n){const d=n instanceof Error?n.message:"Failed to update tags.";s(u,d,"error"),s(i,d,"error")}};j.addEventListener("click",()=>{h("Refreshing notes…")}),G.addEventListener("click",()=>{(async()=>{try{const t=await nt({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(t===null)return;const a=await It({title:t.trim()||"Untitled note"});window.location.href=st(a.pdfKey)}catch(t){s(i,t instanceof Error?t.message:"Failed to create note.","error")}})()}),V.addEventListener("click",()=>{mt()}),_.addEventListener("click",Q),w.addEventListener("click",t=>{t.target===w&&Q()}),T.addEventListener("click",t=>{t.target===T&&P()}),L.addEventListener("submit",t=>{t.preventDefault();const a=R.value.trim();if(!a){s(u,"Tag name is required.","error");return}(async()=>{try{await Nt(a),L.reset(),await h("Refreshing tags…"),s(u,`Added tag “${a}”.`,"success")}catch(e){const n=e instanceof Error?e.message:"Failed to create tag.";s(u,n,"error"),s(i,n,"error")}})()}),N.addEventListener("click",t=>{const e=t.target?.closest("[data-action]");if(!e)return;const n=e.dataset.action,d=e.dataset.tagId;!d||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||ht(n,d)}),I.addEventListener("change",()=>{v=I.value||"updated-desc",Ht(v),q()}),A.addEventListener("click",t=>{const a=t.target,n=a?.closest("[data-promote-note]")?.dataset.promoteNote;if(n&&b){(async()=>{try{s(i,`Preparing note promotion for ${b.shortLabel}…`,"info");const{packageUrl:l}=await Lt(n),E=new URL(b.id==="local"?"http://localhost:5173/notes/":`https://${b.host}/notes/`);E.searchParams.set(x,l),window.location.href=E.toString()}catch(l){s(i,l instanceof Error?l.message:"Failed to prepare note promotion.","error")}})();return}const d=a?.closest("[data-note-tags]"),y=a?.closest("[data-add-note-page]")?.dataset.addNotePage;if(y){(async()=>{try{const l=S.find(E=>E.noteId===y);if(!l)throw new Error("Note not found.");await at(y,{pageCount:l.pageCount+1}),await h("Refreshing notes…"),s(i,`Added page ${l.pageCount+1} to ${l.title}.`,"success")}catch(l){s(i,l instanceof Error?l.message:"Failed to add note page.","error")}})();return}const et=d?.dataset.noteTags;if(et){pt(et);return}const ot=a?.closest("[data-open-note]")?.dataset.openNote;ot&&(window.location.href=st(ot))}),z.addEventListener("click",P),Y.addEventListener("click",P),$.addEventListener("change",t=>{const a=t.target,e=a?.dataset.assignTagId;e&&(a.checked?m.add(e):m.delete(e))}),Z.addEventListener("click",()=>{if(!M)return;if(!S.find(a=>a.noteId===M)){s(f,"Note not found.","error");return}(async()=>{try{await at(M,{tagIds:Array.from(m)}),await h("Refreshing notes…"),s(f,"Updated note tags.","success"),P()}catch(a){const e=a instanceof Error?a.message:"Failed to update note tags.";s(f,e,"error"),s(i,e,"error")}})()});const tt=Ot();tt&&(async()=>{try{const t=$t();if(t!=="beta"&&t!=="prod")throw new Error("Promoted notes can only be imported in Beta or Production.");const a=await jt(tt);if(await Pt(a.promotionKey)){await qt("Already promoted",`This note already exists in ${t==="prod"?"Production":"Beta"}.`),F();return}if(!await Ut({title:t==="prod"?"Promote note to Production":"Promote note to Beta",message:`Create "${a.title}" in ${t==="prod"?"Production":"Beta"}?`,confirmLabel:"Promote"})){F();return}s(i,"Importing promoted note…","info");const d=await kt({title:a.title,pageCount:a.pageCount,promotionKey:a.promotionKey,tagNames:a.tagNames}),k=await fetch(a.snapshotUrl,{cache:"no-store"});if(!k.ok)throw new Error(`Failed to fetch note snapshot (${k.status})`);const y=await fetch(d.uploadUrl,{method:"PUT",headers:{"Content-Type":"application/pdf"},body:await k.blob()});if(!y.ok)throw new Error(`Failed to upload promoted note (${y.status})`);F(),await h("Refreshing notes…"),s(i,`Promoted note: ${a.title}`,"success")}catch(t){s(i,t instanceof Error?t.message:"Failed to import note.","error")}})(),await h(),await Ft()||(window.location.href="/auth")};export{Yt as mountNotesPage};
