// Promise em JavaScript é como uma promessa na vida real.
// É algo que irá acontecer no futuro
// e essa promessa pode falhar e ser rejeitada
// A promise recebe uma função com parâmetros resolve e reject
function soma(a, b) {
  let p = new Promise((resolve, reject) => {
    let result = a + b;
    if (result % 2 === 0) {
      resolve("Sucesso! " + result + " = Número Par!");
    } else {
      reject("Falha! " + result + " = Número Ímpar!");
    }
  });

  p.then((message) => {
    console.log(message);
  }).catch((err) => {
    console.log(err);
  });
}

soma(10, 12);
