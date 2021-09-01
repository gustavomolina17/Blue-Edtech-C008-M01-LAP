const prompt = require("prompt-sync")(); // Para poder utilizar o comando prompt do node

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
