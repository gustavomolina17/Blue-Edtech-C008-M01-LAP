const catalogoFilmes = [
  //  Filme 01
  {
    nome: "Vingadores",
    duracao: 154,
    ano: 2012,
    atores: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson"],
  },

  // Filme 02

  {
    nome: "João e Maria: Caçadores de Bruxas",
    duracao: 98,
    ano: 2013,
    atores: ["João", "Maria", "Time da Bruxas"],
  },

  // Filme 03

  {
    nome: "Brinquedo Assassino",
    duracao: 90,
    ano: 2019,
    atores: ["Aubrey Plaza", "Gabriel Bateman", "Brian Tyree"],
  },

  // Filme 04

  {
    nome: "A Freira",
    duracao: 96,
    ano: 2018,
    atores: ["Taissa Farmiga", "Bonnie Aarons", "Jonas Bloquet"],
  },

  // Filme 05

  {
    nome: "Space Jam 2",
    duracao: 120,
    ano: 2021,
    atores: ["Lebron James", "Maverick Carter", "Equipe Looney Tunes"],
  },
];

for (const filme of catalogoFilmes) {
  console.log(filme);
}
