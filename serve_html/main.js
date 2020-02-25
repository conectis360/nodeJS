const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router")
    fs = require('fs');
    plainTextContentType = {
        "Content-type": "text/plain"
    },
    htmlContentType = {
        "Content-type": "text/html"
    };
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if(errors) {
                console.log("Erro ao ler o arquivo..");
            }
            res.end(data);
        });
    };

    router.get("/", (req, res) => {
        res.writeHead(httpStatus.OK, plainTextContentType);
        res.end("index");
    });
    
    router.get("/index.html", (req, res) => {
        res.writeHead(httpStatus.OK, htmlContentType);
        customReadFile("views/index.html", res);
    });

    router.post("/", (req, res) => {
        res.writeHead(httpStatus.OK, plainTextContentType);
        res.end("postado.");
    });


http.createServer(router.handle).listen(port);
console.log(`Servidor está ouvindo a porta: ${port}`);