/* Classe: A nossa classe jogo é responsável pela criação dos objetos (games).
Constructor: Método construtor --> responsável por nos dizer quais são os atributos (características) que os nossos jogos terão.
Métodos: São as ações que podemos fazer com os nossos objetos. */

class Jogo {
  constructor(titulo, genero, produtora, preco) {
    this.titulo = titulo;
    this.genero = genero;
    this.produtora = produtora;
    this.preco = preco;
  }

  Abrir() {
    console.log("Abrindo...");
  }
  Carregar() {
    console.log("Loading game...");
  }
  Fechar() {
    console.log("Pressione ESC para fechar o jogo!!");
  }
}

let g1 = new Jogo("Need for Speed Underground", "Corrida", "EA GAMES", 9.99);
console.log(g1);

g1.Abrir();
g1.Carregar();
g1.Fechar();
