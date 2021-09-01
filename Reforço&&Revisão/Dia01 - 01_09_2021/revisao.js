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

// Removendo um elemento usando "SPLICE"

let numeros = [1, 4, 7, 8, 32, 54, 9];
numeros.splice(0, 1); // Começando na posição do indice 0, remova 1 elemento
console.log(numeros);

// Removendo um intervalo usando "SPLICE"
numeros.splice(1, 3); // Começando na posição do indice 1, remova 3 elementos
console.log(numeros);

// Pesquisando e removendo um elemento específico por valor

let filmes = ["HP", "IT", "IT 2", "Blue"];
filmes.splice(filmes.indexOf("IT"), 1);
// Encontre a posição do índice de "IT", então remova um elemento dessa posição
console.log(filmes);

// Removendo vários elementos específicos (repetidos)

let list = ["bar", "baz", "foo", "qux", "foo", "foo", "asd", "ffd", "baz"];
let buscarPor = "foo";
let indice = list.indexOf(buscarPor);
while (indice >= 0) {
  list.splice(indice, 1);
  indice = list.indexOf(buscarPor);
}
console.log(list);

// Utilizamos o comando "POP" p/ excluir o último elemento da lista
pessoas.pop();
console.log(pessoas);

// Utilizamos o comando "SHIFT" p/ excluir o 1º elemento da lista
pessoas.shift();
console.log(pessoas);

//Adicionando elementos em uma lista com o comando prompt

let cidades = ["SP", "BH", "MG"];
console.log(cidades);
const cidade1 = prompt("Digite a cidade que gostaria de inserir na lista: ");
cidades.push(cidade1); //Será inserida no final da lista
console.log(cidades);
const cidade2 = prompt(
  "Digite a cidade que gostaria de inserir na posição 2 lista: "
);
cidades[2] = cidade2; // Será inserida na 2ª posição e apagará o conteúdo pré existente
console.log(cidades);
const cidade3 = prompt("Digite a cidade que gostaria de inserir: ");
cidades.splice(1, 0, cidade3); // na posição de indice 1, remova 0 elementos e adicione cidade 3 a essa posição
console.log(cidades);

//Verificando se um item está na lista

if (cidades.indexOf("SP") > -1) {
  console.log("Essa cidade está na lista!!!");
  console.log(cidades.indexOf("SP"));
} else {
  console.log("Opa, cidade não encontrada");
}

// Usando o laço for of para trazer todas as cidades da nossa lista

for (let city of cidades) {
  console.log(city);
}
