const { GenerateSW, InjectManifest } = require("workbox-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const InlineNextPrecacheManifestPlugin = require("./plugin");


module.exports = (nextConfig = {}) => ({
  ...nextConfig,

  webpack(config, options) {
    const {
      generateSw,
      workboxOpts = {
        globPatterns: ["static/**/*"],
        globDirectory: ".",
        runtimeCaching: [
          {
            urlPattern: '/',
            handler: 'networkFirst',
            options: {
              cacheName: 'html-cache',
            },
          },

          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "offlineCache",
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
      console.log(55555, workboxOpts.importsDirectory);

      config.plugins.push(
        new CleanWebpackPlugin(["precache-manifest.*.js"], { root: config.output.path, verbose: false }),
        generateSw ? new GenerateSW({ ...workboxOpts }) : new InjectManifest({ ...workboxOpts }),
        // new InlineNextPrecacheManifestPlugin({
        //   outputPath: config.output.path,
        //   swDest: workboxOpts.swDest || "sw.js",
        //   importsDirectory: workboxOpts.importsDirectory || "",
        // }),
      );
    }
    

    if (typeof nextConfig.webpack === "function") {
      return nextConfig.webpack(config, options);
    }


    return config;
  },
});
