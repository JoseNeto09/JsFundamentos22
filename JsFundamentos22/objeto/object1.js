//criando objeto pessoa
var pessoa = new Object();

//criando variavel profição
var job = 'professional'; 

//declarando fristname como José.
pessoa.fristname = 'José';

//declarando lastname com o nome lopes no objeto tipo pessoa
pessoa['lastname'] = 'lopes';

// passando a variavel job para o objeto tipo pessoa e declarando professor dentro do tipo pessoa.
pessoa[job] = 'professor';

//Exibindo os dados do objeto tipo pessoa
console.log(pessoa);

//passando nome do objeto tipo para pessoa.fristname
console.log(pessoa.fristname);

//Exibindo o primeiro nome do objeto que no caso e José junto o lastname.
console.log(pessoa['lastname']);
