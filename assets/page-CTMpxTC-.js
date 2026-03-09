import{o as D,p as H,b as P,m as O,e as K,j,i as z,k as W,l as G,$ as V,a0 as _,a1 as Y,a2 as Z,a3 as b,a4 as J}from"./UserMenu-C3RY53el.js";import{g as Q,s as X}from"./authSession-UeMfkdPT.js";const A="dwmt-notes-sort",ee=()=>`
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
  </div>
`,E=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?t:r.toLocaleString()},u=(t,r,p)=>{if(!r){t.hidden=!0,t.textContent="",t.setAttribute("data-tone","");return}t.hidden=!1,t.textContent=r,t.setAttribute("data-tone",p)},te=t=>{try{localStorage.setItem(A,t)}catch{}},ne=()=>{try{const t=localStorage.getItem(A);if(t==="updated-desc"||t==="created-desc"||t==="created-asc"||t==="title-asc")return t}catch{}return"updated-desc"},$=t=>{const r=new URL("/whiteboard/",window.location.origin);return r.searchParams.set("openPdfKey",t),r.toString()},re=async()=>{const t=document.querySelector("#app");if(!t)throw new Error("Missing #app root");const r=D();if(r!=="tutor"&&r!=="student"){window.location.href="/whiteboard/";return}const p=H().map(n=>n.trim().toLowerCase()),k=p.includes("admin"),y=p.includes("mailbox");t.innerHTML=ee(),t.appendChild(P()),O(),K();const S=t.querySelector("#notesAppBarContainer");if(!S)throw new Error("Missing notes app bar container");const x=j();let N=0;if(y)try{N=await z()}catch(n){console.warn("Failed to load inbox unread count",n)}const F=W({currentApp:"notes",onAppChange:n=>{if(n==="whiteboard"){window.location.href="/whiteboard/";return}if(n==="activity"){window.location.href="/activity/";return}if(n==="inbox"){window.location.href="/mailbox/";return}if(n==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(n==="user-management"){window.location.href="/user-management/";return}n==="profile"&&(window.location.href="/profile/")},rightContent:x,userRole:r,isAdmin:k,hasMailboxAccess:y,unreadInboxCount:N});S.appendChild(F),await G({root:t,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await X(),window.location.href="/auth"}});const c=t.querySelector("#notesStatus"),m=t.querySelector("#notesTagFilters"),C=t.querySelector("#notesSummary"),g=t.querySelector("#notesList"),T=t.querySelector("#notesRefreshBtn"),L=t.querySelector("#notesNewBtn"),B=t.querySelector("#notesManageTagsBtn"),f=t.querySelector("#notesSortSelect");if(!c||!m||!C||!g||!T||!L||!B||!f)throw new Error("Missing notes page controls");let M=[],l=[];const i=new Set;let d=ne();f.value=d;const R=n=>{const o=[...n];return o.sort((e,a)=>d==="title-asc"?e.title.localeCompare(a.title):d==="created-asc"?(e.createdAt||"").localeCompare(a.createdAt||""):d==="created-desc"?(a.createdAt||"").localeCompare(e.createdAt||""):(a.updatedAt||"").localeCompare(e.updatedAt||"")),o},U=()=>{const n=M.filter(o=>{if(i.size===0)return!0;for(const e of i)if(!o.tagIds.includes(e))return!1;return!0});return R(n)},I=()=>{const n=l.filter(e=>!e.archived||i.has(e.tagId));if(n.length===0){m.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}m.innerHTML="";const o=document.createDocumentFragment();n.forEach(e=>{const a=document.createElement("button");a.type="button",a.className="notes-tag-chip",a.classList.toggle("is-active",i.has(e.tagId)),a.textContent=e.archived?`${e.name} (archived)`:e.name,a.addEventListener("click",()=>{i.has(e.tagId)?i.delete(e.tagId):i.add(e.tagId),I(),w()}),o.appendChild(a)}),m.appendChild(o)},w=()=>{const n=U();if(C.textContent=`${n.length} note${n.length===1?"":"s"} shown`,n.length===0){g.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const o=new Map(l.map(e=>[e.tagId,e.name]));g.innerHTML=n.map(e=>{const a=e.tagIds.map(s=>o.get(s)).filter(s=>!!s);return`
          <article class="notes-item">
            <div class="notes-item-main">
              <div class="notes-item-title">${e.title}</div>
              <div class="notes-item-meta">
                <span>${e.pageCount} page${e.pageCount===1?"":"s"}</span>
                <span>${e.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${E(e.createdAt)}</span>
                <span>Updated ${E(e.updatedAt)}</span>
              </div>
              ${a.length>0?`<div class="notes-item-tags">${a.map(s=>`<span class="notes-item-tag">${s}</span>`).join("")}</div>`:""}
            </div>
            <div class="notes-item-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-open-note="${e.pdfKey}">Open in Whiteboard</button>
            </div>
          </article>
        `}).join("")},v=async n=>{u(c,n||"Loading notes…","info");try{const[o,e]=await Promise.all([_(),Y()]);M=o,l=e,I(),w(),u(c,"","info")}catch(o){u(c,o instanceof Error?o.message:"Failed to load notes.","error")}},q=async()=>{const n=l.map(a=>`${a.archived?"[archived] ":""}${a.name}`).join(", "),o=window.prompt(`Manage tags: new, rename, archive, restore, delete
Current tags: ${n||"none"}`,"new");if(!o)return;const e=o.trim().toLowerCase();try{if(e==="new"){const a=window.prompt("New tag name","");if(!a?.trim())return;await Z(a.trim())}else{const a=window.prompt("Tag name","");if(!a?.trim())return;const s=l.find(h=>h.name.toLowerCase()===a.trim().toLowerCase());if(!s)throw new Error("Tag not found.");if(e==="rename"){const h=window.prompt("Rename tag to",s.name);if(!h?.trim())return;await b(s.tagId,{name:h.trim()})}else if(e==="archive")await b(s.tagId,{archived:!0}),i.delete(s.tagId);else if(e==="restore")await b(s.tagId,{archived:!1});else if(e==="delete")await J(s.tagId),i.delete(s.tagId);else throw new Error("Unknown action.")}await v("Refreshing tags…")}catch(a){u(c,a instanceof Error?a.message:"Failed to update tags.","error")}};T.addEventListener("click",()=>{v("Refreshing notes…")}),L.addEventListener("click",()=>{const n=window.prompt("New note title","Untitled note");n!==null&&(async()=>{try{const o=await V({title:n.trim()||"Untitled note"});window.location.href=$(o.pdfKey)}catch(o){u(c,o instanceof Error?o.message:"Failed to create note.","error")}})()}),B.addEventListener("click",()=>{q()}),f.addEventListener("change",()=>{d=f.value||"updated-desc",te(d),w()}),g.addEventListener("click",n=>{const a=n.target?.closest("[data-open-note]")?.dataset.openNote;a&&(window.location.href=$(a))}),await v(),await Q()||(window.location.href="/auth")};export{re as mountNotesPage};
