function enviarEmail(corpo, para, callback) {
  setTimeout(function () {
    console.log(`
    
            Para: ${para}
            -----------------------------------------------------------------------
            ${corpo}
            -----------------------------------------------------------------------
            De: Gustavo Molina
    
             `); // template literals

    // Posso atribuir quantos parâmetros eu quiser na minha callback.
    // Na prática isso ocorre de forma dinâmica.
    // Para cada parâmetro passado na callback, o mesmo também precisa ser passado na function

    callback("OK", 1, "5s", "Gustavo");
  }, 5000); //5000ms correspondem a 5s de espera
}

console.log("Início do envio do email!");

enviarEmail(
  "Parabéns você ganhou um cupom de desconto de R$0,99",
  "freddy_mercurie@blue.com",
  function (status, amount, time, name) {
    console.log(`

        De: ${name}
        Status: ${status}
        ------------------------------
        Contatos: ${amount}
        -------------------------------
        Tempo de espera: ${time} 
        `);

    console.log("Tudo OK!!!!");
  }
);
