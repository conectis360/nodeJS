const express = require('express');
 app = express();
 homeController = require('./controllers/homeController');
 errorController = require('./controllers/errorController');
 const layouts = require("express-ejs-layouts");


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(
        `Servidor up: http://localhost:${app.get("port")}`
    )
});
