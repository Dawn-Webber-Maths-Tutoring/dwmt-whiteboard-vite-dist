const CACHE_VERSION = "v2";
const STATIC_CACHE = `dwmt-static-${CACHE_VERSION}`;
const PDF_CACHE = `dwmt-pdf-${CACHE_VERSION}`;
const API_CACHE = `dwmt-api-${CACHE_VERSION}`;
const MAX_PDF_CACHE_SIZE = 50;

const STATIC_ASSETS = ["/", "/index.html", "/dm.svg", "/default_avatar.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      try {
        await cache.addAll(STATIC_ASSETS);
      } catch (err) {
        console.warn("Failed to cache some static assets:", err);
      }
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((name) => {
          if (
            !name.includes(CACHE_VERSION) &&
            (name.startsWith("dwmt-static-") ||
              name.startsWith("dwmt-pdf-") ||
              name.startsWith("dwmt-api-"))
          ) {
            return caches.delete(name);
          }
        }),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET") {
    return;
  }

  if (url.pathname.endsWith(".pdf") || url.pathname.includes("/pdfs/")) {
    event.respondWith(handlePdfRequest(request));
    return;
  }

  if (url.pathname === "/pdf-index.json" || url.pathname.includes("/api/")) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  if (
    request.destination === "document" ||
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "image" ||
    request.destination === "font"
  ) {
    event.respondWith(handleStaticRequest(request));
    return;
  }
});

async function handleStaticRequest(request) {
  const url = new URL(request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return fetch(request);
  }

  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);

  if (cached) {
    fetch(request).then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
    });
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return new Response("Offline", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}

async function handlePdfRequest(request) {
  const cache = await caches.open(PDF_CACHE);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const clone = response.clone();
      await managePdfCache(cache, request, clone);
    }
    return response;
  } catch (err) {
    return new Response("PDF unavailable offline", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}

async function managePdfCache(cache, request, response) {
  const keys = await cache.keys();
  if (keys.length >= MAX_PDF_CACHE_SIZE) {
    await cache.delete(keys[0]);
  }
  await cache.put(request, response);
}

async function handleApiRequest(request) {
  const cache = await caches.open(API_CACHE);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    return new Response(
      JSON.stringify({ offline: true, error: "Network unavailable" }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
