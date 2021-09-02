// Criando nosso objeto filme
const filme = {
  nome: "Click",
  duração: 107,
  ano: 2006,
  atores: ["Adam Sandler", "Kate Beckinsale", "Christopher Walken"],
};

console.log(filme); // Ver todo o conteúdo do objeto

//Object.keys --> Imprime todas as chaves (atributos) do meu objeto em forma de lista.

console.log(Object.keys(filme));

// Object.values (Pronúncia: velhos) --> Imprime todos os valores do meu objeto em forma de lista.

console.log(Object.values(filme));

//Object.entries --> Imprime todas as chaves e todos os valores do meu objeto em forma de Lista.

console.log(Object.entries(filme));

//Iterando objetos a partir da lista gerada pelo Object.keys com for "normal"

const props = Object.keys(filme); // props está recebendo os valores do nosso objeto.

for (let i = 0; i < lista.length; i++) {
  console.log(filme[lista[i]]);
}

//ITERANDO COM O FOR OF

for (const prop of props) {
  // Similar: for (const filme of filmes)
  console.log(filme[prop]);
}

//PEGAR PROPRIEDADE E VALOR

for (const prop in filme) {
  console.log(prop, filme[prop]);
}

// Criar vários objetos com valores diferentes

const receber = require("prompt-sync")();

const filmes = [];
const qtd = receber("Digite quantos filmes você quer cadastrar: ");

const filme = {};

for (let i = 0; i < qtd; i++) {
  filme.nome = receber("Digite o nome do filme: ");
  filme.duracao = receber("Digite a duração do filme:");
  filme.ano = receber("Digite o ano de lançamento do filme: ");

  filmes.push(filme);
}

console.log(filmes);
