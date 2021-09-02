const prompt = require("prompt-sync")({ sigint: true });

const produto = {};

produto.quantidade = parseInt(prompt("Quantidade: "));
produto.preco = parseFloat(prompt("Preço: R$  "));
produto.total = produto.quantidade * produto.preco;
let desconto = 0;

if (produto.total >= 100) {
  desconto = produto.total * 0.1;
  produto.total -= desconto;
} else if (produto.total >= 400 || produto.total <= 500) {
  desconto = produto.total * 0.15;
  produto.total -= desconto;
} else if (produto.total > 500) {
  desconto = produto.total * 0.2;
  produto.total -= desconto;
}

console.log(produto);
