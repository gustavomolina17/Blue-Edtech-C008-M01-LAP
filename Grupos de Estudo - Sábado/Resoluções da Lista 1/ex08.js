function somaImposto(taxaImposto, custo) {
  custo = custo + custo * (taxaImposto / 100.0);
  return custo;
}

taxa = +prompt("Informe o valor da taxa de imposto: ");
custo = +prompt("Informe o custo do produto: ");

custo = somaImposto(taxa, custo);

console.log(`O preco com impostos é: ${custo}`);
