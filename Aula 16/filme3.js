const prompt = require("prompt-sync")();

class Filmes {
  // TODA classe TEM um CONSTRUTOR!!!!

  constructor() {
    this.titulo = "";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.ator = "";
    this.duracao = 0;
  }

  // Criando os nossos métodos

  Reproduzir() {
    console.log("Reproduzindo o filme...");
  }
  Pausar() {
    console.log("Pausado || ");
  }
  Avancar() {
    console.log("Avançar >>");
  }
  Fechar() {
    console.log("Fechar X ");
  }
}

let click = new Filmes();

// Para inserir um outro cursor na tela pressionar

click.titulo = String(prompt("Digite o título do filme: "));
click.ano = parseInt(prompt("Digite o ano de lançamento do filme: "));
click.genero = String(prompt("Digite o gênero do filme: "));
click.diretor = String(prompt("Digite o nome do diretor do filme: "));
click.ator = String(prompt("Digite o nome do ator principal do filme: "));
click.duracao = parseInt(prompt("Digite a duração do filme em minutos: "));

console.log(click);
