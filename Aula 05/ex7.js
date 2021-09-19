/*
Faça um programa que calcule o salário de um colaborador na empresa XYZ. O salário é pago conforme a quantidade de horas trabalhadas. Quando um funcionário trabalha mais de 40 horas ele recebe um adicional de 1.5 nas horas extras trabalhadas.
*/

function calcularPagamento(QuantidadeHoras, valorHora) {
  let salario;

  if (QuantidadeHoras <= 40) {
    salario = QuantidadeHoras * valorHora;
  } else {
    const horasExcedidas = QuantidadeHoras - 40;
    salario = 40 * valorHora + horasExcedidas * (1.5 * valorHora);
  }
  return salario;
}

QuantidadeHoras = +prompt("Digite as horas: ");
valorHora = +prompt("Digite o valor hora: ");
const totalSalario = calcularPagamento(QuantidadeHoras, valorHora);
console.log(`O valor de seus rendimentos é R$ ${totalSalario.toFixed(2)}`);
