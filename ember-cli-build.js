/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  const options = {
    lessOptions: {
      paths: ['addon/styles/addon.less'],
      outputFile: 'dummy.css'
    }
  };
  options.fingerprint = {
    enabled: false,
    generateAssetMap: false    
  }

  let app = new EmberAddon(defaults, options);

  return app.toTree();
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
};
