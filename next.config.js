const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const withOffline = require('next-offline')


const nextConfig = {

  compress: true,

  generateSw: false,
  workboxOpts: {
    swSrc:  "sw/sw.js",
    swDest: "sw.js",

    // runtimeCaching:[
    //   {
    //     urlPattern: '/',
    //     handler: 'networkFirst',
    //     options: {
    //       cacheName: 'html-cache',
    //     },
    //   },
    // ]
  },


  // webpack(config, { isServer, buildId, dev }) {

  //   // const workboxOptions = {
  //   //   clientsClaim: true,
  //   //   skipWaiting: true,
  //   //   globPatterns: [
  //   //     // '.next/static/*',
  //   //     // '.next/static/commons/*',
  //   //     // '.next/static/**/pages/*',
  //   //     // '/_next/static/development/pages/*',
  //   //     // '.next/static/development/pages/*',
  //   //   ],
  //   //   modifyUrlPrefix: {
  //   //     '.next': '/_next',
  //   //   },
  //   //   runtimeCaching: [
  //   //     {
  //   //       urlPattern: '/',
  //   //       handler: 'networkFirst',
  //   //       options: {
  //   //         cacheName: 'html-cache',
  //   //       },
  //   //     },
  //   //     {
  //   //       urlPattern: /[^3]\/movie\//,
  //   //       handler: 'networkFirst',
  //   //       options: {
  //   //         cacheName: 'html-cache',
  //   //       },
  //   //     },
  //   //     {
  //   //       urlPattern: new RegExp('^https://api.themoviedb.org/3/movie'),
  //   //       handler: 'staleWhileRevalidate',
  //   //       options: {
  //   //         cacheName: 'api-cache',
  //   //         cacheableResponse: {
  //   //           statuses: [200],
  //   //         },
  //   //       },
  //   //     },
  //   //     {
  //   //       urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
  //   //       handler: 'cacheFirst',
  //   //       options: {
  //   //         cacheName: 'image-cache',
  //   //         cacheableResponse: {
  //   //           statuses: [0, 200],
  //   //         },
  //   //       },
  //   //     },
  //   //   ],
  //   // };

  //   // if (!isServer) {
  //   //   console.log(22222, dev);
  //   //   config.plugins.push(
  //   //     new NextWorkboxPlugin({
  //   //       // swSrc: "sw/sw.js",
  //   //       // swDest: "aaa.js",
  //   //       buildId,
  //   //       ...workboxOptions,
  //   //     }),
  //   //   );
  //   // }

  //   console.log("DEV", dev);
  //   return config;
  // },
};


module.exports = withOffline(nextConfig);