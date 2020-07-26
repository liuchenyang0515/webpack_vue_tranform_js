const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: { main: path.resolve(__dirname, '../main.js') },
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname, '../dist')//=======
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                // loader 的执行顺序是：从后往前
                use: ['style-loader', 'css-loader', 'postcss-loader'] // 加了 postcss
            },
            // {
            //     test: /\.less$/,
            //     // 增加 'less-loader' ，注意顺序
            //     loader: ['style-loader', 'css-loader', 'less-loader']
            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../test.html"),
            filename: "test2.html"
        })
    ]
}
