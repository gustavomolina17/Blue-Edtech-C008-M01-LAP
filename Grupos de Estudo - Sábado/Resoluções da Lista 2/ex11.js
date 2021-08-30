const prompt = require("prompt-sync")();
let sfem = { nome: [], idade: [] };
let smas = { nome: [], idade: [] };
while (true) {
  while (true) {
    var cadnome = String(prompt("Digite o seu nome: "));
    if (isNaN(cadnome)) {
      break;
    } else {
      console.log("Por favor digite novamente o seu nome!");
    }
  }
  while (true) {
    var cadidade = parseInt(prompt("Digite a sua idade atual: "));
    if (cadidade % 1 == 0) {
      break;
    } else {
      console.log(
        "Você digitou uma idade inválida! Por favor digite novamente."
      );
    }
  }
  while (true) {
    var sexo = String(prompt("Digite o seu sexo [F/M]: ")).toUpperCase();
    if (sexo[0] == "F" || sexo[0] == "M") {
      break;
    } else {
      console.log("Por favor digite um sexo valido!");
    }
  }
  if (sexo == "M") {
    smas.nome.push(cadnome);
    smas.idade.push(cadidade);
  } else {
    sfem.nome.push(cadnome);
    sfem.idade.push(cadidade);
  }
  while (true) {
    var cont = String(
      prompt("Deseja realizar mais um cadastro [S/N]? ")
    ).toUpperCase();
    if (cont[0] == "S" || cont[0] == "N") {
      break;
    } else {
      console.log(
        "Você digitou uma opção invalida! Por favor digite novamente."
      );
    }
  }
  if (cont[0] == "N") {
    break;
  }
}
console.log("==================================================");
console.log(`O numero de Homens cadastrados foi: ${smas.nome.length}`);
console.log("Sendo eles:");
console.log("==================================================");
for (i in smas.nome) {
  console.log(`${smas.nome[i]} com ${smas.idade[i]} anos de idade`);
}
console.log("==================================================");
console.log(`O numero de Mulheres cadastradas foi: ${sfem.nome.length}`);
console.log("Sendo elas:");
console.log("==================================================");
for (i in sfem.nome) {
  console.log(`${sfem.nome[i]} com ${sfem.idade[i]} anos de idade`);
}
