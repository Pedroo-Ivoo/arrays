const notas = [10, 6, 8, 5.5, 10];
//precisa remover o último item. Utiliza o método pop(). Ele irá remover o último elemento da lista do array Sem precisar declarar.
notas.pop()
console.log(notas)
const media = (notas[0] + notas[1]+ notas[2]+ notas[3])/ notas.length;
console.log( `A média é ${media.toFixed(2)}` );