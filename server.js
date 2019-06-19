// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production", dir: "./src" });
const handler = routes.getRequestHandler(app);

const PORT = process.env.PORT || 3001;

// With express
const express = require("express");
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(PORT);
});
