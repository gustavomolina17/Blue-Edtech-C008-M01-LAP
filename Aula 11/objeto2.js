/* Você pode inserir qualquer tipo de dado, um texto, um número, um boolean, uma lista(array), uma função, outros objetos, pois são todos tipos de variáveis. */

let pessoa = {
  nome: "Chevrolet da Silva Ford",
  idade: 24,
  genero: "Masculino",
  escolaridade: "Graduado em Engenharia Mecânica",
};

// Adicionando uma lista (array) no nosso objeto
pessoa.interesses = ["Carros", "Astrologia", "Futebol", "Programação"];

console.log(pessoa);

console.log(pessoa.interesses[3]); // Para exibir somente o conteúdo da posição 3 da lista de interesses
