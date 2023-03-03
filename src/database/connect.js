const mongoose = require("mongoose");

const connectToDataBase = async () => {
  console.log("inciando conexao com DB");
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.anrwk8j.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        console.log("Erro ao conectar no MongoDB: ", error);
      }
      console.log("Conexão ao MongoDB com Sucesso!");
    }
  );
};

module.exports = connectToDataBase;
