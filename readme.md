# webpack_cra

Custom Webpack 5 Config for React Applications.

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


- sass: 

### Postcss

Adicionar vendors e prefixos para compatibilidade com browsers antigos. Caso você tenha necessidades específicas de suporte à determinados browsers e versões, é possível criar um arquivo na pasta raíz chamado `.browserslistrc` e adicionar regras, por exemplo:

```
last 2 versions
> 0.5%
IE 10
```



### Referências

- https://www.taniarascia.com/how-to-use-webpack/#basic-configuration
- https://github.com/taniarascia/webpack-boilerplate
- https://www.youtube.com/watch?v=TOb1c39m64A&t
- https://www.youtube.com/watch?v=X1nxTjVDYdQ
