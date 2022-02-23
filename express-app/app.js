const express = require("express");
const fs = require("fs");

const app = express();

const port = 4001;
let products = [];

fs.readFile("produtos.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    products = JSON.parse(data);
  }
});

function productFile() {
  fs.writeFile("produtos.json", JSON.stringify(products), (e) => {
    console.log(e);
  });
}

app.use(express.json());

app.get("/produtos", (req, res) => {
  res.json(products);
});

app.get("/produto/:id", (req, res) => {
  const id = req.params.id;
  res.json(products[products.findIndex((produto) => produto.id == id)]);
});

app.post("/produtos", (req, res) => {
  const { name, price } = req.body;
  try {
    products.push({
      id: products.length,
      name,
      price,
    });
    res.json({ message: `${name} inserido com sucesso!` });
    productFile();
  } catch (err) {
    res.json(`Erro ao inserir ${name}!`);
  }
});

app.put("/produtos/:id", (req, res) => {
  const { name, price } = req.body;
  const id = req.params.id;
  products[products.findIndex((produto) => produto.id == id)] = {
    id,
    name,
    price,
  };
  res.json({ message: `${name} atualizado com sucesso!` });
  productFile();
});

app.delete("/produto/:id", (req, res) => {
  const id = req.params.id;
  products.splice(
    products.findIndex((produto) => produto.id == id),
    1
  );
  res.json({ message: "Produto removido com sucesso!" });
  productFile();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
