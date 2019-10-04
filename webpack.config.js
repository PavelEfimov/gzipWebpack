const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');

module.exports = {
    entry: join(__dirname, 'index.jsx'),
    output: {
        path: join(__dirname, 'dist'),
        filename: '[name].[chunkHash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test application',
            template: 'index.html',
            jsExtension: ".gz"
        }),
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            test: /\.(js|css)$/,
            algorithm: 'gzip',
            deleteOriginalAssets: true
        }),
        new HtmlWebpackChangeAssetsExtensionPlugin()
    ]
};
