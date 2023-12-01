const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
//Aqui iremos criar uma lista que contém duas listas.
const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);
//Mas e eu quiser acessar a Juliana nessa nova listas que contém duas listas. Para isso utiizaremos na variavel listaDeAlunosEMedias os [] na posição 0, pois a lista de alunos está nessa posição e após colocamos mais um [] com a posição 1. Veja acessa a lista depois o informamos o item que queremos selecionar dentro dela.
console.log(`A aluna da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]} e media dela é ${listaDeAlunosEMedias[1][1]}`);