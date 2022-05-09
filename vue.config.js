const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
      title: "TodoList"
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.123.172:8080"
      }
    }
  }
})
