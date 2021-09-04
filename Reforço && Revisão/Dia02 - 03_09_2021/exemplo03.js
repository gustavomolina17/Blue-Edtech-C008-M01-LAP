// Pegando a chave (propriedade) e o conteúdo do meu objeto

let filme = { nome: "Sexta-Feira 13", ano: 1980, genero: "Terror" };

for (let informacoes in filme) {
  console.log(informacoes + " : " + filme[informacoes]);
}
