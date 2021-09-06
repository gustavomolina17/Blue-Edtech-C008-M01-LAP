const prompt = require("prompt-sync")();

// 1 - ARQUITETURA =  450.00;
// 2 - CIENCIADACOMPUTACAO  = 650.00;
// 3 - ENGENHARIA = 850.00;
// 4 - BIOMEDICINA = 750.00;

class alunogra {
  constructor(matricula, nome, dataNasc, codCurso, percentCobr) {
    this.matricula = matricula;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.codCurso = codCurso;
    this.percentCobr = percentCobr;
  }

  valorCurso() {
    this.percentCobr /= 100;
    if (this.codCurso == 1) {
      console.log(
        `O valor mensal do curso de Arquitetura ficará: R$${(
          450 * this.percentCobr
        ).toFixed(2)}`
      );
    } else if (this.codCurso == 2) {
      console.log(
        `O valor mensal do curso de Ciência da Computação será: R$${(
          650 * this.percentCobr
        ).toFixed(2)}`
      );
    } else if (this.codCurso == 3) {
      console.log(
        `O valor mensal do curso de Engenharia será: R$${(
          850 * this.percentCobr
        ).toFixed(2)}`
      );
    } else if (this.codCurso == 4) {
      console.log(
        `O valor mensal do curso de BioMedicina será: R$${(
          750 * this.percentCobr
        ).toFixed(2)}`
      );
    }
  }
}

// CIENCIAS EXATAS = 1.200,00

// CIENCIAS HUMANAS = 1.600,00

// EDUCAÇÃO = 2.000,00

// INOVAÇÃO TECNOLOGICA = 3.400,00
class alunopos extends alunogra {
  constructor(
    matricula,
    nome,
    dataNasc,
    codCurso,
    percentCobr,
    linhadePes,
    orientador,
    bolsaEst
  ) {
    super(matricula, nome, dataNasc, codCurso, percentCobr);
    this.linhadePes = linhadePes;
    this.orientador = orientador;
    this.bolsaEst = bolsaEst;
  }
  calculoPG() {
    if (this.linhadePes == 1) {
      console.log(
        `A mensalidade da linha de pesquisa em Ciências Exatas ficará no valor de: R$${(
          1200 - this.bolsaEst
        ).toFixed(2)}`
      );
    } else if (this.linhadePes == 2) {
      console.log(
        `A mensalidade da linha de pesquisa em Ciências Humanas ficará no valor de: R$${(
          1600 - this.bolsaEst
        ).toFixed(2)}`
      );
    } else if (this.linhadePes == 3) {
      console.log(
        `A mensalidade da linha de pesquisa em Educação ficará no valor de: R$${(
          2000 - this.bolsaEst
        ).toFixed(2)}`
      );
    } else if (this.linhadePes == 4) {
      console.log(
        `A mensalidade da linha de pesquisa em Inovação Tecnologica ficará no valor de: R$${(
          3400 - this.bolsaEst
        ).toFixed(2)}`
      );
    }
  }
}
let alunog1 = new alunogra(3214, "", "", 0, 100);
console.log("===> CÁLCULO MENSALIDADE DA GRADUAÇÃO <===");
console.log(`O numero da sua matricula para graduação é: ${alunog1.matricula}`);
alunog1.nome = String(prompt("Digite o seu nome: "));
alunog1.dataNasc = String(
  prompt("Digite a sua data de nascimento no formato DD/MM/AAAA: ")
);
console.log("----< Opções de curso disponiveis >----");
console.log("[1] - Arquitetura");
console.log("[2] - Ciência da Computação");
console.log("[3] - Engenharia");
console.log("[4] - BioMedicina");
console.log("=======================================");
alunog1.codCurso = parseInt(prompt("Digite o código do curso escolhido: "));
let pd = String(
  prompt("Você possui algum desconto no valor do curso [S/N]? ")
).toUpperCase();
if (pd[0] == "S") {
  alunog1.percentCobr -= parseInt(
    prompt("Digite o valor percentual de desconto que você adquiriu: ")
  );
}
alunog1.valorCurso();
let alunopg = new alunopos(2313, "", "", 0, 100, 0, "", 0);
console.log("===> CÁLCULO MENSALIDADE DA POS GRADUAÇÃO <===");
console.log(
  `O numero da sua matricula para pos graduação é: ${alunopg.matricula}`
);
alunopg.nome = String(prompt("Digite o seu nome: "));
alunopg.dataNasc = String(
  prompt("Digite a data de nascimento no formato DD/MM/AAAA: ")
);
console.log("---< Digite o curso de graduação que você concluiu >---");
console.log("[1] - Arquitetura");
console.log("[2] - Ciência da Computação");
console.log("[3] - Engenharia");
console.log("[4] - BioMedicina");
console.log("=======================================");
alunopg.codCurso = parseInt(
  prompt("Digite o código do curso em que você ja se formou: ")
);
console.log("===> LINHAS DE PESQUISA PÓS GRADUAÇÃO <===");
console.log("[1] - Ciências Exatas");
console.log("[2] - Ciências Humanas");
console.log("[3] - Educação");
console.log("[4] - Inovação Tecnologica");
console.log("=======================================");
alunopg.linhadePes = parseInt(
  prompt("Digite a escolha da linha de pesquisa deseja cursar: ")
);
alunopg.orientador = String(
  prompt("Digite o nome do orientador do seu curso: ")
);
let vb = String(
  prompt("Você possui alguma bolsa de estudo [S/N]? ")
).toUpperCase();
if (vb[0] == "S") {
  alunopg.bolsaEst = parseFloat(prompt("Digite o valor da sua bolsa: R$ "));
}
alunopg.calculoPG();
