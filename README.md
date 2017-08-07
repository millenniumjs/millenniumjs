# millennium.JS

> :rocket: Render your Front-End in less than 12 parsecs.

[![Build Status](https://travis-ci.org/millenniumjs/millenniumjs.svg?branch=master)](https://travis-ci.org/millenniumjs/millenniumjs)
[![dependencies Status](https://david-dm.org/millenniumjs/millenniumjs/status.svg)](https://david-dm.org/millenniumjs/millenniumjs)
[![npm](https://img.shields.io/npm/v/millenniumjs.svg)](https://www.npmjs.com/package/millenniumjs)

## What is?

A javascript library for create Functional Stateless Components and render with Virtual DOM. Ideal for creating ultra light and fast applications with [Redux](http://redux.js.org/).

## Best Features

- Functional **Components**.
- **Custom Props** for manage unidirectional data flow.
- **Virtual DOM** Render.
- Easy selection real DOM nodes with global **Refs**.
- Compatible with **JSX**.
- Easy integration with **Redux**.

## How to use?

### Install

**Tip:** Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

```sh
$ npm install millenniumjs --save-dev
```

### Setup

**ES6/Ecma 2015 module:**

**Tip:** Use [Webpack](https://webpack.github.io/) (or similar module bundler) to manage the components.

```js
import millennium from 'millenniumjs';
```

### Make stateless components

```js
import millennium from 'millenniumjs';

function Hello() {

  return (
    millennium.component(
      'h1',
      {className: 'foo'},
      'Hello World'
    )
  )

}
```

**Tip:** Use [JSX](https://jsx.github.io/) to write your component declaratively.

```js
import millennium from 'millenniumjs';

function Hello() {

  return (
    <h1 className="foo">
      Hello World
    </h1>
  )

}
```

### Render with Virtual DOM

```js
import millennium from 'millenniumjs';

function Hello() {
  // Markup
}

millennium.render(<Hello />, document.getElementById('root'));
```

## Docs

Did you like it?<br>
See [complete documentation](http://millenniumjs.github.io/) and start now with millennium.JS.

<hr>

## Development

### Getting started

Clone this repository and install its dependencies:

```sh
$ git clone https://github.com/millenniumjs/millenniumjs.git
$ cd millenniumjs
$ npm install
```
### Build

Builds the library to dist:

```sh
$ npm run build
```

Builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch):

```sh
$ npm run dev
```

### Code Style

Follow the [JS Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/js/JS.md) by [Afonso Pacifer](https://github.com/afonsopacifer).

*All code style are automatic validate with [ESLint](http://eslint.org/):*

### Code Docs

*Generate code docs with [JSDocs](http://usejsdoc.org/)*

```sh
$ npm run jsdocs
```

View code docs in `out/index.html`

### Tests

*Run all unit tests:*

```sh
$ npm test
```

<hr>

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/millenniumjs/millenniumjs/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/millenniumjs/millenniumjs/releases) for detailed changelog.

## License

[MIT License](https://github.com/millenniumjs/millenniumjs/blob/master/LICENSE.md) © [Afonso Pacifer](https://github.com/afonsopacifer)
