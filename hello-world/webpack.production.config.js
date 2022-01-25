// only common js is suported on webpack.config
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// para facilitar alterações nas configs de produção, alterado para importar todas as configs de dev realizando somente as modificações necessárias a baixo
const baseconfig = require('./webpack.dev.config')

baseconfig.output.filename = '[name].[contenthash].js';
baseconfig.mode = 'production';
baseconfig.optimization = {
    splitChunks:{
        // pega bundles grandes e separa em outro arquivo
        chunks: 'all',
            // tamanho minimo para ser separado em outro bundle, 3000 é aproximadamente 3kb
            minSize: 3000
    }
};
baseconfig.plugins.push(new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
}));

module.exports = baseconfig;
