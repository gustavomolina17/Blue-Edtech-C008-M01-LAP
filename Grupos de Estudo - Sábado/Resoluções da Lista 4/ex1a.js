function somar(a, b){
    let result = a + b;

    if (result % 2 === 0){
        callbackSucesso();
    } else {
        callbackError();
    }
}

function callbackSucesso(){
    console.log('Sucesso! Número Par!');
}

function callbackError(){
    console.log('Falha! Número Ímpar!');
}

somar(6, 3);
