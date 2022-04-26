module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://*****", //测试服务器
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          // "^/api": "/"
        },
      },
    },
    disableHostCheck: true,
  },
  publicPath: "./",
};
