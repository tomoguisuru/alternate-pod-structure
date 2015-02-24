var path        = require('path');

module.exports = {
  description: 'Generates a component unit test.',

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        if (options.pod) {
          var nameWithoutComponent = options.dasherizedModuleName.replace(/components\//, '');
          if (nameWithoutComponent.indexOf(options.podPath) >= 0) {
            var slash = nameWithoutComponent.lastIndexOf('/');
            // Nested components are always under the podPath
            // This could be driven by configuration in the future
            return path.join(nameWithoutComponent.substr(0, slash), nameWithoutComponent.substr(slash + 1));
          }

          return path.join(/*options.podPath, */'components', options.dasherizedModuleName);
        }
        return 'components';
      }
    }
  }
};
