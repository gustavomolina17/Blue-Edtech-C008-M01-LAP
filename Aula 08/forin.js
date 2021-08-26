//Laço for in

/*for (variável) in objeto{

    código a ser executado
}
*/

// Lista -> let filme = ["Chuck","IT"]

let carro = { modelo: "A3 Sedan", marca: "Audi", ano: 2022 }; //Dicionário

for (let caracteristicas in carro) {
 
  console.log(caracteristicas +":" + carro[caracteristicas])
   
}

//

/*modelo: A3 Sedan

marca: Audi

ano: 2022 */