import Resolver from 'ember/resolver';

var CustomResolver = Resolver.extend({
  podBasedComponentsInSubdir: function(parsedName) {
    var podPrefix = this.namespace.modulePrefix; // this.namespace.podModulePrefix || this.namespace.modulePrefix
    podPrefix = podPrefix + '/components';

    if (parsedName.type === 'component' || parsedName.fullNameWithoutType.match(/^components/)) {
      return this.podBasedLookupWithPrefix(podPrefix, parsedName);
    }
  }
});

export default CustomResolver
