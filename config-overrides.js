const { override, addLessLoader, addPostcssPlugins, addWebpackAlias } = require('customize-cra');
const path = require('path');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

function myOverrides(config, env) {
  config = rewireReactHotLoader(config, env);
  return config;
}

module.exports = override(
  myOverrides,
  addLessLoader({
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addPostcssPlugins([require('autoprefixer')]),
  addWebpackAlias({
    ['react-dom']: '@hot-loader/react-dom',
    ['@']: path.resolve(__dirname, 'src/'),
    ['pages']: path.resolve(__dirname, 'src/pages'),
    ['components']: path.resolve(__dirname, 'src/components')
  })
);
