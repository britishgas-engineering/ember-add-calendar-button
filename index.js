/* eslint-env node */
'use strict';

const Funnel        = require('broccoli-funnel');
const mergeTrees    = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-calendar-button',
  isDevelopingAddon: function () {
    return true;
  },
  treeForPublic: function(tree) {
    var assetsTree = new Funnel('public');
    return mergeTrees([tree, assetsTree], {
      overwrite: true
    });
  }
};
