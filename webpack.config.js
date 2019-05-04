/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = env => {
  let envConfig;
  if (!env.mode) {
    envConfig = require('./webpack-build-utils/webpack.development');
  } else {
    envConfig = require(`./webpack-build-utils/webpack.${env.mode}`);
  }
  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
