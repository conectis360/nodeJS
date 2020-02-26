const port = 3000,
    express = require("express"),
    app = express();

    app.post("/", (req, res) => {
        res.send("Hello World!");
        console.log(req.params);
        console.log(req.body);
        console.log(req.url);
        console.log(req.query);
    })
    .listen(port, () =>{
        console.log(`ExpressJS server iniciou e está esperando a porta: ${port}`);
    });