// Uma função anônima é uma função sem nome.

//Uma função anônima geralmente não está acessível após a sua criação.

//Exemplo 01 -> Como precisamos chamar a função anônima em algum momento, atribuímos essa função a uma variável, nesse caso à variável show.

let show = function () {
  console.log("Esse é um exemplo de função anônima");
};

show();

//Costumamos usar funções anônimas como argumentos de outras funções.

// Exemplo 02 -> Passamos por argumento uma função anônima para a função setTimeout(). A função anônima passa a ser então um parâmetro da função setTimeout. A função setTimeout() executa essa função anônima um segundo depois.

setTimeout(function () {
  console.log("Função executada após 3s");
}, 3000);

//Se você deseja criar uma função e executá-la imediatamente após a declaração, pode usar a função anônima parecida com o Exemplo 03.

// Exemplo 03

(function () {
  console.log("Função executada após a declaração");
})();
