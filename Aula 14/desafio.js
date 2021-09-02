const prompt = require("prompt-sync")({ sigint: true });
const dados = {};
dados.nome = prompt("Nome: ");
const nasc = prompt("Ano de nascimento: ");
const anoAtual = new Date().getFullYear();
dados.idade = anoAtual - nasc;
dados.ctps = parseInt(prompt("Num. CTPS: "));
if (dados.ctps != 0) {
  dados.contratacao = parseInt(prompt("Ano da contratação: "));
  dados.salario = parseInt(prompt("Salário: R$ "));
  dados.aposentadoria = dados.contratacao + 35 - anoAtual + dados.idade;
}

console.log(dados);
