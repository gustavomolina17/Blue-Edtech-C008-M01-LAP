/*# Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA.
# Opcionalmente, valide a data e retorne NULL caso a data seja inválida.
*/
const dia = prompt("Digite um dia qualquer: ");
const mes = prompt("Digite um mes qualquer: ");
const ano = prompt("Digite um ano qualquer: ");

let mesPorExtenso;

DiaMesAno = (dia, mes, ano) => {
  if (dia <= 31 && mes <= 12) {
    // console.log(dia)
    meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outrubro",
      "Novembro",
      "Dezembro",
    ];
    // console.log(meses)
    const mesPorExtenso = meses[mes - 1];
    // console.log(meses)
    // console.log(meses[m - 1])
    // console.log(mesPorExtenso)

    if (mesPorExtenso === "Fevereiro" && dia === 29 && ano % 4 !== 0) {
      console.log("Fevereiro só tem 28 dias em anos não bissextos!");
    } else if (mesPorExtenso === "Fevereiro" && dia >= 30) {
      console.log("Fevereiro só tem 29 ou 28 dias!");
    } else if (
      mesPorExtenso === "Abril" ||
      mesPorExtenso === "Junho" ||
      mesPorExtenso === "Setembro" ||
      (mesPorExtenso === "Novembro" && dia === 31)
    ) {
      console.log("Esse mês tem apenas 30 dias");
    } else {
      console.log(`${dia} de ${mesPorExtenso} de ${ano}`);
    }
  } else {
    console.log("Data inválida");
  }
};

DiaMesAno(dia, mes, ano);
