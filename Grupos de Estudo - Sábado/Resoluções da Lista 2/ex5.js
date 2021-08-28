function atravessaRua(X, Y, Z) {
  let valor = (Y - X) / Z;
  if (Number.isInteger(valor)) {
    return valor;
  } else {
    valorCorreto = Math.floor(valor + 1);
    return valorCorreto;
  }
}
