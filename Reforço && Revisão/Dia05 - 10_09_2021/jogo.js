// Classe -> Responsável pela criação dos nossos objetos

// SEMPRE temos um CONSTRUTOR em nossas classes

// Dentro do construtor temos os atributos (características do meu objeto).

class Jogo {
  constructor(titulo, genero, produtora, preco) {
    this.titulo = titulo;
    this.genero = genero;
    this.produtora = produtora;
    this.preco = preco;
  }

  // Métodos -> Ações do objetos

  Abrir() {
    console.log("Abrindo ...");
  }
  Carregar() {
    console.log("Carregando o jogo...");
  }
  Fechar() {
    console.log("Fechando...");
  }
}

// Instanciando (criando) o nosso objeto

let jogo = new Jogo("Need for Speed Underground", "Corrida", "EA Games", 8.99);

console.log(jogo);
jogo.Abrir();
jogo.Carregar();
jogo.Fechar();

console.log();

let jogo2 = new Jogo(
  "Sonic the Hedgehog 4",
  "Arcade/Plataforma",
  "Sega",
  18.99
);

console.log(jogo2);

// Herança: A classe Dvd (classe filha) vai HERDAR TUDO de Jogo (classe mãe)

class Dvd extends Jogo {
  constructor(titulo, genero, produtora, preco, capa, tamanho) {
    super(titulo, genero, produtora, preco);
    this.capa = capa;
    this.tamanho = tamanho;
  }
  // Posso criar métodos personalizados
  TocarMusica() {
    console.log("Tocando Evidências...");
  }
  // Posso modificar os métodos herdados
  Carregar() {
    console.log("Carregando o trailer de Vingadores...");
  }
}

let dvd = new Dvd(
  "Barões da Pisadinha 2021 Acústico",
  "Brega",
  "Fundo de Quintal",
  39.99,
  "Bonita",
  4
);
dvd.TocarMusica();
dvd.Carregar();
console.log(dvd);
