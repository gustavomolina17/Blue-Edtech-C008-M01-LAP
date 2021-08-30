const filme01 = {
  nome: "Vingadores",
  duracao: 154,
  ano: 2012,
  atores: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson"],
  dados() {
    return `O filme ${this.nome}, tem duração de ${this.duracao} minutos, foi lançado em ${this.ano} e seus atores principais são: ${this.atores}.`;
  },
};

const filme02 = {
  nome: "João e Maria: Caçadores de Bruxas",
  duracao: 98,
  ano: 2013,
  atores: ["João", "Maria", "Time da Bruxas"],
  dados() {
    return `O filme ${this.nome}, tem duração de ${this.duracao} minutos, foi lançado em ${this.ano} e seus atores principais são: ${this.atores}.`;
  },
};

const filme03 = {
  nome: "Brinquedo Assassino",
  duracao: 90,
  ano: 2019,
  atores: ["Aubrey Plaza", "Gabriel Bateman", "Brian Tyree"],
  dados() {
    return `O filme ${this.nome}, tem duração de ${this.duracao} minutos, foi lançado em ${this.ano} e seus atores principais são: ${this.atores}.`;
  },
};

const filme04 = {
  nome: "A Freira",
  duracao: 96,
  ano: 2018,
  atores: ["Taissa Farmiga", "Bonnie Aarons", "Jonas Bloquet"],
  dados() {
    return `O filme ${this.nome}, tem duração de ${this.duracao} minutos, foi lançado em ${this.ano} e seus atores principais são: ${this.atores}.`;
  },
};

const filme05 = {
  nome: "Space Jam 2",
  duracao: 120,
  ano: 2021,
  atores: ["Lebron James", "Maverick Carter", "Equipe Looney Tunes"],
  dados() {
    return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
  },
};

console.log(filme01.dados());
console.log();
console.log(filme02.dados());
console.log();
console.log(filme03.dados());
console.log();
console.log(filme04.dados());
console.log();
console.log(filme05.dados());
