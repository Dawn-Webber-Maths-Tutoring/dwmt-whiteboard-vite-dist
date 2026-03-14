import{d as Ye,s as dt,t as ct,b as lt,m as ut,e as ht,k as gt,j as mt,n as pt,o as ft,u as vt,a7 as wt,a8 as bt,a9 as yt,T as St,aa as Tt,ab as Mt,B as Ct,l as Et,ac as It,ad as Lt,ae as $t,af as we,ag as At,c as kt,ah as Nt,ai as be}from"./UserMenu-CBo7LqNK.js";import{a as Pt,p as xt,_ as Rt}from"./pdf.worker.min-Cbk1w7C7.js";import{b as ye,a as je,s as Ut}from"./dialogs-1-2n60fz.js";import{r as Ge,s as qt}from"./notePreviewCache-DZmGiybC.js";import{g as Je,s as Bt}from"./authSession-CN5DKgpc.js";import{T as Dt}from"./trash-2-mOe_qew6.js";import{A as Ft}from"./arrow-up-right-7DFjZNkV.js";const Ht=["svg",Ye,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];const _t=["svg",Ye,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]],Xe="dwmt-notes-sort",Ot=220;Rt.workerSrc=xt;const Wt=()=>`
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
`,le=o=>{if(!o)return"—";const d=new Date(o);return Number.isNaN(d.getTime())?o:d.toLocaleString()},r=(o,d,l)=>{if(!d){o.hidden=!0,o.textContent="",o.setAttribute("data-tone","");return}o.hidden=!1,o.textContent=d,o.setAttribute("data-tone",l)},Kt=o=>{try{localStorage.setItem(Xe,o)}catch{}},Vt=()=>{try{const o=localStorage.getItem(Xe);if(o==="updated-desc"||o==="created-desc"||o==="created-asc"||o==="title-asc")return o}catch{}return"updated-desc"},Se=o=>{const d=new URL("/whiteboard/",window.location.origin);return d.searchParams.set("openPdfKey",o),d.toString()},zt=o=>{const d=o.trim();if(!d)throw new Error("VITE_HTTP_API_ENDPOINT is empty");return(/^https?:\/\//i.test(d)?d:`https://${d}`).replace(/\/$/,"")},jt=zt("https://6a6bgkrr3l.execute-api.af-south-1.amazonaws.com"),Gt=async o=>{const l=(await Je())?.getIdToken().getJwtToken();if(!l)throw new Error("Missing session token for note preview");const p=await fetch(`${jt}/notes/${encodeURIComponent(o)}/snapshot`,{headers:{Authorization:`Bearer ${l}`}}),w=await p.json();if(!p.ok||typeof w.url!="string")throw new Error(typeof w.error=="string"?w.error:`Failed to fetch note snapshot (${p.status})`);return w.url},Yt=async o=>{const l=await Pt({url:o}).promise;let p=null;try{p=await l.getPage(1);const w=p.getViewport({scale:1}),J=Ot/Math.max(1,w.width),D=p.getViewport({scale:J}),L=document.createElement("canvas"),X=L.getContext("2d");if(!X)throw new Error("Canvas 2D context unavailable");return L.width=Math.max(1,Math.floor(D.width)),L.height=Math.max(1,Math.floor(D.height)),await p.render({canvasContext:X,viewport:D}).promise,L.toDataURL("image/webp",.72)}finally{p?.cleanup(),await l.destroy()}},Me="promotionPackage",Jt=()=>{const d=new URLSearchParams(window.location.search).get(Me);return d?.trim()?d.trim():null},Te=()=>{const o=new URL(window.location.href);o.searchParams.delete(Me),window.history.replaceState({},"",o.toString())},Xt=async o=>{const d=await fetch(o,{cache:"no-store"});if(!d.ok)throw new Error(`Failed to load promotion package (${d.status})`);const l=await d.json();if(l.kind!=="note"||typeof l.promotionKey!="string"||typeof l.title!="string"||typeof l.pageCount!="number"||!Array.isArray(l.tagNames)||typeof l.snapshotUrl!="string")throw new Error("Promotion package was incomplete");return l},ra=async()=>{const o=document.querySelector("#app");if(!o)throw new Error("Missing #app root");const d=dt();if(d!=="tutor"&&d!=="student"){window.location.href="/whiteboard/";return}const l=ct().map(e=>e.trim().toLowerCase()),p=l.includes("admin"),w=l.includes("mailbox");o.innerHTML=Wt(),o.appendChild(lt()),ut(),ht();const J=o.querySelector("#notesAppBarContainer");if(!J)throw new Error("Missing notes app bar container");const D=gt();let L=0;if(w)try{L=await mt()}catch(e){console.warn("Failed to load inbox unread count",e)}const X=pt({currentApp:"notes",onAppChange:e=>{if(e==="whiteboard"){window.location.href="/whiteboard/";return}if(e==="activity"){window.location.href="/activity/";return}if(e==="inbox"){window.location.href="/mailbox/";return}if(e==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(e==="issues"){window.location.href="/issues/";return}if(e==="user-management"){window.location.href="/user-management/";return}e==="profile"&&(window.location.href="/profile/")},rightContent:D,userRole:d,isAdmin:p,hasMailboxAccess:w,unreadInboxCount:L});J.appendChild(X),await ft({root:o,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email",onSignOutClick:async()=>{await Bt(),window.location.href="/auth"}});const c=o.querySelector("#notesStatus"),Z=o.querySelector("#notesTagFilters"),Ce=o.querySelector("#notesSummary"),g=o.querySelector("#notesList"),f=o.querySelector("#notesContextMenu"),Ee=o.querySelector("#notesRefreshBtn"),Ie=o.querySelector("#notesNewBtn"),Le=o.querySelector("#notesManageTagsBtn"),Q=o.querySelector("#notesSortSelect"),F=o.querySelector("#notesTagModal"),$e=o.querySelector("#notesTagModalClose"),ee=o.querySelector("#notesTagModalList"),M=o.querySelector("#notesTagModalStatus"),te=o.querySelector("#notesTagCreateForm"),ue=o.querySelector("#notesTagCreateInput"),H=o.querySelector("#noteAssignTagsModal"),Ae=o.querySelector("#noteAssignTagsModalClose"),P=o.querySelector("#noteAssignTagsModalStatus"),ke=o.querySelector("#noteAssignTagsModalSubtitle"),ae=o.querySelector("#noteAssignTagsModalList"),Ne=o.querySelector("#noteAssignTagsCancel"),Pe=o.querySelector("#noteAssignTagsSave"),_=o.querySelector("#noteShareModal"),xe=o.querySelector("#noteShareModalClose"),O=o.querySelector("#noteShareModalStatus"),Re=o.querySelector("#noteShareModalSubtitle"),x=o.querySelector("#noteShareSearchInput"),R=o.querySelector("#noteShareAccessSelect"),oe=o.querySelector("#noteShareSearchHint"),$=o.querySelector("#noteShareSearchResults"),W=o.querySelector("#noteSharePeopleList"),Ue=o.querySelector("#noteShareCancel"),qe=o.querySelector("#noteShareSave");if(!c||!Z||!Ce||!g||!f||!Ee||!Ie||!Le||!Q||!F||!$e||!ee||!M||!te||!ue||!H||!Ae||!P||!ke||!ae||!Ne||!Pe||!_||!xe||!O||!Re||!x||!R||!oe||!$||!W||!Ue||!qe)throw new Error("Missing notes page controls");let b=[],C=[];const y=new Set;let K=null;const A=new Set;let U=null;const m=new Set,u=new Set;let V=[],z=!0,q="",he=0,E=null;const j=new Map,ge=new Map;let B=Vt();const I=vt();let me=null,ne=null,Be=0;Q.value=B;const se=()=>{ne!==null&&(window.clearTimeout(ne),ne=null)},re=()=>{f.hidden=!0,f.removeAttribute("style"),me=null},De=(e,a,t)=>{me=e,f.hidden=!1,f.style.left="0px",f.style.top="0px";const n=f.getBoundingClientRect(),s=Math.min(Math.max(12,a),Math.max(12,window.innerWidth-n.width-12)),i=Math.min(Math.max(12,t),Math.max(12,window.innerHeight-n.height-12));f.style.left=`${s}px`,f.style.top=`${i}px`},Ze=e=>{const a=[...e];return a.sort((t,n)=>B==="title-asc"?t.title.localeCompare(n.title):B==="created-asc"?(t.createdAt||"").localeCompare(n.createdAt||""):B==="created-desc"?(n.createdAt||"").localeCompare(t.createdAt||""):(n.updatedAt||"").localeCompare(t.updatedAt||"")),a},Qe=()=>{const e=b.filter(a=>{if(y.size===0)return!0;for(const t of y)if(!a.tagIds.includes(t))return!1;return!0});return Ze(e)},Fe=()=>{const e=C.filter(t=>!t.archived||y.has(t.tagId));if(e.length===0){Z.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags”.</div>';return}Z.innerHTML="";const a=document.createDocumentFragment();e.forEach(t=>{const n=document.createElement("button");n.type="button",n.className="notes-tag-chip",n.classList.toggle("is-active",y.has(t.tagId)),n.textContent=t.archived?`${t.name} (archived)`:t.name,n.addEventListener("click",()=>{y.has(t.tagId)?y.delete(t.tagId):y.add(t.tagId),Fe(),fe()}),a.appendChild(n)}),Z.appendChild(a)},pe=(e,a)=>{const t=g.querySelector(`[data-note-preview-frame="${e}"]`);t&&(t.innerHTML=`<img class="notes-item-preview-image" src="${a}" alt="" loading="lazy" />`)},et=async e=>{const a=e.noteId,t=j.get(a);if(t){pe(e.noteId,t);return}const n=Ge(e.noteId);if(n){j.set(a,n),pe(e.noteId,n);return}const s=ge.get(a);if(s){await s;return}const i=(async()=>{try{const h=await Gt(e.noteId),v=await Yt(h);j.set(a,v),qt(e.noteId,v),pe(e.noteId,v)}catch{}finally{ge.delete(a)}})();ge.set(a,i),await i},tt=async e=>{for(const a of e)await et(a)},fe=()=>{const e=Qe();if(Ce.textContent=`${e.length} note${e.length===1?"":"s"} shown`,e.length===0){g.innerHTML='<div class="notes-empty">No notes match the current tag filter.</div>';return}const a=new Map(C.map(t=>[t.tagId,t.name]));g.innerHTML=e.map(t=>{const n=t.tagIds.map(v=>a.get(v)).filter(v=>!!v),s=t.noteId,i=j.get(s)??Ge(t.noteId);i&&j.set(s,i);const h=t.accessLevel==="owner";return`
          <article class="notes-item" data-note-id="${t.noteId}">
            <button type="button" class="notes-item-preview notes-item-preview-btn" data-open-note="${t.pdfKey}" aria-label="Open ${t.title} in Whiteboard" title="Open in Whiteboard">
              ${i?`<img class="notes-item-preview-image" data-note-preview-frame="${t.noteId}" src="${i}" alt="" loading="lazy" />`:`<div class="notes-item-preview-placeholder" data-note-preview-frame="${t.noteId}">Preview</div>`}
            </button>
            <div class="notes-item-main">
              <div class="notes-item-header">
                <div class="notes-item-title">${t.title}</div>
                <div class="notes-item-actions">
                  ${h?`<button type="button" class="notes-btn notes-btn-secondary notes-promote-btn" data-share-note="${t.noteId}" aria-label="Share note" title="Share note"><span class="notes-promote-btn-icon" data-lucide="users" aria-hidden="true"></span></button>`:""}
                  <button type="button" class="notes-tag-btn" data-note-tags="${t.noteId}" aria-label="Edit tags" title="Edit tags">
                    <span class="notes-tag-btn-icon notes-tag-btn-icon-yellow" data-lucide="tag" aria-hidden="true"></span>
                    <span class="notes-tag-btn-icon notes-tag-btn-icon-blue" data-lucide="tag" aria-hidden="true"></span>
                  </button>
                  ${I?`<button type="button" class="notes-btn notes-btn-secondary notes-promote-btn" data-promote-note="${t.noteId}" aria-label="Promote to ${I.shortLabel}" title="Promote to ${I.shortLabel}"><span class="notes-promote-btn-icon" data-lucide="arrow-up-right" aria-hidden="true"></span></button>`:""}
                  <button type="button" class="worksheet-remove-btn" data-delete-note="${t.noteId}" aria-label="Delete note" title="Delete note"><span class="worksheet-remove-btn-icon" data-lucide="trash-2" aria-hidden="true"></span></button>
                </div>
              </div>
              <div class="notes-item-meta">
                <span>${t.pageCount} page${t.pageCount===1?"":"s"}</span>
                <span>${t.visibility==="shared"?"Shared":"Private"}</span>
                <span>Created ${le(t.createdAt)}</span>
                <span>Updated ${le(t.updatedAt)}</span>
              </div>
              ${n.length>0?`<div class="notes-item-tags">${n.map(v=>`<span class="notes-item-tag">${v}</span>`).join("")}</div>`:""}
            </div>
          </article>
        `}).join(""),kt({icons:{ArrowUpRight:Ft,Tag:Ht,Trash2:Dt,Users:_t},attrs:{width:"16",height:"16","stroke-width":"2"}},g),tt(e)},He=()=>{F.hidden=!0,r(M,"","info"),te.reset()},at=()=>{if(C.length===0){ae.innerHTML='<div class="notes-empty-tags">No tags yet. Create one from “Manage tags” first.</div>';return}ae.innerHTML=C.map(e=>{const a=A.has(e.tagId)?"checked":"",t=e.archived?"disabled":"",n=e.archived?" (archived)":"";return`
          <label class="notes-tag-assignment-item">
            <input type="checkbox" data-assign-tag-id="${e.tagId}" ${a} ${t} />
            <span>${e.name}${n}</span>
          </label>
        `}).join("")},ie=()=>{H.hidden=!0,K=null,A.clear(),r(P,"","info")},G=e=>e.trim().toLowerCase(),de=()=>{const e=b.find(n=>n.noteId===U);if(!e){W.innerHTML='<div class="notes-empty-tags">Note not found.</div>';return}const a=[`
        <article class="notes-share-person is-owner">
          <div class="notes-share-person-main">
            <div class="notes-share-person-name">${e.ownerEmail||"Owner"}</div>
            <div class="notes-share-person-meta">Owner</div>
          </div>
          <div class="notes-share-person-role">Owner</div>
        </article>
      `],t=Array.from(new Set([...Array.from(u),...Array.from(m)])).sort((n,s)=>n.localeCompare(s));for(const n of t){const s=u.has(n)?"editor":"viewer";a.push(`
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
      `)}t.length===0&&a.push('<div class="notes-empty-tags">Private note. Add people to share it.</div>'),W.innerHTML=a.join("")},ce=()=>{_.hidden=!0,U=null,m.clear(),u.clear(),V=[],z=!0,q="",x.value="",R.value="editor",oe.textContent="",$.innerHTML="",E!==null&&(window.clearTimeout(E),E=null),r(O,"","info")},k=()=>{const e=b.find(s=>s.noteId===U);if(!e){oe.textContent="",$.innerHTML="";return}const a=G(e.ownerEmail||""),t=R.value==="viewer"?"viewer":"editor",n=V.filter(s=>{const i=G(s.email);return!i||i===a?!1:!m.has(i)&&!u.has(i)});if(oe.textContent=q,!z){$.innerHTML='<div class="notes-empty-tags">No eligible people are available for sharing yet.</div>';return}if(n.length===0){$.innerHTML=q?"":'<div class="notes-empty-tags">No matching members found.</div>';return}$.innerHTML=n.map(s=>{const i=s.displayName?.trim()||s.email,h=s.displayName?.trim()&&s.displayName.trim().toLowerCase()!==s.email?s.email:t==="editor"?"Can make changes":"Can view";return`
          <button type="button" class="notes-share-search-result" data-add-share-email="${s.email}">
            <span class="notes-share-search-main">
              <span class="notes-share-search-name">${i}</span>
              <span class="notes-share-search-meta">${h}</span>
            </span>
            <span class="notes-share-search-action">${t==="editor"?"Add as editor":"Add as viewer"}</span>
          </button>
        `}).join("")},_e=async e=>{const a=++he;try{const t=await Nt(e);if(a!==he)return;V=t.candidates,z=t.canShare,q=t.message||"",k()}catch(t){if(a!==he)return;V=[],z=!0,q=t instanceof Error?t.message:"Failed to search members.",k()}},ot=e=>{const a=b.find(t=>t.noteId===e);if(!a){r(c,"Note not found.","error");return}U=e,m.clear(),u.clear(),a.sharedWithViewerEmails.forEach(t=>m.add(G(t))),a.sharedWithEditorEmails.forEach(t=>u.add(G(t))),Re.textContent=`People you add to “${a.title}” can view it or make changes.`,de(),x.value="",R.value="editor",V=[],z=!0,q="Loading people…",k(),r(O,"","info"),_.hidden=!1,x.focus(),_e("")},nt=e=>{const a=b.find(t=>t.noteId===e);if(!a){r(c,"Note not found.","error");return}K=a.noteId,A.clear(),a.tagIds.forEach(t=>A.add(t)),ke.textContent=`Choose tags for “${a.title}”.`,at(),r(P,"","info"),H.hidden=!1},Oe=()=>{if(C.length===0){ee.innerHTML='<div class="notes-empty-tags">No tags yet. Add your first tag above.</div>';return}ee.innerHTML=C.map(e=>`
          <article class="notes-tag-manager-item" data-tag-id="${e.tagId}">
            <div class="notes-tag-manager-main">
              <div class="notes-tag-manager-name">${e.name}</div>
              <div class="notes-tag-manager-meta">
                <span>${e.archived?"Archived":"Active"}</span>
                <span>Created ${le(e.createdAt)}</span>
                <span>Updated ${le(e.updatedAt)}</span>
              </div>
            </div>
            <div class="notes-tag-manager-actions">
              <button type="button" class="notes-btn notes-btn-secondary" data-action="rename" data-tag-id="${e.tagId}">Rename</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="${e.archived?"restore":"archive"}" data-tag-id="${e.tagId}">${e.archived?"Restore":"Archive"}</button>
              <button type="button" class="notes-btn notes-btn-secondary" data-action="delete" data-tag-id="${e.tagId}">Delete</button>
            </div>
          </article>
        `).join("")},st=()=>{Oe(),r(M,"","info"),F.hidden=!1,ue.focus()},S=async e=>{r(c,e||"Loading notes…","info");try{const[a,t]=await Promise.all([Lt(),$t()]);b=a,C=t,Fe(),fe(),Oe(),r(c,"","info")}catch(a){r(c,a instanceof Error?a.message:"Failed to load notes.","error")}},rt=async(e,a)=>{const t=C.find(n=>n.tagId===a);if(!t)throw new Error("Tag not found.");try{if(e==="rename"){const n=await ye({title:"Rename tag",message:"Update the tag name.",initialValue:t.name,confirmLabel:"Rename"});if(!n?.trim())return;await we(t.tagId,{name:n.trim()})}else e==="archive"?(await we(t.tagId,{archived:!0}),y.delete(t.tagId)):e==="restore"?await we(t.tagId,{archived:!1}):(await At(t.tagId),y.delete(t.tagId));await S("Refreshing tags…"),r(M,"Updated tags.","success")}catch(n){const s=n instanceof Error?n.message:"Failed to update tags.";r(M,s,"error"),r(c,s,"error")}};Ee.addEventListener("click",()=>{S("Refreshing notes…")}),Ie.addEventListener("click",()=>{(async()=>{try{const e=await ye({title:"New note title",initialValue:"Untitled note",confirmLabel:"Create note"});if(e===null)return;const a=await wt({title:e.trim()||"Untitled note"});window.location.href=Se(a.pdfKey)}catch(e){r(c,e instanceof Error?e.message:"Failed to create note.","error")}})()}),Le.addEventListener("click",()=>{st()}),$e.addEventListener("click",He),F.addEventListener("click",e=>{e.target===F&&He()}),H.addEventListener("click",e=>{e.target===H&&ie()}),te.addEventListener("submit",e=>{e.preventDefault();const a=ue.value.trim();if(!a){r(M,"Tag name is required.","error");return}(async()=>{try{await bt(a),te.reset(),await S("Refreshing tags…"),r(M,`Added tag “${a}”.`,"success")}catch(t){const n=t instanceof Error?t.message:"Failed to create tag.";r(M,n,"error"),r(c,n,"error")}})()}),ee.addEventListener("click",e=>{const t=e.target?.closest("[data-action]");if(!t)return;const n=t.dataset.action,s=t.dataset.tagId;!s||n!=="rename"&&n!=="archive"&&n!=="restore"&&n!=="delete"||rt(n,s)}),Q.addEventListener("change",()=>{B=Q.value||"updated-desc",Kt(B),fe()}),g.addEventListener("click",e=>{const a=e.target;!f.hidden&&!a?.closest("#notesContextMenu")&&re();const n=a?.closest("[data-share-note]")?.dataset.shareNote;if(n){ot(n);return}const i=a?.closest("[data-promote-note]")?.dataset.promoteNote;if(i&&I){(async()=>{try{r(c,`Preparing note promotion for ${I.shortLabel}…`,"info");const{packageUrl:T}=await yt(i),Y=new URL(I.id==="local"?"http://localhost:5173/notes/":`https://${I.host}/notes/`);Y.searchParams.set(Me,T),window.location.href=Y.toString()}catch(T){const Y=T instanceof Error?T.message:"Failed to prepare note promotion.",N=St()||"(missing email)",ze=Tt()||"(missing cognito:username)";console.error("Note promotion failed",{noteId:i,targetEnvironment:I.id,authEmail:N,authUsername:ze,error:T}),r(c,`Failed to prepare note promotion. ${Y} [email=${N}; username=${ze}; noteId=${i}]`,"error")}})();return}const h=a?.closest("[data-note-tags]"),ve=a?.closest("[data-delete-note]")?.dataset.deleteNote;if(ve){(async()=>{const T=b.find(N=>N.noteId===ve);if(!T){r(c,"Note not found.","error");return}if(await je({title:"Delete note",message:`Delete "${T.title}"? This action cannot be undone.`,confirmLabel:"Delete note",cancelLabel:"Cancel"}))try{await Mt(ve),await S("Refreshing notes…"),r(c,`Deleted note: ${T.title}`,"success")}catch(N){r(c,N instanceof Error?N.message:"Failed to delete note.","error")}})();return}const Ke=h?.dataset.noteTags;if(Ke){nt(Ke);return}const it=a?.closest("[data-open-note]");if(Date.now()<Be)return;const Ve=it?.dataset.openNote;Ve&&(window.location.href=Se(Ve))}),g.addEventListener("contextmenu",e=>{const a=e.target;if(a?.closest("[data-share-note], [data-promote-note], [data-note-tags], [data-delete-note]"))return;const t=a?.closest("[data-note-id]"),n=t?.dataset.noteId;!t||!n||(e.preventDefault(),De(n,e.clientX,e.clientY))}),g.addEventListener("pointerdown",e=>{if(e.pointerType!=="touch")return;const a=e.target;if(a?.closest("[data-share-note], [data-promote-note], [data-note-tags], [data-delete-note]"))return;const t=a?.closest("[data-note-id]"),n=t?.dataset.noteId;!t||!n||(se(),ne=window.setTimeout(()=>{Be=Date.now()+500;const s=t.getBoundingClientRect();De(n,s.left+Math.min(s.width*.7,s.width-18),s.top+Math.min(s.height*.35,s.height-18))},450))}),g.addEventListener("pointerup",se),g.addEventListener("pointercancel",se),g.addEventListener("pointermove",se),g.addEventListener("keydown",e=>{const t=e.target?.closest("[data-open-note]");if(!t||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();const n=t.dataset.openNote;n&&(window.location.href=Se(n))}),f.addEventListener("click",e=>{const t=e.target?.closest("[data-notes-context-action]")?.dataset.notesContextAction,n=me;t!=="rename"||!n||(re(),(async()=>{const s=b.find(i=>i.noteId===n);if(!s){r(c,"Note not found.","error");return}try{const h=(await ye({title:"Rename note",initialValue:s.title||"Untitled note",confirmLabel:"Rename"}))?.trim();if(!h)return;await be(n,{title:h}),await S("Refreshing notes…"),r(c,"Renamed note.","success")}catch(i){r(c,i instanceof Error?i.message:"Failed to rename note.","error")}})())}),document.addEventListener("click",e=>{e.target?.closest("#notesContextMenu")||re()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&re()}),Ae.addEventListener("click",ie),Ne.addEventListener("click",ie),xe.addEventListener("click",ce),Ue.addEventListener("click",ce),_.addEventListener("click",e=>{e.target===_&&ce()}),x.addEventListener("input",()=>{E!==null&&(window.clearTimeout(E),E=null);const e=x.value;E=window.setTimeout(()=>{E=null,_e(e)},180)}),R.addEventListener("change",()=>{k()}),$.addEventListener("click",e=>{const a=e.target,t=G(a?.closest("[data-add-share-email]")?.dataset.addShareEmail||"");t&&(m.delete(t),u.delete(t),R.value==="viewer"?m.add(t):u.add(t),de(),k(),r(O,"","info"))}),W.addEventListener("change",e=>{const a=e.target,t=a?.dataset.shareAccessEmail;t&&(m.delete(t),u.delete(t),a.value==="viewer"?m.add(t):u.add(t),de(),k())}),W.addEventListener("click",e=>{const t=e.target?.closest("[data-remove-share-email]")?.dataset.removeShareEmail;t&&(m.delete(t),u.delete(t),de(),k())}),qe.addEventListener("click",()=>{U&&(async()=>{try{await be(U,{visibility:m.size>0||u.size>0?"shared":"private",sharedWithStudentIds:[],sharedWithViewerEmails:Array.from(m),sharedWithEditorEmails:Array.from(u)}),await S("Refreshing notes…"),ce(),r(c,"Updated sharing.","success")}catch(e){const a=e instanceof Error?e.message:"Failed to update sharing.";r(O,a,"error"),r(c,a,"error")}})()}),ae.addEventListener("change",e=>{const a=e.target,t=a?.dataset.assignTagId;t&&(a.checked?A.add(t):A.delete(t))}),Pe.addEventListener("click",()=>{if(!K)return;if(!b.find(a=>a.noteId===K)){r(P,"Note not found.","error");return}(async()=>{try{await be(K,{tagIds:Array.from(A)}),await S("Refreshing notes…"),r(P,"Updated note tags.","success"),ie()}catch(a){const t=a instanceof Error?a.message:"Failed to update note tags.";r(P,t,"error"),r(c,t,"error")}})()});const We=Jt();We&&(async()=>{try{const e=Ct();if(e!=="beta"&&e!=="prod")throw new Error("Promoted notes can only be imported in Beta or Production.");const a=await Xt(We);if(await Et(a.promotionKey)){await Ut("Already promoted",`This note already exists in ${e==="prod"?"Production":"Beta"}.`),Te();return}if(!await je({title:e==="prod"?"Promote note to Production":"Promote note to Beta",message:`Create "${a.title}" in ${e==="prod"?"Production":"Beta"}?`,confirmLabel:"Promote"})){Te();return}r(c,"Importing promoted note…","info");const s=await It({title:a.title,pageCount:a.pageCount,promotionKey:a.promotionKey,tagNames:a.tagNames}),i=await fetch(a.snapshotUrl,{cache:"no-store"});if(!i.ok)throw new Error(`Failed to fetch note snapshot (${i.status})`);const h=await fetch(s.uploadUrl,{method:"PUT",headers:{"Content-Type":"application/pdf"},body:await i.blob()});if(!h.ok)throw new Error(`Failed to upload promoted note (${h.status})`);Te(),await S("Refreshing notes…"),r(c,`Promoted note: ${a.title}`,"success")}catch(e){r(c,e instanceof Error?e.message:"Failed to import note.","error")}})(),await S(),await Je()||(window.location.href="/auth")};export{ra as mountNotesPage};
