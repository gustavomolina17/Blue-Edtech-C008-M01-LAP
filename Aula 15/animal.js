// Herança -> Quando falamos de herança, temos a classe Mãe e as classes filhas. Ao extender a classe mãe, a classe filha herda (recebe) tudo que e da mãe.

// Dica do Pai: Como boa prática, as classes iniciam com letra maiúscula.

class Animal {
  // Todos os animais terão esses atributos.

  constructor(nome, idade, preco) {
    this.nome = nome;
    this.idade = idade;
    this.preco = preco;
  }

  ChecarEstoque() {
    return 10;
  }
}

// A palavra reservada EXTENDS indica que a minha classe cachorro está recebendo TUDO (atributos e métodos) da class Animal.

// O nome da classe Mãe SEMPRE vem após a palavra EXTENDS

class Cachorro extends Animal {
  constructor(nome, idade, preco, raca, peso) {
    super(nome, idade, preco); // Preciso OBRIGATORIAMENTE colocar o SUPER para que o meu programa entenda que eu QUERO REUTILIZAR esses atributos da classe mãe.
    this.raca = raca;
    this.peso = peso;
  }

  // Posso criar métodos exclusivos (únicos) para a classe filha

  Latir() {
    console.log("Au!! Au!!");
  }

  // Posso personalizar um método vindo da classe mãe

  ChecarEstoque() {
    console.log("Temos 40 cachorros a venda em promoção. Aproveitem!!!!");
  }
}

// A partir deste momento o objeto cachorro existe e pode ser manipulado
let dog = new Cachorro("Heineken", 2, 499, "lhasa", 3);
let dog2 = new Cachorro("Caramelo", 4, 600, "Pitbull", 12);

// Mostrar todo o conteúdo do objeto
console.log(dog);
dog.Latir();
dog.ChecarEstoque();
console.log(dog2);
