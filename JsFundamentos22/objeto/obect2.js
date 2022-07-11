//criando objeto pessoa
var person = new Object();

//declarando John como fristname.
person.fristname = 'John';

//declarando smith como lastname.
person.lastname = 'smith';

//criando son com o tipo com person!
person.son = new Object();

//declarando o fristname José que e do tipo objeto person, mas pertence ao objeto son.
person.son.fristname = 'José';

console.log(person);