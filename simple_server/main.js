const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    app = http.createServer((request, response) => {
        console.log("Recebemos um request");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
    let responseMessage = "<h1>Hello World</h1>"
    response.write(responseMessage);
    response.end();
    console.log('Enviando mensagem: ' + responseMessage);
    });

    app.listen(port);
    console.log('O server foi iniciado e está escutando a porta: ' + port);