const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-code"),
    fs = require('fs'),
    const routeMap = {
        '/' : 'views/index.html'
    };
    http
        .createServer((req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-Type" : "text/html"
            });
            if(routeMap[req.url]){
                fs.readFile(routeMap[req.url], (error, data) => {
                    res.write();
                    res.end();
                });
            }else{
                res.end("<h1> Sorry, not found</h1>");
            }
        })
        .listen(port);
        console.log("Server up na porta: " + port);
