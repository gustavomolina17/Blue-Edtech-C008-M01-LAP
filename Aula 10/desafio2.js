// Desafio

/* Crie UM DICIONÁRIO de carros, com no mínimo 7 carros, contendo os seguintes campos: id, modelo, marca e preço. Todas as informações serão recebidas pelo prompt. O usuário pode comprar mais de um carro e o programa deverá retornar o valor total da venda. Enquanto o usuário optar por comprar menos do que 3 carros, o programa deverá exibir a seguinte mensagem: "Deseja comprar outro carro?" em caso afirmativo o programa continua em execução, caso contrário é finalizado.
* O programa deve retornar o valor total no padrão monetário - R$50.000,00

**Dica**: sempre reveja o que você escreveu*/

const prompt = require("prompt-sync")();
function formatmoedas(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function valdad(ind, val) {
  if (ind == "id" || ind == "preço" || ind == "ano") {
    while (true) {
      if (!isNaN(val)) {
        val = parseInt(val);
        return val;
      } else {
        console.log(
          "Você digitou uma opção invalida! Por favor digite um valor numérico."
        );
        val = prompt(`Digite o ${ind} do veiculo: `);
      }
    }
  } else if (ind == "modelo" || ind == "marca" || ind == "nome") {
    while (true) {
      if (!isNaN(val)) {
        console.log(
          "Você digitou uma opção invalida! Por favor digite novamente."
        );
        val = prompt(`Digite o ${ind} do veiculo: `);
      } else {
        return val;
      }
    }
  }
}

var carros = { id: [], modelo: [], marca: [], nome: [], ano: [], preço: [] };

while (true) {
  for (let i in carros) {
    let user = valdad(i, prompt(`Digite o ${i} do veiculo: `));
    carros[i].push(user);
  }
  while (true) {
    var cont = String(
      prompt("Deseja cadastrar mais um veiculo [S/N]? ")
    ).toUpperCase();
    if (cont == "N" || cont == "S") {
      break;
    } else {
      console.log(
        "Você digitou uma opção invalida! Por favor tente novamente."
      );
    }
  }
  if (cont == "N") {
    break;
  }
}

console.log("-----> Revenda de carros <-----");
console.log("As opções que temos disponiveis em estoque são!");
for (i in carros.id) {
  console.log(
    `${carros.id[i]}: ${carros.marca[i]} - ${carros.nome[i]}, ${carros.ano[i]}. ${carros.modelo[i]}. Por: R$${carros.preço[i]}`
  );
}
var valorcompra = 0;
while (true) {
  while (true) {
    var compras = parseInt(
      prompt("Digite o código do carro que deseja comprar: ")
    );
    let indva = carros.id.indexOf(compras);
    if (indva != -1) {
      valorcompra += carros.preço[indva];
      break;
    } else {
      console.log(
        "O id que você digitou não corresponde a nenhum carro na nossa lista!"
      );
    }
  }
  console.log(
    `Até o momento o valor da sua compra é: ${formatmoedas(valorcompra)}`
  );
  while (true) {
    var continuar = String(
      prompt("Deseja continuar comprando [S/N]? ")
    ).toUpperCase();
    if (continuar[0] == "S" || continuar[0] == "N") {
      break;
    } else {
      console.log(
        "Você digitou uma opção inválida! Por favor digite uma opção valida."
      );
    }
  }
  if (continuar[0] == "N") {
    break;
  }
}
