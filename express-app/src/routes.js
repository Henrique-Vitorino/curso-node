import { Router } from "express";
const fs = require("fs");

// const { randomUUID } = require("crypto");

const routes = new Router();

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

routes.get("/produtos", (req, res) => {
  res.json(products);
});

routes.get("/produto/:id", (req, res) => {
  const id = req.params.id;
  res.json(products[products.findIndex((produto) => produto.id == id)]);
});

routes.post("/produtos", (req, res) => {
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

routes.put("/produtos/:id", (req, res) => {
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

routes.delete("/produto/:id", (req, res) => {
  const id = req.params.id;
  products.splice(
    products.findIndex((produto) => produto.id == id),
    1
  );
  res.json({ message: "Produto removido com sucesso!" });
  productFile();
});

export default routes;
