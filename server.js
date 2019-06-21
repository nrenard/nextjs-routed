const next = require("next");
const express = require("express");
const LRUCache = require("lru-cache");

const routes = require("./routes");

const app = next({
  dev: process.env.NODE_ENV !== "production",
  dir: "./src"
});

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // serving _next static content using next.js handler
  server.get("/_next/*", handler);

  // serving pages
  server.get("*", renderAndCache);

  server.listen(process.env.PORT || 3001);
});

// Cache configuration parameters.
const ssrCache = new LRUCache({
  max: 50 * 1024 * 1024,
  length: n => n.length,
  maxAge: 1000 * 60 * 60 * 24 * 1
});

const renderAndCache = async (req, res) => {
  const { path } = req;
  const hasCache = ssrCache.has(path);

  if (hasCache) {
    console.log(`Serving from cache ${path}`);
    res.setHeader("x-cache", "HIT");
    return res.send(ssrCache.get(path));
  }

  try {
    console.log(`path: ${path} not cached.`);
    const html = await app.renderToHTML(req, res, path, req.query);

    if (res.statusCode !== 200) return res.send(html);

    // Set cache
    ssrCache.set(path, html);

    res.setHeader("x-cache", "MISS");
    return res.send(html);
  } catch (err) {
    return app.renderError(err, req, res, req.path, req.query);
  }
};
