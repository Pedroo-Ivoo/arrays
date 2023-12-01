const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
//Utilizando o método reduce() para reduzir os elementos de um array a um único valor.
//Ele recebe dois parâmetros 1 a função callback e a segunda  o parâmetro 0 é o valor inicial do acumulador
//O parâmetro acumulador "guarda" o valor em cada laço de repetição .

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) =>{
        return acumulador + nota;
    }, 0)

    const media = somaDasNotas / notasDaSala.length;
    return media;
}


console.log(`A média da sala JavaScript é ${calculaMedia(salaJS)}`)
console.log(`A média da sala Java é ${calculaMedia(salaJava)}`)
console.log(`A média da sala Python é ${calculaMedia(salaPython)}`)