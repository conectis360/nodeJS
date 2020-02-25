const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Page</h1>",
    "/about": "<h1>Learn more about us Page</h1>",
    "/hello": "<h1>Say hello to us Page</h1>",
    "/error": "<h1>Error this page doesn't exist</h1>",
    "/james": "<h3> Sobre o Criador desse site web </h3>"
};

const port = 3000,
    http = require('http'),
    app = http.createServer((req, res) => {
        res.writeHead(200, {
        "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) { // caso a req.url esteja dentro do route map, então
            res.end(routeResponseMap[req.url]); //eu irei responder a requisição com os dados dentro do objeto
        } else { //senão apenas mostro o welcome.
            res.end("<h1>Welcome</h1>");
        }
    });

app.listen(port);
console.log('O server foi iniciado e está escutando a porta: ' + port);