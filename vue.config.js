// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: ['vuetify','jodit-vue','jodit','vuex','vue-router'],
  // configureWebpack: {
  //     plugins: [new BundleAnalyzerPlugin()]
  // }
  // devServer: {
  //   proxy: {
  //     '/stb/': {
  //       target: 'https://api.stibee.com/v1',
  //       pathRewrite: {'^/stb/':''},
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
};