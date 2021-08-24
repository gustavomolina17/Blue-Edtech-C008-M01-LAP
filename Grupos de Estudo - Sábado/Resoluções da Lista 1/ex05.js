const nota = +prompt("Qual a nota [0.0 - 10.00]: ");

if (nota >= 0 && nota <= 10) {
    if (nota < 6) {
        console.log(`Sua nota é ${nota} e seu conceito foi F`);
    } else if (nota < 7) {
        console.log(`Sua nota é ${nota} e seu conceito foi D`);
    } else if (nota < 8) {
        console.log(`Sua nota é ${nota} e seu conceito foi C`);
    } else if (nota < 9) {
        console.log(`Sua nota é ${nota} e seu conceito foi B`);
    } else {
        console.log(`Sua nota é ${nota} e seu conceito foi A`);
    }
} else {
    console.log("Nota inválida!");
}
console.log("Pronto");
