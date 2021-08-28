//Faça um script que retorne:

// NÃO vale fazer 10 consoles log NEM ALERT.

/*0 - 10
1 - 9
2 - 8
3 - 7
4 - 6
5 - 5 
6 - 4 
7 - 3
8 -  2 
9 -  1 
10 - 0*/

//Solução 01

let i2 = 10;
for (let i = 0; i < 11; i++) {
  console.log(`${i} - ${i2 - i}`);
}

//Solução 02

console.log("Solução 02");
let count = 0;
let count2 = 10;

for (count; count < 11; count++) {
  console.log(`${count} - ${count2}`);
  count2--;
}

//Solução 03

console.log("Solução 03");

let numeros = [
  "0-10",
  "1-9",
  "2-8",
  "3-7",
  "4-6",
  "5-5",
  "6-4",
  "7-3",
  "8-2",
  "9-1",
  "10-0",
];

console.log(numeros);

// Solução 04

console.log("Solução 4");
let numero1 = 0;
let numero2 = 10;

for (let contador1 = 0; contador1 < 11; contador1++) {
  console.log(`${numero1} - ${numero2}`);

  numero1 = numero1 + 1;

  numero2 = numero2 - 1;
}

console.log("\nFIM");

//Solução 05

console.log("Solução 5");

function mostrar(a, b) {
  console.log(`${a} - ${b}`);
}

let a = 0;
let b = 10;
for (let i = 0; i < 11; i++) {
  mostrar(a, b);
  a++;
  b--;
}
