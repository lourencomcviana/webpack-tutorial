// only common js is suported on webpack.config
const path = require('path');

// minimal configuration
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // needs to be an absolute path or ` configuration.output.path: The provided value "./dist" is not an absolute path!` error will pop up!
        path: path.resolve(__dirname,'./dist')
    },
    mode: 'none',
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
                    'style-loader', 'css-loader'
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
                    'style-loader', 'css-loader', 'sass-loader'
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
