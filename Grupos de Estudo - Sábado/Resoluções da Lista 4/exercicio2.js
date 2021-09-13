function dobrarEm5Segundos(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 5000);
  });
}

async function addAsync(x) {
  let a = await dobrarEm5Segundos(10);
  let b = await dobrarEm5Segundos(20);
  let c = await dobrarEm5Segundos(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});