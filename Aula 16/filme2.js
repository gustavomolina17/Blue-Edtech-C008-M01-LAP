/*  Atributos do objeto filme: título, ano, gênero, diretor, atores, duração */

// Responsável pela criação dos objetos

class Filmes {
  // TODA classe TEM um CONSTRUTOR!!!!

  constructor() {
    this.titulo = "";
    this.ano = 0;
    this.genero = "";
    this.diretor = "";
    this.atores = [];
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

class Dvd extends Filmes {
  constructor(titulo, ano, genero, diretor, atores, duracao) {
    // para reutilizar tudo que vem da classe mãe
    super(titulo, ano, genero, diretor, atores, duracao);
    this.preco = 0;
  }

  Musica() {
    // Método exclusivo da classe DVD
    console.log("Tocando a trilha sonora.....");
  }
}

// Instanciando (Criando) o nosso objetos
// Esse modo de fazer, é mais prático quando utilizamos o prompt para que o usuário preencha os campos com base na classe (como se fosse um cadastro).

let click = new Filmes();
click.titulo = "Click";
click.ano = 2006;
click.genero = "Drama";
click.diretor = "Frank Coraci";
click.atores = ["Adan Sandler", "Kate Beckinsale", "Christopher Walken"];
click.duracao = 107;

let dv1 = new Dvd();
dv1.titulo = "IT";
dv1.ano = 2010;
dv1.genero = "Terror";
dv1.diretor = "Seu Zé";
dv1.atores = ["Zé do Caixão", "Penny Wise"];
dv1.duracao = 190;
dv1.preco = 1.99;

console.log(dv1);
dv1.Musica();
dv1.console.log(click); // Para visualizar todo o conteúdo
click.Reproduzir();
click.Pausar();
click.Avancar();
click.Fechar();
