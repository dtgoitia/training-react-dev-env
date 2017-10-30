# Training: Setup React development environment

## What is this?

A repository to practice how to set up manually a React development environment without any starter kit.

## What does it have?

This repository contains:
1. A basic _Git_ + _Webpack_ + _React_ development environment setup.
2. A script to remove all setups and leave the repo empty. It will only leave the basic NPM package with scripts (no dependencies) and Git repository files to be able to checkout to initial commit to compare against your process.

## How to use it?

1. Clone the repository.
2. Reset working directory running `yarn reset` (or `npm run reset`). This will remove all files in the directory so that you can start setting up the development environment yourself.
3. Run `yarn start` (or `npm run start`) to check if your settings work.

## React development environment cheatsheet

* Required NPM packages:
  * `babel-core`
  * `babel-loader`
  * `babel-preset-es2015`
  * `babel-preset-react`
  * `html-webpack-plugin`
  * `react react-dom`
  * `webpack`
  * `webpack-dev-server`
* Configuration files:
  * Webpack configuration file (`/webpack.config.js`):
    ```js
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: 'client/index.html'
    });
    module.exports = {
      entry: './client/index.js',
      output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules/')
          }
        ]
      },
      plugins: [
        HtmlWebpackPluginConfig
      ]
    };
    ```
  * Babel configuration file (`/.babelrc`):
    ```js
    {
      "presets": [
        "es2015",
        "react"
      ]
    }
    ```
* Other files:
  * HTML template file  (`/client/index.html`):
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>React App Setup</title>
      </head>
      <body>
        <div id="app"></div>
      </body>
    </html>
    ```
  * JavaScript entry point (`/client/index.js`):
    ```js
    import React from 'react';
    import ReactDom from 'react-dom';

    class App extends React.Component {
      render() {
        return <div>Hi!</div>
      }
    }

    ReactDom.render(<App/>, document.getElementById('app'));
    ```