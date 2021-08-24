const prompt = require("prompt-sync")();

// Exercício 6 - Elabore um programa que recebe dois valores inteiros e mostra se o primeiro valor é maior ou igual ao segundo valor

// Exemplo:

// Primeiro valor = 3
// Segundo valor = 2
// Resultado = True

const numeroInteiro1 = +prompt("Digite o primeiro número inteiro: ");
const numeroInteiro2 = +prompt("Digite o segundo número inteiro: ");

console.log(
  `${numeroInteiro1} é maior ou igual a ${numeroInteiro2}?: ${
    numeroInteiro1 >= numeroInteiro2
  }`
);
