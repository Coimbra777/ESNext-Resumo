const porta = 3003;
const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rota para buscar produtos
app.get("/produtos", (req, res, next) => {
  console.log("Recebida requisição para listar todos os produtos");
  res.send(bancoDeDados.getProdutos());
});

// rota para buscar produto pelo id
app.get("/produtos/:id", (req, res, next) => {
  // console.log(`Recebida requisição para obter produto com ID ${req.params.id}`);
  res.send(bancoDeDados.getProduto(req.params.id));
});

// rota para cadastrar produtos
app.post("/produtos", (req, res, next) => {
  console.log("Recebida requisição para adicionar novo produto");

  const { nome, preco } = req.body;

  const produto = bancoDeDados.salvarProduto({
    nome: nome,
    preco: preco,
  });
  // console.log("Produto salvo:", produto);
  res.send(produto);
});

// rota para alterar produto
app.put("/produtos/:id", (req, res, next) => {
  const { id } = req.params;
  const produtoExistente = bancoDeDados.getProduto(id);

  if (!produtoExistente || Object.keys(produtoExistente).length === 0) {
    return res.status(404).send("Produto não encontrado.");
  }
  const produtoAtualizado = bancoDeDados.salvarProduto({
    id: id,
    ...req.body,
  });

  res.send(produtoAtualizado);
});

// rota para deletar produto
app.delete("/produtos/:id", (req, res, next) => {
  const produtoRemovido = bancoDeDados.deletarProduto(req.params.id);
  if (!produtoRemovido) {
    return res.status(404).send("Produto não encontrado");
  }
  res.send(req.params.id);
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
