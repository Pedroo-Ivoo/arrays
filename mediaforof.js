const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
//for of é uma estrutura parecida com o for. Ele é feito de uma só expressão.
//For of Para cada "nota" de  "notas" execute o código que está na chaves. Ele funciona quando a gente quer percorrer todo array.  O for tradicional serve para situações mais complexos.
for (let nota of notas) {
    somaDasNotas += nota;
    console.log(somaDasNotas);
}
const media = somaDasNotas / notas.length
console.log(`A média das notas é ${media}`)