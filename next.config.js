const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const withOffline = require("./next-offline");


// const nextConfig = {
//   webpack(config, { isServer, buildId, dev }) {

//     const workboxOptions = {
//       clientsClaim: true,
//       skipWaiting: true,
//       globPatterns: ['.next/static/*', '.next/static/commons/*'],
//       modifyUrlPrefix: {
//         '.next': '/_next',
//       },
//       runtimeCaching: [
//         {
//           urlPattern: '/',
//           handler: 'networkFirst',
//           options: {
//             cacheName: 'html-cache',
//           },
//         },
//         {
//           urlPattern: /[^3]\/movie\//,
//           handler: 'networkFirst',
//           options: {
//             cacheName: 'html-cache',
//           },
//         },
//         {
//           urlPattern: new RegExp('^https://api.themoviedb.org/3/movie'),
//           handler: 'staleWhileRevalidate',
//           options: {
//             cacheName: 'api-cache',
//             cacheableResponse: {
//               statuses: [200],
//             },
//           },
//         },
//         {
//           urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
//           handler: 'cacheFirst',
//           options: {
//             cacheName: 'image-cache',
//             cacheableResponse: {
//               statuses: [0, 200],
//             },
//           },
//         },
//       ],
//     };

//     if (!isServer) {
//       config.plugins.push(
//         new NextWorkboxPlugin({
//           buildId,
//           ...workboxOptions,
//         }),
//       );
//     }

//     return config;
//   },
// };


const nextConfig = {
  clientsClaim: true,
  skipWaiting: true,
  transformManifest: manifest => ['/', '/static/manifest.json'].concat(manifest),

  generateSw: false,
  workboxOpts: {
      swSrc:  "sw/sw.js",
      swDest: "sw.js",

      // runtimeCaching: [
      //   {
      //     urlPattern: /^https?.*/,
      //     handler: 'NetworkFirst',
      //     options: {
      //       cacheName: 'offlineCache',
      //       expiration: {
      //         maxEntries: 200
      //       }
      //     }
      //   }
      // ],
  },
};


module.exports = withOffline(nextConfig);