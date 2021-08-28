function inverterArray(array) {
  const array2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    array2.push(array[i]);
  }
  return array2;
}
const array = [1, 2, 3];
const array2 = inverterArray(array);
console.log(`O Array invertido ficou: ${array2}`);
