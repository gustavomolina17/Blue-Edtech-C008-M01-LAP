/* Quando trabalhamos com objetos, podemos inserir qualquer tipo de dado: texto, um número, um booleano, uma lista(array), uma função, outros objetos, pois, são todos tipos de variáveis */

let pessoa = {
  nome: "Chevrolet da Silva Ford",
  idade: 24,
  genero: "Masculino",
  escolaridade: "Graduado em Engenharia Mecânica",
};

//Adicionando uma lista (array) no nosso objeto

pessoa.interesses = ["Carros", "Astrologia", "Futebol", "Javascript"];

console.log(pessoa);
console.log(pessoa.interesses.length);
console.log(pessoa.interesses[3]);
