/* Extraimos fatias de uma string através do método slice(). Passando como parâmetro, a posição do caractere onde se dará o início e o fim do corte.
Assim como em arrays, a contagem das posições em caracteres de uma string começa de zero.
Posição de caracteres em String JavaScript.
Ficará mais fácil prever o retorno do método, se você imaginar que o corte será feito sempre à esquerda do caractere, nas posições informadas como limite.
Se estivermos interessados no primeiro caractere, faremos assim:
*/

const nome = "Fulano";
console.log(nome.slice(0, 1))
// retorna a primeira letra, F


console.log(nome.slice(0, 3))
// retorna a primeira, a segunda e a terceira letra. Fulano

// Se quisermos do 2º ao 4º caractere, faremos:
console.log(nome.slice(1, 4))