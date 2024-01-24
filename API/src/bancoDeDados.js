const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const produtos = {};

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

function deletarProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

// função para retornar produto especifico
function getProduto(id) {
  return produtos[id] || {};
}

// função para retornar produtos
function getProdutos() {
  return Object.values(produtos);
}

module.exports = { salvarProduto, getProduto, getProdutos, deletarProduto };
