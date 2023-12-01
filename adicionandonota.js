const notas = [10, 6 ,8];
//precisa adicionar um elemento que ficoi de fora. Utilziza o método push()
notas.push(7);
console.log(notas);

const media =(notas[0]+notas[1]+notas[2]+ notas[3])/notas.length;

console.log(media)
//Embora a media seja uma constante ela foi alterada pelo push por ser uma propriedade do Array e ele permite que seja alterado uma constante.