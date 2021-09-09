// Programas Síncronos -> Programas que fizemos até a aula 17, ou seja, são executados e trazem um resultado "na hora."

// Programas Assíncronos-> As coisas não acontecem no mesmo momento.

// 1º:Precisamos criar uma função responsável pela simulação do envio do email.

// A função setTimeout serve para reaizar ações depois de um determinado tempo.
// Precisamos passar uma FUNÇÃO ANÔNIMA como parâmetro do setTimeout.

function enviarEmail(corpo, para) {
  setTimeout(function () {
    console.log(`

        Para: ${para}
        -----------------------------------------------------------------------
        ${corpo}
        -----------------------------------------------------------------------
        De: Gustavo Molina

         `); // template literals
  }, 4000); //4000ms correspondem a 4s de espera
}

console.log("Início do envio do email!");

enviarEmail(
  "Parabéns você ganhou um cupom de desconto de R$0,99",
  "freddy_mercurie@blue.com"
);

console.log("Seu email foi enviado, deve chegar em minutos.");
console.log("TUDO OK.");
