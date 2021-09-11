/* Async / Await

Async: Essa palavra pode ser usada ao criarmos uma função convencional. Quando adicionamos esse identificador  na criação desta função, nós definimos que ela será uma FUNÇÃO ASSÍNCRONA, ou seja, nos retornará UMA PROMISE.

Await: Essa palavra será usada com o objetivo DE ESPERAR a resolução de uma função assíncrona. Se houver uma série de série de funções assíncronas, o await  definirá que o código só terá sequência  quando a função anterior for resolvida. O await só poderá ser usado com ASYNC FUNCTIONS (funções assincronas)

*/

// joinStrings: Irá realizar a concatenação de 2 strings. Ela foi criada com o indentificador ASYNC, deixando claro que se trata de uma função assíncrona.

// A função init()  irá realizar a chamada dela, mas com o identificador await. Percebam que nesse caso usamos o método .then() após chamar a função, como fazemos em uma promise.

async function joinStrings(string1, string2) {
  return string1 + "" + string2;
}

async function init() {
  await joinStrings("Blue", "Edtech").then(function (result) {
    console.log(result);
  });
}

init();
