// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path');
const express = require('express');

const dev = process.env.NODE_ENV.trim() !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express();

  // server.get('*', (req, res) => {
  //   if (req.url.includes('/sw')) {
  //     const filePath = path.join(__dirname, 'static', 'workbox', 'sw.js');
  //     app.serveStatic(req, res, filePath);
  //   } else if (req.url.startsWith('static/workbox/')) {
  //     app.serveStatic(req, res, join(__dirname, req.url));
  //   } else {
  //     handle(req, res, req.url);
  //   }
  // });


  server.get("/sw.js", (req, res) => {
    const filePath = path.join(__dirname, ".next", "sw.js");
    app.serveStatic(req, res, filePath);
  });


  server.get("*", (req, res) => {
    // handle(req, res, req.url);
    
    const reqUrl = req.url.split("?")[0];
    

    if (
      reqUrl !== "/" &&
      !reqUrl.startsWith("/_next")
    ) {
      console.log(12345, reqUrl);

      const filePath = path.join(__dirname, ".next", reqUrl.slice(1));
      app.serveStatic(req, res, filePath);
      return;
    }
    else {
      console.log("NEXT HANDLE", reqUrl);

      handle(req, res, req.url);
      return;
    }
  });


  server.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
  });
})