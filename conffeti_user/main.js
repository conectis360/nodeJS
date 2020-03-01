const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/conffeti_cuisine",
    { useNewUrlParser: true }
)
mongoose.connection;