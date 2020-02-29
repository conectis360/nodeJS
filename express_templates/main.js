const port = 3000,
    express = require('express'),
    app = express();
    homeController = require("./controller/homeController");
    layouts = require("express-ejs-layouts");

app.use(layouts);
app.set("view engine", "ejs");

app.get("/name/:myName", homeController.respondWithName);

app.listen(port, () => {
    console.log(`Server na porta: ${port}`);
})