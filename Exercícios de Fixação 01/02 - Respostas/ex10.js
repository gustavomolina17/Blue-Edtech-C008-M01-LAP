
const prompt = require("prompt-sync")();

const valorEmReal = +prompt("Valor em R$: ");
const valorEmDolar = valorEmReal / 5.75;

console.log(`R$${valorEmReal.toFixed(2)} = U$${valorEmDolar.toFixed(2)}`);