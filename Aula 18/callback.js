// O nosso callback deve ser passado como um parâmetro da função enviarEmail

function enviarEmail(corpo, para, callback) {
  setTimeout(function () {
    console.log(`
  
          Para: ${para}
          -----------------------------------------------------------------------
          ${corpo}
          -----------------------------------------------------------------------
          De: Gustavo Molina
  
           `); // template literals
    callback();
  }, 5000); //5000ms correspondem a 5s de espera
}

console.log("Início do envio do email!");

// Nesse caso o callback só será executado após termos certeza que o email foi enviado e que está tudo ok.

enviarEmail(
  "Parabéns você ganhou um cupom de desconto de R$0,99",
  "freddy_mercurie@blue.com",
  function () {
    console.log("Seu email foi enviado, deve chegar em minutos.");
    console.log("TUDO OK.");
  }
);
