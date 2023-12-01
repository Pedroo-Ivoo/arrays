const notas = [10, 9.5, 8, 7, 6];
//Utilizaremos um novo método de laço de repetição chamando map() funciona de forma semelhante ao forEach(). É possível alterar o valor da array com o map, contudo ele não altera a array original, sendo necessário a criação de nova array.
const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});
console.log(notasAtualizadas);
// No Caso abaixo utilizamos o toUpperCase para deixar todas as letras maiusculas criando uma array padronizada. Esse método map + toUpperCase ou toLowerCase podem ser uteis em verificação de senha de acesso para poder realizar a checagem correta.

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesCorrigidos = nomes.map((nome) => {
  return nome.toUpperCase();
});
console.log(nomesCorrigidos);

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10
   }
//Aqui temos um outra forma de fazer o callback chamando a função criada para executada. Dependendo do projeto pode ser importante que utilizar assim para a manutenção do código.
const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)