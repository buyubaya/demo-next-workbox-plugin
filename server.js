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


  server.get('*', (req, res) => {
    if (req.url.includes('/sw.js')) {
      const filePath = path.join(__dirname, '.next', 'sw.js');
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, req.url);
    }
  });


  server.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
  });
})