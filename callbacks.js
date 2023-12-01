const nomes = ["Pedro", "Ivo", "Alice"];
//Nesse caso a função callback está dentro do forEach
nomes.forEach((nome) => {
  console.log(nome);
});

//É possível usar a função callback externa.
//Primeiro cria a função e só é chamada dentro do forEach. Assim se pode ter melhor controle para possíveis manutenções.
function imprimeNome(nome) {
    console.log(nome)
    
}

nomes.forEach(imprimeNome);