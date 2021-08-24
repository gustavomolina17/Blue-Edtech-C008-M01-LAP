const valorRefeicao = 42.54; // number
const valorTaxa = 10; // number

const resultado = valorRefeicao + valorRefeicao * (valorTaxa / 100); // number

console.log(`R$ ${resultado.toFixed(2)}`);