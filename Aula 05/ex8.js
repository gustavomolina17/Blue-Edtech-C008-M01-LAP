/*Faça um programa que calcule através de uma função o IMC de uma pessoa que tenha
1,68 e pese 75kg.
*/

function calculoIMC(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc.toFixed(2));
}

const peso = prompt("Digite seu peso: ");
const altura = prompt("Digite sua altura");
calculoIMC(peso, altura);
