import camelCase from 'lodash/camelCase';

const requireModule = require.context('.', false, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
  // Don't register this file
  if (fileName === './index.js') return;

  const moduleName = camelCase(
    fileName.replace(/(\.\/|\.js)/g, '')
  );
  modules[moduleName] = requireModule(fileName).default || requireModule(fileName);
});

export default modules;