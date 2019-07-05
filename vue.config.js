const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        entry: {
            'test-entry': './src/test-entry.js'
        },
        plugins: process.env.npm_config_analyze === 'true' ? [
            new BundleAnalyzerPlugin(),
        ] : [],
        optimization: {
            splitChunks: {
                maxInitialRequests: 1,
                chunks: 'all',
            },
        },
    }
};
