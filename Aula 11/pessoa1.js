/* Um objeto é uma coleção de dados e/ ou funcionalidades relacionadas (que geralmente consistem em diversas variavéis e funções - que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são. */

let aluno = {}; // Objeto vazio

let bicicleta = {}; // Objeto vazio

let pessoa = {
  nome: "Gustavo Molina",
  idade: 18,
  genero: "Masculino",
};

console.log(pessoa); // Imprime todo o conteúdo do objeto
console.log(pessoa.nome); // Imprime o nome
console.log(pessoa.idade); // Imprime a idade

pessoa.escolaridade = "Cursando Doutorado"; // Após o meu objeto ser criado podemos adicionar atributos (propriedades) neles.

console.log(pessoa);

delete pessoa.genero;

console.log(pessoa);
