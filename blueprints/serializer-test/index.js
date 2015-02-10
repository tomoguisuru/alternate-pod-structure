module.exports = {
  description: 'Generates a serializer unit test.',

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
        //   return path.join(options.podPath, 'serializers', options.dasherizedModuleName);
        // }
        return 'serializers';
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
