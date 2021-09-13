let age = parseInt(prompt("Digite sua idade: "), 10);

function verificar(age) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

verificar(age)
  .then(function () {
    console.log("Parabéns cara você já é maior de idade.");
  })
  .catch(function () {
    console.log("Você precisa comer ainda muito feijão com arroz!!");
  });
