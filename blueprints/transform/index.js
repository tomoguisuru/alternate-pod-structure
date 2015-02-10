var path         = require('path');

module.exports = {
  description: 'Generates an ember-data value transform.',

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
        //   return path.join(options.podPath, 'transform', options.dasherizedModuleName);
        // }
        return 'transform';
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
