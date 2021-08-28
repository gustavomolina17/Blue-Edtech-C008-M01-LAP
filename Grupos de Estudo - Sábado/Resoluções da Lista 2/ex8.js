let numero = +prompt(
  "Pressione enter para exibir todas as tabuadas do 1 ao 10: "
);
function ImprimirTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    const linha = numero + " x " + i + " = " + numero * i;
    console.log(linha);
  }
}
for (let i = 1; i <= 10; i++) {
  ImprimirTabuada(i);
  console.log("");
}
