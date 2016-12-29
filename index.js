/* jshint node: true */
'use strict';

var getVersion = require('git-repo-version');

module.exports = {
  name: 'joda-articles',
  config: function() {
    let joda = {
      features: {
        articles: true
      },
      versions: {}
    };

    let path = this.project.root;
    if (this.project.pkg.name !== 'joda-articles') {
      path = this.project.addonPackages['joda-articles'].path;
    }

    var version = getVersion(null, path);
    if (version) {
      joda.versions['joda-articles'] = version;
    }

    return {
      Joda: joda
    };
  },
  isDevelopingAddon: function() {
    return true;
  }
};
