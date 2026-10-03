const dados = require("./dados.json");

const comissoes = {};

function calcularComissao(valor) {
  if (valor < 100) {
    return 0;
  }

  if (valor < 500) {
    return valor * 0.01;
  }

  return valor * 0.05;
}

dados.vendas.forEach((venda) => {
  if (!comissoes[venda.vendedor]) {
    comissoes[venda.vendedor] = 0;
  }

  const comissao = calcularComissao(venda.valor).toFixed(2);
  comissoes[venda.vendedor] += Number(comissao);
  console.log(
    venda.vendedor,
    "→ Venda: R$",
    venda.valor,
    "→ Comissão: R$",
    comissao,
  );
});
console.log("\nTotal de comissão por vendedor:");

for (const vendedor in comissoes) {
  console.log(`${vendedor}: R$ ${comissoes[vendedor].toFixed(2)}`);
}
