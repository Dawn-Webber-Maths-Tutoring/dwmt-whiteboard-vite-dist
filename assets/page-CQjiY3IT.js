import{g as P,c as H,a as G,d as O,b as D,i as $,B as z,A as L,C as V,D as _,E as J,F as K,G as Q}from"./UserMenu-BI7FOczu.js";import{C as W}from"./js.cookie-Co-gs8up.js";import"./_commonjsHelpers-DaWZu8wl.js";const X="af-south-1_bIOvLpsST",Y="3h1hjhsq24cm86n83oklrkf6be",R=new W({UserPoolId:X,ClientId:Y}),Z=()=>`
  <div class="app mailbox-page">
    <div id="mailboxAppBarContainer"></div>
    <main class="mailbox-layout">
      <section class="mailbox-sidebar">
        <header class="mailbox-sidebar-header">
          <h2>Inbox</h2>
          <button id="mailboxRefreshBtn" type="button">Refresh</button>
        </header>
        <div id="mailboxFeedback" class="mailbox-feedback" hidden></div>
        <div id="mailboxList" class="mailbox-list" role="listbox" aria-label="Inbox emails"></div>
      </section>

      <section class="mailbox-content">
        <article id="mailboxMessageCard" class="mailbox-message-card" hidden>
          <header class="mailbox-message-header">
            <h3 id="mailboxMessageSubject"></h3>
            <div id="mailboxMessageMeta" class="mailbox-message-meta"></div>
          </header>
          <pre id="mailboxMessageText" class="mailbox-message-text"></pre>
          <div class="mailbox-message-actions">
            <button id="mailboxMarkUnreadBtn" type="button">Mark unread</button>
          </div>
        </article>

        <article class="mailbox-compose-card">
          <h3>Reply</h3>
          <textarea id="mailboxReplyText" rows="6" placeholder="Type your reply"></textarea>
          <div class="mailbox-inline-actions">
            <button id="mailboxReplyBtn" type="button">Send reply</button>
          </div>
        </article>

        <article class="mailbox-compose-card">
          <h3>New email</h3>
          <label>
            To
            <input id="mailboxSendTo" type="email" />
          </label>
          <label>
            Subject
            <input id="mailboxSendSubject" type="text" />
          </label>
          <label>
            Message
            <textarea id="mailboxSendText" rows="5"></textarea>
          </label>
          <div class="mailbox-inline-actions">
            <button id="mailboxSendBtn" type="button">Send email</button>
          </div>
        </article>
      </section>
    </main>
  </div>
`,ee=async()=>new Promise((e,r)=>{const c=R?.getCurrentUser();if(!c){e(null);return}c.getSession((o,m)=>{if(o){r(o);return}e(m)})}),te=()=>{const e=R?.getCurrentUser()||null;e&&e.signOut()},j=e=>{const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toLocaleString()},i=(e,r,c)=>{if(!r){e.textContent="",e.hidden=!0,e.setAttribute("data-tone","");return}e.hidden=!1,e.textContent=r,e.setAttribute("data-tone",c)},ne=async()=>{const e=document.querySelector("#app");if(!e)throw new Error("Missing #app root");const r=P();if(r!=="tutor"){window.location.href="/whiteboard";return}e.innerHTML=Z(),e.appendChild(H());const c=e.querySelector("#mailboxAppBarContainer"),o=e.querySelector("#mailboxFeedback"),m=e.querySelector("#mailboxList"),M=e.querySelector("#mailboxRefreshBtn"),f=e.querySelector("#mailboxMessageCard"),h=e.querySelector("#mailboxMessageSubject"),g=e.querySelector("#mailboxMessageMeta"),y=e.querySelector("#mailboxMessageText"),k=e.querySelector("#mailboxMarkUnreadBtn"),S=e.querySelector("#mailboxReplyText"),E=e.querySelector("#mailboxReplyBtn"),v=e.querySelector("#mailboxSendTo"),C=e.querySelector("#mailboxSendSubject"),w=e.querySelector("#mailboxSendText"),T=e.querySelector("#mailboxSendBtn");if(!c||!o||!m||!M||!f||!h||!g||!y||!k||!S||!E||!v||!C||!w||!T)throw new Error("Mailbox page is missing required elements");const F=G(),U=O().includes("admin"),N=D({currentApp:"inbox",onAppChange:t=>{if(t==="whiteboard"){window.location.href="/whiteboard";return}if(t==="worksheet-builder"){window.location.href="/worksheet-builder/";return}if(t==="user-management"){window.location.href="/user-management/";return}t==="profile"&&(window.location.href="/profile/")},rightContent:F,userRole:r,isAdmin:U});c.appendChild(N),await $({root:e,profileHref:"/profile/",signOutHref:"/auth",hideSelectStudent:!0,labelMode:"display-name-or-email"});let s="",u=0,b=[];const q=()=>{h.textContent="",g.textContent="",y.textContent="",f.hidden=!0},p=()=>{if(m.innerHTML="",b.length===0){m.innerHTML='<div class="mailbox-empty">No emails yet.</div>';return}b.forEach(t=>{const a=document.createElement("button");a.type="button",a.className="mailbox-item",t.read||a.classList.add("is-unread"),t.emailId===s&&a.classList.add("is-active");const n=document.createElement("div");n.className="mailbox-item-from",n.textContent=t.from||"(unknown sender)";const l=document.createElement("div");l.className="mailbox-item-subject",l.textContent=t.subject||"(no subject)";const x=document.createElement("div");x.className="mailbox-item-time",x.textContent=j(t.timestamp),a.appendChild(n),a.appendChild(l),a.appendChild(x),a.addEventListener("click",async()=>{s=t.emailId,u+=1;const I=u;p();try{const d=await _(t.emailId);if(I!==u||s!==t.emailId)return;h.textContent=d.subject||"(no subject)",g.textContent=`From ${d.from} | ${j(d.timestamp)}`,y.textContent=d.text||"",f.hidden=!1,t.read||(await J(t.emailId),t.read=!0,p())}catch(d){if(I!==u||s!==t.emailId)return;q();const A=d instanceof Error?d.message:"Failed to load email";i(o,A,"error")}}),m.appendChild(a)})},B=async()=>{i(o,"","info");try{b=(await V({limit:50})).emails,b.find(a=>a.emailId===s)||(s="",u+=1,q()),p()}catch(t){const a=t instanceof Error?t.message:"Failed to load mailbox";i(o,a,"error")}};if(M.addEventListener("click",()=>{B()}),k.addEventListener("click",async()=>{if(s)try{await K(s);const t=b.find(a=>a.emailId===s);t&&(t.read=!1),p(),i(o,"Marked unread.","success")}catch(t){const a=t instanceof Error?t.message:"Failed to mark unread";i(o,a,"error")}}),E.addEventListener("click",async()=>{if(!s){i(o,"Select an email first.","info");return}const t=S.value.trim();if(!t){i(o,"Reply text is required.","info");return}try{await Q(s,{text:t}),S.value="",i(o,"Reply sent.","success")}catch(a){const n=a instanceof L||a instanceof Error?a.message:"Failed to send reply";i(o,n,"error")}}),T.addEventListener("click",async()=>{const t=v.value.trim(),a=C.value.trim(),n=w.value.trim();if(!t||!a||!n){i(o,"To, subject and message are required.","info");return}try{await z({to:t,subject:a,text:n}),v.value="",C.value="",w.value="",i(o,"Email sent.","success")}catch(l){const x=l instanceof L||l instanceof Error?l.message:"Failed to send email";i(o,x,"error")}}),!await ee()){te(),window.location.href="/auth";return}B()};export{ne as mountMailboxPage};
