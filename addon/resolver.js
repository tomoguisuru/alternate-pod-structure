import Ember from 'ember';
import Resolver from 'ember/resolver';

var CustomResolver = Resolver.extend({
  moduleNameLookupPatterns: Ember.computed(function() {
    var defaults = this._super();
    return defaults.concat([
      this.podBasedComponentsInResource
    ]);
  }),

  podBasedComponentsInResource: function(parsedName) {
    var podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix;
    if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
      var nameWithoutComponent = parsedName.fullNameWithoutType.replace(/components\//, '');
      var slash = nameWithoutComponent.lastIndexOf('/');
      if (slash > 0) {
        podPrefix = podPrefix + "/" + nameWithoutComponent.substr(0, slash);
        parsedName.fullNameWithoutType = nameWithoutComponent.substr(slash + 1);
        return this.podBasedLookupWithPrefix(podPrefix, parsedName);
      }
    }
  },

  podBasedComponentsInSubdir: function(parsedName) {
    var podPrefix = this.namespace.modulePrefix; // this.namespace.podModulePrefix || this.namespace.modulePrefix
    podPrefix = podPrefix + '/components';

    if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
      return this.podBasedLookupWithPrefix(podPrefix, parsedName);
    }
  }
});

export default CustomResolver;
