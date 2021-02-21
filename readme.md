# **webpack_cra**

## **Sobre o projeto**

**Custom Webpack 5 Config for React Applications.**

Assim como o projeto [esbuild_cra](https://github.com/felipexperto/esbuild_cra) este projeto é uma tentativa de opção ao famoso `create-react-app` criado com a intenção de estudar possibilidades, diminuir quantidade de dependências e buscar mais controle sobre o build de aplicações em `React`.

![React](https://github.com//aleen42/badges/raw/master/src/react.svg)
![Tamanho do repositório](https://img.shields.io/github/repo-size/felipexperto/webpack_cra)
![Quantidade de linhas de código do repositório](https://img.shields.io/tokei/lines/github/felipexperto/webpack_cra)
![Quantidades de linguagens no repositório](https://img.shields.io/github/languages/count/felipexperto/webpack_cra)
![Linguagem principal do repositório](https://img.shields.io/github/languages/top/felipexperto/webpack_cra)

![Tipo de licença do projeto](https://img.shields.io/github/license/felipexperto/webpack_cra)
![Versão do projeto no package.json](https://img.shields.io/github/package-json/v/felipexperto/webpack_cra)
![Data do último commit](https://img.shields.io/github/last-commit/felipexperto/webpack_cra)

## **Tecnologias**

Os papéis de algumas dependências:

- [@babel/core](https://www.npmjs.com/package/@babel/core) - dependência principal do Babel;
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - configuração do Babel usada para transformar ES6+ em código ES5 compatível com browsers. Opcionalmente configura poyfills para browsers automaticamente;
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) - configuração utilizada para transformar JSX e React class syntax em código JavaScript válido;
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) - Conjunto de métodos auxiliares para testar o DOM (toBeNull, toBeDefined, toBeFalsy, entre outros);
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) - Pacote que possui um conjunto de APIs para possibilitar teste de componentes React e encorajar boas práticas;
- [babel-loader](https://www.npmjs.com/package/babel-loader) - Transpila arquivos com Babel e webpack;
- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) - Plugin webpack para remover/limpar pasta de build;
- [css-loader](https://www.npmjs.com/package/css-loader) - Resolve imports de CSS;
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin?activeTab=versions) - Gera arquivos HTML baseado em templates;
- [identity-obj-proxy](https://www.npmjs.com/package/identity-obj-proxy) - Identity object utilizado para lidar com imports de CSS durante testes com Jest;
- [jest](https://www.npmjs.com/package/jest) - Framework de teste Javascript;
- [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) - Extrai CSS em arquivos separados;
- [postcss](https://www.npmjs.com/package/postcss) - Adicionar vendors e prefixos para compatibilidade com browsers antigos. Caso você tenha necessidades específicas de suporte à determinados browsers e versões, é possível criar um arquivo na pasta raíz chamado `.browserslistrc` e adicionar regras;
- [postcss-loader](https://www.npmjs.com/package/postcss-loader) - Processa CSS com PostCSS;
- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) - configuração padrão para PostCSS;
- [sass](https://www.npmjs.com/package/sass) - Disponibiliza SASS via linha de comando e Node.js API;
- [sass-loader](https://www.npmjs.com/package/sass-loader) - Lê SCSS e compila para CSS;
- [webpack](https://www.npmjs.com/package/webpack) - dependência principal do webpack;
- [webpack-cli](https://www.npmjs.com/package/webpack-cli) - enable running webpack from the command line;
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) - servidor de desenvolvimento que roda webpack automaticamente quando arquivos são modificados.

## **Como utilizar**
### **Executando o projeto**

1. Clone o repositório

2. Instale as dependências:
    - `npm run install`

3. Execute o projeto:
    - `npm run start`

4. Visite o endereço:
    - `http://localhost:8080`

### Referências

- [Webpack Docs](https://jestjs.io/docs/en/webpack)
- [taniarascia/webpack-boilerplate](https://github.com/taniarascia/webpack-boilerplate)
- [webpack Tutorial: How to Set Up webpack 5 From Scratch by Tania Rascia](https://www.taniarascia.com/how-to-use-webpack/#basic-configuration)
- [Webpack 5 Full Project Setup by Swashbuckling with Code](https://www.youtube.com/watch?v=TOb1c39m64A)
- [Creating and Understanding a Basic Webpack 5 Setup by Swashbuckling with Code](https://www.youtube.com/watch?v=X1nxTjVDYdQ)
