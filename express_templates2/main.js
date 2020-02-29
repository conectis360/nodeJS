const port = 3000,
    express = require('express'),
    app = express();
    homeController = require("./controller/homeController");
    errorController = require('./controller/errorController');
    layouts = require("express-ejs-layouts");

app.use(layouts);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);
app.use(errorController.logErrors);
app.set("view engine", "ejs");

app.get("/name/:myName", homeController.respondWithName);

app.listen(port, () => {
    console.log(`Server na porta: ${port}`);
})