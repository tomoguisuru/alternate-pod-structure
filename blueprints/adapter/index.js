var path         = require('path');
var stringUtil  = require('ember-cli/lib/utilities/string');

module.exports = {
  description: 'Generates an ember-data adapter.',

  availableOptions: [
    // { name: 'base-class', type: String, default: 'application' }
    { name: 'base-class', type: String }
  ],

  locals: function(options) {
    var locals = this.lookupBlueprint('adapter').locals(options);
    locals.importStatement = locals.importStatement.replace(/;$/, '');
    return locals;
  },

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
        //   return path.join(options.podPath, 'adapter', options.dasherizedModuleName);
        // }
        return 'adapter';
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
