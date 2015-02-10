var path        = require('path');

module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  normalizeEntityName: function(entityName) {
    entityName = this.lookupBlueprint('component').normalizeEntityName(entityName);
    return entityName;
  },

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        if (options.pod) {
          return path.join(/*options.podPath, */'components', options.dasherizedModuleName);
        }
        return 'components';
      },
      __templatepath__: function(options) {
        if (options.pod) {
          return path.join(/*options.podPath, */'components', options.dasherizedModuleName);
        }
        return 'templates/components';
      },
      __templatename__: function(options) {
        if (options.pod) {
          return 'template';
        }
        return options.dasherizedModuleName;
      }
    };
  }
};
