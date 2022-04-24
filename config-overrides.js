const webpack = require('webpack');
const path = require('path');
module.exports = function override(config) {
  config.resolve.fallback = {
    process: require.resolve('process/browser'),
    zlib: require.resolve('browserify-zlib'),
    stream: require.resolve('stream-browserify'),
    util: require.resolve('util'),
    buffer: require.resolve('buffer'),
    asset: require.resolve('assert'),
  };

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@guards': path.resolve(__dirname, 'src/guards'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@sections': path.resolve(__dirname, 'src/sections'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@config': path.resolve(__dirname, 'src/config.ts'),
      '@@types': path.resolve(__dirname, 'src/@types'),
    },
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
