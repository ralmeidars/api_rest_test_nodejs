const express = require('express');

//database
let carros = [];

//app
const app = express();
app.use(express.json());

// cria um carro
app.post("/carros", (req, res) => {
    const { id, marca, modelo, cor, ano } = req.body;
    const carro = {id, marca, modelo, cor, ano};
    carros.push(carro);
    return res.status(201).json(carro);
});

// lista todos os carros
app.get("/carros", (req, res) =>{
    const todosCarros = carros;
    return res.status(200).json(todosCarros);
});

// lista um carro pelo id
app.get("/carros/: id_carro", (req, res) =>{
    const { id_carro } = req.params;
    const carro = carros.find((carro) => carro.id === id_carro);
    if (!carro) res.status(404).json("carro não encontrado");
    return res.status(200).json(carro);
});

// atuliza um carro
app.patch("/carros/: id_carro", (req, res) =>{
    const { marca, modelo, cor, ano } = req.body;
    const { id_carro } = req.params;
    const carro = carros.find((carro) => carro.id === id_carro);
    if (!carro) res.status(404).json("carro não encontrado");
    carro.id = carro.id;
    carro.marca = marca ? marca : carro.marca;
    carro.modelo = modelo ? modelo : carro.modelo;
    carro.cor = cor ? cor : carro.cor;
    carro.ano = ano ? ano : carro.ano;
    return res.status(200).json(carro);
});

//remove um carro
app.delete("/carros/: id_carro", (req, res) =>{
    const { id_carro } = req.params;
    const carrosFiltrados = carros.filter((carro) => carro.id !== id_carro);
    carros = carrosFiltrados;
    return res.status(204).json("Carro Deletado!");
});


//servidor
app.listen(3333, () => console.log('servidor rodando!'))
