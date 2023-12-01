//A proposta aqui é copiar um array sem alterar o teu conteudo.
//Como foi realizado abaixo a nova variavel altera as duas arrays e não mantem a variavel notas no formato original.

const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`)
// console.log(`As notas originais são ${notas}`)

//Agora vamos [...] esse é operador do js que se chama spread operator ou operador de espalhamento, Pega os conteudo do array e espalha dentro daquel array. Como se ele copiasse o valor da array e "colasse" no novo array sem alterar a array original.

const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)