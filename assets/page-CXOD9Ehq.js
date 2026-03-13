import{s as wt,t as Tt,b as St,m as Ct,e as Mt,k as At,j as It,n as Nt,o as $t,u as Lt,a7 as Et,a8 as kt,a9 as Pt,T as Bt,aa as Ut,ab as Ft,ac as rt,A as Rt,l as qt,ad as xt,ae as Dt,af as Ht,ag as x,ah as Kt}from"./UserMenu-Bpbe7jHM.js";import{a as it,b as dt,s as Ot}from"./dialogs-ChSClj4n.js";import{g as jt,s as Gt}from"./authSession-C0TPbQSR.js";const lt="dwmt-notes-sort",Vt=()=>`
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
`,U=o=>{if(!o)return"—";const r=new Date(o);return Number.isNaN(r.getTime())?o:r.toLocaleString()},s=(o,r,l)=>{if(!r){o.hidden=!0,o.textContent="",o.setAttribute("data-tone","");return}o.hidden=!1,o.textContent=r,o.setAttribute("data-tone",l)},_t=o=>{try{localStorage.setItem(lt,o)}catch{}},Wt=()=>{try{const o=localStorage.getItem(lt);if(o==="updated-desc"||o==="created-desc"||o==="created-asc"||o==="title-asc")return o}catch{}return"updated-desc"},ct=o=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",o),r.toString()},H="promotionPackage",zt=()=>{const r=new URLSearchParams(window.location.search).get(H);return r?.trim()?r.trim():null},D=()=>{const o=new URL(window.location.href);o.searchParams.delete(H),window.history.replaceState({},"",o.toString())},Yt=async o=>{const r=await fetch(o,{cache:"no-store"});if(!r.ok)throw new Error(`Failed to load promotion package (${r.status})`);const l=await r.json();if(l.kind!=="note"||typeof l.promotionKey!="string"||typeof l.title!="string"||typeof l.pageCount!="number"||!Array.isArray(l.tagNames)||typeof l.snapshotUrl!="string")throw new Error("Promotion package was incomplete");return l},oe=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const r=wt();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const l=Tt().map(t=>t.trim().toLowerCase()),gt=l.includes("admin"),K=l.includes("mailbox");o.innerHTML=Vt(),o.appendChild(St()),Ct(),Mt();const O=o.querySelector("#notesAppBarContainer");if(!O)throw new Error("Missing notes app bar container");const ut=At();let j=0;if(K)try{j=await It()}catch(t){console.warn("Failed to load inbox unread count",t)}const mt=Nt({currentApp:"notes",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="issues"){window.location.href="/issues/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:ut,userRole:r,isAdmin:gt,hasMailboxAccess:K,unreadInboxCount:j});O.appendChild(mt),await $t({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await Gt(),window.location.href="/auth"}});const i=o.querySelector("#notesStatus"),I=o.querySelector("#notesTagFilters"),G=o.querySelector("#notesSummary"),N=o.querySelector("#notesList"),V=o.querySelector("#notesRefreshBtn"),_=o.querySelector("#notesNewBtn"),W=o.querySelector("#notesManageTagsBtn"),$=o.querySelector("#notesSortSelect"),C=o.querySelector("#notesTagModal"),z=o.querySelector("#notesTagModalClose"),L=o.querySelector("#notesTagModalList"),u=o.querySelector("#notesTagModalStatus"),E=o.querySelector("#notesTagCreateForm"),F=o.querySelector("#notesTagCreateInput"),M=o.querySelector("#noteAssignTagsModal"),Y=o.querySelector("#noteAssignTagsModalClose"),y=o.querySelector("#noteAssignTagsModalStatus"),Z=o.querySelector("#noteAssignTagsModalSubtitle"),k=o.querySelector("#noteAssignTagsModalList"),J=o.querySelector("#noteAssignTagsCancel"),Q=o.querySelector("#noteAssignTagsSave");if(!i||!I||!G||!N||!V||!_||!W||!$||!C||!z||!L||!u||!E||!F||!M||!Y||!y||!Z||!k||!J||!Q)throw new Error("Missing notes page controls");let w=[],m=[];const g=new Set;let A=null;const f=new Set;let T=Wt();const h=Lt();$.value=T;const pt=t=>{const a=[...t];return a.sort((e,n)=>T==="title-asc"?e.title.localeCompare(n.title):T==="created-asc"?(e.createdAt||"").localeCompare(n.createdAt||""):T==="created-desc"?(n.createdAt||"").localeCompare(e.createdAt||""):(n.updatedAt||"").localeCompare(e.updatedAt||"")),a},ft=()=>{const t=w.filter(a=>{if(g.size===0)return!0;for(const e of g)if(!a.tagIds.includes(e))return!1;return!0});return pt(t)},X=()=>{const t=m.filter(e=>!e.archived||g.has(e.tagId));if(t.length===0){I.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}I.innerHTML="";const a=document.createDocumentFragment();t.forEach(e=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",g.has(e.tagId)),n.textContent=e.archived?`${e.name} (archived)`:e.name,n.addEventListener("click",()=>{g.has(e.tagId)?g.delete(e.tagId):g.add(e.tagId),X(),R()}),a.appendChild(n)}),I.appendChild(a)},R=()=>{const t=ft();if(G.textContent=`${t.length} note${t.length===1?"":"s"} shown`,t.length===0){N.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const a=new Map(m.map(e=>[e.tagId,e.name]));N.innerHTML=t.map(e=>{const n=e.tagIds.map(c=>a.get(c)).filter(c=>!!c);return`
          <article class="notes-item">
            <div class="notes-item-main">
              <div class="notes-item-title">${e.title}</div>
              <div class="notes-item-meta">
                <span>${e.pageCount} page${e.pageCount===1?"":"s"}</span>
                <span>${e.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${U(e.createdAt)}</span>
                <span>Updated ${U(e.updatedAt)}</span>
              </div>
              ${n.length>0?`<div class="notes-item-tags">${n.map(c=>`<span class="notes-item-tag">${c}</span>`).join("")}</div>`:""}
            </div>
            <div class="notes-item-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-add-note-page="${e.noteId}">Add page</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-note-tags="${e.noteId}">Tags</button>
              ${h?`<button type="button" class="notes-btn notes-btn-secondary" data-promote-note="${e.noteId}">Promote to ${h.shortLabel}</button>`:""}
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-delete-note="${e.noteId}">Delete</button>
            </div>
          </article>
        `}).join("")},tt=()=>{C.hidden=!0,s(u,"","info"),E.reset()},ht=()=>{if(m.length===0){k.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}k.innerHTML=m.map(t=>{const a=f.has(t.tagId)?"checked":"",e=t.archived?"disabled":"",n=t.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${t.tagId}" ${a} ${e} />
            <span>${t.name}${n}</span>
          </label>
        `}).join("")},P=()=>{M.hidden=!0,A=null,f.clear(),s(y,"","info")},vt=t=>{const a=w.find(e=>e.noteId===t);if(!a){s(i,"Note not found.","error");return}A=a.noteId,f.clear(),a.tagIds.forEach(e=>f.add(e)),Z.textContent=`Choose tags for “${a.title}”.`,ht(),s(y,"","info"),M.hidden=!1},et=()=>{if(m.length===0){L.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}L.innerHTML=m.map(t=>`
          <article class="notes-tag-manager-item" data-tag-id="${t.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${t.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${t.archived?"Archived":"Active"}</span>
                <span>Created ${U(t.createdAt)}</span>
                <span>Updated ${U(t.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${t.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${t.archived?"restore":"archive"}" data-tag-id="${t.tagId}">${t.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${t.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},bt=()=>{et(),s(u,"","info"),C.hidden=!1,F.focus()},p=async t=>{s(i,t||"Loading notes…","info");try{const[a,e]=await Promise.all([Dt(),Ht()]);w=a,m=e,X(),R(),et(),s(i,"","info")}catch(a){s(i,a instanceof Error?a.message:"Failed to load notes.","error")}},yt=async(t,a)=>{const e=m.find(n=>n.tagId===a);if(!e)throw new Error("Tag not found.");try{if(t==="rename"){const n=await it({title:"Rename tag",message:"Update the tag name.",initialValue:e.name,confirmLabel:"Rename"});if(!n?.trim())return;await x(e.tagId,{name:n.trim()})}else t==="archive"?(await x(e.tagId,{archived:!0}),g.delete(e.tagId)):t==="restore"?await x(e.tagId,{archived:!1}):(await Kt(e.tagId),g.delete(e.tagId));await p("Refreshing tags…"),s(u,"Updated tags.","success")}catch(n){const c=n instanceof Error?n.message:"Failed to update tags.";s(u,c,"error"),s(i,c,"error")}};V.addEventListener("click",()=>{p("Refreshing notes…")}),_.addEventListener("click",()=>{(async()=>{try{const t=await it({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(t===null)return;const a=await Et({title:t.trim()||"Untitled note"});window.location.href=ct(a.pdfKey)}catch(t){s(i,t instanceof Error?t.message:"Failed to create note.","error")}})()}),W.addEventListener("click",()=>{bt()}),z.addEventListener("click",tt),C.addEventListener("click",t=>{t.target===C&&tt()}),M.addEventListener("click",t=>{t.target===M&&P()}),E.addEventListener("submit",t=>{t.preventDefault();const a=F.value.trim();if(!a){s(u,"Tag name is required.","error");return}(async()=>{try{await kt(a),E.reset(),await p("Refreshing tags…"),s(u,`Added tag “${a}”.`,"success")}catch(e){const n=e instanceof Error?e.message:"Failed to create tag.";s(u,n,"error"),s(i,n,"error")}})()}),L.addEventListener("click",t=>{const e=t.target?.closest("[data-action]");if(!e)return;const n=e.dataset.action,c=e.dataset.tagId;!c||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||yt(n,c)}),$.addEventListener("change",()=>{T=$.value||"updated-desc",_t(T),R()}),N.addEventListener("click",t=>{const a=t.target,n=a?.closest("[data-promote-note]")?.dataset.promoteNote;if(n&&h){(async()=>{try{s(i,`Preparing note promotion for ${h.shortLabel}…`,"info");const{packageUrl:d}=await Pt(n),v=new URL(h.id==="local"?"http://localhost:5173/notes/":`https://${h.host}/notes/`);v.searchParams.set(H,d),window.location.href=v.toString()}catch(d){const v=d instanceof Error?d.message:"Failed to prepare note promotion.",b=Bt()||"(missing email)",st=Ut()||"(missing cognito:username)";console.error("Note promotion failed",{noteId:n,targetEnvironment:h.id,authEmail:b,authUsername:st,error:d}),s(i,`Failed to prepare note promotion. ${v} [email=${b}; username=${st}; noteId=${n}]`,"error")}})();return}const c=a?.closest("[data-note-tags]"),S=a?.closest("[data-delete-note]")?.dataset.deleteNote;if(S){(async()=>{const d=w.find(b=>b.noteId===S);if(!d){s(i,"Note not found.","error");return}if(await dt({title:"Delete note",message:`Soft-delete "${d.title}"? You can restore it later from the backend if needed, but it will disappear from normal note lists now.`,confirmLabel:"Delete note",cancelLabel:"Cancel"}))try{await Ft(S),await p("Refreshing notes…"),s(i,`Deleted note: ${d.title}`,"success")}catch(b){s(i,b instanceof Error?b.message:"Failed to delete note.","error")}})();return}const q=a?.closest("[data-add-note-page]")?.dataset.addNotePage;if(q){(async()=>{try{const d=w.find(v=>v.noteId===q);if(!d)throw new Error("Note not found.");await rt(q,{pageCount:d.pageCount+1}),await p("Refreshing notes…"),s(i,`Added page ${d.pageCount+1} to ${d.title}.`,"success")}catch(d){s(i,d instanceof Error?d.message:"Failed to add note page.","error")}})();return}const at=c?.dataset.noteTags;if(at){vt(at);return}const nt=a?.closest("[data-open-note]")?.dataset.openNote;nt&&(window.location.href=ct(nt))}),Y.addEventListener("click",P),J.addEventListener("click",P),k.addEventListener("change",t=>{const a=t.target,e=a?.dataset.assignTagId;e&&(a.checked?f.add(e):f.delete(e))}),Q.addEventListener("click",()=>{if(!A)return;if(!w.find(a=>a.noteId===A)){s(y,"Note not found.","error");return}(async()=>{try{await rt(A,{tagIds:Array.from(f)}),await p("Refreshing notes…"),s(y,"Updated note tags.","success"),P()}catch(a){const e=a instanceof Error?a.message:"Failed to update note tags.";s(y,e,"error"),s(i,e,"error")}})()});const ot=zt();ot&&(async()=>{try{const t=Rt();if(t!=="beta"&&t!=="prod")throw new Error("Promoted notes can only be imported in Beta or Production.");const a=await Yt(ot);if(await qt(a.promotionKey)){await Ot("Already promoted",`This note already exists in ${t==="prod"?"Production":"Beta"}.`),D();return}if(!await dt({title:t==="prod"?"Promote note to Production":"Promote note to Beta",message:`Create "${a.title}" in ${t==="prod"?"Production":"Beta"}?`,confirmLabel:"Promote"})){D();return}s(i,"Importing promoted note…","info");const c=await xt({title:a.title,pageCount:a.pageCount,promotionKey:a.promotionKey,tagNames:a.tagNames}),B=await fetch(a.snapshotUrl,{cache:"no-store"});if(!B.ok)throw new Error(`Failed to fetch note snapshot (${B.status})`);const S=await fetch(c.uploadUrl,{method:"PUT",headers:{"Content-Type":"application/pdf"},body:await B.blob()});if(!S.ok)throw new Error(`Failed to upload promoted note (${S.status})`);D(),await p("Refreshing notes…"),s(i,`Promoted note: ${a.title}`,"success")}catch(t){s(i,t instanceof Error?t.message:"Failed to import note.","error")}})(),await p(),await jt()||(window.location.href="/auth")};export{oe as mountNotesPage};
