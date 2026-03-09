import{o as mt,p as ht,b as ft,m as vt,e as bt,j as yt,i as wt,k as Tt,l as St,q as Mt,a4 as Ct,a5 as At,a6 as It,x as Nt,z as Lt,a7 as $t,a8 as kt,a9 as Pt,aa as R,ab as Et,ac as Bt}from"./UserMenu-DRNttFAF.js";import{a as ot,s as qt,b as Rt}from"./dialogs-ChSClj4n.js";import{g as Ut,s as Ft}from"./authSession-LjQdVIWY.js";const nt="dwmt-notes-sort",xt=()=>`
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
`,P=o=>{if(!o)return"—";const r=new Date(o);return Number.isNaN(r.getTime())?o:r.toLocaleString()},s=(o,r,c)=>{if(!r){o.hidden=!0,o.textContent="",o.setAttribute("data-tone","");return}o.hidden=!1,o.textContent=r,o.setAttribute("data-tone",c)},Dt=o=>{try{localStorage.setItem(nt,o)}catch{}},Ht=()=>{try{const o=localStorage.getItem(nt);if(o==="updated-desc"||o==="created-desc"||o==="created-asc"||o==="title-asc")return o}catch{}return"updated-desc"},at=o=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",o),r.toString()},F="promotionPackage",Kt=()=>{const r=new URLSearchParams(window.location.search).get(F);return r?.trim()?r.trim():null},U=()=>{const o=new URL(window.location.href);o.searchParams.delete(F),window.history.replaceState({},"",o.toString())},Ot=async o=>{const r=await fetch(o,{cache:"no-store"});if(!r.ok)throw new Error(`Failed to load promotion package (${r.status})`);const c=await r.json();if(c.kind!=="note"||typeof c.promotionKey!="string"||typeof c.title!="string"||typeof c.pageCount!="number"||!Array.isArray(c.tagNames)||typeof c.snapshotUrl!="string")throw new Error("Promotion package was incomplete");return c},Gt=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const r=mt();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const c=ht().map(t=>t.trim().toLowerCase()),st=c.includes("admin"),x=c.includes("mailbox");o.innerHTML=xt(),o.appendChild(ft()),vt(),bt();const D=o.querySelector("#notesAppBarContainer");if(!D)throw new Error("Missing notes app bar container");const rt=yt();let H=0;if(x)try{H=await wt()}catch(t){console.warn("Failed to load inbox unread count",t)}const it=Tt({currentApp:"notes",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:rt,userRole:r,isAdmin:st,hasMailboxAccess:x,unreadInboxCount:H});D.appendChild(it),await St({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await Ft(),window.location.href="/auth"}});const i=o.querySelector("#notesStatus"),S=o.querySelector("#notesTagFilters"),K=o.querySelector("#notesSummary"),M=o.querySelector("#notesList"),O=o.querySelector("#notesRefreshBtn"),j=o.querySelector("#notesNewBtn"),V=o.querySelector("#notesManageTagsBtn"),C=o.querySelector("#notesSortSelect"),y=o.querySelector("#notesTagModal"),_=o.querySelector("#notesTagModalClose"),A=o.querySelector("#notesTagModalList"),g=o.querySelector("#notesTagModalStatus"),I=o.querySelector("#notesTagCreateForm"),E=o.querySelector("#notesTagCreateInput"),w=o.querySelector("#noteAssignTagsModal"),z=o.querySelector("#noteAssignTagsModalClose"),m=o.querySelector("#noteAssignTagsModalStatus"),G=o.querySelector("#noteAssignTagsModalSubtitle"),N=o.querySelector("#noteAssignTagsModalList"),W=o.querySelector("#noteAssignTagsCancel"),Y=o.querySelector("#noteAssignTagsSave");if(!i||!S||!K||!M||!O||!j||!V||!C||!y||!_||!A||!g||!I||!E||!w||!z||!m||!G||!N||!W||!Y)throw new Error("Missing notes page controls");let L=[],u=[];const l=new Set;let T=null;const p=new Set;let h=Ht();const f=Mt();C.value=h;const dt=t=>{const a=[...t];return a.sort((e,n)=>h==="title-asc"?e.title.localeCompare(n.title):h==="created-asc"?(e.createdAt||"").localeCompare(n.createdAt||""):h==="created-desc"?(n.createdAt||"").localeCompare(e.createdAt||""):(n.updatedAt||"").localeCompare(e.updatedAt||"")),a},ct=()=>{const t=L.filter(a=>{if(l.size===0)return!0;for(const e of l)if(!a.tagIds.includes(e))return!1;return!0});return dt(t)},Z=()=>{const t=u.filter(e=>!e.archived||l.has(e.tagId));if(t.length===0){S.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}S.innerHTML="";const a=document.createDocumentFragment();t.forEach(e=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",l.has(e.tagId)),n.textContent=e.archived?`${e.name} (archived)`:e.name,n.addEventListener("click",()=>{l.has(e.tagId)?l.delete(e.tagId):l.add(e.tagId),Z(),B()}),a.appendChild(n)}),S.appendChild(a)},B=()=>{const t=ct();if(K.textContent=`${t.length} note${t.length===1?"":"s"} shown`,t.length===0){M.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const a=new Map(u.map(e=>[e.tagId,e.name]));M.innerHTML=t.map(e=>{const n=e.tagIds.map(d=>a.get(d)).filter(d=>!!d);return`
          <article class="notes-item">
            <div class="notes-item-main">
              <div class="notes-item-title">${e.title}</div>
              <div class="notes-item-meta">
                <span>${e.pageCount} page${e.pageCount===1?"":"s"}</span>
                <span>${e.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${P(e.createdAt)}</span>
                <span>Updated ${P(e.updatedAt)}</span>
              </div>
              ${n.length>0?`<div class="notes-item-tags">${n.map(d=>`<span class="notes-item-tag">${d}</span>`).join("")}</div>`:""}
            </div>
            <div class="notes-item-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-note-tags="${e.noteId}">Tags</button>
              ${f?`<button type="button" class="notes-btn notes-btn-secondary" data-promote-note="${e.noteId}">Promote to ${f.shortLabel}</button>`:""}
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
            </div>
          </article>
        `}).join("")},J=()=>{y.hidden=!0,s(g,"","info"),I.reset()},lt=()=>{if(u.length===0){N.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}N.innerHTML=u.map(t=>{const a=p.has(t.tagId)?"checked":"",e=t.archived?"disabled":"",n=t.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${t.tagId}" ${a} ${e} />
            <span>${t.name}${n}</span>
          </label>
        `}).join("")},$=()=>{w.hidden=!0,T=null,p.clear(),s(m,"","info")},gt=t=>{const a=L.find(e=>e.noteId===t);if(!a){s(i,"Note not found.","error");return}T=a.noteId,p.clear(),a.tagIds.forEach(e=>p.add(e)),G.textContent=`Choose tags for “${a.title}”.`,lt(),s(m,"","info"),w.hidden=!1},Q=()=>{if(u.length===0){A.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}A.innerHTML=u.map(t=>`
          <article class="notes-tag-manager-item" data-tag-id="${t.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${t.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${t.archived?"Archived":"Active"}</span>
                <span>Created ${P(t.createdAt)}</span>
                <span>Updated ${P(t.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${t.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${t.archived?"restore":"archive"}" data-tag-id="${t.tagId}">${t.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${t.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},ut=()=>{Q(),s(g,"","info"),y.hidden=!1,E.focus()},v=async t=>{s(i,t||"Loading notes…","info");try{const[a,e]=await Promise.all([kt(),Pt()]);L=a,u=e,Z(),B(),Q(),s(i,"","info")}catch(a){s(i,a instanceof Error?a.message:"Failed to load notes.","error")}},pt=async(t,a)=>{const e=u.find(n=>n.tagId===a);if(!e)throw new Error("Tag not found.");try{if(t==="rename"){const n=await ot({title:"Rename tag",message:"Update the tag name.",initialValue:e.name,confirmLabel:"Rename"});if(!n?.trim())return;await R(e.tagId,{name:n.trim()})}else t==="archive"?(await R(e.tagId,{archived:!0}),l.delete(e.tagId)):t==="restore"?await R(e.tagId,{archived:!1}):(await Et(e.tagId),l.delete(e.tagId));await v("Refreshing tags…"),s(g,"Updated tags.","success")}catch(n){const d=n instanceof Error?n.message:"Failed to update tags.";s(g,d,"error"),s(i,d,"error")}};O.addEventListener("click",()=>{v("Refreshing notes…")}),j.addEventListener("click",()=>{(async()=>{try{const t=await ot({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(t===null)return;const a=await Ct({title:t.trim()||"Untitled note"});window.location.href=at(a.pdfKey)}catch(t){s(i,t instanceof Error?t.message:"Failed to create note.","error")}})()}),V.addEventListener("click",()=>{ut()}),_.addEventListener("click",J),y.addEventListener("click",t=>{t.target===y&&J()}),w.addEventListener("click",t=>{t.target===w&&$()}),I.addEventListener("submit",t=>{t.preventDefault();const a=E.value.trim();if(!a){s(g,"Tag name is required.","error");return}(async()=>{try{await At(a),I.reset(),await v("Refreshing tags…"),s(g,`Added tag “${a}”.`,"success")}catch(e){const n=e instanceof Error?e.message:"Failed to create tag.";s(g,n,"error"),s(i,n,"error")}})()}),A.addEventListener("click",t=>{const e=t.target?.closest("[data-action]");if(!e)return;const n=e.dataset.action,d=e.dataset.tagId;!d||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||pt(n,d)}),C.addEventListener("change",()=>{h=C.value||"updated-desc",Dt(h),B()}),M.addEventListener("click",t=>{const a=t.target,n=a?.closest("[data-promote-note]")?.dataset.promoteNote;if(n&&f){(async()=>{try{s(i,`Preparing note promotion for ${f.shortLabel}…`,"info");const{packageUrl:k}=await It(n),et=new URL(f.id==="local"?"http://localhost:5173/notes/":`https://${f.host}/notes/`);et.searchParams.set(F,k),window.location.href=et.toString()}catch(k){s(i,k instanceof Error?k.message:"Failed to prepare note promotion.","error")}})();return}const b=a?.closest("[data-note-tags]")?.dataset.noteTags;if(b){gt(b);return}const tt=a?.closest("[data-open-note]")?.dataset.openNote;tt&&(window.location.href=at(tt))}),z.addEventListener("click",$),W.addEventListener("click",$),N.addEventListener("change",t=>{const a=t.target,e=a?.dataset.assignTagId;e&&(a.checked?p.add(e):p.delete(e))}),Y.addEventListener("click",()=>{if(!T)return;if(!L.find(a=>a.noteId===T)){s(m,"Note not found.","error");return}(async()=>{try{await Bt(T,{tagIds:Array.from(p)}),await v("Refreshing notes…"),s(m,"Updated note tags.","success"),$()}catch(a){const e=a instanceof Error?a.message:"Failed to update note tags.";s(m,e,"error"),s(i,e,"error")}})()});const X=Kt();X&&(async()=>{try{const t=Nt();if(t!=="beta"&&t!=="prod")throw new Error("Promoted notes can only be imported in Beta or Production.");const a=await Ot(X);if(await Lt(a.promotionKey)){await qt("Already promoted",`This note already exists in ${t==="prod"?"Production":"Beta"}.`),U();return}if(!await Rt({title:t==="prod"?"Promote note to Production":"Promote note to Beta",message:`Create "${a.title}" in ${t==="prod"?"Production":"Beta"}?`,confirmLabel:"Promote"})){U();return}s(i,"Importing promoted note…","info");const d=await $t({title:a.title,pageCount:a.pageCount,promotionKey:a.promotionKey,tagNames:a.tagNames}),b=await fetch(a.snapshotUrl,{cache:"no-store"});if(!b.ok)throw new Error(`Failed to fetch note snapshot (${b.status})`);const q=await fetch(d.uploadUrl,{method:"PUT",headers:{"Content-Type":"application/pdf"},body:await b.blob()});if(!q.ok)throw new Error(`Failed to upload promoted note (${q.status})`);U(),await v("Refreshing notes…"),s(i,`Promoted note: ${a.title}`,"success")}catch(t){s(i,t instanceof Error?t.message:"Failed to import note.","error")}})(),await v(),await Ut()||(window.location.href="/auth")};export{Gt as mountNotesPage};
