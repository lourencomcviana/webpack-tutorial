// only common js is suported on webpack.config
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// minimal configuration
module.exports = {
    entry:
    {
        "hello-world": './src/helloWorld.js',
        "muffin": './src/muffin.js'
    },
    output: {
        // contenthash insere o hash md5 do arquivo no nome para melhorar cacheamento do navegador
        // [name] se refere ao entry point
        // possível usar [id] ao invés de [name]
        // pode usar uma função para gerar o nome
        filename: '[name].[contenthash].js',
        // needs to be an absolute path or ` configuration.output.path: The provided value "./dist" is not an absolute path!` error will pop up!
        path: path.resolve(__dirname,'./dist'),
        // configura o webpack para adicionar a tag <publicPath> quando o HtmlWebpackPlugin é utilizado. Deixar vazio pois na versão atual o html está na mesma pasta dos scripts
        // adicionado prefixo static para funcionar o servidor express
        publicPath: '/static/'
    },
    // utilizado para aprimorar a experência de desenvolvimento em ambientes de desenvolvimento ou produção.
    // - ambiente de desenvolvimento: nada é minificado, tudo tem sourcemaps
    // - ambiente de produção: tudo é minificado até o máximo possível, não existem source maps
    // existem outras diferenças mas é minimamente isso
    mode: 'production',
    optimization: {
        splitChunks:{
            // pega bundles grandes e separa em outro arquivo
            chunks: 'all',
            // tamanho minimo para ser separado em outro bundle, 3000 é aproximadamente 3kb
            minSize: 3000
        }
    },
    plugins: [
        // terser plugin é padrão em production
        // extrai css em um arquivo separado
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // clean dist folder
        new CleanWebpackPlugin(),
        // edita o html
        new HtmlWebpackPlugin({
            // nome do arquivo gerado
            filename: "hello-world.html",
            // entry(s) que será incluida na página
            chunks: ['hello-world'],
            // template
            template: "src/page-template.hbs",
            title: "Hello World",
            description: 'HelloWorld',
            // default true no modo production
            minify: true
        }),
        new HtmlWebpackPlugin({
            filename: "muffin.html",
            chunks: ['muffin'],
            template: "src/page-template.hbs",
            title: "Muffin",
            description: 'Muffin',
            // default true no modo production
            minify: true
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
            },
            {
                // regex
                test: /\.hbs$/,
                exclude: /node_modules/,
                use: 'handlebars-loader'
            }
        ]
    }
}
