/* Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são. */

let aluno = {}; // Objeto Vazio

let pessoa = {
  nome: "Gustavo",
  idade: 30,
  genero: "Masculino",
};

console.log(pessoa); // Mostrar todo o conteúdo do objeto
console.log(pessoa.nome); // Imprime somente o nome
console.log(pessoa.idade); // Imprime somente a idade

pessoa.escolaridade = "Mestrado Completo"; // Após o objeto ser criado podemos adicionar atributos neles

console.log(pessoa);

delete pessoa.escolaridade; // Delete é usado para exclusão de um atributo

console.log(pessoa);
