const port = 3000,
    express = require('express'),
    app = express();
const homeController = require("./controllers/homeController");
const signUpController = require("./controllers/signUpController");

app.get("/items/:vegetable", homeController.enviaReqParametro);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.post("/", homeController.postHome);
app.post("/cadastrarUsuario", signUpController.cadastrarUsuario);
app.listen(port, () => {
    console.log(`Server na porta: ${port}`);
})
