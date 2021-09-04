/* Simulador de dados de um Cassino: A ideia é simularmos o funcionamento de dados de um Cassino Clandestino: criaremos diferentes tipos de dados e de FORMA ALEATÓRIA mostraremos os valores tirados em cada dado */

// EXEMPLO : CELULAR
// Classes -> "Fábrica de Objetos"
// Atributos -> Características dos meus objetos (marca, peso, cor, tamanho...)
// Métodos --> "Ações" (enviar mensagem, fazer chamada, abrir facebook ...)

// Dica do Pai: Como boa prática, as classes iniciam com letra maiúscula.

class Dado {
  // Dentro do método construtor, eu coloco os atributos do meu objeto.
  // Método Construtor = "Molde" / "Forma".

  constructor(faces) {
    //faces = nº de lados de cada dado
    this.faces = faces; // Isso é uma auto referência
  }

  // Função em Js para gerar um número aleatório

  GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Criando o método Rolar() para gerar um número aleatório entre 1 e o número de faces que meu dado tiver

  Rolar() {
    console.log(
      "Resultado do dado: " + this.GetRandomIntInclusive(1, this.faces)
    );
  }
}

// Instanciando (criando) os nossos dados

// A partir deste momento o meu dado existe e pode ser manipulado
let d6 = new Dado(6); // Cria um dado de 6 faces;
let d12 = new Dado(12); // Cria um dado de 6 faces;
let d100 = new Dado(100); // Cria um dado de 100 faces;

d6.Rolar(); // Rolar é o método do objeto dado.
d12.Rolar();
d100.Rolar();
