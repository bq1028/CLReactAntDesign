module.exports = function (webpackConfig) {
  webpackConfig.module.loaders.forEach(function (loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
      loader.query.plugins.push('transform-decorators-legacy');
    }
    return loader;
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify',
  });

  webpackConfig.entry = {
    backend:'./app/backend',
  };

  return webpackConfig;
};
