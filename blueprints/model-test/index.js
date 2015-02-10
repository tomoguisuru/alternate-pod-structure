module.exports = {
  description: 'Generates a model unit test.',

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        // if (options.pod) {
        //   return path.join(options.podPath, 'models', options.dasherizedModuleName);
        // }
        return 'models';
      }
    };
  }
};
