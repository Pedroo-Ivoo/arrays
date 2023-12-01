const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
//new Set() ele não permite que os elementos do Set não podem repetir.

const mostraSet = new Set([1,1,1,2,3,4,4,5]);
console.log(mostraSet);
//Assim teremos a lista sem repetições, contudo ainda ira aparecer SET no console.
const meuSet = new Set(nomes);
console.log(meuSet);
// Para Resolver isso iremos criar uma nova variavel que irá receber o resultado do Set. [... variavel]
const novoSet = [...meuSet];
console.log(novoSet)
