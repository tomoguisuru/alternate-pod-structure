var Blueprint  = require('ember-cli/lib/models/blueprint');
var Promise    = require('ember-cli/lib/ext/promise');
var merge      = require('lodash-node/compat/objects/merge');
var inflection = require('inflection');

module.exports = {
  description: 'Generates a model and route.',

  install: function(options) {
    this.project = options.project;
    return this._process('install', options);
  },

  uninstall: function(options) {
    return this._process('uninstall', options);
  },

  _processBlueprint: function(type, name, options) {
    var mainBlueprint = Blueprint.lookup(name, {
      ui: this.ui,
      analytics: this.analytics,
      project: this.project,
      paths: this.project.blueprintLookupPaths()
    });

    return Promise.resolve()
      .then(function() {
        return mainBlueprint[type](options);
      })
      .then(function() {
        var testBlueprint = Blueprint.lookup(name + '-test', {
          ui: this.ui,
          analytics: this.analytics,
          project: this.project,
          paths: mainBlueprint.project.blueprintLookupPaths(),
          ignoreMissing: true
        });

        if (!testBlueprint) { return; }

        if (testBlueprint.locals === Blueprint.prototype.locals) {
          testBlueprint.locals = function(options) {
            return mainBlueprint.locals(options);
          };
        }

        return testBlueprint[type](options);
      });
  },

  _process: function(type, options) {
    var modelOptions = merge({}, options, {
      entity: {
        name: inflection.singularize(options.entity.name)
      }
    });

    var routeOptions = merge({}, options, { type: 'resource' });

    var self = this;
    return this._processBlueprint(type, 'model', modelOptions)
              .then(function() {
                return self._processBlueprint(type, 'route', routeOptions);
              });
  }
};
