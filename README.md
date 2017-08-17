# alegabo93.github.io

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

_ReactJS + Redux webapp._

## Quick Start

1. `yarn install`
2. `yarn run serve` to develop (open your browser at [http://localhost:3000])
3. `yarn run build` to create a distribution build

(Do not use npm to install or uninstall dependencies for the moment)[https://github.com/npm/npm/issues/16794].

## Requirements

* [node.js](https://nodejs.org) v6.2.x (LTS)

## ReactJS + Redux Development

Follow the Container component pattern.
In short:

### Presentational components

* The main concern is _how things look_.
* Have some DOM markup and styles of their own.
* Have no dependencies on the rest of the app, such as Redux actions or stores.
* Don't specify how the data is loaded or mutated.
* Receive data and callbacks exclusively via props.
* Rarely have their own state (when they do, it's UI state rather than data).

### Container components

* The main concern is _how things work_.
* Don't have any DOM markup of their own except for some wrapping divs.
* Don't have related styles.
* Provide the data and behavior to presentational or other container components.
* Call Redux actions and provide callbacks to presentational components.
* Serve as data sources.

### Styles

Main styles in `src/app/styles/index.scss`.

Separate styles by concern, mainly:

* /components: styles for presentational components.
* /layout: styles for layout elements (header, footer, sidebar, etc.)
* /bootstrap: contains the bootstrap theme configuration and style overriding.

## Contributing

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md).
