// criando objeto do tipo pessoa.
var pessoa = {
    fritname: 'John', 
    lastname:'Smith',
    age: 34,
    
    // criando filha do tipo pessoa.
    filha:{
        name: 'Jane',
        age: 17
    },

    // criando função dentro do tipo pessoa, que era extender dados do tipo filha.
    myFunc: function(par){
        console.log(par.Nomefilha +' e Filha do '+ par.NomePai + ' e ela tem ' + par.idadeFilha + ' anos de idade.');
    }
};

// exibindo objeto do tipo pessoa com todos as especificações.
console.log(pessoa);

// dando espaço no console.log(pessoa);
console.log(" ");

// exibindo nome do tipo filha raiz.
console.log(pessoa.filha.name);

//utilizando myFunc para criar objeto do tipo filha.
pessoa.myFunc({Nomefilha:'laura', NomePai:'michael', idadeFilha:15})
pessoa.myFunc({Nomefilha:'clarice', NomePai:'sinval', idadeFilha:52})
