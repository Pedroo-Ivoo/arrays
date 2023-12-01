const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
//o método splice() que significa emendar ou juntar, permitindo alteraçãos nas arrays Se eu for remover a Ana, o indice é 1 este é o primeiro parâmetro que vai iniciar o "corte" o segundo parâmetro diz a quantidade de itens que irão ser removidos. No nosso caso 2 (Ana e caio)


//Para adicionar novos nomes poderia utilizar o push() que será inserido no final da lista. E se quiser colocar em outro local? podemos usar o splice com terceiro parâmentro que irá fazer a inclusão no local em que os itens foram removidos.
nomes.splice(1,2, "Rodrigo")
console.log(nomes)
//O splice altera a array original. Se o splice for splice(1,0, Pedro) não haverá remoção de nenhum elemento da lista e apenas a inclusão do Nome do terceiro parâmetro.