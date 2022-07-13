var pessoa1 = {};
pessoa1.Fristname = 'José';
pessoa1.Lastname = 'neto';

var pessoa2 = {};
pessoa2.Fristname = 'Jayane';
pessoa2.Lastname = 'de fatima';


function createPessoa() {
    var novaPessoa = {};
    novaPessoa.Firstname = 'Vinicius';
    novaPessoa.Lastname = 'lopes';
    return novaPessoa;
}


var pessoa3 = createPessoa();


console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
