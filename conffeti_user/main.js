const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/conffeti_cuisine",
    { useNewUrlParser: true }
)
const subscribersController = require("./controllers/subscriberController");
const usersController = require ("./controllers/usersController");
const express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(
    express.urlencoded({
      extended: false
    })
  );
app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/users", usersController.index);


app.listen(3000, () => {
    console.log(`Server na porta: 3000`);
})

