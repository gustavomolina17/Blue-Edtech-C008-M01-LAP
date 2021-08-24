const prompt = require("prompt-sync")();

const vidaMonstro = +prompt("Digite a quantidade de vida do monstro (entre 10 e 50): ");
const ataqueJogador = +prompt("Digite o valor de ataque do jogador (entre 5 e 10): ");

const turnosNecessarios = Math.ceil(vidaMonstro / ataqueJogador);

console.log(`O jogador irá precisar de ${turnosNecessarios} turnos para derrotar o monstro.`);