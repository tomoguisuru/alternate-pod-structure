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
