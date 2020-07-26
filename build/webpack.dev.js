// const path = require('path')
// const webpack = require('webpack')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
// 或者不用引入直接在plugins里面new webpack.HotModuleReplacementPlugin()
module.exports = merge(commonConfig ,{
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: '../dist',
        openPage: 'test2.html',//http://localhost:8080/test2.html，不写默认就是http://localhost:8080/
        // 或者执行的时候输入npx webpack-dev-server --config ./build/webpack.dev.js --open-page 'test2.html'
        compress: true, // gzip压缩
        open: true,
        port: 8080,
        hot: true
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
})
