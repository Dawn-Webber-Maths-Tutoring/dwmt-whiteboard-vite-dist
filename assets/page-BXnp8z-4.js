import{o as G,p as V,b as _,m as Y,e as Z,j as J,i as Q,k as X,l as tt,$ as et,a0 as at,a1 as nt,a2 as ot,a3 as C,a4 as st}from"./UserMenu-Dey2t7Mp.js";import{g as rt,s as it}from"./authSession-JBUP4TBv.js";const H="dwmt-notes-sort",dt=()=>`
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
  </div>
`,T=a=>{if(!a)return"—";const r=new Date(a);return Number.isNaN(r.getTime())?a:r.toLocaleString()},s=(a,r,m)=>{if(!r){a.hidden=!0,a.textContent="",a.setAttribute("data-tone","");return}a.hidden=!1,a.textContent=r,a.setAttribute("data-tone",m)},ct=a=>{try{localStorage.setItem(H,a)}catch{}},lt=()=>{try{const a=localStorage.getItem(H);if(a==="updated-desc"||a==="created-desc"||a==="created-asc"||a==="title-asc")return a}catch{}return"updated-desc"},U=a=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",a),r.toString()},mt=async()=>{const a=document.querySelector("#app");if(!a)throw new Error("Missing #app root");const r=G();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const m=V().map(t=>t.trim().toLowerCase()),D=m.includes("admin"),N=m.includes("mailbox");a.innerHTML=dt(),a.appendChild(_()),Y(),Z();const I=a.querySelector("#notesAppBarContainer");if(!I)throw new Error("Missing notes app bar container");const P=J();let L=0;if(N)try{L=await Q()}catch(t){console.warn("Failed to load inbox unread count",t)}const O=X({currentApp:"notes",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard/";return}if(t==="activity"){window.location.href="/activity/";return}if(t==="inbox"){window.location.href="/mailbox/";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:P,userRole:r,isAdmin:D,hasMailboxAccess:N,unreadInboxCount:L});I.appendChild(O),await tt({root:a,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await it(),window.location.href="/auth"}});const l=a.querySelector("#notesStatus"),h=a.querySelector("#notesTagFilters"),$=a.querySelector("#notesSummary"),v=a.querySelector("#notesList"),A=a.querySelector("#notesRefreshBtn"),E=a.querySelector("#notesNewBtn"),B=a.querySelector("#notesManageTagsBtn"),f=a.querySelector("#notesSortSelect"),p=a.querySelector("#notesTagModal"),k=a.querySelector("#notesTagModalClose"),b=a.querySelector("#notesTagModalList"),c=a.querySelector("#notesTagModalStatus"),w=a.querySelector("#notesTagCreateForm"),S=a.querySelector("#notesTagCreateInput");if(!l||!h||!$||!v||!A||!E||!B||!f||!p||!k||!b||!c||!w||!S)throw new Error("Missing notes page controls");let q=[],u=[];const d=new Set;let g=lt();f.value=g;const K=t=>{const o=[...t];return o.sort((e,n)=>g==="title-asc"?e.title.localeCompare(n.title):g==="created-asc"?(e.createdAt||"").localeCompare(n.createdAt||""):g==="created-desc"?(n.createdAt||"").localeCompare(e.createdAt||""):(n.updatedAt||"").localeCompare(e.updatedAt||"")),o},j=()=>{const t=q.filter(o=>{if(d.size===0)return!0;for(const e of d)if(!o.tagIds.includes(e))return!1;return!0});return K(t)},F=()=>{const t=u.filter(e=>!e.archived||d.has(e.tagId));if(t.length===0){h.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}h.innerHTML="";const o=document.createDocumentFragment();t.forEach(e=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",d.has(e.tagId)),n.textContent=e.archived?`${e.name} (archived)`:e.name,n.addEventListener("click",()=>{d.has(e.tagId)?d.delete(e.tagId):d.add(e.tagId),F(),M()}),o.appendChild(n)}),h.appendChild(o)},M=()=>{const t=j();if($.textContent=`${t.length} note${t.length===1?"":"s"} shown`,t.length===0){v.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const o=new Map(u.map(e=>[e.tagId,e.name]));v.innerHTML=t.map(e=>{const n=e.tagIds.map(i=>o.get(i)).filter(i=>!!i);return`
          <article class="notes-item">
            <div class="notes-item-main">
              <div class="notes-item-title">${e.title}</div>
              <div class="notes-item-meta">
                <span>${e.pageCount} page${e.pageCount===1?"":"s"}</span>
                <span>${e.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${T(e.createdAt)}</span>
                <span>Updated ${T(e.updatedAt)}</span>
              </div>
              ${n.length>0?`<div class="notes-item-tags">${n.map(i=>`<span class="notes-item-tag">${i}</span>`).join("")}</div>`:""}
            </div>
            <div class="notes-item-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
            </div>
          </article>
        `}).join("")},x=()=>{p.hidden=!0,s(c,"","info"),w.reset()},R=()=>{if(u.length===0){b.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}b.innerHTML=u.map(t=>`
          <article class="notes-tag-manager-item" data-tag-id="${t.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${t.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${t.archived?"Archived":"Active"}</span>
                <span>Created ${T(t.createdAt)}</span>
                <span>Updated ${T(t.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${t.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${t.archived?"restore":"archive"}" data-tag-id="${t.tagId}">${t.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${t.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},W=()=>{R(),s(c,"","info"),p.hidden=!1,S.focus()},y=async t=>{s(l,t||"Loading notes…","info");try{const[o,e]=await Promise.all([nt(),ot()]);q=o,u=e,F(),M(),R(),s(l,"","info")}catch(o){s(l,o instanceof Error?o.message:"Failed to load notes.","error")}},z=async(t,o)=>{const e=u.find(n=>n.tagId===o);if(!e)throw new Error("Tag not found.");try{if(t==="rename"){const n=window.prompt("Rename tag",e.name);if(!n?.trim())return;await C(e.tagId,{name:n.trim()})}else t==="archive"?(await C(e.tagId,{archived:!0}),d.delete(e.tagId)):t==="restore"?await C(e.tagId,{archived:!1}):(await st(e.tagId),d.delete(e.tagId));await y("Refreshing tags…"),s(c,"Updated tags.","success")}catch(n){const i=n instanceof Error?n.message:"Failed to update tags.";s(c,i,"error"),s(l,i,"error")}};A.addEventListener("click",()=>{y("Refreshing notes…")}),E.addEventListener("click",()=>{const t=window.prompt("New note title","Untitled note");t!==null&&(async()=>{try{const o=await et({title:t.trim()||"Untitled note"});window.location.href=U(o.pdfKey)}catch(o){s(l,o instanceof Error?o.message:"Failed to create note.","error")}})()}),B.addEventListener("click",()=>{W()}),k.addEventListener("click",x),p.addEventListener("click",t=>{t.target===p&&x()}),w.addEventListener("submit",t=>{t.preventDefault();const o=S.value.trim();if(!o){s(c,"Tag name is required.","error");return}(async()=>{try{await at(o),w.reset(),await y("Refreshing tags…"),s(c,`Added tag “${o}”.`,"success")}catch(e){const n=e instanceof Error?e.message:"Failed to create tag.";s(c,n,"error"),s(l,n,"error")}})()}),b.addEventListener("click",t=>{const e=t.target?.closest("[data-action]");if(!e)return;const n=e.dataset.action,i=e.dataset.tagId;!i||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||z(n,i)}),f.addEventListener("change",()=>{g=f.value||"updated-desc",ct(g),M()}),v.addEventListener("click",t=>{const n=t.target?.closest("[data-open-note]")?.dataset.openNote;n&&(window.location.href=U(n))}),await y(),await rt()||(window.location.href="/auth")};export{mt as mountNotesPage};
