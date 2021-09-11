/* 

Promises: Evolução das callbacks, é uma forma mais "sofisticada" de trabalharmos com programação assíncrona.

A promise é uma callback "gourmet".

As promises são cada vez mais utilizadas no dia a dia do programador js. Elas são utilizazadas no React (BIBLIOTECA js), Angular, Vue.js, Express, Node.js, entre outros.

Promise:

Promessa (Podemos fazer uma analogia com o mundo real): Sempre que "prometemos" algo  para alguém existem 2 possibilidades: cumprir com o prometido (RESOLVE) ou não cumprir (REJECT).

Email => Resolve: "OK" - Reject: "Falha ao enviar o email"

Save => Resolve: "Dados salvos" - Reject: Falha ao salvar os dados.

*/

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let deuerro = true;

      if (!deuerro) {
        resolve(); // Promessa OK!
      } else {
        reject(); // Foi mal, eu falhei na missão :(
      }
    }, 5000);
  });
}

// Usamos o .then para que o programa execute as ações que eu quiser quando a promise for RESOLVE.

// Usamos o .catch para fazer o tratamento da promise, ou seja, como o meu programa deve se comportar quando status da promise = REJECT.

enviarEmail("Olá Bluemers ;) ", "avestruzqueteseduz@gmail.com")
  .then(function () {
    console.log("OPA, você fez o que PROMETEU!!!");
  })
  .catch(function () {
    console.log("QUE PENA, dessa vez não rolou.");
  });
