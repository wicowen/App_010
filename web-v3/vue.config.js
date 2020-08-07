// eslint-disable-next-line import/no-extraneous-dependencies
// const webpack = require('webpack');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // publicPath: (['production', 'stage'].indexOf(process.env.NODE_ENV) >= 0) ? '/' : './',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://api.wico.cc',
        secure: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
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
  configureWebpack: {
    plugins: [
      // new webpack.ProvidePlugin({
      //   $: 'jquery',
      //   'window.jQuery': 'jquery',
      //   jquery: 'jquery',
      //   jQuery: 'jquery',
      // }),

      // new BundleAnalyzerPlugin(),
    ],
  },
};
