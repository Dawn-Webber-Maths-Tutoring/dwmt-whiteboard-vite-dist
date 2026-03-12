import{s as bt,t as yt,b as wt,m as Tt,e as St,k as Mt,j as Ct,n as At,o as It,u as Nt,a7 as $t,a8 as Lt,a9 as Et,T as Pt,aa as kt,ab as st,A as Bt,l as Ut,ac as Ft,ad as Rt,ae as qt,af as R,ag as xt}from"./UserMenu-BcP8nTaP.js";import{a as rt,s as Dt,b as Ht}from"./dialogs-ChSClj4n.js";import{g as Kt,s as Ot}from"./authSession-CI0xwEaB.js";const dt="dwmt-notes-sort",jt=()=>`
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
`,B=o=>{if(!o)return"—";const r=new Date(o);return Number.isNaN(r.getTime())?o:r.toLocaleString()},s=(o,r,l)=>{if(!r){o.hidden=!0,o.textContent="",o.setAttribute("data-tone","");return}o.hidden=!1,o.textContent=r,o.setAttribute("data-tone",l)},Gt=o=>{try{localStorage.setItem(dt,o)}catch{}},Vt=()=>{try{const o=localStorage.getItem(dt);if(o==="updated-desc"||o==="created-desc"||o==="created-asc"||o==="title-asc")return o}catch{}return"updated-desc"},it=o=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",o),r.toString()},x="promotionPackage",_t=()=>{const r=new URLSearchParams(window.location.search).get(x);return r?.trim()?r.trim():null},q=()=>{const o=new URL(window.location.href);o.searchParams.delete(x),window.history.replaceState({},"",o.toString())},Wt=async o=>{const r=await fetch(o,{cache:"no-store"});if(!r.ok)throw new Error(`Failed to load promotion package (${r.status})`);const l=await r.json();if(l.kind!=="note"||typeof l.promotionKey!="string"||typeof l.title!="string"||typeof l.pageCount!="number"||!Array.isArray(l.tagNames)||typeof l.snapshotUrl!="string")throw new Error("Promotion package was incomplete");return l},Xt=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const r=bt();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const l=yt().map(t=>t.trim().toLowerCase()),ct=l.includes("admin"),D=l.includes("mailbox");o.innerHTML=jt(),o.appendChild(wt()),Tt(),St();const H=o.querySelector("#notesAppBarContainer");if(!H)throw new Error("Missing notes app bar container");const lt=Mt();let K=0;if(D)try{K=await Ct()}catch(t){console.warn("Failed to load inbox unread count",t)}const gt=At({currentApp:"notes",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="issues"){window.location.href="/issues/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:lt,userRole:r,isAdmin:ct,hasMailboxAccess:D,unreadInboxCount:K});H.appendChild(gt),await It({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await Ot(),window.location.href="/auth"}});const i=o.querySelector("#notesStatus"),A=o.querySelector("#notesTagFilters"),O=o.querySelector("#notesSummary"),I=o.querySelector("#notesList"),j=o.querySelector("#notesRefreshBtn"),G=o.querySelector("#notesNewBtn"),V=o.querySelector("#notesManageTagsBtn"),N=o.querySelector("#notesSortSelect"),T=o.querySelector("#notesTagModal"),_=o.querySelector("#notesTagModalClose"),$=o.querySelector("#notesTagModalList"),u=o.querySelector("#notesTagModalStatus"),L=o.querySelector("#notesTagCreateForm"),U=o.querySelector("#notesTagCreateInput"),S=o.querySelector("#noteAssignTagsModal"),W=o.querySelector("#noteAssignTagsModalClose"),v=o.querySelector("#noteAssignTagsModalStatus"),z=o.querySelector("#noteAssignTagsModalSubtitle"),E=o.querySelector("#noteAssignTagsModalList"),Y=o.querySelector("#noteAssignTagsCancel"),Z=o.querySelector("#noteAssignTagsSave");if(!i||!A||!O||!I||!j||!G||!V||!N||!T||!_||!$||!u||!L||!U||!S||!W||!v||!z||!E||!Y||!Z)throw new Error("Missing notes page controls");let M=[],m=[];const g=new Set;let C=null;const p=new Set;let b=Vt();const h=Nt();N.value=b;const ut=t=>{const a=[...t];return a.sort((e,n)=>b==="title-asc"?e.title.localeCompare(n.title):b==="created-asc"?(e.createdAt||"").localeCompare(n.createdAt||""):b==="created-desc"?(n.createdAt||"").localeCompare(e.createdAt||""):(n.updatedAt||"").localeCompare(e.updatedAt||"")),a},mt=()=>{const t=M.filter(a=>{if(g.size===0)return!0;for(const e of g)if(!a.tagIds.includes(e))return!1;return!0});return ut(t)},J=()=>{const t=m.filter(e=>!e.archived||g.has(e.tagId));if(t.length===0){A.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}A.innerHTML="";const a=document.createDocumentFragment();t.forEach(e=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",g.has(e.tagId)),n.textContent=e.archived?`${e.name} (archived)`:e.name,n.addEventListener("click",()=>{g.has(e.tagId)?g.delete(e.tagId):g.add(e.tagId),J(),F()}),a.appendChild(n)}),A.appendChild(a)},F=()=>{const t=mt();if(O.textContent=`${t.length} note${t.length===1?"":"s"} shown`,t.length===0){I.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const a=new Map(m.map(e=>[e.tagId,e.name]));I.innerHTML=t.map(e=>{const n=e.tagIds.map(d=>a.get(d)).filter(d=>!!d);return`
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
              ${h?`<button type="button" class="notes-btn notes-btn-secondary" data-promote-note="${e.noteId}">Promote to ${h.shortLabel}</button>`:""}
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
            </div>
          </article>
        `}).join("")},Q=()=>{T.hidden=!0,s(u,"","info"),L.reset()},pt=()=>{if(m.length===0){E.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}E.innerHTML=m.map(t=>{const a=p.has(t.tagId)?"checked":"",e=t.archived?"disabled":"",n=t.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${t.tagId}" ${a} ${e} />
            <span>${t.name}${n}</span>
          </label>
        `}).join("")},P=()=>{S.hidden=!0,C=null,p.clear(),s(v,"","info")},ht=t=>{const a=M.find(e=>e.noteId===t);if(!a){s(i,"Note not found.","error");return}C=a.noteId,p.clear(),a.tagIds.forEach(e=>p.add(e)),z.textContent=`Choose tags for “${a.title}”.`,pt(),s(v,"","info"),S.hidden=!1},X=()=>{if(m.length===0){$.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}$.innerHTML=m.map(t=>`
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
        `).join("")},ft=()=>{X(),s(u,"","info"),T.hidden=!1,U.focus()},f=async t=>{s(i,t||"Loading notes…","info");try{const[a,e]=await Promise.all([Rt(),qt()]);M=a,m=e,J(),F(),X(),s(i,"","info")}catch(a){s(i,a instanceof Error?a.message:"Failed to load notes.","error")}},vt=async(t,a)=>{const e=m.find(n=>n.tagId===a);if(!e)throw new Error("Tag not found.");try{if(t==="rename"){const n=await rt({title:"Rename tag",message:"Update the tag name.",initialValue:e.name,confirmLabel:"Rename"});if(!n?.trim())return;await R(e.tagId,{name:n.trim()})}else t==="archive"?(await R(e.tagId,{archived:!0}),g.delete(e.tagId)):t==="restore"?await R(e.tagId,{archived:!1}):(await xt(e.tagId),g.delete(e.tagId));await f("Refreshing tags…"),s(u,"Updated tags.","success")}catch(n){const d=n instanceof Error?n.message:"Failed to update tags.";s(u,d,"error"),s(i,d,"error")}};j.addEventListener("click",()=>{f("Refreshing notes…")}),G.addEventListener("click",()=>{(async()=>{try{const t=await rt({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(t===null)return;const a=await $t({title:t.trim()||"Untitled note"});window.location.href=it(a.pdfKey)}catch(t){s(i,t instanceof Error?t.message:"Failed to create note.","error")}})()}),V.addEventListener("click",()=>{ft()}),_.addEventListener("click",Q),T.addEventListener("click",t=>{t.target===T&&Q()}),S.addEventListener("click",t=>{t.target===S&&P()}),L.addEventListener("submit",t=>{t.preventDefault();const a=U.value.trim();if(!a){s(u,"Tag name is required.","error");return}(async()=>{try{await Lt(a),L.reset(),await f("Refreshing tags…"),s(u,`Added tag “${a}”.`,"success")}catch(e){const n=e instanceof Error?e.message:"Failed to create tag.";s(u,n,"error"),s(i,n,"error")}})()}),$.addEventListener("click",t=>{const e=t.target?.closest("[data-action]");if(!e)return;const n=e.dataset.action,d=e.dataset.tagId;!d||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||vt(n,d)}),N.addEventListener("change",()=>{b=N.value||"updated-desc",Gt(b),F()}),I.addEventListener("click",t=>{const a=t.target,n=a?.closest("[data-promote-note]")?.dataset.promoteNote;if(n&&h){(async()=>{try{s(i,`Preparing note promotion for ${h.shortLabel}…`,"info");const{packageUrl:c}=await Et(n),w=new URL(h.id==="local"?"http://localhost:5173/notes/":`https://${h.host}/notes/`);w.searchParams.set(x,c),window.location.href=w.toString()}catch(c){const w=c instanceof Error?c.message:"Failed to prepare note promotion.",at=Pt()||"(missing email)",nt=kt()||"(missing cognito:username)";console.error("Note promotion failed",{noteId:n,targetEnvironment:h.id,authEmail:at,authUsername:nt,error:c}),s(i,`Failed to prepare note promotion. ${w} [email=${at}; username=${nt}; noteId=${n}]`,"error")}})();return}const d=a?.closest("[data-note-tags]"),y=a?.closest("[data-add-note-page]")?.dataset.addNotePage;if(y){(async()=>{try{const c=M.find(w=>w.noteId===y);if(!c)throw new Error("Note not found.");await st(y,{pageCount:c.pageCount+1}),await f("Refreshing notes…"),s(i,`Added page ${c.pageCount+1} to ${c.title}.`,"success")}catch(c){s(i,c instanceof Error?c.message:"Failed to add note page.","error")}})();return}const et=d?.dataset.noteTags;if(et){ht(et);return}const ot=a?.closest("[data-open-note]")?.dataset.openNote;ot&&(window.location.href=it(ot))}),W.addEventListener("click",P),Y.addEventListener("click",P),E.addEventListener("change",t=>{const a=t.target,e=a?.dataset.assignTagId;e&&(a.checked?p.add(e):p.delete(e))}),Z.addEventListener("click",()=>{if(!C)return;if(!M.find(a=>a.noteId===C)){s(v,"Note not found.","error");return}(async()=>{try{await st(C,{tagIds:Array.from(p)}),await f("Refreshing notes…"),s(v,"Updated note tags.","success"),P()}catch(a){const e=a instanceof Error?a.message:"Failed to update note tags.";s(v,e,"error"),s(i,e,"error")}})()});const tt=_t();tt&&(async()=>{try{const t=Bt();if(t!=="beta"&&t!=="prod")throw new Error("Promoted notes can only be imported in Beta or Production.");const a=await Wt(tt);if(await Ut(a.promotionKey)){await Dt("Already promoted",`This note already exists in ${t==="prod"?"Production":"Beta"}.`),q();return}if(!await Ht({title:t==="prod"?"Promote note to Production":"Promote note to Beta",message:`Create "${a.title}" in ${t==="prod"?"Production":"Beta"}?`,confirmLabel:"Promote"})){q();return}s(i,"Importing promoted note…","info");const d=await Ft({title:a.title,pageCount:a.pageCount,promotionKey:a.promotionKey,tagNames:a.tagNames}),k=await fetch(a.snapshotUrl,{cache:"no-store"});if(!k.ok)throw new Error(`Failed to fetch note snapshot (${k.status})`);const y=await fetch(d.uploadUrl,{method:"PUT",headers:{"Content-Type":"application/pdf"},body:await k.blob()});if(!y.ok)throw new Error(`Failed to upload promoted note (${y.status})`);q(),await f("Refreshing notes…"),s(i,`Promoted note: ${a.title}`,"success")}catch(t){s(i,t instanceof Error?t.message:"Failed to import note.","error")}})(),await f(),await Kt()||(window.location.href="/auth")};export{Xt as mountNotesPage};
