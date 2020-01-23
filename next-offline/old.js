const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { readFile, writeFile } = require('fs-extra');
// const { join } = require('path');

const InlineNextPrecacheManifestPlugin = require('./plugin');
// const exportSw = require('./export');

module.exports = (nextConfig = {}) => ({
  ...nextConfig,

  // exportPathMap: exportSw(nextConfig),

  webpack(config, options) {
    const {
      assetPrefix,
      generateSw,
      // dontAutoRegisterSw = false,
      // devSwSrc = join(__dirname, 'service-worker.js'),
      // registerSwPrefix = '',
      // scope = '/',
      // generateInDevMode = false,
      transformManifest = manifest => manifest,
      workboxOpts = {
        globPatterns: ['static/**/*'],
        globDirectory: '.',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200
              }
            }
          }
        ],
      },
    } = nextConfig;


    // Generate SW -  Only run once for the client build.
    if (!options.isServer) {
      config.plugins.push(
        new CleanWebpackPlugin(['precache-manifest.*.js'], { root: config.output.path, verbose: false }),
        generateSw ? new GenerateSW({ ...workboxOpts }) : new InjectManifest({ ...workboxOpts }),
        new InlineNextPrecacheManifestPlugin({
          outputPath: config.output.path,
          urlPrefix: assetPrefix,
          swDest: workboxOpts.swDest || 'service-worker.js',
          importsDirectory: workboxOpts.importsDirectory || '',
          transformManifest
        }),
      );
    }
    

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }


    return config;
  },
});
