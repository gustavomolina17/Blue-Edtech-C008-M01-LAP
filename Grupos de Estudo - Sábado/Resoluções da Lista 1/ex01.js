const nome = prompt("Digite seu nome: ");
const endereco = prompt("Digite seu endereço: ");
const hobby = prompt("Digite seu Hobby: ");

console.log(nome.toUpperCase());
console.log(endereco.toLowerCase());
console.log(hobby.substring(0, 1).toUpperCase().concat(hobby.substring(1)));
