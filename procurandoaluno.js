const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibiNomeENota(aluno) {
  //o método includes() verifica se um item está na lista.
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];

    //Há um outro jeito de declarar essas duas variaveis em uma só em que na posição 0 do indice temos alunos e na posição 1 temos as médias. Chamada de sintaxe de desestruturação de listas.
    const [alunos, medias] = listaDeAlunosEMedias;

    //o método indexOf() serve para buscar na lista o elemento e saber qual é o valor atribuido a ele.
    //Lembrando que a lista começa no indice 0.
    const indice = alunos.indexOf(aluno);
   //A variavel media do aluno vai buscar na lista de média o indice do aluno que foi inserido no atributo. 
    const mediaDoAluno = medias[indice];
    
    console.log(`${aluno} tem a média de ${mediaDoAluno}`);
  } else {
    console.log("Aluno não está cadastrado");
  }
}
exibiNomeENota("Juliana");
