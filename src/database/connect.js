const mongoose = require("mongoose");

const connectToDataBase = () => {
  console.log("inciando conexao com DB");
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.anrwk8j.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
  console.log("conetado do mongoDB");
};

module.exports = connectToDataBase;
