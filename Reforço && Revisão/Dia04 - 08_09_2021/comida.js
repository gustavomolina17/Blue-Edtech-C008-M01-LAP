const prompt = require("prompt-sync")();

class Comidas {
  // Responsável pela criação dos objetos (comidas)

  // TODA classe TEM UM CONSTRUTOR

  constructor() {
    // Passamos os atributos do nosso objeto

    // Auto - Referência

    this.nome = "";
    this.ingrediente = "";
    this.tempodepreparo = 0;
    this.bebida = "";
  }

  // Criando os nossos métodos

  Preparar() {
    console.log("Preparando o nosso prato.... ");
  }

  Arrumar() {
    console.log("Deixando tudo no grau pra ser feliz...");
  }

  Comer() {
    console.log("Aleluia, melhor momento do dia =) ");
  }
}

// Agora o meu objeto foi instanciado (criado), logo é possível manipulá-lo.

let prato1 = new Comidas();
let prato2 = new Comidas();

prato1.nome = String(prompt("Digite o nome do prato: "));
prato1.ingrediente = String(
  prompt("Digite o ingrediente principal do prato: ")
);
prato1.tempodepreparo = parseInt(
  prompt("Digite o tempo de preparo do prato: ")
);
prato1.bebida = String(prompt("Digite a bebida que acompanhará o prato: "));
console.log(prato1);

// Fução para definir o tempo de espero antes dos métodos serem executados

setTimeout(function () {
  prato1.Preparar();
}, 3000);

// Criação do nosso 2º Prato (Objeto)

prato2.nome = String(prompt("Digite o nome do prato: "));
prato2.ingrediente = String(
  prompt("Digite o ingrediente principal do prato: ")
);
prato2.tempodepreparo = parseInt(
  prompt("Digite o tempo de preparo do prato: ")
);
prato2.bebida = String(prompt("Digite a bebida que acompanhará o prato: "));
console.log(prato2);
