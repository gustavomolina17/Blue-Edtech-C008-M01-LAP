const prompt = require("prompt-sync")();

// Exercício 5 - Elabore um programa que receba 3 notas de um aluno e calcule a média dele.

// Exemplo:

// Primeira nota = 7
// Segunda nota = 8
// Terceira nota = 10

// Média = 7,75

const nota1 = +prompt("Informe a primeira nota: ");
console.log(`Nota 1: ${nota1}.`);

const nota2 = +prompt("Informe a segunda nota: ");
console.log(`Nota 2: ${nota2}.`);

const nota3 = +prompt("Informe a terceira nota: ");
console.log(`Nota 2: ${nota3}.`);

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A sua média foi de ${media}.`);
