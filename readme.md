# webpack_cra

Custom Webpack Config for React Applications.

## Dependencies & Roles

### From Webpack

- webpack module — which include all core webpack functionality
- webpack-dev-server — this development server automatically rerun webpack when our file is changed
- webpack-cli — enable running webpack from the command line

### From Babel

- @babel/core is the main dependency that includes babel transform script.
- @babel/preset-env is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
- @babel/preset-react is used for transforming JSX and React class syntax into valid JavaScript code.
- babel-loader is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.
