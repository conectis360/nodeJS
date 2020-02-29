const mongoDB = require('mongodb').MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db";
const express = require('express');
    app = express();

mongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
      .find()
      .toArray((error, data) => {
          if(error) throw error;
          console.log(data);
      });
});


app.listen(3000, () => {
    console.log(`Server na porta: 3000`);
})