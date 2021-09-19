/*Faça um script com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.
 */
soma = (x, y, z) => {
  resposta = x + y + z;
  return resposta;
};

media = (soma) => {
  media = soma / 3;
  return console.log(`A média é: ${media.toFixed(2)}`);
};

function menu() {
  x = +prompt("Primeiro numero: ");
  y = +prompt("Segundo numero : ");
  z = +prompt("Terceiro numero: ");
  somaNumero = soma(x, y, z);
  console.log(media(somaNumero));
}

menu();
