const prompt = require("prompt-sync")();
function formatmoedas(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
console.log('Calculadora de salarios da empresa "xpto"!');
let now = new Date();
while (true) {
  var anoini = parseInt(prompt("Digite o ano em que iniciou na empresa: "));
  if (anoini % 1 == 0 && anoini < now.getFullYear()) {
    break;
  } else {
    console.log(
      "Você digitou uma opção invalida! Por favor digite novamente. "
    );
  }
}
while (true) {
  var salario = parseFloat(prompt("Digite o seu salario inicial: "));
  if (isNaN(salario)) {
    console.log("Você digitou uma opção invalida! Por favor digite novamente.");
  } else {
    break;
  }
}
var percent = 1.015;
var anostrabalhados = now.getFullYear() - anoini;
anostrabalhados -= 1;
salario = salario * percent;
var anosdeaument = 1;
while (true) {
  console.log(
    `O seu salario após o ${anosdeaument}º ano foi: ${formatmoedas(salario)}`
  );
  percent = (percent - 1) * 2 + 1;
  salario = salario * percent;
  anostrabalhados -= 1;
  anosdeaument += 1;
  if (anostrabalhados == 0) {
    break;
  }
}