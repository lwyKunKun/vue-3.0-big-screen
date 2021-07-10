const { resolve } = require("path");
module.exports = {
    publicPath: "./",
    //打包位置
    outputDir: "dist",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: "static",
    // 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径
    indexPath: "index.html",
    //关闭Eslink校验
    lintOnSave: false,
    //服务器配置
    devServer: {
        host: "localhost", // ip
        port: 8888, // 端口号
        https: false,
        open: false,
        overlay: {
            //关闭Eslink校验
            warnings: false,
            errors: true,
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
            },
        },
    },
    productionSourceMap: false, // 生产环境关闭sourcemap
    //热更新
    chainWebpack: (config) => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
};