const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
};

const uri = `mongodb+srv://crud:zpYLPnurTOPyLvYM@cluster0.p0c10ab.mongodb.net/healapp`
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;