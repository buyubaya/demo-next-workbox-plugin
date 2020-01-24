// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path');
const express = require('express');
const webpush = require('web-push');
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV.trim() !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const VAPID_PUBLIC_KEY = "BL2Kr6XuPfOOABUf_6suEi4iMMQ92YQP2p9i-kI9Bb5M5WyvMFDBMfduGo2V90c0IvQ65li-_Q-ZPc7aJx-KNSw";

const VAPID_PRIVATE_KEY = "EsrTmMmeCvx3UL4D67Cj1_Yn6OuvW1rxo8yMRIjD-Qs";

let PUSH_SUBSCRIPTION = {
  endpoint:
  'https://fcm.googleapis.com/fcm/send/eN8gqUQOVno:APA91bFQWv3JMVUY44-UleQyNV1MR5YmMvixQbn6u2jG5ziFZdxY9rhByhQcc43bQhA1voNMyqbLNvAXE06mPYCnwGRlWlkSlPcPKfdu2aZpCZkJ4BGLliv8w_xd-1NjkWZXmCgEFyxC',
  expirationTime: null,
  keys:
    { p256dh:
      'BJ0nR_fcH9Vzt_pxDtviknicGvFHlKBj_X0L6A0OdGaGvFkYRXIYdNIfa-ltycFv2yxU_z4leMOxsBtIP8-FYOE',
      auth: 'mf3mDZBQGuOpk46MOuq46w'
    }
}


webpush.setVapidDetails(
  "mailto:test@test.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY,
);


app.prepare().then(() => {

  const server = express();

  server.use(bodyParser.json());

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


  server.get("/test/push", (req, res) => {
    res.status(201).json({});
    const payload = JSON.stringify({ title: 'TEST PUSH' });

    console.log("TEST PUSH", PUSH_SUBSCRIPTION);

    webpush.sendNotification(PUSH_SUBSCRIPTION, payload).catch(error => {
      console.error(error.stack);
    });
  });

  
  server.post('/api/subscribe', (req, res) => {

    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: 'test aaaaa' });

    PUSH_SUBSCRIPTION = subscription;

    console.log("subscription", subscription);

    webpush.sendNotification(subscription, payload).catch(error => {
      console.error(error.stack);
    });
  });


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