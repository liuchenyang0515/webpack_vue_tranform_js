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
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false, // 解决图片解析时会出问题：[object Module]
                    name: '[hash:10].[ext]'
                }
            },
            // { // vue-loader会处理好这个问题
            //     test: /\.html$/,
            //     // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
            //     use: ['html-loader']
            // },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                // loader 的执行顺序是：从后往前
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      ident: 'postcss',
                      plugins: () => [
                        // postcss的插件
                        require('postcss-preset-env')()
                      ]
                    }
                  }] // 加了 postcss
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
            filename: "test2.html",
            inject: "true",
            // inject默认true，传递true或'body'则所有JavaScript资源都将放置在body元素的底部。'head'会将脚本放置在head元素中(true || 'head' || 'body' || false)
            hash: true
            // 默认false，如果true，则将唯一的webpack编译哈希值附加到所有包含的脚本和CSS文件中。这对于清除缓存很有用
        })
    ]
}
