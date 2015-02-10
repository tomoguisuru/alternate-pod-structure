var path         = require('path');

module.exports = {
  description: 'Generates an ember-data serializer.',

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        if (options.pod) {
          return path.join(/*options.podPath, */'adapters', options.dasherizedModuleName);
        }
        return 'adapters';
      }
    };
  }
};
