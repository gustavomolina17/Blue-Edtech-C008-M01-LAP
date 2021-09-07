// O for each é um método utilizado sob uma lista, logo ao usarmos o for each devemos usar também uma função.

let listanumeros = [17, 2, 8, 99, 3, 14, 20, 12, 13, 18];

function verificaPares(elemento) {
  if (elemento % 2 == 0) {
    console.log("O número: " + elemento + " é par.");
  } else {
    console.log("O número: " + elemento + " é impar");
  }
}

listanumeros.forEach(verificaPares);
