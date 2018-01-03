'use strict';

var getVersion = require('git-repo-version');
var addonInfo = require('./addon-info');

module.exports = {
  name: 'joda-articles',
  config: function() {
    let joda = {
      features: {
        articles: addonInfo
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
