const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];
//O método filter é utilizado para filtrar os elementos de uma lista. 
//Utiliza também o callback podendo ter mais de um parâmetro. Se por acaso, não precisar utiliza o primeiro parâmetro e apenas o segundo, pode se utilizar "_" como parâmetro. No exemplo abaixo estamos verificando quem foi reprovado. E o método filter retorna uma nova array.
const reprovados = alunos.filter((_, indice) =>{
    return medias[indice] < 7;
})

console.log(reprovados)