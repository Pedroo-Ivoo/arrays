const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];
//Para unificar as listas utiliza-se o método concat() que irá criar uma nova array com o resultado das duas listas a ordem de qual lista inicia e qual irá terminar a nova lista fica  a cargo de  qual variavel que estará com o método concat e a outra fica no parâmetro.
const salasUnificadas =salaJS.concat(salaPython);
console.log(salasUnificadas)
const texte = salaPython.concat(salaJS);
console.log(texte)