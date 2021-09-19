/* Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o
valor de custo para incluir o imposto sobre vendas.
*/

function somaImposto(taxaImposto, custo) {
  custo = custo + custo * (taxaImposto / 100.0);
  return custo;
}

taxa = +prompt("Informe o valor da taxa de imposto: ");
custo = +prompt("Informe o custo do produto: ");

custo = somaImposto(taxa, custo);

console.log(`O preco com impostos é: ${custo}`);
