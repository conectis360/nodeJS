const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
db.once("open", () => {
    console.log("Sucesso em conectar com o MongoDb via Mongoose");
});
Subscriber = require("./models/subscriber");
var subscriber1 = new Subscriber({
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
});

subscriber1.save((error, savedDocument) => {
    if(error) console.log(error);
    console.log(savedDocument);
});
Subscriber.create(
    {
        name: "Jon Wexler",
        email: "jon@jonwexler.com"
    },
    function (error, savedDocument) {
        if(error) console.log(error);
        console.log(savedDocument);
    }
);

const express = require('express');
    app = express();

var myQuery = Subscriber.findOne({
    name: "Jon Wexler"
}).where("email", /wexler/);

myQuery.exec((error, data) => {
    if (data) console.log(data.name);
});

app.listen(3000, () => {
    console.log(`Server na porta: 3000`);
})