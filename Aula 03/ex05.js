const prompt = require("prompt-sync")();
const numero1 = +prompt("Digite a primeira nota: ");
const numero2 = +prompt("Digite a segunda nota: ");
const media = (numero1 + numero2) / 2;

if (media >= 6) {
  // Retornar True ou False
  console.log(`Aluno aprovado com a média: ${media}`);
} else {
  console.log(`Aluno reprovado com a média: ${media}`);
}

console.log("Fim do programa!");
