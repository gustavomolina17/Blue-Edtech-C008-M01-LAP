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
