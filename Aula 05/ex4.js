/*Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.
 */
PositivoNegativo = (numero) => {
  if (numero < 0) {
    return "N";
  } else if (numero > 0) {
    return "P";
  } else {
    return "ZERO";
  }
};

const numero = prompt("Digite um número: ");
console.log(PositivoNegativo(numero));
