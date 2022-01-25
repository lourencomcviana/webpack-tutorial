const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;
// carrega arquivos estáticos
app.use('/static', express.static(path.resolve(__dirname,'../dist')));
// retorna a página
app.get('/', (req, res) =>{
    const pathToHtmlFile = path.resolve(__dirname,'../dist/index.html');
    const contentHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentHtmlFile);
});

app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
});
