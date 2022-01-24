// only common js is suported on webpack.config
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// minimal configuration
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        // needs to be an absolute path or ` configuration.output.path: The provided value "./dist" is not an absolute path!` error will pop up!
        path: path.resolve(__dirname,'./dist')
    },
    mode: 'none',
    plugins: [
        // clean dist folder
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                // limpar todos os arquivos dentro da pasta do webpack, recursivamente
                '**/*',
                // limpar pasta que não é admnistrada pelo webpack ou qualquer outra pasta que seja de interesse antes do webpack rodar. Caminho absoluto serve para outras pastas
                path.join(process.cwd(), 'build/**/*')
            ]
        }),

        // minify code!!!
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        })
    ],
    // módulos separam como arquivos com regras especiáis devem ser processados.
    module: {
        rules: [
            // le-se para essa regra, aplicar esse tipo de módulo
            {
                // regex
                test: /\.(png|jpg)$/,
                // Tipo resource vai importar como se fosse um asset. Tal asset será acessível pela url pois é um resource. um arquivo independente será gerado no bundle final
                type: 'asset/resource'
            },
            {
                // regex
                test: /\.svg$/,
                // Tipo resource vai importar como se fosse um asset. Tal asset não será acessível pela url e estará dentro do bundle do js.
                type: 'asset/inline'
            },
            {
                // regex
                test: /\.css$/,
                // use irá importar o arquivo utilizando um ou mais loaders. neste caso:
                // - css-loader: le o conteudo do arquivo css e retorna o conteudo
                // - style-loader: pega o css carregado pelo css-loader e injeta na página usando tags
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                // regex
                test: /\.scss$/,
                // use irá importar o arquivo utilizando um ou mais loaders. neste caso:
                // - sass-loader converte scss para css
                // - css-loader: le o conteudo do arquivo css e retorna o conteudo
                // - style-loader: pega o css carregado pelo css-loader e injeta na página usando tags
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                // regex
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:  ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
}
