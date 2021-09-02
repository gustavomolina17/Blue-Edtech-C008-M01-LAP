const prompt = require("prompt-sync")({ sigint: true });

const aluno = {};

aluno.nome = prompt("Nome: ");
aluno.media = prompt("Media: ");

if (aluno.media >= 7) {
  aluno.situacao = "Aprovado";
} else if (aluno.media >= 5 || aluno.media > 7) {
  aluno.situacao = "Recuperação";
} else {
  aluno.situacao = "Reprovado";
}

console.log(aluno);
