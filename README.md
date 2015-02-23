# UnchartedCode alternate-pod-structure

This allows us to use an alternate pod structure like this

```
--app/
  |
  |--components/
  |  |
  |  |--name/
  |  |  |
  |  |  |-- component.js
  |  |  |-- template.hbs
  |  |  |-- style.scss
  |  |
  |
  |--helpers/
  |  |
  |  |-- name-helper.js
  |
  |--initializers/
  |  |
  |  |-- name.js
  |
  |--mixins/
  |  |
  |  |-- name.js
  |
  |--utils/
  |  |
  |  |-- name.js
  |
  |--pods/
  |  |
  |  |--name/
  |     |
  |     |-- controller.js
  |     |-- route.js
  |     |-- template.hbs
  |     |-- style.scss
  |     |
  |     |--nested-route/
  |        |
  |        |-- controller.js
  |        |-- route.js
  |        |-- template.hbs
  |        |-- style.scss
  |
  |--adapters/
  |  |
  |  |--name.js
  |
  |--serializers/
  |  |
  |  |--name.js
  |
  |--models/
  |  |
  |  |--name.js
```

Further discussion [can be found here](https://github.com/ember-cli/ember-cli/issues/3234). This also includes modifications to the coffeescript templates. They aren't separated since this is only used internally so far.

**Updated Feb 23rd, 2015**: Just added the option that resolve components underneath a pod. It requires calling the component by a full path and the generator assume any component with a path should be nested within a pod. Let me know if you'd like additional documentation on this.

## Installation

```
ember install:addon ember-cli-uncharted-alternate-pod-structure
```

# Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
