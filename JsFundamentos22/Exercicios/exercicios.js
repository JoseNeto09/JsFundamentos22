/*-------------------------------------------------------------------------------*/
/* 
1# Crie uma matriz - alunos, insira quatro itens, que devem ser objetos e ter três propriedades: nome, pontuação1, pontuação2, com os seguintes valores:
a. Jhon, 47,46.
b. Bob, 23, 24.
c. Nick, 40, 35.
d. Alex, 44, 45.

2# Suponha que, os alunos têm chance de graus diferentes de diploma, como A,B,C,D,E e esses graus são relevantes para os seguintes limites de aprovação
91,81,71,61,51. De acordo com isso, crie duas matrizes para limites de passagem e para graus.

3# Crie uma função que calculará a pontuação total (pontuação 1 + pontuação 2) para cada aluno.
4# create function e use nela for loops if else declarações e o que você precisar, para descobrir qual aluno passou em um exame e que tipo de diploma ele obteve.
5# Exibir o resultado final no console.

*/
                    
/*--------------------------------RESULTADO--------------------------------------*/


var Alunos = [
    {
        name: 'Lucas',
        pontuaçao1: 47,
        pontuaçao2: 46,
    },
    {
        name:  'Fernanda',
        pontuaçao1: 23,
        pontuaçao2: 24,
    },
    {
        name:  'José',
        pontuaçao1: 40,
        pontuaçao2: 35,
    },
    {
        name:  'Alex',
        pontuaçao1: 44,
        pontuaçao2: 45,
    }
]

var scores = [ 91, 81, 71, 61, 51 ];

var graus = [ 'A', 'B', 'C', 'D', 'E' ];


function calcularSoma(scr1, scr2) {
    var soma = scr1 + scr2;
    return soma;

}

function calcularFinal(){
    for (let i = 0; i < Alunos.length; i++) {
        Alunos[i].calcular = calcularSoma(Alunos[i].pontuaçao1,
        Alunos[i].pontuaçao2);
        
        if (Alunos[i].calcular >= 51) {
            console.log(Alunos[i].name + ' Você passou no exame parabéns!! ');

            for (var x = 0; x < scores.length; x++) {

                if (Alunos[i].calcular >= scores[x]) {
                    
                    console.log(' Ele tem ' + Alunos[i].calcular + ' pontos e obteve diploma com grau ' + graus[x]);
                    console.log('--------------');
                    break;
                }
            }
        } else {
            console.log(Alunos[i].name + '   não conseguiu ' + Alunos[i].soma + ' tente novamente no proximo periodo.'); 
            console.log('--------------');
        }
    }
}

calcularFinal();


