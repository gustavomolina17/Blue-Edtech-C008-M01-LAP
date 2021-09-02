// Para usar o prompt devemos instalar o prompt sync: npm i prompt-sync

const prompt = require("prompt-sync")(); // Para poder utilizar o comando prompt do node

// Declarando um array (lista) de pessoas

let pessoas = [
  "Natal Carnaval",
  "Rémedio Amargo",
  "Chevron Ford",
  "Pacifico Armando Guerra",
  "Janeiro Fevereiro da Siva",
  "Renato Pordeus Furtado",
];

console.log(pessoas); // Retornando o conteúdo da lista

// Quero exibir o indice do elemento escolhido na lista

console.log(
  "O indice do elemento 'Chevron Ford' na lista é: " +
    pessoas.indexOf("Chevron Ford")
);

// Quero exibir o conteúdo presente na posição escolhida na lista
console.log("O elemento " + pessoas[4] + " está na 5ª posição do array");

// Tentando acessar um indice inexistente

console.log(
  "Se tentarmos acessar o indice de um elemento inexistente o retorno será: " +
    pessoas.indexOf("Jacinto Alegria")
);

console.log(pessoas.join(" / ")); // separando os elementos da lista por /

const nome1 = prompt("Digite o nome a ser incluído na lista: ");
pessoas.push(nome1);
const nome2 = prompt("Digite o nome a ser incluído na lista: ");
pessoas.push(nome1, nome2);
console.log(pessoas);

// Utilizamos o comando "POP" para excluir o último elemento da lista

pessoas.pop();
console.log(pessoas);

// Utilizamos o comando "SHIFT" para excluir o 1º elemento da lista

console.log(pessoas);
pessoas.shift();
console.log(pessoas);
