// Para que o prompt funcione é necessário rodar: npm i prompt-sync no terminal

const prompt = require("prompt-sync")(); // Para poder utilizar o comando prompt do node

//Declarando meu array (lista) de pessoas

let pessoas = [
  "Natal Carnaval",
  "Remédio Amargo",
  "Pacífico Armando Guerra",
  "Dolores Fuertes de Barriga",
];

console.log(pessoas); // Retornando todo o contéudo da lista

// Exibe o indice do elemento escolhido na lista
console.log(
  "O indice do elemento 'Remédio Amargo' na lista é: " +
    pessoas.indexOf("Remédio Amargo")
);

// Exibe o conteúdo presente na posição escolhida na lista
console.log("O elemento " + pessoas[1] + " está na 2ª posição do array.");

// Tentando acessar um indice que não existe
console.log(
  "Se tentarmos acessar o indice de um elemento inexistente o retorno será: " +
    pessoas.indexOf("Amado Amoroso")
);

console.log(pessoas.join(", ")); // juntando os elementos da lista com ','
console.log(pessoas.join(" / ")); // juntando os elementos da lista com '/'

// Utilizamos o comando "POP" p/ excluir o último elemento da lista
pessoas.pop();
console.log(pessoas);

// Utilizamos o comando "SHIFT" p/ excluir o 1º elemento da lista
pessoas.shift();
console.log(pessoas);
