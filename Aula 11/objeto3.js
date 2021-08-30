let pessoa = {
  nome: "Renato Pordeus Furtado",
  idade: 17,
  genero: "Masculino",
};

pessoa.interesses = ["Vestibular", "Cinema", "Dinheiro", "Programação"];

// Criando uma função anôninima chamada bio para o nosso objeto.

// .this --> É usado, pois, nos referimos ao objeto atual, ou seja, o objeto pessoa. Apresenta valor semântico ao nosso código.

pessoa.bio = function () {
  return `Meu nome é ${this.nome}, tenho ${this.idade}, sou do gênero ${this.genero} e gosto de ${this.interesses[0]}, ${this.interesses[1]}, ${this.interesses[2]} e ${this.interesses[3]}.`;
};

console.log(pessoa.bio());
