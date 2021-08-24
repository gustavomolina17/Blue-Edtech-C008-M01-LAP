voto = ano => {
    const atual = new Date();
    const anoAtual = atual.getFullYear();
    const idade = anoAtual - nascimento;




    if (idade < 16) {
        return console.log(`Com ${idade} anos o voto é NEGADO`);
    } else if (idade >= 16 || idade < 65) {
        return console.log(`Com ${idade} anos o voto é OBRIGATÓRIO`);
    } else {
        return console.log(`Com ${idade} anos o voto é OPCIONAL`);
    }
};

nascimento = prompt ("Digite seu ano de nascimento: ");
console.log(voto(nascimento));
