const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
// forEach() É um metodo de repetição que recebe uma função anonima que fica como parâmetro da forEach. 
//Quando uma função é parâmetro  de outra função é chamada de callback(chamar de volta). Pois uma chama a outra. Para cada elemento do array de notas ele chama o console log "oi".
notas.forEach(() => {
    console.log("oi")
    
});
//Na lógica interna do forEach para cada loop ele atribui aos elementos da array o valor nota e retorna no console correspondente.
notas.forEach((nota) => {
    console.log(nota)
    
});
//A vantangem do forEach() tem uma vantagem em relação ao for of, pois é possível passar mais de um parâmetro na função, por exemplo utilizando o indice.
notas.forEach((nota, indice) => {
    somaDasNotas += nota;
    console.log(indice)
});

const media = somaDasNotas / notas.length
console.log(`A média das notas é ${media}`)