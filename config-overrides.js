const { override, addWebpackPlugin, addWebpackAlias } = require('customize-cra');
const webpack = require('webpack');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        'crypto': path.resolve(__dirname, 'node_modules/crypto-browserify'),
        'stream': path.resolve(__dirname, 'node_modules/stream-browserify'),
    }),
    addWebpackPlugin(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })),
    addWebpackPlugin(new webpack.ProvidePlugin({
        process: 'process/browser',
    }))
);
