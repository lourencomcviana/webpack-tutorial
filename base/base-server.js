const path = require("path");
const fs = require("fs");

module.exports = function configureServer(express, basePath, pageName, port) {
    const app = express();
    // carrega arquivos estáticos
    app.use('/', express.static(path.resolve(basePath,'../dist')));
    // retorna a página
    app.get('/', (req, res) =>{
        const pathToHtmlFile = path.resolve(basePath,'../dist', `${pageName}.html`);
        const contentHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
        res.send(contentHtmlFile);
    });
    app.listen(port, () =>{
        console.log(`Server started on port ${port}`)
    });
    return app;
}
