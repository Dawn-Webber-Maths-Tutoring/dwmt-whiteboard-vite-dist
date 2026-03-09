import{o as rt,p as it,b as dt,m as ct,e as lt,j as gt,i as ut,k as mt,l as pt,$ as ht,a0 as vt,a1 as ft,a2 as bt,a3 as k,a4 as Tt,a5 as yt}from"./UserMenu-BWKg_Qjy.js";import{a as _}from"./dialogs-ChSClj4n.js";import{g as wt,s as St}from"./authSession-D56X3bIv.js";const Z="dwmt-notes-sort",Mt=()=>`
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
`,N=a=>{if(!a)return"—";const r=new Date(a);return Number.isNaN(r.getTime())?a:r.toLocaleString()},o=(a,r,T)=>{if(!r){a.hidden=!0,a.textContent="",a.setAttribute("data-tone","");return}a.hidden=!1,a.textContent=r,a.setAttribute("data-tone",T)},Ct=a=>{try{localStorage.setItem(Z,a)}catch{}},At=()=>{try{const a=localStorage.getItem(Z);if(a==="updated-desc"||a==="created-desc"||a==="created-asc"||a==="title-asc")return a}catch{}return"updated-desc"},Y=a=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",a),r.toString()},Et=async()=>{const a=document.querySelector("#app");if(!a)throw new Error("Missing #app root");const r=rt();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const T=it().map(t=>t.trim().toLowerCase()),J=T.includes("admin"),q=T.includes("mailbox");a.innerHTML=Mt(),a.appendChild(dt()),ct(),lt();const B=a.querySelector("#notesAppBarContainer");if(!B)throw new Error("Missing notes app bar container");const Q=gt();let x=0;if(q)try{x=await ut()}catch(t){console.warn("Failed to load inbox unread count",t)}const X=mt({currentApp:"notes",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:Q,userRole:r,isAdmin:J,hasMailboxAccess:q,unreadInboxCount:x});B.appendChild(X),await pt({root:a,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await St(),window.location.href="/auth"}});const d=a.querySelector("#notesStatus"),y=a.querySelector("#notesTagFilters"),F=a.querySelector("#notesSummary"),w=a.querySelector("#notesList"),R=a.querySelector("#notesRefreshBtn"),U=a.querySelector("#notesNewBtn"),H=a.querySelector("#notesManageTagsBtn"),S=a.querySelector("#notesSortSelect"),h=a.querySelector("#notesTagModal"),D=a.querySelector("#notesTagModalClose"),M=a.querySelector("#notesTagModalList"),l=a.querySelector("#notesTagModalStatus"),C=a.querySelector("#notesTagCreateForm"),$=a.querySelector("#notesTagCreateInput"),v=a.querySelector("#noteAssignTagsModal"),P=a.querySelector("#noteAssignTagsModalClose"),m=a.querySelector("#noteAssignTagsModalStatus"),O=a.querySelector("#noteAssignTagsModalSubtitle"),A=a.querySelector("#noteAssignTagsModalList"),j=a.querySelector("#noteAssignTagsCancel"),K=a.querySelector("#noteAssignTagsSave");if(!d||!y||!F||!w||!R||!U||!H||!S||!h||!D||!M||!l||!C||!$||!v||!P||!m||!O||!A||!j||!K)throw new Error("Missing notes page controls");let I=[],g=[];const c=new Set;let f=null;const u=new Set;let p=At();S.value=p;const tt=t=>{const n=[...t];return n.sort((e,s)=>p==="title-asc"?e.title.localeCompare(s.title):p==="created-asc"?(e.createdAt||"").localeCompare(s.createdAt||""):p==="created-desc"?(s.createdAt||"").localeCompare(e.createdAt||""):(s.updatedAt||"").localeCompare(e.updatedAt||"")),n},et=()=>{const t=I.filter(n=>{if(c.size===0)return!0;for(const e of c)if(!n.tagIds.includes(e))return!1;return!0});return tt(t)},V=()=>{const t=g.filter(e=>!e.archived||c.has(e.tagId));if(t.length===0){y.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}y.innerHTML="";const n=document.createDocumentFragment();t.forEach(e=>{const s=document.createElement("button");s.type="button",s.className="notes-tag-chip",s.classList.toggle("is-active",c.has(e.tagId)),s.textContent=e.archived?`${e.name} (archived)`:e.name,s.addEventListener("click",()=>{c.has(e.tagId)?c.delete(e.tagId):c.add(e.tagId),V(),E()}),n.appendChild(s)}),y.appendChild(n)},E=()=>{const t=et();if(F.textContent=`${t.length} note${t.length===1?"":"s"} shown`,t.length===0){w.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const n=new Map(g.map(e=>[e.tagId,e.name]));w.innerHTML=t.map(e=>{const s=e.tagIds.map(i=>n.get(i)).filter(i=>!!i);return`
          <article class="notes-item">
            <div class="notes-item-main">
              <div class="notes-item-title">${e.title}</div>
              <div class="notes-item-meta">
                <span>${e.pageCount} page${e.pageCount===1?"":"s"}</span>
                <span>${e.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${N(e.createdAt)}</span>
                <span>Updated ${N(e.updatedAt)}</span>
              </div>
              ${s.length>0?`<div class="notes-item-tags">${s.map(i=>`<span class="notes-item-tag">${i}</span>`).join("")}</div>`:""}
            </div>
            <div class="notes-item-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-note-tags="${e.noteId}">Tags</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
            </div>
          </article>
        `}).join("")},W=()=>{h.hidden=!0,o(l,"","info"),C.reset()},at=()=>{if(g.length===0){A.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}A.innerHTML=g.map(t=>{const n=u.has(t.tagId)?"checked":"",e=t.archived?"disabled":"",s=t.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${t.tagId}" ${n} ${e} />
            <span>${t.name}${s}</span>
          </label>
        `}).join("")},L=()=>{v.hidden=!0,f=null,u.clear(),o(m,"","info")},nt=t=>{const n=I.find(e=>e.noteId===t);if(!n){o(d,"Note not found.","error");return}f=n.noteId,u.clear(),n.tagIds.forEach(e=>u.add(e)),O.textContent=`Choose tags for “${n.title}”.`,at(),o(m,"","info"),v.hidden=!1},z=()=>{if(g.length===0){M.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}M.innerHTML=g.map(t=>`
          <article class="notes-tag-manager-item" data-tag-id="${t.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${t.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${t.archived?"Archived":"Active"}</span>
                <span>Created ${N(t.createdAt)}</span>
                <span>Updated ${N(t.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${t.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${t.archived?"restore":"archive"}" data-tag-id="${t.tagId}">${t.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${t.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},st=()=>{z(),o(l,"","info"),h.hidden=!1,$.focus()},b=async t=>{o(d,t||"Loading notes…","info");try{const[n,e]=await Promise.all([ft(),bt()]);I=n,g=e,V(),E(),z(),o(d,"","info")}catch(n){o(d,n instanceof Error?n.message:"Failed to load notes.","error")}},ot=async(t,n)=>{const e=g.find(s=>s.tagId===n);if(!e)throw new Error("Tag not found.");try{if(t==="rename"){const s=await _({title:"Rename tag",message:"Update the tag name.",initialValue:e.name,confirmLabel:"Rename"});if(!s?.trim())return;await k(e.tagId,{name:s.trim()})}else t==="archive"?(await k(e.tagId,{archived:!0}),c.delete(e.tagId)):t==="restore"?await k(e.tagId,{archived:!1}):(await Tt(e.tagId),c.delete(e.tagId));await b("Refreshing tags…"),o(l,"Updated tags.","success")}catch(s){const i=s instanceof Error?s.message:"Failed to update tags.";o(l,i,"error"),o(d,i,"error")}};R.addEventListener("click",()=>{b("Refreshing notes…")}),U.addEventListener("click",()=>{(async()=>{try{const t=await _({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(t===null)return;const n=await ht({title:t.trim()||"Untitled note"});window.location.href=Y(n.pdfKey)}catch(t){o(d,t instanceof Error?t.message:"Failed to create note.","error")}})()}),H.addEventListener("click",()=>{st()}),D.addEventListener("click",W),h.addEventListener("click",t=>{t.target===h&&W()}),v.addEventListener("click",t=>{t.target===v&&L()}),C.addEventListener("submit",t=>{t.preventDefault();const n=$.value.trim();if(!n){o(l,"Tag name is required.","error");return}(async()=>{try{await vt(n),C.reset(),await b("Refreshing tags…"),o(l,`Added tag “${n}”.`,"success")}catch(e){const s=e instanceof Error?e.message:"Failed to create tag.";o(l,s,"error"),o(d,s,"error")}})()}),M.addEventListener("click",t=>{const e=t.target?.closest("[data-action]");if(!e)return;const s=e.dataset.action,i=e.dataset.tagId;!i||s!=="rename"&&s!=="archive"&&s!=="restore"&&s!=="delete"||ot(s,i)}),S.addEventListener("change",()=>{p=S.value||"updated-desc",Ct(p),E()}),w.addEventListener("click",t=>{const n=t.target,s=n?.closest("[data-note-tags]")?.dataset.noteTags;if(s){nt(s);return}const G=n?.closest("[data-open-note]")?.dataset.openNote;G&&(window.location.href=Y(G))}),P.addEventListener("click",L),j.addEventListener("click",L),A.addEventListener("change",t=>{const n=t.target,e=n?.dataset.assignTagId;e&&(n.checked?u.add(e):u.delete(e))}),K.addEventListener("click",()=>{if(!f)return;if(!I.find(n=>n.noteId===f)){o(m,"Note not found.","error");return}(async()=>{try{await yt(f,{tagIds:Array.from(u)}),await b("Refreshing notes…"),o(m,"Updated note tags.","success"),L()}catch(n){const e=n instanceof Error?n.message:"Failed to update note tags.";o(m,e,"error"),o(d,e,"error")}})()}),await b(),await wt()||(window.location.href="/auth")};export{Et as mountNotesPage};
