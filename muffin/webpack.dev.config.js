// only common js is suported on webpack.config
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const distPath = path.resolve(__dirname,'./dist');
// minimal configuration
module.exports = {
    // agora entry point é um object para aceitar múltiplas páginas
    entry: './src/muffin.js',
    output: {
        // [name] se refere ao entry point
        // possível usar [id] ao invés de [name]
        // pode usar uma função para gerar o nome
        filename: '[name].js',
        // needs to be an absolute path or ` configuration.output.path: The provided value "./dist" is not an absolute path!` error will pop up!
        path: distPath,
        // configura o webpack para adicionar a tag <publicPath> quando o HtmlWebpackPlugin é utilizado. Deixar vazio pois na versão atual o html está na mesma pasta dos scripts
        // no momento, public path precisa ser exato pois a url que o module federation vai configurar é essa
        publicPath:  'http://localhost:9002/'
    },
    // utilizado para aprimorar a experência de desenvolvimento em ambientes de desenvolvimento ou produção.
    // - ambiente de desenvolvimento: nada é minificado, tudo tem sourcemaps
    // - ambiente de produção: tudo é minificado até o máximo possível, não existem source maps
    // existem outras diferenças mas é minimamente isso
    mode: 'development',
    devServer: {
        port: 9002,
        static: {
            // diretório é o mesmo do path
            directory: distPath
        },
        devMiddleware: {
            // arquivo principal
            index: 'muffin.html',
            // escreve os arquivos em disco para utilizar no servidor, ao invés de somente utilizar na memória. Útil para alguns casos de debug mas pode ser um pouco mais lento
            writeToDisk: true
        }
    },
    plugins: [
        // não precisa minify code em development!!!
        // não precisa de hash em development
        // clean dist folder
        new CleanWebpackPlugin(),
        // edita o html
        new HtmlWebpackPlugin({
            filename: "muffin.html",
            template: "src/page-template.hbs",
            title: "Muffin",
            description: 'Muffin'
        }),
        new ModuleFederationPlugin({
            name: 'MuffinApp',
            filename: 'remoteEntry.js',
            // importando módulo de helloworldapp
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
                ImageCaptionApp: 'ImageCaptionApp@http://localhost:9003/remoteEntry.js'
            },
            exposes: {
               './MuffinPage': './src/components/muffin-page/muffin-page.js'
            }
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
