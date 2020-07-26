// const path = require('path')
// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js');
module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: "cheap-module-source-map"
})
