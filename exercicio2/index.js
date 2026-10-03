const dados = require("./dados.json");

console.log(dados);

let proximoId = 1;
const movimentacoes = [];

function movimentarEstoque(codigoProduto, tipo, quantidade) {
  const produto = dados.estoque.find(
    (item) => item.codigoProduto === codigoProduto,
  );
  if (quantidade <= 0) {
    console.log("A quantidade deve ser maior que zero.");
    return;
  }

  if (tipo !== "ENTRADA" && tipo !== "SAIDA") {
    console.log("Tipo de movimentação inválido.");
    return;
  }

  if (!produto) {
    console.log("Produto não encontrado.");
    return;
  }

  if (tipo === "ENTRADA") {
    produto.estoque += quantidade;
  }

  if (tipo === "SAIDA") {
    if (quantidade > produto.estoque) {
      console.log("Estoque insuficiente.");
      return;
    }

    produto.estoque -= quantidade;
  }
  const movimentacao = {
    id: proximoId,
    codigoProduto: codigoProduto,
    produto: produto.descricaoProduto,
    tipo: tipo,
    quantidade: quantidade,
    descricao:
      tipo === "ENTRADA" ? "Entrada de mercadoria" : "Saída de mercadoria",
  };

  movimentacoes.push(movimentacao);

  proximoId++;

  console.log("Movimentação realizada:", movimentacao);
  console.log("Estoque final:", produto.estoque);
}
movimentarEstoque(101, "ENTRADA", 20);
movimentarEstoque(101, "SAIDA", 30);
console.log("\nMovimentações realizadas:");
console.log(movimentacoes);
