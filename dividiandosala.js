const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];
//o método slice "fatia" a lista sendo o inicio da lista o primeiro parametro e o segundo parâmetro é o valor anterior a ele. No caso como coloquei 10 o item incluso é o 9.
//Ou seja, inclui o primeiro e não inclui o valor do segundo. O slice não altea o array original e criará um novo array.

// const sala1 = alunos.slice(0,10)
// console.log(sala1)

//Quando não informamos o segundo parâmetro o JS já entende que queremos ir até o final da lista. Poderia informar o valor se quiser, é claro.

// const sala2 = alunos.slice(10);
// console.log(sala2)
// console.log(alunos)

//Para deixar mais dinâmico podemos utilizar o .length dentro do parâmetro. Assim se a lista aumentar ou diminuir ele irá se ajusta de acordo com o valor dela.
const sala1 = alunos.slice(0,alunos.length /2);
const sala2 = alunos.slice(alunos.length/2);
console.log(sala1)
console.log(sala2)