/* While -> Enquanto 
Enquanto uma condição x for verdadeira meu programa terá determinado comportamento, ou seja, executará um determinado bloco de ações.
*/

const filmes = [
  "Click",
  "Efeito Borboleta",
  "Se Beber não case",
  "Recém-Casados",
  "O Máskara",
];

let index = 0;

while (index < filmes.length) {
  // length = Tamanho da lista

  console.log(index, filmes[index]);

  index++; //index = index + 1
}
