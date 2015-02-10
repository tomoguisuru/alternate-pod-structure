var path        = require('path');

module.exports = {
  description: 'Generates an ember-data adapter unit test.',

  fileMapTokens: function() {
    return {
      __name__: function(options) {
        // if (options.pod && hasPathToken) {
        //   return options.blueprintName;
        // }
        return options.dasherizedModuleName;
      },
      __path__: function(options) {
        // if (options.pod) {
        //   return path.join(options.podPath, 'adapters', options.dasherizedModuleName);
        // }
        return 'adapters';
      },
      __test__: function(options) {
        // if (options.pod && hasPathToken) {
        //   return options.blueprintName;
        // }
        return options.dasherizedModuleName + '-test';
      }
    };
  }
};
