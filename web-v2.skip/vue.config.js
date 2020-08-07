// eslint-disable-next-line import/no-extraneous-dependencies
// const webpack = require('webpack');

// show analyzer
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // publicPath: (['production', 'stage'].indexOf(process.env.NODE_ENV) >= 0) ? '/' : './',
  // publicPath: (['production', 'stage'].indexOf(process.env.NODE_ENV) >= 0) ? process.env.VUE_APP_ASSET_URL : '/',
  // devServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     '/web-api-stage': {
  //       target: 'https://stage.wico.cc',
  //       secure: true,
  //       pathRewrite: {
  //         '^/web-api-stage': '/',
  //       },
  //     },
  //     '/web-api': {
  //       target: 'https://api.wico.cc',
  //       secure: true,
  //       pathRewrite: {
  //         '^/web-api': '/',
  //       },
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   config.plugin('html')
  //     .tap((options) => {
  //       options[0].meta = {
  //         robots: 'noindex, nofollow',
  //       };
  //       // console.log('chainWebpack set robots noindex', options[0]);
  //       return options;
  //     });
  // },
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       'window.jQuery': 'jquery',
  //       jquery: 'jquery',
  //       jQuery: 'jquery',
  //     }),
  //     // new BundleAnalyzerPlugin(),
  //   ],
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "src/assets/scss/bootstrap-custom/variables";
  //       `,
  //     },
  //   },
  // },
};
