const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/conffeti_cuisine",
    { useNewUrlParser: true }
)
const subscribersController = require("./controllers/subscriberController");
const usersController = require ("./controllers/usersController");
const express = require('express');
var app = express();
router = express.Router()


app.set('view engine', 'ejs');
app.use("/", router);
app.use(express.json());
app.use(
    express.urlencoded({
      extended: false
    })
  );

app.get("/users", usersController.index, usersController.indexView);

router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create,
  usersController.redirectView);


app.listen(3000, () => {
    console.log(`Server na porta: 3000`);
})

