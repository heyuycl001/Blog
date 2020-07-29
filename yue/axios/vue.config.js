module.exports = {
  lintOnSave: true,
  productionSourceMap: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'xxxx'
    }
  },
  devServer: {
    port: 9999,
    open: true,
    before: function (app, server, compiler) {
      app.get('/api/get/list', function (req, res) {
        res.json({ custom: 'get' });
      });
      app.post('/api/post/item', function (req, res) {
        res.json({ custom: 'post' });
      });
      app.delete('/api/delete/item/20', function (req, res) {
        res.json({ custom: 'delete' });
      });
      app.put('/api/put/item', function (req, res) {
        res.json({ custom: 'put' });
      });
    }

    // proxy: {
    //   '/api': {
    //     target: 'http://xxxx.xx.xxx.xxxx:xxxxx', //测试环境地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
