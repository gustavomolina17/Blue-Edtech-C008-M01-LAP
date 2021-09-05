class Filme {
  constructor() {
    this.titulo = "";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.atores = [];
    this.duracao = 0;
  }

  Reproduzir() {
    console.log("Reproduzindo...");
  }
  Pausar() {
    console.log("Pausado || ");
  }
  Avancar() {
    console.log("Avançar >> ");
  }
  Fechar() {
    console.log("Fechar X ");
  }
}

let vingadores = new Filme();
vingadores.titulo = "Vingadores Ultimato";
vingadores.ano = 2019;
vingadores.genero = "Ação";
vingadores.diretor = "Facebookson Silva";
vingadores.atores = ["Ator1", "Ator2", "Ator3", "Ator4"];
vingadores.duracao = 180;

vingadores.Reproduzir();

let starwars = new Filme();

starwars.Pausar();

let it = new Filme();

it.Pausar();
it.Avancar();
it.Reproduzir();

console.log(vingadores);
