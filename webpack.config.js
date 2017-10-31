const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const PUBLIC_PATH = 'https://adriano-lemos-dev.github.io/lemurify/';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const SWPrecacheWebpackPluginConfig = new SWPrecacheWebpackPlugin({
    cacheId: 'lemurify',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    mergeStaticsConfig: true,
    filename: 'service-worker.js',
    minify: true,
    navigateFallback: PUBLIC_PATH + 'index.html',
    staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
});

const WebpackPwaManifestConfig = new WebpackPwaManifest({
    name: 'Pérolas de saber do Lemos (toy app)',
    short_name: 'Lemurify',
    description: 'Uma app para bricar com frases de efeito e testar alguns conceitos',
    background_color: '#01579b',
    theme_color: '#01579b',
    'theme-color': '#01579b',
    start_url: '/lemurify/',
    icons: [
        {
            src: path.resolve('src/assets/android-chrome.png'),
            sizes: [192, 512],
            destination: path.join('assets', 'icons')
        }
    ]
});

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: PUBLIC_PATH
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif|ico)$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        HtmlWebpackPluginConfig,
        WebpackPwaManifestConfig,
        SWPrecacheWebpackPluginConfig
    ]
};