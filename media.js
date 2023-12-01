
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1+nota2+nota3+nota4)/4
console.log(media);
//Embora esteja correto o cálculo para escalar em projetos grandes é inviavel. O melhor é usa arrays.

const notas= [10, 6.5 ,8 ,7.5];
// const mediaArray =(notas[0] + notas[1] + notas[2] +notas[3]) /4
// console.log(mediaArray)
//Na solução acima temos que inserir o número do divisor 4 para saber a média. E na hipótese de ter uma lista muito grande? Teriamos que contar todos os itens para saber o número para dividir? O JS permite usar um métido do length(que podemos dizer que significa tamanho.)

const mediaArray =(notas[0]+notas[1]+notas[2]+notas[3])/ notas.length
console.log(mediaArray)
