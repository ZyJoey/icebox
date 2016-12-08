/**
 * Created by IFree on 2016/4/25.
 */

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1024 * 10,
                name: '[name].[ext]'
            }
        }, {
            test: /\.(svg|woff2?|eot|ttf|otf)$/,
            loader: 'url',
            query: {
                limit: 1024 * 20,
                name: '[name].[ext]'
            }
        }]
    },
    plugins: [
        // 自动生成HTML文件
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),

        // 提取css
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ],
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map',

    babel: {
        "presets": ["es2015", "stage-2"],
        "plugins": ["transform-runtime"],
        "comments": false
    }

}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'

    module.exports.output.publicPath = '/'

    module.exports.plugins = (module.exports.plugins || []).concat([

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new webpack.optimize.OccurenceOrderPlugin()
    ])
}