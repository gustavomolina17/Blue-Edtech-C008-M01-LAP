/* Tabuada de um número X com for each
1º passo - Crie uma lista (da maneira que você desejar).
2º passo - Crie a função.
3º passo - NUNCA MUDA: nomedalista.forEach(nomedafunção)
*/

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDo5(item) {
  console.log(item * 5);
}

numeros.forEach(tabuadaDo5);
