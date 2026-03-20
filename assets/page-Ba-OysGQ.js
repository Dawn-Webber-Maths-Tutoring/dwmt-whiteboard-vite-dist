import{d as Je,t as ct,u as lt,b as ut,m as ht,e as gt,n as mt,k as pt,o as vt,p as ft,v as wt,aa as bt,ab as yt,ac as St,V as Tt,ad as Mt,ae as Ct,i as Et,l as It,af as Lt,ag as $t,ah as At,ai as Se,aj as Nt,c as kt,ak as Pt,al as Te}from"./UserMenu-Bj1YS3xO.js";import{a as xt,p as Rt,_ as Ut}from"./pdf.worker.min-Cbk1w7C7.js";import{b as Me,a as Ge,s as qt}from"./dialogs-1-2n60fz.js";import{r as Ye,s as Bt}from"./notePreviewCache-DZmGiybC.js";import{g as Xe,s as Dt}from"./authSession-8_kqKGyk.js";import{T as Ft}from"./trash-2-SUB3PdBJ.js";import{A as Ht}from"./arrow-up-right-C4fl7S4l.js";const Ot=["svg",Je,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];const _t=["svg",Je,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]],Ze="dwmt-notes-sort",Wt=220;Ut.workerSrc=Rt;const Vt=()=>`
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
        <div id="notesContextMenu" class="notes-context-menu" hidden>
          <button type="button" class="notes-context-menu-item" data-notes-context-action="rename">Rename</button>
        </div>
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
    <div id="noteShareModal" class="notes-modal-backdrop" hidden>
      <div class="notes-modal notes-share-modal" role="dialog" aria-modal="true" aria-labelledby="noteShareModalTitle">
        <header class="notes-modal-header">
          <div>
            <h3 id="noteShareModalTitle">Share note</h3>
            <p id="noteShareModalSubtitle">Choose who can view or edit this note.</p>
          </div>
          <button id="noteShareModalClose" type="button" class="notes-modal-close" aria-label="Close note sharing">×</button>
        </header>
        <div id="noteShareModalStatus" class="notes-status" hidden></div>
        <div class="notes-share-add-row">
          <input id="noteShareSearchInput" class="notes-modal-input" type="search" placeholder="Search by name or email" autocomplete="off" />
          <select id="noteShareAccessSelect" class="notes-modal-input notes-share-access-select">
            <option value="editor">Can make changes</option>
            <option value="viewer">Can view</option>
          </select>
        </div>
        <div id="noteShareSearchHint" class="notes-share-search-hint"></div>
        <div id="noteShareSearchResults" class="notes-share-search-results"></div>
        <div id="noteSharePeopleList" class="notes-share-people-list"></div>
        <div class="notes-modal-actions">
          <button id="noteShareCancel" type="button" class="notes-btn notes-btn-secondary">Cancel</button>
          <button id="noteShareSave" type="button" class="notes-btn">Done</button>
        </div>
      </div>
    </div>
  </div>
`,me=o=>{if(!o)return"—";const d=new Date(o);return Number.isNaN(d.getTime())?o:d.toLocaleString()},i=(o,d,l)=>{if(!d){o.hidden=!0,o.textContent="",o.setAttribute("data-tone","");return}o.hidden=!1,o.textContent=d,o.setAttribute("data-tone",l)},Z=(o,d)=>{const u=(o instanceof Error?o.message:d).replace(/^(GET|POST|PATCH|DELETE)\s+\/[^\s]+\s+failed\s+\(\d+\):\s*/i,"");return/only the note owner/i.test(u)?"You don't have permission to change this note.":/authenticated user required/i.test(u)?"Please sign in again and retry.":u||d},Kt=o=>{try{localStorage.setItem(Ze,o)}catch{}},zt=()=>{try{const o=localStorage.getItem(Ze);if(o==="updated-desc"||o==="created-desc"||o==="created-asc"||o==="title-asc")return o}catch{}return"updated-desc"},Ce=o=>{const d=new URL("/whiteboard/",window.location.origin);return d.searchParams.set("openPdfKey",o),d.toString()},jt=o=>{const d=o.trim();if(!d)throw new Error("VITE_HTTP_API_ENDPOINT is empty");return(/^https?:\/\//i.test(d)?d:`https://${d}`).replace(/\/$/,"")},Gt=jt("https://6a6bgkrr3l.execute-api.af-south-1.amazonaws.com"),Yt=async o=>{const l=(await Xe())?.getIdToken().getJwtToken();if(!l)throw new Error("Missing session token for note preview");const u=await fetch(`${Gt}/notes/${encodeURIComponent(o)}/snapshot`,{headers:{Authorization:`Bearer ${l}`}}),b=await u.json();if(!u.ok||typeof b.url!="string")throw new Error(typeof b.error=="string"?b.error:`Failed to fetch note snapshot (${u.status})`);return b.url},Jt=async o=>{const l=await xt({url:o}).promise;let u=null;try{u=await l.getPage(1);const b=u.getViewport({scale:1}),Q=Wt/Math.max(1,b.width),F=u.getViewport({scale:Q}),L=document.createElement("canvas"),ee=L.getContext("2d");if(!ee)throw new Error("Canvas 2D context unavailable");return L.width=Math.max(1,Math.floor(F.width)),L.height=Math.max(1,Math.floor(F.height)),await u.render({canvasContext:ee,viewport:F}).promise,L.toDataURL("image/webp",.72)}finally{u?.cleanup(),await l.destroy()}},Ie="promotionPackage",Xt=()=>{const d=new URLSearchParams(window.location.search).get(Ie);return d?.trim()?d.trim():null},Ee=()=>{const o=new URL(window.location.href);o.searchParams.delete(Ie),window.history.replaceState({},"",o.toString())},Zt=async o=>{const d=await fetch(o,{cache:"no-store"});if(!d.ok)throw new Error(`Failed to load promotion package (${d.status})`);const l=await d.json();if(l.kind!=="note"||typeof l.promotionKey!="string"||typeof l.title!="string"||typeof l.pageCount!="number"||!Array.isArray(l.tagNames)||typeof l.snapshotUrl!="string")throw new Error("Promotion package was incomplete");return l},ia=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const d=ct();if(d!=="tutor"&&d!=="student"){window.location.href="/whiteboard/";return}const l=lt().map(e=>e.trim().toLowerCase()),u=l.includes("admin"),b=l.includes("mailbox");o.innerHTML=Vt(),o.appendChild(ut()),ht(),gt();const Q=o.querySelector("#notesAppBarContainer");if(!Q)throw new Error("Missing notes app bar container");const F=mt();let L=0;if(b)try{L=await pt()}catch(e){console.warn("Failed to load inbox unread count",e)}const ee=vt({currentApp:"notes",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard/";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="inbox"){window.location.href="/mailbox/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="issues"){window.location.href="/issues/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:F,userRole:d,isAdmin:u,hasMailboxAccess:b,unreadInboxCount:L});Q.appendChild(ee),await ft({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await Dt(),window.location.href="/auth"}});const c=o.querySelector("#notesStatus"),te=o.querySelector("#notesTagFilters"),Le=o.querySelector("#notesSummary"),m=o.querySelector("#notesList"),v=o.querySelector("#notesContextMenu"),$e=o.querySelector("#notesRefreshBtn"),Ae=o.querySelector("#notesNewBtn"),Ne=o.querySelector("#notesManageTagsBtn"),ae=o.querySelector("#notesSortSelect"),H=o.querySelector("#notesTagModal"),ke=o.querySelector("#notesTagModalClose"),oe=o.querySelector("#notesTagModalList"),T=o.querySelector("#notesTagModalStatus"),ne=o.querySelector("#notesTagCreateForm"),pe=o.querySelector("#notesTagCreateInput"),O=o.querySelector("#noteAssignTagsModal"),Pe=o.querySelector("#noteAssignTagsModalClose"),x=o.querySelector("#noteAssignTagsModalStatus"),xe=o.querySelector("#noteAssignTagsModalSubtitle"),se=o.querySelector("#noteAssignTagsModalList"),Re=o.querySelector("#noteAssignTagsCancel"),Ue=o.querySelector("#noteAssignTagsSave"),_=o.querySelector("#noteShareModal"),qe=o.querySelector("#noteShareModalClose"),W=o.querySelector("#noteShareModalStatus"),Be=o.querySelector("#noteShareModalSubtitle"),R=o.querySelector("#noteShareSearchInput"),U=o.querySelector("#noteShareAccessSelect"),re=o.querySelector("#noteShareSearchHint"),$=o.querySelector("#noteShareSearchResults"),V=o.querySelector("#noteSharePeopleList"),De=o.querySelector("#noteShareCancel"),Fe=o.querySelector("#noteShareSave");if(!c||!te||!Le||!m||!v||!$e||!Ae||!Ne||!ae||!H||!ke||!oe||!T||!ne||!pe||!O||!Pe||!x||!xe||!se||!Re||!Ue||!_||!qe||!W||!Be||!R||!U||!re||!$||!V||!De||!Fe)throw new Error("Missing notes page controls");let f=[],M=[];const y=new Set;let K=null;const A=new Set;let q=null;const p=new Set,h=new Set;let z=[],j=!0,B="",ve=0,C=null;const G=new Map,fe=new Map;let D=zt();const E=u?wt():null;let we=null,ie=null,He=0;ae.value=D;const de=()=>{ie!==null&&(window.clearTimeout(ie),ie=null)},ce=()=>{v.hidden=!0,v.removeAttribute("style"),we=null},Oe=(e,a,t)=>{we=e,v.hidden=!1,v.style.left="0px",v.style.top="0px";const n=v.getBoundingClientRect(),s=Math.min(Math.max(12,a),Math.max(12,window.innerWidth-n.width-12)),r=Math.min(Math.max(12,t),Math.max(12,window.innerHeight-n.height-12));v.style.left=`${s}px`,v.style.top=`${r}px`},Qe=e=>{const a=[...e];return a.sort((t,n)=>D==="title-asc"?t.title.localeCompare(n.title):D==="created-asc"?(t.createdAt||"").localeCompare(n.createdAt||""):D==="created-desc"?(n.createdAt||"").localeCompare(t.createdAt||""):(n.updatedAt||"").localeCompare(t.updatedAt||"")),a},et=()=>{const e=f.filter(a=>{if(y.size===0)return!0;for(const t of y)if(!a.tagIds.includes(t))return!1;return!0});return Qe(e)},_e=()=>{const e=M.filter(t=>!t.archived||y.has(t.tagId));if(e.length===0){te.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}te.innerHTML="";const a=document.createDocumentFragment();e.forEach(t=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",y.has(t.tagId)),n.textContent=t.archived?`${t.name} (archived)`:t.name,n.addEventListener("click",()=>{y.has(t.tagId)?y.delete(t.tagId):y.add(t.tagId),_e(),ye()}),a.appendChild(n)}),te.appendChild(a)},be=(e,a)=>{const t=m.querySelector(`[data-note-preview-frame="${e}"]`);t&&(t.innerHTML=`<img class="notes-item-preview-image" src="${a}" alt="" loading="lazy" />`)},tt=async e=>{const a=e.noteId,t=G.get(a);if(t){be(e.noteId,t);return}const n=Ye(e.noteId);if(n){G.set(a,n),be(e.noteId,n);return}const s=fe.get(a);if(s){await s;return}const r=(async()=>{try{const g=await Yt(e.noteId),w=await Jt(g);G.set(a,w),Bt(e.noteId,w),be(e.noteId,w)}catch{}finally{fe.delete(a)}})();fe.set(a,r),await r},at=async e=>{for(const a of e)await tt(a)},ye=()=>{const e=et();if(Le.textContent=`${e.length} note${e.length===1?"":"s"} shown`,e.length===0){m.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const a=new Map(M.map(t=>[t.tagId,t.name]));m.innerHTML=e.map(t=>{const n=t.tagIds.map(P=>a.get(P)).filter(P=>!!P),s=t.noteId,r=G.get(s)??Ye(t.noteId);r&&G.set(s,r);const g=t.accessLevel==="owner",w=t.accessLevel==="owner",k=new Set([...t.sharedWithViewerEmails,...t.sharedWithEditorEmails]).size,ge=t.accessLevel==="owner"?k>0?`Shared with ${k} other${k===1?"":"s"}`:"Private":t.visibility==="shared"?"Shared with me":"Private";return`
          <article class="notes-item" data-note-id="${t.noteId}">
            <button type="button" class="notes-item-preview notes-item-preview-btn" data-open-note="${t.pdfKey}" aria-label="Open ${t.title} in Whiteboard" title="Open in Whiteboard">
              ${r?`<img class="notes-item-preview-image" data-note-preview-frame="${t.noteId}" src="${r}" alt="" loading="lazy" />`:`<div class="notes-item-preview-placeholder" data-note-preview-frame="${t.noteId}">Preview</div>`}
            </button>
            <div class="notes-item-main">
              <div class="notes-item-header">
                <div class="notes-item-title">${t.title}</div>
                <div class="notes-item-actions">
                  ${g?`<button type="button" class="notes-btn notes-btn-secondary notes-promote-btn" data-share-note="${t.noteId}" aria-label="Share note" title="Share note"><span class="notes-promote-btn-icon" data-lucide="users" aria-hidden="true"></span></button>`:""}
                  <button type="button" class="notes-tag-btn" data-note-tags="${t.noteId}" aria-label="Edit tags" title="${w?"Edit tags":"Only the owner can edit tags"}" ${w?"":"disabled"}>
                    <span class="notes-tag-btn-icon notes-tag-btn-icon-yellow" data-lucide="tag" aria-hidden="true"></span>
                    <span class="notes-tag-btn-icon notes-tag-btn-icon-blue" data-lucide="tag" aria-hidden="true"></span>
                  </button>
                  ${E?`<button type="button" class="notes-btn notes-btn-secondary notes-promote-btn" data-promote-note="${t.noteId}" aria-label="Promote to ${E.shortLabel}" title="${w?`Promote to ${E.shortLabel}`:"Only the owner can promote this note"}" ${w?"":"disabled"}><span class="notes-promote-btn-icon" data-lucide="arrow-up-right" aria-hidden="true"></span></button>`:""}
                  <button type="button" class="worksheet-remove-btn" data-delete-note="${t.noteId}" aria-label="Delete note" title="${w?"Delete note":"Only the owner can delete this note"}" ${w?"":"disabled"}><span class="worksheet-remove-btn-icon" data-lucide="trash-2" aria-hidden="true"></span></button>
                </div>
              </div>
              <div class="notes-item-meta">
                <span>${t.pageCount} page${t.pageCount===1?"":"s"}</span>
                <span>${ge}</span>
                <span>Created ${me(t.createdAt)}</span>
                <span>Updated ${me(t.updatedAt)}</span>
              </div>
              ${n.length>0?`<div class="notes-item-tags">${n.map(P=>`<span class="notes-item-tag">${P}</span>`).join("")}</div>`:""}
            </div>
          </article>
        `}).join(""),kt({icons:{ArrowUpRight:Ht,Tag:Ot,Trash2:Ft,Users:_t},attrs:{width:"16",height:"16","stroke-width":"2"}},m),at(e)},We=()=>{H.hidden=!0,i(T,"","info"),ne.reset()},ot=()=>{if(M.length===0){se.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}se.innerHTML=M.map(e=>{const a=A.has(e.tagId)?"checked":"",t=e.archived?"disabled":"",n=e.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${e.tagId}" ${a} ${t} />
            <span>${e.name}${n}</span>
          </label>
        `}).join("")},le=()=>{O.hidden=!0,K=null,A.clear(),i(x,"","info")},Y=e=>e.trim().toLowerCase(),ue=()=>{const e=f.find(n=>n.noteId===q);if(!e){V.innerHTML='<div class="notes-empty-tags">Note not found.</div>';return}const a=[`
        <article class="notes-share-person is-owner">
          <div class="notes-share-person-main">
            <div class="notes-share-person-name">${e.ownerEmail||"Owner"}</div>
            <div class="notes-share-person-meta">Owner</div>
          </div>
          <div class="notes-share-person-role">Owner</div>
        </article>
      `],t=Array.from(new Set([...Array.from(h),...Array.from(p)])).sort((n,s)=>n.localeCompare(s));for(const n of t){const s=h.has(n)?"editor":"viewer";a.push(`
        <article class="notes-share-person" data-share-email="${n}">
          <div class="notes-share-person-main">
            <div class="notes-share-person-name">${n}</div>
            <div class="notes-share-person-meta">${s==="editor"?"Can make changes":"Can view"}</div>
          </div>
          <div class="notes-share-person-controls">
            <select class="notes-modal-input notes-share-person-select" data-share-access-email="${n}">
              <option value="editor" ${s==="editor"?"selected":""}>Can make changes</option>
              <option value="viewer" ${s==="viewer"?"selected":""}>Can view</option>
            </select>
            <button type="button" class="notes-btn notes-btn-secondary" data-remove-share-email="${n}">Remove</button>
          </div>
        </article>
      `)}t.length===0&&a.push('<div class="notes-empty-tags">Private note. Add people to share it.</div>'),V.innerHTML=a.join("")},he=()=>{_.hidden=!0,q=null,p.clear(),h.clear(),z=[],j=!0,B="",R.value="",U.value="editor",re.textContent="",$.innerHTML="",C!==null&&(window.clearTimeout(C),C=null),i(W,"","info")},N=()=>{const e=f.find(s=>s.noteId===q);if(!e){re.textContent="",$.innerHTML="";return}const a=Y(e.ownerEmail||""),t=U.value==="viewer"?"viewer":"editor",n=z.filter(s=>{const r=Y(s.email);return!r||r===a?!1:!p.has(r)&&!h.has(r)});if(re.textContent=B,!j){$.innerHTML='<div class="notes-empty-tags">No eligible people are available for sharing yet.</div>';return}if(n.length===0){$.innerHTML=B?"":'<div class="notes-empty-tags">No matching members found.</div>';return}$.innerHTML=n.map(s=>{const r=s.displayName?.trim()||s.email,g=s.displayName?.trim()&&s.displayName.trim().toLowerCase()!==s.email?s.email:t==="editor"?"Can make changes":"Can view";return`
          <button type="button" class="notes-share-search-result" data-add-share-email="${s.email}">
            <span class="notes-share-search-main">
              <span class="notes-share-search-name">${r}</span>
              <span class="notes-share-search-meta">${g}</span>
            </span>
            <span class="notes-share-search-action">${t==="editor"?"Add as editor":"Add as viewer"}</span>
          </button>
        `}).join("")},Ve=async e=>{const a=++ve;try{const t=await Pt(e);if(a!==ve)return;z=t.candidates,j=t.canShare,B=t.message||"",N()}catch(t){if(a!==ve)return;z=[],j=!0,B=t instanceof Error?t.message:"Failed to search members.",N()}},nt=e=>{const a=f.find(t=>t.noteId===e);if(!a){i(c,"Note not found.","error");return}q=e,p.clear(),h.clear(),a.sharedWithViewerEmails.forEach(t=>p.add(Y(t))),a.sharedWithEditorEmails.forEach(t=>h.add(Y(t))),Be.textContent=`People you add to “${a.title}” can view it or make changes.`,ue(),R.value="",U.value="editor",z=[],j=!0,B="Loading people…",N(),i(W,"","info"),_.hidden=!1,R.focus(),Ve("")},st=e=>{const a=f.find(t=>t.noteId===e);if(!a){i(c,"Note not found.","error");return}K=a.noteId,A.clear(),a.tagIds.forEach(t=>A.add(t)),xe.textContent=`Choose tags for “${a.title}”.`,ot(),i(x,"","info"),O.hidden=!1},Ke=()=>{if(M.length===0){oe.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}oe.innerHTML=M.map(e=>`
          <article class="notes-tag-manager-item" data-tag-id="${e.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${e.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${e.archived?"Archived":"Active"}</span>
                <span>Created ${me(e.createdAt)}</span>
                <span>Updated ${me(e.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${e.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${e.archived?"restore":"archive"}" data-tag-id="${e.tagId}">${e.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${e.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},rt=()=>{Ke(),i(T,"","info"),H.hidden=!1,pe.focus()},S=async e=>{i(c,e||"Loading notes…","info");try{const[a,t]=await Promise.all([$t(),At()]);f=a,M=t,_e(),ye(),Ke(),i(c,"","info")}catch(a){i(c,a instanceof Error?a.message:"Failed to load notes.","error")}},it=async(e,a)=>{const t=M.find(n=>n.tagId===a);if(!t)throw new Error("Tag not found.");try{if(e==="rename"){const n=await Me({title:"Rename tag",message:"Update the tag name.",initialValue:t.name,confirmLabel:"Rename"});if(!n?.trim())return;await Se(t.tagId,{name:n.trim()})}else e==="archive"?(await Se(t.tagId,{archived:!0}),y.delete(t.tagId)):e==="restore"?await Se(t.tagId,{archived:!1}):(await Nt(t.tagId),y.delete(t.tagId));await S("Refreshing tags…"),i(T,"Updated tags.","success")}catch(n){const s=n instanceof Error?n.message:"Failed to update tags.";i(T,s,"error"),i(c,s,"error")}};$e.addEventListener("click",()=>{S("Refreshing notes…")}),Ae.addEventListener("click",()=>{(async()=>{try{const e=await Me({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(e===null)return;const a=await bt({title:e.trim()||"Untitled note"});window.location.href=Ce(a.pdfKey)}catch(e){i(c,e instanceof Error?e.message:"Failed to create note.","error")}})()}),Ne.addEventListener("click",()=>{rt()}),ke.addEventListener("click",We),H.addEventListener("click",e=>{e.target===H&&We()}),O.addEventListener("click",e=>{e.target===O&&le()}),ne.addEventListener("submit",e=>{e.preventDefault();const a=pe.value.trim();if(!a){i(T,"Tag name is required.","error");return}(async()=>{try{await yt(a),ne.reset(),await S("Refreshing tags…"),i(T,`Added tag “${a}”.`,"success")}catch(t){const n=t instanceof Error?t.message:"Failed to create tag.";i(T,n,"error"),i(c,n,"error")}})()}),oe.addEventListener("click",e=>{const t=e.target?.closest("[data-action]");if(!t)return;const n=t.dataset.action,s=t.dataset.tagId;!s||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||it(n,s)}),ae.addEventListener("change",()=>{D=ae.value||"updated-desc",Kt(D),ye()}),m.addEventListener("click",e=>{const a=e.target;!v.hidden&&!a?.closest("#notesContextMenu")&&ce();const n=a?.closest("[data-share-note]")?.dataset.shareNote;if(n){nt(n);return}const r=a?.closest("[data-promote-note]")?.dataset.promoteNote;if(r&&E){(async()=>{try{i(c,`Preparing note promotion for ${E.shortLabel}…`,"info");const{packageUrl:I}=await St(r),J=new URL(E.id==="local"?"http://localhost:5173/notes/":`https://${E.host}/notes/`);J.searchParams.set(Ie,I),window.location.href=J.toString()}catch(I){const J=Z(I,"Failed to prepare note promotion."),X=Tt()||"(missing email)",dt=Mt()||"(missing cognito:username)";console.error("Note promotion failed",{noteId:r,targetEnvironment:E.id,authEmail:X,authUsername:dt,error:I}),i(c,`Failed to prepare note promotion. ${J}`,"error")}})();return}const g=a?.closest("[data-note-tags]"),k=a?.closest("[data-delete-note]")?.dataset.deleteNote;if(k){(async()=>{const I=f.find(X=>X.noteId===k);if(!I){i(c,"Note not found.","error");return}if(await Ge({title:"Delete note",message:`Delete "${I.title}"? This action cannot be undone.`,confirmLabel:"Delete note",cancelLabel:"Cancel"}))try{await Ct(k),await S("Refreshing notes…"),i(c,`Deleted note: ${I.title}`,"success")}catch(X){i(c,Z(X,"Failed to delete note."),"error")}})();return}const ge=g?.dataset.noteTags;if(ge){st(ge);return}const P=a?.closest("[data-open-note]");if(Date.now()<He)return;const je=P?.dataset.openNote;je&&(window.location.href=Ce(je))}),m.addEventListener("contextmenu",e=>{const a=e.target;if(a?.closest("[data-share-note], [data-promote-note], [data-note-tags], [data-delete-note]"))return;const t=a?.closest("[data-note-id]"),n=t?.dataset.noteId;if(!t||!n)return;const s=f.find(r=>r.noteId===n);!s||s.accessLevel!=="owner"||(e.preventDefault(),Oe(n,e.clientX,e.clientY))}),m.addEventListener("pointerdown",e=>{if(e.pointerType!=="touch")return;const a=e.target;if(a?.closest("[data-share-note], [data-promote-note], [data-note-tags], [data-delete-note]"))return;const t=a?.closest("[data-note-id]"),n=t?.dataset.noteId;if(!t||!n)return;const s=f.find(r=>r.noteId===n);!s||s.accessLevel!=="owner"||(de(),ie=window.setTimeout(()=>{He=Date.now()+500;const r=t.getBoundingClientRect();Oe(n,r.left+Math.min(r.width*.7,r.width-18),r.top+Math.min(r.height*.35,r.height-18))},450))}),m.addEventListener("pointerup",de),m.addEventListener("pointercancel",de),m.addEventListener("pointermove",de),m.addEventListener("keydown",e=>{const t=e.target?.closest("[data-open-note]");if(!t||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();const n=t.dataset.openNote;n&&(window.location.href=Ce(n))}),v.addEventListener("click",e=>{const t=e.target?.closest("[data-notes-context-action]")?.dataset.notesContextAction,n=we;t!=="rename"||!n||(ce(),(async()=>{const s=f.find(r=>r.noteId===n);if(!s){i(c,"Note not found.","error");return}try{const g=(await Me({title:"Rename note",initialValue:s.title||"Untitled note",confirmLabel:"Rename"}))?.trim();if(!g)return;await Te(n,{title:g}),await S("Refreshing notes…"),i(c,"Renamed note.","success")}catch(r){i(c,Z(r,"Failed to rename note."),"error")}})())}),document.addEventListener("click",e=>{e.target?.closest("#notesContextMenu")||ce()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&ce()}),Pe.addEventListener("click",le),Re.addEventListener("click",le),qe.addEventListener("click",he),De.addEventListener("click",he),_.addEventListener("click",e=>{e.target===_&&he()}),R.addEventListener("input",()=>{C!==null&&(window.clearTimeout(C),C=null);const e=R.value;C=window.setTimeout(()=>{C=null,Ve(e)},180)}),U.addEventListener("change",()=>{N()}),$.addEventListener("click",e=>{const a=e.target,t=Y(a?.closest("[data-add-share-email]")?.dataset.addShareEmail||"");t&&(p.delete(t),h.delete(t),U.value==="viewer"?p.add(t):h.add(t),ue(),N(),i(W,"","info"))}),V.addEventListener("change",e=>{const a=e.target,t=a?.dataset.shareAccessEmail;t&&(p.delete(t),h.delete(t),a.value==="viewer"?p.add(t):h.add(t),ue(),N())}),V.addEventListener("click",e=>{const t=e.target?.closest("[data-remove-share-email]")?.dataset.removeShareEmail;t&&(p.delete(t),h.delete(t),ue(),N())}),Fe.addEventListener("click",()=>{q&&(async()=>{try{await Te(q,{visibility:p.size>0||h.size>0?"shared":"private",sharedWithStudentIds:[],sharedWithViewerEmails:Array.from(p),sharedWithEditorEmails:Array.from(h)}),await S("Refreshing notes…"),he(),i(c,"Updated sharing.","success")}catch(e){const a=Z(e,"Failed to update sharing.");i(W,a,"error"),i(c,a,"error")}})()}),se.addEventListener("change",e=>{const a=e.target,t=a?.dataset.assignTagId;t&&(a.checked?A.add(t):A.delete(t))}),Ue.addEventListener("click",()=>{if(!K)return;if(!f.find(a=>a.noteId===K)){i(x,"Note not found.","error");return}(async()=>{try{await Te(K,{tagIds:Array.from(A)}),await S("Refreshing notes…"),i(x,"Updated note tags.","success"),le()}catch(a){const t=Z(a,"Failed to update note tags.");i(x,t,"error"),i(c,t,"error")}})()});const ze=Xt();ze&&(async()=>{try{const e=Et();if(e!=="beta"&&e!=="prod")throw new Error("Promoted notes can only be imported in Beta or Production.");const a=await Zt(ze);if(await It(a.promotionKey)){await qt("Already promoted",`This note already exists in ${e==="prod"?"Production":"Beta"}.`),Ee();return}if(!await Ge({title:e==="prod"?"Promote note to Production":"Promote note to Beta",message:`Create "${a.title}" in ${e==="prod"?"Production":"Beta"}?`,confirmLabel:"Promote"})){Ee();return}i(c,"Importing promoted note…","info");const s=await Lt({title:a.title,pageCount:a.pageCount,promotionKey:a.promotionKey,tagNames:a.tagNames}),r=await fetch(a.snapshotUrl,{cache:"no-store"});if(!r.ok)throw new Error(`Failed to fetch note snapshot (${r.status})`);const g=await fetch(s.uploadUrl,{method:"PUT",headers:{"Content-Type":"application/pdf"},body:await r.blob()});if(!g.ok)throw new Error(`Failed to upload promoted note (${g.status})`);Ee(),await S("Refreshing notes…"),i(c,`Promoted note: ${a.title}`,"success")}catch(e){i(c,e instanceof Error?e.message:"Failed to import note.","error")}})(),await S(),await Xe()||(window.location.href="/auth")};export{ia as mountNotesPage};
