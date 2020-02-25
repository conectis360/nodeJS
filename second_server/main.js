const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
    
const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
    };

app.on("request", (req, res) => {
    var body = [];
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("Conteúdo do corpo da requisição: " + body);
    })
    console.log('Método: ' + getJSONString(req.method));
    console.log('URL: ' + req.url);
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>Isso será impresso na tela.</h1>";
    res.end(responseMessage);

})

app.listen(port);
console.log("O servidor foi iniciado na seguinte porta: " + port);

