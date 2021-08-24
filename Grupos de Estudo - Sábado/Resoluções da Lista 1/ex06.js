function area(largura, comprimento) {
    area = largura * comprimento;
    console.log(`A área de um terreno ${largura} x ${comprimento} é de ${area}m²`);
}

let largura = +prompt("Largura: ");
let comprimento = +prompt("Comprimento: ");
area(largura, comprimento);
