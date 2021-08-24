const prompt = require("prompt-sync")();

const valorAluguel = prompt("Valor do aluguel: ");
const percentualReajuste = 1.31;
const valorAluguelReajustado = valorAluguel * percentualReajuste;

console.log(
  `O aluguel com reajuste de ${
    percentualReajuste * 100 - 100
  }% do IGPM ficará R$${valorAluguelReajustado.toFixed(2)}.`
);
