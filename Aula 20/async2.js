function primeiraFuncao() {
  console.log("Esperou isso");
}

async function segundaFuncao() {
  console.log("INICIOU");

  await primeiraFuncao();

  console.log("Agora executou isso !!!");
}

segundaFuncao();
