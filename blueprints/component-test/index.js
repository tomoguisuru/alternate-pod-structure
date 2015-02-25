var path        = require('path');

module.exports = {
  description: 'Generates a component unit test.',

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        if (options.pod) {
          var nameWithoutComponent = options.dasherizedModuleName.replace(/components\//, '');
          var slash = nameWithoutComponent.lastIndexOf('/');
          if (slash >= 0) {
            // Nested components are always under the podPath
            // This could be driven by configuration in the future
            return path.join(options.podPath, nameWithoutComponent.substr(0, slash), nameWithoutComponent.substr(slash + 1));
          }

          return path.join(/*options.podPath, */'components', options.dasherizedModuleName);
        }
        return 'components';
      }
    }
  }
};
