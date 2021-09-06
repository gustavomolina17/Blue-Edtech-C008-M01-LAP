class Pessoa {
  constructor(nome, sexo, idade) {
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
  }
}
class Amigo extends Pessoa {
  constructor(nome, sexo, idade, aniversario) {
    super(nome, sexo, idade);
    this.aniversario = aniversario;
  }
}
let p1 = new Pessoa("Éter Sulfúrico Amazonino Rios", "M", 24);
let a1 = new Amigo("Harmonia Jacintho", "F", 29, "06/09");
console.log("===================================");
console.log("Dados do objeto pessoa: ");
console.log();
for (i in p1) {
  console.log(`${i}: ${p1[i]}`);
}
console.log();
console.log("==================================");
console.log("Dados do objeto amigo: ");
console.log();
for (i in a1) {
  console.log(`${i}: ${a1[i]}`);
}
