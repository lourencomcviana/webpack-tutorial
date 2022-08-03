# [Begginer web pack course](https://www.udemy.com/course/webpack-from-beginner-to-advanced/)
Ver arquivo [webpack.config.js](./webpack.config.js) para mais detalhes no uso de cada plugin, loader, etc

## [github original](https://github.com/vp-online-courses/webpack-tutorial)
o tutorial original está dividido em branchs. Bem organizado, existem diferenças mas é uma ótima base para referência

## Run detailed status
`npx webpack --stats detailed`


## Assets
Bundle files into javascript
### Types
- asset -> decide automatically between resource and inline
- asset/resource -> big files, external url
- asset/inline -> small files, bundled in the javascript
- asset/source -> import as source code and inject into javascript

## Loaders
Define processamento customizado para os arquivos que corresponderem a regra. Ver webpack.config.js

- `npm install css-loader style-loader --save-dev`
- `npm install sass sass-loader --save-dev`
- `npm install @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties --save-dev`
- `npm install terser-webpack-plugin --save-dev`
- `npm install handlebars-loader --save-dev`
  - `npm install handlebars --save`

## [Plugins](https://webpack.js.org/plugins/)
Adicionam comportamento ao webpack
- TerserPlugin já vem incluso no webpack
- `npm install mini-css-extract-plugin --save-dev`
- `npm install html-webpack-plugin --save-dev`
- `npm install clean-webpack-plugin --save-dev`

## Server
O servidor de desenvolvimento do webpack permite hotreload do código para desenvolvimento mais ágil!
- `npm install webpack-dev-server --save-dev`

## Outras dependências
utilizado somente para testar compartilhamento de bundles e atomização
### Lodash
- `npm install --save lodash`
### React
- `npm install --save react`

## Relacionamento entre as aplicações com module federation
[![](https://mermaid.ink/img/pako:eNp1j7FuAjEQRH9ltdUhcXzAFUjhLhIpUoFEgVNs2D3OwvYePruIgH-PiUCiyVSjmVfMXPCgLNjgMdI4wLYzAYre9h1Nw7dS5C-o6yWsqrU4p7DT6Hj2D9RWn7nvbXj07V_YVR-ejgItjcnqS7eol9dzpsAKUZlgSsWT0yBXWN0pnKOX6Mly2Xe5JwbTIF4MNsUyxZNBE26FyyNTkne2SSM2PblJ5kg56eYnHLBJMcsT6iyVr_5B3X4B2M9SMw)](https://mermaid.live/edit#pako:eNp1j7FuAjEQRH9ltdUhcXzAFUjhLhIpUoFEgVNs2D3OwvYePruIgH-PiUCiyVSjmVfMXPCgLNjgMdI4wLYzAYre9h1Nw7dS5C-o6yWsqrU4p7DT6Hj2D9RWn7nvbXj07V_YVR-ejgItjcnqS7eol9dzpsAKUZlgSsWT0yBXWN0pnKOX6Mly2Xe5JwbTIF4MNsUyxZNBE26FyyNTkne2SSM2PblJ5kg56eYnHLBJMcsT6iyVr_5B3X4B2M9SMw)

## Helper webpack (not in the course)
Generates webpack 0 config files in a easyer fashion
- npm install -D @webpack-cli/generators
