function mediaArray(array) {
  let n = array.length;
  let soma = 0;
  for (let i = 0; i < n; i++) {
    soma += array[i];
  }
  return soma / n;
}

const array = [9, 8, 7];
let media = mediaArray(array);
console.log(`A mediaArray é: ${media}`);
