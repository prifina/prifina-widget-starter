const path = require("path");

const webpack = require("webpack");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const paths = require("./paths");
const remoteComponentConfig = require("./remote-component.config").resolve;

const externals = Object.keys(remoteComponentConfig).reduce(
  (obj, key) => ({ ...obj, [key]: key }),
  {}
);

/*
- add a fallback 'resolve.fallback: { "https": require.resolve("https-browserify") }'
- install 'https-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "https": false }
*/

module.exports = {
  entry: {
    main: path.resolve(__dirname, paths.src + "/index.js"),
  },
  output: {
    path: path.resolve(__dirname, paths.build),
    filename: "[name].bundle.js",
    libraryTarget: "commonjs",
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": process.env.NODE_ENV,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "webpack-bundle-analyzer-report.html",
    }),
    new WebpackAssetsManifest(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  externals: {
    ...externals,
  },
  /*resolve: {
    fallback: {
      https: require.resolve("https-browserify"),
    },
  },*/
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      // Fonts Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: "asset/inline" },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
